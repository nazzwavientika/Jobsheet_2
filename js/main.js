import { state } from "./state.js";
import { renderProducts } from "./ui.js";
import { sortProducts, getStatistics } from "./algorithms.js";

// Fungsi render utama yang memantau State
function render() {
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

  renderProducts(result);
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

// Jalankan render awal
render();
console.log("Statistik awal:", getStatistics(state.products));