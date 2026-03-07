// Step 3 — Komponen ProductCard (dibuat dengan bantuan AI)
// Prompt: "Buat komponen React ProductCard yang menerima props: product (object) dan
// onAddToCart (function). Tampilkan gambar, nama, harga dalam format Rupiah, dan
// tombol 'Tambah ke Keranjang'. Gunakan inline style sederhana."

function ProductCard({ product, onAddToCart }) {
  const formatRupiah = (price) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: 8,
        overflow: "hidden",
        background: "#fff",
        transition: "box-shadow 0.2s",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: 160, objectFit: "cover" }}
      />
      <div style={{ padding: 16 }}>
        <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 600 }}>
          {product.name}
        </h3>
        <p style={{ color: "#64748b", margin: "0 0 12px", fontSize: 14 }}>
          {formatRupiah(product.price)}
        </p>
        <button
          onClick={() => onAddToCart(product)}
          style={{
            width: "100%",
            padding: "8px 16px",
            background: "#3b82f6",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
