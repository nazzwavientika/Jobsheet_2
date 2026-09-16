import { state } from "./state.js";
import { renderProducts } from "./ui.js";
import { sortProducts } from "./algorithms.js";
import { fetchProducts } from "./api.js";

// Fungsi render utama yang memantau State
function render() {
  const container = document.querySelector("#product-list");
  if (!container) return;

  if (state.status === "loading") {
    container.innerHTML = "<p>Memuat data...</p>";
    return;
  }

  if (state.status === "error") {
    container.innerHTML = "<p>Gagal memuat data. Silakan coba lagi.</p>";
    return;
  }

  let result = [...state.products];

  if (state.search) {
    result = result.filter(p =>
      p.title.toLowerCase().includes(state.search.toLowerCase())
    );
  }

  if (state.category !== "all") {
    result = result.filter(p => p.category === state.category);
  }

  if (state.sortBy !== "default") {
    result = sortProducts(result, state.sortBy);
  }

  if (result.length === 0) {
    container.innerHTML = "<p>Produk tidak ditemukan.</p>";
    return;
  }

  renderProducts(result);
}

// Bagian 24: mengambil data dari DummyJSON
async function loadProducts() {
  state.status = "loading";
  render();

  try {
    const products = await fetchProducts();
    state.products = products;
    state.status = "success";
  } catch (error) {
    state.status = "error";
  } finally {
    render();
  }
}

// Event Listeners (Bagian 19)
const searchInput = document.querySelector("#search-input");
const categorySelect = document.querySelector("#category-select");
const sortSelect = document.querySelector("#sort-select");

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
  });
}

if (categorySelect) {
  categorySelect.addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
  });
}

if (sortSelect) {
  sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    render();
  });
}

loadProducts();

