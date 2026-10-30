# Decision log

This log records the decisions in the order that they occurred. Each entry gives the source thread, the decision, the stated reason, the alternatives that a thread actually wrote down, and the status. The log does not add reasons that the threads did not state. "Coordinator message" means a message from the coordinator thread, not from the user.

Thread links:

- Coordinator: <https://ampcode.com/threads/T-01a171dd-146e-712a-8053-4a94e8e2cbeb>
- Planner: <https://ampcode.com/threads/T-01a171e0-250b-72a8-8d5f-195335e5beb2>
- Blog worker: <https://ampcode.com/threads/T-01a171e4-fe30-7215-9506-f0a01df48afb>
- Atlas worker: <https://ampcode.com/threads/T-01a171e5-0857-761d-8a90-4da9e74dd502>
- Covers worker: <https://ampcode.com/threads/T-01a171e5-1028-77e0-a4e5-44331b1432f5>
- AMA worker: <https://ampcode.com/threads/T-01a171e5-18ae-75c5-97e9-50df7a28a38d>
- UI design owner: <https://ampcode.com/threads/T-01a171fe-e237-77c9-a1b3-16fcf71510cb>

## D-01 Process: planner first, then Haiku workers

- **Source:** user request in the coordinator thread.
- **Decision:** one High-mode planner, then four Claude Code workers with Haiku 5.5, one per worktree. The coordinator integrates.
- **Reason (user):** "I believe these three tasks are doable by cheaper models, such as Haiku 5.5." "…we need a solid plan for them, right?"
- **Status:** Decided. Done.

## D-02 Blog taxonomy from slugs

- **Source:** planner.
- **Decision:** five types plus "All types": `ai-tools-digest`, `hidup-sehat-digest`, `project-notes`, `tutorial`, `essay`. The type comes from the slug prefix. The legacy slug `2026-02-15/ai-tools-digest-week-2` is an AI Tools digest. "Other slugs → Essay."
- **Reason (planner):** the content has 37 AI Tools digests, 12 Hidup Sehat digests, two Project Transformers posts, one React tutorial, and one essay. "A separate 'Other' category is not needed." "Keep `app/models/posts.ts` and all MDX files unchanged."
- **Alternatives recorded:** none. No thread recorded a metadata field or frontmatter alternative.
- **Status:** Implemented in `app/models/post-types.ts`. Counts verified (local).

## D-03 Blog URL contract

- **Source:** planner.
- **Decision:** "Keep `/blog`, `/blog/en`, and `/blog/id`. Add the type as a query parameter." "Missing or unknown values select All types. Preserve unrelated query parameters." "Use normal links, not local-only state."
- **Status:** Implemented. Verified (local) for counts and query preservation. Browser history proof is not complete.

## D-04 Prerender exclusions

- **Source:** planner, then coordinator.
- **Decision:** remove `/blog`, `/blog/en`, `/blog/id`, and `/ama` from prerendering. Keep `/atlas` and article pages prerendered.
- **Reason (planner):** "Otherwise, a production request with `?type=` can receive the prebuilt unfiltered archive." `/ama` is excluded "so configuration and submission IDs are generated at runtime".
- **Evidence:** the blog worker saw the same count for every type in prerendered HTML before the change. After the change, `build/client/{blog,blog/en,blog/id,ama}/index.html` were absent.
- **Status:** Implemented in `react-router.config.ts`. Verified (local).

## D-05 Atlas is grouped navigation, not a visual sitemap

- **Source:** planner.
- **Decision:** "Reuse that navigation idea, not its visual design." Five sections. Data from existing models.
- **Alternatives rejected (planner):** "Do not add a content scanner, graph library, second content registry, or separate slide inventory."
- **Correction (coordinator message):** move model reads into a route loader so article modules do not go to the browser. Result: the client chunk is 2585 bytes with 0 model-read strings.
- **Status:** Implemented. Verified (local). Browser proof in progress.

## D-06 Article covers from existing OG metadata

- **Source:** user (fourth task), then planner.
- **Decision:** change only `PostHeader.tsx`. Use `og:image`, `og:image:alt` (empty alt if missing), valid dimensions, and a `showCover` opt-out. Convert same-site absolute URLs to local paths.
- **Alternatives rejected (planner):** "Do not hide existing inline images or add automatic body inspection. Do not remove existing duplicate body H1s as unrelated cleanup."
- **Correction (coordinator message):** the site origin is `https://www.zainfathoni.com`, not `zainf.dev`.
- **Status:** Implemented. Verified (local): 53 of 53 posts and 7 of 7 fixtures on 4173.

## D-07 AMA architecture

- **Source:** planner. The coordinator first noted that the site runs on Vercel, "so D1 is not automatically the simplest choice."
- **Decision:** "/ama -> Vercel action -> authenticated write-only Cloudflare Worker -> D1."
- **Reason (planner):** Cloudflare docs recommend a Worker API for access from outside Workers. The D1 REST API is "best suited to administration because the global API quota applies."
- **Alternatives rejected (planner):** "Do not add Hono, an ORM, a generic SQL endpoint, or a Cloudflare account API token to Vercel." Also no auth framework and no reuse of `/thank-you`.
- **Rules:** question only, 10 to 2000 characters, 32 KiB body limit, honeypot, server UUID as primary key, columns `id`, `question`, `created_at` only.
- **Status:** Implemented. Contract tests pass with mocks. Not deployed.

## D-08 Strict Turnstile checks and the dummy-key mismatch

- **Source:** planner, AMA worker, coordinator.
- **Decision:** the Worker requires `success`, the expected hostname, and action `ama`. A rate-limit binding allows 20 attempts per 60 seconds on the key `ama-submissions`. The planner calls this "an approximate limit per Cloudflare location, not a strict worldwide quota."
- **Observed:** the live dummy Siteverify returned `"hostname":"example.com"`, no `action`, and success for the token `bogus`. Cloudflare docs say `localhost` and `test`.
- **History:** the worker added a test-only `TURNSTILE_SITEVERIFY_URL` override. The coordinator said: "Do not weaken production validation… document the observed upstream mismatch." The worker removed the override.
- **Status:** Decided. Mismatch documented in `docs/ama.md` and `.dev.vars.example`.

## D-09 AMA proof harness

- **Source:** coordinator message.
- **Decision:** an ignored Miniflare harness on port 8788 runs the unchanged `workers/ama/index.js` with persisted local D1 and the real rate-limit binding. It replaces only the outbound Siteverify call. Later rule: the harness rejects any outbound URL that is not exactly Siteverify. Proofs query only synthetic UUIDs.
- **Limit:** the harness shows storage and rejection behavior. It does not prove a real Turnstile success. The real Worker on 8787 shows the real Siteverify rejection: `403 challenge_failed` and 0 rows.
- **Status:** Implemented in `zainf-ama/.amp/in/proof-ama/harness.mjs`. Running.

## D-10 Each worker collects its own proof on the shared dev server

- **Source:** user: "Each worker is responsible of collecting its own proofs."
- **Decision (coordinator):** each worker has its own browser session (`zainf-proof-blog`, `zainf-proof-atlas`, `zainf-proof-images`, `zainf-proof-ama`) and its own folder in `.amp/in/artifacts/proof-*/`.
- **Rule (coordinator message):** "do not trust a run that overlaps a reload/error." Runs that the AMA restart interrupted are invalid.
- **Status:** In progress.

## D-11 Blog filter presentation: correction and option B

- **Gap:** the plan and the review did not ask for visible group labels. The worker used one pill style for both rows. Only `aria-label` values told the rows apart. The coordinator's `gap-2` change "was a fit check, not a check that the two groups were clear."
- **User rejection:** "There are no clear distingushing UI hint showing that there are 2 different groups of filters. Why did you make that decision?"
- **Coordinator admission:** "There was no recorded decision to omit visible group labels. That was an omission in the plan and my review, not a justified design choice."
- **Decision (UI design owner):** option B. A "Language" label above the language row, an "Article type" label above the type row, 24px (`space-y-6`) between the groups, `gap-2` in both rows, "All posts" renamed to "All languages", a teal `focus-visible` outline, and the empty text "No posts match this language and type."
- **Reasons for B (quoted):** "Labels name the two groups." "One layout for all widths." "The pills do not change."
- **Option A rejected:** inline labels at the left. "The type row already wraps inside the 672px column. Mobile would need a second layout."
- **Option C rejected:** a segmented language control. "Both groups pick one option, so two different control styles would suggest a difference that does not exist. It also adds new styles."
- **Note:** the concept image and DOM prototype in `.amp/in/artifacts/ui-design/` are design references. They are not proof of the implementation. The prototype did not change the empty text. Some file names call `/blog/id?type=tutorial` "empty", but that page has 1 post. The real empty case is `/blog/en?type=hidup-sehat-digest`.
- **Status:** Implemented by the Haiku blog worker and integrated into `main` (file identical to `zainf-blog`). The coordinator smoke DOM check passed: visible labels, "All languages", 24px group gap, 12px label gap, 53 posts by default, no horizontal overflow. This is not full verification. Typecheck on `main` passed after option B (exit 0). The worker's full proof is pending.

## D-12 Keep the React Router CSRF guard for cross-origin AMA posts

- **Source:** coordinator message.
- **Observed:** a cross-origin POST to `/ama` returns 500.
- **Finding:** the coordinator confirmed that this is the built-in React Router CSRF rejection. It runs before the route action. The 500 is not evidence that the action accepted the origin.
- **Decision:** keep the framework guard. No config change is planned.
- **Evidence:** `.amp/in/csrf-denial.txt` (status 500 and the framework source `throwIfPotentialCSRFAttack`). The AMA worker observed 0 Siteverify calls for a cross-origin post. The coordinator check alone does not show 0 database rows.
- **Status:** Decided. No same-origin guard change.

## D-13 UI review: covers accepted, Atlas fragment fix

- **Source:** coordinator message, from the UI owner review.
- **Covers:** accepted. The fixture route is absent.
- **Atlas finding:** the floating header hides the talk title at a fragment target. This is a material issue.
- **Decision:** the Atlas worker owns a narrow fix: `scroll-mt-24` in `app/components/TalksList.tsx`, and Atlas type labels from `postTypeOptions`. The worker reproduces the issue before and after the fix. After integration, `main` needs a new build.
- **Deferred:** type counts on Atlas are optional and not a blocker.
- **Invalid captures:** Atlas `desktop-dark` and `mobile-light` full-page captures (stitching). Old AMA images. Viewport series and final AMA status, error, mobile, and light captures are requested.
- **Integration (coordinator):** `scroll-mt-24` on the talk `Card` in `TalksList.tsx`. Atlas imports the shared `postTypeOptions`, not the duplicate array from the worktree, so labels and URLs match the blog filters.
- **Evidence gap:** no valid numeric before measurement exists. An earlier screenshot shows the title clipped (qualitative). New proof on 4173, desktop and mobile, after scroll settles, is authorized.
- **Post-fix proof:** 6 of 6 native clicks with the title visible and a clear hit test (light only). Post-fix state only, no before pair, so no causal claim. Artifacts in `.amp/in/artifacts/proof-fragments/post-fix/`.
- **UI review:** the UI owner inspected all 7 captures and accepts fragment title visibility only. Correction: `coldload-desktop-royal.png` is dark, not light. Grey card backgrounds are pointer hover. `fragment-idsw-2025.png` supports only a qualitative before state.
- **Final proof:** 14 viewport captures (1280 and 390, light and dark), exact rendered labels and links for all 5 types, section order, one `h1`, no overflow, monotonic scroll to the end (`.amp/in/artifacts/proof-atlas-final/`). Later UI accepted (see D-20).
- **Status:** Implemented in `main`. Fragment title visibility UI accepted. Whole Atlas awaits the UI owner review of the final proof.

## D-14 Blog recording incident and exclusive AMA browser window

- **Source:** coordinator messages and `.amp/in/artifacts/proof-blog/out/consolidated-result.md`.
- **Observed:** the blog recording used the wrong language selector, and the worker then deleted it by mistake. Retries captured no frames. The worker ran a global `pkill` on `agent-browser-darwin-arm64`, which can stop all workers' browser sessions.
- **Decision (coordinator):** pause the recording recovery. The Atlas and AMA workers check their sessions and rerun only interrupted steps. Record that no valid blog video exists. Do not accept recordings. Hold other browser rendering during the AMA proof window.
- **Related error:** the documentation owner copied the newest shared screenshot, which came from another session (a blog page). It deleted only its own copy and made no claim from it. Rule: use only the exact output path from your own command, check the page identity, and never touch other sessions' files.
- **Status:** Open. No effect on code observed.

## D-15 Correction: no AMA access blocker

- **Source:** coordinator messages.
- **First report (wrong):** the AMA worker said it had resumed in a Linux sandbox without access to the Mac checkout or services. As a fallback plan, the coordinator said it could run the existing AMA script on `zains`.
- **Correction:** the AMA worker rechecked its shell: Darwin, original services reachable. The coordinator confirmed `pwd`, `uname`, and the ports. There was no blocker and no environment migration. The fallback was not used.
- **Decision:** the original AMA worker runs a fresh, bounded proof itself in the exclusive browser window. No takeover, no new thread, no recreation, no new production resources.
- **Later result:** the next AMA run wrote only a header, with no check results or captures, because screenshot commands hang. The worker stopped only its own command and session. The coordinator is diagnosing a separate task-owned Chrome/CDP capture path, with no shared restart.
- **Diagnosis:** a direct CDP `Page.captureScreenshot` in a new isolated Chrome 148 timed out (15 seconds) on `/ama` and on `about:blank`, while DOM reads and navigation worked. The capture failure is independent of the AMA page and of the CLI. Next test: software rendering. Only the diagnostic Chrome was closed.
- **Further diagnosis:** with the GPU disabled, capture still times out on a blank page. Next test: a separate installed system Chrome version.
- **Capture path found:** separate system Chrome 155, headless, isolated profile, CDP 52840. Direct capture worked on a blank page and on `/ama`. No categorical root cause: version and flags both changed. The AMA worker uses this path next.
- **Dev server stop:** PID 30197 stopped during the AMA HTTP run (cause not verified). The coordinator restarted it with the same configuration (shell 95344). AMA cases H1 to H6 are valid; H7 and later are invalid and must be rerun after the health and provenance checks.
- **Status:** AMA proof not complete. No new AMA acceptance. Browser rendering paused during the diagnosis.

## D-16 Oversized AMA POST bug and bounded fix

- **Source:** coordinator message.
- **Observed before the fix:** on Node 20.19 dev process 96715, a chunked oversized POST returned 413, then `GET /ama` failed with `ECONNREFUSED`. Stack: "Controller is already closed" in the `@remix-run` node-fetch adapter. Artifacts: `.amp/in/ama-oversize-before.txt`, `.amp/in/dev-server-repro.log`.
- **Root cause (coordinator):** `readAmaBody` calls `reader.cancel()`, which closes the stream. The adapter `end` listener closes it again.
- **Correction:** earlier "random runtime instability" statements are withdrawn.
- **Decision:** the AMA worker makes a bounded fix that drains the body without buffering, with docs and an HTTP regression test. Not chosen: an upgrade of the shared adapter.
- **Result:** implemented in `main`. After the fix, the same request gave 413 and then `GET /ama` 200 (`.amp/in/ama-oversize-after.txt`). Regression 4 of 4 PASS (`.amp/in/ama-oversize-regression.txt`). Typegen, `tsc`, 15 mock tests, and build passed with Node 20.19 (PID 97406, 25.33s, `.amp/in/combined-build-drain.log`).
- **Status:** fixed and verified (local).

## D-17 Pause map HTML writes during final browser runs

- **Source:** coordinator message.
- **Reason:** the Vite log shows page reloads when the map HTML or its artifact copy changes. Reloads can interrupt captures. This is a precaution, not a claimed cause of earlier image defects.
- **Decision:** batch map HTML updates after the proof window. Markdown edits continue.
- **Status:** in effect.

## D-18 Coordination handoff

- **Source:** new coordinator thread <https://ampcode.com/threads/T-01a1733d-1ac1-70f5-bebf-b5ebcc4c3f90>.
- **Decision (user):** coordination moved from the source coordinator thread to the new thread. The documentation owner keeps `docs/website-improvements/`. No new scope or deployment authorization was added.
- **Status:** in effect.

## D-19 UI acceptance and AMA success-state fix

- **Source:** current coordinator, from the UI review.
- **Accepted:** blog option B. AMA desktop dark initial layout (`B0` and `B1` together), the `M2` mobile dark error layout, and the `S1` success banner only (`role="status"`).
- **Defect:** the AMA success state keeps the sent text in the form.
- **Decision (UI owner):** clear the question on success, and use clearer 403 text that does not contradict the dummy widget, which always passes. The AMA worker makes both changes in `zainf-ama` only, after the Atlas proof is complete. Then `main` needs another build and smoke.
- **Withdrawn:** the reset concern (visual concern, not a proven functional failure).
- **Capture finding:** all four AMA files named "light" show the dark theme. Pending: light initial, success, and error; success at 390px; a full corrected `S1`; textarea and button focus.
- **Update (00:40 WIB):** both changes were implemented in `zainf-ama` only (403 text, `key={id}` on the textarea, comment). Worker: typecheck and 15 mock tests pass (Node 20.19).
- **Before state:** on unchanged `main`, a native success stored 1 row with 1 Siteverify call, but the textarea kept the sent question (`BASE-S1-retained-text-before-fix-DARK.png`).
- **Integration:** the coordinator copied only the agreed changes into `main`. `cmp` matches the worker file. `/ama` returns 200.
- **After checks (worker, native):** success clears the field (new ID, +1 call, 1 exact-text row); spent token gives 403, keeps the text, same ID, 0 rows; recovery succeeds and clears. Coordinator inspected light `POST-B0`, `POST-S1`, `POST-S390`, `POST-E2`. Focus capture invalid.
- **UI acceptance (light):** `POST-B0` plus `POST-E1` initial view, `POST-S1` and `POST-S390` success, `POST-E2` fresh-page error. Focus and the 390px lower crop are no longer blockers.
- **New defect:** after a success, a later error shows the success strip and the error together (`POST-E1`), because `?sent=1` persists and the banner checks only `sent`. **Correction:** the worker formally withdrew its "no banner" claim for `POST-E1` (it did not count the `role="status"` banner). `POST-E1` stays as evidence.
- **Decision:** a minimal `sent && !errorMessage` guard in `zainf-ama` only. Final browser scope: success, then spent-token error on the same page, top visible, no banner.
- **Access:** the AMA worker again reported a Linux or path access problem, then ran a real shell check (Darwin, Mac route file present) and withdrew the report. The coordinator had confirmed Darwin, the worktree, 4173 HTTP 200, and CDP 52840. No blocker, no outage, no environment rebuild.
- **Final pass:** success, then spent-token error on the same page: banner only after success, field cleared on success and kept on error, 1 row then 0 rows (`final-pass-report.txt`).
- **Status:** both fixes integrated and proven locally with simulated Siteverify. Later UI accepted, and final build and smoke passed (see D-20).

## D-20 Final UI acceptance and final local checks

- **Source:** current coordinator, from the UI owner.
- **Accepted, no open UI issues:** blog option B, article covers, the talk-link fix, Atlas (whole feature), and AMA.
- **Review scope:** Atlas: the UI owner inspected 6 of 14 final frames; the worker inspected the other 8. AMA: `FINAL-S1` and `FINAL-E` accepted, lower form from `POST-E1` and `POST-E2`, focus not a blocker. Deferred: type counts on Atlas.
- **Final checks:** combined build passed (PID 63706, `.amp/in/combined-build-accepted.log`). Built-artifact smoke 56 of 56 on 4178 (`.amp/in/accepted-artifact-smoke.txt`).
- **Limits:** local proof only. Siteverify simulated. No valid blog recording. A real external Turnstile success is not proven.
- **Status:** accepted locally. Not committed, not deployed.

## D-21 Production work needs separate approval

- **Source:** coordinator, several times.
- **Decision:** provisioning, push, and deployment need separate user approval.
- **Historical status:** approval was absent at the October 26 snapshot.
- **Later user approval:** "Yes, release all four—create production resources, configure secrets, migrate, commit, push, and deploy."
- **Condition:** the user required a High-mode Fast review on the same runner before release and permitted infrastructure preparation during review.
- **Current status:** approved. Production resources, migration, secrets, Vercel configuration, website push, and deployment are complete. Real successful Turnstile verification remains open.

## D-22 Release review and two AMA fixes

- **Source:** [High/Fast review](https://ampcode.com/threads/T-01a18904-837a-7669-91d4-e9b84bf037c3), against current base `30cb7ec` plus all feature files.
- **Finding 1:** a successful send cleared the question but did not reset the consumed Turnstile token. The next question could fail. The earlier visual acceptance did not prove this lifecycle.
- **Decision:** reset the existing widget on a successful submission ID change, and keep resets for failed attempts. Do not remount the widget.
- **Finding 2:** native textarea length attributes count UTF-16 units, but the action and Worker count Unicode code points. A mixed 2000-character input could be blocked by the browser.
- **Decision:** use the shared trimmed code-point rule in browser custom validity. Remove native length attributes; keep required input and server validation.
- **Verification:** reviewer component probes and 14 boundary probes pass. Native browser input passed nine boundary cases. Two native sends stored two exact local D1 rows without a reload or intervening error, with one widget render and two resets. A later spent-token failure kept the question and ID and hid the stale success banner.
- **Limits:** the browser run simulated the widget API and Siteverify, with real local D1. It does not prove real Turnstile success. The first run missed the second button during smooth scrolling; its failure is kept as invalid test evidence. The fixed test checks the click target before sending. Saved captures are dark, not light; filenames were corrected after inspection.
- **Status:** both source findings are fixed. The follow-up review found no remaining source blocker. Fresh Node 20.19 type generation, TypeScript, 15 Worker tests, and production build pass.

## D-23 Production Cloudflare preparation

- **Decision:** use APAC D1 `zainf-ama`, a managed Turnstile widget for exactly `www.zainfathoni.com`, and Worker `zainf-ama` on the account's `zain.workers.dev` subdomain. Keep strict hostname and action checks.
- **Result:** D1 is created and migration `0001_questions.sql` is applied. All Worker secrets are installed. The reviewed Worker source is deployed, with a checked SHA-256 match and preserved secret bindings. Worker previews are disabled.
- **Verification:** GET 405, unauthenticated POST 401, authenticated invalid input 400, and real invalid Turnstile token 403. Production D1 has zero questions after denial checks.
- **Vercel:** the user completed CLI sign-in. The three AMA values are set only for production; the shared secret is a Secret. Preview has no AMA values. The website was pushed only after configuration.
- **Status:** production setup complete. Real successful Turnstile submissions and exact production rows remain unproven.

## D-24 Website deployment and public checks

- **Release:** [feature commit 48551e2](https://github.com/zainfathoni/zainf/commit/48551e2624921a0f3f795a2bc81e781aade512ab) is pushed to `main`. Vercel deployment `dpl_8eDpSweEnHZUrumAdeXoBYmbMVjt` is READY, with `www.zainfathoni.com` and the apex domain assigned.
- **Checks:** all 26 production HTTP checks pass. The production shared secret is absent from three checked public HTML routes and 21 referenced JavaScript assets. Production screenshots of blog filters, Atlas desktop/mobile, the latest article cover, and AMA initial state were inspected.
- **Limit:** the first headless AMA run reached the real checkbox but obtained no token. No real successful submission is claimed from that run. A later browser setup check failed because a saved theme cookie overrode the requested light preference; it is invalid test evidence, not a source defect.
- **Status:** all four features are deployed. The remaining verification gate is two consecutive real Turnstile submissions and their exact D1 rows. Do not confuse deployment success with this unproven path.

## D-25 Turnstile script-load race

- **Observed failure:** the actual route did not mount its widget when the API script arrived after hydration. A deterministic browser test recorded an available API, zero widget renders, and an empty container.
- **Fix:** attach a native load listener before checking for an already-loaded API. Remove that listener during cleanup. Keep the existing widget-ID guard and token resets.
- **Review:** the High/Fast reviewer found no new source blocker. Its component probes cover delayed and early API loads, duplicate events, cleanup, and reset behavior.
- **Checks:** the same browser reproduction passes after the fix. The full simulated flow passes two consecutive sends, exact local D1 rows, Unicode boundaries, and duplicate-token rejection. TypeScript, 15 Worker tests, and the build pass.
- **Deployment:** [fix commit 6d56309](https://github.com/zainfathoni/zainf/commit/6d56309d273c0cd17e9a2de564408af132aa2a17) is pushed. Deployment `dpl_GviHT2MHfVNWFCVy39U3twnPERuj` is READY on the production domains. All 26 HTTP checks pass again. The inspected light capture shows the real widget and full form.
- **Limit:** the headless browser did not obtain a token after its native checkbox click. No successful production send is claimed. Two normal-browser sends on the same page and their exact D1 rows remain to be checked.

## D-26 Real production AMA success confirmed

- **User evidence:** the user reported two consecutive submissions with a success message after each.
- **Database evidence:** a read-only D1 query restricted to the two exact question texts returned one row each, with distinct IDs. Creation times are October 30, 11:40:31 and 11:40:38 WIB. No unrelated question text was returned, and verification wrote no rows.
- **Privacy:** question text remains in the private evidence artifact, not the public release record.
- **Limit:** no recording or token capture exists for the user's session. Earlier failed headless runs remain failed evidence.
- **Decision:** the user-assisted production check closes the remaining real submission gate. All four features are deployed, with no open release verification gate.
