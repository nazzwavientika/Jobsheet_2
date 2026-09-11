function calculateDiscountedPrice (price, discountPercent){
    return price - (price * discountPercent) /100;
}
console.log (calculateDiscountedPrice(1000, 10));

const cart = [
  { title: "Laptop", price: 1000, discountPercent: 10 },
  { title: "Mouse", price: 20, discountPercent: 5 },
  { title: "Keyboard", price: 50, discountPercent: 0 }
];

function applyDiscounts(cart) {
    const result = [];
    for (const item of cart) {
    const finalPrice = calculateDiscountedPrice (item.price, item.discountPercent);
    result.push ({...item, finalPrice});   
    }

    return result;
}
console.log(applyDiscounts(cart));

//bagian 2

const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5, rating: 4.5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15, rating: 4.2 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3, rating: 3.8 },
  { id: 4, title: "Mouse", price: 20, category: "accessories", stock: 50, rating: 4.0 },
  { id: 5, title: "Monitor", price: 300, category: "electronics", stock: 8, rating: 4.6 }
];

//latihan 2.1
function findProductById(products, id){
    return products.find(p => p.id === id);
}


//latihan 2.2
function getLowStockProducts(products){
    return products.filter(p => p.stock < 10);
}

//latihan 2.3
function updateStock(products, id, newStock) {
    return products.map(p =>
        p.id === id ? {...p, stock: newStock } : p
    );
}
console.log(findProductById(products, 3));
console.log(getLowStockProducts(products));
console.log(updateStock(products, 1, 20));

//bagian 3
const productsNested = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];

//no.1
function getAllTags(products) {
    return products.map(p => p.tags);
}
console.log("1. semua tags:", getAllTags(productsNested));

//no.2
function findProductsByTag(products, tag) {
    return products.filter(p => p.tags.includes(tag));
}
console.log("2. product dengan tag 'electronics':", findProductsByTag(productsNested, "electronics"));

//no.3
function getReviewCounts(products){
    return products.map(p => ({
        id: p.id,
        title: p.title,
        totalReviews: p.reviews.length
    }));
}
console.log("3. Jumlah review per produk:", getReviewCounts(productsNested));

//no.4
function getFiveStarReviews(products){
    return products.flatMap(p => p.reviews.filter(r => r.rating === 5));
}
console.log("4. Review rating 5:", getFiveStarReviews(productsNested));

//no.5
function getAverageReviewRating(product) {
    const total = product.reviews.reduce((sum, r) => sum + r.rating, 0);
    return total / product.reviews.length;
}
console.log("5. Rata-rata rating Laptop:", getAverageReviewRating(productsNested[0]));

//no.6
function getMostReviewedProduct(products) {
  return products.reduce((maxProduct, current) =>
    current.reviews.length > maxProduct.reviews.length ? current : maxProduct
  );
}
console.log("6. Produk paling banyak direview:", getMostReviewedProduct(productsNested));

//no.7
function getAllReviewRatings(products) {
  return products.flatMap(p => p.reviews.map(r => r.rating));
}
console.log("7. Semua rating (flat):", getAllReviewRatings(productsNested));

//bagian 4

const tagsNested = [
  ["computer", "office"],
  ["electronics"],
  ["gaming", "computer"]
];

function getAllTagsFlat(products) {
  return products.flatMap(p => p.tags);
}

function getAllComments(products) {
  return products.flatMap(p => p.reviews.map(r => r.comment));
}
console.log("Pemanasan - flat():", tagsNested.flat());
console.log("4.1 - Semua tags (flatMap):", getAllTagsFlat(productsNested));
console.log("4.2 - Semua comment:", getAllComments(productsNested));

//bagian 5
const titles = products.map(p => p.title);
const expensiveProducts = products.filter(p => p.price > 500);
const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

//latihan 5.1
const laptopPrices = products
  .filter(p => p.category === "laptops")
  .map(p => p.price);

const avgLaptopPrice = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;

//latihan 5.2
function getStatistics(products) {
  const prices = products.map(p => p.price);
  const ratings = products.map(p => p.rating);

  const totalProducts = products.length;
  const averagePrice = prices.reduce((a, b) => a + b, 0) / totalProducts;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const averageRating = ratings.reduce((a, b) => a + b, 0) / totalProducts;

  return { totalProducts, averagePrice, highestPrice, lowestPrice, totalStock, averageRating };
}

console.log("Semua judul:", titles);
console.log("Produk mahal (>500):", expensiveProducts);
console.log("Total stok:", totalStock);
console.log("Rata-rata harga laptops:", avgLaptopPrice);
console.log("Statistik lengkap:", getStatistics(products));