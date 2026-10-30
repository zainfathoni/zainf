// Contract tests for the AMA Worker handler. Run from the repository root with:
//   node --test workers/ama/test/ama-worker.test.mjs
//
// The handler is imported directly. Only two dependencies are faked:
// - global fetch, for Turnstile Siteverify (a test-only stub; the live dummy keys
//   return hostname "example.com" and no action, so they cannot prove the success path);
// - D1, with a minimal in-memory fake that understands the bound statements the
//   Worker uses. Real local D1 migrations and restart persistence are checked with
//   `wrangler d1 ... --local` as documented in docs/ama.md.

import { test, describe, before, after } from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import worker from "../index.js";

const SECRET = "test-submission-secret";
const READ_SECRET = "test-inbox-read-secret";
const PASS_SECRET = "turnstile-test-pass-secret";
const BAD_SECRET = "turnstile-test-bad-secret";
const SPENT_SECRET = "turnstile-test-spent-secret";
const HOST = "example.test";
const ACTION = "ama";
const URL_UNDER_TEST = "https://ama.example.test/questions";

class FakeD1 {
  rows = new Map();
  broken = false;
  prepareCalls = 0;

  prepare(sql) {
    this.prepareCalls++;
    return {
      bind: (...args) => ({
        run: async () => this.exec(sql, args),
        first: async () => this.exec(sql, args),
        all: async () => this.exec(sql, args),
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
    if (sql.startsWith("SELECT id, question, created_at FROM questions")) {
      const [createdAt, , id] = args;
      const results = [...this.rows.values()]
        .filter(row => !sql.includes("WHERE") || row.created_at < createdAt ||
          (row.created_at === createdAt && row.id < id))
        .sort((a, b) => {
          if (a.created_at !== b.created_at) return a.created_at < b.created_at ? 1 : -1;
          return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
        })
        .slice(0, args.at(-1));
      return { success: true, results };
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

function readInbox(env, { secret = READ_SECRET, cursor } = {}) {
  const url = new URL("https://ama.example.test/admin/questions");
  if (cursor !== undefined) url.searchParams.set("cursor", cursor);
  return worker.fetch(new Request(url, {
    headers: secret === null ? {} : { authorization: `Bearer ${secret}` },
  }), env);
}

function inboxRow(number, created_at = "2026-10-30T12:00:00.000Z") {
  return {
    id: `00000000-0000-4000-8000-${number.toString(16).padStart(12, "0")}`,
    question: `Private question ${number}`,
    created_at,
  };
}

describe("AMA Worker: private inbox", () => {
  test("missing, wrong, and submission credentials cannot query or disclose the inbox", async () => {
    const env = makeEnv({ AMA_READ_SECRET: READ_SECRET });
    const row = inboxRow(1);
    env.AMA_DB.rows.set(row.id, row);
    const before = siteverifyCalls;

    for (const secret of [null, "wrong", SECRET]) {
      const response = await readInbox(env, { secret });
      assert.equal(response.status, 401);
      assert.deepEqual(await response.json(), { error: "unauthorized" });
      assert.equal(response.headers.get("cache-control"), "no-store");
    }
    assert.equal(env.AMA_DB.prepareCalls, 0);
    assert.equal(siteverifyCalls, before);
  });

  test("missing read secret or database fails closed without falling back to write credentials", async () => {
    for (const overrides of [
      { AMA_READ_SECRET: undefined },
      { AMA_READ_SECRET: "" },
      { AMA_READ_SECRET: READ_SECRET, AMA_DB: undefined },
    ]) {
      const env = makeEnv(overrides);
      for (const secret of [READ_SECRET, SECRET]) {
        const response = await readInbox(env, { secret });
        assert.equal(response.status, 503);
        assert.deepEqual(await response.json(), { error: "unavailable" });
      }
      if (env.AMA_DB) assert.equal(env.AMA_DB.prepareCalls, 0);
    }
  });

  test("read-only configuration returns private content without Turnstile or write configuration", async () => {
    const env = { AMA_DB: new FakeD1(), AMA_READ_SECRET: READ_SECRET };
    const row = inboxRow(1);
    env.AMA_DB.rows.set(row.id, row);
    const before = siteverifyCalls;
    const response = await readInbox(env);

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { questions: [row], nextCursor: null });
    assert.equal(response.headers.get("cache-control"), "no-store");
    assert.equal(response.headers.get("access-control-allow-origin"), null);
    assert.equal(siteverifyCalls, before);
  });

  test("pages newest first with equal timestamps, asymmetric IDs, and no omissions or duplicates", async () => {
    const env = makeEnv({ AMA_READ_SECRET: READ_SECRET });
    const newest = inboxRow(1, "2026-10-31T00:00:00.000Z");
    const oldest = inboxRow(999, "2026-10-29T00:00:00.000Z");
    const tied = Array.from({ length: 55 }, (_, i) => inboxRow(i + 10));
    // Neither insertion order nor ID-only ordering matches the expected order.
    for (const row of [oldest, ...tied, newest]) env.AMA_DB.rows.set(row.id, row);

    const response = await readInbox(env);
    assert.equal(response.status, 200);
    const first = await response.json();
    assert.equal(first.questions.length, 50);
    assert.equal(typeof first.nextCursor, "string");
    assert.ok(first.nextCursor.length > 0);
    assert.deepEqual(first.questions, [newest, ...tied.slice(6).reverse()]);

    // A newer arrival must not shift the second page as it would with offsets.
    const arrival = inboxRow(2, "2026-11-01T00:00:00.000Z");
    env.AMA_DB.rows.set(arrival.id, arrival);
    const nextResponse = await readInbox(env, { cursor: first.nextCursor });
    assert.equal(nextResponse.status, 200);
    const second = await nextResponse.json();
    assert.deepEqual(second, { questions: [...tied.slice(0, 6).reverse(), oldest], nextCursor: null });
  });

  test("exactly 50 rows have no next cursor and an empty inbox returns an empty page", async () => {
    const env = makeEnv({ AMA_READ_SECRET: READ_SECRET });
    const emptyResponse = await readInbox(env);
    assert.equal(emptyResponse.status, 200);
    assert.deepEqual(await emptyResponse.json(), { questions: [], nextCursor: null });

    const rows = Array.from({ length: 50 }, (_, i) => inboxRow(i + 1));
    for (const row of rows) env.AMA_DB.rows.set(row.id, row);
    const response = await readInbox(env);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { questions: [...rows].reverse(), nextCursor: null });
  });

  test("malformed cursors return 400 without querying or returning private content", async () => {
    const env = makeEnv({ AMA_READ_SECRET: READ_SECRET });
    const row = inboxRow(1);
    env.AMA_DB.rows.set(row.id, row);
    const encode = value => Buffer.from(JSON.stringify(value)).toString("base64url");
    const cursors = [
      "", "a".repeat(257), "%not-base64", "a",
      Buffer.from("not JSON").toString("base64url"),
      encode(null), encode({}), encode([]),
      encode([row.created_at, row.id, "extra"]),
      encode(["not-a-date", row.id]),
      encode(["2026-02-30T12:00:00.000Z", row.id]),
      encode(["2026-10-30", row.id]),
      encode([123, row.id]),
      encode([row.created_at, "not-a-uuid"]),
      encode([row.created_at, 123]),
    ];

    for (const cursor of cursors) {
      const response = await readInbox(env, { cursor });
      assert.equal(response.status, 400, cursor);
      assert.deepEqual(await response.json(), { error: "invalid" });
    }
    assert.equal(env.AMA_DB.prepareCalls, 0);
  });

  test("a D1 outage returns 503 without any stored questions", async () => {
    const env = makeEnv({ AMA_READ_SECRET: READ_SECRET });
    const row = inboxRow(1);
    env.AMA_DB.rows.set(row.id, row);
    env.AMA_DB.broken = true;
    const response = await readInbox(env);

    assert.equal(response.status, 503);
    assert.deepEqual(await response.json(), { error: "unavailable" });
    assert.equal(response.headers.get("cache-control"), "no-store");
  });
});

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
