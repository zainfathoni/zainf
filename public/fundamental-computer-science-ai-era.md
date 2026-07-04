---
marp: true
paginate: true
theme: default
backgroundColor: #ffffff
title: Fundamental CS for AI Era
description: Building human-centered digital products in the AI era — BUILD Camp Mentor Spotlight, 4 July 2026
url: https://www.zainfathoni.com/fundamental-computer-science-ai-era.html
image: https://www.zainfathoni.com/assets/fundamental-computer-science-ai-era.png
footer: "4 July 2026 | Fundamental CS for AI Era"
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
---

<div class="title-slide">
<div>

# Fundamental CS for AI Era

<p class="subtitle">Building human-centered digital products in the AI era</p>

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
Fundamental Computer Science for AI Era. Frame with the product-building tagline.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P2 · Common Ground</span>

## AI makes code generation fast and accessible

Anyone in this room can ship working code today — developer or not.

Generating code is no longer the hard part. **We all agree on that.**

</div>
<div class="visual flush">

![Development loop with AI](assets/development-loop-with-ai.png)

</div>
</div>

<!--
P2 — Common Ground: AI makes code generation fast and accessible.
Everyone here has felt this. Establish agreement before introducing tension.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P3 · Coming Problem</span>

## Understanding becomes the bottleneck

AI generates code faster than we can understand it.

The constraint moves from **writing** code to **understanding what changed, why it works, and what it might break.**

<p class="caption">Thariq, on Fable 5: work quality is now “bottlenecked by my ability to clarify my unknowns.” — <a href="https://x.com/trq212/status/2073100352921215386">Finding Your Unknowns</a></p>

</div>
<div class="visual">

<span class="pill">Geoffrey Litt · 2 July 2026</span>

<blockquote>

Hot take: I think it's still important to understand the code that our agents write!

</blockquote>

<p class="quote-source">Understanding matters not just to verify, but to participate. — “Understanding is the new bottleneck”<br/><a href="https://x.com/geoffreylitt/status/2072522251300409556">x.com/geoffreylitt/status/2072522251300409556</a></p>

</div>
</div>

<!--
P3 — Coming Problem: understanding becomes the bottleneck.
Litt's tweet (333.8K views) + his article. Key idea: understand to participate, not merely verify.
Second voice: Thariq's "A Field Guide to Fable: Finding Your Unknowns" (651K views) — the map
(prompts, skills, context) is not the territory (codebase, real constraints); quality is bottlenecked
by your ability to clarify your unknowns. x.com/trq212/status/2073100352921215386
-->

---

<div class="slide">
<div>

<span class="eyebrow">P4 · Emotional Win</span>

## Imagine calm confidence in any codebase

Opening an unfamiliar repository without dread.

Reviewing an AI-generated PR and **knowing** what to look at first.

That feeling is trainable — and AI itself can train it.

</div>
<div class="visual">

<div class="big-number">AI<br/>×<br/>CS</div>

<p class="caption">The win is not “skip fundamentals.” The win is “learn fundamentals faster, with feedback.”</p>

</div>
</div>

<!--
P4 — Emotional Win: calm confidence in any codebase.
Paint the feeling before the argument. This is what fundamentals buy you emotionally.
"Trainable" is Thariq's exact conclusion: "reducing your unknowns is the skill of agentic coding —
a skill you can improve at, by working with Claude." Confidence = few unknowns, and unknowns shrink with practice.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P5 · False Hope</span>

## “AI means I can skip fundamentals”

Tempting — but this is what it looks like from the receiving end:

</div>
<div class="visual">

<span class="pill">Dex Horthy · 20 June 2026</span>

<blockquote>

If people are tokenmaxxing bugs into production with kLOC PRs that they didn't read themselves, those people shouldn't have jobs.

</blockquote>

<p class="quote-source">“Coaching juniors on SWE fundamentals is hard work and it takes time.”<br/><a href="https://x.com/dexhorthy/status/2068433796182270203">x.com/dexhorthy/status/2068433796182270203</a></p>

</div>
</div>

<!--
P5 — False Hope: "AI means I can skip fundamentals."
Dex's rant against lazy engineers. Skipping fundamentals taxes your seniors and your future self.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P6 · Audacious Reality</span>

## Fundamentals are the AI multiplier

Data structures, algorithms, systems thinking, debugging, trade-offs.

They give you the **taste** to judge AI output and the **words** to steer it.

</div>
<div class="visual">

<span class="pill">Gergely Orosz · 2 July 2026</span>

<blockquote>

If you don't know what good code looks like, you will have no idea if what the models generate are any good.

</blockquote>

<p class="quote-source">“This is exactly why experienced software engineers are valuable and will be valuable.” (via @mitchellh)<br/><a href="https://x.com/GergelyOrosz/status/2072831495463428580">x.com/GergelyOrosz/status/2072831495463428580</a></p>

</div>
</div>

<!--
P6 — Audacious Reality: fundamentals are the AI multiplier.
Gergely (via Mitchell Hashimoto): knowing what good looks like is the judging skill AI can't replace.
Same argument from Thariq: "the best agentic coders are good but have relatively few unknowns" —
they know what they want in detail, deeply in-sync with both the codebase and the model's behaviors.
Fundamentals are what convert unknown unknowns into known knowns.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P7 · We Can Do This</span>

## Guard AI's work at three time horizons

Each guard is an open-source skill you can install today.

The first two guard the **code**. The third guards **you**.

</div>
<div class="visual">

<div class="card">
<strong>⏱️ Now — E2E evidence</strong>
<p><code>/pr-e2e-evidence</code> — prove the change works today, in a real browser, before it ships.</p>
</div>

<div class="card">
<strong>📆 Near future — unit tests</strong>
<p><code>/tdd</code> — lock the behavior in so it can't quietly regress. (Matt Pocock, aihero.dev/skills)</p>
</div>

<div class="card">
<strong>🧠 Always — understanding</strong>
<p><code>/teach</code> — keep yourself able to chime in whenever future issues or plans arise.</p>
</div>

</div>
</div>

<!--
P7 — We Can Do This: three guards, three time horizons.
E2E = works NOW. TDD = won't regress NEAR. Understanding = you can ALWAYS participate.
/pr-e2e-evidence and /teach: github.com/zainfathoni/agent-workflows. /tdd: Matt Pocock's aihero.dev/skills
(/teach also started as Matt's — credit him out loud).
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P8 · Call To Action</span>

## Start with the long-term guard: `/teach`

An open-source skill that turns understanding into a **persistent learning workspace**.

<ol class="small-list">
<li>Grab it: <strong>github.com/zainfathoni/agent-workflows</strong></li>
<li>Run <code>/teach</code> with any topic you want to learn</li>
<li>Answer the interview, take one lesson and its quiz</li>
<li>Return anytime — it remembers where you left off</li>
</ol>

</div>
<div class="visual">

<div class="flow compact">
<div>🎯 MISSION.md — why you're learning</div>
<div>📚 lessons/ — short, single-win lessons</div>
<div>📝 quizzes — speed regulators for real understanding</div>
<div>🗂️ learning-records/ — evidenced progress</div>
</div>

<p class="caption">Quizzes as speed regulators — the same technique Geoffrey Litt proposes for understanding AI code.</p>

</div>
</div>

<!--
P8 — Call To Action: the first doable step is using the /teach skill.
Open-sourced at github.com/zainfathoni/agent-workflows. Concrete, tonight-sized steps.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P9 · Early Benefits</span>

## You can learn anything you want

Not just CS fundamentals. The same workspace teaches you:

- a new framework or language
- an unfamiliar codebase, one PR at a time
- algorithms and system design
- even non-code topics

</div>
<div class="visual">

<div class="card">
<strong>Instead of:</strong>
<p>passive tutorials you abandon by chapter three.</p>
</div>

<div class="card">
<strong>You get:</strong>
<p>a personal curriculum with lessons, quizzes, and memory — your own <a href="https://brilliant.org">Brilliant</a>, crafted from Papert-style micro-worlds.</p>
</div>

<p class="caption">Live proof: <a href="https://ai.zainf.dev">ai.zainf.dev</a> — my own AI-inference learning lab. That journey just started, in public.</p>

</div>
</div>

<!--
P9 — Early Benefits: the audience can learn anything they want.
The immediate reward of the CTA: a tutor that adapts and remembers, for any topic.
"Your own Brilliant" via micro-worlds — Litt's technique (inspired by Seymour Papert):
x.com/geoffreylitt/status/2072522314240127393. Show ai.zainf.dev briefly if time allows:
lessons, learning records, experiments — the /teach workspace shape, applied to AI inference.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P10 · Long Win</span>

## Engineers become better problem framers

In the AI era, human-centered builders are not the people who type the most code.

They are the people who can **frame problems clearly enough for humans and machines to solve together.**

</div>
<div class="visual">

<span class="pill">Gogo (@lwastuargo) · 1 July 2026</span>

<blockquote>

It's actually a huge relief that the future of software engineering… is still software engineering.

</blockquote>

<p class="quote-source">“Even expensive loop engineering with a state-of-the-art model can't out-engineer bad system design.”<br/><a href="https://x.com/lwastuargo/status/2072256396633260350">x.com/lwastuargo/status/2072256396633260350</a></p>

</div>
</div>

<!--
P10 — Long Win: engineers become better problem framers.
Gogo's lessons from building Anna: the highest-leverage work is the right system design.
Litt: "The point was always to augment, not just automate." Tie back to human-centered digital products.
-->

---

<div class="qa">

# Live Demo

<p class="subtitle">Let's learn something together — for real, for the next hour.</p>

<div class="links">

<p>🙋 You pick the topic. You answer the quizzes.</p>

</div>
</div>

<!--
Section break. ~15 minutes of slides done; now ~60 minutes of hands-on demo with audience participation.
Energy shift: close the laptop lid metaphorically, open the terminal.
-->

---

<div class="slide wide-left">
<div>

## How the next hour works

<ol class="small-list">
<li><strong>Pick</strong> (10 min) — you shout topics, we vote on one</li>
<li><strong>Mission</strong> (15 min) — <code>/teach</code> interviews us; you answer, I type</li>
<li><strong>Learn</strong> (20 min) — we take the first generated lesson together</li>
<li><strong>Quiz</strong> (15 min) — you answer; wrong answers steer the next lesson</li>
</ol>

</div>
<div class="visual">

<div class="card">
<strong>Ground rule:</strong>
<p>I will not edit the AI's questions or lessons. What you see is what the skill does.</p>
</div>

<div class="card">
<strong>Case study, if the room is shy:</strong>
<p>Big-O notation — from my earlier slides at <a href="https://zainf.dev/big-o">zainf.dev/big-o</a>, with the workspace already live at <a href="https://big-o.zainf.dev">big-o.zainf.dev</a>.</p>
</div>

</div>
</div>

<!--
Demo agenda. Timebox each round out loud. If the room is quiet, use the Big-O case study:
the workspace is pre-seeded at ~/Code/GitHub/zainfathoni/big-o (live at big-o.zainf.dev) —
MISSION.md, RESOURCES.md, and lesson 1 with its quiz are ready; run the quiz, then build
lesson 2 live from the wrong answers (best/worst/average case, then Θ vs O vs Ω).
Bonus live moment: RESOURCES.md records an erratum in my own 2020 deck (slide 34, Big-Ω).
Round 2 (Mission) is where audience participation locks in — their answers shape MISSION.md live.
-->

---

<div class="slide">
<div>

## What we'll watch it build

A learning workspace, growing live on screen:

- `MISSION.md` — the room's shared goal
- `RESOURCES.md` — sources we trust
- `lessons/*.html` — one win per lesson
- `learning-records/*.md` — proof of what we learned

</div>
<div class="visual">

<blockquote>

Understanding matters not just to verify, but to participate.

</blockquote>

<p class="quote-source">Geoffrey Litt — this hour is that idea, practiced.</p>

<p class="caption">Latest demo lessons: <a href="https://zainfathoni.github.io/seo/">SEO</a> · <a href="https://zainfathoni.github.io/utune-ai-lessons/">UTUNE AI Lessons</a></p>

</div>
</div>

<!--
Anatomy slide — narrate the file tree as it grows. Connect back to Litt: explainer docs, quizzes as
speed regulators, micro-worlds ("inspired by the visionary educator Seymour Papert" —
x.com/geoffreylitt/status/2072522314240127393). The demo IS the argument of the talk.
This hour is also Thariq's playbook practiced: interviews and quizzes to surface unknown unknowns.
-->

---

<div class="slide">
<div>

## References

<div class="refs">

- Geoffrey Litt — [Understanding is the new bottleneck](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html) · [micro-worlds](https://x.com/geoffreylitt/status/2072522314240127393)
- Thariq — [Finding Your Unknowns](https://x.com/trq212/status/2073100352921215386)
- Dex Horthy — [against lazy engineering](https://x.com/dexhorthy/status/2068433796182270203)
- Gergely Orosz — [knowing what good code looks like](https://x.com/GergelyOrosz/status/2072831495463428580)
- Gogo — [the future of software engineering… is still software engineering](https://x.com/lwastuargo/status/2072256396633260350)
- Matt Pocock — [aihero.dev/skills](https://www.aihero.dev/skills): the `/tdd` skill and the original `/teach`
- `/teach` and `/pr-e2e-evidence` — [github.com/zainfathoni/agent-workflows](https://github.com/zainfathoni/agent-workflows)
- Zain Fathoni — [A to Z #3](https://zainf.dev/a-z-3) · [Big-O](https://zainf.dev/big-o) · [ai.zainf.dev](https://ai.zainf.dev)

</div>

</div>
<div class="visual">

<blockquote>

Fundamentals are not the past.

They are how we steer the future.

</blockquote>

</div>
</div>

<!--
Reference slide. Keep citations visible without turning the talk into a literature review.
-->

---

<div class="qa qa-split">
<div>

# Q & A

<div class="links">

<p><a href="https://zainf.dev/fundamental-cs-ai">zainf.dev/fundamental-cs-ai</a></p>
<p><a href="https://github.com/zainfathoni/agent-workflows">github.com/zainfathoni/agent-workflows</a></p>
<p><a href="https://zainf.dev/a-z-3">zainf.dev/a-z-3</a></p>

</div>

<p class="signature">Zain Fathoni</p>

</div>

![QR code for zainf.dev/fundamental-cs-ai](assets/qr-fundamental-cs-ai.png)

</div>
