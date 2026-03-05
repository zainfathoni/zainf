// Step 4 — State Management + CartSummary (dibuat dengan bantuan AI)
// Prompt: "Tambahkan state cart ke App.jsx menggunakan useState. Buat fungsi addToCart
// yang menambah produk ke cart (jika sudah ada, tambah quantity). Buat komponen
// CartSummary yang menampilkan jumlah item dan total harga."

import { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

function CartSummary({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const formatRupiah = (n) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <div
      style={{
        background: "#f0f9ff",
        border: "1px solid #bae6fd",
        padding: 16,
        borderRadius: 8,
        marginBottom: 24,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span style={{ fontSize: 24 }}>🛒</span>
      <span>
        <strong>{totalItems} item</strong> dipilih &nbsp;·&nbsp; Total:{" "}
        <strong style={{ color: "#0369a1" }}>{formatRupiah(total)}</strong>
      </span>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>🛍️ Mini Shop</h1>
      <p style={{ color: "#64748b", marginBottom: 24 }}>
        Demo live coding — Techrawih x ReactID
      </p>

      {cart.length > 0 && <CartSummary cart={cart} />}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 16,
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
