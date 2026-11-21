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

  /* P5: Thariq's post as a screenshot, given the wider column so its text stays readable. */
  .slide.p0 {
    grid-template-columns: 0.9fr 1.1fr;
    gap: 40px;
  }

  .slide.p0 .visual { padding: 18px; }

  .slide.p0 img.post {
    display: block;
    width: 100%;
    border: 1px solid var(--line);
    border-radius: 16px;
  }

  /* Small segue card under a P7 slide's text: a pointer to related work, not a new point. */
  .segue {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 14px;
    align-items: center;
    margin-top: 10px;
    padding: 8px 12px;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: #fafafa;
  }

  .segue img {
    width: 200px;
    border-radius: 8px;
  }

  .segue p {
    grid-column: auto;
    margin: 0;
    font-size: 17px;
    line-height: 1.35;
    color: #374151;
  }

  .segue p:only-child { grid-column: 1 / -1; }


  .segue b {
    display: block;
    font-size: 19px;
    color: var(--text);
  }

  /* "This can wait" joke slide: dark purple with a sunset band; the headline is the focus. */
  section.gta { color: #fdf2f8; }
  section.gta::after, section.gta footer { color: #c4b5fd; }

  section.gta .sunset {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 38%;
    background: linear-gradient(180deg, rgba(30, 11, 51, 0) 0%, rgba(236, 72, 153, 0.55) 55%, rgba(249, 115, 22, 0.85) 100%);
  }

  .gta-slide {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 0.72fr 1.28fr;
    gap: 36px;
    align-items: center;
    height: 100%;
  }

  .gta-slide img.post {
    display: block;
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 10px 36px rgba(0, 0, 0, 0.45);
  }

  .gta-slide .caption { color: #e9d5ff; }

  .gta-slide .eyebrow { color: #f9a8d4; }

  .gta-slide h2 {
    font-size: 54px;
    line-height: 1.05;
    color: #fff;
  }

  .gta-slide h2::after { background: linear-gradient(90deg, #ec4899, #f97316); }

  /* Working Time slide: one real timeline crop across the slide, then the limits and cards. */
  .tl-shot { margin: 10px 0 0; }
  .tl-shot img { display: block; width: 100%; border: 1px solid var(--line); border-radius: 10px; }
  .tl-shot figcaption { margin-top: 4px; font-size: 15px; color: var(--muted); }
  .est { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 14px; align-items: start; }
  .est .card + .card { margin-top: 8px; }
  .stacked.tight { justify-content: flex-start; }
  .est .card strong { font-size: 22px; }
  .est .small-list li { font-size: 22px; }
  .est .card { padding: 10px 16px; }
  .est .card p { font-size: 19px; }

  /* P10: Cukup's explainer video. The PDF prints the poster frame. */
  /* Large media slide: a short text column and a big video or screenshot. */
  .showcase {
    display: grid;
    grid-template-columns: 330px 1fr;
    gap: 36px;
    align-items: center;
    height: 100%;
  }

  .showcase h2 { font-size: 46px; }

  .showcase > video,
  .showcase > img,
  .showcase > p > img {
    display: block;
    width: 100%;
    border-radius: 14px;
    border: 1px solid var(--line);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);
  }

  /* Group photo slide: the photo fills the slide; the dashed box holds its place until then. */
  .photo-slide {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .photo-slide .photo-todo,
  .photo-slide img {
    flex: 1;
    margin: 14px 0 22px;
    border-radius: 16px;
  }

  .photo-slide img { width: 100%; min-height: 0; object-fit: cover; }

  .photo-todo {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px dashed var(--red);
    background: #fef2f2;
    color: #991b1b;
    font-size: 40px;
    font-weight: 800;
    text-align: center;
  }

  /* Alan/Ben audience moment: both lists readable from the back; the takeaway is one fragment. */
  .asch h2 { font-size: 50px; }

  .asch .people {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 18px;
  }

  .asch .person {
    padding: 14px 20px;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: #fafafa;
  }

  .asch .person b {
    display: block;
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 34px;
  }

  .asch .person p { margin: 6px 0 0; font-size: 26px; line-height: 1.35; font-weight: 600; }

  .asch .prompts { margin: 18px 0 0; font-size: 28px; font-weight: 700; line-height: 1.35; }

  .asch ul { list-style: none; margin: 12px 0 0; padding: 0; }

  .asch .reveal {
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: #9a3412;
  }

  /* The first two traits light up with the reveal; before it, every trait looks alike.
     box-shadow pads the highlight without moving the text. The PDF prints the revealed state. */
  .asch mark { padding: 0; border-radius: 4px; background: #fed7aa; box-shadow: 0 0 0 4px #fed7aa; color: #9a3412; transition: all 300ms; }
  .asch:has(li[data-bespoke-marp-fragment="inactive"]) mark { background: transparent; box-shadow: none; color: inherit; }

  .asch .credit { margin: 10px 0 0; font-size: 15px; color: var(--muted); }

  .cukvid blockquote { margin: 0 0 16px; }
  .cukvid blockquote p { font-size: 30px; }

  .cukvid video {
    display: block;
    width: 100%;
    border-radius: 14px;
    border: 1px solid var(--line);
    background: #fdf3df;
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

  .nw { white-space: nowrap; }

  .bio-card .nw {
    white-space: nowrap;
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

  /* One large key line in a text column: the P5 budget cue and the P6 focus cue. */
  .keyline {
    margin: 0 0 16px;
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
  }

  .aside .tagline {
    display: block;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #9a3412;
  }

  .keysub {
    margin: -12px 0 14px;
    font-size: 21px;
    color: #374151;
  }

  .keysub span {
    margin-left: 6px;
    font-size: 16px;
    font-weight: 600;
    color: var(--muted);
  }

  .keyline span {
    margin-left: 10px;
    font-family: ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    color: var(--muted);
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

  /* Three-week story: measured cards on top, a hand-drawn story sketch below. */
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

  .weeks.mini {
    grid-template-columns: 190px repeat(3, 1fr);
    gap: 6px 8px;
    padding: 14px 16px;
    margin-bottom: 18px;
  }

  .weeks.mini .wk { font-size: 13px; }
  .weeks.mini .lane { font-size: 15px; }

  /* Story sketch under the measured cards: one track per week, aligned with the cards.
     Segment positions show the order of the story (issues arrive, Amp works, results wait
     for my check, late evenings) and are drawn by hand, not measured. */
  .weeks .tl {
    position: relative;
    height: 14px;
    border-radius: 4px;
    background: #eef0f3;
  }

  .weeks .tl i {
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: 4px;
  }

  .tl.in i { background: #fdba74; }
  .tl.amp i { background: #93c5fd; }
  .tl.rev i { background: var(--accent); }
  .tl.open i { background: repeating-linear-gradient(135deg, #fff 0 6px, #c4c8cf 6px 12px); }
  .tl.late i { background: #374151; }
  .tl .x0w6 { left: 0%; width: 6%; }
  .tl .x0w8 { left: 0%; width: 8%; }
  .tl .x0w46 { left: 0%; width: 46%; }
  .tl .x0w100 { left: 0%; width: 100%; }
  .tl .x4w4 { left: 4%; width: 4%; }
  .tl .x6w4 { left: 6%; width: 4%; }
  .tl .x6w6 { left: 6%; width: 6%; }
  .tl .x8w14 { left: 8%; width: 14%; }
  .tl .x10w4 { left: 10%; width: 4%; }
  .tl .x10w10 { left: 10%; width: 10%; }
  .tl .x14w6 { left: 14%; width: 6%; }
  .tl .x14w14 { left: 14%; width: 14%; }
  .tl .x22w4 { left: 22%; width: 4%; }
  .tl .x22w10 { left: 22%; width: 10%; }
  .tl .x22w20 { left: 22%; width: 20%; }
  .tl .x26w12 { left: 26%; width: 12%; }
  .tl .x30w4 { left: 30%; width: 4%; }
  .tl .x30w6 { left: 30%; width: 6%; }
  .tl .x34w16 { left: 34%; width: 16%; }
  .tl .x40w4 { left: 40%; width: 4%; }
  .tl .x44w6 { left: 44%; width: 6%; }
  .tl .x44w12 { left: 44%; width: 12%; }
  .tl .x46w54 { left: 46%; width: 54%; }
  .tl .x48w4 { left: 48%; width: 4%; }
  .tl .x50w6 { left: 50%; width: 6%; }
  .tl .x50w12 { left: 50%; width: 12%; }
  .tl .x52w14 { left: 52%; width: 14%; }
  .tl .x58w4 { left: 58%; width: 4%; }
  .tl .x62w4 { left: 62%; width: 4%; }
  .tl .x62w12 { left: 62%; width: 12%; }
  .tl .x66w6 { left: 66%; width: 6%; }
  .tl .x66w14 { left: 66%; width: 14%; }
  .tl .x66w20 { left: 66%; width: 20%; }
  .tl .x72w6 { left: 72%; width: 6%; }
  .tl .x76w4 { left: 76%; width: 4%; }
  .tl .x80w10 { left: 80%; width: 10%; }
  .tl .x80w16 { left: 80%; width: 16%; }
  .tl .x84w6 { left: 84%; width: 6%; }
  .tl .x90w4 { left: 90%; width: 4%; }
  .tl .x92w6 { left: 92%; width: 6%; }
  .tl .x94w6 { left: 94%; width: 6%; }
  .tl .x96w4 { left: 96%; width: 4%; }
  .weeks.mini .tl { height: 10px; border-radius: 3px; }
  .weeks.mini .tl i { border-radius: 3px; }

  .weeks .dim { opacity: 0.25; }

  /* Measured row: Recorded Working Time from the Cukup dashboard (Work track, full ISO weeks),
     redrawn as dark cards. All bars share one 0-70h scale, so the weeks compare honestly;
     the dashed mark is the personal 40h goal. One muted colour: no good/bad signal. */
  .weeks.story {
    grid-template-columns: 340px repeat(3, 1fr);
    gap: 5px 16px;
    padding: 12px 22px;
  }

  .weeks.story .lane {
    font-size: 18px;
  }

  .weeks .lane.mine {
    color: #9a3412;
    font-weight: 800;
  }

  /* The question the story ends on, visible so the speaker needs no notes. */
  .weeks .ask2 {
    grid-column: 1 / -1;
    margin-top: 6px;
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 23px;
    font-weight: 700;
    color: var(--text);
  }

  .weeks .ask2 span { color: var(--muted); font-weight: 600; }

  .weeks .meas {
    font-size: 19px;
    font-weight: 800;
    color: var(--text);
    line-height: 1.2;
  }

  .weeks .meas small {
    display: block;
    margin-top: 4px;
    font-size: 14px;
    font-weight: 600;
    color: var(--muted);
  }

  .weeks .ctx {
    grid-column: 1 / -1;
    margin-top: 6px;
    padding-top: 6px;
    border-top: 1px dashed #d1d5db;
    color: var(--muted);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .wcard {
    padding: 10px 14px 9px;
    border: 1px solid #6b5f52;
    border-radius: 14px;
    background: #231d19;
    color: #f4ecdc;
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
  }

  .wcard .k {
    display: block;
    font-size: 13px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #c9bfae;
  }

  .wcard b {
    display: block;
    margin-top: 2px;
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 32px;
    line-height: 1.05;
    letter-spacing: -0.02em;
    white-space: nowrap;
    color: #f4ecdc;
  }

  .wcard .bar {
    position: relative;
    display: block;
    height: 14px;
    margin-top: 8px;
    border: 1px solid #c9bfae;
    border-radius: 5px;
    background: #3a322b;
  }

  .wcard .bar i {
    display: block;
    height: 100%;
    border-radius: 4px 0 0 4px;
    background: #8f8577;
  }

  .wcard.w1 .bar i { width: 84%; }   /* 58h 48m / 70h */
  .wcard.w2 .bar i { width: 88.6%; } /* 62h 2m / 70h */
  .wcard.w3 .bar i { width: 48%; }   /* 33h 35m / 70h */

  .wcard .bar::after {
    content: "";
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: 57.14%; /* 40h / 70h */
    border-left: 2px dashed #f4ecdc;
  }

  .wcard .goal {
    display: block;
    margin-top: 4px;
    font-size: 13px;
    color: #c9bfae;
  }

  .weeks.mini.story {
    grid-template-columns: 150px repeat(3, 1fr);
    gap: 4px 8px;
    padding: 10px 14px;
    margin-bottom: 12px;
  }

  .weeks.mini.story .lane { font-size: 13px; }

  .weeks.mini .meas { font-size: 14px; }
  .weeks.mini .meas small { font-size: 12px; margin-top: 2px; }
  .weeks.mini .ctx { margin-top: 4px; padding-top: 6px; font-size: 11px; }
  .weeks.mini .wcard { padding: 6px 9px 7px; border-radius: 10px; }
  .weeks.mini .wcard .k { font-size: 10px; }
  .weeks.mini .wcard b { font-size: 19px; }
  .weeks.mini .wcard .bar { height: 8px; margin-top: 5px; border-radius: 3px; }
  .weeks.mini .wcard .bar::after { top: -3px; bottom: -3px; }

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
  }

  /* Each line is a Marp fragment: "Test" shows on the first key press, "Token" on the second.
     "Test" is struck only once "Token" is visible; the PDF prints the final, struck state. */
  .tdd ul {
    list-style: none;
    margin: 4px 0 0;
    padding: 0;
  }

  .tdd li {
    margin: 0;
    font-size: 23px;
    line-height: 1.35;
    white-space: nowrap;
  }

  .tdd del {
    color: var(--muted);
    text-decoration: line-through var(--red) 3px;
    transition: color 300ms, text-decoration-color 300ms;
  }

  .tdd li:has(+ li[data-bespoke-marp-fragment="inactive"]) del {
    color: var(--text);
    text-decoration-color: transparent;
  }

  .tdd ins {
    display: inline-block;
    text-decoration: none;
    font-weight: 800;
    color: #9a3412;
  }

  /* TDD proof: the real Amp notice from the thread that made this deck. Each cue is a
     fragment and lights its own box on the screenshot; the PDF prints both boxes. */
  .token-slide {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 32px;
    align-items: center;
    height: 100%;
  }

  .token-slide h2 { margin: 8px 0 0; font-size: 46px; }

  .tk-clock {
    margin: 10px 0 4px;
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 54px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .tk-clock small {
    display: block;
    margin-top: 6px;
    font-family: inherit;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    color: var(--muted);
  }

  .tk-text ul { list-style: none; margin: 14px 0 0; padding: 0; }
  .tk-text li { margin: 0 0 10px; font-size: 24px; font-weight: 700; line-height: 1.25; }
  .slide.judge h2 { font-size: 46px; }
  .slide.judge h2::after { margin: 12px 0 14px; }
  .slide.judge > div:first-child > p { margin: 0 0 12px; font-size: 24px; line-height: 1.3; }
  .slide.judge .keyline { font-size: 24px; margin-bottom: 8px; }
  .slide.judge .caption { margin: 0; }

  /* P6: the Kahneman ch. 22 cue beside Taste. */
  .taste-cue {
    margin: 0 0 14px;
    padding: 8px 14px;
    border-left: 4px solid var(--accent);
    background: #fff7ed;
    border-radius: 0 10px 10px 0;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.3;
  }
  .taste-cue small { display: block; margin-top: 2px; font-size: 14px; font-weight: 600; color: var(--muted); }

  .tk-text .punch2 { color: #9a3412; }
  .tk-text .q3 { display: block; padding-top: 10px; border-top: 2px solid var(--line); font-size: 22px; color: var(--text); }

  .shot { position: relative; }
  .shot img { display: block; width: 100%; border-radius: 16px; box-shadow: 0 8px 28px rgba(0,0,0,0.25); }

  .shot .hl {
    position: absolute;
    border: 4px solid var(--accent);
    border-radius: 14px;
    box-shadow: 0 0 0 4px rgba(242, 140, 40, 0.25);
    transition: opacity 300ms;
  }

  .shot .h1 { left: 1.5%; top: 53.5%; width: 97%; height: 29.5%; }
  .shot .h2 { left: 7.6%; top: 84.2%; width: 38.6%; height: 11.8%; }

  /* I did not click "Use Megawatt Instead": cross it out instead of ringing it. */
  .shot .hl.h2 {
    border: 0;
    box-shadow: none;
    background:
      linear-gradient(to top right, transparent calc(50% - 3px), var(--red) calc(50% - 3px), var(--red) calc(50% + 3px), transparent calc(50% + 3px)),
      linear-gradient(to bottom right, transparent calc(50% - 3px), var(--red) calc(50% - 3px), var(--red) calc(50% + 3px), transparent calc(50% + 3px));
  }

  .token-slide:has(li:nth-child(1)[data-bespoke-marp-fragment="inactive"]) .h1,
  .token-slide:has(li:nth-child(2)[data-bespoke-marp-fragment="inactive"]) .h2 {
    opacity: 0;
  }

  /* Silent handoff card after Q&A. Clarence's picture replaces the card later. */
  section.tbc {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tbc-card {
    margin: 0;
    padding: 18px 40px;
    border: 4px solid #f4ecdc;
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 72px;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: #f4ecdc;
  }

  /* Handoff: Clarence's slide (added when his export arrives) gets "つづく" in the
     bottom-right corner, the anime "to be continued" mark. */
  .tsuzuku {
    position: absolute;
    right: 40px;
    bottom: 28px;
    margin: 0;
    padding: 4px 18px;
    background: rgba(17, 24, 39, 0.85);
    color: #fff;
    font-size: 44px;
    font-weight: 800;
    letter-spacing: 0.12em;
    border-radius: 8px;
  }

  /* Doomscroll joke: three screenshots stacked like a feed. Marp reveals each list item on a
     key press in the HTML deck; the PDF prints all three, with X in front. */
  .feed-slide {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .feed-slide h2::after {
    margin: 18px 0 0;
  }

  .feed {
    position: relative;
    flex: 1;
    margin-top: 14px;
  }

  .feed ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .feed li {
    position: absolute;
    margin: 0;
    font-size: 18px;
  }

  .feed li + li {
    margin-top: 0;
  }

  .feed li img {
    display: block;
    border-radius: 16px;
    border: 1px solid var(--line);
    box-shadow: 0 18px 40px rgba(17, 24, 39, 0.18);
    background: #fff;
  }

  .feed li:nth-child(1) { left: 0; top: 0; }
  .feed li:nth-child(1) img { width: 450px; }

  .feed li:nth-child(2) { left: 240px; top: 44px; }
  .feed li:nth-child(2) img { width: 450px; }

  .feed li:nth-child(3) { right: 0; top: 70px; }
  .feed li:nth-child(3) img { width: 560px; }

  /* On-stage cues: the setup is visible before the first reveal; each screenshot brings its
     own short meaning cue; the punchline is part of the X item, so it never shows before X. */
  .setup {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 16px 0 0;
    font-size: 22px;
    font-weight: 700;
    color: var(--text);
  }

  .setup span {
    padding: 4px 14px;
    border-radius: 999px;
    background: #f3f4f6;
  }

  .setup span:last-child {
    background: #fff7ed;
    color: #9a3412;
  }

  /* "Work everywhere" lands with the CVE screenshot, not before it. The PDF has no inactive
     fragments, so it prints the full line. */
  .feed-slide:has(.feed li:nth-child(3)[data-bespoke-marp-fragment="inactive"]) .setup .late {
    visibility: hidden;
  }

  .setup i {
    font-style: normal;
    color: var(--accent);
  }

  .feed .say {
    margin-left: 8px;
    padding: 3px 12px;
    border-radius: 8px;
    background: var(--text);
    color: #fff;
    font-size: 21px;
    font-weight: 800;
  }

  .feed .punch {
    position: absolute;
    right: 0;
    top: -262px;
    width: 400px;
    line-height: 1.1;
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-align: right;
    color: var(--red);
  }

  .feed .src {
    display: inline-block;
    margin-bottom: 8px;
    padding: 3px 12px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: #fff;
    color: var(--muted);
  }

  .feed .src b {
    color: var(--text);
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
    font-size: 22px;
  }

  /* Joke openers for Stage 5 and Stage 8: one big line, then short reveals. */
  .opener {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .opener .big1 {
    margin: 18px 0 0;
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 64px;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.05;
    color: var(--text);
  }

  .opener .big1 i { font-style: normal; color: var(--accent); }

  .opener .vnotes {
    display: flex;
    gap: 12px;
    margin-top: 24px;
  }

  .opener .vnotes span {
    padding: 8px 16px;
    border-radius: 999px;
    background: #ecfdf5;
    border: 1.5px solid #6ee7b7;
    color: #065f46;
    font-size: 24px;
    letter-spacing: 0.06em;
  }

  .opener .clock {
    margin: 14px 0 0;
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 120px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1;
    color: var(--text);
  }

  .opener .beats ul {
    list-style: none;
    margin: 28px 0 0;
    padding: 0;
  }

  .opener .beats li {
    margin: 0 0 14px;
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.15;
    color: #9a3412;
  }

  .opener .beats li + li {
    margin-top: 0;
    color: var(--text);
  }

  .opener .quoteline { font-style: italic; }

  .opener .bsub {
    display: block;
    margin-top: 4px;
    font-family: ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    color: #374151;
  }

  .opener .bsub small { font-size: 17px; font-weight: 600; color: var(--muted); }

  /* Figure 6 (Kahneman ch. 7): the same middle mark reads as B or 13 by context. The mark is
     highlighted once its reveal is active; the printed PDF shows the highlight. */
  .fig6 .rows {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 14px;
  }

  /* The sentence sits between the rows, as a distraction before the reveal. */
  .fig6 .rows p.mid {
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 34px;
    font-weight: 700;
  }

  .fig6 .rows p {
    margin: 0;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 88px;
    line-height: 1;
    color: var(--text);
  }

  /* All six characters are drawn in one hand: same stroke, height and frame as the mark. */
  .fig6 .rows img.hw {
    height: 0.8em;
    width: auto;
    margin: 0 0.04em;
    vertical-align: -0.04em;
  }

  .fig6 .glyph {
    display: inline-block;
    margin: 0 0.12em;
    padding: 0 6px;
    border-radius: 12px;
    padding: 0 10px;
    outline: 4px solid var(--accent);
    outline-offset: 4px;
    background: #fff7ed;
  }

  /* One drawn mark, used twice: a plain stroke and two detached rounded lobes, no flag or foot. */
  .fig6 .glyph img {
    display: inline-block;
    height: 0.8em;
    width: auto;
    vertical-align: -0.04em;
  }

  .fig6:has(li [class="hl"]) .glyph { transition: outline-color 300ms, background 300ms; }
  .fig6:has(li[data-bespoke-marp-fragment="inactive"] .hl) .glyph {
    outline-color: transparent;
    background: transparent;
  }

  .fig6 .beats ul { margin-top: 22px; }
  .fig6 .beats li { font-size: 34px; }
  .fig6 .beats li:nth-child(2) { color: var(--muted); }
  .fig6 .banks { display: inline-flex; gap: 36px; align-items: center; }
  .fig6 .banks .bk { display: inline-flex; align-items: center; gap: 12px; color: var(--text); }
  .fig6 .banks img { height: 72px; }

  /* "bank" gets a hand-drawn-style ring when the two meanings appear. */
  .fig6 .bankword { position: relative; }
  .fig6 .bankword::after {
    content: "";
    position: absolute;
    inset: -6px -12px;
    border: 4px solid var(--accent);
    border-radius: 50%;
    transform: rotate(-3deg);
    opacity: 1;
    transition: opacity 300ms;
  }
  .fig6:has(li:nth-child(2)[data-bespoke-marp-fragment="inactive"]) .bankword::after { opacity: 0; }

  .fig6 .credit {
    margin: 6px 0 0;
    font-size: 16px;
    color: var(--muted);
  }

  /* Stage 9: the leave week. Work is a planned goal (usual 40h, 16h with three days off);
     Play is a limit; today and this week ask different questions. Neutral colours only. */
  .stacked.tight h2 { font-size: 52px; }
  .stacked.tight h2::after { margin: 10px 0 12px; }
  .cuk-intro { margin: 0 0 10px; font-size: 24px; line-height: 1.3; }
  .cuk .box .dw { font-size: 20px; }
  .cuk .box .dw b { font-size: 16px; }
  .cuk .box .leave .g b { font-size: 32px; }
  .cuk .caption { margin-top: 6px; }

  .cuk {
    display: grid;
    grid-template-columns: 1.75fr 1fr;
    gap: 14px;
  }

  .cuk .box {
    padding: 12px 18px;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: #fafafa;
  }

  .cuk .box.wide {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .cuk .tag {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #374151;
  }

  .cuk p { margin: 0; }
  .cuk .fine { margin-top: 6px; font-size: 16px; color: var(--muted); }
  .cuk .big { margin-top: 10px; font-size: 24px; font-weight: 700; line-height: 1.25; }
  .cuk .dw { font-size: 24px; }
  .cuk .dw b {
    margin-right: 10px;
    padding: 2px 12px;
    border-radius: 999px;
    background: var(--text);
    color: #fff;
    font-size: 18px;
  }

  .cuk .shots figure { margin: 0; }
  .cuk .pair { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 4px; }
  .cuk .pair img { display: block; width: 100%; }
  .cuk .pair img.tg { width: 56%; margin-bottom: 4px; }
  .cuk .dwrow { margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--line); }
  .cuk .dwrow .dw + .dw { margin-top: 8px; }
  .cuk .pair figcaption { margin-top: 4px; font-size: 17px; font-weight: 700; }

  .leave {
    display: grid;
    grid-template-columns: auto 26px auto;
    gap: 12px;
    align-items: center;
    margin-top: 6px;
  }

  .leave .g {
    font-size: 15px;
    font-weight: 700;
    color: var(--muted);
  }

  .leave .g b {
    display: block;
    font-family: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
    font-size: 38px;
    letter-spacing: -0.02em;
    color: var(--text);
  }

  .leave .g.usual b { color: var(--muted); }
  .leave .to { font-size: 26px; color: var(--accent); text-align: center; }

  .leave .days {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4px;
  }

  .leave .days span {
    padding: 4px 0;
    border: 1.5px solid #374151;
    border-radius: 8px;
    background: #fff;
    text-align: center;
    font-size: 13px;
    color: var(--muted);
  }

  .leave .days span b {
    display: block;
    font-size: 19px;
    color: var(--text);
  }

  .leave .days span.off {
    border-style: dashed;
    border-color: #9ca3af;
    background: transparent;
  }

  .leave .days span.off b { color: #9ca3af; }

  /* Stage 6 example: two Amp threads side by side inside the one Amp step. */
  .handoff .par {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 8px;
  }

  .handoff .par span {
    padding: 8px 12px;
    border: 1.5px solid var(--blue);
    border-radius: 12px;
    background: #fff;
    font-size: 19px;
    line-height: 1.2;
  }

  .handoff .par small {
    display: block;
    color: var(--muted);
    font-size: 15px;
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

    /* Stage 3: the measured weeks appear one after another and their bars grow to the real
       totals; the story lanes come in after them. */
    .weeks.story:not(.mini) .wcard { animation: ha-fade 400ms ease-out both; }
    .weeks.story:not(.mini) .wcard .bar i {
      transform-origin: left center;
      animation: ha-grow 700ms ease-out both;
    }
    .weeks.story:not(.mini) .w1, .weeks.story:not(.mini) .w1 .bar i { animation-delay: 300ms; }
    .weeks.story:not(.mini) .w2, .weeks.story:not(.mini) .w2 .bar i { animation-delay: 1100ms; }
    .weeks.story:not(.mini) .w3, .weeks.story:not(.mini) .w3 .bar i { animation-delay: 1900ms; }
    .weeks.story:not(.mini) .ctx ~ * { animation: ha-fade 500ms ease-out 2700ms both; }

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

    /* TDD joke: "Token" drops in when its fragment is revealed. */
    .tdd li[data-bespoke-marp-fragment="active"] ins { animation: ha-drop 400ms ease-out both; }
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

<span class="nw">Community builder</span> <span class="nw">(Ketua <a href="https://vibefromcafe.id">VibeFromCafe.id</a>)</span><br><span class="nw">Agentic Engineering Practitioner</span>

<https://zainfathoni.com>

</div>
</div>
</div>

<!--
P1 — Title Page
TIMING: 45 detik (15 detik dipakai slide screenshot TDD) · mulai 10:55 · pindah ke P2 sekitar 10:55:45.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P2 · Common Ground</span>

## We wanted room for the important work

We hoped AI would make the work lighter and leave time for the task that matters.

<div class="tdd">
<p class="acronym">TDD =</p>

* <del>Test</del>-Driven Development
* <ins>Token</ins>-Driven Development

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
P2 — Common Ground
TIMING: 1 menit · stage 1–2 selesai sekitar 10:57.
-->

---

<div class="token-slide">
<div class="tk-text">

<span class="eyebrow">P2 · Common Ground</span>

## Token-Driven Development, last night

<p class="tk-clock">23:58<small>Amp, making this deck</small></p>

* <span class="cue">My tokens ran out.</span>
* <span class="cue punch2">I said cukup and continued in the morning.</span>
* <span class="cue q3">Money made it easy to stop. What if money stops being the limit?</span>

</div>
<div class="shot">
<img src="assets/human-attention-token-limit.png" alt="Amp thread titled IDSW 2026, Att..., waiting for comments on GitHub PR #127, with a notice: BookThatApp reached its limit. BookThatApp returned an out-of-usage error. You can deactivate this connection and use your Megawatt subscription. Buttons: Use Megawatt Instead, Retry.">
<span class="hl h1"></span>
<span class="hl h2"></span>
</div>
</div>

<!--
P2 (lanjutan) — bukti TDD dari semalam
TIMING: sekitar 15 detik · waktunya diambil dari P1 (1 menit → 45 detik), jadi target penutup 11:23 tidak bergeser.
-->

---

<div class="feed-slide">

<span class="eyebrow">P2 · Common Ground</span>

## I only wanted a short break

<p class="setup"><span>First, learn to use AI well</span><i>→</i><span>Work from anywhere</span><i class="late">→</i><span class="late">Work everywhere</span></p>

<div class="feed">

* <span class="src"><b>Threads</b> · @naikleveldgnahwy</span><span class="say">Get rich with AI</span> ![Threads post by @naikleveldgnahwy about a friend who makes money with AI-made English lessons](assets/human-attention-feed-threads.png)
* <span class="src"><b>Instagram</b> · @hmpgeoupi</span><span class="say">A debate in my feed</span> ![Instagram post by @hmpgeoupi pushing back on the Ring of Fire claim](assets/human-attention-feed-instagram.png)
* <span class="src"><b>X</b> · @mustafasegf (swear word censored)</span> ![X post by @mustafasegf, swear word censored, quoting cve.now: CRITICAL, Linux kernel: 12 new CVEs](assets/human-attention-feed-x.png) <span class="punch">I came for a break.<br>I got more work.</span>

</div>

</div>

<!--
P2 (lanjutan) — setup singkat, lalu lelucon doomscroll tiga ketukan
TIMING: 30–35 detik (setup sekitar 12 detik + lelucon 20–25 detik) · mulai sekitar 10:57 · cerita P3 mulai sekitar 10:57:35. Waktunya diambil dari slide P3 lanjutan (Yegge), jadi target penutup 11:23 tidak bergeser.
Sumber: https://www.tempo.co/lingkungan/benarkah-cincin-api-pemicu-kebakaran-hutan-dan-lahan--2300648 · https://www.threads.com/@naikleveldgnahwy/post/Da-Gp5_CVAZ/ · https://www.instagram.com/p/DeqWjCEE2WX/ · https://x.com/mustafasegf/status/2123718131361464620
-->
---

<div class="stacked">

<span class="eyebrow">P3 · Coming Problem</span>

## I still had to check what Amp made

Covering for a colleague on leave: three weeks of new issues, with Amp helping.

<div class="weeks story">
<div class="meas">Recorded working time<small>Cukup, Work track. Dashed line: my 40h personal goal. It counts hours only.</small></div>
<div class="wcard w1"><span class="k">Week 1</span><b>58h 48m</b><span class="bar"><i></i></span></div>
<div class="wcard w2"><span class="k">Week 2</span><b>62h 2m</b><span class="bar"><i></i></span></div>
<div class="wcard w3"><span class="k">Week 3</span><b>33h 35m</b><span class="bar"><i></i></span></div>
<div class="ctx">Story sketch · anonymized · bar lengths are not measured</div>
<div class="lane">New issues kept coming</div><div class="tl in"><i class="x4w4"></i><i class="x30w4"></i><i class="x62w4"></i></div><div class="tl in"><i class="x6w4"></i><i class="x22w4"></i><i class="x40w4"></i><i class="x58w4"></i><i class="x76w4"></i><i class="x90w4"></i></div><div class="tl in"><i class="x10w4"></i><i class="x48w4"></i></div>
<div class="lane">Amp helped with the work</div><div class="tl amp"><i class="x8w14"></i><i class="x34w16"></i><i class="x66w14"></i></div><div class="tl amp"><i class="x10w10"></i><i class="x26w12"></i><i class="x44w12"></i><i class="x62w12"></i><i class="x80w10"></i><i class="x94w6"></i></div><div class="tl amp"><i class="x0w6"></i><i class="x14w14"></i><i class="x52w14"></i></div>
<div class="lane mine">I still had to check the results</div><div class="tl rev"><i class="x22w10"></i><i class="x50w12"></i><i class="x80w16"></i></div><div class="tl rev"><i class="x0w8"></i><i class="x22w20"></i><i class="x46w54"></i></div><div class="tl rev"><i class="x0w46"></i><i class="x66w20"></i></div>
<div class="lane">Earlier work stayed open</div><div class="tl open"><i class="x0w100"></i></div><div class="tl open"><i class="x0w100"></i></div><div class="tl open"><i class="x0w100"></i></div>
<div class="lane">I worked late</div><div class="tl late"><i class="x44w6"></i><i class="x72w6"></i><i class="x92w6"></i></div><div class="tl late"><i class="x14w6"></i><i class="x30w6"></i><i class="x50w6"></i><i class="x66w6"></i><i class="x84w6"></i><i class="x96w4"></i></div><div class="tl late"><i class="x6w6"></i><i class="x30w6"></i></div>

<div class="ask2"><span>With Amp helping,</span> how much can I still handle well?</div>
</div>

</div>

<!--
P3 — Coming Problem
TIMING: 1,5 menit · mulai sekitar 10:57:35, setelah setup dan lelucon doomscroll.
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
P3 (lanjutan) — dari cerita ke pola umum
TIMING: sekitar 50 detik (dipotong sekitar 35 detik untuk setup dan lelucon doomscroll) · stage 3–4 tetap selesai sekitar 11:01.
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
P4 — Emotional Win
TIMING: 1 menit · pindah ke P5 sekitar 11:01.
-->

---

<div class="opener">

<span class="eyebrow">P5 · False Hope</span>

<p class="big1">5 agents done <i>→</i> 5 voice notes</p>

<div class="vnotes"><span>▶ ▁▃▅▂▆▃</span><span>▶ ▂▅▃▆▂▄</span><span>▶ ▃▂▆▄▁▅</span><span>▶ ▅▃▁▄▆▂</span><span>▶ ▂▆▄▂▅▃</span></div>

<div class="beats">

* You still hear them one by one.
* <span class="budget">Attention has a budget.</span> <span class="bsub">Careful checking (System 2) takes effort.<br><small>Kahneman’s metaphor · <em>Thinking, Fast and Slow</em>, ch. 1–2</small></span>

</div>

</div>

<!--
P5 pembuka — lelucon voice note, lalu anggaran perhatian
TIMING: sekitar 15 detik lelucon + 25 detik anggaran, di dalam 3 menit P5 (mulai sekitar 11:01). Menggantikan kalimat pembuka P5 yang lama.
-->

---

<div class="opener fig6">

<span class="eyebrow">P5 · False Hope</span>

<div class="rows">
<p><img class="hw" src="assets/human-attention-fig6-A.svg" alt="A"><span class="glyph"><img src="assets/human-attention-fig6-mark.svg" alt="Ambiguous mark that reads as B or 13"></span><img class="hw" src="assets/human-attention-fig6-C.svg" alt="C"></p>
<p class="mid">“Ann approached the <span class="bankword">bank</span>.”</p>
<p><img class="hw" src="assets/human-attention-fig6-1.svg" alt="1"><img class="hw" src="assets/human-attention-fig6-2.svg" alt="2"><span class="glyph"><img src="assets/human-attention-fig6-mark.svg" alt="Ambiguous mark that reads as B or 13"></span><img class="hw" src="assets/human-attention-fig6-1.svg" alt="1"><img class="hw" src="assets/human-attention-fig6-4.svg" alt="4"></p>
</div>

<div class="beats">

* <span class="hl">Both rows use the same middle mark. The context chose how you read it.</span>
* <span class="banks"><span class="bk"><img src="assets/human-attention-riverbank.svg" alt="Illustration of a riverbank">Riverbank</span><span class="bk"><img src="assets/human-attention-financial-bank.svg" alt="Illustration of a bank building">Financial bank</span></span>

</div>

<p class="credit">Redrawn from Daniel Kahneman, <em>Thinking, Fast and Slow</em>, ch. 7, Fig. 6.</p>

</div>

<!--
P5 — Figure 6 Kahneman: konteks membentuk tafsiran
TIMING: 15–20 detik, di dalam 3 menit P5. Waktunya dari kalimat gorila yang dihapus dan pengantar WYSIATI yang dipendekkan.
-->

---

<div class="asch">

<span class="eyebrow">P5 · False Hope</span>

## Meet Alan and Ben

<div class="people">
<div class="person"><b>Alan</b><p><mark>intelligent · industrious</mark> · impulsive · critical · stubborn · envious</p></div>
<div class="person"><b>Ben</b><p><mark>envious · stubborn</mark> · critical · impulsive · industrious · intelligent</p></div>
</div>

<p class="prompts">What’s your first impression?<br>Who would you elect to lead? Who would you hire?</p>

* <span class="reveal">Same traits. Reverse order.</span>

<p class="credit">Trait lists from Solomon Asch (1946), Experiment VI, as cited in Kahneman, <i>Thinking, Fast and Slow</i>, ch. 7. The questions are for this room; Asch did not test them.</p>

</div>

<!--
P5 — Alan dan Ben (Asch 1946, Kahneman ch. 7): urutan membentuk kesan pertama. Slide berikutnya (Mindik) tentang menilai dengan bukti yang belum lengkap.
TIMING: sekitar 20 detik, di dalam 3 menit P5.
-->

---

<div class="slide p0">
<div>

<span class="eyebrow">P5 · False Hope</span>

## A better setup cannot choose for you

Choosing **your P0** is still your job.

<div class="aside">

<p><span class="tagline">WYSIATI · Kahneman ch. 7</span>“Will Mindik be a good leader? She is intelligent and strong…” <em>and corrupt and cruel.</em><br><strong>What evidence would change your mind?</strong></p>

</div>

</div>
<div class="visual">

<img class="post" src="assets/human-attention-thariq-p0.png" alt="Post by Thariq (@trq212), 19 October 2026: I think most people multi-tasking with agents could benefit from slowing down. Most of the stuff you're doing won't really matter. What's your P0? What would it look like if you gave it your full attention?">

<p class="quote-source">P0: the most important priority now. <a href="https://x.com/trq212/status/2112219173288120531">x.com/trq212</a></p>

</div>
</div>

<!--
P5 — False Hope
TIMING: 3 menit · mulai sekitar 11:01 (P6 menjadi 3 menit; stage 5–6 tetap 6 menit). Slide pembuka (voice note dan anggaran perhatian) dan Figure 6 masuk di dalam 3 menit ini.
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
P6 — Audacious Reality
TIMING: 1 menit (dipendekkan karena WYSIATI di P5).
-->

---

<div class="slide wide-left judge">
<div>

<span class="eyebrow">P6 · Audacious Reality</span>

## Let Amp execute while you keep the judgment

A check can pass on a result that nobody needs. **Taste** is how you decide if it is useful.

<p class="taste-cue">Practice builds judgment when patterns repeat and feedback is quick and clear.<small>Kahneman, <i>Thinking, Fast and Slow</i>, ch. 22</small></p>

<p class="keyline">The agents worked in parallel on one problem, and I made one decision.</p>

<p class="caption">From one of my own Amp sessions, anonymized.</p>

</div>
<div class="visual">

<div class="handoff">
<div class="you"><strong>You · one question</strong><p>Is a bigger environment worth it?</p></div>
<div class="arrow">↓</div>
<div class="ai"><strong>Amp · two threads in parallel</strong><div class="par"><span>Benchmark A<small>same setup</small></span><span>Benchmark B<small>same setup</small></span></div></div>
<div class="arrow">↓</div>
<div class="you"><strong>You · one decision</strong><p>Are faster starts worth the higher cost?</p></div>
</div>

</div>
</div>

<!--
P6 (lanjutan) — argumen delegasi
TIMING: 2 menit · stage 5–6 selesai sekitar 11:07.
Sumber: Kahneman, Thinking, Fast and Slow, ch. 22 (intuisi ahli: lingkungan yang teratur dan feedback yang cepat dan jelas).
-->

---

<div class="slide">
<div>

<span class="eyebrow">P7 · We Can Do This</span>

## When the review falls behind, we judge ourselves

Looking back at those weeks with Kristin Neff's self-compassion:<br>**<span class="nw">mindfulness ·</span> <span class="nw">common humanity ·</span> <span class="nw">self-kindness</span>**


</div>
<div class="visual">

<span class="pill">A reflection from today</span>

<div class="weeks mini story">
<div class="meas">Recorded working time<small>Cukup · dashed = 40h personal goal</small></div>
<div class="wcard w1"><span class="k">W1</span><b>58h 48m</b><span class="bar"><i></i></span></div>
<div class="wcard w2"><span class="k">W2</span><b>62h 2m</b><span class="bar"><i></i></span></div>
<div class="wcard w3"><span class="k">W3</span><b>33h 35m</b><span class="bar"><i></i></span></div>
<div class="ctx">Story sketch · not measured</div>
<div class="lane">New issues</div><div class="tl in"><i class="x4w4"></i><i class="x30w4"></i><i class="x62w4"></i></div><div class="tl in"><i class="x6w4"></i><i class="x22w4"></i><i class="x40w4"></i><i class="x58w4"></i><i class="x76w4"></i><i class="x90w4"></i></div><div class="tl in"><i class="x10w4"></i><i class="x48w4"></i></div>
<div class="lane">Amp helps</div><div class="tl amp"><i class="x8w14"></i><i class="x34w16"></i><i class="x66w14"></i></div><div class="tl amp"><i class="x10w10"></i><i class="x26w12"></i><i class="x44w12"></i><i class="x62w12"></i><i class="x80w10"></i><i class="x94w6"></i></div><div class="tl amp"><i class="x0w6"></i><i class="x14w14"></i><i class="x52w14"></i></div>
<div class="lane mine">Still to check</div><div class="tl rev"><i class="x22w10"></i><i class="x50w12"></i><i class="x80w16"></i></div><div class="tl rev"><i class="x0w8"></i><i class="x22w20"></i><i class="x46w54"></i></div><div class="tl rev"><i class="x0w46"></i><i class="x66w20"></i></div>
<div class="lane">Earlier work open</div><div class="tl open"><i class="x0w100"></i></div><div class="tl open"><i class="x0w100"></i></div><div class="tl open"><i class="x0w100"></i></div>
<div class="lane">Working late</div><div class="tl late"><i class="x44w6"></i><i class="x72w6"></i><i class="x92w6"></i></div><div class="tl late"><i class="x14w6"></i><i class="x30w6"></i><i class="x50w6"></i><i class="x66w6"></i><i class="x84w6"></i><i class="x96w4"></i></div><div class="tl late"><i class="x6w6"></i><i class="x30w6"></i></div>
</div>

<div class="vs">
<div class="from"><span class="label">Instead of</span><p>Why can't I work harder?</p></div>
<div class="to"><span class="label">Ask</span><p>How do I care for the work without neglecting myself?</p></div>
</div>

</div>
</div>

<!--
P7 — We Can Do This
TIMING: 1 menit untuk pembuka · mulai sekitar 11:07 · stage 7 selesai sekitar 11:15.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P7 · 1 of 3</span>

## Notice what is hard, without a verdict on yourself

**Mindfulness**

See what is hard right now, without ignoring it or making it bigger.

<div class="segue">
<p><b>Review by video</b>Next: an explainer an agent made for me.</p>
</div>

</div>
<div class="visual">

<div class="weeks mini story">
<div class="meas">Recorded working time<small>Cukup · dashed = 40h personal goal</small></div>
<div class="wcard w1"><span class="k">W1</span><b>58h 48m</b><span class="bar"><i></i></span></div>
<div class="wcard w2"><span class="k">W2</span><b>62h 2m</b><span class="bar"><i></i></span></div>
<div class="wcard w3"><span class="k">W3</span><b>33h 35m</b><span class="bar"><i></i></span></div>
<div class="ctx">Story sketch · not measured</div>
<div class="lane dim">New issues</div><div class="tl in dim"><i class="x4w4"></i><i class="x30w4"></i><i class="x62w4"></i></div><div class="tl in dim"><i class="x6w4"></i><i class="x22w4"></i><i class="x40w4"></i><i class="x58w4"></i><i class="x76w4"></i><i class="x90w4"></i></div><div class="tl in dim"><i class="x10w4"></i><i class="x48w4"></i></div>
<div class="lane dim">Amp helps</div><div class="tl amp dim"><i class="x8w14"></i><i class="x34w16"></i><i class="x66w14"></i></div><div class="tl amp dim"><i class="x10w10"></i><i class="x26w12"></i><i class="x44w12"></i><i class="x62w12"></i><i class="x80w10"></i><i class="x94w6"></i></div><div class="tl amp dim"><i class="x0w6"></i><i class="x14w14"></i><i class="x52w14"></i></div>
<div class="lane mine">Still to check</div><div class="tl rev"><i class="x22w10"></i><i class="x50w12"></i><i class="x80w16"></i></div><div class="tl rev"><i class="x0w8"></i><i class="x22w20"></i><i class="x46w54"></i></div><div class="tl rev"><i class="x0w46"></i><i class="x66w20"></i></div>
<div class="lane dim">Earlier work open</div><div class="tl open dim"><i class="x0w100"></i></div><div class="tl open dim"><i class="x0w100"></i></div><div class="tl open dim"><i class="x0w100"></i></div>
<div class="lane">Working late</div><div class="tl late"><i class="x44w6"></i><i class="x72w6"></i><i class="x92w6"></i></div><div class="tl late"><i class="x14w6"></i><i class="x30w6"></i><i class="x50w6"></i><i class="x66w6"></i><i class="x84w6"></i><i class="x96w4"></i></div><div class="tl late"><i class="x6w6"></i><i class="x30w6"></i></div>
</div>

<div class="vs">
<div class="from"><span class="label">Over-identification</span><p>“I'm working late again. I'm failing.”</p></div>
<div class="to"><span class="label">Mindfulness</span><p>“I'm working late, and these results still need review.”</p></div>
</div>

</div>
</div>

<!--
P7
TIMING: 1,5 menit.
-->

---

<div class="showcase">
<div>

<span class="eyebrow">P7 · 1 of 3</span>

## Review by video

An agent turned a feature into a 16-minute briefing with 22 chapters. Here I skim it in 12 seconds.

<p class="caption">From my DevFest talk: <a class="nw" href="https://zainf.dev/fest-2026">zainf.dev/fest-2026</a></p>

</div>
<video src="assets/human-attention-review-explainer.mp4" poster="assets/human-attention-review-explainer-poster.jpg" controls preload="metadata" playsinline aria-label="Silent 12-second skim through the chapters of an agent-made feature briefing"></video>
</div>

<!--
P7.1 (lanjutan)
TIMING: sekitar 15 detik, di dalam 1,5 menit P7.1; putar beberapa detik saja.
Sumber: https://zainf.dev/fest-2026
-->

---

<div class="slide">
<div>

<span class="eyebrow">P7 · 2 of 3</span>

## Struggle is part of being human

**Common humanity**

Everyone makes mistakes, has limits, and needs help sometimes.

<div class="segue">
<p><b>Navigate the AI shift together</b>Next: Vibe From Cafe, a community I lead.</p>
</div>

</div>
<div class="visual">

<div class="vs">
<div class="from"><span class="label">Isolation</span><p>“Everyone else keeps up. Only I can't.”</p></div>
<div class="down">↓</div>
<div class="to"><span class="label">Common humanity</span><p>“Other people also need help when they cover someone's work.”</p></div>
</div>

</div>
</div>

<!--
P7
TIMING: 1,5 menit.
-->

---

<div class="showcase">
<div>

<span class="eyebrow">P7 · 2 of 3</span>

## Navigate the AI shift together

Vibe From Cafe, a community I lead, has chapters in Indonesian cities and Kuala Lumpur.

<p class="caption"><a href="https://vibefromcafe.id">vibefromcafe.id</a></p>

</div>
<img src="assets/human-attention-vfc-chapters.png" alt="Vibe From Cafe website, Our Chapters: Jogja, Solo, Bandung, Surabaya-Malang, Kuala Lumpur and Jakarta">
</div>

<!--
P7.2 (lanjutan)
TIMING: sekitar 15 detik, di dalam 1,5 menit P7.2.
Sumber: https://vibefromcafe.id (screenshot dari preview https://bce71bf3.vibefromcafe.pages.dev/, 21 Nov 2026)
-->

---

<div class="photo-slide">

<span class="eyebrow">P7 · 2 of 3 · Vibe From Cafe</span>

<div class="photo-todo">Add event photo: Vibe From Cafe members</div>

</div>

<!--
P7.2 (lanjutan) — foto bersama anggota Vibe From Cafe; isyarat untuk melambai. Ganti kotak ini dengan foto setelah diambil.
TIMING: sekitar 5 detik, di dalam 1,5 menit P7.2.
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
P7
TIMING: 1,5 menit.
-->

---

<!-- _class: gta -->
<!-- _backgroundColor: "#1e0b33" -->

<div class="gta-slide">
<div>

<span class="eyebrow">P7 · 3 of 3</span>

## Work can wait, and so can IDSW, now that GTA VI is out

<p class="caption">DM with Bagas Naufal Insani, IDSW 2025 panelist. Cropped.</p>

</div>
<img class="post" src="assets/human-attention-dm-gta.png" alt="DM: Zain asks Bagas if he is coming to IDSW this weekend. Bagas bought a ticket but may get hooked on GTA VI. Zain replies: watch out, you might meet Gibran there.">
</div>
<div class="sunset"></div>

<!--
P7
TIMING: sekitar 15 detik, diambil dari 1,5 menit P7.3; target penutup 11:23 tidak bergeser.
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
P7 — refleksi opsional, lalu tanggung jawab dan transisi
TIMING: 1 menit refleksi (opsional) + 1,5 menit transisi · stage 7 selesai sekitar 11:15. Kalau terlambat dari jadwal, lewati refleksi.
-->

---

<div class="opener">

<span class="eyebrow">P8 · Call To Action</span>

<p class="clock">4:59 PM</p>

<div class="beats">

* <span class="quoteline">“Sekalian deh, satu lagi…”</span>
* Before one more: where is <strong>enough</strong>?

</div>

</div>

<!--
P8 pembuka — lelucon "sekalian"
TIMING: sekitar 15 detik, di dalam 3 menit P8 (mulai sekitar 11:15). Menggantikan kalimat pembuka P8 yang lama.
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
<div><b>2</b><strong>Enough for the work</strong>: the evidence it needs</div>
<div><b>3</b><strong>Enough for me</strong>: when I stop and recheck</div>
</div>

<p class="caption">Try it in your next session.</p>

</div>

<!--
P8 — Call to Action
TIMING: 3 menit · mulai sekitar 11:15 · selesai sekitar 11:18.
-->

---

<div class="stacked tight">

<span class="eyebrow">P9 · Early Benefits</span>

## Make room to pause

<p class="cuk-intro">Attention is limited. Before the next task: what needs it now, and what can wait? <strong>Cukup</strong> (“enough”) reminds me to ask.</p>

<div class="cuk">
<div class="shots">
<span class="tag">Cukup · demo data</span>
<div class="pair">
<figure><img class="tg" src="assets/human-attention-cukup-work-toggle.png" alt="Cukup Track toggle set to Work"><img src="assets/human-attention-cukup-work-today.png" alt="Cukup dashboard, demo data: Track set to Work. Today 1h 45m, 6h 15m remaining, goal 8h."><figcaption>Work · a goal to plan with</figcaption></figure>
<figure><img class="tg" src="assets/human-attention-cukup-play-toggle.png" alt="Cukup Track toggle set to Play"><img src="assets/human-attention-cukup-play-today.png" alt="Cukup dashboard, demo data: Track set to Play. Today 1h 30m, 30m past the soft limit, soft limit 1h, upper limit 2h."><figcaption>Play · a limit to stay under</figcaption></figure>
</div>
<p class="caption">Cukup shows recorded time. Attention and quality stay yours to judge.</p>
</div>
<div class="box">
<span class="tag">My leave week · Work goal</span>
<div class="leave">
<div class="g usual">Usual<b>40h</b></div>
<div class="to">→</div>
<div class="g">3 days off<b>16h</b></div>
<div class="days"><span class="off">Mon<b>0</b></span><span class="off">Tue<b>0</b></span><span>Wed<b>8</b></span><span>Thu<b>8</b></span><span class="off">Fri<b>0</b></span></div>
</div>
<p class="fine">A plan, set before any hours are recorded. Play hours count separately.</p>
<div class="dwrow">
<p class="dw"><b>Today</b> Is this enough?</p>
<p class="dw"><b>This week</b> Is the plan still realistic?</p>
</div>
</div>
</div>

</div>

<!--
P9 — Early Benefits
TIMING: 2 menit · mulai sekitar 11:18.
-->

---

<div class="stacked tight">

<span class="eyebrow">P9 · Early Benefits</span>

## Working Time is only an estimate

<figure class="tl-shot"><img src="assets/human-attention-cukup-timeline.png" alt="Cukup Activity timeline, demo data: one day from 00:00 to 24:00 with a few recorded blocks in the morning, 2h 30m in total."><figcaption>Cukup Activity timeline · one day · demo data</figcaption></figure>

<div class="est">
<div>

<ul class="small-list">
<li>It does not measure attention, quality, productivity, burnout or your worth.</li>
<li>Reading and thinking away from Amp do not show up.</li>
</ul>

</div>
<div class="cards">

<div class="card">
<strong>Open source</strong>
<p>Read its rules, change them, and run your own copy. Works with Amp. Find it at cukup.dev.</p>
</div>

<div class="card">
<strong>You can ask without Cukup</strong>
<p>Before the next task: continue, narrow the scope, ask for help, or stop for this session?</p>
</div>

</div>
</div>
</div>

<!--
P9 (lanjutan) — batas dan status
TIMING: 2 menit · stage 9 selesai sekitar 11:22.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P10 · Long Win</span>

## Set your limit by what you can handle well

Start the next task because it matters to you.

</div>
<div class="visual cukvid">

<blockquote>

Let AI help you do the work. Keep the decision to say: cukup.

</blockquote>

<video src="assets/human-attention-cukup-explainer.mp4" poster="assets/human-attention-cukup-explainer-poster.jpg" controls preload="metadata" playsinline aria-label="Cukup explainer video, 1 minute 38 seconds, narrated with English captions"></video>

<p class="caption">Watch the 1 min 38 s explainer at <a href="https://cukup.dev">cukup.dev</a>. Synthetic data.</p>

</div>
</div>

<!--
P10 — The Long Win
TIMING: 1 menit · selesai sekitar 11:23 · sisa sekitar 2 menit sebagai margin.
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
- [cukup.dev](https://cukup.dev): Cukup, open source, with a 1 min 38 s explainer video

</div>

</div>
</div>

<!--
Slide referensi
-->

---

<div class="qa qa-split">
<div>

# Q & A

<div class="links">

<p><a href="https://zainf.dev/idsw-2026">zainf.dev/idsw-2026</a></p>
<p><a href="https://cukup.dev">cukup.dev</a></p>

</div>

<p class="signature">Zain Fathoni</p>

</div>

![QR code for zainf.dev/idsw-2026](assets/human-attention-is-all-you-need-qr.png)

</div>

<!--
Q&A
-->

---

<!-- _paginate: false -->
<!-- _footer: "" -->
<!-- _class: tbc -->
<!-- _backgroundColor: "#111827" -->

<p class="tbc-card">TO BE CONTINUED</p>

<p class="tsuzuku" lang="ja">つづく</p>

<!--
Handoff ke Clarence. Gambar dari Clarence menggantikan kartu TO BE CONTINUED di slide ini; つづく tetap di pojok kanan bawah.
Saat gambar Clarence tampil: "Nanti Clarence bakal nunjukin gimana dia melatih penilaian itu waktu review UI."
-->
