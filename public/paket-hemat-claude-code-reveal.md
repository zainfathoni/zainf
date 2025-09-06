# Paket Hemat Claude Code

Membangun alur kerja dan belajar yang\
efektif ⬆️ dan efisien 💰 dalam penggunaan AI

---

## Perkenalan

<!-- .slide: data-background-image="assets/zain-1280.jpeg" data-background-size="33%" data-background-position="left" -->

<https://www.zainfathoni.com/about>

- 📍 Jember ➡️ Bandung ➡️ SG ➡️ Jogja
- 🔨 Backend ➡️ Manager ➡️ Frontend  
- 📅 1 bulan++ menggunakan Claude Code

---

## Agenda

1. **Membangun kesadaran bersama AI** <!-- .element: class="fragment" -->
2. **Cara minimalisir halusinasi AI** <!-- .element: class="fragment" -->
3. **Alur kerja memanfaatkan Claude Code** <!-- .element: class="fragment" -->
4. **Tips hemat dan efektif dengan Claude Code** <!-- .element: class="fragment" -->

---

## 1. Membangun Kesadaran Bersama AI

<!-- .slide: data-background-image="assets/iron-man.png" data-background-size="44% auto" data-background-position="right center" -->

[The 70% Problem](https://addyo.substack.com/p/the-70-problem-hard-truths-about)

- Kita harus **sadar** (_conscious_) atas apa yang sedang terjadi <!-- .element: class="fragment" -->
- Kita pastikan AI **napak tanah** (_grounded_) dengan kenyataan <!-- .element: class="fragment" -->

---

## 2. Cara Minimalisir Halusinasi AI

- 🧠 Context Engineering <!-- .element: class="fragment" -->
- 🔨 Memilih Tech Stack yang ramah AI <!-- .element: class="fragment" -->
- 🛡️ Trust, but Verify <!-- .element: class="fragment" -->
- 🧪 Pengujian Otomatis <!-- .element: class="fragment" -->

---

## 🧠 Context Engineering

<!-- .slide: data-background-image="assets/prompt-vs-context-engineering.webp" data-background-size="54% auto" data-background-position="right center" -->

[Context Engineering: Bringing Engineering Discipline to Prompts](https://addyo.substack.com/p/context-engineering-bringing-engineering)

- ⌨️ User Input <!-- .element: class="fragment" -->
- 📚 Retrieved Knowledge <!-- .element: class="fragment" -->
- 💬 Prior Conversation <!-- .element: class="fragment" -->
- 🔨 Tool Outputs <!-- .element: class="fragment" -->

---

## 🔨 Memilih Tech Stack yang Ramah AI

[How to make your tech stack AI-friendly 📏](https://refactoring.fm/p/how-to-design-your-tech-stack-for)

- 🧠 **AI sukses di mana manusia sukses** <!-- .element: class="fragment" -->
- 🔧 **Buat batasan-batasan** <!-- .element: class="fragment" -->
- 💻 **Semuanya sebagai kode** <!-- .element: class="fragment" -->
- 🎯 **Batasi konteks** <!-- .element: class="fragment" -->
- 🤖 **Desain untuk adopsi AI** <!-- .element: class="fragment" -->

---

## ❌ Ketika AI Bermasalah

### Jebakan Umum

- Instruksi yang kabur → hasil yang tidak konsisten <!-- .element: class="fragment" -->
- Konteks yang hilang → halusinasi <!-- .element: class="fragment" -->
- Terlalu bergantung → kehilangan kontrol <!-- .element: class="fragment" -->
- Contoh nyata kegagalan saya dalam membuat slide ini kemarin <!-- .element: class="fragment" -->
  - 🙈 <https://app.warp.dev/block/K5VB2RoKQHyki2Erjub0fU> <!-- .element: class="fragment" -->

---

## ❌ Contoh Kasus Kegagalan AI

### Belajar dari Kesalahan Orang Lain

- <https://x.com/albertadevs/status/1947095566736904562> <!-- .element: class="fragment" -->
- <https://x.com/anothercohen/status/1948878534262575430> <!-- .element: class="fragment" -->
  - <https://x.com/spaniard_reject/status/1948807698947981486> <!-- .element: class="fragment" -->
- <https://www.pcmag.com/news/vibe-coding-fiasco-replite-ai-agent-goes-rogue-deletes-company-database> <!-- .element: class="fragment" -->

---

## 🛡️ Trust, but Verify

[The "Trust, But Verify" Pattern For AI-Assisted Engineering](https://addyo.substack.com/p/the-trust-but-verify-pattern-for)

### Strategi Validasi

- ✅ **Selalu review output AI** <!-- .element: class="fragment" -->
- 🧪 Terapkan pengujian otomatis <!-- .element: class="fragment" -->
- 👥 Jangan lupakan proses peer review <!-- .element: class="fragment" -->
- 📊 Terapkan standar kualitas metrik <!-- .element: class="fragment" -->

<https://x.com/zainfathoni/status/1946533504252289377>

---

## 🧪 Pengujian Otomatis

- ⚙️ Otomasi pengujian <!-- .element: class="fragment" -->
- 🚨 Pengawasan berkelanjutan <!-- .element: class="fragment" -->

### 🔧 Tools

- 🎭 Playwright MCP <!-- .element: class="fragment" -->
- 🧪 Vitest <!-- .element: class="fragment" -->
- 📋 Storybook <!-- .element: class="fragment" -->

---

## 3. Alur Kerja Memanfaatkan Claude Code

### Rencana Berbasis Markdown

- 📋 **Perencanaan terstruktur** <!-- .element: class="fragment" -->
- 🎯 Tujuan yang jelas <!-- .element: class="fragment" -->
- 📈 Pelacakan progress <!-- .element: class="fragment" -->
- 🔄 Perbaikan iteratif <!-- .element: class="fragment" -->

---

## 📋 Contoh: Specs dari Kiro

### 3 File Utama

- 📝 **requirements.md** - EARS notation untuk requirement yang testable <!-- .element: class="fragment" -->
- 🎨 **design.md** - Arsitektur teknis dan data flow <!-- .element: class="fragment" -->
- 📋 **tasks.md** - Rencana implementasi yang detail dan trackable <!-- .element: class="fragment" -->

<https://kiro.dev/docs/specs/concepts/>

---

## 4. Tips Hemat dan Efektif dengan Claude Code

<!-- .slide: data-background-image="assets/ccusage-example.png" data-background-size="50% auto" data-background-position="right center" -->

- 💰 **Output token itu mahal** <!-- .element: class="fragment" -->
- 📋 SELALU gunakan `⏸️ plan mode` <!-- .element: class="fragment" -->
- 🎯 Prompt yang spesifik dan ringkas <!-- .element: class="fragment" -->
- 🔄 Rangkum pola berulang <!-- .element: class="fragment" -->
- 🖥️ Pantau dengan [ccusage](https://ccusage.com/) <!-- .element: class="fragment" -->

---

## Strategi Plan Mode

### Alur Kerja Efisien

1. 📋 **Mulai dengan `⏸️ plan mode`** <!-- .element: class="fragment" -->
2. 🎯 Definisikan tujuan yang jelas <!-- .element: class="fragment" -->
3. 🔄 Iterasi pada requirement <!-- .element: class="fragment" -->
4. ⚡ Eksekusi dengan efisien <!-- .element: class="fragment" -->

---

## Kesimpulan

- 🧠 **Bangun kesadaran AI** - AI sukses di mana manusia sukses <!-- .element: class="fragment" -->
- 🔨 **Buat tech stack AI-friendly** - Constraints, code, konteks terbatas <!-- .element: class="fragment" -->
- 🛡️ **Percaya tapi verifikasi** - Review output + testing otomatis <!-- .element: class="fragment" -->
- 📋 **Gunakan `⏸️ plan mode`** - Hemat token dengan perencanaan terstruktur <!-- .element: class="fragment" -->
- 🧪 **Integrasikan testing** - Playwright MCP untuk validasi visual <!-- .element: class="fragment" -->

---

## 🙏 Terima Kasih

🖥️ <https://zainf.dev/paket-hemat-claude-code>

### Demo

Mengubah slide ini menjadi interaktif dengan format Reveal.js

🔗 <https://github.com/zainfathoni/zainf>

Simak kode dan hasilnya (link menyusul): 🔗
[VS Code Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
