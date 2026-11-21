---
marp: true
paginate: true
theme: default
backgroundColor: #ffffff
title: (Human) Attention is All You Need
description: AI can expand our output. We still choose what deserves attention and when it is enough. IDSW 2026, Jakarta, 22 November 2026
url: https://www.zainfathoni.com/human-attention-is-all-you-need.html
image: https://www.zainfathoni.com/assets/human-attention-is-all-you-need.png
footer: "22 November 2026 | IDSW 2026 | (Human) Attention is All You Need"
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

  .title-slide h1 {
    font-size: 66px;
  }

  .meta {
    margin-top: 26px;
    color: var(--muted);
    font-size: 22px;
  }

  .draft {
    padding: 18px 22px;
    border: 3px dashed var(--red);
    border-radius: 22px;
    background: #fef2f2;
  }

  .draft strong {
    color: var(--red);
  }

  .draft p {
    margin: 6px 0 0;
    font-size: 21px;
    color: #374151;
  }

  .draft + .draft,
  .card + .draft,
  .draft + .card {
    margin-top: 16px;
  }

  .pill.red {
    background: #fef2f2;
    color: var(--red);
  }

  .pill.green {
    background: #f0fdf4;
    color: #166534;
  }

  .contrast {
    color: var(--muted);
    font-size: 22px;
    margin-top: 0;
  }

  .ask blockquote p {
    font-size: 32px;
  }

  .loop {
    display: grid;
    gap: 8px;
    font-size: 26px;
    font-weight: 800;
  }

  .loop div {
    padding: 10px 18px;
    border-radius: 16px;
    background: #fff;
    border: 1px solid var(--line);
  }

  .loop div.last {
    border: 2px solid var(--accent);
    background: #fff7ed;
  }

  .loop .arrow {
    font-size: 20px;
    line-height: 1;
    padding: 0;
    border: none;
    background: transparent;
  }

  .aside {
    padding: 18px 22px;
    border: 1px solid var(--line);
    border-radius: 22px;
    background: #fafafa;
  }

  .aside p {
    margin: 8px 0 0;
    font-size: 21px;
    color: #374151;
  }

  .fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .fields .card + .card {
    margin-top: 0;
  }

  .fields .card {
    padding: 18px 20px;
  }

  .stacked {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .stacked h2::after {
    margin: 18px 0 20px;
  }

  .stacked p {
    margin: 0 0 18px;
  }

  .ask ul {
    margin-top: 18px;
  }

  .stacked .visual {
    flex-shrink: 0;
    padding: 0;
    overflow: hidden;
    background: #fff4dd;
  }

  .stacked .visual img {
    height: 245px;
    width: auto;
    margin: 0 auto;
  }

  .stacked .caption {
    margin: 12px 0 0;
  }

  .slide.one-col {
    grid-template-columns: 1fr;
    align-content: center;
  }

  .slide.one-col .refs li {
    font-size: 23px;
  }

  /* Three-week lanes: the same equal block per week, so the diagram shows no amounts. */
  .weeks {
    display: grid;
    grid-template-columns: 330px repeat(3, 1fr);
    gap: 8px 12px;
    align-items: center;
    padding: 16px 26px;
    border: 1px solid var(--line);
    border-radius: 24px;
    background: #fafafa;
  }

  .weeks .wk {
    color: var(--muted);
    font-size: 17px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: center;
  }

  .weeks .lane {
    font-size: 21px;
    font-weight: 700;
    color: #374151;
    line-height: 1.2;
  }

  .weeks .blk {
    height: 26px;
    border-radius: 9px;
    border: 2px solid #111827;
  }

  .blk.in { background: #fed7aa; }
  .blk.amp { background: #bfdbfe; }
  .blk.rev { background: var(--accent); }
  .blk.open {
    background: repeating-linear-gradient(135deg, #fff 0 8px, #d1d5db 8px 16px);
  }
  .blk.late { background: #374151; }

  .weeks.mini {
    grid-template-columns: 190px repeat(3, 1fr);
    gap: 6px 8px;
    padding: 14px 16px;
    margin-bottom: 18px;
  }

  .weeks.mini .wk { font-size: 13px; }
  .weeks.mini .lane { font-size: 15px; }
  .weeks.mini .blk { height: 16px; border-width: 1.5px; border-radius: 6px; }

  .weeks .dim { opacity: 0.25; }

  /* One contrast per element: the response to leave, and the response to try. */
  .vs {
    display: grid;
    gap: 10px;
  }

  .vs > div {
    padding: 14px 20px;
    border-radius: 18px;
    border: 1px solid var(--line);
    background: #fff;
  }

  .vs .label {
    display: block;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .vs .from .label { color: var(--red); }
  .vs .to .label { color: #166534; }

  .vs .from p {
    margin: 4px 0 0;
    font-size: 23px;
    color: var(--muted);
    text-decoration: line-through;
    text-decoration-color: rgba(220, 38, 38, 0.55);
  }

  .vs .to {
    border: 2px solid var(--green);
    background: #f0fdf4;
  }

  .card p:only-child {
    margin: 0;
    font-size: 26px;
    color: var(--text);
  }

  .tdd {
    display: inline-block;
    margin-top: 18px;
    padding: 10px 20px;
    border: 2px dashed var(--accent);
    border-radius: 18px;
    background: #fff7ed;
  }

  .tdd .acronym {
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .tdd p {
    margin: 0;
    font-size: 23px;
    white-space: nowrap;
  }

  .tdd del {
    color: var(--muted);
    text-decoration-color: var(--red);
    text-decoration-thickness: 3px;
    margin-right: 8px;
  }

  .tdd ins {
    display: inline-block;
    text-decoration: none;
    font-weight: 800;
    color: #9a3412;
  }

  .vs .to p + p {
    margin-top: 10px;
  }

  .vs .to p {
    margin: 4px 0 0;
    font-size: 25px;
    font-weight: 700;
    color: var(--text);
  }

  .vs .down {
    padding: 0;
    border: none;
    background: transparent;
    color: var(--green);
    text-align: center;
    font-size: 26px;
    font-weight: 900;
    line-height: 1;
  }

  .triage {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 10px;
  }

  .triage div {
    padding: 12px 12px;
    border-radius: 14px;
    border: 2px solid #111827;
    font-size: 19px;
    font-weight: 800;
    line-height: 1.2;
    text-align: center;
  }

  .triage .today { background: var(--accent); }
  .triage .wait { background: repeating-linear-gradient(135deg, #fff 0 8px, #e5e7eb 8px 16px); }
  .triage .help { background: #bfdbfe; }

  /* You → Amp → You handoff */
  .handoff {
    display: grid;
    gap: 8px;
  }

  .handoff > div {
    padding: 12px 22px;
    border-radius: 18px;
    border: 1px solid var(--line);
    background: #fff;
  }

  .handoff .you {
    border: 2px solid var(--accent);
    background: #fff7ed;
  }

  .handoff .ai {
    border: 2px dashed var(--blue);
    background: #eff6ff;
  }

  .handoff strong {
    font-size: 17px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .handoff p {
    margin: 4px 0 0;
    font-size: 23px;
  }

  .handoff .arrow {
    padding: 0;
    border: none;
    background: transparent;
    font-size: 24px;
    line-height: 1;
  }

  /* Stage 8 process: five steps in a row, with the loop back when it is not enough yet. */
  .process {
    display: grid;
    grid-template-columns: 1fr 28px 1fr 28px 1fr 28px 1fr 28px 1fr;
    align-items: stretch;
    margin: 4px 0 6px;
  }

  .process .step {
    padding: 14px 14px;
    border-radius: 18px;
    border: 1px solid var(--line);
    background: #fafafa;
  }

  .process .step strong {
    display: block;
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 26px;
    letter-spacing: -0.02em;
  }

  .process .step span {
    display: block;
    margin-top: 6px;
    font-size: 18px;
    line-height: 1.3;
    color: #374151;
  }

  .process .step.last {
    border: 2px solid var(--accent);
    background: #fff7ed;
  }

  .process .to {
    align-self: center;
    text-align: center;
    color: var(--accent);
    font-size: 26px;
    font-weight: 900;
  }

  .loopback {
    margin: 0 0 22px;
    padding: 6px 0 0;
    border-top: 3px dashed var(--accent);
    color: #9a3412;
    font-size: 19px;
    font-weight: 800;
    text-align: center;
  }

  .steps3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }

  .steps3 div {
    padding: 14px 18px;
    border-radius: 18px;
    border: 1px solid var(--line);
    background: #fff;
    font-size: 22px;
    line-height: 1.3;
  }

  .steps3 b {
    color: var(--accent);
    margin-right: 6px;
  }

  /* Entrance animations for the HTML deck only. Marp's HTML export replays them each time a
     slide becomes active. The PDF is printed, so it skips @media screen and shows the final,
     static state, which is also the state without animation. */
  @media screen and (prefers-reduced-motion: no-preference) {
    @keyframes ha-grow {
      from { transform: scaleX(0); opacity: 0; }
    }

    @keyframes ha-fade {
      from { opacity: 0; }
    }

    @keyframes ha-rise {
      from { opacity: 0; transform: translateY(14px); }
    }

    @keyframes ha-drop {
      from { opacity: 0; transform: translateY(-14px); }
    }

    @keyframes ha-dim {
      from { opacity: 1; }
    }

    @keyframes ha-strike {
      from { color: var(--text); text-decoration-color: transparent; }
    }

    @keyframes ha-draw {
      from { clip-path: inset(0 100% 0 0); }
    }

    /* Stage 3: the weeks fill in one after another, to the same size. */
    .weeks:not(.mini) .blk {
      transform-origin: left center;
      animation: ha-grow 550ms ease-out both;
    }
    .weeks:not(.mini) .wk { animation: ha-fade 400ms ease-out both; }
    .weeks:not(.mini) :nth-child(4n+2) { animation-delay: 300ms; }
    .weeks:not(.mini) :nth-child(4n+3) { animation-delay: 1100ms; }
    .weeks:not(.mini) :nth-child(4n+4) { animation-delay: 1900ms; }

    /* Mindfulness: the other lanes fade back, the two to notice stay. */
    .weeks .dim { animation: ha-dim 700ms ease-in-out 500ms both; }

    /* Contrast cards: the old thought appears, is struck out, then the response comes in. */
    .vs .from { animation: ha-rise 400ms ease-out 200ms both; }
    .vs .from p { animation: ha-strike 500ms ease-in 1000ms both; }
    .vs .down { animation: ha-fade 300ms ease-out 1500ms both; }
    .vs .to { animation: ha-rise 500ms ease-out 1700ms both; }

    /* Self-kindness: the three boxes for the team appear one by one. */
    .triage div { animation: ha-rise 400ms ease-out both; }
    .triage div:nth-child(1) { animation-delay: 2300ms; }
    .triage div:nth-child(2) { animation-delay: 2600ms; }
    .triage div:nth-child(3) { animation-delay: 2900ms; }

    /* You -> Amp -> You */
    .handoff > * { animation: ha-rise 400ms ease-out both; }
    .handoff > :nth-child(1) { animation-delay: 200ms; }
    .handoff > :nth-child(2) { animation-delay: 600ms; }
    .handoff > :nth-child(3) { animation-delay: 800ms; }
    .handoff > :nth-child(4) { animation-delay: 1200ms; }
    .handoff > :nth-child(5) { animation-delay: 1400ms; }

    /* Stage 8: steps light up left to right, then the loop back is drawn. */
    .process > * { animation: ha-rise 400ms ease-out both; }
    .process > :nth-child(1) { animation-delay: 200ms; }
    .process > :nth-child(2) { animation-delay: 450ms; }
    .process > :nth-child(3) { animation-delay: 600ms; }
    .process > :nth-child(4) { animation-delay: 850ms; }
    .process > :nth-child(5) { animation-delay: 1000ms; }
    .process > :nth-child(6) { animation-delay: 1250ms; }
    .process > :nth-child(7) { animation-delay: 1400ms; }
    .process > :nth-child(8) { animation-delay: 1650ms; }
    .process > :nth-child(9) { animation-delay: 1800ms; }
    .loopback { animation: ha-draw 900ms ease-in-out 2300ms both; }
    .steps3 div { animation: ha-fade 400ms ease-out both; }
    .steps3 div:nth-child(1) { animation-delay: 3300ms; }
    .steps3 div:nth-child(2) { animation-delay: 3500ms; }
    .steps3 div:nth-child(3) { animation-delay: 3700ms; }

    /* TDD joke: "Test" is struck out, then "Token" drops in. */
    .tdd del { animation: ha-strike 400ms ease-in 900ms both; }
    .tdd ins { animation: ha-drop 400ms ease-out 1400ms both; }
  }
---

<div class="title-slide">
<div>

<span class="eyebrow">IDSW 2026 · Day 2</span>

# (Human) Attention is All You Need

<p class="subtitle">Now that I can run more agents, should I?</p>

<p class="meta">22 November 2026 · 10:55 WIB · Usmar Ismail Hall, Jakarta</p>

</div>
<div class="bio-card">

![Zain Fathoni](assets/zain-1280.jpeg)

<div>

<h3 class="signature">Zain Fathoni</h3>

Senior Software Engineer at BookThatApp, based in Yogyakarta, Indonesia.

Community builder (Ketua [VibeFromCafe.id](https://vibefromcafe.id)) · Agentic Engineering Practitioner.

<https://zainfathoni.com>

</div>
</div>
</div>

<!--
P1 — Title Page · Clarity.
TIMING: 1 menit · mulai 10:55 · pindah ke P2 sekitar 10:56.

SAY:
"AI bisa membantu kita mengerjakan lebih banyak hal, tapi apakah semua hal itu layak mendapat perhatian kita?"

Judulnya plesetan dari paper "Attention Is All You Need" (2017). Talk ini bukan tentang Transformer, dan tidak menyamakan attention mesin dengan attention manusia.

DRAFT — Zain:
Hubungan dengan talk "You Don't Need CLI": setup lokal yang hilang membuat delegasi lebih mudah, tapi tidak memilih pekerjaan mana yang penting. Ceritakan perubahan itu hanya kalau sesuai dengan pengalaman Zain sendiri. Ini pertanyaan lanjutan, bukan penolakan terhadap agent paralel.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P2 · Common Ground</span>

## We wanted room for the important work

We hoped AI would make the work lighter and leave time for the task that matters.

<div class="tdd">
<p><span class="acronym">TDD</span> = <del>Test</del><ins>Token</ins>-Driven Development</p>
</div>

</div>
<div class="visual">

<span class="pill">Quick question for the room</span>

<div class="ask">

<blockquote>

Have several running agents ever made you busy, but not closer to the one task that mattered?

</blockquote>

</div>

<p class="caption">Raise a hand only if it fits. There is no wrong answer.</p>

</div>
</div>

<!--
P2 — Common Ground · Trust.
TIMING: 1 menit · stage 1–2 selesai sekitar 10:57.

SAY:
"Kita memakai AI supaya pekerjaan lebih ringan dan ada ruang untuk hal yang penting, bukan supaya setiap waktu luang terisi tugas baru."
Lelucon (sekitar 10 detik, masih di dalam 1 menit P2): "Dulu TDD itu Test-Driven Development. Sekarang kadang rasanya jadi Token-Driven Development." Beri jeda untuk tawa, lalu lanjut.
Lalu tanyakan pertanyaan di slide. Tunggu sebentar.

LIMITS:
Leluconnya menertawakan kebiasaan kita bersama, bukan menyindir orang atau tim tertentu. Jangan jelaskan leluconnya.
Ajak orang mengenali pengalaman ini, tapi jangan menganggap semua orang di ruangan mengalaminya. Jangan menyimpulkan apa pun dari jumlah tangan yang naik.
-->

---

<div class="stacked">

<span class="eyebrow">P3 · Coming Problem</span>

## I still had to check what Amp made

For three weeks, a colleague was on leave and I also took the new issues.

<div class="weeks">
<div></div><div class="wk">Week 1</div><div class="wk">Week 2</div><div class="wk">Week 3</div>
<div class="lane">New issues come in</div><div class="blk in"></div><div class="blk in"></div><div class="blk in"></div>
<div class="lane">Amp helps with the work</div><div class="blk amp"></div><div class="blk amp"></div><div class="blk amp"></div>
<div class="lane">Results I must understand and check</div><div class="blk rev"></div><div class="blk rev"></div><div class="blk rev"></div>
<div class="lane">Earlier work, still open</div><div class="blk open"></div><div class="blk open"></div><div class="blk open"></div>
<div class="lane">Working late</div><div class="blk late"></div><div class="blk late"></div><div class="blk late"></div>
</div>

<p class="caption">Anonymized personal account. The bars are illustrative, not measured.</p>

</div>

<!--
P3 — Coming Problem · Fear. Cerita pribadi Zain (sudah disetujui, dianonimkan).
TIMING: 1,5 menit · mulai sekitar 10:57.

SAY:
"Waktu seorang rekan sedang cuti, selama tiga minggu saya ikut menangani masalah baru yang terus masuk. Saya pakai Amp untuk membantu mengerjakannya. Tapi hasil yang sudah datang tetap perlu saya pahami dan periksa, sementara pekerjaan sebelumnya belum semua beres. Saya terus bekerja sampai larut malam. Pada minggu ketiga, saya jatuh sakit. Pertanyaannya bukan cuma: seberapa banyak yang bisa dibantu Amp? Tapi juga: seberapa banyak yang masih bisa saya tangani dengan baik?"

LIMITS:
Bagian sakit hanya diucapkan, tidak ada di slide. Ceritakan sebagai urutan kejadian, bukan sebab-akibat: jangan bilang Amp atau beban kerja terbukti membuat sakit. Jangan sebut nama rekan, tim, perusahaan, tanggal, PR, atau pelanggan. Diagram ini ilustrasi: blok tiap minggu sama besar dan tidak menunjukkan jumlah. Tidak ada data Cukup dari tiga minggu itu; jangan sebut angka waktu kerja.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P3 · Coming Problem</span>

## The decisions stay with us

When AI writes the code, we still:

<ul class="small-list">
<li>choose the direction</li>
<li>understand the change</li>
<li>review the result</li>
<li>own what ships</li>
</ul>

</div>
<div class="visual">

<span class="pill">Steve Yegge · 14 November 2026</span>

<blockquote>

I strongly believe in pacing AI outputs to human speeds.

</blockquote>

<p class="quote-source">He reports that his agents overwhelmed his players with features and his accountant with emails. <a href="https://x.com/steve_yegge/status/2121671447810888185">x.com/steve_yegge</a></p>

</div>
</div>

<!--
P3 (lanjutan) — dari cerita ke pola umum.
TIMING: 1,5 menit · stage 3–4 selesai sekitar 11:01.

SAY:
"Saat AI menulis kode, kita masih perlu memilih arah, memahami perubahan, dan memeriksa hasilnya."
Contoh luar, singkat saja: "Steve Yegge bercerita dari sisi lain: agent-nya membuat pemain kewalahan dengan fitur dan akuntannya kewalahan dengan email. Hasil AI juga harus diterima dan ditangani orang lain."

LIMITS:
Cerita utama stage 3 adalah cerita Zain; Yegge hanya contoh pendukung, bukan cerita kedua. Ini pengalaman dan pendapat Yegge, bukan temuan riset. Kutipan di slide berasal dari post-nya (sudah dibaca penuh 14 Nov 2026). Cerita di talk-nya ada di sekitar 9:38–10:15; kata-kata persisnya di rekaman belum dicek. Jangan kembali ke Yegge di stage 7–9.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P4 · Emotional Win</span>

## You close the laptop knowing where things stand

At the end of the day:

</div>
<div class="visual">

<div class="card">
<p>You understand the important work that shipped.</p>
</div>

<div class="card">
<p>The open work is written down, with a next step.</p>
</div>

<div class="card">
<p>You can stop before everything is finished.</p>
</div>

</div>
</div>

<!--
P4 — Emotional Win · Hope.
TIMING: 1 menit · pindah ke P5 sekitar 11:01.

SAY:
"Bayangkan menutup laptop dengan memahami hasil pekerjaan yang penting, tahu apa yang masih tersisa, dan bisa berhenti tanpa harus menyelesaikan semuanya hari ini."

LIMITS:
Ini pengalaman yang diharapkan, bukan hasil yang sudah tercapai. Tujuannya peduli pada pekerjaan dan orangnya, bukan output maksimal dalam jam yang lebih sedikit.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P5 · False Hope</span>

## A better setup cannot choose for you

More agents and a better workflow remove friction. They cannot choose **your P0**.

<div class="aside">

<span class="pill">Kahneman · WYSIATI · ch. 7</span>

<p><strong>“What you see is all there is.”</strong> So ask: <strong>What evidence is missing from this convincing answer?</strong></p>

</div>

</div>
<div class="visual">

<span class="pill">Thariq · 19 October 2026</span>

<blockquote>

most of the stuff you're doing wont really matter- what's your P0? what would it look like if you gave it your full attention?

</blockquote>

<p class="quote-source">P0: the most important priority now. <a href="https://x.com/trq212/status/2112219173288120531">x.com/trq212</a></p>

</div>
</div>

<!--
P5 — False Hope · Sobering Reality.
TIMING: 3 menit · mulai sekitar 11:01 (P6 menjadi 3 menit; stage 5–6 tetap 6 menit).

SAY:
"Setup yang lebih baik bisa mengurangi kerepotan, tapi tidak bisa menentukan pekerjaan mana yang pantas kita kerjakan."
Bacakan post Thariq secara lengkap: "I think most people multi-tasking with agents could benefit from slowing down. Most of the stuff you're doing won't really matter. What's your P0? What would it look like if you gave it your full attention?"
Lalu tanya: "Kalau hanya satu pekerjaan yang benar-benar perlu perhatian saya sekarang, apa itu?" Beri jeda.
WYSIATI: "Kahneman punya istilah: what you see is all there is. Jawaban yang runtut bisa membuat kita lupa bertanya apa yang tidak ada di sana. Lima agent bisa memberi lima jawaban yang meyakinkan, tapi itu tidak memberi kita lima perhatian. Jadi sebelum menerima jawaban itu, tanyakan: bukti apa yang tidak ada di jawaban yang meyakinkan ini?"

LIMITS:
Post Thariq adalah pemicu diskusi, bukan bukti riset bahwa kerja paralel selalu gagal. Teks kutipan disalin dari catatan Zain; belum dicek ulang dengan post aslinya.
WYSIATI: definisi dari Thinking, Fast and Slow bab 7 ("A Machine for Jumping to Conclusions"), sudah dicek. Studi aslinya (Brenner, Koehler & Tversky 1996) memakai kasus hukum, bukan teks AI; penerapan ke review AI adalah usulan talk ini. Jawaban yang lancar bisa saja benar. Jangan sebut "lazy System 2", jangan menyebut developer yang kewalahan malas, dan jangan bilang kerja paralel menguras "tangki" System 2 yang tetap. Agent paralel tidak sama dengan penilaian manusia yang paralel; itu ilustrasi, bukan hasil ukur. System 1 dan System 2 adalah istilah penjelas, bukan dua bagian otak.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P6 · Audacious Reality</span>

## Choose before you delegate

Give the right work **enough** attention, even if some agents sit idle.

<p class="caption">Parallel work is fine when it serves one clear goal.</p>

</div>
<div class="visual">

<div class="vs">
<div class="from"><span class="label">Instead of</span><p>“What else can an agent do?”</p></div>
<div class="down">↓</div>
<div class="to"><span class="label">Ask</span><p>“What matters, and how can an agent help?”</p><p>“Who must handle the result, and do they have room?”</p></div>
</div>

</div>
</div>

<!--
P6 — Audacious Reality · Gusto.
TIMING: 1 menit (dipendekkan karena WYSIATI di P5).

SAY:
"Tujuannya bukan membuat semua agent sibuk, melainkan memberi pekerjaan yang tepat perhatian yang cukup."
Bandingkan dua pertanyaan pertama. Kartu ketiga hanya mengingatkan P3 dalam satu kalimat; jangan ulang cerita Yegge.

LIMITS:
Kerja paralel bukan masalahnya. Prioritas penting tetap perlu titik berhenti.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P6 · Audacious Reality</span>

## Let Amp execute while you keep the judgment

A check can pass on a result that nobody needs. **Taste** is how you decide if it is useful.

</div>
<div class="visual">

<div class="handoff">
<div class="you"><strong>You</strong><p>Choose what matters and what “enough” means.</p></div>
<div class="arrow">↓</div>
<div class="ai"><strong>Amp</strong><p>Execution, exploration, candidates, drafts, checks.</p></div>
<div class="arrow">↓</div>
<div class="you"><strong>You</strong><p>Judge if it is good enough. Own the result.</p></div>
</div>

</div>
</div>

<!--
P6 (lanjutan) — argumen delegasi. Slide ini menggantikan judul lama stage 7.
TIMING: 2 menit · stage 5–6 selesai sekitar 11:07.

SAY:
"Kita bisa menyerahkan sebagian pelaksanaan dan eksplorasi kepada AI, sambil tetap menentukan tujuan, menilai hasil, dan bertanggung jawab atas keputusan kita."
Tunjuk diagram: keputusan ada di awal dan di akhir; Amp ada di tengah.

OPTIONAL:
Contoh Yegge di talk-nya (sekitar 24:10–24:48): agent membuat kandidat artwork dan visualizer, dia yang memilih. Transkrip sudah dicek, rekaman belum. Jangan ikut klaimnya bahwa implementasi gratis atau AI tidak bisa kreatif.
Quote "You are paying somebody else to think about the problem" (YouTube SI3N8MCQHfo, sekitar 45:40) belum diverifikasi; jangan dipakai sebelum dicek.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P7 · We Can Do This</span>

## When the review falls behind, we judge ourselves

Looking back at those three weeks, with Kristin Neff's self-compassion.


</div>
<div class="visual">

<span class="pill">A reflection, not what I did then</span>

<div class="weeks mini">
<div></div><div class="wk">W1</div><div class="wk">W2</div><div class="wk">W3</div>
<div class="lane">New issues</div><div class="blk in"></div><div class="blk in"></div><div class="blk in"></div>
<div class="lane">Amp helps</div><div class="blk amp"></div><div class="blk amp"></div><div class="blk amp"></div>
<div class="lane">Still to check</div><div class="blk rev"></div><div class="blk rev"></div><div class="blk rev"></div>
<div class="lane">Earlier work</div><div class="blk open"></div><div class="blk open"></div><div class="blk open"></div>
<div class="lane">Working late</div><div class="blk late"></div><div class="blk late"></div><div class="blk late"></div>
</div>

<div class="vs">
<div class="from"><span class="label">Instead of</span><p>Why can't I work harder?</p></div>
<div class="to"><span class="label">Ask</span><p>How do I care for the work without neglecting myself?</p></div>
</div>

</div>
</div>

<!--
P7 — We Can Do This · Courage. Bagian utama talk: respons yang manusiawi.
TIMING: 1 menit untuk pembuka · mulai sekitar 11:07 · stage 7 selesai sekitar 11:15.

SAY:
"Tadi kita bicara tentang menjaga penilaian kita saat memakai AI. Tapi ada jebakan lain. Saat kita belum sanggup memeriksa semua hasilnya, kita bisa malah menyalahkan diri sendiri. Menjaga tanggung jawab bukan berarti memperlakukan diri kita seperti mesin."
"Kalau saya melihat kembali tiga minggu tadi, pertanyaannya bukan: kenapa saya tidak bisa kerja lebih keras? Pertanyaannya: bagaimana saya bisa menjaga pekerjaan itu tanpa mengabaikan diri sendiri? Tiga unsur ini membantu saya memikirkan respons yang bisa saya pilih. Bukan berarti waktu itu saya sudah melakukannya."
"Tiga unsur itu dari self-compassion: mindfulness, common humanity, dan self-kindness."

LIMITS:
Ini refleksi dan pilihan ke depan, bukan klaim tentang apa yang Zain lakukan waktu itu. Diagram kecil sama dengan diagram di stage 3: ilustrasi, bukan jumlah.
Sumber: definisi resmi Kristin Neff (self-compassion.org, dicek 20 Nov 2026). Kalimat Indonesia adalah parafrase dan penerapan yang diusulkan, bukan kutipan dan bukan intervensi yang teruji. Buku dan edisi Neff yang dimaksud belum dikonfirmasi. Kahneman bukan sumber kerangka ini.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P7 · 1 of 3</span>

## Notice what is hard, without a verdict on yourself

**Mindfulness**

See what is hard right now, without ignoring it or making it bigger.

</div>
<div class="visual">

<div class="weeks mini">
<div></div><div class="wk">W1</div><div class="wk">W2</div><div class="wk">W3</div>
<div class="lane dim">New issues</div><div class="blk in dim"></div><div class="blk in dim"></div><div class="blk in dim"></div>
<div class="lane dim">Amp helps</div><div class="blk amp dim"></div><div class="blk amp dim"></div><div class="blk amp dim"></div>
<div class="lane">Still to check</div><div class="blk rev"></div><div class="blk rev"></div><div class="blk rev"></div>
<div class="lane dim">Earlier work</div><div class="blk open dim"></div><div class="blk open dim"></div><div class="blk open dim"></div>
<div class="lane">Working late</div><div class="blk late"></div><div class="blk late"></div><div class="blk late"></div>
</div>

<div class="vs">
<div class="from"><span class="label">Over-identification</span><p>“I'm working late again. I'm failing.”</p></div>
<div class="to"><span class="label">Mindfulness</span><p>“I'm working late, and these results still need review.”</p></div>
</div>

</div>
</div>

<!--
P7.1 — Mindfulness.
TIMING: 1,5 menit.

SAY:
"Mindfulness di sini bukan perintah untuk fokus lebih keras. Kita mencoba melihat kesulitan yang sedang ada tanpa mengabaikan atau membesar-besarkannya. Kalau saya pakai tiga minggu tadi: saya bisa mengakui bahwa saya bekerja sampai larut dan masih ada hasil yang perlu saya periksa, tanpa menghakimi diri sendiri. Itu berbeda dari menyimpulkan: saya developer yang buruk. Mungkin konteksnya kurang. Mungkin tugasnya terlalu luas. Mungkin saya perlu jeda. Belum tentu jawabannya menambah agent."
Pertanyaan praktis: "Apa yang sedang sulit, dan apa yang belum saya ketahui?"

LIMITS:
Ini refleksi, bukan klaim tentang apa yang Zain lakukan waktu itu. Diagram menyorot dua jalur yang perlu diakui; jalur lain tetap ada, hanya diredupkan. Antrean review saja tidak membuktikan stres atau kewalahan.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P7 · 2 of 3</span>

## Struggle is part of being human

**Common humanity**

Everyone makes mistakes, has limits, and needs help sometimes.

</div>
<div class="visual">

<div class="vs">
<div class="from"><span class="label">Isolation</span><p>“Everyone else keeps up. Only I can't.”</p></div>
<div class="down">↓</div>
<div class="to"><span class="label">Common humanity</span><p>“Needing help while I cover someone's work is not a personal failure.”</p></div>
</div>

</div>
</div>

<!--
P7.2 — Common humanity.
TIMING: 1,5 menit.

SAY:
"Saat kesulitan, kita bisa merasa cuma kita yang tidak sanggup. Orang lain kelihatannya bisa menjalankan banyak agent dan tetap produktif. Tapi kita tidak melihat seluruh pengalaman mereka. Membuat kesalahan, punya keterbatasan, dan membutuhkan bantuan adalah bagian dari menjadi manusia. Saat menggantikan pekerjaan rekan yang cuti, butuh bantuan bukan kegagalan pribadi. Bukan berarti pengalaman semua orang sama. Bukan juga berarti beban kerja yang tidak masuk akal harus diterima."
Pertanyaan praktis: "Apakah saya sedang mengubah kesulitan ini menjadi bukti bahwa hanya saya yang tidak layak?"

LIMITS:
Refleksi, bukan klaim bahwa Zain waktu itu meminta bantuan. Jangan pakai polling penonton atau cerita Yegge untuk mendiagnosis ruangan.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P7 · 3 of 3</span>

## Care for yourself without dropping responsibility

**Self-kindness**

A colleague cannot yet explain a risky change. What would you tell them?

</div>
<div class="visual">

<div class="vs">
<div class="from"><span class="label">Self-judgment</span><p>“Catch up tonight. Just work harder.”</p></div>
<div class="to"><span class="label">Self-kindness · what I can tell the team next time</span>
<div class="triage">
<div class="today">I handle this today</div>
<div class="wait">This can wait</div>
<div class="help">This needs help to review</div>
</div>
</div>
</div>

</div>
</div>

<!--
P7.3 — Self-kindness.
TIMING: 1,5 menit.

SAY:
"Kalau rekan kita bilang dia belum memahami perubahan yang berisiko, apakah kita akan bilang: kamu harus bisa mengejar kecepatan mesin? Atau kita akan membantu mencari langkah yang masuk akal? Kita bisa menawarkan dukungan yang sama kepada diri sendiri."
"Kalau menghadapi situasi seperti itu lagi, saya bisa bilang ke tim: ini yang perlu saya tangani hari ini, ini yang bisa menunggu, dan ini yang perlu bantuan untuk diperiksa."
"Pilihannya tidak selalu berhenti bekerja. Yang berubah adalah cara kita mengambil keputusan: bukan karena harus membuktikan nilai diri lewat jumlah output, tetapi karena peduli pada pekerjaan dan orang yang mengerjakannya."
Pertanyaan praktis: "Dukungan atau batas apa yang saya butuhkan sekarang?"

LIMITS:
Pilihan untuk lain kali, bukan klaim tentang yang Zain lakukan waktu itu. Kebaikan pada diri sendiri tetap menjaga standar kualitas. Beban kerja, jumlah orang, dan ekspektasi yang tidak aman mungkin perlu respons tim, bukan hanya jeda pribadi. Ini bukan pengganti bantuan profesional.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P7 · We Can Do This</span>

## Write down what is still open

<div class="aside">

<span class="pill">Optional · 1 minute · private</span>

<p>Think of one small difficulty at work, and keep it to yourself. What is hard, and what support or limit makes sense next?</p>

</div>

</div>
<div class="visual">

<div class="card">
<strong>The work</strong>
<p>If you have not checked it, it is not done. Write what is open, who needs to know, and the next step.</p>
</div>

<div class="card">
<strong>The person</strong>
<p>Unfinished work is not a measure of your worth.</p>
</div>

</div>
</div>

<!--
P7 — refleksi opsional, lalu tanggung jawab dan transisi.
TIMING: 1 menit refleksi (opsional) + 1,5 menit transisi · stage 7 selesai sekitar 11:15. Kalau terlambat dari jadwal, lewati refleksi.

SAY (refleksi, opsional):
"Kalau berkenan, pilih satu kesulitan kerja yang ringan untuk dipikirkan. Tidak perlu diceritakan ke siapa pun. Apa yang sedang sulit? Bisakah saya mengakuinya tanpa menyerang diri sendiri? Dukungan atau batas apa yang masuk akal untuk langkah berikutnya?"
Beri jeda hening. Peserta boleh hanya mendengarkan.

SAY (tanggung jawab dan transisi):
"Kita tetap perlu memeriksa hasil dan bertanggung jawab atas keputusan kita. Kalau ada risiko yang belum diperiksa, jangan menyebutnya selesai. Catat yang masih terbuka, siapa yang perlu tahu, dan langkah berikutnya. Tapi pekerjaan yang belum selesai juga bukan ukuran nilai diri kita. Dari sini, pertanyaan 'sudah cukup?' bukan cuma tentang jumlah tugas yang beres. Ini juga pertanyaan tentang apa yang dibutuhkan pekerjaan dan apa yang kita butuhkan sebagai manusia."

LIMITS:
Jangan minta peserta bercerita. Jangan menjanjikan hasil psikologis. Ini satu-satunya tempat yang menjelaskan beda antara pekerjaan yang belum selesai dan keputusan berhenti; P8 dan P9 hanya memakainya.
-->

---

<div class="stacked">

<span class="eyebrow">P8 · Call To Action</span>

## Pick one priority and decide what is enough

<div class="process">
<div class="step"><strong>Notice</strong><span>What is hard? What is still open?</span></div>
<div class="to">→</div>
<div class="step"><strong>Choose</strong><span>One priority, and what “enough” means</span></div>
<div class="to">→</div>
<div class="step"><strong>Delegate</strong><span>Execution and exploration to the agent</span></div>
<div class="to">→</div>
<div class="step"><strong>Review</strong><span>Check the evidence against “enough”</span></div>
<div class="to">→</div>
<div class="step last"><strong>Enough</strong><span>Stop or continue. Write what remains.</span></div>
</div>

<p class="loopback">↺ If it is not enough yet, or you are past your limit, go back to Notice before you add a task.</p>

<div class="steps3">
<div><b>1</b>Choose <strong>one</strong> priority</div>
<div><b>2</b>Define <strong>enough</strong>: the outcome and the evidence</div>
<div><b>3</b>Set a time or energy point to <strong>check again</strong></div>
</div>

<p class="caption">Try it in your next session.</p>

</div>

<!--
P8 — Call to Action · Commitment.
TIMING: 3 menit · mulai sekitar 11:15 · selesai sekitar 11:18.

SAY:
"Pada sesi kerja berikutnya, pilih satu prioritas, tentukan seperti apa hasil yang cukup, dan putuskan kapan akan meninjau ulang atau berhenti sebelum menambah tugas."
Jalankan diagram dari kiri ke kanan dengan satu contoh singkat. Tunjuk garis putus-putus: kalau belum cukup, atau batas waktu/energi sudah lewat, kembali ke Notice, bukan langsung menambah tugas.
"Saat meninjau ulang, pakai lagi tiga pertanyaan tadi."

LIMITS:
Jangan mengajar ulang tiga unsur self-compassion; cukup tunjuk kembali. Tiga unsur itu cara merespons kesulitan di sepanjang urutan, bukan checklist output tambahan. "Enough" punya dua sisi: hasil dan bukti yang dibutuhkan pekerjaan, serta batas waktu atau energi kita. Ajakan ini tidak butuh Cukup atau tool tertentu.
-->

---

<div class="stacked">

<span class="eyebrow">P9 · Early Benefits</span>

## Make room to pause

**Cukup** means “enough” in Indonesian. It estimates Working Time from Amp turns, as a prompt to pause before you take on more.

<div class="visual">

![Synthetic Working Time example: three Amp agent turns, each followed by 15 minutes, merged into two Working Time blocks](assets/human-attention-working-time-synthetic.png)

</div>

<p class="caption">From cukup.dev · synthetic example, not real activity.</p>

</div>

<!--
P9 — Early Benefits · Reward.
TIMING: 2 menit · mulai sekitar 11:18.

SAY:
"Latihan ini tidak butuh aplikasi khusus. Cukup adalah salah satu cara untuk mengingatkan kita mengambil jeda itu. Bukan alarm bahwa kita kurang produktif, dan bukan izin yang harus kita tunggu sebelum boleh beristirahat."
"Cukup membuat waktu kerja terlihat sebagai pengingat untuk berhenti sejenak dan mempertimbangkan apakah kita perlu mengambil tugas berikutnya."
Jelaskan gambar: Working Time adalah perkiraan dari turn agent Amp, ditambah 15 menit setelah tiap turn. Turn yang tumpang tindih dihitung sekali.

DEMO:
Tampilkan view live hanya kalau demo gate sudah lulus: setup terdokumentasi diuji dari checkout baru tanpa akun Zain, dan datanya aman untuk demo. Kalau belum, pakai contoh sintetis di slide ini. Dashboard cukup.dev hanya untuk pemilik; jangan tampilkan data pribadi.

LIMITS:
Jangan kembali ke cerita Yegge dan jangan mengajar ulang tiga unsur self-compassion di sini. Latihan berhenti ini usulan talk ini, bukan saran Yegge dan bukan efek Cukup yang terbukti.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P9 · Early Benefits</span>

## Working Time is only an estimate

<ul class="small-list">
<li>It does not measure attention, quality or value.</li>
<li>It is not a productivity score, a burnout signal or a measure of your worth.</li>
<li>Reading and thinking away from Amp do not show up.</li>
</ul>

</div>
<div class="visual">

<div class="card">
<strong>Status on cukup.dev · checked 21 Nov 2026</strong>
<p>Amp only. Personal dashboard, no signup. Open-source release in preparation: the source is not public yet, and there is no release date.</p>
</div>

<div class="card">
<strong>You can ask without Cukup</strong>
<p>Before the next task: is this enough for today?</p>
</div>

</div>
</div>

<!--
P9 (lanjutan) — batas dan status.
TIMING: 2 menit · stage 9 selesai sekitar 11:22.

SAY:
Jangan baca daftar ini satu per satu; sebut intinya: "Yang ditampilkan adalah waktu kerja, bukan ukuran perhatian, kualitas, atau kemampuan kita."
Lalu pilih langkah: "Lanjut, kurangi lingkup pekerjaan, minta bantuan, atau cukup untuk sesi ini."

LIMITS:
Cek ulang status di cukup.dev dan repo GitHub tepat sebelum talk. Per 21 Nov 2026, github.com/zainfathoni/cukup belum publik (404). Jangan bilang Cukup sudah open source atau bisa di-install. Cukup tidak mengukur kapasitas rekan atau pelanggan; itu perlu dicek langsung dengan mereka. Waktu kerja yang tercatat tidak membuktikan kewalahan berkurang.
Belum ada cerita nyata tentang hasil setelah jeda dengan Cukup; jangan menceritakannya. Tidak ada total waktu kerja historis yang terverifikasi; jangan sebut angka, dan jangan hubungkan Cukup dengan cerita tiga minggu di stage 3.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P10 · Long Win</span>

## Machine capacity is not a human limit

Start the next task because it matters to you.

Cukup's open-source release is in preparation, so others can read its rules, change them and run their own copy.

</div>
<div class="visual">

<blockquote>

Let AI help you do the work. Keep the decision to say: cukup.

</blockquote>

</div>
</div>

<!--
P10 — The Long Win · True Aspiration.
TIMING: 1 menit · selesai sekitar 11:23 · sisa sekitar 2 menit sebagai margin.

SAY:
"Biarkan AI membantu kita bekerja, tapi keputusan tentang apa yang penting dan kapan sudah cukup tetap milik kita."
Kembali ke pertanyaan pembuka: bisa menjalankan satu agent lagi bukan alasan untuk memulai tugas lagi.

LIMITS:
Jelaskan alasan open source (bisa diperiksa, diadaptasi, di-host sendiri) tanpa ajakan instalasi. Tutup dengan keputusan manusia untuk bilang "cukup", bukan janji output yang lebih besar.
-->

---

<div class="slide one-col">
<div>

## References

<div class="refs">

- Kristin Neff, [What is Self-Compassion?](https://self-compassion.org/what-is-self-compassion/) (the three elements)
- Steve Yegge, [post on pacing AI output](https://x.com/steve_yegge/status/2121671447810888185) (14 November 2026) and [software-factory talk and Q&A](https://www.youtube.com/watch?v=uw44gm-LCzU)
- Thariq, [post on P0 and full attention](https://x.com/trq212/status/2112219173288120531) (19 October 2026)
- Vaswani et al., [Attention Is All You Need](https://arxiv.org/abs/1706.03762) (2017, title reference only)
- Daniel Kahneman, [Thinking, Fast and Slow](https://www.penguin.co.uk/books/56314/thinking-fast-and-slow-by-kahneman-daniel/9780141033570) (2011)
- [cukup.dev](https://cukup.dev): Cukup, open-source release in preparation

</div>

</div>
</div>

<!--
Slide referensi. Tampilkan sebentar saja, atau lewati dan biarkan di slide yang dibagikan.
Kahneman (Thinking, Fast and Slow) dicantumkan karena pertanyaan WYSIATI ada di slide P5. Dia bukan sumber kerangka self-compassion.
-->

---

<div class="qa qa-split">
<div>

# Q & A

<div class="links">

<p><a href="https://www.zainfathoni.com/human-attention-is-all-you-need.html">zainfathoni.com/human-attention-is-all-you-need.html</a></p>
<p><a href="https://cukup.dev">cukup.dev</a></p>

</div>

<p class="signature">Zain Fathoni</p>

</div>

![QR code for zainfathoni.com/human-attention-is-all-you-need.html](assets/human-attention-is-all-you-need-qr.png)

</div>

<!--
Q&A.
Belum dikonfirmasi apakah Q&A masuk dalam slot 30 menit. Kalau masuk, hanya ada sekitar 2 menit margin setelah 11:23; sesi berakhir 11:25 WIB.
QR mengarah ke URL slide yang baru aktif setelah deploy.
-->
