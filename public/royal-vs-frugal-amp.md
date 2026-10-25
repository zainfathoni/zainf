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

<p class="subtitle">You do not need my budget to use Amp well.</p>

<p class="caption">Coding Agent Benchmark:<br/>Using Amp with Royal vs Frugal mode</p>

</div>
<div class="bio-card">

![Zain Fathoni](assets/zain-1280.jpeg)

<div>

<h3 class="signature">Zain Fathoni</h3>

Senior Software Engineer at BookThatApp.

SWE Growth Webinar<br/>25 October 2026<br/>13.00–14.30 WIB

<https://zainfathoni.com>

</div>
</div>
</div>

<!--
P1 — Clarity.
Teman-teman mungkin sudah melihat saya memakai Amp di WhatsApp. Setup saya bisa terlihat mahal.
Pesan saya sederhana: kalian tidak perlu anggaran saya untuk memakai Amp dengan baik.
Hari ini kita lihat demonstrasi alur kerja: membagi tugas, menghubungkan thread, lalu memeriksa hasil dan biaya.
TIMING: 1 menit.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P2 · Common Ground</span>

## Not everyone has the same budget

Spending styles, not skill levels:

- **Sultan Token** — pays for speed and convenience
- **Mendang-mending** — chooses where to spend. That's me.
- **Kere Hore** — needs useful work on a small budget. Today is for you.

</div>
<div class="visual">

<div class="card">
<strong>Royal</strong>
<p>Frontier models + Amp-hosted Orbs. My Megawatt plan includes Orb quota.</p>
</div>

<div class="card">
<strong>Frugal</strong>
<p>Strong planning where it matters. Cheaper workers on runners. No Orbs today.</p>
</div>

</div>
</div>

<!--
P2 — Common Ground.
Sultan Token > Mendang-mending > Kere Hore adalah urutan gaya belanja, bukan kemampuan.
Saya di Mendang-mending: mau bayar jika nilainya jelas. Di grup kita bisa ada semua gaya belanja ini.
Royal dan Frugal sama-sama cara memakai kemampuan Amp. Royal yang saya tunjukkan di WhatsApp memakai model frontier dan Orb dari paket Megawatt.
Hari ini fokus kita Kere Hore: tetap dapat manfaat Amp tanpa meniru semua pengeluaran saya.
TIMING: 2 menit.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P3 · Coming Problem</span>

## Copy the setup. Inherit the bill.

The expensive part is not just the first answer.

Unclear tasks create retries, repair work, and more review.

**A runner removes Orb usage, not model cost.**

</div>
<div class="visual">

<div class="card">
<strong>🧠 Models and tools</strong>
<p>Planning, workers, review, and rescue. Credits, subscriptions, or provider bills.</p>
</div>

<div class="card">
<strong>🖥️ Compute and time</strong>
<p>Hosted compute or your own machine. Plus the time you spend checking and fixing.</p>
</div>

</div>
</div>

<!--
P3 — Coming Problem: akses dan biaya.
Kalau kita hanya meniru setup orang lain, kita juga ikut menanggung tagihannya.
Yang bikin khawatir bukan satu panggilan mahal saja. Tugas kabur bisa memicu percobaan berulang, lalu kita tetap harus memperbaikinya.
Runner memakai mesin sendiri. Biaya model dan langganan tetap perlu dihitung.
TIMING: 1,5 menit.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P4 · Emotional Win</span>

## Small budget. Real confidence.

Imagine choosing one useful task, setting a budget, and knowing what a good result looks like.

You can start without buying my whole setup.

</div>
<div class="visual">

<div class="card">
<strong>A task you can explain</strong>
<p>One visible improvement. Clear limits. A result you can check.</p>
</div>

<div class="card">
<strong>A spend you choose</strong>
<p>Set a cap before the run. Keep room for review and repair.</p>
</div>

</div>
</div>

<!--
P4 — Emotional Win: harapan yang realistis.
Bayangkan selesai satu perbaikan kecil yang memang dibutuhkan, tanpa rasa takut tagihan tiba-tiba membesar.
Kita tahu batas belanja, tahu hasil yang dicari, dan bisa memeriksanya sendiri. Itu rasa percaya diri yang ingin kita bangun.
TIMING: 1,5 menit.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P5 · False Hope</span>

## Cheap calls can still cost more

One prompt can delegate work. It does not guarantee clear boundaries.

More workers can mean more retries and more coordination.

Three worktrees can still share the **same port or test database.**

</div>
<div class="visual">

<div class="card">
<strong>The tempting shortcut</strong>
<p>Choose the cheapest model for every decision. Start more agents.</p>
</div>

<div class="card">
<strong>The missing work</strong>
<p>Someone must define the tasks, resolve dependencies, and check the result.</p>
</div>

</div>
</div>

<!--
P5 — False Hope: sobering reality.
Godaan pertama: ganti semuanya dengan model murah, lalu tambah jumlah agent. Tapi biaya per panggilan rendah belum tentu biaya hasil akhirnya rendah.
Satu prompt bisa memulai delegasi. Tetap perlu batas tugas, keputusan, dan pemeriksaan.
TIMING: 1,5 menit.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P6 · Audacious Reality</span>

## Spend on judgment. Connect the workers.

Amp's standout feature: **native thread-to-thread communication.**

A stronger planner can guide cheaper workers, answer questions, and coordinate handoffs.

</div>
<div class="visual">

<div class="flow compact">
<div>🧭 Planner · scope and decisions</div>
<div class="arrow">↕ instructions and questions</div>
<div>🛠️ Workers · separate, bounded tasks</div>
<div class="arrow">↕ dependencies and results</div>
<div>🔗 Combined code · review and checks</div>
</div>

</div>
</div>

<!--
P6 — Audacious Reality.
Kita tidak harus memilih antara semua mahal atau semua murah. Kita bisa menempatkan model lebih kuat pada keputusan yang berpengaruh besar.
Yang menarik dari Amp: thread saling berkomunikasi secara native. Worker bertanya saat ada keputusan baru; planner mengatur dependensi dan menggabungkan hasil.
Biaya planner dan reviewer tetap masuk hitungan.
TIMING: 2 menit.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P7 · We Can Do This</span>

## You already know the basics

Small tasks. Clear ownership. Shared contracts. Useful checks.

Use the same habits that help people work together.

</div>
<div class="visual">

<div class="card">
<strong>🎯 Scope + contract</strong>
<p>One useful result. Shared names and data.</p>
</div>

<div class="card">
<strong>🔒 Resource ownership</strong>
<p>Assign files and runtime resources.</p>
</div>

<div class="card">
<strong>🧪 Checks</strong>
<p>Know how to accept the result.</p>
</div>

</div>
</div>

<!--
P7 — We Can Do This.
Ini bukan kemampuan baru yang hanya dimiliki Sultan Token. Kita sudah biasa membagi tugas dan memeriksa hasil kerja rekan.
Tuliskan kebiasaan itu supaya agent bisa mengikutinya. Mulai dari satu tugas juga cukup.
TIMING: 1,5 menit.
-->

---

<div class="slide wide-left">
<div>

<span class="eyebrow">P8 · Call To Action</span>

## Choose one task. Set one cap.

<ol class="small-list">
<li>Pick a small improvement you actually need.</li>
<li>Choose your spend cap and stop time.</li>
<li>Write the acceptance check.</li>
<li>Use a runner and a bounded worker.</li>
<li>Add parallel work only where tasks can separate.</li>
</ol>

</div>
<div class="visual">

<blockquote>

Try this with your budget, not mine.

</blockquote>

<p class="quote-source">Our demo will show three tasks and their handoffs.</p>

</div>
</div>

<!--
P8 — Call To Action.
Minta peserta memilih satu pekerjaan kecil yang ingin dicoba setelah sesi ini. Tulis batas biaya dan kapan berhenti.
Belum pindah ke demo. Kita selesaikan dua langkah cerita dulu, lalu buka repo bersama.
TIMING: 1,5 menit.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P9 · Early Benefits</span>

## Your first win is control

- know what each worker owns
- get a question before a wrong assumption grows
- accept one useful change at a time

</div>
<div class="visual">

<div class="card">
<strong>Less guesswork</strong>
<p>You can see progress, decisions, and the next check.</p>
</div>

<div class="card">
<strong>A smaller next step</strong>
<p>If a task stops, you can reduce scope, fix access, or choose help.</p>
</div>

</div>
</div>

<!--
P9 — Early Benefits.
Manfaat awal yang kita cari adalah kendali: tahu siapa mengerjakan apa dan menerima pertanyaan sebelum salah asumsi menjadi banyak kode.
Ini masih janji alur kerja yang akan dicoba, bukan laporan hasil demo.
Worker bisa terhenti karena izin, kredensial, runtime, model, kontrak, atau keputusan baru. Kita cari penyebabnya, bukan langsung menyalahkan model.
TIMING: 1 menit.
-->

---

<div class="slide">
<div>

<span class="eyebrow">P10 · Long Win</span>

## Make good work repeatable

> You do not need my budget. You need to choose where your budget matters.

Save through deliberate choices, not by making every step cheap.

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
Kalau pola ini bisa diulang, kita tidak perlu mengejar setup orang lain setiap kali model baru muncul.
Hemat bukan berarti semua harus murah. Hemat berarti tahu bagian mana yang layak dibayar.
Sekarang kita bawa gagasan ini ke repo nyata. Lihat jadwal, tetapkan batas, lalu jalankan demo.
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
| 13.15–13.25 | Budget, contract, launch | Ready workers |
| 13.25–14.00 | Workers and handoffs | Code for review |
| 14.00–14.15 | Integration, checks, results | What worked + cost |
| 14.15–14.30 | Q&A | Questions |

</div>

</div>
<div class="visual">

<div class="card">
<strong>Stop feature work at 14.00</strong>
<p>Reduce scope if needed. Keep 15 minutes for integration and results.</p>
</div>

</div>
</div>

<!--
Jembatan dari pitch ke demo. P1–P10 berjumlah 14,5 menit; sisa 30 detik untuk transisi ini.
Slide 12–16 dipakai sambil menyiapkan demo selama 10 menit. Setelah slide 16, pindah ke Amp dan mulai worker.
Slide 17–21 adalah referensi saat worker berjalan, bukan lima langkah presentasi wajib sebelum launch.
Mulai integrasi paling lambat 14.00. Jika terlambat, kurangi jumlah fitur yang diterima, bukan waktu pemeriksaan.
-->

---

<div class="slide full">
<div>

<span class="eyebrow">Live demo · Three useful improvements</span>

## One site. Three clear owners.

<div class="full-table">

| Worker | Useful result | Acceptance boundary |
| ------ | ------------- | ------------------- |
| T1 · Blog | Find posts by category | Compose with `/blog`, `/blog/en`, `/blog/id`; preserve URLs and date order |
| T2 · Atlas | Browse curated topic groups | Link to blog categories; inspired by [yegge.ai/atlas](https://yegge.ai/atlas), not a graph or classifier |
| T3 · AMA | Ask a question on this site | Replace the dead homepage link; first-party form and private storage |

</div>

<p class="caption">Blog and Atlas share a category contract. AMA can proceed separately after its storage decision.</p>

</div>
</div>

<!--
TIMING: 1 menit. Tunjukkan kebutuhan pengguna dulu, bukan nama file.
Blog saat ini belum punya categories. UI arsip bersama ada di BlogArchiveList.tsx.
Atlas adalah daftar topik pilihan yang membantu pembaca mencari tulisan. Tidak perlu mesin klasifikasi atau visualisasi graph.
AMA mengganti link tanyaaja.in di homepage. Pemiliknya T3, termasuk edit app/routes/_index.tsx.
-->

---

<div class="slide">
<div>

<span class="eyebrow">Before launch · Budget</span>

## Choose the cap before the calls

- **Extra spend cap:** ___, chosen live
- **Review / rescue reserve:** ___, within the cap
- **Subscription allowance:** ___
- **Stop:** 14.00 WIB, or at the budget limit

</div>
<div class="visual">

<div class="card">
<strong>Count the whole run</strong>
<p>Planner + workers + review + rescue + paid tools.</p>
</div>

<div class="card">
<strong>Check each billing source</strong>
<p>Amp credits, linked subscriptions, or provider API bills. Runner time is separate.</p>
</div>

</div>
</div>

<!--
TIMING: 2 menit. Isi angka dan mata uang di catatan run di layar sebelum memulai panggilan berbayar. Angka kosong bukan izin belanja.
Zain memilih batas biaya tambahan dan bagian untuk review/rescue. Catat langganan yang sudah dibayar dan batas penggunaannya secara terpisah; jangan menganggap langganan gratis atau mengubah token menjadi dolar tanpa dasar.
Periksa routing dan saldo sebelum launch, pada setiap handoff, dan sebelum rescue. Hentikan dispatch baru sebelum sisa anggaran habis. Catatan usage bisa terlambat; batas ini aturan operasional, bukan jaminan hard billing cap.
Jika sumber tagihan tidak dapat diperiksa, kurangi scope atau berhenti. Tidak ada Orb, deploy, atau penulisan data produksi hari ini.
-->

---

<div class="slide full">
<div>

<span class="eyebrow">Before launch · Shared contract</span>

## Give Blog and Atlas the same starting point

<div class="full-table">

| Agree first | Deliver before parallel edits |
| ----------- | ----------------------------- |
| Category names and slugs | One shared taxonomy and post schema |
| `categories: string[]` | Readable metadata, with defaults for existing posts |
| `?category=<slug>` | Same filter contract on all three blog routes |
| Empty / unknown category | Defined behavior and language-specific messages |

</div>

<p class="caption">T0 prepares and checks a foundation commit. Start T1 and T2 worktrees from it; each worker confirms the same revision.</p>

</div>
</div>

<!--
TIMING: 3 menit, sambil planner menyiapkan kontrak. Bentuk categories adalah usulan demo, bukan field yang sudah ada.
T0 menyiapkan kontrak plus kode dasar yang bisa dibaca kedua worker: schema, taxonomy, parsing/default metadata. Periksa sebelum membuat worktree T1 dan T2 dari commit lokal yang sama. Sebut SHA sebenarnya di pesan handoff, bukan contoh palsu.
Setelah handoff, T1 memiliki posts.ts untuk pekerjaan kategori berikutnya. T2 membaca kontrak, tidak mengubah model. Perubahan kontrak harus dikoordinasikan.
Jika worktree sudah ada, kirim commit prasyarat dan minta worker menerapkannya serta mengonfirmasi revisi sebelum lanjut. Di checkout berbeda, transfer file atau commit secara eksplisit. Pesan tentang file tidak membuat file itu muncul di checkout lain.
Kalau fondasi belum siap, Atlas menunggu; AMA bisa berjalan setelah keputusan storage. Jangan pura-pura semua pekerjaan independen.
-->

---

<div class="slide tight wide-left">
<div>

<span class="eyebrow">Before launch · AMA scope</span>

## A private question form, not a platform

- Replace the homepage link and store questions privately.
- Server validation: required text and length limit.
- States: idle, sending, sent, failed.
- Basic abuse controls: hidden field, rate and size limits.
- No accounts, public feed, or admin dashboard.

</div>
<div class="visual">

<div class="card">
<strong>The site stays on Vercel</strong>
<p>Worker + D1 is a storage candidate, not a decision or a provisioned service.</p>
</div>

<div class="card">
<strong>Zain approves external resources</strong>
<p>Test locally first. Private storage is not a promise of absolute anonymity.</p>
</div>

</div>
</div>

<!--
TIMING: 1 menit. Sampaikan syarat ini sebelum T3 dimulai. T3 memiliki homepage app/routes/_index.tsx, route AMA, endpoint, dan storage lokal untuk pengujian.
Planner boleh merekomendasikan storage, tetapi Zain yang menyetujui layanan eksternal baru. Worker + D1 belum diputuskan dan belum diprovisikan.
Pilih jalur lokal yang bisa diuji. Jika keputusan storage belum ada, T3 bisa menyiapkan form dan kontrak endpoint; status integrasi storage tetap belum selesai.
Jangan menjanjikan anonimitas mutlak: layanan bisa mempunyai log dan metadata. Data pertanyaan tidak menjadi feed publik.
-->

---

<div class="slide">
<div>

<span class="eyebrow">Launch · Open Amp now</span>

## Strong planner. Bounded workers.

- **Planner:** GPT-6.1 Sol in Medium, or Claude Code with Sonnet / Opus 5.5.
- **Workers:** Haiku 5.5 or GPT-6 Luna.
- **Runtime:** runner `zains`; one worktree per worker. No Orbs.

</div>
<div class="visual">

<div class="card">
<strong>Read the actual selection</strong>
<p>Mode, model, reasoning effort, and billing route. Confirm before the first message.</p>
</div>

<div class="card">
<strong>Launch after the handoff</strong>
<p>Budget, foundation revision, ownership, and checks are ready.</p>
</div>

</div>
</div>

<!--
TIMING: 2 menit. Pilih model pada UI dan tunjukkan routing. Medium adalah posisi Dial; model dan reasoning effort bisa disetel terpisah. Jangan menyimpulkan effort dari raw mode key.
Dokumentasi ChatGPT Only preset menempatkan GPT-6.1 Sol pada Medium. Tuning, ketersediaan, dan subscription pengguna tetap harus diperiksa live.
Catatan teknis bila perlu: raw gpt61s tidak sama dengan memilih Medium yang ditune. GPT-6 Luna tersedia lewat gpt6l. Claude Code memakai external-agent:claude-code dengan model:claude-haiku-5-5 atau model:claude-opus-5-5; pilih effort yang tersedia pada UI.
Claude subscription hanya berlaku pada mode Claude Code, bukan native Amp dengan raw model Claude. ChatGPT subscription dan BYOK mengikuti routing. Tool pendukung masih bisa memakai kredit Amp.
Mulai worker sekarang. Slide 17–21 berikutnya adalah referensi yang dibuka saat runtime atau menjawab pertanyaan. Kembali ke slide 22 pada 14.00.
-->

---

<div class="slide full">
<div>

<span class="eyebrow">Runtime reference · Ownership</span>

## Assign files and runtime resources

<div class="full-table">

| Thread | Owns | Port proposal | Data / browser |
| ------ | ---- | ------------- | -------------- |
| T0 · Planner | Foundation, contract decisions, integration | 5173 | Combined checks |
| T1 · Blog | `posts.ts`, `BlogArchiveList.tsx`, blog routes | 5174 | Fixture posts; own session |
| T2 · Atlas | New Atlas route; reads shared post model | 5175 | Read-only posts; own session |
| T3 · AMA | `_index.tsx`, AMA route, API and private storage | 5176 | Own local state; own session |

</div>

<p class="caption">Confirm free ports and machine capacity. T1 owns post-model edits after the foundation handoff; T2 asks before contract changes.</p>

</div>
</div>

<!--
Referensi saat worker berjalan. Bukan slide yang harus dibacakan sebelum launch.
Path lengkap: app/models/posts.ts, app/components/BlogArchiveList.tsx, app/routes/_index.tsx. T1 hanya blog, T2 hanya Atlas, T3 hanya homepage dan AMA.
Planner mengubah model hanya untuk fondasi sebelum handoff. Setelahnya, perubahan bersama diputuskan lewat pesan dan diterapkan satu pemilik.
Port adalah usulan, bukan klaim sudah kosong. Periksa proses yang berjalan. Pisahkan browser session dan data lokal; jangan arahkan worker ke database produksi.
-->

---

<div class="slide full">
<div>

<span class="eyebrow">Runtime reference · Messages</span>

## A question can prevent three wrong edits

<div class="term">
<span class="dim">T0 → T1 + T2 · handoff</span><br/>
Start from the foundation commit I supplied. Confirm the revision and category schema before editing.<br/><br/>
<span class="dim">T2 → T0 · dependency</span><br/>
Atlas needs an engineering group. Should it use an existing category or a new slug?<br/><br/>
<span class="dim">T0 → T1 + T2 · decision</span><br/>
Use the existing category. Keep the URL contract. T2 owns the display label.
</div>

<p class="caption">Example exchange. Messages coordinate work; they do not automatically sync working copies.</p>

</div>
</div>

<!--
Tunjukkan satu pesan nyata di Amp jika ada. Contoh ini memperlihatkan pertanyaan, keputusan, dan dependensi, bukan sekadar laporan DONE.
Pesan bisa berisi kode, tetapi tidak otomatis menyinkronkan checkout. Gunakan commit lokal yang tersedia di worktree terkait, atau transfer file secara eksplisit untuk checkout terpisah.
Hasil akhir worker harus menyebut branch, revisi, file, check yang benar-benar dijalankan, serta hal yang belum selesai.
Jika BLOCKED, cari penyebab: akses, kredensial, runtime, model, kontrak, atau keputusan baru. Jangan otomatis menaikkan model.
-->

---

<div class="slide full">
<div>

<span class="eyebrow">Runtime reference · Trade-offs</span>

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

<div class="slide">
<div>

<span class="eyebrow">Runtime reference · Orbs</span>

## Why I stayed with runners

I explored self-hosted Orbs in Palka.

The workspace-scoped setup did not fit my Personal workflow, so I stayed with runners.

Orbs remain useful when runtime isolation is worth the cost and setup.

</div>
<div class="visual">

<div class="card">
<strong>Self-hosted Orbs</strong>
<p>Provider registration is workspace-scoped. An individual can create a free workspace.</p>
</div>

<div class="card">
<strong>Compute still has a cost</strong>
<p>You pay for your infrastructure. Today we use runners, with no Orbs.</p>
</div>

</div>
</div>

<!--
Cerita pribadi, sekitar 1 menit saat worker berjalan. Saya pernah mengeksplorasi self-hosted Orbs di Palka, tetapi pola workspace tidak cocok dengan workflow Personal saya. Jadi saya tetap memakai runner.
Itu pilihan workflow saya, bukan berarti individu dilarang memakai self-hosted Orbs atau harus membayar paket tim.
Dokumentasi menyebut provider didaftarkan pada workspace, workspace individu bisa gratis, dan biaya infrastruktur tetap ditanggung sendiri.
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
Saya memakai skill dan MCP Rex. Contoh ini memakai skill dan CLI: lokal di najmis, lalu rex -S vikas-rex dan rex -S zains-rex dari satu thread Amp.
Sesi terminal Rex bukan thread Amp baru. Kita tidak perlu mengulang setup thread hanya untuk pindah mesin.
Perintah dan output tetap memakai token. Contoh ini tentang akses mesin, bukan angka penghematan atau laporan aktivasi seluruh konfigurasi.
Port dan layanan pada tiap mesin tetap perlu dikelola.
Sumber: https://ampcode.com/threads/T-01a167ae-4ce8-723b-9500-aeb67e905e5b
-->

---

<div class="slide tight">
<div>

<span class="eyebrow">Integration</span>

## Combine the code. Check the result.

1. Integrate ready branches from the same foundation.
2. Run typecheck and build together.
3. Test category × language, order, and empty states.
4. Follow every Atlas link.
5. Test AMA input, storage, errors, and abuse controls.


</div>
<div class="visual">

<div class="card">
<strong>14.00 · Stop adding features</strong>
<p>Accept only the work that passes combined checks. Keep unfinished work separate.</p>
</div>

</div>
</div>

<!--
Pada 14.00, hentikan penambahan fitur dan minta status tiap worker. Lindungi 15 menit sampai 14.15 untuk integrasi, hasil, biaya, dan penutup.
Integrasikan hanya perubahan siap dari fondasi yang sama. Jalankan pnpm run typecheck dan pnpm run build.
Blog: kategori pada /blog, /blog/en, /blog/id; URL tulisan dan urutan tanggal tetap; kategori kosong/tidak dikenal sesuai kontrak.
Atlas: setiap grup dan link menuju filter yang benar. AMA: input valid, kosong, terlalu panjang, error storage, rate/size limit, hidden field, dan tidak ada pembacaan publik atas pertanyaan.
Uji gabungan, bukan hanya status lulus tiap branch. Jika storage eksternal belum disetujui, tunjukkan jalur lokal dan catat bagian produksi belum siap. Tidak melakukan deploy.
-->

---

<div class="slide full">
<div>

<span class="eyebrow">After the demo · Actual results</span>

## What can we accept from this run?

<div class="full-table">

| Task | Combined check evidence | Outcome / remaining work |
| ---- | ----------------------- | ------------------------ |
| Blog categories | Fill from the live run | Pending |
| Curated Atlas | Fill from the live run | Pending |
| Private AMA | Fill from the live run | Pending |

</div>

<p class="caption">Show the result, one useful thread exchange, and the checks. Mark each task accepted, partial, or blocked.</p>

</div>
</div>

<!--
Bagian hasil baru dibuka setelah menjalankan demo dan pemeriksaan gabungan. Isi dari layar, bukan dari ingatan.
Pending adalah status persiapan slide. Saat live, ganti secara lisan atau di catatan run dengan accepted, partial, atau blocked beserta alasannya.
Tunjukkan satu perbaikan yang bekerja dan satu pesan yang membantu keputusan. Jika belum ada fitur selesai, tunjukkan status dan hambatan yang sebenarnya.
Ini bukan perbandingan dollar terkontrol dengan run Royal. Jangan mengubah satu run menjadi klaim persentase penghematan.
-->

---

<div class="slide full">
<div>

<span class="eyebrow">After the demo · Usage and billing</span>

## Count planning, review, and rescue too

<div class="full-table">

| Role | Model / effort | Usage measured | Billing source | Extra charge |
| ---- | -------------- | -------------- | -------------- | ------------ |
| T0 · Plan + review | Record live | Record live | Record live | Confirm / unknown |
| T1 · Blog | Record live | Record live | Record live | Confirm / unknown |
| T2 · Atlas | Record live | Record live | Record live | Confirm / unknown |
| T3 · AMA | Record live | Record live | Record live | Confirm / unknown |
| Rescue / paid tools | Record if used | Record if used | Record if used | Confirm / unknown |

</div>

<p class="caption">Also record existing plan fees, subscription limits, runner time, and human review time. Unknown charges are not zero.</p>

</div>
</div>

<!--
Isi model dan effort aktual, bukan yang semula direncanakan. Catat waktu mulai/akhir di catatan run. Usage measured berisi satuan dan sumber yang tersedia, misalnya token, kredit, atau pemakaian kuota; bukan otomatis nilai dolar.
Billing source: kredit Amp, Claude subscription melalui Claude Code, ChatGPT subscription, atau provider BYOK. Periksa penggunaan Amp dan halaman provider/langganan sesuai routing.
Biaya bulanan yang sudah dibayar tetap disebutkan terpisah. Jangan membagi biaya langganan per task tanpa metode alokasi yang disepakati. Jangan menjumlahkan kuota dengan dolar.
Jika review/rescue ada di T0, tandai included in T0 agar tidak dihitung dua kali. Jika ada thread tambahan, catat terpisah. Hitung juga tool pendukung yang memakai kredit Amp.
Bandingkan biaya tambahan terkonfirmasi dengan cap di awal. Jika tagihan belum muncul, sebut provisional/unknown. Tidak ada angka penghematan pasti tanpa baseline Royal yang sebanding.
-->

---

<div class="slide">
<div>

<span class="eyebrow">Take this home</span>

## You do not need my budget

One useful task. A chosen limit. A clear check.

Pay for decisions. Use cheaper workers for clear tasks.

**Let Amp threads ask, coordinate, and report.**

</div>
<div class="visual">

<blockquote>

Saving does not mean everything must be cheap. It means choosing what is worth paying for.

</blockquote>

</div>
</div>

<!--
Penutup setelah hasil dan biaya, sebelum Q&A. Hubungkan hasil aktual dengan janji awal tanpa memaksakan semua tugas sukses.
Kalian tidak perlu anggaran saya. Mulai dari satu tugas yang berguna, batas biaya yang kalian pilih, dan pemeriksaan yang jelas.
Hemat bukan berarti semua harus murah. Hemat berarti tahu bagian mana yang layak dibayar.
-->

---

<div class="slide">
<div>

## References

<div class="refs">

- Amp — [The Dial](https://ampcode.com/docs/the-dial), [Pricing](https://ampcode.com/docs/pricing), [Agent to Agent](https://ampcode.com/docs/orbs/agent-to-agent)
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

Choose the budget.

Connect the work.

Check the result.

</blockquote>

</div>
</div>

<!--
Referensi untuk dibaca setelah sesi. Pilihan model, routing, dan harga dapat berubah; lihat dokumentasi saat memilih.
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
Q&A, 14.15–14.30 WIB. Buka pertanyaan tentang biaya, pilihan model, pembagian tugas, atau pesan antar thread.
QR menuju URL publik deck. Revisi terbaru tersedia setelah deployment; gunakan HTML lokal untuk presentasi sebelum itu.
-->
