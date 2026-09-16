import { fetchProducts } from "./api.js";
import { state } from "./state.js";
import { 
  renderProducts, 
  renderStatistics, 
  renderCategoryOptions, 
  renderStatus 
} from "./ui.js";
import { 
  sortProducts, 
  getStatistics, 
  searchProducts 
} from "./algorithms.js";

// Pipeline Filter & Render Utama
function render() {
  let result = [...state.products];

  // 1. Filter Search (Keyword)
  if (state.search) {
    result = searchProducts(result, state.search, "partial");
  }

  // 2. Filter Category
  if (state.category !== "all") {
    result = result.filter(p => p.category === state.category);
  }

  // 3. Sorting
  if (state.sortBy !== "default") {
    result = sortProducts(result, state.sortBy);
  }

  // Check jika hasil filter kosong
  if (result.length === 0) {
    renderStatus("empty");
  } else {
    renderStatus("success");
    renderProducts(result);
  }

  // Update Statistik berdasarkan data yang sedang tampil (atau seluruh data)
  const currentStats = getStatistics(result);
  renderStatistics(currentStats);
}

// Inisialisasi Aplikasi Utama
async function initApp() {
  try {
    renderStatus("loading");
    
    // Fetch Data dari DummyJSON
    const data = await fetchProducts();
    state.products = data;
    state.status = "success";

    // Buat daftar kategori unik menggunakan Set (Bagian 11)
    const uniqueCategories = [...new Set(data.map(p => p.category))];
    renderCategoryOptions(uniqueCategories);

    // Render awal
    render();

  } catch (error) {
    state.status = "error";
    renderStatus("error", error.message);
  }
}

// Event Listeners setup
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

// Jalankan aplikasi
initApp();