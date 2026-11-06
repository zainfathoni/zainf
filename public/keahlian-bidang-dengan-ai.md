---
marp: true
paginate: true
theme: default
lang: id
backgroundColor: "#ffffff"
title: Dari Keahlian Bidang Menjadi Solusi dengan AI
description: Cerita Perkara AI dan langkah awal pendidikan lintas jurusan untuk membuat, menguji, dan menilai solusi dengan AI. Rembug JogjaDevs, 7 November 2026.
url: https://www.zainfathoni.com/keahlian-bidang-dengan-ai.html
image: https://www.zainfathoni.com/assets/keahlian-bidang-dengan-ai.png
footer: "Rembug JogjaDevs · 7 November 2026"
style: |
  @font-face {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 300 700;
    src: url('assets/fonts/SpaceGrotesk-variable.woff2') format('woff2-variations');
  }

  :root {
    --text: #111827;
    --muted: #626b79;
    --line: #e5e7eb;
    --accent: #f28c28;
    --warm: #fff7ed;
  }

  section * { box-sizing: border-box; }

  section {
    width: 1280px;
    height: 720px;
    padding: 46px 64px 68px;
    font-family: ui-sans-serif, system-ui, sans-serif;
    color: var(--text);
    background: #fff;
    letter-spacing: -0.02em;
    justify-content: flex-start;
  }

  section::after {
    color: var(--muted);
    font-size: 17px;
    padding: 0 64px 24px 0;
  }

  footer {
    left: 64px;
    bottom: 24px;
    color: var(--muted);
    font-size: 17px;
    letter-spacing: 0;
  }

  h1, h2, h3 {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
    color: var(--text);
    font-weight: 700;
    letter-spacing: -0.045em;
  }

  h1, h2 {
    font-size: 60px;
    line-height: 1.04;
    margin: 0;
    padding: 0;
  }

  h1::after, h2::after {
    content: '';
    display: block;
    width: 140px;
    height: 7px;
    margin: 20px 0 24px;
    background: var(--accent);
    border-radius: 99px;
  }

  p { margin: 0; font-size: 27px; line-height: 1.35; }
  a { color: inherit; text-decoration-line: underline; text-decoration-color: currentColor; text-underline-offset: 3px; }
  strong { font-weight: 700; }
  .muted, .meta { color: var(--muted); }
  .meta { font-size: 18px; line-height: 1.4; letter-spacing: 0; }
  .lead { font-size: 29px; line-height: 1.3; }
  .source { position: absolute; bottom: 61px; left: 64px; right: 64px; font-size: 15px; line-height: 1.4; color: var(--muted); letter-spacing: 0; }
  .eyebrow { font-size: 17px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); margin-bottom: 16px; }
  .panel { border: 1px solid var(--line); border-radius: 20px; padding: 28px; background: #fafafa; }

  .opening { display: grid; grid-template-columns: 1.06fr .94fr; gap: 56px; align-items: center; height: 487px; }
  .opening h1 { font-size: 64px; }
  .opening .lead { max-width: 440px; margin-top: 28px; }
  .identity { font-size: 20px; color: var(--muted); margin-top: 28px; }
  .case-visual { position: relative; padding: 20px 12px 0; }
  .dossier { position: relative; margin: 0 38px 30px 0; padding: 34px; min-height: 246px; background: #fff; border: 1px solid #cfd4dc; border-radius: 12px; box-shadow: 12px 12px 0 #f4f4f5, 12px 12px 0 1px #dce0e5, 24px 24px 0 #fafafa, 24px 24px 0 1px #dce0e5; }
  .dossier .label { color: #9a4c12; font-size: 18px; letter-spacing: .12em; font-weight: 700; }
  .dossier .name { font-size: 35px; margin: 14px 0 22px; font-weight: 700; }
  .ink { height: 8px; background: #e5e7eb; border-radius: 4px; margin-top: 12px; width: 92%; }
  .ink.short { width: 64%; }
  .team { display: flex; gap: 18px; align-items: center; margin-top: 40px; }
  .people { display: flex; align-items: flex-end; gap: 8px; padding-top: 21px; }
  .person { position: relative; display: block; width: 25px; height: 28px; background: #c2c9d2; border-radius: 12px 12px 4px 4px; }
  .person::before { content: ''; position: absolute; top: -19px; left: 5px; width: 15px; height: 15px; background: #c2c9d2; border-radius: 50%; }
  .team .name { font-size: 25px; font-weight: 700; }

  .comparison { display: grid; grid-template-columns: .85fr 1.15fr; gap: 28px; margin-top: 12px; }
  .comparison .panel { min-height: 310px; background: #fff; }
  .comparison .untraced { background: #fafafa; }
  .comparison h3 { font-size: 32px; line-height: 1.12; margin: 0 0 22px; }
  .question { font-size: 38px; font-weight: 700; line-height: 1.2; margin-top: 26px; }
  .checks { display: grid; gap: 18px; }
  .check { padding-bottom: 14px; border-bottom: 1px solid var(--line); font-size: 25px; }
  .check:last-child { border-bottom: 0; padding-bottom: 0; }
  .citation { display: inline-block; font-size: 18px; color: #9a4c12; background: var(--warm); border-radius: 6px; padding: 5px 10px; margin-top: 20px; }
  .illustration-label { margin-top: 17px; font-size: 17px; color: var(--muted); }

  .product { display: grid; grid-template-columns: 300px 1fr; gap: 38px; align-items: center; margin-top: 26px; }
  .numbers { display: grid; gap: 24px; }
  .number { font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; font-size: 66px; font-weight: 700; letter-spacing: -.06em; line-height: 1; }
  .number-label { margin-top: 6px; font-size: 23px; }
  .numbers .meta { margin-top: 6px; }
  .product figure { margin: 0; min-width: 0; }
  .product img { display: block; width: 100%; border: 1px solid var(--line); border-radius: 12px; }
  .product figcaption { margin-top: 10px; font-size: 16px; color: var(--muted); line-height: 1.35; }

  .criteria { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 22px; margin-top: 25px; }
  .criterion { padding: 26px 24px; border: 1px solid var(--line); border-radius: 18px; min-height: 203px; }
  .criterion .index { font-size: 18px; color: #9a4c12; margin-bottom: 22px; }
  .criterion h3 { font-size: 34px; line-height: 1.1; margin: 0 0 14px; }
  .criterion p { font-size: 23px; }
  .taste { margin-top: 35px; font-size: 33px; font-weight: 650; }
  .taste em { font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; font-style: normal; color: #9a4c12; }
  .responsibility { margin-top: 14px; font-size: 23px; color: var(--muted); }

  .classroom h2 { font-size: 54px; }
  .task { font-size: 24px; margin: 0 0 23px; }
  .work { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
  .documents { display: grid; gap: 14px; }
  .document { border: 1px solid var(--line); border-radius: 12px; padding: 18px 22px; }
  .document .meta { font-size: 17px; margin-bottom: 9px; }
  .document .quote { font-size: 24px; line-height: 1.35; }
  .document strong { text-decoration: underline; text-decoration-color: var(--accent); text-underline-offset: 5px; text-decoration-thickness: 2px; }
  .prototype { border: 1px solid var(--line); border-radius: 12px; overflow: hidden; }
  .app-title { padding: 13px 20px; border-bottom: 1px solid var(--line); font-size: 17px; color: var(--muted); background: #fafafa; }
  .app-body { padding: 20px; }
  .verdict { font-size: 29px; line-height: 1.15; font-weight: 700; margin: 0 0 14px; }
  .reason { font-size: 22px; margin-bottom: 13px; }
  .refs { font-size: 17px; color: var(--muted); }
  .teacher { margin-top: 22px; border-top: 1px solid var(--line); padding-top: 16px; }
  .teacher .meta { font-size: 17px; margin-bottom: 5px; }
  .teacher .prompt { font-size: 27px; font-weight: 650; line-height: 1.25; }
  .classroom .source { color: #9a4c12; font-size: 17px; }

  .closing h2 { font-size: 62px; }
  .start-small { display: grid; grid-template-columns: 1fr 1fr 1fr; margin-top: 27px; width: 820px; }
  .step { border-left: 2px solid var(--line); padding: 6px 20px 16px; }
  .step:first-child { padding-left: 0; border-left: 0; }
  .step .meta { margin-bottom: 12px; }
  .step strong { font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; font-size: 36px; letter-spacing: -.04em; }
  .closing-line { font-size: 34px; line-height: 1.3; margin-top: 40px; padding-top: 25px; border-top: 1px solid var(--line); width: 820px; }
  .closing-line strong { color: #9a4c12; }
  .closing .identity { margin-top: 26px; }
  .deck-qr { position: absolute; top: 288px; right: 64px; width: 280px; margin: 0; text-align: center; }
  .deck-qr img { display: block; width: 224px; height: 224px; margin: 0 auto; }
  .deck-qr figcaption { margin-top: 8px; font-size: 18px; line-height: 1.35; }
  .deck-qr a { display: block; margin-top: 6px; font-size: 15px; line-height: 1.35; }
---

<div class="opening">
<div>
<p class="eyebrow">Dari keahlian bidang menjadi solusi dengan AI</p>

# Mulai dari masalah,<br>bukan aplikasinya.

<p class="lead">Ribuan halaman.<br>Tim kecil. Waktu terbatas.</p>
<p class="identity">Zain Fathoni · <a href="https://vibefromcafe.id">Vibe From Cafe</a></p>
</div>
<div class="case-visual" role="img" aria-label="Ilustrasi tumpukan berkas perkara yang harus dipelajari tim hukum kecil dengan waktu terbatas">
<div class="dossier">
<div class="label">PERKARA MAS IBAM</div>
<div class="name">Berkas perkara</div>
<div class="ink"></div><div class="ink"></div><div class="ink short"></div>
</div>
<div class="team">
<div class="people" aria-hidden="true"><span class="person"></span><span class="person"></span><span class="person"></span></div>
<div><p class="name">Tim hukum kecil</p><p class="meta">Harus siap untuk sidang</p></div>
</div>
</div>
</div>
<div class="source">Ilustrasi · Cerita: <a href="https://x.com/ibamarief/status/2029735414303707470">Mas Ibam, 6 Maret 2026</a> · <a href="https://x.com/ibamarief/status/2114332828326580447">Ririe &amp; Mas Ibam, 25 Oktober 2026</a></div>

<!--
TIMING: 0:00–0:40 (40 detik). Target seluruh naskah 4:30; cadangan 30 detik. Durasi belum diuji lewat pembacaan langsung.
ALUR: Common ground dan coming problem. Nyatakan langkah adopsi AI di kampus, lalu mulai cerita dari kebutuhan manusia, bukan daftar fitur.

PANDUAN WAKTU (bukan untuk dibaca):
Bagian bertanda [OPSIONAL] pada slide 3–6 boleh dilewati jika waktu menipis. Penanda bukan naskah lisan. Jika hanya terlambat sedikit, lewati bagian opsional yang belum terucap; tidak perlu kembali ke slide sebelumnya. Naskah lengkap tetap 493 kata; tanpa empat bagian opsional menjadi 452 kata. Pengurangan 41 kata menghemat sekitar 20,5 detik pada 120 kata/menit, bukan hasil latihan terukur. Pertahankan bagian lain, terutama contoh A/B, data fiktif, pengalaman Mas Ibam, tanggung jawab manusia, contoh lintas jurusan, dan ajakan penutup.

NASKAH:
Saya Zain, dari Vibe From Cafe.

Kampus dapat mulai mengadopsi AI melalui tugas membuat alat, lalu menguji hasilnya dengan keahlian bidang.

Mulailah dari masalah, bukan pilihan aplikasi.

Contohnya adalah Perkara AI yang dibangun Ibrahim Arief, atau Mas Ibam.

Saat menghadapi perkaranya, tim hukum Mas Ibam harus mempelajari ribuan halaman berkas. Namun, waktu, biaya, dan jumlah anggota tim terbatas.

Bayangkan kita berada di posisi itu. Berkas sangat banyak, jadwal sidang semakin dekat. Harus mulai dari mana?

SUMBER (bukan untuk dibaca):
https://x.com/ibamarief/status/2029735414303707470
https://x.com/ibamarief/status/2114332828326580447
Keterbatasan tim menurut cerita Mas Ibam dan pengumuman Ririe/Mas Ibam. Visual berkas dan tim adalah ilustrasi; jumlah ikon bukan jumlah anggota tim yang terverifikasi.
-->

---

## Meyakinkan belum tentu benar.

<div class="comparison">
<div class="panel untraced">
<h3>Hanya jawaban</h3>
<p>Terlihat rapi.<br>Terdengar meyakinkan.</p>
<div class="ink"></div><div class="ink short"></div>
<p class="question">Di mana<br>sumbernya?</p>
</div>
<div class="panel">
<h3>Kebutuhan tim hukum</h3>
<div class="checks">
<div class="check">Siapa menyampaikan apa?</div>
<div class="check">Sesuai dengan keterangan lain?</div>
<div class="check">Apa yang perlu ditanyakan di sidang?</div>
</div>
<span class="citation">Dapat ditelusuri ke berkas dan halaman asal</span>
</div>
</div>
<p class="illustration-label">Ilustrasi kebutuhan, bukan keluaran chatbot atau Perkara AI.</p>
<div class="source">Cerita Mas Ibam: <a href="https://x.com/ibamarief/status/2029735414303707470">chatbot (6 Maret)</a> · <a href="https://x.com/ibamarief/status/2085661462207582466">OCR (7 Agustus)</a> · Penelusuran sumber: <a href="https://perkara.ai">perkara.ai</a></div>

<!--
TIMING: 0:40–1:20 (40 detik).
ALUR: False hope. Jawaban cepat saja tidak memenuhi kebutuhan.

NASKAH:
Mas Ibam sempat mencoba memasukkan berkasnya ke chatbot. Menurut ceritanya, hasilnya belum dapat diandalkan. Ada informasi yang salah, bahkan dikarang oleh AI.

Dalam perkara hukum, jawaban yang tampak meyakinkan dapat merugikan orang.

Padahal, tim hukum tidak hanya membutuhkan ringkasan.

Mereka perlu mengetahui: apa yang disampaikan saksi ini? Apakah sesuai dengan keterangan saksi lain? Bagian mana yang perlu ditanyakan di sidang?

Jika AI menunjukkan adanya masalah, hasilnya harus dapat diperiksa: “Di mana sumbernya?”

SUMBER (bukan untuk dibaca):
https://x.com/ibamarief/status/2029735414303707470
https://x.com/ibamarief/status/2085661462207582466 — konteks lanjutan: Mas Ibam menjelaskan kesalahan OCR pada dokumen padat teks dan penggunaan gabungan model. Ini berbeda dari kegagalan chatbot pada cerita awal. Angka 5.000+ halaman di unggahan ini bukan angka sistem awal. Pengamatan "near zero" bukan jaminan tanpa halusinasi atau hasil audit independen.
https://perkara.ai
Pengalaman Mas Ibam, bukan benchmark semua chatbot. Situs resmi menjelaskan penelusuran sumber dan mengakui AI dapat keliru. Visual ini bukan rekonstruksi keluaran asli.
-->

---

## Tidak hanya memakai. Juga membuat.

<p class="lead">Perkara AI · dibangun Mas Ibam dengan bantuan Claude Code</p>
<div class="product">
<div class="numbers">
<div><div class="number">4.700+</div><p class="number-label">halaman dianalisis</p></div>
<div><div class="number">8.900+</div><p class="number-label">keterangan dipetakan</p></div>
<p class="meta">Sistem awal, menurut Mas Ibam.<br>Bukan jumlah saksi.</p>
</div>
<figure>
<img src="assets/perkara-ai-bedah-saksi.webp" alt="Cuplikan video resmi Perkara AI: Bedah Saksi menampilkan saran pertanyaan pemeriksaan silang dan tingkat risiko bagi terdakwa.">
<figcaption>Bedah Saksi · cuplikan video resmi di <a href="https://perkara.ai">perkara.ai</a>, bukan simulasi kelas.</figcaption>
</figure>
</div>
<div class="source">Mas Ibam: <a href="https://x.com/ibamarief/status/2029735414303707470">angka sistem awal</a> · <a href="https://x.com/ibamarief/status/2031702030008610911">Claude Code</a> · <a href="https://x.com/ibamarief/status/2078851449585639774">pengembangan (19 Juli)</a> · <a href="https://x.com/ibamarief/status/2085209794890387488">pipeline dokumen (6 Agustus)</a> · <a href="https://x.com/ibamarief/status/2114332828326580447">pengenalan Perkara AI</a></div>

<!--
TIMING: 1:20–2:00 (40 detik).
ALUR: Audacious reality. AI membantu membangun alat baru sesuai kebutuhan, bukan hanya memakai aplikasi yang tersedia.

NASKAH:
Dari kebutuhan itu, Mas Ibam membangun sistem sendiri dengan bantuan Claude Code.

Menurut unggahannya, sistem awal ini menganalisis lebih dari empat ribu tujuh ratus halaman dan memetakan hampir sembilan ribu keterangan.

Hasilnya digunakan tim hukum untuk membantu menyiapkan pertanyaan pemeriksaan silang. Sistem itu kemudian berkembang menjadi Perkara AI.

[OPSIONAL — bukan untuk dibaca: lewati bagian ini jika waktu menipis; 6 kata.]
Manfaatnya tidak sebatas membaca banyak berkas.
[AKHIR OPSIONAL — bukan untuk dibaca.]

Mas Ibam tidak berhenti pada penggunaan aplikasi yang tersedia. Dengan bantuan AI, beliau membangun aplikasi baru yang sesuai dengan masalah yang dihadapi.

SUMBER DAN ASET (bukan untuk dibaca):
https://x.com/ibamarief/status/2029735414303707470 — 4.700+ halaman dan 8.900+ keterangan, menurut Mas Ibam; bukan hasil audit independen, bukan jumlah saksi atau total terbaru produk.
https://x.com/ibamarief/status/2031702030008610911 — bantuan Claude Code. Jangan menggunakan klaim 30x sebagai produktivitas terbukti.
https://x.com/ibamarief/status/2078851449585639774 — pengembangan lanjutan untuk banding yang saat itu masih berjalan, menggabungkan dokumen, keterangan tertulis, dan transkrip rekaman sidang. Jangan mengubah karakterisasi penulis menjadi klaim bahwa AI memenangkan atau menyelesaikan perkara.
https://x.com/ibamarief/status/2085209794890387488 — konteks desain pipeline dokumen yang efisien, bukan sekadar menyerahkan semuanya ke LLM. Teks unggahan asli terverifikasi sebagai kutipan pada unggahan 7 Agustus: https://x.com/ibamarief/status/2085661462207582466. Perbandingan biaya dan akurasi adalah estimasi/klaim Mas Ibam, bukan benchmark independen; tidak ditambahkan ke naskah.
https://x.com/ibamarief/status/2114332828326580447 — berkembang menjadi Perkara AI.
https://perkara.ai/media/perkara-ai-showcase-dual.webm — aset dari situs resmi, diambil 6 November 2026. Frame 01:07.6, dipotong ke kartu Bedah Saksi bahasa Indonesia (1100 × 450, x=90, y=110), dikonversi ke WebP. Cuplikan video pengenalan produk, bukan screenshot sesi pengguna atau pengujian langsung aplikasi.
Reproduksi: ffmpeg -ss 67.6 -i perkara-ai-showcase-dual.webm -frames:v 1 -vf 'crop=1100:450:90:110' -quality 95 public/assets/perkara-ai-bedah-saksi.webp
Mas Ibam engineer berpengalaman. Jangan menyatakan AI menyelesaikan perkara, membebaskan Mas Ibam, atau menjamin tanpa halusinasi.
-->

---

## Siapa yang dapat menilai hasilnya?

<div class="criteria">
<div class="criterion"><p class="index">01</p><h3>Benar</h3><p>Sumber dan maknanya tepat?</p></div>
<div class="criterion"><p class="index">02</p><h3>Relevan</h3><p>Menjawab persoalan yang dihadapi?</p></div>
<div class="criterion"><p class="index">03</p><h3>Dapat diperiksa</h3><p>Alasannya dapat ditelusuri?</p></div>
</div>
<p class="taste"><em>Taste</em> tumbuh dari pemahaman bidang.</p>
<p class="responsibility">AI membantu. Tanggung jawab menilai tetap pada manusia.</p>
<div class="source">Kerangka penilaian untuk diskusi pendidikan · bukan kutipan Mas Ibam atau hasil penelitian.</div>

<!--
TIMING: 2:00–2:50 (50 detik).
ALUR: We can do this. Jembatan dari aplikasi ke peran pendidikan: taste sebagai penilaian berdasarkan pemahaman bidang.

NASKAH:
Namun, seperti apa aplikasi yang baik?

[OPSIONAL — bukan untuk dibaca: lewati bagian ini jika waktu menipis; 12 kata.]
Dalam hukum, tentu bukan sekadar tampilan yang rapi atau jawaban yang panjang.
[AKHIR OPSIONAL — bukan untuk dibaca.]

Apakah sumbernya benar? Apakah dua keterangan ini memang bertentangan, atau hanya tampak demikian? Apakah pertanyaannya membantu pembelaan, atau tidak relevan?

Kemampuan menilai inilah yang saya maksud dengan taste. Dengan memahami bidangnya, kita mengetahui apa yang perlu diperiksa.

Pengetahuan hukum dan kemampuan teknis bekerja bersama. AI membantu, tetapi tanggung jawab menilai tetap pada manusia.

Tujuannya bukan sekadar mengajarkan penggunaan aplikasi. Kita dapat melatih mahasiswa membuat alat untuk masalah di bidangnya sendiri.

CATATAN (bukan untuk dibaca):
Kerangka pedagogis pembicara, bukan kutipan atau temuan penelitian. Taste bukan sekadar selera visual dan tidak menggantikan engineering, pengujian, atau keamanan data. FAQ perkara.ai mengakui AI dapat keliru dan keputusan hukum tetap pada manusia.
-->

---

<!-- _class: classroom -->

## Buat alatnya. Uji pemahamannya.

<p class="task">Tugas: buat aplikasi pembanding keterangan saksi dengan bantuan AI.</p>
<div class="work">
<div class="documents">
<div class="document">
<p class="meta">Saksi A · pukul 09.00 · berkas latihan hal. 1</p>
<p class="quote">“Saya melihat Raka masuk lewat <strong>pintu depan</strong>.”</p>
</div>
<div class="document">
<p class="meta">Saksi B · pukul 09.00 · berkas latihan hal. 2</p>
<p class="quote">“Saya menjaga <strong>pintu belakang</strong>. Saya tidak melihat Raka.”</p>
</div>
</div>
<div class="prototype">
<div class="app-title">Prototipe mahasiswa · contoh hasil</div>
<div class="app-body">
<p class="verdict">Belum cukup untuk menyatakan kontradiksi.</p>
<p class="reason">Lokasi pengamatan berbeda. Jangkauan pandang B belum diketahui.</p>
<p class="refs">Dasar: keterangan A, hal. 1; keterangan B, hal. 2.</p>
</div>
</div>
</div>
<div class="teacher">
<p class="meta">Pertanyaan dosen · nilai alasan, sumber, dan hasil uji</p>
<p class="prompt">“Jika B dapat melihat pintu depan, apa yang perlu Anda periksa lagi?”</p>
</div>
<div class="source">Simulasi kelas · semua data dan rujukan fiktif · bukan kasus atau fitur Perkara AI.</div>

<!--
TIMING: 2:50–3:40 (50 detik). Jangan membacakan semua teks visual atau menambah demo.
ALUR: Langkah konkret dan early benefits. Mahasiswa membangun alat sekaligus melatih penilaian bidang.

NASKAH:
Di kelas hukum, dosen memberikan dua keterangan fiktif: A melihat Raka masuk melalui pintu depan; B menjaga pintu belakang dan tidak melihatnya.

Mahasiswa membuat aplikasi pembanding dengan AI, menyertakan sumber, tanpa harus menulis kodenya sendiri.

Setelah selesai, dosen dapat bertanya: “Jika B dapat melihat pintu depan, apa yang perlu Anda periksa lagi?”

Mahasiswa harus menjelaskan alasannya, memeriksa hasilnya, lalu memperbaiki alatnya.

[OPSIONAL — bukan untuk dibaca: lewati bagian ini jika waktu menipis; 9 kata.]
Jadi, bukan hanya aplikasinya yang berkembang. Pemahamannya juga dilatih.
[AKHIR OPSIONAL — bukan untuk dibaca.]

Tidak perlu langsung membuat sistem sekelas Perkara AI. Mas Ibam adalah engineer berpengalaman. Kita mulai dari lingkup kecil, menggunakan data fiktif, dengan hasil yang dapat diperiksa.

CATATAN (bukan untuk dibaca):
Pertanyaan dosen diselaraskan dengan visual terbaru. Pembukaan memperkenalkan A/B secara lisan; dua paragraf pertama tetap 35 kata. Naskah keseluruhan 493 kata setelah penyesuaian bahasa untuk dosen; jumlah per slide: 75, 72, 76, 88, 96, 86. Pada 120 kata/menit ditambah 20 detik jeda, perkiraan 4:27; ini perhitungan, bukan durasi pembacaan terukur. Jangan membacakan teks kecil sumber atau isi cuplikan slide 3.
Semua tokoh, waktu, keterangan, dan halaman adalah simulasi buatan. Ini contoh hasil yang diharapkan, bukan aplikasi yang telah dibuat/diuji, bukan fitur Perkara AI, dan bukan program VFC yang berjalan.
Dua keterangan belum cukup untuk menyatakan kontradiksi. Sekalipun B dapat melihat pintu depan, masih perlu memeriksa apakah ia benar-benar mengamatinya pada waktu relevan, jangkauan pandang, dan keadaan pengamatan. Jangan memberi vonis otomatis.
-->

---

<!-- _class: closing -->

## Mulai dari satu masalah<br>di bidang Anda.

<div class="start-small">
<div class="step"><p class="meta">01 · Pendamping</p><strong>Satu dosen.</strong></div>
<div class="step"><p class="meta">02 · Ruang mencoba</p><strong>Satu tugas.</strong></div>
<div class="step"><p class="meta">03 · Kebutuhan nyata</p><strong>Satu masalah.</strong></div>
</div>
<p class="closing-line">AI membantu <strong>membuat.</strong><br>Keahlian membantu <strong>menilai.</strong></p>
<p class="identity">Zain Fathoni · <a href="https://vibefromcafe.id">Vibe From Cafe</a></p>
<figure class="deck-qr">
<img src="assets/keahlian-bidang-dengan-ai-qr.png" alt="Kode QR menuju https://www.zainfathoni.com/keahlian-bidang-dengan-ai.html">
<figcaption>Materi &amp; referensi
<a href="https://www.zainfathoni.com/keahlian-bidang-dengan-ai.html">www.zainfathoni.com/<br>keahlian-bidang-dengan-ai.html</a>
</figcaption>
</figure>
<div class="source">Usulan untuk pendidikan lintas jurusan · bukan program atau komitmen VFC.</div>

<!--
TIMING: 3:40–4:30 (50 detik). Target selesai 4:30, simpan cadangan 30 detik dari batas lima menit. Durasi belum diuji lewat pembacaan langsung. Tidak ada slide profil, demo, atau sesi tanya jawab tambahan.
ALUR: Call to action dan long win. Buka untuk semua jurusan, bukan hanya hukum atau informatika.

NASKAH:
Pendekatan ini tidak terbatas pada jurusan hukum.

Di ekonomi, mahasiswa dapat membuat simulasi usaha. Di pendidikan, mereka dapat membuat latihan yang memberikan petunjuk sesuai kesalahan murid.

Kampus dapat memulai dengan satu dosen, satu tugas, dan satu masalah.

Berikan ruang untuk membuat, menguji, lalu memperbaiki. Penilaian tidak hanya mencakup aplikasi yang selesai, tetapi juga alasan dan hasil pengujiannya.

[OPSIONAL — bukan untuk dibaca: lewati bagian ini jika waktu menipis; 14 kata.]
Dengan AI, mahasiswa tidak harus berhenti sebagai pengguna alat. Mereka dapat belajar menjadi pembuat.
[AKHIR OPSIONAL — bukan untuk dibaca.]

Peran pendidikan: membantu mereka menentukan apa yang perlu dibuat, dan menilai apakah hasilnya benar-benar berguna.

CATATAN (bukan untuk dibaca):
Contoh ekonomi dan pendidikan adalah usulan, bukan program atau keberhasilan terukur. VFC hanya identitas pembicara, bukan pokok presentasi atau janji kemitraan.
QR menuju deck: https://www.zainfathoni.com/keahlian-bidang-dengan-ai.html. Domain mengikuti canonical di app/root.tsx; path mengikuti sumber di public/ dan tautan app/models/talks.ts. Ini bukan URL preview atau tweet. Versi sebelumnya sudah tersedia di produksi; revisi bahasa ini belum dipublikasikan. QR dibuat dengan qrcode Python, koreksi kesalahan M, quiet zone 4 modul, hitam di atas putih; 224 × 224 piksel pada slide. Tidak perlu membacakan URL.
Struktur cerita diadaptasi dari Dan Roam, The Pop-Up Pitch, sebagaimana deck /talks sebelumnya: https://www.danroam.com/
Konteks acara: https://luma.com/bzgxstpt — Rembug JogjaDevs: Pendidikan dan Industri Teknologi Informasi di Era AI, 7 November 2026. Batas lima menit berasal dari brief Zain, bukan ketentuan di halaman publik.
-->
