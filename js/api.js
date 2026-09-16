export async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=30");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    throw error;
  }
}