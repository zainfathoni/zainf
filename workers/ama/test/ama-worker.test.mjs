// Contract tests for the AMA Worker handler. Run from the repository root with:
//   node --test workers/ama/test/ama-worker.test.mjs
//
// The handler is imported directly. Only two dependencies are faked:
// - global fetch, for Turnstile Siteverify (a test-only stub; the live dummy keys
//   return hostname "example.com" and no action, so they cannot prove the success path);
// - D1, with a minimal in-memory fake that understands the two bound statements the
//   Worker uses. Real local D1 migrations and restart persistence are checked with
//   `wrangler d1 ... --local` as documented in docs/ama.md.

import { test, describe, before, after } from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import worker from "../index.js";

const SECRET = "test-submission-secret";
const PASS_SECRET = "turnstile-test-pass-secret";
const BAD_SECRET = "turnstile-test-bad-secret";
const SPENT_SECRET = "turnstile-test-spent-secret";
const HOST = "example.test";
const ACTION = "ama";
const URL_UNDER_TEST = "https://ama.example.test/questions";

class FakeD1 {
  rows = new Map();
  broken = false;

  prepare(sql) {
    return {
      bind: (...args) => ({
        run: async () => this.exec(sql, args),
        first: async () => this.exec(sql, args),
      }),
    };
  }

  exec(sql, args) {
    if (this.broken) throw new Error("D1 unavailable");
    if (sql.startsWith("INSERT INTO questions")) {
      const [id, question, created_at] = args;
      if (this.rows.has(id)) throw new Error("UNIQUE constraint failed: questions.id");
      this.rows.set(id, { id, question, created_at });
      return { success: true };
    }
    if (sql.startsWith("SELECT question FROM questions WHERE id")) {
      const row = this.rows.get(args[0]);
      return row ? { question: row.question } : null;
    }
    throw new Error(`unexpected SQL in fake: ${sql}`);
  }
}

class FakeRateLimiter {
  counts = new Map();

  async limit({ key }) {
    const next = (this.counts.get(key) ?? 0) + 1;
    this.counts.set(key, next);
    return { success: next <= 20 };
  }
}

// Stubbed Siteverify verdicts, keyed by secret and token.
function siteverifyReply(secret, token) {
  if (secret === BAD_SECRET) return { success: false, "error-codes": ["invalid-input-secret"] };
  if (secret === SPENT_SECRET) return { success: false, "error-codes": ["timeout-or-duplicate"] };
  const verdicts = {
    "ok-token": { success: true, hostname: HOST, action: ACTION },
    "wrong-action": { success: true, hostname: HOST, action: "other" },
    "wrong-host": { success: true, hostname: "evil.example", action: ACTION },
  };
  return verdicts[token] ?? { success: false, "error-codes": ["invalid-input-response"] };
}

let siteverifyCalls = 0;
const realFetch = globalThis.fetch;

before(() => {
  globalThis.fetch = async (url, init) => {
    assert.equal(url, "https://challenges.cloudflare.com/turnstile/v0/siteverify");
    siteverifyCalls++;
    const form = new URLSearchParams(init.body);
    if (form.get("response") === "network-down") throw new TypeError("fetch failed");
    return new Response(JSON.stringify(siteverifyReply(form.get("secret"), form.get("response"))), {
      headers: { "content-type": "application/json" },
    });
  };
});

after(() => {
  globalThis.fetch = realFetch;
});

function makeEnv(overrides = {}) {
  return {
    AMA_DB: new FakeD1(),
    AMA_RATE_LIMITER: new FakeRateLimiter(),
    AMA_SUBMISSION_SECRET: SECRET,
    TURNSTILE_SECRET_KEY: PASS_SECRET,
    TURNSTILE_EXPECTED_HOSTNAME: HOST,
    TURNSTILE_EXPECTED_ACTION: ACTION,
    ...overrides,
  };
}

function submit(env, payload, { secret = SECRET, headers = {}, raw, method = "POST" } = {}) {
  const auth = secret === null ? {} : { authorization: `Bearer ${secret}` };
  const request = new Request(URL_UNDER_TEST, {
    method,
    headers: { "content-type": "application/json", ...auth, ...headers },
    body: method === "POST" ? (raw ?? JSON.stringify(payload)) : undefined,
  });
  return worker.fetch(request, env);
}

function validPayload(overrides = {}) {
  return {
    id: randomUUID(),
    question: "How do you keep React tests readable?",
    turnstileToken: "ok-token",
    ...overrides,
  };
}

describe("AMA Worker: accepted submissions", () => {
  test("stores the trimmed question and returns no stored content", async () => {
    const env = makeEnv();
    const payload = validPayload({ question: "   Plain question text   " });
    const response = await submit(env, payload);

    assert.equal(response.status, 201);
    assert.equal(await response.text(), JSON.stringify({ ok: true }));
    assert.equal(env.AMA_DB.rows.get(payload.id).question, "Plain question text");
  });

  test("counts characters, not bytes, at the 10 and 2000 limits", async () => {
    const env = makeEnv();
    assert.equal((await submit(env, validPayload({ question: "é".repeat(10) }))).status, 201);
    assert.equal((await submit(env, validPayload({ question: "a".repeat(2000) }))).status, 201);
    assert.equal(env.AMA_DB.rows.size, 2);
  });

  test("stores SQL-like text literally", async () => {
    const env = makeEnv();
    const question = "'); DROP TABLE questions; -- SELECT * FROM questions";
    const payload = validPayload({ question });

    assert.equal((await submit(env, payload)).status, 201);
    assert.equal(env.AMA_DB.rows.get(payload.id).question, question);
  });

  test("a repeated ID with the same question keeps one row", async () => {
    const env = makeEnv();
    const id = randomUUID();
    const first = await submit(env, validPayload({ id, question: "Original question text" }));
    const again = await submit(env, validPayload({ id, question: "Original question text" }));

    assert.equal(first.status, 201);
    assert.equal(again.status, 200);
    assert.equal(env.AMA_DB.rows.size, 1);
  });

  test("a repeated ID with a different question is refused and leaves the row unchanged", async () => {
    const env = makeEnv();
    const id = randomUUID();
    await submit(env, validPayload({ id, question: "Original question text" }));
    const different = await submit(env, validPayload({ id, question: "Changed question text" }));

    assert.equal(different.status, 409);
    assert.equal(env.AMA_DB.rows.get(id).question, "Original question text");
  });
});

describe("AMA Worker: rejected input writes nothing", () => {
  test("invalid payloads return 400 or 415 and create no rows", async () => {
    const env = makeEnv();
    const cases = [
      [validPayload({ question: "123456789" }), 400],
      [validPayload({ question: "a".repeat(2001) }), 400],
      [validPayload({ question: "         x" }), 400],
      [validPayload({ id: "not-a-uuid" }), 400],
      [validPayload({ turnstileToken: "" }), 400],
      [{ question: "Missing the identifier and token" }, 400],
      [null, 400, "{bad json"],
      [validPayload(), 415, undefined, { "content-type": "text/plain" }],
    ];

    for (const [payload, status, raw, headers] of cases) {
      const response = await submit(env, payload, { raw, headers });
      assert.equal(response.status, status, JSON.stringify(payload));
    }
    assert.equal(env.AMA_DB.rows.size, 0);
  });

  test("a body over 32 KiB returns 413 and is not parsed or stored", async () => {
    const env = makeEnv();
    const padded = { ...validPayload(), padding: "x".repeat(33 * 1024) };

    assert.equal((await submit(env, padded)).status, 413);
    assert.equal(env.AMA_DB.rows.size, 0);
  });

  test("requests without the exact shared secret return 401 and never reach Turnstile", async () => {
    const env = makeEnv();
    const before = siteverifyCalls;
    const missing = await submit(env, validPayload(), { secret: null });
    const wrong = await submit(env, validPayload(), { secret: "wrong" });
    const basic = await submit(env, validPayload(), {
      secret: null,
      headers: { authorization: `Basic ${SECRET}` },
    });

    assert.equal(missing.status, 401);
    assert.equal(wrong.status, 401);
    assert.equal(basic.status, 401);
    assert.equal(siteverifyCalls, before);
    assert.equal(env.AMA_DB.rows.size, 0);
  });

  test("only POST /questions is served; GET returns 405 without content", async () => {
    const env = makeEnv();
    const response = await submit(env, null, { method: "GET" });

    assert.equal(response.status, 405);
    assert.equal(env.AMA_DB.rows.size, 0);
  });
});

describe("AMA Worker: Turnstile fails closed", () => {
  test("rejects failed, spent, wrong-action, and wrong-hostname tokens without writing rows", async () => {
    const cases = [
      [makeEnv(), "bogus"],
      [makeEnv(), "wrong-action"],
      [makeEnv(), "wrong-host"],
      [makeEnv({ TURNSTILE_SECRET_KEY: SPENT_SECRET }), "ok-token"],
    ];
    for (const [env, token] of cases) {
      const response = await submit(env, validPayload({ turnstileToken: token }));
      assert.equal(response.status, 403, token);
      assert.equal(env.AMA_DB.rows.size, 0, token);
    }
  });

  test("returns 503 when the Turnstile secret is invalid, not a challenge failure", async () => {
    const env = makeEnv({ TURNSTILE_SECRET_KEY: BAD_SECRET });
    const response = await submit(env, validPayload());

    assert.equal(response.status, 503);
    assert.equal(env.AMA_DB.rows.size, 0);
  });

  test("returns 503 when Siteverify cannot be reached", async () => {
    const env = makeEnv();
    const response = await submit(env, validPayload({ turnstileToken: "network-down" }));

    assert.equal(response.status, 503);
    assert.equal(env.AMA_DB.rows.size, 0);
  });

  test("returns 503 for every request when submission config is missing", async () => {
    const env = makeEnv({ AMA_SUBMISSION_SECRET: undefined });
    const response = await submit(env, validPayload(), { secret: "anything" });

    assert.equal(response.status, 503);
  });
});

describe("AMA Worker: rate limit and storage failures", () => {
  test("the 21st authenticated attempt within the window is denied before Turnstile", async () => {
    const env = makeEnv();
    for (let i = 0; i < 20; i++) {
      assert.equal((await submit(env, validPayload({ turnstileToken: "bogus" }))).status, 403);
    }
    const before = siteverifyCalls;
    const denied = await submit(env, validPayload());

    assert.equal(denied.status, 429);
    assert.equal(siteverifyCalls, before);
    assert.equal(env.AMA_DB.rows.size, 0);
  });

  test("a database outage returns 503 and does not report success", async () => {
    const env = makeEnv();
    env.AMA_DB.broken = true;
    const response = await submit(env, validPayload());

    assert.equal(response.status, 503);
  });
});
