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

NASKAH:
Saya Zain, dari Vibe From Cafe.

Kampus bisa mulai mengadopsi AI lewat tugas membuat alat, lalu menguji hasilnya dengan keahlian bidang.

Mulainya dari masalah, bukan pilihan aplikasi.

Saya ambil contoh Perkara AI, yang dibangun Ibrahim Arief, atau Mas Ibam.

Waktu menghadapi perkaranya, tim hukum Mas Ibam harus mempelajari ribuan halaman berkas. Tapi waktu, biaya, dan orangnya terbatas.

Bayangkan kita ada di posisi itu. Berkasnya sebanyak ini, sebentar lagi harus siap sidang. Mulai dari mana?

SUMBER (bukan untuk dibaca):
https://x.com/ibamarief/status/2029735414303707470
https://x.com/ibamarief/status/2114332828326580447
Keterbatasan tim menurut cerita Mas Ibam dan pengumuman Ririe/Mas Ibam. Visual berkas dan tim adalah ilustrasi; jumlah ikon bukan jumlah anggota tim yang terverifikasi.
-->

---

## Meyakinkan belum tentu benar.

<div class="comparison">
<div class="panel untraced">
<h3>Jawaban saja</h3>
<p>Terlihat rapi.<br>Terdengar meyakinkan.</p>
<div class="ink"></div><div class="ink short"></div>
<p class="question">Sumbernya<br>di mana?</p>
</div>
<div class="panel">
<h3>Yang dibutuhkan tim hukum</h3>
<div class="checks">
<div class="check">Siapa bilang apa?</div>
<div class="check">Cocok dengan keterangan lain?</div>
<div class="check">Apa yang perlu ditanyakan di sidang?</div>
</div>
<span class="citation">Bisa kembali ke berkas dan halaman asal</span>
</div>
</div>
<p class="illustration-label">Ilustrasi kebutuhan, bukan keluaran chatbot atau Perkara AI.</p>
<div class="source">Cerita Mas Ibam: <a href="https://x.com/ibamarief/status/2029735414303707470">chatbot (6 Maret)</a> · <a href="https://x.com/ibamarief/status/2085661462207582466">OCR (7 Agustus)</a> · Penelusuran sumber: <a href="https://perkara.ai">perkara.ai</a></div>

<!--
TIMING: 0:40–1:20 (40 detik).
ALUR: False hope. Jawaban cepat saja tidak memenuhi kebutuhan.

NASKAH:
Mas Ibam sempat mencoba memasukkan berkasnya ke chatbot. Menurut ceritanya, hasilnya belum bisa diandalkan. Ada informasi yang salah, bahkan dikarang oleh AI.

Dalam perkara hukum, jawaban yang kelihatannya meyakinkan bisa merugikan orang.

Padahal, yang dibutuhkan tim hukum bukan cuma ringkasan.

Mereka perlu tahu: saksi ini bilang apa? Cocok nggak dengan keterangan saksi lain? Bagian mana yang perlu ditanyakan di sidang?

Dan kalau AI bilang ada masalah, harus bisa dicek: “Sebentar, ini sumbernya di mana?”

SUMBER (bukan untuk dibaca):
https://x.com/ibamarief/status/2029735414303707470
https://x.com/ibamarief/status/2085661462207582466 — konteks lanjutan: Mas Ibam menjelaskan kesalahan OCR pada dokumen padat teks dan penggunaan gabungan model. Ini berbeda dari kegagalan chatbot pada cerita awal. Angka 5.000+ halaman di unggahan ini bukan angka sistem awal. Pengamatan "near zero" bukan jaminan tanpa halusinasi atau hasil audit independen.
https://perkara.ai
Pengalaman Mas Ibam, bukan benchmark semua chatbot. Situs resmi menjelaskan penelusuran sumber dan mengakui AI bisa keliru. Visual ini bukan rekonstruksi keluaran asli.
-->

---

## Bukan cuma pakai. Bisa bikin.

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
Dari kebutuhan itu, Mas Ibam membangun sistem sendiri, dibantu Claude Code.

Menurut unggahannya, sistem awal ini menganalisis lebih dari empat ribu tujuh ratus halaman dan memetakan hampir sembilan ribu keterangan.

Hasilnya dipakai tim hukum untuk membantu menyiapkan pertanyaan pemeriksaan silang. Sistem itu kemudian berkembang menjadi Perkara AI.

Bukan cuma membaca banyak berkas.

Mas Ibam tidak berhenti di memakai aplikasi yang tersedia. Dengan bantuan AI, dia juga membangun aplikasi baru, yang lebih sesuai dengan masalah yang sedang dihadapi.

SUMBER DAN ASET (bukan untuk dibaca):
https://x.com/ibamarief/status/2029735414303707470 — 4.700+ halaman dan 8.900+ keterangan, menurut Mas Ibam; bukan hasil audit independen, bukan jumlah saksi atau total terbaru produk.
https://x.com/ibamarief/status/2031702030008610911 — bantuan Claude Code. Jangan memakai klaim 30x sebagai produktivitas terbukti.
https://x.com/ibamarief/status/2078851449585639774 — pengembangan lanjutan untuk banding yang saat itu masih berjalan, menggabungkan dokumen, keterangan tertulis, dan transkrip rekaman sidang. Jangan mengubah karakterisasi penulis menjadi klaim bahwa AI memenangkan atau menyelesaikan perkara.
https://x.com/ibamarief/status/2085209794890387488 — konteks desain pipeline dokumen yang efisien, bukan sekadar menyerahkan semuanya ke LLM. Teks unggahan asli terverifikasi sebagai kutipan pada unggahan 7 Agustus: https://x.com/ibamarief/status/2085661462207582466. Perbandingan biaya dan akurasi adalah estimasi/klaim Mas Ibam, bukan benchmark independen; tidak ditambahkan ke naskah.
https://x.com/ibamarief/status/2114332828326580447 — berkembang menjadi Perkara AI.
https://perkara.ai/media/perkara-ai-showcase-dual.webm — aset dari situs resmi, diambil 6 November 2026. Frame 01:07.6, dipotong ke kartu Bedah Saksi bahasa Indonesia (1100 × 450, x=90, y=110), dikonversi ke WebP. Cuplikan video pengenalan produk, bukan screenshot sesi pengguna atau pengujian langsung aplikasi.
Reproduksi: ffmpeg -ss 67.6 -i perkara-ai-showcase-dual.webm -frames:v 1 -vf 'crop=1100:450:90:110' -quality 95 public/assets/perkara-ai-bedah-saksi.webp
Mas Ibam engineer berpengalaman. Jangan menyatakan AI menyelesaikan perkara, membebaskan Mas Ibam, atau menjamin tanpa halusinasi.
-->

---

## Siapa yang tahu hasilnya bagus?

<div class="criteria">
<div class="criterion"><p class="index">01</p><h3>Benar</h3><p>Sumber dan maknanya tepat?</p></div>
<div class="criterion"><p class="index">02</p><h3>Relevan</h3><p>Membantu persoalan yang dihadapi?</p></div>
<div class="criterion"><p class="index">03</p><h3>Bisa diperiksa</h3><p>Alasannya bisa ditelusuri?</p></div>
</div>
<p class="taste"><em>Taste</em> tumbuh dari pemahaman bidang.</p>
<p class="responsibility">AI membantu. Tanggung jawab menilai tetap pada manusia.</p>
<div class="source">Kerangka penilaian untuk diskusi pendidikan · bukan kutipan Mas Ibam atau hasil penelitian.</div>

<!--
TIMING: 2:00–2:50 (50 detik).
ALUR: We can do this. Jembatan dari aplikasi ke peran pendidikan: taste sebagai penilaian berdasarkan pemahaman bidang.

NASKAH:
Tapi, aplikasi yang bagus itu seperti apa?

Kalau di hukum, tentu bukan sekadar tampilannya rapi atau jawabannya panjang.

Sumbernya benar nggak? Dua keterangan ini memang bertentangan, atau cuma kelihatannya begitu? Pertanyaan ini membantu pembelaan, atau malah tidak relevan?

Kemampuan menilai seperti ini yang saya maksud dengan taste. Kita paham bidangnya, jadi kita tahu apa yang perlu diperiksa.

Pengetahuan hukum dan kemampuan teknis bekerja bersama. AI membantu, tapi tanggung jawab menilai tetap pada manusia.

Bukan cuma mengajari mahasiswa memakai Perkara AI. Kita bisa melatih mereka membuat alat dari masalah di bidangnya sendiri.

CATATAN (bukan untuk dibaca):
Kerangka pedagogis pembicara, bukan kutipan atau temuan penelitian. Taste bukan sekadar selera visual dan tidak menggantikan engineering, pengujian, atau keamanan data. FAQ perkara.ai mengakui AI bisa keliru dan keputusan hukum tetap pada manusia.
-->

---

<!-- _class: classroom -->

## Bikin alatnya. Uji pemahamannya.

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
<p class="prompt">“Kalau B bisa melihat pintu depan, apa yang perlu kamu periksa lagi?”</p>
</div>
<div class="source">Simulasi kelas · semua data dan rujukan fiktif · bukan kasus atau fitur Perkara AI.</div>

<!--
TIMING: 2:50–3:40 (50 detik). Jangan membacakan semua teks visual atau menambah demo.
ALUR: Langkah konkret dan early benefits. Mahasiswa membangun alat sekaligus melatih penilaian bidang.

NASKAH:
Di kelas hukum, dosen memberi dua keterangan fiktif: A melihat Raka masuk lewat pintu depan; B menjaga pintu belakang dan tidak melihatnya.

Mahasiswa membuat aplikasi pembanding dengan AI, menyertakan sumber, tanpa harus menulis kodenya sendiri.

Setelah jadi, dosen bisa bertanya: “Kalau B bisa melihat pintu depan, apa yang perlu kamu periksa lagi?”

Mahasiswa harus menjelaskan alasannya, mengecek hasilnya, lalu memperbaiki alatnya. Jadi, bukan cuma aplikasinya yang berkembang. Pemahamannya juga dilatih.

Tidak perlu langsung membuat sistem sekelas Perkara AI. Mas Ibam sendiri engineer berpengalaman. Kita mulai kecil, pakai data fiktif, dan hasilnya bisa diperiksa.

CATATAN (bukan untuk dibaca):
Pertanyaan dosen diselaraskan dengan visual terbaru. Sesuai review, pembukaan memperkenalkan A/B secara lisan; dua paragraf pengganti tetap 35 kata. Naskah keseluruhan 494 kata, dipangkas dari 526 kata; jumlah per slide: 74, 74, 77, 91, 93, 85. Pada 120 kata/menit ditambah 20 detik jeda, perkiraan 4:27; ini perhitungan, bukan durasi pembacaan terukur. Jangan membacakan teks kecil sumber atau isi cuplikan slide 3.
Semua tokoh, waktu, keterangan, dan halaman adalah simulasi buatan. Ini contoh hasil yang diharapkan, bukan aplikasi yang telah dibuat/diuji, bukan fitur Perkara AI, dan bukan program VFC yang berjalan.
Dua keterangan belum cukup untuk menyatakan kontradiksi. Kalaupun B dapat melihat pintu depan, masih perlu memeriksa apakah ia benar-benar mengamatinya pada waktu relevan, jangkauan pandang, dan keadaan pengamatan. Jangan memberi vonis otomatis.
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
Dan ini bukan cuma untuk jurusan hukum.

Di ekonomi, mahasiswa bisa membuat simulasi usaha. Di pendidikan, mereka bisa membuat latihan yang memberi petunjuk sesuai kesalahan murid.

Kampus bisa mencoba satu dosen, satu tugas, satu masalah dulu.

Beri ruang untuk membuat, menguji, lalu memperbaiki. Yang dinilai bukan cuma aplikasinya jadi, tapi juga alasan dan hasil pengujiannya.

Dengan AI, mahasiswa tidak harus berhenti sebagai pengguna alat. Mereka bisa belajar jadi pembuat.

Tugas pendidikan: membantu mereka tahu apa yang perlu dibuat, dan bagaimana menilai apakah hasilnya benar-benar berguna.

CATATAN (bukan untuk dibaca):
Contoh ekonomi dan pendidikan adalah usulan, bukan program atau keberhasilan terukur. VFC hanya identitas pembicara, bukan pokok presentasi atau janji kemitraan.
QR menuju URL produksi yang diharapkan: https://www.zainfathoni.com/keahlian-bidang-dengan-ai.html. Domain mengikuti canonical di app/root.tsx; path mengikuti sumber di public/ dan tautan app/models/talks.ts. Ini bukan URL preview atau tweet. Pada pemeriksaan 6 November 2026 URL mengembalikan HTTP 404; perlu deploy sebelum materi tersedia di sana. QR dibuat dengan qrcode Python, koreksi kesalahan M, quiet zone 4 modul, hitam di atas putih; 224 × 224 piksel pada slide. Naskah lisan tidak berubah dan tidak perlu membacakan URL.
Struktur cerita diadaptasi dari Dan Roam, The Pop-Up Pitch, sebagaimana deck /talks sebelumnya: https://www.danroam.com/
Konteks acara: https://luma.com/bzgxstpt — Rembug JogjaDevs: Pendidikan dan Industri Teknologi Informasi di Era AI, 7 November 2026. Batas lima menit berasal dari brief Zain, bukan ketentuan di halaman publik.
-->
