---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
marp: true
---

# Daily Wins

Cerita nyata dari dua bulan pertama\
pakai **OpenClaw** :robot:

---

## :arrow_forward: Buka Bab 9 Sambil Nyimak

![w:220](assets/daily-wins-qr.png)

**Bab 9: Proaktif — Bot yang Nge-ping Anda Duluan**

:iphone: Scan sekarang — biar peta Bab 9 udah di tangan Anda pas saya cerita

---

## Perkenalan

![bg left:33%](assets/zain-1280.jpeg)

<https://www.zainfathoni.com/about>

- :round_pushpin: Jember :arrow_right: Bandung :arrow_right: SG :arrow_right:
  Jogja
- :hammer_and_wrench: Backend :arrow_right: Manager :arrow_right: Frontend
- :robot: 2 bulan++ hidup bareng OpenClaw

---

## Aturan Main OpenClaw

- :heavy_check_mark: **Yang ngurangin gesekan harian, keep**
- :x: **Yang malah nambah ribet, buang**
- :seedling: Mulai dari **1–2** use case yang paling relevan
- :calendar: Coba **seminggu**, evaluasi jujur
- :eyes: Semua cerita hari ini bisa Anda **verifikasi langsung**

---

## 1. :microscope: Perceptor's War Digest

- :newspaper: Research agent nge-push **War Digest** ke Telegram
- :calendar: Cron **3x/minggu** (Sel / Kam / Sab jam 8 pagi)
- :bookmark_tabs: Kategori jelas: Military, Energy, Gulf States, Crypto
- :bulb: Ditutup **Dalio Lens** — satu paragraf makro-reflective
- :coffee: 5 menit sambil ngopi, ganti scroll timeline X

---

## 2. :bee: Visualisasi Matematika

- :child: Vika stuck? Foto/ketik soal ke **Bumblebee** di Telegram
- :bar_chart: Solusi pake **Singapore Bar Model**, re-explain kalau masih bingung
- :globe_with_meridians: Lanjut: generate **HTML explainer interaktif**
- :link: Publish ke `ark.zainf.dev/viz/` — permanen, tweakable
- :sparkles: Skill: `visual-explainer` (custom workspace skill)

---

## 3. :camera: OCR Soal Matematika

- :writing_hand: Vika jepret soal tulisan tangan dari buku tulis
- :eye: Bumblebee **baca foto** + **solve step-by-step**
- :abacus: Contoh: Marbles Problem → substitusi → **Sam had 40 marbles**
- :white_check_mark: Quick check di akhir — biar Vika bisa belajar alurnya
- :bulb: Vision model (OCR) + reasoning model (solve) dipake barengan

---

## 4. :microphone: Voice Note :arrow_right: Transkrip

*(Honest: belum saya coba sendiri — plausible)*

- :studio_microphone: Rekam voice note sambil jalan
- :memo: OpenClaw transcribe + rapihin jadi bullet point
- :ear: Pola dari Claire Vo ([Lenny's Newsletter](https://www.lennysnewsletter.com/p/how-openclaw-changed-my-life-claire-vo))
- :pushpin: Saya masukin **jujur** sebagai "plausible tapi belum diverifikasi"

---

## 5. :calendar: Calendar Event Narration

- :loudspeaker: Agent **nge-narate kerjanya sendiri** di channel Zavi Family
- :memo: Contoh: update event "Isa's Guitar Exam (Grade 11)"
- :bell: Location, reminder 30 min, countdown, notes lengkap
- :no_bell: **Bukan** notifikasi — ini **audit trail**
- :office_worker: Bot bagus kerja diem, ninggalin jejak rapi

---

## 6. :ticket: Ticket Triage (bukan Email)

**Optimus Prime** 🍠 → Morning Summary jam 07:00 WIB

- :crescent_moon: Overnight Activity (Wheeljack / Bluestreak)
- :trophy: Recent Wins — PR per orang, last few days
- :warning: Open Items Needing Attention (stale cards, overdue)
- :bar_chart: Fizzy Board snapshot + Suggested Focus Today
- :fuelpump: Fuel report: Codex / Claude / Amp Free budgets

---

## 7. :bulb: Ideas Channel :arrow_right: AGENTS.md

Satu link + satu baris — Optimus ngerjain compound engineering:

1. :mag: **Identify** card Fizzy yang relevan (#214)
2. :book: **Baca & ringkas** nyambung ke setup kita
3. :vs: **Bandingin** sama AGENTS.md existing
4. :pencil2: **Propose draft** + :scissors: **self-trim** ke budget
5. :white_check_mark: **Apply** ke AGENTS.md — permanen

---

## 8. :truck: Migrasi Armada: Claude :arrow_right: Codex

**Fizzy #334 — Migrate Autobots from Claude to OpenAI Codex**

- :moneybag: Trigger: billing Anthropic berubah 4 April 2026
- :robot_face: 14 agent, masing-masing punya `AGENTS.md`
- :arrows_counterclockwise: Model utama → **GPT-5.4**, heartbeat → **Codex-Spark**
- :shield: Claude di-keep sebagai **fallback** & kasus ACP
- :clipboard: Fizzy = **decision log** — pas ada yang off, balik ke card
- :wrench: OpenClaw bukan cuma dipake — juga **dirawat**

---

## 9. :lock: Approval Boundary

Pas command bocor, sistemnya **tetap nahan**.

- :see_no_evil: Setup belum rapi, command approval kelihatan ke teman
- :no_entry: **Aksinya tetap ketahan** — bot nggak nurut sembarang orang
- :door: "Siapa pun bisa ngetok pintu, nggak semua pegang kunci kedua"
- :warning: **Jangan longgarin** approval biar mulus di awal
- :balance_scale: Friksi kecil > drama aksi yang salah

---

## 10. :police_car: Prowl Workout Flow

Cron yang ditulis dan dibaca bot:

- :runner: `06:26` → `/new start full-body workout`
- :clipboard: Daily note dibuat, loads table prefilled
- :stopwatch: Strava reminder auto-set 90 menit
- :iphone: `08:26` → `#lapor <strava link>`
- :warning: `wacli 405` → Prowl **nggak bohong, nggak nyerah**
- :white_check_mark: Graceful degradation: log apa yang bisa, flag sisanya

---

## 11. :receipt: OCR Bank Statement :arrow_right: Actual Budget

- :pdf: PDF statement bank tiap awal bulan
- :gear: Script [**actual-reconciler**](https://github.com/zainfathoni/actual-reconciler) (open source)
- :eye: OCR baris per baris → parse tanggal, merchant, amount
- :link: Match ke transaction di [Actual Budget](https://actualbudget.org/), flag yang ragu
- :clock3: **Satu sore :arrow_right: lima menit**

---

## 12. :family_man_woman_girl: Wheeljack × Vika: Coding Bareng

- :woman_technologist: **Vika** drive di Telegram channel Coding
- :hammer_and_wrench: **Wheeljack** 🛠️ execute: baca code, propose patch, apply
- :mag: Contoh nyata: debug calendar bug di **PR #129** Vika
- :man_technologist: Saya jump in **di akhir** buat edge case + best practice
- :dollar: Pake **Amp Free** (Opus 4.6 + Oracle GPT-5.1)
- :shield: Blast radius kecil — permission per repo

---

## 13. :memo: Vibe Writing: Buku Ini Sendiri

- :books: Buku ini di-draft bareng **Optimus** 🍠 + **Rewind** 📼
- :file_folder: Medium: Obsidian vault, file `.md` yang ter-update
- :speech_balloon: Iterasi pendek di Telegram, review bolak-balik
- :mag: **Moment yang penting**: *"Did you investigate Prowl's weekly report?"*
- :pray: Optimus jujur: *"Not yet, and you're right to call that out."*
- :sparkles: Bot matang = **tau batas antara yang dia tau dan yang dia kira-kira**

---

## :checkered_flag: Closing

- :thirteen: **13 cerita**, 12 real dari setup saya, 1 honest "plausible"
- :seedling: Anda **nggak harus** punya semua agent sekaligus
- :dart: Mulai dari **satu** use case yang paling sering bikin "aduh, males banget"
- :calendar: Coba seminggu. Kalau ngepas, lanjut. Kalau enggak, ganti target.
- :footprints: **Semua ada jejaknya** — tanya saya langsung, saya tunjukin

---

## :arrow_forward: Lanjut ke Bab 9

![w:220](assets/daily-wins-qr.png)

**Bab 9: Proaktif — Bot yang Nge-ping Anda Duluan**

*Terima kasih!* :pray:
