---
marp: true
paginate: true
theme: default
backgroundColor: #ffffff
title: You don't need CLI
description: Let models operate the CLI for you, and let Orbs host them — SWE Growth Meetup, 26 September 2026
url: https://www.zainfathoni.com/you-dont-need-cli.html
image: https://www.zainfathoni.com/assets/you-dont-need-cli.png
footer: "26 September 2026 | You don't need CLI"
style: |
  @font-face {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 300 700;
    src: url("assets/fonts/SpaceGrotesk-variable.woff2") format("woff2-variations");
  }

  @font-face {
    font-family: "Amsterdam Four";
    font-style: normal;
    font-weight: 400;
    src: url("assets/fonts/AmsterdamFour.ttf") format("truetype");
  }

  :root {
    --text: #111827;
    --muted: #6b7280;
    --line: #e5e7eb;
    --accent: #f28c28;
    --blue: #2563eb;
    --green: #16a34a;
    --red: #dc2626;
  }

  section {
    width: 1280px;
    height: 720px;
    padding: 52px 64px 58px;
    font-family: ".SF NS", "PolySans Var", PolySansVariable, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: var(--text);
    background: #fff;
    letter-spacing: -0.02em;
  }

  section::after {
    color: #9ca3af;
    font-size: 18px;
    padding: 0 64px 28px 0;
  }

  footer {
    left: 64px;
    right: auto;
    bottom: 28px;
    color: #9ca3af;
    font-size: 18px;
    letter-spacing: 0;
  }

  h1, h2 {
    color: var(--text);
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-weight: 700;
    line-height: 0.98;
    margin: 0;
    letter-spacing: -0.04em;
  }

  h1 { font-size: 74px; }
  h2 { font-size: 60px; }

  h1::after, h2::after {
    content: "";
    display: block;
    width: 150px;
    height: 7px;
    margin: 22px 0 28px;
    background: var(--accent);
    border-radius: 999px;
  }

  p, li {
    font-size: 29px;
    line-height: 1.35;
    letter-spacing: -0.015em;
  }

  ul, ol {
    margin: 0;
    padding-left: 1.15em;
  }

  li + li { margin-top: 12px; }

  a { color: var(--blue); }

  blockquote {
    margin: 0;
    padding: 0 0 0 24px;
    border-left: 7px solid var(--accent);
    color: var(--text);
  }

  blockquote p {
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 34px;
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .slide {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 54px;
    height: 100%;
    align-items: center;
  }

  .slide.wide-left {
    grid-template-columns: 1.12fr 0.88fr;
  }

  .title-slide {
    display: grid;
    grid-template-columns: 0.92fr 1.08fr;
    gap: 64px;
    height: 100%;
    align-items: center;
  }

  .subtitle {
    margin-top: 4px;
    font-size: 34px;
    color: #374151;
    line-height: 1.25;
  }

  .eyebrow {
    display: inline-block;
    margin-bottom: 18px;
    color: var(--muted);
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .bio-card {
    display: grid;
    grid-template-columns: 170px 1fr;
    gap: 28px;
    align-items: start;
  }

  .bio-card img {
    width: 170px;
    height: 170px;
    object-fit: cover;
    border-radius: 28px;
  }

  .bio-card h3 {
    margin: 0 0 12px;
    font-size: 36px;
    line-height: 1.08;
    letter-spacing: -0.04em;
  }

  .bio-card p {
    margin: 0 0 14px;
    font-size: 22px;
    color: #374151;
  }

  .visual {
    border: 1px solid var(--line);
    border-radius: 28px;
    padding: 32px;
    background: #fafafa;
    box-shadow: 0 22px 48px rgba(17, 24, 39, 0.09);
  }

  .visual.flush {
    padding: 0;
    overflow: hidden;
  }

  .visual img {
    width: 100%;
    display: block;
  }

  .big-number {
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 112px;
    line-height: 0.95;
    font-weight: 700;
    letter-spacing: -0.06em;
  }

  .caption {
    margin-top: 18px;
    color: var(--muted);
    font-size: 20px;
    line-height: 1.35;
  }

  .stack {
    display: grid;
    gap: 18px;
  }

  .pill {
    display: inline-block;
    width: fit-content;
    padding: 8px 14px;
    border-radius: 999px;
    background: #fff7ed;
    color: #9a3412;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  .card {
    padding: 22px 24px;
    border: 1px solid var(--line);
    border-radius: 22px;
    background: #fff;
  }

  .card strong {
    color: var(--text);
  }

  .card p {
    margin: 6px 0 0;
    font-size: 22px;
    color: #374151;
  }

  .card + .card { margin-top: 18px; }

  .flow {
    display: grid;
    gap: 12px;
    font-size: 30px;
    font-weight: 800;
  }

  .flow div {
    padding: 16px 20px;
    border-radius: 18px;
    background: #fff;
    border: 1px solid var(--line);
  }

  .flow.compact {
    gap: 9px;
    font-size: 24px;
  }

  .flow.compact div {
    padding: 12px 18px;
  }

  .arrow {
    color: var(--accent);
    text-align: center;
    font-size: 36px;
    font-weight: 900;
  }

  .flow.compact .arrow {
    font-size: 22px;
    line-height: 1;
    padding: 0;
    border: none;
    background: transparent;
  }

  .quote-source {
    margin-top: 14px;
    color: var(--muted);
    font-size: 20px;
  }

  .small-list li {
    font-size: 25px;
  }

  .qa {
    height: 100%;
    display: grid;
    place-content: center;
    text-align: left;
  }

  .qa h1 {
    font-size: 110px;
  }

  .links p {
    font-size: 30px;
    margin: 8px 0;
  }

  .qa.qa-split {
    grid-template-columns: 1fr auto;
    gap: 64px;
    align-items: center;
    place-content: center;
  }

  .qa.qa-split img {
    width: 430px;
    display: block;
  }

  .signature {
    font-family: "Amsterdam Four", cursive;
    font-weight: 400;
    letter-spacing: 0;
  }

  .bio-card {
    align-items: center;
  }

  .bio-card h3.signature {
    font-size: 46px;
    line-height: 1;
    padding: 30px 0 0 12px;
    margin: 0 0 28px;
  }

  .refs li {
    font-size: 24px;
  }

  .refs li + li {
    margin-top: 9px;
  }

  .qa p.signature {
    font-size: 60px;
    color: var(--text);
    margin: 28px 0 0;
    line-height: 1.1;
  }

  .agenda {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }

  code {
    background: #f3f4f6;
    border-radius: 8px;
    padding: 2px 10px;
    font-size: 0.92em;
  }

  .term {
    padding: 22px 26px;
    border-radius: 22px;
    background: #111827;
    color: #e5e7eb;
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 21px;
    line-height: 1.55;
    letter-spacing: 0;
  }

  .term .dim { color: #6b7280; }
  .term .ok { color: #4ade80; }
---

<div class="title-slide">
<div>

# You don't need CLI

<p class="subtitle">Let the model drive the terminal. Let an Orb host it.</p>

</div>
<div class="bio-card">

![Zain Fathoni](assets/zain-1280.jpeg)

<div>

<h3 class="signature">Zain Fathoni</h3>

Senior Software Engineer based in Yogyakarta, Indonesia. Previously backend, manager, frontend, now fullstack.

Community builder (Ketua [VibeFromCafe.id](https://vibefromcafe.id)) · Agentic Engineering Practitioner.

<https://zainfathoni.com>

</div>
</div>
</div>

<!--
P1 — Who & What / Clarity.
The title is a provocation on purpose. The claim: YOU don't need the CLI anymore.
The CLI itself is alive and well — the model operates it for you, and it doesn't even run on your laptop.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P2 · Common Ground</span>

## The terminal used to be a rite of passage

We learned `git`, `ssh`, `grep`, `docker`, and a hundred flags we still Google.

Terminal fluency felt like **proof you were a real engineer.**

</div>
<div class="visual">

<div class="term">
<span class="dim">$</span> git rebase -i HEAD~3<br/>
<span class="dim">$</span> docker compose up -d<br/>
<span class="dim">$</span> gh pr create --fill<br/>
<span class="dim">$</span> pnpm run typecheck<br/>
<span class="dim">$</span> man tar <span class="dim"># again</span>
</div>

<p class="caption">Everyone in this room has typed these. Most of us still look up the flags.</p>

</div>
</div>

<!--
P2 — Common Ground: we all paid our dues in the terminal.
Get nods first. Ask: "Who here has Googled the tar flags more than once?" Establish that CLI skill was a badge.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P3 · Coming Problem</span>

## Your laptop became the bottleneck

Every tool ships a CLI. Every agent wants a checkout, a port, a browser.

Run three agents locally and you're babysitting **worktrees, conflicting processes, and fans at full speed.**

</div>
<div class="visual">

<span class="pill">Thorsten Ball · 4 August 2026</span>

<blockquote>

Now that I don't have to worry about any of this — not how many checkouts I have … or whether there's processes conflicting or ports being already open — I spawn so many more agents.

</blockquote>

<p class="quote-source">“What I Want to Tell You About Orbs”<br/><a href="https://ampcode.com/notes/what-i-want-to-tell-you-about-orbs">ampcode.com/notes/what-i-want-to-tell-you-about-orbs</a></p>

</div>
</div>

<!--
P3 — Coming Problem: the local machine is the ceiling.
The friction isn't typing commands — it's the local environment. Checkouts, dirty worktrees, port clashes.
Thorsten admits he'd have told you to "git good" two months earlier. The friction was invisible until it was gone.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P4 · Emotional Win</span>

## Imagine closing your laptop early

You describe the outcome. The agent does the work somewhere else.

You come back to **proof**, not a pile of terminal output.

</div>
<div class="visual">

<blockquote>

It didn't take up anything! No checkout, no ports, no browser, nothing!

</blockquote>

<p class="quote-source">Thorsten Ball, after an agent ran 8–30 minutes testing its own work — while his phone was back in his pocket.</p>

</div>
</div>

<!--
P4 — Emotional Win: work keeps moving while you walk away.
Paint the feeling: laptop closed, phone in pocket, agent still testing. That's the promise.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P5 · False Hope</span>

## “I just need a better terminal setup”

More tmux panes. More worktrees. Sharper dotfiles. A faster laptop.

It helps — until **one machine** is running every agent, every server, and you.

</div>
<div class="visual">

<div class="card">
<strong>🪟 More panes</strong>
<p>More agents to watch, not fewer things to do.</p>
</div>

<div class="card">
<strong>🌳 More worktrees</strong>
<p>More checkouts to create, sync, and clean up.</p>
</div>

<div class="card">
<strong>💻 Bigger laptop</strong>
<p>Same ceiling, just higher. Still one machine.</p>
</div>

</div>
</div>

<!--
P5 — False Hope: optimize the local terminal harder.
Confession: I did exactly this — tmux + worktrees + runner scripts. It works, and it still caps out.
Sobering reality: you are scaling yourself as the operator, not removing the operator role.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P6 · Audacious Reality</span>

## You don't need CLI

Models already read `--help`, run the commands, and parse the output better than we do.

**Amp** is the vessel. **Orbs** are where it lives: parallel, isolated, ephemeral cloud sandboxes.

</div>
<div class="visual">

<span class="pill">Amp team · Alex Kemper · 10 August 2026</span>

<div class="big-number">85%</div>

<p class="caption">of Amp's own commits now come from Orbs — and their commit velocity rose 65% in the month since Orbs shipped. — <a href="https://ampcode.com/notes/pave-the-road">Pave the Road</a></p>

</div>
</div>

<!--
P6 — Audacious Reality: stop operating the CLI yourself.
The CLI doesn't disappear. It becomes the model's interface, not yours.
Be honest about the source: these are Amp's own numbers about their own team, not an industry survey.
Kemper: "Local dev isn't dead yet, but the family has gathered around the bed."
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P7 · We Can Do This</span>

## Three shifts, no new commands

You already have every skill this needs.

You're trading **typing commands** for **stating intent and judging proof.**

</div>
<div class="visual">

<div class="card">
<strong>🗣️ State the outcome</strong>
<p>“Open a PR that fixes the broken footer link” — not the <code>git</code> incantation.</p>
</div>

<div class="card">
<strong>🫧 Move off your laptop</strong>
<p>Spawn it in an Orb. No checkout, no ports, no fans.</p>
</div>

<div class="card">
<strong>🧾 Demand proof</strong>
<p>Tests, screenshots, a video. Review evidence, not transcripts.</p>
</div>

</div>
</div>

<!--
P7 — We Can Do This: the shifts are about what you ask for, not what you learn.
Thorsten's prompt, verbatim: "I want you to give me 100% proof that what you did works.
Test this end to end. In many ways. Run through a matrix of test cases."
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P8 · Call To Action</span>

## Tonight: spawn one Orb

<ol class="small-list">
<li>Sign in at <strong>ampcode.com</strong></li>
<li>Start an agent in an Orb on a repo you own</li>
<li>Give it one real papercut, in plain language</li>
<li>Ask for proof it works, then close the tab</li>
<li>While it runs, spawn a second one</li>
</ol>

</div>
<div class="visual">

<blockquote>

Every time I see a papercut I take a screenshot, start an agent in an orb and let it rip.

</blockquote>

<p class="quote-source">Thorsten Ball — the habit to steal.</p>

</div>
</div>

<!--
P8 — Call To Action: one Orb, one papercut, tonight.
Keep it tiny: a typo, a flaky test, a broken link. The point is to feel the friction disappear.
Step 5 is the real lesson — parallelism is free once your laptop isn't the host.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P9 · Early Benefits</span>

## What you get back this week

- no local setup, no port clashes
- more agents running in parallel
- steering from web, phone, or desktop
- a lighter review load, because agents bring proof

</div>
<div class="visual">

<div class="card">
<strong>Instead of:</strong>
<p>one agent, one terminal, you watching every line scroll by.</p>
</div>

<div class="card">
<strong>You get:</strong>
<p>several agents in several Orbs, each returning with screenshots, test runs, or a demo video.</p>
</div>

</div>
</div>

<!--
P9 — Early Benefits: measurable wins in days, not months.
Thorsten's list: "more agents building more complicated things; agents running for longer and giving
better proof that what they did works; a lighter, less sigh-inducing review load".
-->

---

<div class="slide">
<div>

<span class="eyebrow">P10 · Long Win</span>

## The terminal becomes plumbing

Like assembly: still there, still essential, rarely typed by hand.

Engineers spend their time on **what to build and whether it works** — not on how to invoke it.

</div>
<div class="visual">

<span class="pill">Thorsten Ball · 4 August 2026</span>

<blockquote>

There's basically very very few things left that require a local dev environment.

</blockquote>

<p class="quote-source">“… the next big change, a bigger change possibly than coding agents themselves.”</p>

</div>
</div>

<!--
P10 — Long Win: the operator role fades, the judgment role grows.
Tie back to the SWE Growth theme: growth now means sharper intent and better review, not more flags memorized.
Caveat to say out loud: you still need to READ what the agent ran. Not needing to type it ≠ not needing to understand it.
-->

---

<div class="qa">

# Live Demo

<p class="subtitle">Zero commands typed by me. For as long as the room wants.</p>

<div class="links">

<p>🙋 You pick the tasks. The agents run the CLI. We judge the proof.</p>

</div>
</div>

<!--
Section break. ~10 minutes of slides done; now up to 2 hours of live demo.
Energy shift: take hands off the keyboard — literally.
-->

---

<div class="slide wide-left">
<div>

## How the demo works

<ol class="small-list">
<li><strong>Spawn</strong> (15 min) — first Orb on this very website's repo</li>
<li><strong>Pick</strong> (15 min) — you shout papercuts, we vote on three</li>
<li><strong>Fan out</strong> (30 min) — one Orb per task, running in parallel</li>
<li><strong>Proof</strong> (30 min) — review screenshots, tests, videos together</li>
<li><strong>Ship</strong> (30 min) — the agent opens the PR; we decide to merge</li>
</ol>

<p class="caption">Each round stands alone. We can stop after any of them.</p>

</div>
<div class="visual">

<div class="card">
<strong>Ground rule:</strong>
<p>I won't type a single shell command. If something needs a CLI, the agent runs it.</p>
</div>

<div class="card">
<strong>Backup plan, if the room is shy:</strong>
<p>Build this deck's PDF and og-image in an Orb, then list the talk on <a href="https://zainfathoni.com/talks">zainfathoni.com/talks</a>.</p>
</div>

</div>
</div>

<!--
Demo agenda. Timebox each round out loud; drop rounds 4–5 if time runs short.
Keep a list of 3–5 real papercuts in this repo ready in case nobody volunteers.
Steer at least one Orb from the phone to prove the "no laptop" point.
-->

---

<div class="slide">
<div>

## CLIs we'll watch the agent run

The commands don't disappear. They just stop being my job:

- `git` / `gh` — branches, commits, pull requests
- `pnpm` — install, typecheck, build
- `playwright` — browser proof
- `marp` — slides, like these ones

</div>
<div class="visual">

<div class="term">
<span class="dim"># typed by the agent, not me</span><br/>
<span class="dim">$</span> pnpm install<br/>
<span class="dim">$</span> pnpm run typecheck <span class="ok">✓</span><br/>
<span class="dim">$</span> gh pr create --fill <span class="ok">✓</span>
</div>

<p class="caption">Watch the transcript, not the keyboard.</p>

</div>
</div>

<!--
Anatomy slide — point at each CLI as the agent invokes it during the demo.
The argument of the talk is visible here: the terminal is busy, and nobody in the room is typing into it.
-->

---

<div class="slide">
<div>

## References

<div class="refs">

- Thorsten Ball — [What I Want to Tell You About Orbs](https://ampcode.com/notes/what-i-want-to-tell-you-about-orbs) (4 August 2026)
- Alex Kemper — [Pave the Road](https://ampcode.com/notes/pave-the-road) (10 August 2026)
- [Amp](https://ampcode.com) — the coding agent used in the demo
- Dan Roam — [The Pop-Up Pitch](https://www.danroam.com/) (this talk's storyline)
- Zain Fathoni — [Fundamental CS for AI Era](https://www.zainfathoni.com/fundamental-computer-science-ai-era.html)

</div>

</div>
<div class="visual">

<blockquote>

Stop operating the terminal.

Start judging the proof.

</blockquote>

</div>
</div>

<!--
Reference slide. The Fundamental CS talk is the counterweight: not typing commands still requires understanding them.
-->

---

<div class="qa qa-split">
<div>

# Q & A

<div class="links">

<p><a href="https://www.zainfathoni.com/you-dont-need-cli.html">zainfathoni.com/you-dont-need-cli.html</a></p>
<p><a href="https://ampcode.com">ampcode.com</a></p>

</div>

<p class="signature">Zain Fathoni</p>

</div>

![QR code for zainfathoni.com/you-dont-need-cli.html](assets/you-dont-need-cli-qr.png)

</div>
