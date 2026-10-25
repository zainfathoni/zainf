---
marp: true
paginate: true
theme: default
backgroundColor: #ffffff
title: Royal vs Frugal Amp
description: Coding Agent Benchmark workflow demo with Amp, Royal vs Frugal mode — SWE Growth Webinar, 25 October 2026
url: https://www.zainfathoni.com/royal-vs-frugal-amp.html
image: https://www.zainfathoni.com/assets/royal-vs-frugal-amp.png
footer: "25 October 2026 | Royal vs Frugal Amp"
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

  .slide.full {
    grid-template-columns: 1fr;
  }

  .full-table table {
    width: 100%;
    border-collapse: collapse;
    font-size: 21px;
    line-height: 1.3;
  }

  .full-table th {
    color: var(--muted);
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    text-align: left;
    padding: 8px 10px;
    border-bottom: 2px solid var(--line);
  }

  .full-table td {
    padding: 10px;
    border-bottom: 1px solid var(--line);
    vertical-align: top;
  }

  .full-table td code {
    font-size: 0.85em;
  }

  .slide.tight li, .slide.tight p {
    font-size: 25px;
  }

  .slide.tight li + li {
    margin-top: 8px;
  }

---

<div class="title-slide">
<div>

# Royal vs Frugal Amp

<p class="subtitle">Coding Agent Benchmark: a workflow demo with Amp, not a scientific benchmark.</p>

</div>
<div class="bio-card">

![Zain Fathoni](assets/zain-1280.jpeg)

<div>

<h3 class="signature">Zain Fathoni</h3>

Senior Software Engineer at BookThatApp. Backend, manager, frontend, now fullstack.

Agentic engineering practitioner · SWE Growth Webinar, 25 October 2026.

<https://zainfathoni.com>

</div>
</div>
</div>

<!--
P1 — Clarity.
Judul ini jujur. Ini bukan benchmark ilmiah. Ini demo alur kerja.
Tidak ada baseline Royal yang bisa dibandingkan, jadi jangan sebut hasil sebagai bukti statistik.
Sebut dua hal di awal: (1) Royal dan Frugal adalah label alur kerja pribadi saya, bukan mode resmi Amp. (2) Hari ini tidak ada Orb sama sekali.
TIMING: 1 menit.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P2 · Common Ground</span>

## Not everyone has the same budget

Spending styles, not skill levels:

- **Sultan Token** — spends freely on the best models and hosted compute
- **Mendang-mending** — balances cost and quality
- **Kere Hore** — keeps cost low and still wants real results

</div>
<div class="visual">

<div class="card">
<strong>Royal</strong>
<p>My personal label: frontier models plus Amp-hosted Orbs under a Megawatt subscription with Orb quota. Not an official Amp mode.</p>
</div>

<div class="card">
<strong>Frugal</strong>
<p>My personal label for today: cheaper worker models, runner-only, no Orbs.</p>
</div>

</div>
</div>

<!--
P2 — Common Ground.
Bahasa Indonesia notes:
Setup saya mungkin Mendang-mending. Tapi hari ini kita cari jalan yang masuk akal buat Kere Hore.
Sebut label spending ini sebagai gaya belanja, bukan level skill. Jangan menebak siapa yang ada di room ini. Saya hanya menebak, dan saya tidak tahu pasti berapa Sultan Token di grup.
Jujur soal Royal: itu contoh saya, bukan standar untuk semua orang.
TIMING: 2 menit.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P3 · Coming Problem</span>

## Cost has two parts

Model cost: tokens and credits for each model call.

Compute cost: where the agent runs, and the Orb quota it uses.

**Runner-only is not free inference.** Your own machine saves Orb quota. Model calls still cost money.

</div>
<div class="visual">

<div class="card">
<strong>🧠 Model cost</strong>
<p>Planner, workers, reviewers, and rescue calls. Each one has its own usage record.</p>
</div>

<div class="card">
<strong>🖥️ Compute cost</strong>
<p>Amp-hosted Orbs, self-hosted infrastructure, or your own runner.</p>
</div>

</div>
</div>

<!--
P3 — Coming Problem: akses dan biaya.
Bahasa Indonesia notes:
Banyak orang mengira "pakai runner sendiri berarti gratis". Itu tidak benar. Runner sendiri menghemat kuota Orb, tapi panggilan model tetap ada biayanya.
Pisahkan dua biaya ini sepanjang talk. Jangan gabungkan.
TIMING: 2 menit.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P4 · Emotional Win</span>

## Useful, verified work within budget

Today's goal: finish real tasks with a cheaper worker model.

Each task needs **checks** and **evidence**. A claim is not proof.

</div>
<div class="visual">

<div class="card">
<strong>✅ A task counts as done when:</strong>
<p>the combined code passes typecheck and build, the acceptance checks pass, and the usage record is filled in.</p>
</div>

<div class="card">
<strong>⚠️ We do not know the result yet.</strong>
<p>The demo decides. This slide states the bar, not the outcome.</p>
</div>

</div>
</div>

<!--
P4 — Emotional Win: harapan yang realistis.
Bahasa Indonesia notes:
Tekankan: tujuan hari ini adalah hasil yang bisa diverifikasi dalam anggaran. Belum ada hasil yang diklaim.
Jangan sebut sukses sebelum check berjalan. Ini aturan talk.
TIMING: 1,5 menit.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P5 · False Hope</span>

## One cheap model is not parallel work

A giant prompt does not split the work for you.

More worktrees do not add ports, RAM, or browser sessions.

Three cheap workers can still hit the **same file, port, or test database.**

</div>
<div class="visual">

<div class="card">
<strong>📜 One giant prompt</strong>
<p>Mixes three tasks. One worker loses track, and nobody owns the result.</p>
</div>

<div class="card">
<strong>🌳 Three worktrees</strong>
<p>Separate source edits. The same port 3000 for all three.</p>
</div>

</div>
</div>

<!--
P5 — False Hope: sobering reality.
Bahasa Indonesia notes:
Ini bagian yang sering dilewati. Model murah tetap butuh batas kerja yang jelas.
Worktree memisahkan file sumber, bukan proses, port, atau database.
TIMING: 2 menit.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P6 · Audacious Reality</span>

## Plan high, run bounded, connect threads

Amp's standout feature: **threads can message each other.** A planner can coordinate cheaper workers on a runner.

**Messages carry context, not code.** Code still flows through branches and checks.

</div>
<div class="visual">

<div class="flow compact">
<div>🧭 Planner · GPT-6.1 Sol or Opus 5.5</div>
<div class="arrow">↓ contract + task cards</div>
<div>🛠️ Workers · Haiku 5.5 or GPT-6 Luna</div>
<div class="arrow">↓ DONE / BLOCKED messages</div>
<div>🔗 Planner integrates and runs checks</div>
</div>

</div>
</div>

<!--
P6 — Audacious Reality.
Bahasa Indonesia notes:
Fitur utama Amp di sini adalah komunikasi antar thread. Planner bisa mengatur worker, dan worker bisa minta keputusan.
Tegaskan: pesan membawa konteks, bukan kode. Kode masuk lewat branch dan check.
Model planner adalah biaya tambahan. Jangan anggap planner gratis.
TIMING: 2 menit.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P7 · We Can Do This</span>

## Four rules make workers safe

Small scope, fixed contracts, owned resources, and checks written first.

You already know how to do this. The change is to write it down before the workers start.

</div>
<div class="visual">

<div class="card">
<strong>🎯 Scope</strong>
<p>One task. A short file list.</p>
</div>

<div class="card">
<strong>📐 Contracts</strong>
<p>Fixed names and data shapes.</p>
</div>

<div class="card">
<strong>🔒 Resource ownership</strong>
<p>Own port, data, browser profile.</p>
</div>

<div class="card">
<strong>🧪 Checks</strong>
<p>Define acceptance checks first.</p>
</div>

</div>
</div>

<!--
P7 — We Can Do This.
Bahasa Indonesia notes:
Empat aturan ini dipakai di seluruh demo. Setiap aturan punya pemilik yang jelas.
Jika dua worker ingin mengubah nama kategori yang sama, pemilik kontrak yang memutuskan.
TIMING: 2 menit.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P8 · Call To Action</span>

## Start a runner-only parallel demo

<ol class="small-list">
<li>Use one runner. No Orbs.</li>
<li>Planner writes the contract and three task cards.</li>
<li>Start three bounded workers, one worktree each.</li>
<li>Give each worker its own port and test data.</li>
<li>Wait for messages, then integrate on one branch.</li>
</ol>

</div>
<div class="visual">

<blockquote>

Parallel work needs owners, not just more agents.

</blockquote>

<p class="quote-source">Rule for today's run.</p>

</div>
</div>

<!--
P8 — Call To Action.
Bahasa Indonesia notes:
Ini momen untuk mulai demo. Tunjukkan runner zains dan daftar tiga task. Jangan buka Orb.
Jika peserta bertanya soal Orb, jawab nanti di sesi Q&A.
TIMING: 1,5 menit.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P9 · Early Benefits</span>

## Observe the integrated result

- changed files for each task
- check results for each task
- a usage record for each thread
- a blocked worker shows where the contract was weak

</div>
<div class="visual">

<div class="card">
<strong>We will not claim success early.</strong>
<p>We show the combined result only after the checks run.</p>
</div>

<div class="card">
<strong>Failures count too.</strong>
<p>A blocked worker is useful evidence. It points to a weak contract.</p>
</div>

</div>
</div>

<!--
P9 — Early Benefits.
Bahasa Indonesia notes:
Di sini kita baru melihat hasil. Jangan sebut hasil sebelum check selesai. Jika ada yang gagal, tunjukkan dan jelaskan.
TIMING: 1 menit, lalu lanjut ke demo.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P10 · Long Win</span>

## Choose what is worth paying for

> Saving does not mean everything must be cheap. Saving means knowing which parts are worth paying for.

Pay for planning, review, and rescue where they matter. Use cheaper workers where the task is bounded.

</div>
<div class="visual">

<div class="card">
<strong>Where to spend more</strong>
<p>Scope, contracts, review of combined work, and rescue of blocked tasks.</p>
</div>

<div class="card">
<strong>Where to spend less</strong>
<p>Bounded edits, repeated checks, and first drafts that a check can reject.</p>
</div>

</div>
</div>

<!--
P10 — Long Win.
Bahasa Indonesia notes (kalimat penutup):
Hemat bukan berarti semua harus murah. Hemat berarti tahu bagian mana yang layak dibayar.
Tutup dengan kalimat ini, lalu minta semua orang melihat tabel biaya di slide berikutnya.
TIMING: 1 menit.
-->

---

<div class="slide">
<div>

## Today's run order

<div class="full-table">

| Time (WIB) | Block | Output |
| ---------- | ----- | ------ |
| 13.00–13.15 | Story, P1–P10 | Shared frame |
| 13.15–13.25 | Contract and task cards | Contract v1 |
| 13.25–14.10 | Workers run, planner answers messages | Branches and messages |
| 14.10–14.15 | Integration and checks | Combined result |
| 14.15–14.30 | Q&A | Questions |

</div>

</div>
<div class="visual">

<div class="card">
<strong>Backup if a worker is slow:</strong>
<p>Show the planner's message log and the blocked state. Do not hide it.</p>
</div>

</div>
</div>

<!--
Agenda. Ini waktu webinar 90 menit. Sekitar 45 menit untuk demo dan integrasi, sisanya cerita dan Q&A.
Jika waktu kurang, potong pemeriksaan tambahan, bukan integrasi dan check utama.
-->

---

<div class="qa">

# Live Demo

<p class="subtitle">Runner only. No Orbs. Three bounded tasks in one repository.</p>

</div>

<!--
Section break. Turunkan ekspektasi: ini demo alur kerja, bukan benchmark.
-->

---

<div class="slide">
<div>

<span class="eyebrow">Demo Rules</span>

## What we do not do today

- no Orbs, and no self-hosted Orbs
- no production writes and no deploys
- no new Cloudflare resources without my approval
- no shared port, database, or browser profile between workers
- no result claimed before its check runs

</div>
<div class="visual">

<div class="card">
<strong>Why these rules?</strong>
<p>They keep the run repeatable and make the cost record clear.</p>
</div>

</div>
</div>

<!--
Aturan demo. Sebutkan satu per satu dengan singkat.
-->

---

<div class="slide full">
<div>

<span class="eyebrow">Cost Model</span>

## What we record for each layer

<div class="full-table">

| Layer | Role | Model choice | Record |
| ----- | ---- | ------------ | ------ |
| Planner | scopes tasks and reviews | GPT-6.1 Sol or Sonnet/Opus 5.5 | usage per thread |
| Workers | bounded edits and checks | Haiku 5.5 or GPT-6 Luna | usage per thread |
| Rescue | only when a worker is blocked | planner model | usage per thread |
| Compute | runner machine | own runner, no Orbs | runner time |
| Human | your review time | none | count it, not billed |

</div>

<p class="caption">No prices on this slide. We fill in usage from Amp usage records after the run.</p>

</div>
</div>

<!--
Tabel biaya. Model cost dan compute cost dipisah.
Jangan memberi angka harga di slide. Angka diisi dari catatan penggunaan setelah demo.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">Setup</span>

## Models and runner

- **Planner:** Amp mode `gpt61s` (GPT-6.1 Sol, listed at high effort; no Medium mode is listed), or Claude Code with `model:claude-opus-5-5`
- **Workers:** Amp mode `gpt6l` (GPT-6 Luna), or Claude Code with `model:claude-haiku-5-5`
- **Executor:** runner `zains`, one worktree per worker

</div>
<div class="visual">

<div class="card">
<strong>Selected models shown on screen</strong>
<p>Each thread header shows the model used. We read it out loud.</p>
</div>

</div>
</div>

<!--
Setup model. Sebutkan model dan mode yang dipakai untuk setiap thread.
Catatan: mode `gpt61s` terdaftar sebagai high effort, bukan Medium. Sebut ini apa adanya. Jangan klaim Medium.
-->

---

<div class="slide full">
<div>

<span class="eyebrow">Three Tasks</span>

## Tasks for the workers

<div class="full-table">

| Task | Goal | Key files |
| ---- | ---- | --------- |
| 1 · Blog category filters | Filters compose with the existing language routes | `app/models/posts.ts`, `app/components/BlogArchiveList.tsx`, `app/routes/_layout.blog_*.tsx` |
| 2 · Atlas page | Curated topical navigation, inspired by [yegge.ai/atlas](https://yegge.ai/atlas). Not a graph. | New route; reads post metadata |
| 3 · First-party AMA form | Replace the dead tanyaaja.in link with a question form and private storage | `app/routes/_index.tsx`, new route and API |

</div>

<p class="caption">Cloudflare Worker + D1 is a candidate for task 3. It is not decided and not provisioned.</p>

</div>
</div>

<!--
Tiga task. Ini tugas demo yang akan dikerjakan nanti. Slide ini tidak mengimplementasikan apa pun.
Task 1 dan 2 bergantung pada nama kategori dan bentuk data yang sama. Itu sebabnya kontrak harus dibuat dulu.
-->

---

<div class="slide tight">
<div>

<span class="eyebrow">Shared Contract</span>

## The planner fixes this before any worker starts

- **Category slugs:** one list, owned by the planner.
- **Post shape:** `categories: string[]` in `app/models/posts.ts`.
- **Filter URL:** `?category=<slug>` on `/blog`, `/blog/en`, `/blog/id`.
- **Empty state:** one message per language.


</div>
<div class="visual">

<div class="term">
<span class="dim">// contract v1 · owner: planner</span><br/>
<span class="dim">categories:</span> string[]<br/>
<span class="dim">url:</span> ?category=&lt;slug&gt;<br/>
<span class="dim">empty:</span> per-language message
</div>

</div>
</div>

<!--
Kontrak bersama. Ini bagian yang mencegah konflik antar worker.
Tanyakan ke peserta: apa yang terjadi jika dua worker memakai nama kategori berbeda untuk topik yang sama?
Catatan: ini hanya contoh bentuk. Slug final ditentukan planner di awal sesi.
Branch bisa lulus sendiri dan tetap gagal setelah digabung.
-->

---

<div class="slide full">
<div>

<span class="eyebrow">Ownership</span>

## Who owns which files, ports, and data

<div class="full-table">

| Thread | Task | Owns | Must not touch | Port | Test data |
| ------ | ---- | ---- | -------------- | ---- | --------- |
| T0 Planner | Contract, integration | contract file, merge | feature code | 5173 | none |
| T1 Blog | Category filters | posts model, archive component, blog routes | `_index.tsx` | 5174 | fixture posts |
| T2 Atlas | Atlas page | new atlas route | blog routes, posts model | 5175 | read-only posts |
| T3 AMA | Question form | new AMA route and API | blog and atlas files | 5176 | local state dir |

</div>

<p class="caption">Ports are proposals. The planner confirms them before the workers start.</p>

</div>
</div>

<!--
Kepemilikan. Setiap thread punya file, port, dan data uji sendiri.
Port 5173–5176 adalah usulan. Planner yang memutuskan sebelum worker mulai.
-->

---

<div class="slide full">
<div>

<span class="eyebrow">Trade-offs</span>

## Worktrees isolate source edits. Nothing else.

<div class="full-table">

| Worktrees isolate | Worktrees do not isolate |
| ----------------- | ------------------------ |
| source files | ports and processes |
| git branches | CPU and RAM |
| uncommitted edits | browser sessions |
|  | shared databases and external services |
|  | merge conflicts |

</div>

<p class="caption">Orbs isolate each thread's runtime. They still do not fix merge conflicts or shared external services.</p>

</div>
</div>

<!--
Trade-off. Worktree memisahkan kode, bukan sumber daya. Tekankan bagian kanan.
-->

---

<div class="slide full">
<div>

<span class="eyebrow">Messages</span>

## Messages carry context, not code

<div class="term">
<span class="dim">planner → T2</span><br/>
Contract v1 is in the contract file. Your port is 5175. Reply to T0 with branch, changed files, and checks.<br/><br/>
<span class="dim">T2 → planner</span><br/>
BLOCKED: Atlas needs slug `engineering`. Not in contract v1. Waiting for your decision.<br/><br/>
<span class="dim">T1 → planner</span><br/>
DONE: branch and file list sent. Checks: report attached.
</div>

<p class="caption">Format examples. They show the message shape, not a result.</p>

</div>
</div>

<!--
Contoh pesan. Pesan BLOCKED adalah sinyal yang baik, bukan kegagalan.
Worker tidak mengubah kontrak sendiri. Worker bertanya ke pemilik kontrak.
-->

---

<div class="slide tight">
<div>

<span class="eyebrow">Rex · Machine access</span>

## One thread can reach several machines

Use **Rex** to reach another machine from the same Amp thread.

Create another thread for **a separate job**, not just machine access.

Keep thread communication for workers that own separate tasks.

</div>
<div class="visual">

<div class="term">
<span class="dim"># routes used in one thread</span><br/>
rex … <span class="dim"># local Mac</span><br/>
rex -S vikas-rex …<br/>
rex -S zains-rex …
</div>

<p class="caption">Three Macs, one Amp context. Avoid repeated thread setup; commands and output still use tokens.</p>

</div>
</div>

<!--
TIMING: 1 menit; ambil dari bagian demo, bukan menambah durasi sesi.
Rex menyediakan akses mesin. Thread Amp membagi kepemilikan pekerjaan. Keduanya saling melengkapi.
Zain memakai skill dan MCP Rex. Contoh yang kita baca membuktikan jalur skill + CLI, bukan panggilan MCP.
Dalam satu thread, agent menjalankan perintah konfigurasi di najmis, vikas, dan zains lewat sesi terminal Rex.
Sesi terminal Rex bukan thread Amp baru. Akses remote memakai rute Rex yang sudah dikonfigurasi.
Contoh ini membuktikan akses lintas mesin tanpa thread Amp per mesin, bukan bukti seluruh sinkronisasi selesai.
Aktivasi konfigurasi di tiga mesin belum terverifikasi lengkap. Tidak ada pengukuran penghematan token atau dolar.
Hindari klaim nol token: perintah dan output tetap masuk konteks. Yang dihindari adalah setup konteks thread berulang.
Ini bukan isolasi runtime: port dan layanan bersama tetap harus dikelola pada setiap mesin.
Sumber: https://ampcode.com/threads/T-01a167ae-4ce8-723b-9500-aeb67e905e5b
-->

---

<div class="slide tight">
<div>

<span class="eyebrow">Integration</span>

## Integrate, then check the combined branch

1. Merge the contract, then T1, T2, T3.
2. Run typecheck and build on the combined branch.
3. Check each category on each language route, with empty states.
4. Check that every Atlas link resolves.
5. Check AMA: valid, empty, too long, rate limit.


</div>
<div class="visual">

<div class="card">
<strong>Matrix to fill in:</strong>
<p>category × language, with pass or fail and the reason.</p>
</div>

</div>
</div>

<!--
Integrasi. Ini paling penting: tiap cabang bisa lulus sendiri, tapi gagal setelah digabung.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">Task 3 · AMA</span>

## Small and honest

- **Validation:** required text, length limit, checked on the server.
- **Submission states:** idle, sending, sent, failed.
- **Basic abuse controls:** hidden field, rate limit, size limit.
- **Not included:** public feed, accounts, admin dashboard.

**Private is not anonymous.** We do not promise absolute anonymity.

</div>
<div class="visual">

<div class="card">
<strong>Hosting</strong>
<p>The site stays on Vercel. A Cloudflare Worker + D1 is only a candidate for this one endpoint.</p>
</div>

</div>
</div>

<!--
AMA minimal. Jangan sebut "anonim" sebagai janji. Sebut "privat" dan jelaskan batasnya.
-->

---

<div class="slide tight">
<div>

<span class="eyebrow">Orbs</span>

## What Orbs isolate, and what they do not

- Amp-hosted Orbs isolate each thread's runtime environment.
- Orbs do not fix merge conflicts or shared external services.
- Self-hosted Orbs register per workspace. Individuals can create a free workspace.
- Infrastructure costs stay with you.

</div>
<div class="visual">

<div class="card">
<strong>Personal experience</strong>
<p>In Palka I tried self-hosted Orbs. Workspace-scoped setup did not fit my personal workflow. This is my report, not checked here.</p>
</div>

<div class="card">
<strong>Today</strong>
<p>No Orbs at all.</p>
</div>

</div>
</div>

<!--
Orbs. Jangan bilang self-hosted Orbs butuh tim berbayar. Dokumen sekarang bilang: gratis sampai 29 Oktober 2026, dan tetap gratis di paket Hobby, Individual, dan Teams setelahnya. Biaya infrastruktur tetap ditanggung sendiri.
Pengalaman Palka adalah cerita saya, belum saya cek ulang.
-->

---

<div class="slide full">
<div>

<span class="eyebrow">Evidence</span>

## One usage record per thread

<div class="full-table">

| Thread | Model (mode or feature) | Runner | Start → end | Usage (Amp record) | Checks | Result |
| ------ | ----------------------- | ------ | ----------- | ------------------ | ------ | ------ |
| T0 Planner | | `zains` | | | | |
| T1 Blog | | `zains` | | | | |
| T2 Atlas | | `zains` | | | | |
| T3 AMA | | `zains` | | | | |

</div>

<p class="caption">Blank until the run. Empty cells are a result too.</p>

</div>
</div>

<!--
Catatan bukti. Isi tabel setelah demo, dari halaman usage Amp dan hasil check. Jangan isi dari ingatan.
-->

---

<div class="slide">
<div>

## References

<div class="refs">

- Amp — [Orbs](https://ampcode.com/docs/orbs) and [Self-Hosted Orbs](https://ampcode.com/docs/orbs/self-hosted)
- SWE Growth — [Coding Agent Benchmark agenda](https://swegrowth.id/agenda/coding-agent-workflow-using-amp-with-royal-vs-frugal-mode)
- Dan Roam — [The Pop-Up Pitch](https://www.danroam.com/) (this talk's storyline)
- [Yegge Atlas](https://yegge.ai/atlas) — inspiration for task 2
- Zain Fathoni — [You don't need CLI](https://www.zainfathoni.com/you-dont-need-cli.html)
- Zain's [Rex multi-machine thread](https://ampcode.com/threads/T-01a167ae-4ce8-723b-9500-aeb67e905e5b) — skill + CLI example; thread access required

</div>

</div>
<div class="visual">

<blockquote>

Messages carry context.

Checks carry proof.

</blockquote>

</div>
</div>

<!--
Referensi. Tutup dengan dua kalimat ini.
-->

---

<div class="qa qa-split">
<div>

# Q & A

<div class="links">

<p><a href="https://www.zainfathoni.com/royal-vs-frugal-amp.html">zainfathoni.com/royal-vs-frugal-amp.html</a></p>
<p><a href="https://ampcode.com">ampcode.com</a></p>

</div>

<p class="signature">Zain Fathoni</p>

</div>

![QR code for zainfathoni.com/royal-vs-frugal-amp.html](assets/royal-vs-frugal-amp-qr.png)

</div>

<!--
Q&A, sekitar 15 menit. Pertanyaan yang sering muncul: biaya Orb, pilihan model, dan kenapa tidak ada benchmark resmi.
-->
