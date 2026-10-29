# Website improvements: project record

This record shows the requirements, decisions, ownership, proof, and delivery state of the four website improvements. It uses data from the project threads, the source code, and the proof artifacts.

- **Current release state (October 30):** the user approved all four releases. The High/Fast review found two AMA issues; both are fixed and the follow-up found no source blocker. Local native-browser checks passed with simulated single-use tokens. Production D1, migration, Turnstile widget, Worker secrets, and Worker deployment are complete. Vercel production configuration and website deployment are pending sign-in. Real Turnstile success is still unproven.
- **Historical UI snapshot:** Record updated 2026-10-26, 15:50 WIB (Mac clock, Asia/Jakarta). An earlier label "02:15 WIB" was a wrong logical label: the final smoke it covers ran at 2026-10-26T08:38:44Z (15:38 WIB). First version at 2026-10-25, 14:50 WIB. **UI accepted, with no open UI issues:** blog option B, article covers, the talk-link fix, Atlas (whole feature), and AMA. Final build and built-artifact smoke passed locally. Nothing was committed or deployed at that snapshot.
- **Original proof base:** [`72ebe1d`](https://github.com/zainfathoni/zainf/commit/72ebe1d7e55820fc6247a82d8fdbe287bc5afb83) ("Add Royal vs Frugal Amp slides (#119)"). The October 26 proof and map use this base. See the release preparation update below for the current local base.
- **Delivery state:** website push and deployment remain pending. The Cloudflare Worker is deployed, but it is not yet connected to the production website. See Git history for the commit state.
- **Visual map:** [process-map.html](process-map.html), the historical October 26 UI snapshot. It does not show the October 30 production setup. Open it in a browser. It needs no network.

Other documents in this folder:

- [decision-log.md](decision-log.md): the decision history, with sources, alternatives, and corrections.
- [evidence-index.md](evidence-index.md): proof artifacts, their validity, and rerun commands.

## Release preparation update: October 30, 01:17 WIB

- The user asked the coordinator to do the remaining work directly. The Claude Code threads were told to stop new work.
- Local `main` was fast-forwarded to [`30cb7ec`](https://github.com/zainfathoni/zainf/commit/30cb7ec81426dec96f021e0ca77555cbf53a8c8f), which adds digest #39. All local feature changes were preserved. The earlier proof remains a historical record.
- Current totals are 54 posts: 5 English and 49 Indonesian. The AI Tools type has 38 posts, including the new article. A fresh Node 20.19 build passed in 20.13 seconds, with type generation, TypeScript, and 15 mock Worker tests. A fresh built server on port 4179 passed 24 HTTP checks. Logs: `.amp/in/artifacts/release-prep/latest-main-build.log` and `latest-main-smoke.txt` in the same folder.
- The first new HTTP run checked raw HTML for Atlas counts and missed React's comment separators. It is saved as `INVALID-raw-html-comment-smoke.txt`. The corrected check removes HTML comments before checking the visible count text. No product defect was found.
- Read-only Cloudflare checks found no AMA database, Worker, or Turnstile widget in the Zain Fathoni account. None of its seven existing Workers has a rate-limit binding. The Workers subdomain is `zain`.
- The Vercel project is linked to this repository's `main` branch. Its latest production deployment uses the new digest commit, without these local feature changes. Although project settings say Node 18, the production build log confirms that the package engine rule selects Node 24. No runtime setting was changed.
- Cloudflare and Vercel connector reads work. Wrangler is not logged in, and the local Vercel credentials file has no token. Production setup, remote migration, secret configuration, push, and deployment still need explicit approval. No production changes were made.

## Approved release preparation: October 30

- The user approved production resources, secrets, migration, commit, push, and deployment, with a High/Fast review first. The review ran on the same Mac runner. The coordinator did the fixes and infrastructure work directly.
- Review findings: reset the existing Turnstile widget after each successful ID change; replace native UTF-16 length limits with the shared trimmed code-point rule. Both are fixed. The review follow-up passed component effect probes, 14 boundary probes, and TypeScript. No source blocker remains.
- Native local browser checks passed: two consecutive sends without reload or error, two exact local D1 rows, a reset after each send, and a later duplicate-token rejection with the same ID, retained question, and no success banner. Nine native Unicode boundary cases passed, including 1999 ASCII characters plus one emoji. Both the widget API and Siteverify were simulated. Artifacts: `.amp/in/artifacts/release-review/`.
- Production D1 `zainf-ama` is provisioned in APAC, migration `0001_questions.sql` is applied, and the production Turnstile widget permits only `www.zainfathoni.com`. Worker secrets are installed. The reviewed Worker is deployed at `https://zainf-ama.zain.workers.dev/questions`, with previews disabled. [AMA configuration](../ama.md) records the database ID and uploaded source hash.
- Production Worker checks passed: GET 405, unauthenticated POST 401, authenticated invalid body 400, invalid real Turnstile token 403. The database still has zero questions.
- Vercel sign-in is needed to set the three AMA production-only environment values. Do not push the website before those values are set: the linked `main` push starts production deployment. Preview deployments must not use the production secret or database.
- A real successful Turnstile flow remains a production verification gate. Local simulated results do not close it.

## Status words

This record uses these status words. Each status is a separate step. A later status does not come automatically from an earlier one.

| Status | Meaning |
|---|---|
| Proposed | A thread suggested it. Nobody accepted it yet. |
| Decided | The user or the coordinator accepted it. |
| Implemented | The code is in a worktree or in local `main`. It is not committed. |
| Verified (local) | A check ran and passed on this machine. The record names the check and its limits. |
| Proof in progress | A worker collects browser proof on the shared dev server. The run is not complete. |
| Invalid | A run that the team discarded. Do not use it as evidence. |
| Deployed | The Cloudflare AMA Worker has this status. The website does not. |

## Threads

| Role | Thread | Mode |
|---|---|---|
| Coordinator (current) | [T-01a1733d-1ac1-70f5-bebf-b5ebcc4c3f90](https://ampcode.com/threads/T-01a1733d-1ac1-70f5-bebf-b5ebcc4c3f90) | Coordinator. The user moved coordination here. |
| Coordinator (source) | [T-01a171dd-146e-712a-8053-4a94e8e2cbeb](https://ampcode.com/threads/T-01a171dd-146e-712a-8053-4a94e8e2cbeb) | Coordinator until the handoff. Most decisions in this record come from this thread. |
| Planner | [T-01a171e0-250b-72a8-8d5f-195335e5beb2](https://ampcode.com/threads/T-01a171e0-250b-72a8-8d5f-195335e5beb2) | High, read-only |
| Blog filters worker | [T-01a171e4-fe30-7215-9506-f0a01df48afb](https://ampcode.com/threads/T-01a171e4-fe30-7215-9506-f0a01df48afb) | Claude Code, Haiku 5.5 |
| Atlas worker | [T-01a171e5-0857-761d-8a90-4da9e74dd502](https://ampcode.com/threads/T-01a171e5-0857-761d-8a90-4da9e74dd502) | Claude Code, Haiku 5.5 |
| Article covers worker | [T-01a171e5-1028-77e0-a4e5-44331b1432f5](https://ampcode.com/threads/T-01a171e5-1028-77e0-a4e5-44331b1432f5) | Claude Code, Haiku 5.5 |
| AMA worker | [T-01a171e5-18ae-75c5-97e9-50df7a28a38d](https://ampcode.com/threads/T-01a171e5-18ae-75c5-97e9-50df7a28a38d) | Claude Code, Haiku 5.5 |
| UI design owner | [T-01a171fe-e237-77c9-a1b3-16fcf71510cb](https://ampcode.com/threads/T-01a171fe-e237-77c9-a1b3-16fcf71510cb) | Claude Code, Opus 5.5 |
| Documentation owner | [T-01a17202-2806-7570-aaeb-897bf1c99446](https://ampcode.com/threads/T-01a17202-2806-7570-aaeb-897bf1c99446) | Claude Code, Opus 5.5 |

## Requirements from the user

The user asked for these improvements in the coordinator thread (quoted):

1. "The /blog route only has language filters. I want it to also have filters for the types of article. Some of them are digest articles from WhatsApp groups, and there are 2 different groups."
2. "I want to create an /atlas route, inspired by yegge.ai/atlas, to showcase the content of this website. In away, it's similar to sitemap.xml, but for human."
3. "The homepage has a dead AMA link, the tanyaaja.in website is no longer maintained. I want to replace it with first-party form and private storage, probably in Cloudflare D1?"
4. "…most of them actually have og-images, but they're not rendered in the actual page. So, I want them to be rendered accordingly, if available. Consider this as the 4th task."

Process requirements from the user:

- Delegate each task to a Claude Code thread with Haiku 5.5 in its own worktree. Use a High-mode planner first.
- "I want irrefutable proofs that those features are working as expected, composed using the dev server that's currently running. Each worker is responsible of collecting its own proofs."
- Use a Claude Code thread with Opus 5.5 for UI decisions, after the user rejected the blog filter design.
- Use a Claude Code thread with Opus 5.5 to make this record and the visual map.

## Workstream summary

| Workstream | Decided | Implemented | Verified (local) | Browser proof on 4173 | Deployed |
|---|---|---|---|---|---|
| Blog type filters | Yes. Five types and language. Option B labels. | Yes, in `main` and `zainf-blog`, with option B. | Final build passed. Built artifact (4178): 18 of 18 combinations, labels, empty states. | Checks pass (24 + 14 + 1). **UI accepted.** No valid recording. | No |
| Atlas | Yes. Grouped content navigation. | Yes, in `main` and `zainf-atlas`, with the fragment fix and shared `postTypeOptions`. | Final build passed. Built artifact (4178): Atlas, talks, sitemap. | 31 pass, 0 fail; fragment fix and final viewport series. **UI accepted (whole feature).** The UI owner inspected 6 of 14 final frames; the worker inspected the other 8. | No |
| Article covers | Yes. Use existing OG metadata. | Yes, in `main` and `zainf-article-images`. Fixture route removed. | 53 of 53 posts, 7 of 7 fixtures. Built artifact (4178): cover HTML, `/cover-check` 404. | **UI accepted.** | No |
| AMA | Yes. Vercel action, Worker, private D1. | Yes, in `main` and `zainf-ama`, with the drain fix, clear-on-success fix, and banner guard. | 15 of 15 mock tests. Final build passed. Built artifact (4178): 56-check smoke includes the stale-banner guard and oversize 413 then 200. | HTTP 56 PASS. Final native pass. **UI accepted (local).** Siteverify simulated; a real external Turnstile success is not proven. | No |

### Blog type filters

- **Types:** `ai-tools-digest` (37 posts), `hidup-sehat-digest` (12), `project-notes` (2), `tutorial` (1), `essay` (1). The total is 53. The code gets the type from the slug in [post-types.ts](../../app/models/post-types.ts). There is no metadata migration.
- **URL contract:** `/blog`, `/blog/en`, or `/blog/id`, with an optional `?type=`. Unknown or missing values select all types. Links keep other query parameters.
- **Prerender:** the coordinator removed `/blog`, `/blog/en`, `/blog/id`, and `/ama` from static output in [react-router.config.ts](../../react-router.config.ts). Without this change, static HTML ignores `?type=`.
- **Presentation:** the first version had two rows of identical pills and no visible group labels. The user rejected it. The coordinator said: "There was no recorded decision to omit visible group labels. That was an omission in the plan and my review, not a justified design choice." The UI design owner then chose option B. The Haiku blog worker implemented it, and the coordinator integrated it into `main`. See [decision-log.md](decision-log.md#d-11-blog-filter-presentation-correction-and-option-b).
- **Option B smoke check (coordinator, not full proof):** visible "Language" and "Article type" labels, "All languages", 24px between groups, 12px label gap, 53 posts by default, no horizontal overflow. Captures of the implementation: `.amp/in/artifacts/implemented-filters/desktop-light.png` and `mobile-dark.png`. These are not the prototype captures.
- **Expected counts per language:** English: all 5, AI Tools 3, Project notes 2, others 0. Indonesian: all 48, AI Tools 34, Hidup Sehat 12, Tutorial 1, Essay 1, Project notes 0. The page `/blog/id?type=tutorial` shows 1 post. It is not an empty state. Some UI design file names call it "empty". That label is wrong.

### Atlas

- Atlas is grouped content navigation for people. It is not a graphical sitemap.
- Sections: "Start here", "Writing", "Talks and podcasts", "Projects", "About and tools". Data comes from the existing models through a route loader.
- The worker also added Atlas links to the header, mobile menu, footer, and `sitemap.xml`.
- `/atlas` stays prerendered.

### Article covers

- [PostHeader.tsx](../../app/components/PostHeader.tsx) shows the `og:image` of the article after the header. All 53 posts have one.
- Alt text comes from `og:image:alt`. If it is missing, alt is empty.
- Same-site absolute URLs become local paths. Only `https:` external URLs stay. Missing, blank, or invalid values show no image.
- `showCover?: boolean` (default `true`) is an opt-out.

### AMA

- Flow: `/ama` form → Vercel route action → authenticated, write-only Cloudflare Worker (`POST /questions`) → private D1 table `questions (id, question, created_at)`.
- The Worker checks Turnstile Siteverify `success`, the expected hostname, and the action `ama`. It fails closed.
- A rate-limit binding allows about 20 attempts per 60 seconds on one key, `ama-submissions`. Cloudflare applies it per location, so it is approximate.
- **Local Turnstile mismatch:** Cloudflare docs say the dummy key returns hostname `localhost` and action `test`. The live endpoint returned hostname `example.com`, no `action`, and success for the token `bogus`. The strict checks therefore reject the dummy token. The coordinator said: "Do not weaken production validation."
- **Cross-origin rejection:** a cross-origin POST to `/ama` returns 500. The coordinator confirmed that this is the built-in React Router CSRF rejection, which runs before the action. It is not evidence that the action accepted the origin. The team keeps this framework guard. No config change is planned.
- **Cross-origin evidence:** the coordinator saved the 500 status and the React Router rejection source (`throwIfPotentialCSRFAttack`) in `.amp/in/csrf-denial.txt`. The AMA worker observed 0 Siteverify calls for a cross-origin post. The coordinator check alone does not show 0 database rows. The AMA worker owns the row and call evidence.
- **Secret scan:** the coordinator scanned 282 client build files (`.js`, `.html`, `.data`, `.json`) for the exact local shared secret: 0 matches.
- **Proof harness:** an ignored Miniflare harness on port 8788 runs the unchanged Worker with real local D1 and the real rate-limit binding. It replaces only the Siteverify call. The real Worker on port 8787 uses the real external Siteverify and stays separate.

## Ownership and file boundaries

| Owner | Files |
|---|---|
| Blog worker | `app/models/post-types.ts`, `app/components/BlogArchiveList.tsx`, `app/routes/_layout.blog_._index.tsx`, `_layout.blog_.en.tsx`, `_layout.blog_.id.tsx` |
| Atlas worker | `app/routes/_layout.atlas.tsx`, `app/components/Header.tsx`, `app/components/Footer.tsx`, `app/routes/sitemap[.xml].tsx`, and later `app/components/TalksList.tsx` (only the `scroll-mt-24` fragment fix). Reads `postTypeOptions` from the blog worker's `app/models/post-types.ts`. |
| Covers worker | `app/components/PostHeader.tsx` |
| AMA worker | `app/routes/_index.tsx` (call to action only), `app/routes/_layout.ama.tsx`, `app/models/ama.ts`, `app/services/ama.server.ts`, `workers/ama/**`, `docs/ama.md`, `.env.example`, `package.json`, `pnpm-lock.yaml` |
| Coordinator | `react-router.config.ts`, integration into `main`, the temporary `app/routes/_layout.cover-check.tsx` fixture, the shared dev server |
| UI design owner | Design only. Artifacts in `.amp/in/artifacts/ui-design/`. No production source. |
| Documentation owner | `docs/website-improvements/**`, `.amp/in/artifacts/process-map/**` |

## Integration order

The coordinator copied worker files into local `main` in this order. Nothing is committed.

1. Prerender exclusions in `react-router.config.ts`.
2. Article covers (`PostHeader.tsx`, unchanged copy).
3. Blog filters, then a coordinator change from `gap-3` to `gap-2` on the type row.
4. Atlas, after the loader change.
5. AMA (14 files), then `CI=1 pnpm install --frozen-lockfile` and a dev server restart with AMA variables. The restart made some proof runs invalid.
6. Blog option B in `BlogArchiveList.tsx`, implemented by the Haiku blog worker. The file in `main` is identical to `zainf-blog`. The coordinator ran a smoke DOM check. Typecheck on `main` then passed (PID 37890, exit 0).
7. The coordinator removed the temporary `app/routes/_layout.cover-check.tsx` from `main` after the covers proof.
8. The AMA explicit-render route fix and `docs/ama.md` copied to `main`. Both files are identical to `zainf-ama`.
9. Atlas fixes: `scroll-mt-24` on the talk `Card` in `app/components/TalksList.tsx` (identical to `zainf-atlas`), and `_layout.atlas.tsx` now imports the shared `postTypeOptions` from `app/models/post-types.ts`. The coordinator did not copy the duplicate array from the worktree, so the `main` copy of `_layout.atlas.tsx` intentionally differs from `zainf-atlas`. The final typecheck and build after these edits passed.

## Acceptance criteria

- **Blog:** all 18 language and type combinations have the correct counts and descending dates. The legacy nested slug works. Active links, empty states, direct loads, refresh, Back, and Forward work. Option B adds visible "Language" and "Article type" labels, "All languages", a teal focus outline, and the text "No posts match this language and type."
- **Atlas:** `/atlas` renders and is prerendered. Each internal route and fragment exists. Type links use the agreed values. Counts come from the models. Navigation works at narrow widths and in light and dark themes.
- **Covers:** absolute and relative sources, authored alt, missing alt or dimensions, no image, and opt-out all behave as specified. Existing inline images stay. Mobile and desktop, light and dark.
- **AMA:** a valid submission creates one row. Data survives a restart. Invalid input, unauthorized calls, failed tokens, and rate-limit denials create no rows. SQL-like text is stored literally. A repeated ID never creates two rows. A database failure never shows success. No secret or question leaks into GET responses, loader data, browser assets, or logs.

## Open items

- Blog: `.amp/in/artifacts/proof-blog/out/consolidated-result.md` reports 24 matrix and edge checks, 14 flow checks, and 1 keyboard focus check, all pass. The 12 layout and state capture reviews are accepted. Limit: the project-notes captures show only the first of 2 posts in the viewport; the DOM count confirms 2. The coordinator inspected `mobile-dark-empty.png`: labels, reset link, no clipping. **There is no valid blog recording.** The pre-design baseline was not captured in the final run.
- Atlas: UI review found that the floating header hid the talk title at a fragment target (for example `/talks#royal-vs-frugal-amp-2026`). The fix (`scroll-mt-24` in `TalksList.tsx`, plus Atlas type labels and URLs from the shared `postTypeOptions`) is in `main`. **Before evidence is qualitative only:** an earlier screenshot shows the title clipped. There is no valid numeric before measurement. New proof on 4173, desktop and mobile, after scroll settles, is authorized and pending. Type counts on Atlas are optional and deferred (not a blocker).
- Atlas post-fix fragment proof (`.amp/in/artifacts/proof-fragments/post-fix/`: `REPORT.md`, `results.jsonl`, `provenance.txt`, `run-fragments.mjs`, `shots/`): 6 of 6 native clicks from `/atlas` (3 talk targets × 1280 and 390 widths) landed with the title visible and a clear hit test. Each read was stable over two samples 1 s apart.
  - In 2 cases the header was pinned: header bottom 64px, title top 132px (desktop `idsw-2025`) and 156px (mobile `idsw-2025`). In the other 4 cases the header had scrolled out of view, so it could not cover the title.
  - One cold load of `/talks#royal-vs-frugal-amp-2026` at 1280: title top 132px.
  - **Limits and corrections:** `coldload-desktop-royal.png` is dark; the six click captures are light (the first report said light only; the worker corrected `REPORT.md`). Grey card backgrounds in the captures are pointer hover, not target highlighting. The translucent header background is unchanged by the fix. No matched, measured before pair. The earlier `fragment-idsw-2025.png` supports a qualitative hidden-title before state only. So no causal claim for `scroll-mt-24`.
  - **UI review:** the UI owner inspected all 7 saved captures and **accepts fragment title visibility only**.
  - **Final proof (worker report, `.amp/in/artifacts/proof-atlas-final/`: `REPORT.md`, `results.jsonl`, `provenance.txt`, `run-series.mjs`, `shots/`):** 14 viewport captures (no full-page images): desktop 1280 light and dark (3 each), mobile 390 light and dark (4 each). Theme checked in the DOM. Fresh `/atlas` load per combination on 4173 (listener PID 97220).
    - All 5 rendered type labels are exact ("AI Tools digests", "Hidup Sehat digests", "Project notes", "Tutorials", "Essays") with the agreed `/blog?type=` links.
    - Sections in order (Start here, Writing, Talks and podcasts, Projects, About and tools), one `h1`, no horizontal overflow at 390 (390/390), scroll positions increase to the page end with no repeated top.
    - **Limits:** visual check at two widths only. The label check does not re-check filtered results; that was the earlier 31-check proof, which ran before the `postTypeOptions` integration. Worker notes, not defects: a large gap above the footer (section spacing); mobile footer links fit one row at 390.
    - **UI acceptance:** the UI owner accepts Atlas as a whole feature. The owner personally inspected 6 of the 14 final frames: `desktop-1280-dark-00`, `desktop-1280-light-01`, `desktop-1280-dark-02`, `mobile-390-light-01`, `mobile-390-light-02`, `mobile-390-dark-03`. The worker alone inspected the other 8. Type counts on Atlas are deferred and not a blocker.
- Atlas captures: `desktop-dark` and `mobile-light` full-page captures are invalid because of stitching (repeated content). A viewport capture series is needed. The worker must also review the recordings and fix the dynamic provenance with a hash comparison. The coordinator found the desktop light five sections readable. A faint full-width line does not hide text.
- AMA HTTP: 56 assertions over H1 to H17, all PASS, 0 FAIL: 18 in `http-results-H1-H6-valid.tsv` and 38 in `http-results-H7-H17.tsv`. The worker first reported 47 for H7 to H17, then accepted 38. The count is settled. Covered: oversized rejection, outage and spent-token failure, success, same-ID idempotency and conflict, literal SQL-like storage, unauthorized Worker denial, public response privacy, the 20/21 rate boundary, and recovery after reset. Siteverify is simulated by the 8788 harness. The oversize drain fix is implemented and verified (see incident section).
- AMA browser (partial), in `.amp/in/artifacts/proof-ama/browser-shots/`: native short-input validation (`B1`), native success with 1 Siteverify call and 1 row with the exact text (`S1`), and a mobile spent-token error that keeps the question (`M2`).
  - **UI accepted (dark theme only):** the desktop initial layout, covered by `B0` and `B1` together. `B0` shows the heading, intro, label, hint, and textarea. `B1` shows the bottom part: widget, button, and privacy note. Also accepted: the `M2` mobile error layout, and the `S1` success banner only (it already has `role="status"`).
  - **Confirmed defect:** after a successful submit, the form still shows the sent question (`S1`).
  - **Wording change (UI owner):** clearer text for the 403 error, so that it does not contradict the dummy test widget, which always shows success.
  - **Assigned to the AMA worker** in `zainf-ama` only: clear the question on success, and the new 403 text. It waits until the Atlas proof is complete. After integration, `main` needs another build and smoke.
  - **Before state (unchanged `main`):** a native click success stored exactly 1 row and made 1 more Siteverify call. The loader issued a new ID, but the textarea kept the sent question. Capture: `.amp/in/artifacts/proof-ama/browser-shots/BASE-S1-retained-text-before-fix-DARK.png`.
  - **Integration:** the coordinator then copied only the agreed 403 text, `key={id}` on the textarea, and its comment into `main`. Re-read and `cmp` match the worker file, the diff check is clean, and `/ama` returns 200. The documentation owner confirmed with `cmp` that `main` and `zainf-ama` copies of `_layout.ama.tsx` are identical. The banner `role="status"` is unchanged.
  - **After the fix (worker reports, native clicks):**
    - Success: the textarea is empty, new ID, +1 Siteverify call, 1 row with the exact text.
    - Spent token: 403, the text stays, same ID, 0 rows. The worker also reported "no banner". **That claim is wrong:** the worker formally withdrew it, because it did not count the `role="status"` banner. `POST-E1` is kept as evidence and shows the banner.
    - Recovery after the error: success, the field clears, new ID, +1 Siteverify call, 1 row with the exact text.
  - **UI owner acceptance (light theme):** the initial view from `POST-B0` plus `POST-E1`, desktop and mobile success from `POST-S1` and `POST-S390`, and the fresh-page error from `POST-E2`. Keyboard focus and the lower form crop at 390px are no longer blockers. `E2` shows the kept text, the new 403 wording, the widget, and the button. The Turnstile test-key warning is expected, not a product defect.
  - **New material defect:** `POST-E1` (an error after an earlier success on the same page) shows the teal success strip and the red error at the same time. Cause found by the coordinator: `?sent=1` stays in the URL, and the banner checks only `sent`. The coordinator is verifying the image and the source. The documentation owner viewed `POST-E1` with `view_media`: a pale green strip at the top (its text is cut off) and the red 403 error are both visible, light theme.
  - **Guard state:** the one-line guard `sent && !errorMessage` is now integrated into `main` (line 175). The coordinator confirmed `cmp` with the worktree, `/ama` 200, and the diff check; the documentation owner confirmed `cmp` too. Not browser-verified yet.
  - **Final native pass (complete, `.amp/in/artifacts/proof-ama/final-pass-report.txt`, IDs in `final-pass-ids.txt`):** same page, light theme, desktop 1280×800, shared 4173, Siteverify simulated by harness 8788, CDP 52840, session `zainf-proof-ama-cdp` (closed).
    - Step S (accept): `/ama?sent=1`, one `role="status"` banner "Thanks. Your question was saved privately.", field empty, new ID, Siteverify +1, 1 row for the first ID.
    - Step E (spent token, after S): still `/ama?sent=1`, 0 `role="status"` banners, alert shown, field keeps "Final pass question two: rejected check keeps this text.", same ID, Siteverify +1, 0 rows for that ID.
    - Captures: `browser-shots/FINAL-S1-success-light-desktop.png`, `browser-shots/FINAL-E-error-after-success-light-desktop.png`. The coordinator and the documentation owner inspected both. In `FINAL-E` the bottom of the error text is clipped; the visible start matches the source text. (An automatic image description guessed different words for the clipped part; the record uses the source text, not that guess.)
    - **UI acceptance:** the UI owner accepts AMA with no open UI issues. `FINAL-S1` (empty field, banner) and `FINAL-E` (no banner, question kept) are accepted; the owner read the exact 403 text. `FINAL-E` and `FINAL-S1` crop the lower form; `POST-E1` and `POST-E2` supply the lower-form views. Focus is explicitly not a blocker. A real external Turnstile success stays unproven.
  - **Second wrong access report, withdrawn:** the AMA worker again reported a Linux actor or path access problem. The coordinator's shell showed Darwin, the AMA worktree reachable, 4173 returning HTTP 200, and a listener on CDP 52840. The worker then ran a real shell check (`pwd` in `/private/tmp`, `uname` Darwin, the absolute Mac route file exists) and withdrew its Linux reports. There was no access blocker and no outage. The only browser hold is the Atlas exclusive turn.
  - **Final browser scope for AMA:** success, then a spent-token error on the same page, with the top of the page visible and no success banner.
  - **Invalid:** `INVALID-focus-not-textarea-POST-focus-textarea-desktop-light.png` (focus on a nav link). Focus is no longer a blocker.
  - **Superseded:** this AMA state was later resolved; the guard is integrated and AMA is UI accepted (see the final native pass below).
  - **Build:** a new build and smoke of `main` with this fix are pending.
  - **Withdrawn:** the reset concern. It was a visual concern, not a proven functional failure.
  - **Capture limits:** all four files named "light" (`B0`, `B1`, `S1`, `M2`) show the dark theme.
  - **Pending:** light-theme initial, success, and error captures; success at 390px; a full corrected `S1`; textarea and button focus. A real external Turnstile success stays unproven.
  - AMA released the browser. Atlas has the exclusive turn on 4173.
- Port 4174 is PID 23129, `react-router-serve` from an older `main` build. It does not include AMA or option B. Do not use it as final evidence.
- Coordinator: **final checks passed.** `.amp/in/combined-build-accepted.log`: Node 20.19, typegen, `tsc`, 15 of 15 mock Worker tests, build 22.33s (PID 63706, exit 0). A fresh build server on 4178 (PID 64274, server hash `cfcf59e111b9eaf060b639be52f138d7d8498ba974e121c48be1c806a9cfd829`) passed `.amp/in/accepted-artifact-smoke.txt`: 56 of 56 HTTP and static checks, including 18 blog combinations with labels and empty states, AMA UUIDs, Atlas, talks, cover, sitemap, `/cover-check` 404, prerender exclusions, the success banner and the stale-banner guard (same query with a 503 keeps the question and hides the banner), oversize 413 then `GET` 200, and no local secret in 283 client files. Server 4178 has no Worker config; no external writes. This is the current artifact proof. The 4177 smoke and earlier smokes are historical. The runtime is still running.
- No proof here is real end to end for AMA. A real success path needs real Turnstile keys and approved production resources.

## Incident: blog recording and shared browser

- The blog recording `out/recording/filter-flow.webm` clicked "Bahasa Indonesia" instead of "English" because of a selector error (`nth-child(3)` instead of `nth-child(2)`). Verdict: not met.
- The blog worker then deleted that file by mistake during cleanup. Two retries failed ("No recording in progress", then "No frames captured"). `out/recording/` now holds only `end-state.json`.
- While it tried to recover, the blog worker ran `pkill` on `agent-browser-darwin-arm64`. This stops every agent-browser daemon on the machine, not only its own session. Other workers' browser runs may have been interrupted.
- The coordinator paused the recording recovery. It told the Atlas and AMA workers to check their sessions and rerun only the interrupted steps. Dev server PID 30197 stayed healthy. No effect on code was observed.
- The same click sequence has log evidence (`flow/log.txt` steps 07 and 08, and `end-state.json`). This is not a recording.
- Recordings are not accepted for any workstream.
- The coordinator then reserved the browser for an exclusive AMA proof window. The documentation owner stopped its own map renders. The last map captures predate the 19:20 WIB updates.

### Correction: wrong AMA access-blocker report (first of two)

- The AMA worker reported that it had resumed in a Linux sandbox without access to the Mac checkout or the local services. **That report was wrong.**
- The AMA worker checked its shell again: Darwin, and the original services are reachable. The coordinator confirmed `pwd`, `uname`, and the ports independently. There was no access blocker and no environment migration.
- The original AMA worker now runs a fresh, bounded proof itself. The coordinator does not take over, and no new thread was created. No recreation of the Worker, D1, or harness. No new production resources.
- At that time, the exclusive AMA browser window continued, and other browser commands stayed on hold. (Historical. The coordinator later released the browser.)

### AMA proof run with no results (screenshot hangs)

- The latest AMA run wrote only a header. It has no check results and no captures. Screenshot commands still hang.
- The AMA worker stopped only its own command and session, and released the old browser window. Services (4173, 8787, 8788) are healthy.
- The coordinator is diagnosing a separate, task-owned Chrome/CDP capture path. There is no restart of shared browser processes. The AMA worker can use that path after the diagnosis.
- **Diagnosis result (coordinator):** in a new, isolated Chrome 148, a direct CDP `Page.captureScreenshot` call timed out after 15 seconds on `/ama` and also on `about:blank`. DOM reads and navigation succeeded. So the capture failure does not depend on the AMA page content, and it is not only a CLI problem. The coordinator closed only its diagnostic Chrome (with `Browser.close`). No source edits and no shutdown of shared browsers.
- **Next:** the coordinator tests a browser with software rendering.
- **Later result:** with the GPU disabled, direct CDP capture still times out, even on a blank page. The next test is a separate installed system Chrome version.
- **Working capture path:** a separately installed system Chrome 155, headless, with the isolated profile `.amp/in/browser-diagnostic-profile` and CDP port 52840. Direct CDP capture succeeded on a blank page and on `/ama` (form and token ready). Capture: `.amp/in/artifacts/browser-diagnostic/ama-cdp.png`.
- **What that capture shows (coordinator and documentation owner inspected it):** the navigation includes Atlas, the "Ask me a question." heading, the question field ("Use 10 to 2000 characters."), the Turnstile test widget in its "Success!" state, and the "Send question" button. The site privacy note is below the fold and is not claimed. The "Privacy · Help" links in the widget belong to Cloudflare, not to the site.
- **Root cause:** not known. The old test Chrome 148 failed. The working runtime changed more than one thing (version and flags), so the record claims only that this alternate runtime works.
- **Next:** the AMA worker uses this path for its proof. This diagnostic capture is not AMA acceptance. No app code was edited.

### Shared dev server stopped during the AMA HTTP run

- The shared dev server (PID 30197, port 4173) stopped during the AMA HTTP run. The coordinator confirmed that no process listened on 4173 and that shell 30128 exited with code 1. The tool did not show the binary-looking output. The cause was not verified at that time. See "Confirmed bug: oversized AMA POST stops the dev server" below.
- The coordinator restarted the dev server with the same `main` configuration: port 4173, `AMA_WORKER_URL` to harness 8788, the dummy Turnstile site key, and the local secret (shell 95344). Health and provenance checks are pending.
- **AMA HTTP cases:** H1 to H6 completed before the stop and are valid. H7 and later are invalid. The AMA worker reruns only the missing cases after the health check.
- No app code was edited.
- No new AMA acceptance is recorded. Other browser rendering stays paused during the diagnosis.

### Confirmed bug: oversized AMA POST stops the dev server

- **Reproduced before any fix** on a dev server with Node 20.19 (process 96715): a chunked, oversized POST to `/ama` returned 413. The next `GET /ama` then failed with `ECONNREFUSED`, so the server process had stopped. Stack: `TypeError: Invalid state: Controller is already closed` (`ERR_INVALID_STATE`), in the `@remix-run` node-fetch adapter (line 157, as the coordinator reports).
- **Artifacts:** `.amp/in/ama-oversize-before.txt` (GET 200, then 413, then `ECONNREFUSED`) and `.amp/in/dev-server-repro.log` (stack).
- **Root cause (coordinator):** when the body is too large, `readAmaBody` calls `reader.cancel()`, which closes the request stream. The adapter's `end` listener then closes the same stream again and throws.
- **Correction:** earlier statements that blamed random runtime instability are withdrawn. The record has no logs from the PID 30197 stop, so the link between that stop and this bug comes from the reproduction, not from those logs.
- **Decision:** the AMA worker is authorized to make a bounded source fix (drain the rest of the oversized body without buffering it), with docs and an HTTP regression test. No upgrade of the shared adapter.
- **Fix in `main`:** `readAmaBody` in `app/services/ama.server.ts` now drains the rest of an oversized body without buffering it, instead of calling `reader.cancel()`. The new coordinator inspected the implementation in `main`.
- **After the fix:** the same slow chunked request returned 413, and the next `GET /ama` returned 200 (before the fix: 413, then `ECONNREFUSED`). Artifact: `.amp/in/ama-oversize-after.txt`.
- **Regression:** chunked and `Content-Length` oversized POSTs, 4 of 4 PASS (413, then the server still answers 200 for each). Artifact: `.amp/in/ama-oversize-regression.txt`.
- **Build state:** typegen, `tsc`, 15 of 15 mock contract tests, and `pnpm run build` passed on `main` with explicit Node 20.19 (PID 97406, exit 0, build 25.33s). Log: `.amp/in/combined-build-drain.log`. This is the current valid build. The dev listener after the fix is PID 97220 (shell 97208).
- **Status:** fixed and verified (local). No more source or build changes are planned. This fix alone is not AMA acceptance.

### Map HTML write pause

- The Vite log shows a page reload when `docs/website-improvements/process-map.html` or its artifact copy changes. Such reloads can interrupt captures on 4173.
- The documentation owner does not write the map HTML or its artifact copy during final browser runs. It batches HTML updates after the proof window. Markdown edits continue.
- This is a precaution based on the reload logs. It is not a claimed cause of earlier image defects.
- **Last writes before the pause:** `docs/website-improvements/process-map.html` at 19:46:36 WIB. The artifact copy at 19:49:41 WIB; this was an unchanged-content `cp` that ran after a failed Markdown script, before the pause request arrived.
- **Still in effect** (new coordinator): AMA, then Atlas, use the shared 4173 for proof.
- **Effect:** the map HTML does not yet show the oversize bug or later statuses. The Markdown files are the current record.

### Cross-session capture error (documentation owner)

- At 19:30 WIB, a `screenshot` command in session `zainf-process-map-2` did not write to its requested path. The documentation owner then copied the newest file in the shared `~/.agent-browser/tmp/screenshots/` folder (`screenshot-1792914170933.png`) to `.amp/in/artifacts/process-map/desktop-light-atlas.png`.
- `view_media` showed that the copy was a blog archive page, not the process map. The source file has a time of 14:42 WIB, so it came from an earlier run of another session.
- The documentation owner deleted only its own copy. The source file in the shared folder is not changed. No claim uses this capture.
- **Rule (coordinator):** do not take the newest file from the shared screenshot folder. Use only the exact output path that your own command reports, and check the page identity. If the check fails, discard the capture claim. Do not touch files that belong to other sessions.

## Production approvals

The earlier October 26 record required separate approval. The user later said:
"Yes, release all four—create production resources, configure secrets, migrate,
commit, push, and deploy." The user also required a High-mode Fast review on the
same runner before release and allowed infrastructure preparation during review.
That review and its follow-up are complete. Cloudflare setup is complete; Vercel
sign-in, website deployment, and real successful Turnstile verification remain.
