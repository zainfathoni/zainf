---
marp: true
paginate: true
theme: default
backgroundColor: #ffffff
footer: "4 July 2026 | Fundamental CS for AI Era"
style: |
  @font-face {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 300 700;
    src: url("assets/fonts/SpaceGrotesk-variable.woff2") format("woff2-variations");
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

### I'm Zain Fathoni

Front-end developer based in Yogyakarta, Indonesia. Previously backend, manager, frontend, now fullstack.

Community builder (Ketua VibeFromCafe.id) · Senior Software Engineer · Agentic Engineering Practitioner.

<https://zainf.dev>

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

</div>
<div class="visual">

<span class="pill">Geoffrey Litt · 2 July 2026</span>

<blockquote>

Hot take: I think it's still important to understand the code that our agents write!

</blockquote>

<p class="quote-source">Understanding matters not just to verify, but to participate. — “Understanding is the new bottleneck”</p>

</div>
</div>

<!--
P3 — Coming Problem: understanding becomes the bottleneck.
Litt's tweet (333.8K views) + his article. Key idea: understand to participate, not merely verify.
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

<p class="quote-source">“Coaching juniors on SWE fundamentals is hard work and it takes time.”</p>

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

<p class="quote-source">“This is exactly why experienced software engineers are valuable and will be valuable.” (via @mitchellh)</p>

</div>
</div>

<!--
P6 — Audacious Reality: fundamentals are the AI multiplier.
Gergely (via Mitchell Hashimoto): knowing what good looks like is the judging skill AI can't replace.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P7 · We Can Do This</span>

## A loop anyone can run

Not a talent. A habit — five moves, repeated on every change:

</div>
<div class="visual">

<div class="flow compact">
<div>📖 Read — pick what's worth reading</div>
<div class="arrow">↓</div>
<div>🧠 Model — form a theory of it</div>
<div class="arrow">↓</div>
<div>❓ Ask — probe the theory with AI</div>
<div class="arrow">↓</div>
<div>✅ Verify — tests, types, experiments</div>
<div class="arrow">↓</div>
<div>🗣️ Explain — in your own words</div>
</div>

</div>
</div>

<!--
P7 — We Can Do This: Read → Model → Ask → Verify → Explain.
The learning loop from the spine. Emphasize: AI helps at EVERY step, especially Ask and Verify.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P8 · Call To Action</span>

## Your first doable step: `/teach`

An open-source skill that turns that loop into a **persistent learning workspace**.

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
<p>a personal curriculum with lessons, quizzes, and memory — paced by what you actually retain.</p>
</div>

</div>
</div>

<!--
P9 — Early Benefits: the audience can learn anything they want.
The immediate reward of the CTA: a tutor that adapts and remembers, for any topic.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P10 · Long Win</span>

## Engineers become better problem framers

In the AI era, human-centered builders are not the people who type the most code.

They are the people who can **frame problems clearly enough for humans and machines to solve together.**

</div>
<div class="visual flush">

![AI agency human agency](assets/ai-agency-human-agency.webp)

</div>
</div>

<!--
P10 — Long Win: engineers become better problem framers.
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
<strong>Fallback topic:</strong>
<p>“How does the code AI just wrote for me actually work?” — the theme of this talk.</p>
</div>

</div>
</div>

<!--
Demo agenda. Timebox each round out loud. If the room is quiet, use the fallback topic.
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

</div>
</div>

<!--
Anatomy slide — narrate the file tree as it grows. Connect back to Litt: explainer docs, quizzes as
speed regulators, micro-worlds. The demo IS the argument of the talk.
-->

---

<div class="slide">
<div>

## References

- Geoffrey Litt — [Understanding is the new bottleneck](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html)
- Dex Horthy — [against lazy engineering](https://x.com/dexhorthy/status/2068433796182270203)
- Gergely Orosz — [knowing what good code looks like](https://x.com/GergelyOrosz/status/2072831495463428580)
- Zain Fathoni — [A to Z #3: my personal experience](https://zainf.dev/a-z-3)
- The `/teach` skill — [github.com/zainfathoni/agent-workflows](https://github.com/zainfathoni/agent-workflows)

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

<div class="qa">

# Q & A

<div class="links">

<p><a href="https://zainf.dev/fundamental-cs-ai">zainf.dev/fundamental-cs-ai</a></p>
<p><a href="https://github.com/zainfathoni/agent-workflows">github.com/zainfathoni/agent-workflows</a></p>
<p><a href="https://zainf.dev/a-z-3">zainf.dev/a-z-3</a></p>

</div>
</div>
