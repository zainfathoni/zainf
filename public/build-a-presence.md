---
marp: true
theme: default
size: 16:9
paginate: true
lang: id
backgroundColor: "#ffffff"
title: Build a Presence to Kickstart Your Career
description: Temukan arah, buat bukti karya, dan bantu orang lain memahami kontribusimu. GSIH Career Lab Jogja, 26 November 2026.
url: https://www.zainfathoni.com/build-a-presence.html
image: https://www.zainfathoni.com/assets/build-a-presence.png
footer: "26 November 2026 | GSIH Career Lab Jogja | Build a Presence to Kickstart Your Career"
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
    --body: #374151;
    --muted: #6b7280;
    --line: #e5e7eb;
    --accent: #f28c28;
    --accent-ink: #9a3412;
    --accent-soft: #fff7ed;
    --blue: #2563eb;
    --green: #16a34a;
    --green-ink: #166534;
    --red: #dc2626;
    --display: "Space Grotesk", ".SF NS", ui-sans-serif, system-ui, sans-serif;
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
    font-family: var(--display);
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

  p, ul, ol { margin: 0; }
  ul, ol { padding-left: 1.15em; }
  li + li { margin-top: 12px; }
  a { color: var(--blue); }

  /* Eyebrow: the same small uppercase line that opens every reference slide. */
  .tag {
    display: inline-block;
    margin: 0 0 18px;
    color: var(--muted);
    font-size: 18px;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .caption {
    margin-top: 18px;
    color: var(--muted);
    font-size: 20px;
    line-height: 1.35;
  }

  .caption strong { color: var(--accent-ink); }

  .nw { white-space: nowrap; }

  /* Layouts, as in the reference: split (text | framed visual), stacked (text over a wide
     visual), opener (one large statement), and Q & A. */
  .slide, .title-slide {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 54px;
    height: 100%;
    align-items: center;
  }

  .slide.wide-left { grid-template-columns: 1.12fr 0.88fr; }
  .slide p + p { margin-top: 16px; }

  .stacked, .opener {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .stacked h2::after { margin: 18px 0 22px; }
  .stacked.tight h2 { font-size: 52px; }
  .stacked.tight h2::after { margin: 12px 0 18px; }
  .stacked.tight .tag { margin-bottom: 12px; }

  .opener h2 { font-size: 74px; max-width: 1080px; }
  .opener .sub { max-width: 960px; font-size: 34px; line-height: 1.3; color: var(--body); }

  /* The framed panel that carries each slide's visual. */
  .visual {
    border: 1px solid var(--line);
    border-radius: 28px;
    padding: 32px;
    background: #fafafa;
    box-shadow: 0 22px 48px rgba(17, 24, 39, 0.09);
  }

  .stacked .visual { padding: 24px; }

  blockquote, .pull {
    margin: 0;
    padding: 0 0 0 24px;
    border-left: 7px solid var(--accent);
    color: var(--text);
  }

  blockquote p, .pull {
    font-family: var(--display);
    font-size: 34px;
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  /* Cards: a small coloured label, then the content in large, dark type. */
  .card {
    padding: 18px 22px;
    border: 1px solid var(--line);
    border-radius: 20px;
    background: #fff;
  }

  .label {
    display: block;
    color: var(--muted);
    font-size: 15px;
    font-weight: 800;
    line-height: 1.3;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .card p {
    margin: 6px 0 0;
    font-size: 24px;
    line-height: 1.3;
    font-weight: 600;
    color: var(--text);
  }

  .card.warm { border: 2px solid var(--accent); background: var(--accent-soft); }
  .card.warm .label { color: var(--accent-ink); }
  .card.guess { border: 2px dashed var(--accent); background: var(--accent-soft); }
  .card.guess .label { color: var(--accent-ink); }
  .card.gap { border: 2px dashed var(--red); background: #fef2f2; }
  .card.gap .label { color: var(--red); }
  .card.good { border: 2px solid var(--green); background: #f0fdf4; }
  .card.good .label { color: var(--green-ink); }

  .stack { display: grid; gap: 14px; }
  .grid { display: grid; gap: 14px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .grid.three { grid-template-columns: repeat(3, minmax(0, 1fr)); }

  .visual .caption { margin-top: 16px; }

  /* A highlighted result line under a wide visual. */
  .keyline {
    margin-top: 18px;
    padding: 12px 20px;
    border-left: 7px solid var(--accent);
    border-radius: 0 14px 14px 0;
    background: var(--accent-soft);
    font-size: 24px;
    font-weight: 600;
  }

  .keyline strong { color: var(--accent-ink); }

  /* Title slide */
  .title-slide { grid-template-columns: 0.92fr 1.08fr; gap: 64px; }
  .title-slide h1 { font-size: 66px; }
  .subtitle { margin-top: 4px; font-size: 34px; color: var(--body); line-height: 1.25; }
  .meta { margin-top: 26px; color: var(--muted); font-size: 22px; }

  .bio-card {
    display: grid;
    grid-template-columns: 170px 1fr;
    gap: 28px;
    align-items: center;
  }

  .bio-card img {
    display: block;
    width: 170px;
    height: 170px;
    object-fit: cover;
    border-radius: 28px;
  }

  .signature {
    font-family: "Amsterdam Four", cursive;
    font-weight: 400;
    letter-spacing: 0;
  }

  .bio-card h3.signature {
    font-size: 46px;
    line-height: 1;
    padding: 30px 0 0 12px;
    margin: 0 0 28px;
  }

  .bio-card p { margin: 0 0 14px; font-size: 22px; color: var(--body); }

  /* Slide 5: a profile that says little. */
  .profile {
    display: grid;
    grid-template-columns: 92px 1fr;
    gap: 22px;
    align-items: center;
  }

  .profile .avatar {
    width: 92px;
    height: 92px;
    border-radius: 50%;
    background: linear-gradient(135deg, #e5e7eb, #d1d5db);
  }

  .profile .lines i {
    display: block;
    height: 14px;
    border-radius: 999px;
    background: #e5e7eb;
  }

  .profile .lines i + i { margin-top: 10px; width: 62%; }
  .profile + blockquote { margin-top: 26px; }

  /* Slide 6: the definition under the statement. */
  .aside {
    margin-top: 30px;
    max-width: 900px;
    padding: 16px 22px;
    border: 1px solid var(--line);
    border-radius: 20px;
    background: #fafafa;
    font-size: 24px;
    color: var(--body);
  }

  .aside strong {
    display: block;
    color: var(--accent-ink);
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* Slide 7: career path as a flow. */
  .flow {
    display: grid;
    gap: 10px;
    font-family: var(--display);
    font-size: 34px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .flow div {
    padding: 16px 22px;
    border-radius: 18px;
    background: #fff;
    border: 1px solid var(--line);
  }

  .flow div.last { border: 2px solid var(--accent); background: var(--accent-soft); }

  .flow .arrow {
    padding: 0;
    border: none;
    background: transparent;
    color: var(--accent);
    text-align: center;
    font-size: 30px;
    line-height: 1;
  }

  /* Slide 8: four overlapping circles, a hint of the Ikigai diagram. */
  .venn {
    position: relative;
    width: 250px;
    height: 250px;
    margin: 0 auto 28px;
  }

  .venn i {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    mix-blend-mode: multiply;
  }

  .venn i:nth-child(1) { left: 50px; top: 0; background: #fed7aa; }
  .venn i:nth-child(2) { left: 0; top: 50px; background: #bfdbfe; }
  .venn i:nth-child(3) { left: 100px; top: 50px; background: #bbf7d0; }
  .venn i:nth-child(4) { left: 50px; top: 100px; background: #fecaca; }

  .venn b {
    position: absolute;
    left: 113px;
    top: 113px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--accent);
  }

  /* Slide 14: an upload with no context. */
  .file {
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 21px !important;
    font-weight: 500 !important;
    letter-spacing: 0;
  }

  /* Slides 15 and 16: the five-line work story as a form. */
  .story { display: grid; gap: 8px; }

  .story .row {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 18px;
    align-items: baseline;
    padding: 8px 18px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: #fff;
  }

  .story .row b {
    color: var(--accent-ink);
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .story .row span { font-size: 23px; line-height: 1.3; }
  .story .row em { color: var(--muted); font-style: normal; margin-right: 6px; }
  .visual.done { border: 2px solid var(--green); background: #f0fdf4; }
  .visual.done .story .row b { color: var(--green-ink); }

  .visual.template .story .row { border-style: dashed; border-color: #d1d5db; background: #fff; }

  /* Slide 17: a draft profile. */
  .pcard { display: grid; gap: 14px; }

  .pcard .head {
    display: grid;
    grid-template-columns: 72px 1fr;
    gap: 18px;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--line);
  }

  .pcard .avatar {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: linear-gradient(135deg, #fed7aa, #fdba74);
  }

  .pcard p { margin: 0; font-size: 25px; line-height: 1.3; font-weight: 600; }
  .pcard .head p { font-family: var(--display); font-size: 28px; font-weight: 700; }

  /* Slide 19: a team chat. */
  .chat { display: grid; justify-items: end; gap: 10px; }

  .chat .bubble {
    max-width: 92%;
    padding: 18px 22px;
    border-radius: 22px 22px 6px 22px;
    background: var(--blue);
    color: #fff;
    font-size: 26px;
    line-height: 1.35;
    font-weight: 600;
  }

  .chat .tick { color: var(--muted); font-size: 16px; }

  /* Slide 24: the practice steps in a row, as in the reference call to action. */
  .process {
    display: grid;
    grid-template-columns: 1fr 28px 1fr 28px 1fr 28px 1fr;
    align-items: stretch;
    margin: 4px 0 0;
  }

  .process .step {
    padding: 16px 16px;
    border-radius: 18px;
    border: 1px solid var(--line);
    background: #fafafa;
  }

  .process .step .min {
    display: block;
    color: var(--accent-ink);
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .process .step strong {
    display: block;
    margin-top: 4px;
    font-family: var(--display);
    font-size: 30px;
    letter-spacing: -0.02em;
  }

  .process .step span.what {
    display: block;
    margin-top: 6px;
    font-size: 20px;
    line-height: 1.3;
    color: var(--body);
  }

  .process .step.last { border: 2px solid var(--accent); background: var(--accent-soft); }

  .process .to {
    align-self: center;
    text-align: center;
    color: var(--accent);
    font-size: 26px;
    font-weight: 900;
  }

  .loopback {
    margin: 14px 0 0;
    padding: 8px 0 0;
    border-top: 3px dashed var(--accent);
    color: var(--accent-ink);
    font-size: 20px;
    font-weight: 800;
    text-align: center;
  }

  /* Q & A */
  .qa {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 64px;
    align-items: center;
  }

  .qa h1 { font-size: 96px; }
  .qa h1::after { margin: 18px 0 22px; }
  .qa li { font-size: 24px; }
  .qa li + li { margin-top: 8px; }
  .qa .sign-row { display: flex; align-items: center; gap: 40px; margin-top: 22px; }
  .qa .sign-row .link { font-size: 30px; }
  .qa p.signature { padding: 18px 0 0 12px; font-size: 52px; line-height: 1.1; color: var(--text); }
  .qa img { display: block; width: 340px; }

  .refs li { font-size: 24px; }
  .refs li + li { margin-top: 9px; }

  /* Entrance animations for the HTML deck only; the PDF prints the final, static state. */
  @media screen and (prefers-reduced-motion: no-preference) {
    @keyframes cl-rise { from { opacity: 0; transform: translateY(12px); } }
    @keyframes cl-draw { from { clip-path: inset(0 100% 0 0); } }

    .flow > * { animation: cl-rise 400ms ease-out both; }
    .flow > :nth-child(2) { animation-delay: 400ms; }
    .flow > :nth-child(3) { animation-delay: 600ms; }
    .flow > :nth-child(4) { animation-delay: 1000ms; }
    .flow > :nth-child(5) { animation-delay: 1200ms; }

    .story .row { animation: cl-rise 400ms ease-out both; }
    .story .row:nth-child(2) { animation-delay: 250ms; }
    .story .row:nth-child(3) { animation-delay: 500ms; }
    .story .row:nth-child(4) { animation-delay: 750ms; }
    .story .row:nth-child(5) { animation-delay: 1000ms; }

    .process > * { animation: cl-rise 400ms ease-out both; }
    .process > :nth-child(2) { animation-delay: 300ms; }
    .process > :nth-child(3) { animation-delay: 450ms; }
    .process > :nth-child(4) { animation-delay: 750ms; }
    .process > :nth-child(5) { animation-delay: 900ms; }
    .process > :nth-child(6) { animation-delay: 1200ms; }
    .process > :nth-child(7) { animation-delay: 1350ms; }
    .loopback { animation: cl-draw 900ms ease-in-out 1800ms both; }
  }
---

<div class="title-slide">
<div>

<p class="tag">Learning Session 1 · Career Lab Jogja</p>

# Build a Presence to Kickstart Your Career

<p class="subtitle">Temukan arah. Buat karya. Tunjukkan kontribusimu.</p>

<p class="meta">26 November 2026 · 09.40 WIB · GSIH Jogja, STMM “MMTC” Yogyakarta</p>

</div>
<div class="bio-card">
<img src="assets/zain-1280.jpeg" alt="Zain Fathoni">
<div>
<h3 class="signature">Zain Fathoni</h3>
<p>Senior Software Engineer at BookThatApp, based in Yogyakarta, Indonesia.</p>
<p><span class="nw">Community builder</span> <span class="nw">(Ketua <a href="https://vibefromcafe.id">VibeFromCafe.id</a>)</span><br><span class="nw">Agentic Engineering Practitioner</span></p>
<p><a href="https://www.zainfathoni.com/">https://zainfathoni.com</a></p>
</div>
</div>
</div>

<!--
P1 · Title / clarity · 2 menit
Buka dengan pertanyaan: Kalau seseorang mau mengajak kalian ikut proyek, apa yang bisa mereka lihat hari ini? Hari ini kita akan cari satu arah yang layak dicoba dan satu bukti karya untuk memulai.
-->

---

<div class="slide">
<div>

<p class="tag">P2 · Common Ground</p>

## Saya juga pernah merasa salah jurusan.

<p>Di kampus, saya sempat mengira jalur manajer pasti lebih baik daripada jalur teknis.</p>

</div>
<div class="visual">
<p class="pull">Pernah memilih sesuatu karena orang lain bilang itu pilihan yang bagus?</p>
</div>
</div>

<!--
P2 · Common ground / trust · 2 menit
Angkat tangan: siapa yang sudah punya satu bidang yang ingin dicoba? Siapa yang masih bingung? Katakan kedua jawaban wajar. Ceritakan singkat asumsi Anda di ITB: staf dan manajer terasa seperti urutan nilai, padahal jenis pekerjaannya berbeda.
-->

---

<div class="slide">
<div>

<p class="tag">P2 · Common Ground</p>

## Tes kerja pertama saya: perbaiki error.

<p>Tahun 2013, sambil kuliah, saya melamar jadi programmer paruh waktu di QUN (Qiwary Usaha Nusantara), sebuah software house di Bandung.</p>

</div>
<div class="visual">
<div class="stack">
<div class="card"><span class="label">Tugasnya</span><p>Compile satu proyek open source berbahasa Java. Perbaiki error yang muncul.</p></div>
<div class="card warm"><span class="label">Pelajarannya</span><p>Orang yang mau bekerja sama denganmu ingin melihat apa yang bisa kamu kerjakan.</p></div>
</div>
<p class="caption">Talenta punya potensi. Industri membutuhkan bukti. <strong>(ToR Career Lab)</strong></p>
</div>
</div>

<!--
P2 · Tes kerja pertama · 2 menit
Ceritakan bahwa pada 2013 skill Anda masih minim. Selain wawancara, tes masuk di QUN sederhana: compile proyek open source Java dan perbaiki error-nya. Anda diterima dan bekerja di QUN dari 2013 sampai 2014. Sambungkan ke kalimat ToR: panitia membuat acara ini karena industri membutuhkan bukti. Tanyakan: kalau besok ada tes seperti itu di bidangmu, karya apa yang bisa kamu tunjukkan? Sumber: 7 Pelajaran, Pelajaran #2.
-->

---

<div class="slide">
<div>

<p class="tag">P3 · Coming Problem</p>

## Karya yang bagus bisa luput dari perhatian.

</div>
<div class="visual">
<div class="stack">
<div class="card"><span class="label">Yang kamu tahu</span><p>Kamu ikut membuat poster, menyusun jadwal, atau mengolah data untuk acara sekolah.</p></div>
<div class="card gap"><span class="label">Yang orang lain lihat</span><p>Satu foto acara. Mereka belum tahu apa yang kamu kerjakan atau siapa yang terbantu.</p></div>
</div>
<p class="caption">Kalau peranmu tidak terlihat, orang lain harus menebaknya.</p>
</div>
</div>

<!--
P3 · Coming problem / fear · 3 menit
Minta dua contoh pekerjaan di balik acara sekolah yang jarang terlihat. Bahas mengapa foto tim saja tidak memberi tahu calon rekan kerja siapa yang mengerjakan apa.
-->

---

<div class="opener">

<p class="tag">P4 · Emotional Win</p>

## “Aku lihat karyamu. Mau bantu kami juga?”

<p class="sub">Bayangkan seseorang bisa langsung paham apa yang kamu kerjakan dan tahu cara mengajakmu bekerja sama.</p>

</div>

<!--
P4 · Emotional win / hope · 3 menit
Ini situasi yang kita bayangkan, bukan testimoni. Ajak siswa berpikir: lebih ingin diajak ke proyek seperti apa, dan oleh siapa? Minta mereka sebutkan ke teman di sebelah. Terima jawaban seperti bikin poster, bantu acara, atau merapikan data, tanpa perlu nama jabatan.
-->

---

<div class="slide">
<div>

<p class="tag">P5 · False Hope</p>

## Profil yang rapi belum menjelaskan kemampuanmu.

<p class="pull">Kalau membaca ini, kamu akan mengajak orangnya mengerjakan apa?</p>

</div>
<div class="visual">
<div class="profile" aria-hidden="true"><div class="avatar"></div><div class="lines"><i></i><i></i></div></div>

> “Kreatif, pekerja keras, dan suka tantangan.”

</div>
</div>

<!--
P5 · False hope / sobering reality · 3 menit
Tunggu jawaban sebelum memberi contoh. Foto, sertifikat, dan bio bisa membantu orang mengenalmu. Namun, contoh karya dan penjelasan peran membuat kemampuanmu lebih mudah dinilai. Tidak perlu menambah pengikut atau membuka semua akun.
-->

---

<div class="opener">

<p class="tag">P6 · Audacious Reality</p>

## Coba dulu. Catat hasilnya. Baru tentukan arah.

<p class="sub">Coba satu pekerjaan kecil. Tunjukkan hasilnya kepada orang yang bisa memberi masukan.</p>

<p class="aside"><strong>Presence:</strong> Orang yang tepat bisa menemukan karyamu dan memahami peranmu.</p>

</div>

<!--
P6 · Audacious reality / gusto · 3 menit
Kita sering ingin yakin dulu sebelum bertindak. Balik urutannya: ambil langkah kecil agar punya bahan untuk menilai pilihan. Membangun presence bisa dimulai dari berbagi secara terbatas.
-->

---

<div class="slide wide-left">
<div>

<p class="tag">P6 · Audacious Reality</p>

## Setelah jadi manajer, saya malah kangen membuat karya.

<p>Saya sempat mengira naik jabatan berarti menemukan arah yang tepat. Setelah menjalaninya, saya sadar saya lebih menikmati membuat produk secara langsung.</p>

</div>
<div class="visual">
<div class="flow">
<div>Developer</div>
<div class="arrow">↓</div>
<div>Manajer</div>
<div class="arrow">↓</div>
<div class="last">Software Engineer</div>
</div>
</div>
</div>

<!--
P6 · Cerita Zain · 3 menit
Ceritakan perpindahan dari developer ke manajer di Xtremax dan kembali ke jalur teknis di Bukalapak. Saat jadi manajer, Anda tetap belajar dan membuat proyek sampingan. Tekankan bahwa jalur manajer bisa cocok untuk orang lain. Contoh ini menunjukkan bahwa pengalaman langsung bisa mengubah keputusan.
-->

---

<div class="slide">
<div>

<p class="tag">P7 · We Can Do This</p>

## Ikigai lebih luas daripada pekerjaan.

<p>Ikigai adalah gagasan Jepang tentang hal yang membuat hidup terasa berarti. Itu bisa datang dari hobi, keluarga, atau kegiatan sehari-hari.</p>

</div>
<div class="visual">
<div class="venn" aria-hidden="true"><i></i><i></i><i></i><i></i><b></b></div>
<p class="pull">Untuk karier, kita pinjam empat pertanyaan sebagai alat refleksi.</p>
</div>
</div>

<!--
P7 · We can do this / courage · 4 menit
Bedakan makna ikigai yang luas dari alat refleksi karier modern. Ceritakan bahwa hobi tidak harus jadi sumber penghasilan. Hari ini tujuannya memilih arah yang layak dicoba, bukan menemukan satu jawaban untuk seumur hidup. Sumber ada di slide terakhir.
-->

---

<div class="stacked">

<p class="tag">P7 · 1 of 4 · Empat pertanyaan</p>

## Cari petunjuk dari pengalamanmu.

<div class="visual grid">
<div class="card"><span class="label">01 · Minat</span><p>Apa yang kamu suka lakukan, bahkan saat tidak disuruh?</p></div>
<div class="card"><span class="label">02 · Kemampuan</span><p>Apa yang sudah bisa kamu lakukan atau ingin kamu latih? Apa contohnya?</p></div>
<div class="card"><span class="label">03 · Kebutuhan</span><p>Siapa yang bisa kamu bantu? Masalah apa yang mereka alami?</p></div>
<div class="card"><span class="label">04 · Peluang</span><p>Siapa yang mungkin membayar pekerjaan ini? Apa tanda bahwa peluang itu ada?</p></div>
</div>

<p class="caption">Satu jawaban boleh “belum tahu”. Jadikan itu pertanyaan untuk diuji.</p>

</div>

<!--
P7 · Empat pertanyaan · 5 menit
Minta peserta bedakan tindakan dari label: “suka video” bisa berarti menulis naskah, merekam, atau menyunting. Untuk kemampuan, cari bukti, misalnya teman mengandalkanmu untuk merapikan materi. Untuk peluang, cari brief, peran magang, atau cara kerja orang di bidang itu. Tandai dugaan, jangan mengarang bukti.
-->

---

<div class="stacked tight">

<p class="tag">P7 · 1 of 4 · Contoh rekaan · Naya</p>

## Dari empat jawaban ke satu percobaan.

<div class="visual grid">
<div class="card"><span class="label">Minat</span><p>Suka menyunting video pendek.</p></div>
<div class="card"><span class="label">Kemampuan</span><p>Pernah membuat ringkasan video untuk kegiatan kelas.</p></div>
<div class="card"><span class="label">Kebutuhan</span><p>Panitia acara sekolah ingin calon peserta memahami cara mendaftar.</p></div>
<div class="card guess"><span class="label">Peluang · masih dugaan</span><p>Apakah panitia lain punya anggaran untuk jasa edit video? Tanya salah satu panitia.</p></div>
</div>

<p class="keyline"><strong>Percobaan:</strong> Buat video 30 detik untuk satu acara. Uji pada dua teman.</p>

</div>

<!--
P7 · Contoh empat jawaban · 5 menit
Perkenalkan Naya sebagai contoh rekaan yang akan muncul lagi. Tanyakan: kalau dua teman paham langkah daftar, bagian mana yang terbukti? Kegunaan video untuk dua penonton, bukan minat pasar. Untuk peluang berbayar, Naya masih bisa mencari satu brief serupa atau bertanya kepada pengelola acara.
-->

---

<div class="stacked">

<p class="tag">P7 · 1 of 4 · Percobaan kecil</p>

## Kamu bisa mulai dari masalah di dekatmu.

<div class="visual grid three">
<div class="card"><span class="label">Desain / konten</span><p>Buat poster acara. Minta teman mencari tanggal dan lokasi.</p></div>
<div class="card"><span class="label">Web / pemasaran</span><p>Buat halaman info acara. Amati apakah teman menemukan cara daftar.</p></div>
<div class="card"><span class="label">Data / operasional</span><p>Ringkas data survei tanpa nama. Minta panitia mengambil satu keputusan.</p></div>
</div>

<p class="keyline">Siapa yang akan mencoba karyamu? Apa yang akan kamu amati?</p>

</div>

<!--
P7 · Contoh lintas bidang · 3 menit
Minta pasangan memilih satu contoh atau mengusulkan versi sendiri. Satu orang menyebutkan apa yang dibuat, satu orang memperjelas siapa pemakai dan apa yang perlu diamati. Bidang di luar digital pun bisa memakai pola ini, misalnya tata letak meja registrasi atau petunjuk antrean.
-->

---

<div class="slide">
<div>

<p class="tag">P7 · 1 of 4 · Percobaan kecil</p>

## Pelajari yang kamu butuhkan untuk percobaan itu.

</div>
<div class="visual">
<div class="flow stack">
<div class="card"><span class="label">Pelajari saat perlu</span><p>Naya belajar membuat teks video yang bisa dibaca di layar kecil.</p></div>
<div class="arrow">↓</div>
<div class="card warm"><span class="label">Pahami dasarnya</span><p>Mengapa ukuran teks, kontras, dan waktu tampil memengaruhi keterbacaan?</p></div>
</div>
<p class="caption">Coba satu perubahan. Minta orang menguji hasilnya. Catat pelajarannya.</p>
</div>
</div>

<!--
P7 · Belajar sesuai kebutuhan · 2 menit
Ambil gagasan just-in-time learning dan prinsip dasar dari materi Software Engineer Unggulan. Untuk siswa, cukup satu pertanyaan yang ingin dijawab lewat percobaan. Contoh pribadi soal Git datang sebentar lagi, sebagai contoh cerita karya lima baris.
-->

---

<div class="slide">
<div>

<p class="tag">P7 · 2 of 4 · Tunjukkan bukti</p>

## Karya pertama bisa jadi sudah ada.

<p class="caption">Pilih satu karya yang relevan. Nanti, kurasi 2–3 karya terbaik.</p>

</div>
<div class="visual">
<div class="stack">
<div class="card"><span class="label">Tugas sekolah:</span><p>infografik, laporan, atau prototipe.</p></div>
<div class="card"><span class="label">Kegiatan tim:</span><p>poster, jadwal acara, atau panduan pendaftaran.</p></div>
<div class="card"><span class="label">Latihan mandiri:</span><p>proyek tutorial yang kamu ubah dan bisa kamu jelaskan.</p></div>
</div>
</div>
</div>

<!--
P7 · Inventaris karya · 3 menit
Beri 60 detik untuk mencatat satu karya yang sudah pernah dibuat dan peran sendiri di sana. Jika belum punya karya yang cocok, pilih satu percobaan kecil. Untuk karya tim, sebutkan kontribusi rekan dan minta izin sebelum membagikan hasil bersama.
-->

---

<div class="stacked tight">

<p class="tag">P7 · 2 of 4 · Cerita nyata</p>

## Karya saya: satu long weekend, satu slide.

<div class="visual done">
<div class="story">
<div class="row"><b>Konteks:</b><span>Tujuh backend developer, sering Git conflict. Satu conflict pernah makan setengah hari.</span></div>
<div class="row"><b>Peran:</b><span>Saya memimpin tim itu.</span></div>
<div class="row"><b>Proses:</b><span>Saya pelajari Git sampai dasarnya, lalu membuat slide dan menjelaskannya ke tim.</span></div>
<div class="row"><b>Hasil:</b><span>Conflict lebih jarang. Biasanya selesai kurang dari setengah jam.</span></div>
<div class="row"><b>Tautan:</b><span><a href="https://zainf.dev/git-best-practices">zainf.dev/git-best-practices</a></span></div>
</div>
</div>

<p class="caption">Bukan proyek besar. Tapi karena ada slide-nya, saya masih bisa menunjukkannya hari ini.</p>

</div>

<!--
P7 · Contoh nyata Git · 3 menit
Ceritakan singkat: tim tujuh backend developer, kode sering conflict, pernah setengah hari untuk satu Git conflict. Anda memakai satu long weekend untuk belajar dari Git Tower, Atlassian, Think Like (a) Git, dan "A successful Git branching model", lalu membuat slide dan menjelaskannya ke teman sekantor. Sampaikan hasilnya sebagai pengamatan tim, bukan angka yang diukur. Tekankan: lima baris ini berlaku untuk karya apa pun. Lalu: "Sekarang kita coba pada karya Naya." Sumber: 7 Pelajaran, Pelajaran #4–#5.
[KONFIRMASI] Buka tautannya di browser sebelum acara. zainf.dev/git-best-practices mengarah ke file OneDrive yang menolak pengecekan otomatis.
-->

---

<div class="slide">
<div>

<p class="tag">P7 · 2 of 4 · Contoh rekaan</p>

## Sebelum: “Saya bikin video acara.”

</div>
<div class="visual">
<div class="stack">
<div class="card"><span class="label">Yang terlihat</span><p class="file">Judul: Video Acara Sekolah<br>Lampiran: video.mp4</p></div>
<div class="card gap"><span class="label">Yang belum jelas</span><p>Siapa yang perlu video ini? Bagian mana yang kamu kerjakan? Apa yang kamu pelajari?</p></div>
</div>
</div>
</div>

<!--
P7 · Contoh sebelum · 3 menit
Berpura-pura menjadi panitia yang perlu bantuan dari Naya. Minta ruangan menyebutkan informasi yang masih hilang. Tahan jawaban sampai ada dua atau tiga tebakan, kemudian lanjut ke contoh sesudah.
-->

---

<div class="stacked tight">

<p class="tag">P7 · 2 of 4 · Contoh rekaan</p>

## Sesudah: Video panduan daftar acara sekolah

<div class="visual done">
<div class="story">
<div class="row"><b>Konteks:</b><span>Calon peserta sering bertanya cara mendaftar.</span></div>
<div class="row"><b>Peran:</b><span>Saya menulis naskah dan menyunting video. Tim merekamnya.</span></div>
<div class="row"><b>Proses:</b><span>Saat uji coba, saya lihat teks terlalu cepat hilang. Saya perpanjang durasinya.</span></div>
<div class="row"><b>Hasil:</b><span>Dua teman bisa menyebutkan cara daftar setelah menonton versi baru.</span></div>
<div class="row"><b>Lampiran:</b><span>Video 30 detik dan cuplikan sebelum–sesudah.</span></div>
</div>
</div>

<p class="caption">Jika hasil belum diukur, tulis apa yang akan kamu uji.</p>

</div>

<!--
P7 · Contoh sesudah · 4 menit
Tunjukkan lima bagian dari ToR. Tidak perlu angka besar. Hasil bisa berupa hal yang diamati atau satu revisi yang sudah dilakukan. Contoh Naya rekaan, jadi tidak ada lampiran sungguhan. Terangkan perbedaan antara hasil uji dua teman dan klaim yang lebih luas tentang jumlah pendaftar.
-->

---

<div class="stacked tight">

<p class="tag">P7 · 2 of 4 · Tunjukkan bukti</p>

## Tulis cerita karya dalam lima baris.

<div class="visual template">
<div class="story">
<div class="row"><b>1. Konteks:</b><span>Siapa yang membutuhkan karya ini dan kenapa?</span></div>
<div class="row"><b>2. Peran:</b><span>Apa yang saya kerjakan sendiri atau bersama tim?</span></div>
<div class="row"><b>3. Proses:</b><span>Apa keputusan penting yang saya buat?</span></div>
<div class="row"><b>4. Hasil:</b><span>Apa yang berubah atau apa yang saya pelajari?</span></div>
<div class="row"><b>5. Tautan atau lampiran:</b><span>Bukti apa yang boleh saya bagikan?</span></div>
</div>
</div>

<p class="keyline">Coba lisan: jelaskan satu karya ke teman dalam 30 detik.</p>

</div>

<!--
P7 · Latihan lisan · 3 menit
Minta pasangan bergantian memilih satu karya dan menceritakannya dalam 30 detik. Jika belum ada karya, pakai contoh rencana dan sebutkan apa yang belum diketahui. Minta pendengar mengulang peran pembicara dengan satu kalimat. Jika masih kabur, tambah satu kata kerja dan satu contoh keputusan.
-->

---

<div class="slide">
<div>

<p class="tag">P7 · 3 of 4 · Buat profil</p>

## Profil singkat menjawab tiga pertanyaan.

<p class="caption">Jika memakai foto, pilih yang pantas dibagikan. Isi profil dengan jujur.</p>

</div>
<div class="visual">
<div class="pcard">
<div class="head"><div class="avatar" aria-hidden="true"></div><div><span class="label">Siapa kamu?</span><p>Naya · Siswa SMK · Penyunting video pemula</p></div></div>
<div><span class="label">Apa yang kamu kerjakan?</span><p>Saya membuat video pendek untuk menjelaskan informasi acara sekolah.</p></div>
<div class="card warm"><span class="label">Di mana saya bisa melihat buktinya?</span><p>Video panduan daftar acara (contoh karya utama).</p></div>
</div>
</div>
</div>

<!--
P7 · Headline, bio, dan tautan · 3 menit
Contoh memakai bahasa pemula dengan sengaja. Minta satu sukarelawan mengganti “penyunting video” dengan peran lain dan menyebutkan bukti yang cocok. Dalam profil, tampilkan karya yang paling relevan dulu, bukan daftar semua aktivitas.
-->

---

<div class="stacked tight">

<p class="tag">P7 · 3 of 4 · Buat profil</p>

## Pilih satu tempat untuk menampilkan karya.

<div class="visual grid three">
<div class="card"><span class="label">LinkedIn</span><p>Profil singkat dan tautan karya untuk kenalan profesional.</p></div>
<div class="card"><span class="label">GitHub</span><p>Proyek kode atau analisis, dengan petunjuk singkat untuk melihat hasilnya.</p></div>
<div class="card"><span class="label">Behance</span><p>Karya visual dan contoh proses desain.</p></div>
</div>

<p class="keyline">Draf dokumen pribadi cukup untuk hari ini. Cek batas usia platform, izin, dan data pribadi sebelum berbagi.</p>

</div>

<!--
P7 · Kanal dan keamanan · 3 menit
Tidak perlu mendaftar atau mengunggah karya hari ini. Gunakan satu dokumen privat atau catatan. Jaga nomor pribadi, lokasi rinci, foto orang lain, dan data sekolah yang tidak boleh dibagikan. Saat siap, cek akses tautan dengan izin yang sesuai, bukan dengan membuat semua dokumen publik.
-->

---

<div class="slide">
<div>

<p class="tag">P7 · 4 of 4 · Bangun kepercayaan</p>

## Dalam kerja jarak jauh, kabar singkat membantu tim.

<p class="caption">Sebutkan hasil sementara, hal yang belum beres, dan bantuan yang kamu perlukan.</p>

</div>
<div class="visual">
<div class="chat">
<p class="bubble">“Draf videonya sudah ada. Teks pendaftaran perlu dicek. Tolong beri masukan sebelum Jumat, ya.”</p>
<span class="tick" aria-hidden="true">✓✓</span>
</div>
</div>
</div>

<!--
P7 · Kerja jarak jauh dan kolaborasi · 2 menit
Sambungkan ke fokus kerja remote dalam ToR tanpa mengklaim bahwa satu portofolio menjamin pekerjaan. Beri contoh: saat orang tidak melihat kita bekerja, tautan draf dan kabar yang jelas membantu mereka memberi masukan. Kebiasaan ini juga berguna dalam kerja tatap muka.
-->

---

<div class="opener">

<p class="tag">P8 · Call To Action</p>

## Pilih satu arah yang mau kamu uji minggu ini.

<p class="sub">Di lembar latihan, isi empat pertanyaan. Pilih satu ide. Tentukan karya kecil, orang yang akan mencoba, dan hal yang ingin kamu amati.</p>

</div>

<!--
P8 · Call to action / commitment · 2 menit
Bacakan hasil yang kita cari saat latihan. Pelan-pelan: satu arah, satu karya atau rencana, dan satu langkah berikutnya. Peserta tidak perlu memilih profesi tetap atau menjawab semua pertanyaan dengan yakin.
-->

---

<div class="slide">
<div>

<p class="tag">P9 · Early Benefits</p>

## Dalam seminggu, cari dua bukti kecil.

</div>
<div class="visual">
<div class="stack">
<div class="card"><span class="label">01 · Satu contoh karya</span><p>Kamu punya sesuatu yang bisa kamu jelaskan dan tunjukkan.</p></div>
<div class="card good"><span class="label">02 · Satu tanggapan</span><p>Kamu tahu bagian mana yang membantu dan apa yang perlu diubah.</p></div>
</div>
<p class="caption">Kalau percobaannya tidak cocok, kamu punya alasan untuk mencoba arah lain.</p>
</div>
</div>

<!--
P9 · Early benefits / reward · 2 menit
Rumuskan dua target yang bisa diperiksa. Contoh: ada satu video dan satu catatan dari teman yang mencoba. Tidak perlu target pengikut, jumlah tayangan, atau janji langsung dapat proyek.
-->

---

<div class="opener">

<p class="tag">P10 · Long Win</p>

## Kariermu bisa berubah arah. Bukti karyamu ikut tumbuh.

<p class="sub">Makin sering kamu mencoba, makin jelas pekerjaan yang ingin kamu lanjutkan. Orang lain juga makin mudah melihat bagaimana kamu bisa membantu.</p>

</div>

<!--
P10 · Long win / aspiration · 2 menit
Ulangi pertanyaan pertama: kalau seseorang ingin mengajakmu ikut proyek, apa yang bisa mereka lihat? Hubungkan dengan cerita manajer ke engineer. Kita tidak harus menebak karier seumur hidup hari ini. Kita bisa mengumpulkan bukti saat belajar, memperbarui arah, dan membangun relasi dari karya nyata.
-->

---

<div class="qa">
<div>

<p class="tag">Learning Session 1 · Diskusi</p>

# Tanya jawab

- Kalau belum punya portofolio, mulai dari mana?
- Kalau minatku banyak, bagaimana memilih percobaan pertama?
- Kalau karya tim tidak boleh dipublikasikan, apa yang bisa saya ceritakan?

<div class="sign-row">
<p class="link"><a href="https://www.zainfathoni.com/">zainfathoni.com</a></p>
<p class="signature">Zain Fathoni</p>
</div>

</div>

![QR code for zainfathoni.com/build-a-presence.html](assets/build-a-presence-qr.png)

</div>

<!--
10.50–11.05 WIB · 15 menit (usulan). MC memandu Q&A. Bila tidak ada pertanyaan, pilih satu pemantik dan ajak peserta menjawab dari sudut pandang teman yang sedang mencari rekan proyek.
-->

---

<div class="stacked">

<p class="tag">Practice Session 1 · 11.10–11.40 WIB</p>

## Isi lembar Ikigai. Pilih satu arah.

<div class="process">
<div class="step"><span class="min">1. 8 menit</span><strong>Refleksi:</strong><span class="what">Isi minat, kemampuan, kebutuhan, dan peluang.</span></div>
<div class="to">→</div>
<div class="step"><span class="min">2. 10 menit</span><strong>Pilih:</strong><span class="what">Tentukan satu arah dan satu karya atau percobaan kecil.</span></div>
<div class="to">→</div>
<div class="step"><span class="min">3. 7 menit</span><strong>Ceritakan:</strong><span class="what">Jelaskan pilihanmu ke pasangan. Minta satu masukan.</span></div>
<div class="to">→</div>
<div class="step last"><span class="min">4. 5 menit</span><strong>Catat:</strong><span class="what">Tulis satu langkah yang bisa kamu lakukan dalam 7 hari.</span></div>
</div>

<p class="loopback">Belum yakin? Tulis apa yang masih perlu kamu cari tahu. Simpan drafnya dulu.</p>

</div>

<!--
11.05–11.10 WIB · Cadangan dan pengantar. Minta MC memandu pembukaan praktik pukul 11.10 WIB dan arahkan peserta ke lembar resmi panitia. Ikuti urutan lembar bila berbeda. Tidak perlu membuat akun atau memublikasikan apa pun. Saat peserta bekerja, berkeliling dan tanyakan “Siapa yang mau kamu bantu?” dan “Bukti kecil apa yang bisa kamu buat?” Pukul 11.40 WIB, kembalikan ke MC. Setelah istirahat, peserta bisa membawa satu ide atau contoh karya ke sesi DevCode.
-->

---

<div class="stacked">

<p class="tag">Lampiran · Bacaan</p>

## Sumber dan bahan lanjutan

<div class="refs">

- Zain Fathoni · [How Working in IT Looks Like](https://speakerdeck.com/zainfathoni/how-working-in-it-looks-like)
- Zain Fathoni · [Cara Menyiapkan Diri Menjadi Software Engineer Unggulan](https://docs.google.com/presentation/d/1soXmKHYiwUYWzupNBLbRHNKh413DDpvx1NDmLlS-7ZQ/edit)
- Zain Fathoni · [7 Pelajaran yang Saya Peroleh Selama Berkarir di Dunia IT](https://pejuangkode.com/7-pelajaran-yang-saya-peroleh-selama-berkarir-di-dunia-it-6d17ba5de79e)
- Dan Roam · [The Pop-Up Pitch](https://www.danroam.com/10ppdownload)
- Sartore dkk. · [Ikigai dan perbedaannya dengan diagram empat pertanyaan](https://pmc.ncbi.nlm.nih.gov/articles/PMC10936145/)

</div>

</div>

<!--
Lampiran, tidak perlu ditayangkan saat praktik. Konteks dan target portofolio mengacu pada ToR Career Lab. Jam sesi mengikuti rundown teknis.
-->
