---
marp: true
paginate: true
theme: default
backgroundColor: #ffffff
footer: "4 July 2026 | Fundamental CS for AI Era"
style: |
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
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
    font-weight: 800;
    line-height: 0.98;
    margin: 0;
    letter-spacing: -0.055em;
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
    font-size: 34px;
    line-height: 1.25;
    font-weight: 650;
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
    font-size: 112px;
    line-height: 0.95;
    font-weight: 850;
    letter-spacing: -0.08em;
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

  .arrow {
    color: var(--accent);
    text-align: center;
    font-size: 36px;
    font-weight: 900;
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

Community builder · AI-assisted engineering practitioner · Mentor Spotlight at BUILD Camp.

<https://zainf.dev>

</div>
</div>
</div>

<!--
P1 — Who & What / Clarity.
Use the poster title, but frame it with the product-building tagline from the announcement.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P2 · Common Ground</span>

## Our work now demands AI fluency

Developers, designers, and product builders are all being asked to move faster.

Not someday. **This sprint.**

</div>
<div class="visual flush">

![Development loop with AI](assets/development-loop-with-ai.png)

</div>
</div>

<!--
Writing for Public equivalent: “Our lines of work demands writing.”
Here: product work now demands AI fluency, whether you like it or not.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P3 · Coming Problem</span>

## Understanding is more important than ever

AI can generate code faster than we can review it.

The bottleneck moves from **typing** to **understanding what changed, why it works, and what it might break.**

</div>
<div class="visual">

<span class="pill">Geoffrey Litt</span>

<blockquote>

Understanding matters not just to verify, but **to participate**.

</blockquote>

<p class="quote-source">From “Understanding is the new bottleneck”</p>

</div>
</div>

<!--
Use Geoffrey Litt's longer article, not just the tweet. Key idea: understand to participate, not merely to verify.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P4 · Emotional Win</span>

## But learning has never been easier

AI can explain code, generate examples, create quizzes, and build tiny tools to help us understand.

The opportunity: use AI as a **learning amplifier**, not just a code printer.

</div>
<div class="visual">

<div class="big-number">AI<br/>×<br/>CS</div>

<p class="caption">The win is not “skip fundamentals.” The win is “learn fundamentals faster, with feedback.”</p>

</div>
</div>

<!--
Writing for Public equivalent: “But writing has never been easier than ever!”
Here: learning and understanding are easier if we use AI correctly.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P5 · False Hope</span>

## Does vibe coding even work, though?

It works until you hit the part where the codebase has history, constraints, edge cases, and users.

That is where lazy delegation becomes expensive.

</div>
<div class="visual">

<div class="flow">
<div>Prompt harder</div>
<div class="arrow">↓</div>
<div>Get more code</div>
<div class="arrow">↓</div>
<div>Understand less</div>
<div class="arrow">↓</div>
<div>Debug longer</div>
</div>

</div>
</div>

<!--
Use Dex Horthy / “against lazy engineers” as the spine: research, plan, implement; don't just argue with the model or let it wander.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P6 · Audacious Reality</span>

## What if fundamentals are the AI multiplier?

Fundamentals give you the words, mental models, and constraints to steer AI:

- data structures
- algorithms
- systems thinking
- debugging
- trade-offs

</div>
<div class="visual flush">

![AI can amplify expertise](assets/ai-amplify-expertise.jpeg)

</div>
</div>

<!--
Core thesis. AI doesn't erase fundamentals; it rewards people who can express fundamentals as constraints.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P7 · We Can Do This</span>

## Read the code, but not all of it

The skill is not reading every line.

The skill is knowing **which code is worth reading** before you ask AI to change it.

</div>
<div class="visual">

<span class="pill">Gergely Orosz</span>

<blockquote>

We read existing code much more often than we write new code.

</blockquote>

<p class="quote-source">Related post on AI-assisted coding and reading code</p>

</div>
</div>

<!--
Use Gergely's accessible LinkedIn snippet. This slide turns “read the code” into a practical skill: target selection.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P8 · Call To Action</span>

## Here are the first things to do to get started…

<ol class="small-list">
<li><strong>Research</strong> the code before prompting.</li>
<li><strong>Plan</strong> the exact behavior change.</li>
<li><strong>Implement</strong> with AI in small loops.</li>
<li><strong>Verify</strong> with tests, types, or screenshots.</li>
<li><strong>Explain</strong> what changed in your own words.</li>
</ol>

</div>
<div class="visual flush">

![Development loop without AI](assets/development-loop-without-ai.png)

</div>
</div>

<!--
Writing for Public equivalent: Capture, Align, Reformat, Publish, Repeat.
Here: Research, Plan, Implement, Verify, Explain. Dex's “research, plan, implement” plus Geoffrey's speed-regulator idea.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P9 · Early Benefits</span>

## Reaping early benefits

When you practice fundamentals with AI, you get compounding returns quickly:

- better prompts
- faster reviews
- fewer hallucinated fixes
- calmer debugging
- clearer product decisions

</div>
<div class="visual">

<div class="card">
<strong>Instead of:</strong>
<p>“AI wrote this; I hope it works.”</p>
</div>

<div class="card">
<strong>You can say:</strong>
<p>“Here is the invariant, here is the trade-off, here is how we verified it.”</p>
</div>

</div>
</div>

<!--
Writing for Public equivalent: “Ripping/Reaping early benefits.”
Near-term reward: confidence and review quality.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P10 · Long Win</span>

## Increasing the surface of agency

In the AI era, human-centered builders are not the people who type the most code.

They are the people who can frame problems clearly enough for humans and machines to solve together.

</div>
<div class="visual flush">

![AI agency human agency](assets/ai-agency-human-agency.webp)

</div>
</div>

<!--
Writing for Public equivalent: “Increasing the surface of luck.”
Here: agency. Tie back to BUILD Camp tagline: human-centered digital products.
-->

---

<div class="slide">
<div>

## References

- Dan Roam — [The Pop-up Pitch](https://www.danroam.com/)
- Geoffrey Litt — [Understanding is the new bottleneck](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html)
- Gergely Orosz — reading code in the AI era
- Dex Horthy — research, plan, implement; avoid lazy AI loops
- Zain Fathoni — [A to Z #3](https://zainf.dev/a-z-3)

</div>
<div class="visual">

<blockquote>

Fundamentals are not the past.

They are how we steer the future.

</blockquote>

</div>
</div>

<!--
Reference slide. Keep the citations visible without turning the talk into a literature review.
-->

---

<div class="qa">

# Q & A

<div class="links">

<p><https://zainf.dev/fundamental-computer-science-ai-era></p>
<p><https://zainf.dev/a-z-3></p>

</div>
</div>
