export async function fetchProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=30");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.products; // DummyJSON menyimpan array produk di dalam property .products
}