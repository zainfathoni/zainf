// Private intake and owner inbox for the /ama form. The action calls POST /questions
// with a shared secret. This Worker verifies Turnstile, then stores the question
// in D1. GET /admin/questions requires a separate read secret. Never log content.

const MAX_BODY_BYTES = 32 * 1024;
const MIN_QUESTION_LENGTH = 10;
const MAX_QUESTION_LENGTH = 2000;
const MAX_TOKEN_LENGTH = 2048;
const PAGE_SIZE = 50;
const MAX_CURSOR_LENGTH = 256;
const RATE_LIMIT_KEY = "ama-submissions";
const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function isConfigured(env) {
  return Boolean(
    env.AMA_DB &&
      env.AMA_RATE_LIMITER &&
      env.AMA_SUBMISSION_SECRET &&
      env.TURNSTILE_SECRET_KEY &&
      env.TURNSTILE_EXPECTED_HOSTNAME &&
      env.TURNSTILE_EXPECTED_ACTION,
  );
}

function sameText(actual, expected) {
  const a = new TextEncoder().encode(actual);
  const b = new TextEncoder().encode(expected);
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

function parseCursor(cursor) {
  if (
    !cursor ||
    cursor.length > MAX_CURSOR_LENGTH ||
    !/^[A-Za-z0-9_-]+$/.test(cursor)
  ) return null;

  try {
    const value = JSON.parse(atob(cursor.replace(/-/g, "+").replace(/_/g, "/")));
    if (!Array.isArray(value) || value.length !== 2) return null;
    const [createdAt, id] = value;
    if (
      typeof createdAt !== "string" ||
      !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(createdAt) ||
      new Date(createdAt).toISOString() !== createdAt ||
      typeof id !== "string" ||
      !UUID_PATTERN.test(id)
    ) return null;
    return value;
  } catch {
    return null;
  }
}

function encodeCursor({ created_at, id }) {
  return btoa(JSON.stringify([created_at, id]))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function readQuestions(request, env, url) {
  if (!env.AMA_DB || !env.AMA_READ_SECRET) {
    return json({ error: "unavailable" }, 503);
  }
  const authorization = request.headers.get("authorization") ?? "";
  if (!sameText(authorization, `Bearer ${env.AMA_READ_SECRET}`)) {
    return json({ error: "unauthorized" }, 401);
  }
  if (request.method !== "GET") {
    return json({ error: "method_not_allowed" }, 405);
  }

  const rawCursor = url.searchParams.get("cursor");
  const cursor = rawCursor === null ? null : parseCursor(rawCursor);
  if (rawCursor !== null && !cursor) return json({ error: "invalid" }, 400);

  try {
    const statement = cursor
      ? env.AMA_DB.prepare(
          "SELECT id, question, created_at FROM questions WHERE created_at < ? OR (created_at = ? AND id < ?) ORDER BY created_at DESC, id DESC LIMIT ?",
        ).bind(cursor[0], cursor[0], cursor[1], PAGE_SIZE + 1)
      : env.AMA_DB.prepare(
          "SELECT id, question, created_at FROM questions ORDER BY created_at DESC, id DESC LIMIT ?",
        ).bind(PAGE_SIZE + 1);
    const result = await statement.all();
    if (!result.success) return json({ error: "unavailable" }, 503);
    const questions = result.results.slice(0, PAGE_SIZE);
    const nextCursor = result.results.length > PAGE_SIZE
      ? encodeCursor(questions[questions.length - 1])
      : null;
    return json({ questions, nextCursor }, 200);
  } catch {
    return json({ error: "unavailable" }, 503);
  }
}

// Reads the body as a stream so an oversized request is cut off at the limit.
async function readBody(request) {
  if (!request.body) return "";
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let total = 0;
  let text = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    text += decoder.decode(value, { stream: true });
  }
  return text + decoder.decode();
}

function parseSubmission(text) {
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    return null;
  }
  if (!payload || typeof payload !== "object") return null;

  const { id, question, turnstileToken } = payload;
  if (typeof id !== "string" || !UUID_PATTERN.test(id)) return null;
  if (typeof question !== "string") return null;

  const trimmed = question.trim();
  const length = [...trimmed].length;
  if (length < MIN_QUESTION_LENGTH || length > MAX_QUESTION_LENGTH) return null;

  if (
    typeof turnstileToken !== "string" ||
    turnstileToken === "" ||
    turnstileToken.length > MAX_TOKEN_LENGTH
  ) {
    return null;
  }

  return { id, question: trimmed, turnstileToken };
}

// Returns "ok", "rejected" for a failed challenge, or "unavailable" when the
// check cannot complete. Any non-ok result fails closed.
async function verifyTurnstile(token, env) {
  const form = new URLSearchParams({
    secret: env.TURNSTILE_SECRET_KEY,
    response: token,
  });

  let response;
  try {
    response = await fetch(SITEVERIFY_URL, { method: "POST", body: form });
  } catch {
    return "unavailable";
  }
  if (!response.ok) return "unavailable";

  const result = await response.json().catch(() => null);
  if (!result) return "unavailable";

  if (result.success !== true) {
    return result["error-codes"]?.includes("invalid-input-secret")
      ? "unavailable"
      : "rejected";
  }
  if (
    result.hostname !== env.TURNSTILE_EXPECTED_HOSTNAME ||
    result.action !== env.TURNSTILE_EXPECTED_ACTION
  ) {
    return "rejected";
  }
  return "ok";
}

// Returns 201 when stored, 200 when this same ID already holds this same
// question (an earlier attempt succeeded), 409 when the ID holds a different
// question, and 503 when D1 fails.
async function storeQuestion(env, { id, question }) {
  try {
    await env.AMA_DB.prepare(
      "INSERT INTO questions (id, question, created_at) VALUES (?, ?, ?)",
    )
      .bind(id, question, new Date().toISOString())
      .run();
    return 201;
  } catch (error) {
    if (!String(error?.message).includes("UNIQUE constraint failed")) {
      return 503;
    }
  }

  const existing = await env.AMA_DB.prepare(
    "SELECT question FROM questions WHERE id = ?",
  )
    .bind(id)
    .first()
    .catch(() => undefined);
  if (existing === undefined) return 503;
  return existing?.question === question ? 200 : 409;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/admin/questions") {
      return readQuestions(request, env, url);
    }
    if (!isConfigured(env)) return json({ error: "unavailable" }, 503);

    if (url.pathname !== "/questions") {
      return json({ error: "not_found" }, 404);
    }
    if (request.method !== "POST") {
      return json({ error: "method_not_allowed" }, 405);
    }

    const authorization = request.headers.get("authorization") ?? "";
    if (
      !sameText(authorization, `Bearer ${env.AMA_SUBMISSION_SECRET}`)
    ) {
      return json({ error: "unauthorized" }, 401);
    }

    // Counts every authenticated attempt before the Turnstile call.
    const { success } = await env.AMA_RATE_LIMITER.limit({
      key: RATE_LIMIT_KEY,
    });
    if (!success) return json({ error: "rate_limited" }, 429);

    const mediaType = request.headers
      .get("content-type")
      ?.split(";")[0]
      .trim()
      .toLowerCase();
    if (mediaType !== "application/json") {
      return json({ error: "unsupported_media_type" }, 415);
    }

    const text = await readBody(request);
    if (text === null) return json({ error: "payload_too_large" }, 413);

    const submission = parseSubmission(text);
    if (!submission) return json({ error: "invalid" }, 400);

    const verdict = await verifyTurnstile(submission.turnstileToken, env);
    if (verdict === "unavailable") return json({ error: "unavailable" }, 503);
    if (verdict === "rejected") {
      return json({ error: "challenge_failed" }, 403);
    }

    const status = await storeQuestion(env, submission);
    if (status >= 500) return json({ error: "unavailable" }, status);
    if (status === 409) return json({ error: "conflict" }, status);
    return json({ ok: true }, status);
  },
};
