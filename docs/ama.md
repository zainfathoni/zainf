# Ask Me Anything (/ama)

## Architecture

```text
Browser /ama form
  -> Vercel React Router action (same-origin POST, honeypot, body cap)
  -> Cloudflare Worker POST /questions (shared secret, rate limit, Turnstile, validation)
  -> D1 table questions (id, question, created_at)
```

The submission endpoint is write-only. The owner inbox adds a separate read
endpoint, protected by its own secret. The public browser never receives either
Worker secret. Deletion is available only through the Cloudflare D1 dashboard or
Wrangler; the inbox does not publish, edit, or delete questions.

## Configuration

| Where | Name | Purpose |
| --- | --- | --- |
| Vercel | `AMA_WORKER_URL` | Full Worker URL ending in `/questions`. |
| Vercel | `AMA_SUBMISSION_SECRET` | Shared bearer secret. Must equal the Worker value. |
| Vercel | `TURNSTILE_SITE_KEY` | Public Turnstile site key for the widget. |
| Worker secret | `AMA_SUBMISSION_SECRET` | Shared bearer secret. |
| Worker secret | `TURNSTILE_SECRET_KEY` | Turnstile secret key. |
| Worker secret | `TURNSTILE_EXPECTED_HOSTNAME` | Exact production hostname, such as the site domain. |
| Worker var | `TURNSTILE_EXPECTED_ACTION` | `ama`. Set in `wrangler.jsonc`. |
| Worker binding | `AMA_DB` | Production D1 database `zainf-ama`. Its ID is in `wrangler.jsonc`. |
| Worker binding | `AMA_RATE_LIMITER` | 20 authenticated attempts per 60 seconds, key `ama-submissions`. |

The rate limit is approximate and applies separately in each Cloudflare location.
It is not a strict worldwide limit and it does not limit by visitor.

## Private owner inbox

**Delivery state:** the private Worker read endpoint is deployed and verified.
The website inbox is ready for deployment. Its read secret, session key, owner
ID, canonical origin, and dedicated GitHub OAuth values are set for production
only. The OAuth client secret is stored as a Secret. Real owner sign-in and
sign-out still need verification after deployment. No question data or database
schema was changed for the inbox.

Open `/admin/ama`, or select **Owner inbox** below the public AMA form. Sign in
with GitHub. Only the configured immutable numeric GitHub user ID is accepted;
the login name and email are not used for authorization. The page shows the
newest 50 questions first, with an **Older questions** link and WIB timestamps.
**Refresh** returns to the newest questions. **Sign out** clears the browser's
login cookies. Question text is displayed as text, never as HTML.

The design follows Cukup's owner-only dashboard: random OAuth state, S256 PKCE,
an encrypted ten-minute OAuth cookie, and an encrypted seven-day session cookie.
Production cookies use `__Host-`, Secure, HttpOnly, SameSite=Lax, and Path=/, with
no Domain. Encryption binds each cookie to its purpose and configured origin.
GitHub tokens are used only during login and are not stored. A copied session
cookie remains valid until expiry or session-key rotation; sign-out is not central
revocation. Preview deployments are disabled for this login.

The inbox document and loader responses use private/no-store headers and noindex.
Admin and auth routes are excluded from prerendering. Every inbox loader checks
the owner session before calling the Worker. `GET /admin/questions` independently
requires `AMA_READ_SECRET`, not the submission secret. It returns only bounded,
cursor-paginated results. No database migration is needed.

Additional production configuration:

| Where | Name | Purpose |
| --- | --- | --- |
| Vercel | `AMA_GITHUB_CLIENT_ID` | Dedicated GitHub OAuth app client ID. |
| Vercel secret | `AMA_GITHUB_CLIENT_SECRET` | Dedicated app secret; do not reuse Cukup credentials. |
| Vercel | `AMA_GITHUB_OWNER_ID` | `6315466`, checked against GitHub's public `zainfathoni` profile. |
| Vercel secret | `AMA_SESSION_KEY` | Canonical base64url-encoded random 32-byte AES key. No fallback key. |
| Vercel and Worker secret | `AMA_READ_SECRET` | Separate high-entropy read credential, different from `AMA_SUBMISSION_SECRET`. |
| Vercel | `AMA_ADMIN_ORIGIN` | Defaults to `https://www.zainfathoni.com`; must be an exact origin, with no trailing slash. |

Register the OAuth app with homepage `https://www.zainfathoni.com` and callback
`https://www.zainfathoni.com/auth/github/callback`. No repository or email scopes
are requested. Configure all inbox values for production only. Set the Worker
read secret, deploy the reviewed Worker, then deploy the website. Do not log or
paste secrets into GitHub, shell history, or chat.

For local work, an explicit loopback HTTP origin is allowed only outside
production and uses separate non-`__Host-` cookie names. The local preview uses
synthetic questions and simulated GitHub responses. It does not establish real
GitHub consent or production cookie behavior. Test the real owner login, a
different account's rejection, inbox read, pagination, and sign-out after setup.

## Local verification

Run from the repository root. Use Node 20.19.0.

```sh
pnpm test
pnpm run typecheck
pnpm run build
```

The 30 tests cover login and inbox route handlers, private Worker reads, and
existing submissions. Login tests simulate GitHub token and user responses and
the Worker read response. They check numeric-owner authorization, PKCE, invalid
OAuth state, tampered and expired cookies, preview denial, and sign-out checks.
They do not establish real GitHub consent or deployed cookie behavior.

The Worker contract tests import its handler directly. They replace three
boundaries. Nothing else is mocked in those tests.

- Turnstile Siteverify: a test-only `globalThis.fetch` stub with deterministic
  verdicts. It is not real Cloudflare behaviour.
- D1: an in-memory fake that implements only the bound statements the Worker
  uses. It is not D1.
- Rate limiter: an in-memory fake with a 20-per-key counter. It is not the
  Cloudflare binding.

On October 30, 2026, all 30 tests, TypeScript, and the production build passed.
Standards and spec/security reviews found no blocking source issue. The built
client has no admin or auth prerender directory. The deployed Worker source
SHA-256 is `77a82e2ee979e3eefd5938b91601d8c12b92064d5e3f7206a648f8f682e2d948`.
Production reads with no credential or a wrong credential return 401; malformed
cursors return 400. An authorized read returned the two existing questions.
Their content was not included in the check report. The existing submission
endpoint still rejects public GET and unauthenticated POST. All seven Worker
bindings, including the existing submission secrets, were preserved.

Local D1 migrations and restart persistence are checked separately with
`wrangler d1 ... --local`, as shown below. The rate-limit binding is checked only
through the fake, so do not treat these tests as proof of Cloudflare's limiter.

Local D1 checks use an ignored scratch state directory. Run from `workers/ama`:

```sh
cp .dev.vars.example .dev.vars   # local values only; never commit .dev.vars
pnpm exec wrangler d1 migrations apply AMA_DB --local --persist-to /path/to/scratch
pnpm exec wrangler d1 execute AMA_DB --local --persist-to /path/to/scratch \
  --command "SELECT COUNT(*) AS n FROM questions"
```

Restarting `wrangler dev --local` with the same `--persist-to` directory keeps the rows.

## Turnstile test keys: observed mismatch

Cloudflare documents the dummy secret `1x0000000000000000000000000000000AA` as
returning hostname `localhost` and action `test`. On 2026-10-25, the live
Siteverify endpoint returned hostname `example.com`, no `action` field, and
success for any token. The Worker requires the configured hostname and action,
so it rejects valid-looking dummy requests. This keeps the check fail-closed.
Do not relax the check for production. Re-test the dummy keys before relying on
them for end-to-end local tests.

## Production setup: October 30, 2026

The user approved resource creation, secrets, migration, commit, push, and
deployment. Cloudflare setup and Vercel production configuration are complete.
The website is deployed at `https://www.zainfathoni.com` from
[`48551e2`](https://github.com/zainfathoni/zainf/commit/48551e2624921a0f3f795a2bc81e781aade512ab).

- D1 `zainf-ama`: `2cb785bc-92f1-4ac8-9e28-e4bd8b7e7886` (APAC).
- Migration `0001_questions.sql` is applied and recorded in `d1_migrations`.
- Namespace `1001` was checked against the account's existing Worker bindings.
- A managed production Turnstile widget permits only `www.zainfathoni.com`.
- Worker secrets are installed. Their values are not in this repository.
- The reviewed Worker is deployed at
  `https://zainf-ama.zain.workers.dev/questions`. Worker previews are disabled.
- Uploaded source SHA-256:
  `8d9d4b8555c1d56deeb4497e820d3a1e020dcfd903fd0c563a478373191340d7`.
- Production denial checks passed: public GET 405, unauthenticated POST 401,
  authenticated invalid input 400, real invalid Turnstile token 403. D1 has
  zero questions after these checks.

Vercel has `AMA_WORKER_URL`, `AMA_SUBMISSION_SECRET`, and `TURNSTILE_SITE_KEY`
for production only. The shared secret is stored as a Secret. No AMA values are
set for previews. The production deployment is
`dpl_GviHT2MHfVNWFCVy39U3twnPERuj`, from the
[script-load fix](https://github.com/zainfathoni/zainf/commit/6d56309d273c0cd17e9a2de564408af132aa2a17).

Production HTTP checks pass: 26 of 26, including distinct form IDs, the production
site key, and an invalid real token returning 403 without a stale success banner.
The checked public HTML and 21 referenced JavaScript assets do not contain the
production shared secret.

Production success verification is complete. The user reported two consecutive
successful sends. A read-only D1 query for those two exact question texts returned
one row each, with distinct IDs, at 2026-10-30 11:40:31 and 11:40:38 WIB.
The question text is kept only in the private evidence artifact, not this record.
The user's browser session was not recorded, and its tokens were not captured.

The first deployment also exposed a script-load race. When the Turnstile API
arrived after hydration, React's script load handler did not render the widget.
A native script load listener fixes this race and also handles an API that is
already loaded. The High/Fast follow-up review found no source blocker.
The actual-route browser test failed before the fix and passed after it, with
delayed API delivery, two consecutive simulated sends, two exact local D1 rows,
Unicode boundaries, and duplicate-token rejection. These are local simulated
checks, not real Turnstile acceptance. TypeScript, 15 Worker tests, and build pass.

After deployment, all 26 production HTTP checks pass again. The real widget is
visible with the full form in light mode. A native checkbox click in the headless
browser did not obtain a token. That earlier run remains unsuccessful; the later
user-assisted check above closes the real production success gate.

For a new environment, use this setup order:

1. Create the D1 database `zainf-ama`. Copy the returned `database_id` into `workers/ama/wrangler.jsonc`.
2. Confirm that namespace `1001` is unique for this Cloudflare account, or change it.
3. Create the Turnstile widget for the production hostname. Put the site key in Vercel as `TURNSTILE_SITE_KEY`.
4. Set Worker secrets: `AMA_SUBMISSION_SECRET`, `TURNSTILE_SECRET_KEY`, `TURNSTILE_EXPECTED_HOSTNAME`.
5. Apply the migration to the remote database: `pnpm exec wrangler d1 migrations apply AMA_DB --remote`.
6. Deploy the Worker: `pnpm exec wrangler deploy`.
7. Set Vercel variables `AMA_WORKER_URL`, `AMA_SUBMISSION_SECRET`, and `TURNSTILE_SITE_KEY`.
8. Confirm `/ama` is excluded from prerendering in `react-router.config.ts`. The coordinator integrated this on main. Without it, one loader UUID and site key would be baked into static HTML.

Preview deployments must not use production D1 or production secrets.

## Rejected bodies are drained, not canceled

When a request body exceeds 32 KiB, the action reads and discards the rest of
the body, then returns 413. It does not cancel the body stream early. The
Node adapter (`@remix-run/node-fetch-server` 0.9.0) closes the same stream when
the request ends. A close after an early cancel throws "Controller is already
closed" in an unhandled listener and crashes the dev process. Memory stays
bounded, because nothing is buffered after the limit. Check this with a
chunked request (no Content-Length) and a Content-Length request over the
limit, then confirm `/ama` still returns 200.

## Known framework behaviour: cross-origin POST

A POST with a mismatched `Origin` header returns HTTP 500, not the action's 403.
React Router's CSRF check throws before the route action runs. This protection is
kept. The action's own 403 path is not reached for this case. For that denied case,
the proof must show zero rows and zero Siteverify or Worker calls.

## Proof boundaries

- Browser flows on the shared server use a Miniflare harness on port 8788. Only the
  outbound Siteverify call is simulated. The harness rejects any other outbound URL.
- The real Worker on port 8787 uses real Siteverify. Its dummy-key result is a
  documented mismatch, so it proves fail-closed behaviour only, not success.
- A stored success row is proven only through the simulated Siteverify path. It is
  not proof of real Cloudflare acceptance.
- The October 30 review check on port 8789 also simulates the widget API. It
  enforces single-use tokens at the Siteverify boundary and uses real local D1.
  Native browser input passed Unicode length boundaries. Two consecutive sends
  stored two exact questions without a reload or intervening error. A reused
  token was rejected, kept the question and ID, and showed no success banner.
  These checks do not replace the real production success check.

## Success and question length

After a successful send, the new submission ID clears the question field and
resets the existing Turnstile widget. Each failed attempt also resets the widget.
Tokens are single-use; a successful send must not leave a consumed token for the
next question.

Browser validation and server validation count Unicode code points after
trimming. Native `minLength` and `maxLength` count UTF-16 units, so they are not
used. For example, 1999 ASCII characters plus one emoji are 2000 valid characters.

## Privacy

Questions are private when the Worker receives them. An edited question and an
answer may be published later. Hosting and security providers can process
connection data. The Worker does not log questions, tokens, secrets, or raw IP addresses.
