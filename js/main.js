// 1. IMPORT MODUL
import { fetchProducts } from "./api.js";
import { state } from "./state.js";
import { renderProducts } from "./ui.js";
import { 
  sortProducts, 
  getStatistics, 
  getCategoryAnalytics, 
  searchProducts 
} from "./algorithms.js";

// 2. FUNGSI RENDER UTAMA
function render() {
  let result = [...state.products];

  if (state.search) {
    result = searchProducts(result, state.search, "partial");
  }

  if (state.category !== "all") {
    result = result.filter(p => p.category === state.category);
  }

  if (state.sortBy !== "default") {
    result = sortProducts(result, state.sortBy);
  }

  renderProducts(result);
}

// 3. BAGIAN 22: CONTOH PROMISE
const contohPromise = new Promise((resolve, reject) => {
  const berhasil = true; 
  if (berhasil) resolve("Data berhasil diambil");
  else reject("Terjadi error");
});

contohPromise
  .then(result => console.log("Promise berhasil:", result))
  .catch(error => console.error("Promise gagal:", error))
  .finally(() => console.log("Promise selesai, apa pun hasilnya"));

// 4. BAGIAN 23, 24, & 25: ASYNC/AWAIT & FETCH API DUMMYJSON
async function loadProducts() {
  try {
    console.log("Mulai mengambil data produk...");
    state.status = "loading";

    // Bagian 24: Fetch data asli dari DummyJSON
    const data = await fetchProducts();
    state.products = data;
    state.status = "success";

    // Bagian 25: Pengolahan & Statistik Data API
    console.log("=== 25.1 Product Statistics ===", getStatistics(state.products));
    console.log("=== 25.2 Category Analytics ===", getCategoryAnalytics(state.products));
    console.log("=== 25.3 Search 'phone' ===", searchProducts(state.products, "phone", "partial"));

    // Render data produk ke layar
    render();

  } catch (error) {
    state.status = "error";
    console.error("Gagal mengambil data produk:", error);
  } finally {
    console.log("Proses loadProducts selesai");
  }
}

// 5. EVENT LISTENERS (BAGIAN 19)
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

// 6. JALANKAN APLIKASI
loadProducts();