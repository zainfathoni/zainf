---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
marp: true
---

# Agentic Engineering

Realita, Strategi, dan Praktik\
untuk Tim Produk & Bisnis Digital

<!--
TIMING: 2 menit

SPEAKER NOTES:
Sapa audiens. Akui bahwa ruangan ini campuran, bukan hanya developer: mayoritas dari sektor TIK, tapi perannya beragam, dari software/web developer sampai founder, business owner, IT manager, digital marketer, dan mahasiswa. Jelaskan bahwa talk ini bukan tentang hype AI, tapi tentang realita penggunaan AI dalam kerja digital sehari-hari.
Termasuk memperkenalkan istilah baru: "Agentic Engineering" — bukan sekadar "AI-assisted", tapi membangun dengan coding agents yang bisa menulis DAN menjalankan kode.
"Di awal talk ini, saya akan melakukan sesuatu yang menarik — saya akan meminta AI untuk mengerjakan sebuah task di repository saya. Kita akan lihat hasilnya di akhir sesi."

DEMO START: Buka Telegram, kirim pesan ke Wheeljack (OpenClaw agent) dengan prompt di bawah. Biarkan berjalan di background selama presentasi. Task-nya nyata: menambahkan filter by category ke halaman /talks di website ini.
-->

---

## 👋 Perkenalan

![bg left:33%](assets/zain-1280.jpeg)

<https://www.zainfathoni.com/about>

- :round_pushpin: Jember :arrow_right: Bandung :arrow_right: :singapore: SG
  :arrow_right: Jogja
- :hammer_and_wrench: Backend :arrow_right: Manager :arrow_right: Frontend
  :arrow_right: Fullstack
- :robot: Agentic Engineering Practitioner
- :handshake: Talk ini untuk semua: dev, founder, marketer, dan produk

---

## Agenda

1. **The Reality of AI-Assisted Development**
2. **Coverage & Control**
3. **Prompting & Interaction Strategy**
4. **Structured AI Coding**
5. **Maintaining Craftsmanship**
6. **Live Demo Results** :eyes:

---

## :clapper: Live Demo Setup

### Kirim ke Wheeljack via Telegram, lalu lanjut presentasi

```
"Tambahkan filter by category (Conferences / Podcasts /
 Meetups) ke halaman /talks di zainf.dev. Lihat pola
 filter yang sudah ada di halaman /blog sebagai referensi."
```

:hourglass_flowing_sand: OpenClaw agent bekerja di background...

<!--
TIMING: 3 menit

SPEAKER NOTES:
Ini adalah momen kunci. Tunjukkan ke audiens bahwa kamu sedang memulai sebuah AI task secara real-time.
"Ini bukan demo yang di-scripted. Saya kirim prompt ke agent via Telegram sekarang, lalu kita lanjut presentasi. Di akhir sesi kita cek hasilnya bersama — apakah PR-nya masuk, apakah site-nya terupdate, dan apa yang perlu di-review."

NOTE: Demo ini berjalan via OpenClaw (platform agentic engineering pribadi saya). Agent-nya bernama Wheeljack, bisa diakses via Telegram. Ini contoh nyata Autonomous level — AI end-to-end, manusia verifikasi akhir.
-->

---

# 1) The Reality of AI-Assisted Development

---

## :robot: Apa itu Agentic Engineering?

> "Agentic engineering: developing software with the assistance
> of coding agents that can write **and execute** code."
> — Simon Willison

- :loop: Agent bekerja dalam loop: tulis kode → jalankan → iterasi
- :brain: Tugas kita: **specify** masalah, **verify** hasil, **iterate**
- :x: Bukan "vibe coding" — bukan asal generate dan forget
- :white_check_mark: Ini yang kita lakukan hari ini dengan demo langsung

<!--
SPEAKER NOTES:
Referensikan definisi Simon Willison dari simonwillison.net/guides/agentic-engineering-patterns/
Tekankan perbedaan: vibe coding = forget the code exists. Agentic engineering = responsible, iterative, verified.
Contoh nyata: Claude Code, OpenClaw, Codex CLI — semuanya coding agents.
-->

---

## :robot: Peran AI di Setiap Fase Kerja Digital

| Fase | Tools AI | Peran |
|------|---------|-------|
| :art: **Design** | v0, Figma AI | Prototyping & landing page |
| :memo: **Content** | ChatGPT, Claude | Copy, outline, dokumentasi |
| :computer: **Coding** | Claude Code, Copilot | Implementasi |
| :test_tube: **Testing** | Playwright MCP | Pengujian otomatis |
| :robot: **Agents** | OpenClaw, Codex CLI | Task end-to-end via chat |

<!--
TIMING: 5 menit

SPEAKER NOTES:
Jelaskan bahwa AI bukan hanya tentang menulis kode. AI bisa membantu di setiap fase kerja digital.
Karena audiens-nya campuran, beri contoh yang lebih lebar: design untuk marketer/founder, dokumentasi untuk tim produk/operasional, coding untuk developer, testing untuk QA/engineer.
OpenClaw adalah contoh "Agents" row — platform agentic engineering pribadi yang bisa menerima task via Telegram dan mengerjakan end-to-end di background.
-->

---

## :sparkles: Hype vs Reality

### Hype:

> "AI will replace developers"

### Realita:

- :white_check_mark: AI **mempercepat** pekerjaan repetitif
- :white_check_mark: AI **membantu** eksplorasi solusi
- :x: AI **belum bisa** menggantikan pemahaman arsitektur
- :x: AI **sering salah** di edge case dan konteks bisnis
- :x: AI **butuh arahan** yang jelas dari manusia yang paham konteks

<!--
SPEAKER NOTES:
Ini penting untuk set expectations. "AI bukan magic. AI adalah alat yang sangat powerful, tapi tetap butuh operator yang kompeten."
Berikan contoh nyata: "Saya pernah minta AI bikin fitur, hasilnya 80% benar. Tapi 20% sisanya — yang melibatkan edge case dan business logic — tetap harus saya review dan perbaiki."
-->

---

## :warning: Jebakan Umum

- :see_no_evil: **Copy-paste tanpa review** → bug tersembunyi
- :spaghetti: **Tanpa arsitektur** → sulit di-maintain
- :lock: **Security blind spots** → vulnerability lolos
- :bomb: **Over-confidence** → "AI yang bikin, pasti benar"

<!--
SPEAKER NOTES:
Ceritakan contoh nyata kegagalan. Bisa pakai contoh dari slide sebelumnya tentang AI agent yang menghapus database.
"Masalah terbesar bukan AI-nya, tapi developer yang tidak melakukan verifikasi."
-->

---

## :busts_in_silhouette: Siapa yang Ada di Ruangan Ini?

### Snapshot Peserta EDC Jogja

- :office: **Mayoritas dari sektor TIK** (25 dari 49 peserta)
- :round_pushpin: **39 dari 49 berdomisili di DIY**
- :technologist: Peran terbesar: **Software Developer + Web Developer** (14)
- :briefcase: Tapi ruangan ini juga berisi **founder, business owner, IT manager,
  digital marketer, dan mahasiswa**
- :seedling: Usia dominan: **22-35 tahun**

:point_right: **Fokus hari ini: AI untuk kolaborasi lintas fungsi, bukan cuma ngoding cepat**

<!--
TIMING: 2 menit

SPEAKER NOTES:
Gunakan slide ini untuk menyesuaikan framing dengan audiens nyata. "Jadi saya tidak akan bicara seolah-olah semua orang di sini full-time programmer. Karena datanya menunjukkan ruangan ini campur."
Tekankan bahwa developer memang kelompok terbesar, tapi bukan mayoritas absolut jika digabung dengan semua peran non-developer.
-->

---

## :speaking_head: Cerita Nyata: Yang Berhasil

- Migrasi Remix → React Router v7 — AI handle 80% boilerplate
- Refactor styling ke Tailwind — konsisten di 30+ komponen
- Personal AI army (Project Transformers) — 7 specialized agents,
  masing-masing punya domain sendiri, context tidak bocor antar agent
- Demo hari ini: OpenClaw agent via Telegram mengerjakan PR nyata

<!--
SPEAKER NOTES:
Referensikan blog post "Building My Personal AI Army: Lessons from Project Transformers" — zainfathoni.com/blog/project-transformers-building-personal-ai-army
Pesan kuncinya: satu agent untuk semua = context contamination. Spesialisasi = hasil lebih baik.
-->

---

## :speaking_head: Cerita Nyata: Yang Gagal

- AI generate test yang pass tapi **tidak test apa-apa** (assertion kosong)
- AI "fix" bug di satu tempat, tapi **break 3 tempat lain**
- AI bikin copy meyakinkan, tapi **tone dan audiens-nya meleset**
- PR storm: arms race di kantor, kecepatan naik tapi **kualitas review turun**
  jika tidak disiplin

<!--
TIMING: 3 menit

SPEAKER NOTES:
"Ini semua pengalaman nyata. Project Transformers adalah setup agentic engineering pribadi saya — 7 agent dengan nama Transformer, masing-masing punya domain khusus. Hasilnya jauh lebih baik dibanding satu agent yang handle segalanya."
"Sisi gelapnya: PR storm. Kecepatan naik, tapi kalau review-nya tidak ketat, technical debt juga naik. Arms race di kantor — lihat blog post saya bulan ini."
-->

---

## :bulb: Jadi Gimana?

- :shield: **Trust, but Verify** — selalu review
- :test_tube: **Automate checks** — biarkan mesin bantu verifikasi
- :clipboard: **Mulai dari spec** — tujuan dulu, baru eksekusi
- :brain: **Pahami output-nya** — jangan jadi passenger

---

# 2) Coverage & Control

---

## :bar_chart: Coverage vs Control

| | **Coverage Rendah** | **Coverage Tinggi** |
|---|---|---|
| **Control Tinggi** | :turtle: Lambat tapi aman | :rocket: Ideal |
| **Control Rendah** | :zzz: Tidak efisien | :fire: Chaos |

:point_right: **Goal: Coverage Tinggi + Control Tinggi**

<!--
TIMING: 5 menit

SPEAKER NOTES:
"Coverage tinggi tanpa control = chaos. Control tinggi tanpa coverage = lambat. Cari keseimbangannya."
-->

---

## :traffic_light: Level Kontrol Penggunaan AI

### 1. :green_circle: Assistive — AI menyarankan, manusia memutuskan

*Autocomplete, inline suggestions, grammar check*

### 2. :yellow_circle: Semi-Autonomous — AI kerjakan, manusia review

*Draft copy, generate function, buat proposal awal*

### 3. :red_circle: Autonomous — AI end-to-end, manusia verifikasi akhir

*Prototype halaman baru, generate report dari data*

<!--
SPEAKER NOTES:
"Kebanyakan dari kita berada di level 1-2. Level 3 hanya cocok untuk task yang sangat well-defined dan low-risk."
Berikan contoh untuk setiap level:
- Assistive: autocomplete, inline suggestions
- Semi-autonomous: "buatkan function X dengan spec Y", review hasilnya
- Autonomous: "buatkan halaman baru berdasarkan design ini" — hanya cek hasil akhir
-->

---

## :compass: Framework: Kapan & Seberapa Besar

| Situasi | Coverage | Control | Contoh |
|---------|----------|---------|--------|
| :art: Prototyping | :arrow_up: Tinggi | :arrow_down: Rendah | Bolt.new, v0 |
| :loudspeaker: Marketing/content | :arrow_up: Tinggi | :left_right_arrow: Sedang | Outline, copy draft, content plan |
| :briefcase: Business planning | :left_right_arrow: Sedang | :arrow_up: Tinggi | Riset kompetitor, ringkasan meeting, draft proposal |
| :building_construction: Production | :left_right_arrow: Sedang | :arrow_up: Tinggi | Claude Code + Review |
| :lock: Security-critical | :arrow_down: Rendah | :arrow_up: Sangat Tinggi | Manual + AI assist |

<!--
SPEAKER NOTES:
"Framework ini membantu kita menentukan kapan AI boleh banyak ambil peran, dan kapan manusia harus pegang kontrol penuh. Prototyping? Silakan biarkan AI berkreasi. Keputusan penting atau production code? Review dengan disiplin."
-->

---

## :key: Kamu Tetap Pilot-nya

> "AI can accelerate development, but it cannot replace fundamental
> software engineering principles." — Addy Osmani

- :pilot: AI adalah **co-pilot**, bukan captain
- :brain: Pahami keputusan pentingnya
- :white_check_mark: Yang bertanggung jawab tetap **kamu**

---

# 3) Prompting & Interaction Strategy

---

## :keyboard: Prompting 101

### Prompt yang Baik = Hasil yang Baik

- :dart: **Spesifik** — detail, bukan "buatkan sesuatu"
- :clipboard: **Kasih konteks** — file, constraint, target audiens
- :framed_picture: **Kasih contoh** — tunjukkan format yang dimau
- :arrows_counterclockwise: **Iterasi** — perbaiki berdasarkan hasil

<!--
TIMING: 5 menit

SPEAKER NOTES:
"Prompting itu seperti memberi brief ke teammate. Semakin jelas brief-nya, semakin bagus hasilnya."
Tunjukkan contoh prompt yang buruk vs bagus, termasuk yang non-coding:
- Buruk: "Buatkan landing page"
- Bagus: "Buatkan landing page untuk workshop AI di Jogja, target audiens-nya founder, developer, dan business owner, tone-nya praktis, dan CTA-nya daftar via WhatsApp"
-->

---

## :brain: Context Engineering > Prompt Engineering

![bg right:45%](assets/prompt-vs-context-engineering.webp)

Bukan hanya tentang **cara bertanya**,\
tapi **informasi apa yang tersedia**

- :keyboard: **User Input** — prompt kamu
- :books: **Knowledge** — docs, transcript, riset
- :speech_balloon: **Conversation** — konteks sebelumnya
- :hammer_and_wrench: **Tool Outputs** — hasil dari tools
- :open_file_folder: **Project Memory** — keputusan & artefak yang terus hidup

<!--
SPEAKER NOTES:
"Context engineering adalah evolusi dari prompt engineering. Kita tidak hanya memikirkan cara bertanya, tapi juga memastikan AI punya semua konteks yang dibutuhkan."
Contoh: CLAUDE.md di repo ini berisi instruksi tentang tech stack, konvensi, dan cara development. AI membaca ini dan langsung paham konteksnya. Ini nyambung dengan insight dari Lenny's Newsletter: context is the real leverage, bukan sekadar prompt yang clever.
-->

---

## :busts_in_silhouette: Role-Based Interaction

### Gunakan AI Sesuai Perannya

**:building_construction: AI sebagai Architect**
"Desain arsitektur untuk fitur X dengan constraint Y"

**:computer: AI sebagai Implementer**
"Implementasikan function X sesuai spec ini"

**:memo: AI sebagai Writing Partner**
"Buatkan draft landing page untuk audience UMKM teknologi di Jogja"

**:briefcase: AI sebagai Business Analyst**
"Ringkas hasil interview customer ini jadi 5 insight dan 3 prioritas aksi"

**:mag: AI sebagai Reviewer**
"Review kode ini untuk security issues dan performance"

<!--
SPEAKER NOTES:
"Pendekatan role-based ini membantu AI fokus. Ketika kamu minta AI jadi architect, dia akan berpikir di level yang berbeda dibanding ketika diminta jadi implementer."
Demo: tunjukkan bagaimana prompt yang sama bisa menghasilkan output berbeda tergantung role yang diberikan.
-->

---

## :open_file_folder: AI sebagai Second Brain

### Insight dari Lenny's Newsletter

- :brain: **Context is the new interface**
- :books: Bukan cuma prompt — docs, riset, feedback, keputusan
- :mag: Context tersimpan rapi → bukan cuma ingat lebih banyak,
  tapi **berpikir lebih jernih**
- :busts_in_silhouette: Berlaku untuk semua fungsi, bukan cuma developer

<!--
SPEAKER NOTES:
Ambil ide dari artikel Lenny tentang "PM second brain". Pesan utamanya: AI paling berguna saat jadi memory + synthesis layer, bukan sekadar generator jawaban.
-->

---

## :arrows_counterclockwise: Iterasi, Bukan Sekali Jadi

1. :one: **Prompt awal** → draft pertama
2. :two: **Review** → identifikasi kekurangan
3. :three: **Refine** → tambah constraint/context
4. :four: **Ulangi** sampai kualitas sesuai

:bulb: **Tips:** Gunakan `plan mode` untuk hemat token

<!--
SPEAKER NOTES:
"Jangan expect hasil sempurna di prompt pertama. AI-assisted development itu iteratif, seperti development biasa."
-->

---

## :zap: Prototype dalam Menit, Bukan Minggu

### Insight dari Lenny's Newsletter

- :rocket: Prototype interaktif bisa jadi dalam **hitungan menit**
- :speech_balloon: Uji ide **sebelum commit build penuh**
- :art: Untuk **semua fungsi** — samakan persepsi sebelum eksekusi
- :warning: Mulai kecil, iterasi bertahap

:point_right: **Prototype = alat belajar tercepat**

<!--
SPEAKER NOTES:
Ambil dari artikel AI prototyping for PMs. Tekankan bahwa manfaat utamanya bukan sekadar "lebih cepat bikin UI", tapi mempercepat discovery dan alignment lintas fungsi.
-->

---

## :scroll: CLAUDE.md = Autopilot Rules

### Konsistensi Output Otomatis

```markdown
# CLAUDE.md
## Git Conventions
- Do not include co-authorship in commit messages

## Architecture
- React Router v7 with file-based routing
- Tailwind CSS for styling
- TypeScript for type safety
```

:point_right: AI membaca ini dan mengikuti konvensi project

<!--
SPEAKER NOTES:
"CLAUDE.md adalah cara paling efektif untuk memberikan konteks persistent ke AI. Setiap kali AI membuka project, dia membaca file ini dan langsung paham konvensi-nya."
Tunjukkan CLAUDE.md dari repo ini sebagai contoh nyata.
-->

---

# 4) Structured AI Coding

---

## :ladder: Jangan Langsung Coding!

1. :clipboard: **Audience & goal** — untuk siapa, dan apa hasil yang dibutuhkan?
2. :arrows_counterclockwise: **Flow** — bagaimana user atau tim akan memakainya?
3. :building_construction: **Approach** — bagaimana cara terbaik mengerjakannya?
4. :computer: **Implementation** — baru mulai eksekusi

<!--
TIMING: 5 menit

SPEAKER NOTES:
"Kesalahan terbesar dalam AI-assisted development adalah langsung minta AI membuat sesuatu tanpa target audiens dan requirement yang jelas. Hasilnya? Output yang kelihatan rapi, tapi tidak nyambung dengan kebutuhan."
-->

---

## :arrows_counterclockwise: Tanpa vs Dengan Struktur

### :x: Tanpa Struktur

```
"Buatkan fitur authentication untuk app saya"
→ AI generates random auth flow, may not match your stack
→ Missing edge cases, no error handling spec
```

### :white_check_mark: Dengan Struktur

```
Requirement: User login via email/password + OAuth
Flow: Login → Validate → Session → Redirect
Architecture: Server-side session, bcrypt, OAuth2
Constraints: Rate limiting, CSRF protection
→ AI delivers spec-compliant implementation
```

:bulb: Dari Lenny's Newsletter juga ada pola penting: **jangan langsung lempar masalah besar**.
Mulai dari versi paling kecil yang functional, lalu tambah kompleksitas sedikit demi sedikit.

<!--
SPEAKER NOTES:
"Lihat perbedaannya. Prompt yang sama — 'buatkan auth' — tapi hasilnya berbeda drastis tergantung apakah kita memberikan struktur atau tidak."
-->

---

## :brain: Prinsip Dasar

- :zap: **Cepat tanpa struktur** = technical debt
- :shield: **Output tanpa review** = liability
- :chart_with_upwards_trend: **Struktur + AI** = sustainable velocity

### Mantra:

:dart: Define → :test_tube: Test → :eyes: Review

---

## :memo: Brief yang Terstruktur

### Audience → Goal → Flow → Approach → Eksekusi

- :memo: **requirements** — kebutuhan yang bisa dicek
- :art: **design** — pendekatan dan alur kerja
- :clipboard: **tasks** — rencana yang trackable

:point_right: **AI bekerja lebih baik kalau brief-nya jelas**

<!--
TIMING: 3 menit

SPEAKER NOTES:
"Ketika kamu memberikan AI sebuah spec yang terstruktur, hasilnya jauh lebih baik dibanding prompt yang ambiguous. Ini berlaku untuk semua AI tools."
-->

---

# 5) Maintaining Craftsmanship

---

## :gem: Kualitas Tetap Nomor Satu

- :mag: **Review setiap output** — jangan auto-accept
- :test_tube: **Automate** — unit test, integration, E2E
- :clipboard: **Standar jelas** — checklist, style guide, acceptance criteria
- :busts_in_silhouette: **Peer review** — mata manusia tetap penting

<!--
TIMING: 5 menit

SPEAKER NOTES:
"AI bisa menghasilkan output yang 'jadi', tapi belum tentu output yang 'tepat'. Tugas kita adalah memastikan kualitasnya."
-->

---

> "The 70% problem: AI gets you 70% of the way there remarkably fast, but the
> remaining 30% — the hard parts — still require real engineering skill."
> — Addy Osmani

<!--
SPEAKER NOTES:
"Ini yang Addy Osmani sebut 'The 70% Problem'. AI sangat cepat menghasilkan 70% pertama. Tapi 30% sisanya — edge cases, performance, security — itu yang membedakan developer yang baik."
-->

---

## :clipboard: Prompt Saja Tidak Cukup → Butuh Evals

### Insight dari Lenny's Newsletter

- :test_tube: Untuk AI features, butuh **evaluasi terukur**
- :mag: Cek: **correctness, hallucination, tone, relevance**
- :repeat: Evals bikin improvement **terukur**, bukan feeling
- :warning: **Vibe check ≠ quality check**

<!--
SPEAKER NOTES:
Ambil dari artikel "Beyond vibe checks". Framing-nya kuat: prompts make headlines, evals decide whether the product thrives or dies. Gunakan ini untuk menghubungkan craftsmanship dengan praktik AI yang lebih matang.
-->

---

## :mag: AI untuk Review

- :nose: **Code smell** — duplicated logic, god functions
- :warning: **Anti-pattern** — circular deps, tight coupling
- :snail: **Inefficiency** — N+1 queries, unnecessary re-renders
- :lock: **Security** — injection, XSS, exposed secrets

<!--
SPEAKER NOTES:
"Gunakan AI untuk review kode — termasuk kode yang ditulis AI sendiri. Ini bukan ironi, ini strategi. AI bisa mendeteksi masalah yang kita lewatkan."
-->

---

## :lock: Security: Manusia = Final Gatekeeper

- :shield: Validasi **vulnerability** — injection, insecure API, deps
- :no_entry: Jangan blindly trust AI untuk security
- :white_check_mark: **Checklist** sebelum deploy
- :robot: AI boleh **scan**, tapi manusia yang **approve**

<!--
SPEAKER NOTES:
"AI bisa membantu mendeteksi vulnerability, tapi jangan serahkan security sepenuhnya ke AI. Developer tetap harus jadi final gatekeeper."
-->

---

## :gear: System Thinking

- :jigsaw: **Konsistensi** — satu pattern, seluruh produk
- :no_entry: Hindari **over-fragmentation**
- :link: **Pahami impact** setiap perubahan
- :books: **Docs** — AI bantu generate, manusia review

<!--
SPEAKER NOTES:
"Ketika menggunakan AI di project besar, mudah sekali terjadi inkonsistensi. AI bisa menulis 10 function dengan 10 pattern berbeda jika kita tidak memberikan constraint. System thinking membantu kita menjaga kesatuan."
-->

---

## :white_check_mark: Do's

- :mag: **Review** setiap output
- :clipboard: **Konteks lengkap** — CLAUDE.md, spec, constraint
- :test_tube: **Test + evals** otomatis
- :arrows_counterclockwise: **Iterasi** bertahap
- :brain: **Pahami** apa yang di-generate
- :scroll: **Rules file** untuk konsistensi

---

## :x: Don'ts

- :see_no_evil: **Copy-paste tanpa baca**
- :question: **Prompt ambiguous** — garbage in, garbage out
- :eyes: **Vibe check doang** — bukan evaluasi
- :computer: **"Works on my machine"** — test di CI
- :crystal_ball: **Expect sempurna sekali jadi**
- :sleeping: **Jadi passenger** di output sendiri
- :rocket: **Mulai tanpa context**

---

# :eyes: Demo Results

---

## :trophy: Waktunya Cek Hasil!

### Yang kita minta tadi:

> Filter by category di halaman `/talks` — Conferences, Podcasts, Meetups

:point_right: Buka Telegram → cek status Wheeljack
:point_right: Buka zainf.dev/talks → lihat hasilnya
:point_right: Review PR yang masuk di GitHub

<!--
TIMING: 5 menit

SPEAKER NOTES:
Buka Telegram, tunjukkan percakapan dengan Wheeljack.
Buka GitHub PR yang dihasilkan — tunjukkan diff-nya ke audiens.
Buka zainf.dev/talks — demo filter yang sudah jalan (atau belum jalan kalau belum selesai — itu pun valuable!).
Pesan kunci: "AI mengerjakan task-nya secara autonomous selama 30 menit. Tapi saya yang approve PR-nya. Saya tetap pilot-nya."
-->

---

## :bulb: Key Takeaways

1. :robot: **Agentic Engineering** — bukan vibe coding, tapi specify → verify → iterate
2. :bar_chart: **Coverage & control** harus seimbang
3. :brain: **Context > prompt** — termasuk audiens dan tujuan
4. :clipboard: **Struktur dulu** — audience → goal → flow → approach
5. :gem: **Kualitas tetap nomor satu** — review, test, verify
6. :gear: **System thinking** — konsistensi di seluruh produk

---

## :pray: Terima Kasih!

:desktop_computer: <https://zainf.dev/ai-assisted-development>

:link: <https://github.com/zainfathoni/zainf>

### Ada pertanyaan? :raised_hand:

---

## Referensi

- [Vibe Coding is Not the Same as AI-Assisted Engineering](https://addyo.substack.com/p/vibe-coding-is-not-the-same-as-ai) — Addy Osmani
- [The 70% Problem](https://addyo.substack.com/p/the-70-problem-hard-truths-about) — Addy Osmani
- [Context Engineering](https://addyo.substack.com/p/context-engineering-bringing-engineering) — Addy Osmani
- [How to Make Your Tech Stack AI-Friendly](https://refactoring.fm/p/how-to-design-your-tech-stack-for) — Refactoring
- [Kiro Specs](https://kiro.dev/docs/specs/concepts/) — AWS
- Lenny's Newsletter, *How to build your PM second brain with ChatGPT*
- Lenny's Newsletter, *A guide to AI prototyping for product managers*
- Lenny's Newsletter, *Beyond vibe checks: A PM's complete guide to evals*
- [What is Agentic Engineering?](https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/) — Simon Willison
- [Arms Race di Kantor: Ketika AI Mengubah Cara Kita Ngoding](https://www.zainfathoni.com/blog/ai-arms-race-defensive-programming-2026-04-03) — Zain Fathoni
- [Building My Personal AI Army](https://www.zainfathoni.com/blog/project-transformers-building-personal-ai-army) — Zain Fathoni
- [OpenClaw](https://openclaw.io) — Agentic engineering platform
