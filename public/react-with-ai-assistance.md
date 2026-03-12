---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
marp: true
---

# Build a React App in 20 Minutes with **AI Assistance**

From zero to a multi-page React app — with AI by your side

![w:200](assets/techrawih-qr.png)

<!--
TIMING: 2 menit

SPEAKER NOTES (Bahasa Indonesia):
Sapa audiens dengan hangat. Ucapkan Ramadan Mubarak — kita sedang TechRawih!
Sampaikan bahwa ini bukan sekadar intro React biasa. Kita akan bahas bagaimana cara yang dipakai developer-developer produktif hari ini: pakai React sebagai fondasi, AI sebagai akselerator.
Preview: "Di akhir sesi ini, kalian akan punya gambaran nyata bagaimana mulai bikin aplikasi web atau mobile, dan bagaimana AI bisa membantu prosesnya jadi lebih cepat dan lebih fokus."
-->

---

## 👋 Introduction

![bg left:33%](assets/zain-1280.jpeg)

<https://www.zainfathoni.com/about>

- :round_pushpin: Jember → Bandung → :singapore: SG → Jogja
- :hammer_and_wrench: Backend → Manager → Frontend → Fullstack
- :robot: AI Enthusiast · Speaker · Empowered Father 🍠

<!--
TIMING: 2 menit

SPEAKER NOTES (Bahasa Indonesia):
Perkenalkan diri secara ringkas. Highlight perjalanan dari backend ke fullstack — ini relevan karena React adalah alat yang menjembatani banyak peran.
Sebutkan pengalaman dengan AI — bukan sekadar pakai ChatGPT, tapi mengintegrasikan AI ke dalam alur kerja sehari-hari.
Akhiri dengan: "Saya di sini bukan untuk ngajarin teori. Saya mau berbagi apa yang benar-benar berhasil di dunia nyata."
-->

---

## 🤔 Opening Question

> How long does it take you to build an app from scratch?

<!--
TIMING: 3 menit

SPEAKER NOTES (Bahasa Indonesia):
Lempar pertanyaan ke audiens. Beri waktu 30 detik untuk mereka berpikir.
"Dua minggu? Sebulan? Atau bahkan belum pernah sampai selesai?"
Bangunan: "Sebagian besar developer habiskan 60-70% waktunya bukan untuk menulis logika bisnis, tapi untuk hal-hal yang repetitif — setup project, boilerplate, debugging typo, baca dokumentasi..."
Punchline: "AI tidak menggantikan developer. Tapi AI bisa mengambil alih bagian yang membosankan — supaya kamu fokus ke bagian yang bermakna."
Transisi: "Dan React adalah framework yang paling siap untuk kombinasi ini hari ini."

ENGAGEMENT TIP:
Tanya show of hands: "Siapa yang sudah pernah coba React?", "Siapa yang sudah pakai AI untuk coding?"
Ini membantu kamu membaca ruangan dan menyesuaikan kedalaman materi.
-->

---

## 📚 Agenda

1. **Why React?** — The modern developer's primary tool
2. **React Fundamentals** — Core concepts including React Router
3. **AI as a Coding Assistant** — A workflow that changes everything
4. **Live Demo** — Building a real app together
5. **Takeaways** — Concrete steps you can start today

→ **Goal:** Go home with new skills + a new workflow

<!--
TIMING: 2 menit

SPEAKER NOTES (Bahasa Indonesia):
Walk through agenda dengan percaya diri. Tekankan bahwa ini bukan ceramah — ada demo live yang melibatkan audiens.
"Kita akan habiskan waktu terbesar di bagian demo — karena belajar coding itu harus dengan tangan."
Set ekspektasi: "Tidak perlu install apa-apa sekarang. Kalian bisa ikuti di layar saya, lalu coba sendiri di rumah malam ini."
-->

---

## 🌍 Why React?

**React is used by:**

- Meta · Netflix · Airbnb · Shopify · Discord
- Tokopedia · Gojek · Traveloka · Bukalapak

→ **Not just big companies — small teams and freelancers too**

<!--
TIMING: 3 menit

SPEAKER NOTES (Bahasa Indonesia):
Mulai dengan social proof yang relevan — nama perusahaan yang audiens kenal.
"Kenapa perusahaan-perusahaan ini pilih React? Bukan kebetulan. Ada alasan teknis dan bisnis di baliknya."
Tekankan: React bukan hanya untuk enterprise. Freelancer, startup, side project — semua bisa memanfaatkan ekosistem yang sama.
"Dan yang membuat React istimewa hari ini: komunitas dan tooling-nya sudah sangat matang untuk diintegrasikan dengan AI."
-->

---

## 📊 React in the Developer World

**Stack Overflow Survey 2024:**

- React: most popular web framework **12 years running**

→ Large ecosystem = **more resources, libraries, and answers on the internet**

<!--
TIMING: 3 menit

SPEAKER NOTES (Bahasa Indonesia):
Gunakan data untuk memperkuat argumen. Popularitas bukan berarti harus selalu dipakai, tapi ada konsekuensi praktis: lebih banyak tutorial, lebih banyak library, lebih banyak developer yang bisa diajak kolaborasi.
Khususnya relevan untuk AI: "Model-model AI seperti Claude, GPT, Copilot — mereka di-training dengan miliaran baris kode React. Artinya AI lebih akurat dan lebih helpful ketika kamu pakai React dibanding framework yang lebih niche."
-->

---

## ⚛️ What Exactly Is React?

> React is a **JavaScript library** for building user interfaces (UI) using **reusable components**

**Core concepts:**

- 🧩 **Component** — Self-contained pieces of UI
- 🔄 **State** — Data that can change
- ⬇️ **Props** — Data passed to components
- 🔁 **Re-render** — UI automatically updates when data changes

<!--
TIMING: 5 menit

SPEAKER NOTES (Bahasa Indonesia):
Jelaskan dengan analogi yang familiar: "Bayangkan aplikasi seperti LEGO. React adalah sistemnya — setiap blok LEGO adalah komponen. Kamu bisa susun, copas, dan pakai ulang."
State: "State adalah memori komponen. Seperti otak — dia ingat berapa counter sekarang, apakah modal sedang terbuka, apa yang ada di keranjang belanja."
Props: "Props itu seperti instruksi yang kamu kasih ke komponen. 'Hei Button, teks kamu adalah Kirim, dan warnanya merah.'"
Re-render: "Yang bikin React istimewa — kamu tidak perlu manual update DOM. Saat data berubah, React yang urus tampilannnya."
-->

---

## 🧩 React Component — Simple Example

```jsx
// Product Card Component
function ProductCard({ name, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Rp {price.toLocaleString()}</p>
      <button>Add to Cart</button>
    </div>
  )
}
```

→ **One component → can be used hundreds of times with different data**

<!--
TIMING: 5 menit

SPEAKER NOTES (Bahasa Indonesia):
Walk through kode ini baris per baris. Jangan terlalu cepat.
"Perhatikan: komponen ini menerima `name`, `price`, dan `image` sebagai props."
"Di dalam, kita return JSX — ini seperti HTML tapi di dalam JavaScript."
"Kurung kurawal `{}` artinya 'masukkan nilai JavaScript di sini'."
Demo mental: "Kalau kita punya 100 produk, kita tinggal map data-nya dan render komponen ini 100 kali. Tidak perlu tulis HTML 100 kali."
Transisi ke AI: "Dan inilah yang bisa AI buat dengan sangat cepat — boilerplate seperti ini bisa di-generate dalam hitungan detik."
-->

---

## 🔄 State — Components That Can Change

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  )
}
```

→ **`useState` = how React "remembers" things between renders**

<!--
TIMING: 5 menit

SPEAKER NOTES (Bahasa Indonesia):
Ini adalah konsep paling penting di React — pastikan audiens mengerti.
"useState adalah hook paling sering dipakai. Formatnya selalu sama: `const [nilai, setNilai] = useState(nilaiAwal)`."
"`count` adalah nilai saat ini. `setCount` adalah fungsi untuk mengubahnya."
"Setiap kali `setCount` dipanggil, React akan re-render komponen dengan nilai baru."
Tanya audiens: "Ada yang punya pertanyaan tentang useState sebelum kita lanjut?"

TECHNICAL DEPTH:
useState adalah salah satu dari banyak hook React. Hook lain yang sering dipakai: useEffect (efek samping), useContext (state global), useRef (akses DOM langsung). Kita tidak akan cover semua hari ini — fokus ke yang paling penting dulu.
-->

---

## 🏗️ React App Structure

```text
my-app/
├── src/
│   ├── components/     ← Reusable components
│   │   ├── Button.jsx
│   │   └── ProductCard.jsx
│   ├── pages/          ← App pages
│   │   ├── Home.jsx
│   │   └── Cart.jsx
│   ├── App.jsx         ← Main / root component
│   └── main.jsx        ← Entry point
├── public/             ← Static assets
└── package.json        ← Dependencies & scripts
```

<!--
TIMING: 3 menit

SPEAKER NOTES (Bahasa Indonesia):
"Ini adalah struktur tipikal proyek React modern. Tidak perlu hafal — AI akan bantu generate ini untuk kamu."
"Yang penting dipahami: ada pemisahan yang jelas antara komponen (bisa dipakai ulang) dan halaman (biasanya sekali pakai)."
"App.jsx adalah 'orchestrator' — di sinilah semua routing dan layout utama disusun."
Transisi: "Sekarang, bagaimana navigasi antar halaman di React?"
-->

---

## 🧭 React Router — Navigation Between Pages

```jsx
// src/App.jsx — with React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
```

→ **React Router turns your app into a multi-page experience — without full page reloads**

<!--
TIMING: 5 menit

SPEAKER NOTES (Bahasa Indonesia):
"React itu single-page application — artinya tanpa routing, semua tampilan hanya di satu halaman."
"React Router menyelesaikan masalah ini: kamu bisa punya URL berbeda untuk setiap halaman, tanpa browser harus reload."
"Perhatikan `Link` menggantikan tag `<a>` — karena Link tidak memicu full reload."
"Dan `:id` di path itu dynamic route — artinya `/product/1`, `/product/2`, dll. semua ditangani oleh satu komponen."
Transisi: "Sekarang kita lihat fitur powerful lain dari React Router — nested routes."
-->

---

## 🧭 Nested Routes — Shared Layouts

```jsx
<Routes>
  <Route element={<Layout />}>       {/* shared nav + footer */}
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/product/:id" element={<ProductDetail />} />
  </Route>
  <Route path="/login" element={<Login />} />  {/* no layout */}
</Routes>
```

```jsx
const Layout = () => (<>
  <Navbar />
  <Outlet />   {/* child route renders here */}
  <Footer />
</>)
```

→ **`Outlet` is a placeholder where child routes render inside a parent layout**

<!--
TIMING: 4 menit

SPEAKER NOTES (Bahasa Indonesia):
"Nested routes adalah salah satu fitur paling powerful di React Router."
"Bayangkan: hampir semua halaman punya navbar dan footer yang sama. Tanpa nested routes, kamu harus copy-paste layout di setiap halaman."
"Dengan nested routes, kamu bungkus route-route itu di dalam parent route yang punya Layout. Komponen `Outlet` menandai tempat child route di-render."
"Perhatikan `/login` di luar Layout — halaman login biasanya punya tampilan berbeda, tanpa navbar."
"Contoh nyata: website ini (zainfathoni.com) pakai nested routes. File `_layout.tsx` cuma berisi Container dan Outlet — semua halaman seperti Talks, Projects, Uses otomatis dibungkus layout yang sama. Itu file-based routing di React Router v7."
-->

---

## 🧭 Dynamic Routes & useParams

```jsx
// src/pages/ProductDetail.jsx
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  if (!product) return <p>Product not found</p>

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{formatRupiah(product.price)}</p>
    </div>
  )
}
```

→ **`useParams` extracts dynamic values from the URL — just like reading a variable**

<!--
TIMING: 4 menit

SPEAKER NOTES (Bahasa Indonesia):
"useParams adalah hook dari React Router yang mengambil parameter dari URL."
"Jadi ketika user buka `/product/3`, useParams akan return `{ id: '3' }` — kita pakai itu untuk cari produk yang tepat."
"Perhatikan juga handling kalau produk tidak ditemukan — ini contoh sederhana error handling yang penting."
"React Router punya banyak fitur lain: nested routes, layout routes, loader, action — tapi untuk mulai, ini sudah cukup."
Transisi: "Sekarang kita lihat ekosistem React secara keseluruhan."
-->

---

##

![bg](assets/react-ecosystem.png)

<!--
TIMING: 1 menit

SPEAKER NOTES (Bahasa Indonesia):
Ini adalah visual break. Tampilkan ekosistem React yang luas.
Komentar singkat: "Ekosistem React itu besar — kadang bikin overwhelmed. Tapi kabar baiknya: kamu tidak perlu tahu semua. Pelajari sesuai kebutuhan proyek."
Transisi ke AI: "Dan sekarang ada cara yang lebih cerdas untuk navigasi ekosistem ini — dengan bantuan AI."
-->

---

## 🤖 Enter: AI as a Coding Assistant

**Before AI:**

- Open docs → Read → Try → Error → Google → Stack Overflow → Try again

**With AI:**

- Describe what you want → Get a code draft → Review → Adjust → Done

→ **AI doesn't replace understanding — AI removes friction**

<!--
TIMING: 4 menit

SPEAKER NOTES (Bahasa Indonesia):
Ini adalah pivot talk yang penting. Set up dengan perbandingan yang kontras.
"Siapa yang pernah habiskan 2 jam hanya untuk cari cara format tanggal di JavaScript? *pause* Sekarang itu selesai dalam 30 detik."
"Tapi perhatikan: AI menghilangkan gesekan, bukan pemahaman. Kamu masih perlu mengerti kode yang AI hasilkan. Ini bukan magic — ini leverage."
Analogikan: "Dulu arsitek harus gambar manual setiap detail. Sekarang ada software. Tapi arsitek yang baik masih perlu tahu prinsip desain — software hanya accelerates."
-->

---

## 🛠️ AI Tools for React Developers

| Tool | Best for | Free? |
|------|----------|-------|
| **GitHub Copilot** | Autocomplete in editor | Free plan |
| **Claude Code** | Refactoring, analysis, multi-file | Paid (API/Subs) |
| **Cursor** | AI-native editor | Free tier |
| **v0 by Vercel** | Generate UI from description | Free tier |
| **ChatGPT** | Q&A, debugging, explanations | Free |

→ **Pick one, master it first — don't jump around**

<!--
TIMING: 4 menit

SPEAKER NOTES (Bahasa Indonesia):
Jangan overwhelm audiens dengan semua tool sekaligus. Rekomendasikan titik awal.
"Untuk pemula, saya rekomendasikan mulai dengan GitHub Copilot atau ChatGPT — paling mudah di-setup."
"Untuk yang sudah lebih advanced, Claude Code atau Cursor sangat powerful untuk project yang lebih besar."
"v0 by Vercel menarik untuk UI — kamu describe tampilan yang mau, dia generate React component-nya."
Poin penting: "Yang terpenting bukan tool-nya, tapi cara kamu berinteraksi dengan AI. Ini yang kita akan pelajari selanjutnya."
-->

---

## 💬 The Art of Talking to AI

**Bad prompt:**

> "Make a React app"

**Good prompt:**

> "Create a React component called `ProductList` that takes an array of `products` as props, displays them in a 3-column grid, with loading state and empty state. Use Tailwind CSS."

→ **Specific + context + expected output = accurate results**

<!--
TIMING: 5 menit

SPEAKER NOTES (Bahasa Indonesia):
Ini adalah skill yang paling underrated dan paling impactful.
"AI bukan dukun — dia tidak bisa baca pikiran. Semakin spesifik kamu, semakin akurat hasilnya."
Walk through perbedaan kedua prompt: "Prompt buruk itu seperti pergi ke warung dan bilang 'kasih saya makanan'. Prompt yang baik: 'Satu nasi goreng spesial, tidak pedas, ekstra cabe hijau di pinggir, bungkus.'"
Formula: "Selalu sertakan: (1) nama komponen/fungsi, (2) input/output yang diharapkan, (3) library atau style yang dipakai, (4) edge cases yang perlu dihandle."
-->

---

## 🔄 AI-Assisted React Workflow

```
1. DEFINE   → Tell AI what you want to build
      ↓
2. GENERATE → AI creates the first draft
      ↓
3. REVIEW   → Read and understand every line
      ↓
4. REFINE   → Ask AI to fix what's lacking
      ↓
5. TEST     → Run it, see the results
      ↓
6. ITERATE  → Repeat until satisfied
```

→ **You're still the pilot — AI is the co-pilot**

<!--
TIMING: 4 menit

SPEAKER NOTES (Bahasa Indonesia):
Tekankan: ini bukan "copy paste dan jalan". Ini adalah proses iteratif.
"Langkah REVIEW adalah yang paling penting dan paling sering diskip orang. Jangan pernah skip review."
"Kenapa? Karena AI bisa salah. Dia bisa generate kode yang terlihat benar tapi punya bug tersembunyi, terutama di edge cases."
"Dengan memahami kode yang AI hasilkan, kamu juga belajar. Ini yang membuat AI menjadi tool belajar yang luar biasa, bukan crutch."
Transisi ke demo: "Tapi sebelum langsung coding, ada satu teknik penting: Plan Mode."
-->

---

## 📋 Plan Mode — Think Before You Code

> "I want to build a shopping cart app with React and React Router. Plan the component structure, routes, and state management before writing any code."

**AI will outline:**

- Component tree and responsibilities
- Route structure (`/`, `/cart`, `/product/:id`) and shared states
- Step-by-step implementation order

→ **Plan first, code second — fewer rewrites, better architecture**

<!--
TIMING: 3 menit

SPEAKER NOTES (Bahasa Indonesia):
"Salah satu kesalahan paling umum: langsung minta AI tulis kode tanpa planning."
"Plan Mode itu sederhana — minta AI untuk berpikir dulu sebelum menulis. Hasilnya? Arsitektur yang lebih rapi dan lebih sedikit refactor."
"Di Claude Code, kamu bisa ketik `/plan` dan AI akan outline dulu apa yang mau dia lakukan sebelum eksekusi."
"Ini seperti arsitek yang gambar blueprint dulu sebelum mulai bangun. Kamu review blueprint-nya, setuju, baru mulai."
Transisi: "Sekarang kita lihat workflow ini dalam aksi nyata — dimulai dari planning."
-->

---

## 🎯 What We're Building Today

**🛒 Mini Shopping App**

- Product list from dummy data
- Shopping cart with state management
- Automatic price total
- Responsive layout

→ **From zero to running in ~20 minutes with React + AI**

<!--
TIMING: 2 menit

SPEAKER NOTES (Bahasa Indonesia):
Set ekspektasi demo dengan jelas. Audiens perlu tahu apa yang akan mereka lihat.
"Kita tidak akan bikin yang sempurna — kita akan bikin yang fungsional. Ada bedanya."
"Focus kita bukan di styling atau animasi. Focus kita di logika React dan cara AI membantu prosesnya."
"Kalian bisa ikuti di layar — nanti slide-nya bisa diakses di link yang ada di akhir."
-->

---

## Step 1 — Project Setup

**Prompt to AI:**

> "Create a new React project with Vite and React Router. Provide the setup steps for a shopping cart app with multiple pages."

```bash
# What AI will guide you through:
npm create vite@latest mini-shop -- --template react
cd mini-shop
npm install react-router-dom
npm run dev
```

<!--
TIMING: 3 menit

SPEAKER NOTES (Bahasa Indonesia):
Jalankan perintah ini secara live. Tunjukkan bahwa Vite sangat cepat untuk setup.
"Dulu setup project React manual bisa makan waktu setengah jam. Sekarang dengan Vite, 2 menit sudah bisa coding."
"Perhatikan kita langsung install react-router-dom — karena app kita akan punya beberapa halaman."
"AI tidak hanya kasih perintah — dia juga bisa jelaskan kenapa setiap step itu penting."

ACTION:
1. Buka terminal
2. Jalankan `npm create vite@latest mini-shop -- --template react`
3. Pilih framework: React, variant: JavaScript
4. `cd mini-shop && npm install react-router-dom && npm run dev`
5. Tunjukkan browser localhost:5173
-->

---

## Step 2 — Product Data

> "Create a file `src/data/products.js` containing an array of 6 dummy products with fields: id, name, price (in Rupiah), image (from picsum.photos), and category."

```js
export const products = [
  {
    id: 1,
    name: "Laptop Gaming Pro",
    price: 15000000,
    image: "https://picsum.photos/seed/laptop/300/200",
    category: "Electronics"
  },
  // ... 5 more products
]
```

<!--
TIMING: 3 menit

SPEAKER NOTES (Bahasa Indonesia):
"Ini adalah langkah yang sering diabaikan developer pemula — mulai dari data, bukan dari UI."
"Dengan punya data yang jelas di awal, komponen kita jadi lebih mudah dirancang."
"Perhatikan saya pakai picsum.photos untuk gambar dummy — AI yang kasih saran ini karena dia tahu library yang biasa dipakai untuk prototyping."

ACTION:
1. Minta AI generate file products.js
2. Tunjukkan output AI
3. Buat file-nya di project
4. Tunjukkan di browser dengan console.log sederhana
-->

---

## Step 3a — ProductCard Prompt

**Prompt to AI:**

> "Create a `ProductCard` component with image, name, price in Rupiah, an 'Add to Cart' button, and a Link to `/product/:id`. Use inline styles."

<!--
TIMING: 2 menit

SPEAKER NOTES (Bahasa Indonesia):
"Perhatikan prompt saya sangat spesifik: nama komponen, props yang diterima, format harga, dan yang penting — ada Link ke halaman detail."
"Prompt yang efisien itu minta beberapa hal sekaligus tapi tetap jelas."

ACTION:
1. Copy prompt ke AI tool (live demo)
2. Tunggu output AI
-->

---

## Step 3b — ProductCard Result

```jsx
// src/components/ProductCard.jsx — AI output
import { Link } from 'react-router-dom'

function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 8 }}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
      <p>{formatRupiah(product.price)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  )
}
```

<!--
TIMING: 3 menit

SPEAKER NOTES (Bahasa Indonesia):
"Perhatikan ada yang baru di sini — kita pakai `Link` dari React Router."
"Setiap kartu produk sekarang bisa di-klik untuk buka halaman detail. Ini cara kerja navigasi di React — tanpa reload halaman."

ACTION:
1. Tunjukkan output AI — highlight penggunaan Link
2. Review kode bersama audiens — tanya "ada yang mau diubah?"
3. Copy ke src/components/ProductCard.jsx
4. Tunjukkan hasilnya di browser

ENGAGEMENT TIP:
Libatkan audiens: "Menurut kalian, format Rupiah-nya sudah benar belum? Ada yang bisa improve?"
-->

---

## Step 4a — Routes & Cart Prompt

**Prompt to AI:**

> "Set up App.jsx with BrowserRouter, cart state, and routes for Home, Cart, and Product Detail pages."

<!--
TIMING: 2 menit

SPEAKER NOTES (Bahasa Indonesia):
"Sekarang kita minta AI gabungkan React Router dengan state management dalam satu file."
"Perhatikan: kita tidak jelaskan detail implementasi — kita biarkan AI yang tentukan. Nanti kita review hasilnya."

ACTION:
1. Copy prompt ke AI tool
2. Tunggu output AI
-->

---

## Step 4b — Routes & Cart Result

```jsx
// src/App.jsx — AI output
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function App() {
  const [cart, setCart] = useState([])
  const addToCart = (product) => { /* handle duplicates */ }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/cart">🛒 Cart ({cart.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
```

<!--
TIMING: 5 menit

SPEAKER NOTES (Bahasa Indonesia):
"Perhatikan: cart state ada di App.jsx karena dia harus shared antara Home dan Cart page. Ini konsep 'lifting state up'."
"Nav bar menunjukkan jumlah item di keranjang — dan angka ini update real-time karena React re-render saat state berubah."
"Kita punya 3 route: Home untuk browsing, Cart untuk lihat keranjang, dan Product detail dengan dynamic route `/product/:id`."

ACTION:
1. Review: apakah cart state posisinya sudah benar? (harus di level App supaya bisa diakses semua route)
2. Test navigasi antar halaman
3. Test klik produk dan lihat counter di nav bar update

STORYTELLING:
"Perhatikan: kita tidak tulis satu baris logika routing dan keranjang ini sendiri. Tapi kita review dan paham setiap barisnya. Inilah AI-assisted engineering."
-->

---

## Step 5 — Finishing Touches

**Ask AI to:**

1. **Product detail page** with `useParams` to show full info
2. **Cart page** with item list, quantities, and total price
3. **Empty state** when cart is empty
4. **Responsive grid** for the product list

→ **AI can handle the polish — you focus on product decisions**

<!--
TIMING: 5 menit

SPEAKER NOTES (Bahasa Indonesia):
"Ini adalah saat AI paling bersinar — detail-detail kecil yang butuh waktu tapi bukan core logic."
"Halaman detail produk pakai useParams — persis seperti yang kita pelajari tadi di slide React Router."
"Cart page menampilkan daftar belanjaan dengan quantity dan total harga — AI bisa generate semua ini dari satu prompt."
"Tunjukkan bagaimana request-request kecil ini di-handle AI satu per satu — ini real workflow, bukan magic."

ACTION:
1. Minta AI generate ProductDetail page dengan useParams
2. Minta AI generate Cart page dengan daftar item dan total
3. Minta AI perbaiki grid jadi responsive
4. Hasil akhir: tunjukkan navigasi lengkap Home → Detail → Cart
-->

---

## 🎉 Demo Results

**In ~20 minutes we built:**

- ✅ Project setup with Vite + React Router
- ✅ Data layer (dummy products)
- ✅ Reusable component (ProductCard with navigation)
- ✅ Multi-page routing (Home, Cart, Product Detail)
- ✅ Shared state management (shopping cart across routes)

→ **Without AI: estimated 2-3 hours. With AI: 20 minutes.**

<!--
TIMING: 2 menit

SPEAKER NOTES (Bahasa Indonesia):
Berhenti sejenak dan appreciate apa yang sudah dicapai bersama.
"Ini bukan exaggeration — 20 menit tadi menggantikan pekerjaan yang dulu makan 2-3 jam, terutama untuk yang masih belajar."
"Yang lebih penting: kita tidak hanya copy-paste. Kita paham setiap bagiannya."
"Dan perhatikan — kita sudah pakai React Router untuk navigasi antar halaman. Konsep yang tadi kita pelajari langsung dipraktekkan."
"Nah, sebelum kita tutup dengan takeaways, ada beberapa hal penting yang perlu kalian tahu supaya tidak jatuh ke jebakan yang sama dengan banyak developer."
-->

---

## ⚠️ Pitfalls to Avoid

1. **Not reviewing AI code** → Hidden bugs in production
2. **Over-reliance** → You can't code without AI
3. **Prompts too vague** → Useless output
4. **Skipping tests** → "AI said it's correct" is not a guarantee

<!--
TIMING: 5 menit

SPEAKER NOTES (Bahasa Indonesia):
Ini adalah bagian penting — jangan dilewat karena "sudah hampir selesai".
"Saya pernah lihat developer yang copy-paste kode AI tanpa review dan deploy ke production. Hasilnya? Bug yang sangat memalukan karena error handling-nya kosong."
"Over-reliance: kalau kamu tidak bisa debug tanpa AI, itu tanda kamu perlu balik ke basics. AI adalah multiplier — dia tidak bisa multiply nol."
"Testing: AI bisa generate unit test juga, tapi tetap kamu yang harus pastikan test-nya meaningful, bukan hanya coverage palsu."
Pesan inti: "Pakai AI dengan sadar — bukan dengan buta."
-->

---

## 🧠 AI as a Tutor

> "Explain useEffect to me like I'm a junior developer just learning React. Give me a real-world example."

→ **AI is infinitely patient — it can explain the same thing in different ways**

<!--
TIMING: 2 menit

SPEAKER NOTES (Bahasa Indonesia):
"Peran pertama AI yang paling berguna untuk belajar React: sebagai tutor."
"AI sabar tanpa batas, bisa dijelaskan berkali-kali dengan cara berbeda."
"Kalau penjelasan pertama tidak masuk, minta ulang dengan analogi lain — AI tidak pernah kesal."
-->

---

## 🧠 AI as a Review & Debug Partner

**Review:**

> "Review this code: what can be improved for performance and React best practices?"

**Debug:**

> "This code fetches data from an API but causes an infinite loop. Help me debug."

<!--
TIMING: 3 menit

SPEAKER NOTES (Bahasa Indonesia):
"Peran kedua: review partner. Ini yang sering tidak dilakukan developer — minta AI review kode sebelum PR. Sangat efektif untuk menemukan masalah yang tidak kita sadari."
"Peran ketiga: debugging partner. Deskripsikan masalahnya, tunjukkan kodenya, tanyakan hipotesis. AI sangat baik untuk rubber duck debugging yang interaktif."
-->

---

## 🗺️ React Learning Roadmap

| Week 1-2 | Week 3-4 | Month 2 | Month 3+ |
|----------|----------|---------|----------|
| JSX & Components | State & Props | React Router & API | React Native |

**AI helps at every stage**

→ **Consistent 1 hour/day beats an 8-hour marathon once a week**

<!--
TIMING: 4 menit

SPEAKER NOTES (Bahasa Indonesia):
"Ini peta jalan yang realistis. Bukan yang tercepat, tapi yang paling sustainable."
"Minggu 1-2: jangan loncat ke hal-hal advanced dulu. Komponen dan JSX dulu sampai benar-benar nyaman."
"AI bisa membantu di setiap tahap — tapi kamu yang tentukan pace-nya."
"Tip: setiap hari coba build satu hal kecil. Counter, form, todo list. Small wins yang compound."
Realistis: "Belajar React butuh waktu. Tapi dengan AI sebagai learning partner, kurva belajarnya jauh lebih landai dari 5 tahun lalu."
-->

---

## 💡 Key Takeaways

1. 🧩 **React** is a worthy foundation — web + mobile, mature ecosystem
2. ⚛️ **Components + State + Props** are the core you must master
3. 🤖 **AI** removes friction, but is not a substitute for understanding
4. 💬 **Good prompts** = accurate results = time saved
5. 🔁 **Review, review, review** — never skip this step

→ **Start today. One component. One prompt. One step.**

<!--
TIMING: 5 menit

SPEAKER NOTES (Bahasa Indonesia):
"Lima poin ini adalah inti dari semua yang kita pelajari hari ini."
Walk through setiap poin dengan singkat — ini bukan pengulangan, ini reinforcement.
"Yang paling penting dari semuanya adalah poin terakhir: mulai. Bukan besok. Bukan setelah selesai nonton tutorial 10 jam. Sekarang."
"Buka Vite, buka AI tool favorit kalian, dan build satu komponen kecil malam ini."
"Setiap developer senior yang kalian kagumi pernah ada di posisi yang sama — tidak tahu apa-apa. Perbedaannya hanya: mereka mulai."
-->

---

## 🚀 First Steps Tonight

**Quick wins (each < 30 minutes):**

- ✅ Set up a React project with Vite: `npm create vite@latest`
- ✅ Build your first component: a simple `Button` or `Card`
- ✅ Try one prompt to ChatGPT/Copilot for React
- ✅ Bookmark: [react.dev](https://react.dev) and [vitejs.dev](https://vitejs.dev)
- ✅ Join a community: ReactID, Kelas Terbuka, or Dicoding

→ **Pick 2-3 to do tonight**

<!--
TIMING: 3 menit

SPEAKER NOTES (Bahasa Indonesia):
"Ini bukan daftar yang harus kalian selesaikan semua. Pilih 2-3 yang paling feasible malam ini."
"React.dev adalah dokumentasi resmi yang sangat bagus — interactive, ada playground, ada step-by-step tutorial."
"Join komunitas itu penting — karena learning alone itu susah. Ada orang lain yang struggle dengan hal yang sama dan bisa saling bantu."
Call to action: "Raise your hand kalau mau commit untuk build satu React component malam ini."
-->

---

## 🙏 Thank You!

**Zain Fathoni** · [zainfathoni.com](https://zainfathoni.com)

🔗 **Slides:** [zainf.dev/react-with-ai-assistance](https://zainf.dev/react-with-ai-assistance)

![w:200](assets/react-with-ai-assistance-qr.png)

💡 *"The best time to start learning React was 5 years ago. The second best time is now — with AI by your side."*

<!--
TIMING: 3 menit

SPEAKER NOTES (Bahasa Indonesia):
"Terima kasih sudah meluangkan waktu di bulan Ramadan yang penuh berkah ini untuk belajar bersama."
"QR code ini akan bawa kalian langsung ke slide presentasi ini — bisa diakses kapan saja, termasuk untuk review materi tadi."
"Kalau ada pertanyaan yang tidak sempat ditanyakan, kalian bisa reach out lewat link di slide."
"Selamat coding, selamat berpuasa, dan semoga ilmu yang kita dapat hari ini bermanfaat. Wassalamualaikum."
-->
