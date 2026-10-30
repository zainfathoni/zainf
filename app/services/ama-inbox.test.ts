import { afterEach, beforeEach, test, type TestContext } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { loader as startLogin } from "../routes/auth.github";
import { loader as finishLogin } from "../routes/auth.github_.callback";
import { loader as inbox } from "../routes/_layout.admin.ama";
import { action as logout } from "../routes/auth.logout";

const ORIGIN = "https://www.zainfathoni.com";
const CALLBACK = `${ORIGIN}/auth/github/callback`;
const originalEnvironment = { ...process.env };
const environment = {
  NODE_ENV: "production",
  VERCEL_ENV: "production",
  AMA_ADMIN_ORIGIN: ORIGIN,
  AMA_GITHUB_CLIENT_ID: "fixture-client",
  AMA_GITHUB_CLIENT_SECRET: "fixture-client-secret",
  AMA_GITHUB_OWNER_ID: "6315466",
  AMA_SESSION_KEY: Buffer.alloc(32, 7).toString("base64url"),
  AMA_WORKER_URL: "https://worker.example/questions",
  AMA_READ_SECRET: "fixture-read-secret",
};

beforeEach(() => Object.assign(process.env, environment));
afterEach(() => {
  for (const key of Object.keys(environment)) {
    if (originalEnvironment[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnvironment[key];
  }
});

function args(request: Request) {
  return {
    request,
    params: {},
    context: {},
    unstable_pattern: new URL(request.url).pathname,
  };
}

function request(path: string, cookie?: string) {
  return new Request(`${ORIGIN}${path}`, {
    headers: cookie ? { Cookie: cookie } : {},
  });
}

function begin() {
  const response = startLogin(args(request("/auth/github")));
  const url = new URL(response.headers.get("location")!);
  const oauthCookie = response.headers.getSetCookie()[0].split(";")[0];
  return { response, url, oauthCookie };
}

function callback(url: URL, cookie: string, code = "fixture-code") {
  return finishLogin(
    args(
      new Request(
        `${CALLBACK}?${new URLSearchParams({
          code,
          state: url.searchParams.get("state")!,
        })}`,
        { headers: { Cookie: cookie } },
      ),
    ),
  );
}

function github(t: TestContext, ownerId: number = 6315466) {
  return t.mock.method(
    globalThis,
    "fetch",
    async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      if (url === "https://github.com/login/oauth/access_token") {
        return Response.json({
          access_token: "fixture-token",
          token_type: "bearer",
        });
      }
      if (url === "https://api.github.com/user")
        return Response.json({ id: ownerId, login: "zainfathoni" });
      if (url.startsWith("https://worker.example/admin/questions")) {
        assert.equal(
          new Headers(init?.headers).get("authorization"),
          "Bearer fixture-read-secret",
        );
        return Response.json({
          questions: [
            {
              id: "b9cfa5c3-0c0a-4e96-afba-aa8e4ef66ab9",
              question: "A private fixture question",
              created_at: "2026-10-30T04:40:31.183Z",
            },
          ],
          nextCursor: null,
        });
      }
      throw new Error(`Unexpected fixture URL ${url}`);
    },
  );
}

function sessionCookie(response: Response) {
  return response.headers
    .getSetCookie()
    .find((value) => value.startsWith("__Host-zainf_ama_session="))
    ?.split(";")[0];
}

test("owner login uses the exact callback and PKCE, then opens a private inbox", async (t) => {
  const calls = github(t);
  const { response, url, oauthCookie } = begin();
  assert.equal(
    url.origin + url.pathname,
    "https://github.com/login/oauth/authorize",
  );
  assert.equal(url.searchParams.get("redirect_uri"), CALLBACK);
  assert.equal(url.searchParams.get("scope"), null);
  assert.equal(url.searchParams.get("code_challenge_method"), "S256");
  const finished = await callback(url, oauthCookie);
  assert.equal(finished.headers.get("location"), "/admin/ama");
  const cookie = sessionCookie(finished)!;
  assert.ok(cookie);
  const exchange = new URLSearchParams(
    String(calls.mock.calls[0].arguments[1]?.body),
  );
  assert.equal(exchange.get("redirect_uri"), CALLBACK);
  assert.equal(exchange.get("code"), "fixture-code");
  assert.equal(
    createHash("sha256")
      .update(exchange.get("code_verifier")!)
      .digest("base64url"),
    url.searchParams.get("code_challenge"),
  );
  const loaded = await inbox(args(request("/admin/ama", cookie)));
  assert.equal(loaded.data.signedIn, true);
  assert.equal(
    loaded.data.page?.questions[0].question,
    "A private fixture question",
  );
  assert.equal(
    new Headers(loaded.init?.headers).get("cache-control"),
    "private, no-store",
  );
  assert.equal(response.headers.get("referrer-policy"), "no-referrer");
  for (const value of [
    ...response.headers.getSetCookie(),
    ...finished.headers.getSetCookie(),
  ]) {
    assert.match(value, /; Secure/);
    assert.match(value, /; HttpOnly/);
    assert.match(value, /; SameSite=Lax/);
    assert.match(value, /; Path=\//);
    assert.doesNotMatch(value, /; Domain=/i);
  }
  assert.equal(cookie.includes("fixture-token"), false);
});

test("an anonymous inbox never fetches or returns private questions", async (t) => {
  const calls = github(t);
  const loaded = await inbox(args(request("/admin/ama?cursor=untrusted")));
  assert.equal(loaded.data.signedIn, false);
  assert.equal(loaded.data.page, null);
  assert.equal(calls.mock.callCount(), 0);
});

test("a non-owner with the owner's login name is rejected by numeric ID", async (t) => {
  github(t, 12345);
  const { url, oauthCookie } = begin();
  const response = await callback(url, oauthCookie);
  assert.equal(response.headers.get("location"), "/admin/ama?login=failed");
  assert.equal(sessionCookie(response), undefined);
});

test("wrong, missing, duplicate, tampered and expired OAuth state cannot start an exchange", async (t) => {
  const calls = github(t);
  const now = Date.now();
  const { url, oauthCookie } = begin();
  const state = url.searchParams.get("state")!;
  for (const [query, cookie] of [
    ["code=fixture-code&state=wrong", oauthCookie],
    ["code=fixture-code", oauthCookie],
    [`code=fixture-code&state=${state}&state=${state}`, oauthCookie],
    [`code=a&code=b&state=${state}`, oauthCookie],
    [`code=fixture-code&state=${state}`, `${oauthCookie}; ${oauthCookie}`],
    [`code=fixture-code&state=${state}`, `${oauthCookie.slice(0, -5)}abcde`],
  ]) {
    const response = await finishLogin(
      args(request(`/auth/github/callback?${query}`, cookie)),
    );
    assert.equal(sessionCookie(response), undefined);
    assert.equal(response.headers.get("location"), "/admin/ama?login=failed");
  }
  t.mock.method(Date, "now", () => now + 10 * 60 * 1000 + 1000);
  assert.equal(sessionCookie(await callback(url, oauthCookie)), undefined);
  assert.equal(calls.mock.callCount(), 0);
});

test("GitHub outages and invalid token replies fail closed", async (t) => {
  const cases = [
    () => {
      throw new TypeError("network unavailable");
    },
    () =>
      Response.json({
        access_token: "fixture-token",
        token_type: "not-bearer",
      }),
    () => new Response("not JSON"),
    () => new Response("unavailable", { status: 503 }),
  ];
  for (const reply of cases) {
    const mock = t.mock.method(globalThis, "fetch", async () => reply());
    const { url, oauthCookie } = begin();
    const response = await callback(url, oauthCookie);
    assert.equal(sessionCookie(response), undefined);
    assert.equal(response.headers.get("location"), "/admin/ama?login=failed");
    mock.mock.restore();
  }
});

test("tampered, duplicate, wrong-origin, wrong-owner and expired sessions return no private data", async (t) => {
  const calls = github(t);
  const { url, oauthCookie } = begin();
  const cookie = sessionCookie(await callback(url, oauthCookie))!;
  const before = calls.mock.callCount();
  for (const bad of [
    `${cookie.slice(0, -5)}abcde`,
    `${cookie}; ${cookie}`,
    oauthCookie.replace("_oauth=", "_session="),
  ]) {
    const loaded = await inbox(args(request("/admin/ama", bad)));
    assert.equal(loaded.data.signedIn, false);
    assert.equal(loaded.data.page, null);
  }
  let loaded = await inbox(
    args(
      new Request("https://preview.example/admin/ama", {
        headers: { Cookie: cookie },
      }),
    ),
  );
  assert.equal(loaded.data.page, null);
  process.env.AMA_GITHUB_OWNER_ID = "12345";
  loaded = await inbox(args(request("/admin/ama", cookie)));
  assert.equal(loaded.data.page, null);
  process.env.AMA_GITHUB_OWNER_ID = environment.AMA_GITHUB_OWNER_ID;
  const expiredAt = Date.now() + 7 * 24 * 60 * 60 * 1000 + 1000;
  t.mock.method(Date, "now", () => expiredAt);
  loaded = await inbox(args(request("/admin/ama", cookie)));
  assert.equal(loaded.data.page, null);
  assert.equal(calls.mock.callCount(), before);
});

test("missing config and Vercel previews disable inbox access without fetching data", async (t) => {
  const calls = github(t);
  for (const key of ["AMA_SESSION_KEY", "AMA_GITHUB_CLIENT_SECRET"]) {
    const value = process.env[key];
    delete process.env[key];
    const loaded = await inbox(args(request("/admin/ama")));
    assert.equal(loaded.data.configured, false);
    assert.equal(loaded.data.page, null);
    assert.equal(loaded.init?.status, 503);
    process.env[key] = value;
  }
  process.env.VERCEL_ENV = "preview";
  assert.equal(
    (await inbox(args(request("/admin/ama")))).data.configured,
    false,
  );
  assert.equal(calls.mock.callCount(), 0);
});

test("sign-out clears both cookies and rejects cross-origin posts", async () => {
  const accepted: Record<string, string>[] = [
    { Origin: ORIGIN },
    { Origin: "null", "Sec-Fetch-Site": "same-origin" },
  ];
  for (const headers of accepted) {
    const response = logout(
      args(new Request(`${ORIGIN}/auth/logout`, { method: "POST", headers })),
    );
    assert.equal(response.status, 303);
    assert.equal(response.headers.getSetCookie().length, 2);
    for (const cookie of response.headers.getSetCookie())
      assert.match(cookie, /; Max-Age=0/);
  }
  const rejected: Record<string, string>[] = [
    { Origin: "https://attacker.example" },
    { Origin: "null" },
    { Origin: ORIGIN, "Sec-Fetch-Site": "cross-site" },
  ];
  for (const headers of rejected) {
    assert.throws(
      () =>
        logout(
          args(
            new Request(`${ORIGIN}/auth/logout`, { method: "POST", headers }),
          ),
        ),
      (error: unknown) => error instanceof Response && error.status === 403,
    );
  }
});
