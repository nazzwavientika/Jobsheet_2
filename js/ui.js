// Render daftar produk ke DOM (lengkap dengan image, title, price, category, rating, stock)
export function renderProducts(products) {
  const container = document.querySelector("#product-list");
  if (!container) return;
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.thumbnail || 'https://via.placeholder.com/150'}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p><strong>Kategori:</strong> ${product.category}</p>
      <p><strong>Harga:</strong> $${product.price}</p>
      <p><strong>Rating:</strong> ${product.rating} ★</p>
      <p><strong>Stok:</strong> ${product.stock}</p>
    `;
    container.append(card);
  });
}

// Render Statistics Bar ke UI
export function renderStatistics(stats) {
  if (!stats) return;
  document.querySelector("#stat-total-products").textContent = stats.totalProducts;
  document.querySelector("#stat-avg-price").textContent = stats.averagePrice.toFixed(2);
  document.querySelector("#stat-total-stock").textContent = stats.totalStock;
  document.querySelector("#stat-avg-rating").textContent = stats.averageRating.toFixed(2);
}

// Populate pilihan dropdown kategori secara dinamis menggunakan Set
export function renderCategoryOptions(categories) {
  const select = document.querySelector("#category-select");
  if (!select) return;

  // Reset opsi, sisakan 'Semua Kategori'
  select.innerHTML = '<option value="all">Semua Kategori</option>';
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    select.append(option);
  });
}

// Menangani tampilan status UI (idle, loading, success, error, empty)
export function renderStatus(status, message = "") {
  const statusEl = document.querySelector("#status-message");
  const container = document.querySelector("#product-list");
  if (!statusEl) return;

  statusEl.className = "status-msg";

  switch (status) {
    case "loading":
      statusEl.textContent = "⏳ Memuat data produk dari server...";
      if (container) container.innerHTML = "";
      break;
    case "error":
      statusEl.textContent = `❌ Terjadi kesalahan: ${message}`;
      statusEl.classList.add("error");
      break;
    case "empty":
      statusEl.textContent = "🔍 Tidak ada produk yang sesuai dengan pencarian/filter.";
      if (container) container.innerHTML = "";
      break;
    case "success":
      statusEl.textContent = "";
      break;
    default:
      statusEl.textContent = "";
  }
}