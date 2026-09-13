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

//bagian 6

//latihan 6.1
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

//latihan 6.2
function linearSearchProductById(products, id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) return i; 
  }
  return -1;
}

const searchNumbers = [10, 25, 3, 47, 8];
console.log("Index angka 47:", linearSearch(searchNumbers, 47));
console.log("Index angka 99 (tidak ada):", linearSearch(searchNumbers, 99));

console.log("Index produk id 4:", linearSearchProductById(products, 4));
console.log("Index produk id 99 (tidak ada):", linearSearchProductById(products, 99));

//bagian 7
function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedArray[mid] === target) return mid;
    if (sortedArray[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
//latihan 7.2
function binarySearchByPrice(sortedProducts, targetPrice) {
  let left = 0;
  let right = sortedProducts.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedProducts[mid].price === targetPrice) return mid;
    if (sortedProducts[mid].price < targetPrice) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
return -1;
}

const sortedNumbers = [3, 8, 10, 25, 47]; 
console.log("Index angka 25:", binarySearch(sortedNumbers, 25));
console.log("Index angka 99 (tidak ada):", binarySearch(sortedNumbers, 99));

const sortedProducts = [...products].sort((a, b) => a.price - b.price);
console.log("Produk terurut by price:", sortedProducts.map(p => p.title + ": " + p.price));
console.log("Index harga 800:", binarySearchByPrice(sortedProducts, 800));

//bagian 8
const numbers = [5, 3, 8, 1];
const ascending = [...numbers].sort((a, b) => a - b);
const descending = [...numbers].sort((a, b) => b - a);

//latihan 8.1
function bubbleSort(numbers) {
  const arr = [...numbers]; 
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
      }
    }
  }
  return arr;
}

//latihan 8.2
function sortProducts(products, sortBy) {
  const sorted = [...products]; // salin dulu, jangan ubah array asli

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "title":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return sorted;
  }
}

console.log("Ascending:", ascending);
console.log("Descending:", descending);
console.log("Bubble sort:", bubbleSort(numbers));
console.log("Array asli (numbers) tidak berubah:", numbers);

console.log("Produk by price-asc:", sortProducts(products, "price-asc").map(p => p.title + ": " + p.price));
console.log("Produk by rating:", sortProducts(products, "rating").map(p => p.title + ": " + p.rating));
console.log("Produk by title:", sortProducts(products, "title").map(p => p.title));

//bagian 9 grouping dan aggregation 

//latihan 9.1
function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}
const grouped = groupByCategory(products);
console.log("Hasil grouping:", grouped);

//latihan 9.2
function summarizeByCategory(products) {
  const grouped = groupByCategory(products);
  const summary = []

  for (const category in grouped) {
    summary.push ({
      category: category,
      jumlahProduk: grouped[category].length
    });
  }
return summary;
}
const summary = summarizeByCategory(products);
console.log("\nRingkasan per kategory:");
console.table(summary);

//bagian 10 frequency counting

//latihan 10.1
function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) +1;
    return counts;
  }, {});
}

//latihan 10.2
//frekkuensi category
function getCategoryFrequency(products) {
  const categories = products.map(p => p.category);
  return countFrequency(categories);
}
//frekuensi tags menggunakan flatMap dari bagian 3-4
function getTagFrequency(products) {
  const allTags = products.flatMap(p => p.tags);
  return countFrequency(allTags);
}

//frekuensi rating
function getRatingFrequency(products) {
  const roundedRatings = products.map(p => Math.round(p.rating));
  return countFrequency(roundedRatings);
}

const words = ["laptop", "phone", "laptop", "tablet", "phone", "laptop"];
console.log("Frekuensi kata:", countFrequency(words));

console.log("\nFrekuensi category:", getCategoryFrequency(products));
console.log("Frekuensi tags:", getTagFrequency(productsNested));
console.log("Frekuensi rating (dibulatkan):", getRatingFrequency(products));

// latihan 11

//latihan 11.1 mendapatkan unique category, unique brand, dan unique tags
function getUniqueCategories(products) {
  return [...new Set(products.map(p => p.category))];
}

function getUniqueTags(products) {
  return [...new Set(products.flatMap(p => p.tags))];
}
console.log("Unique categories:", getUniqueCategories(products));
console.log("Unique tags:", getUniqueTags(productsNested));

//latihan 12 buildProductLookup
function buildProductLookup(products) {
  const productMap = new Map();
  for (const product of products) {
    productMap.set(product.id, product);
  }
  return productMap;
}

const productLookup = buildProductLookup(products);

console.log("Cari produk id 3 pakai Map.get():", productLookup.get(3));
console.log("Jumlah produk di Map (size):", productLookup.size);
console.log("Apakah ada produk id 10?", productLookup.has(10));


//bagian 13 stack

// latihan 13.1
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// latihan 13.2
const searchHistory = new Stack();

function recordSearch(keyword) {
  searchHistory.push(keyword);
}

function undoSearch() {
  if (searchHistory.isEmpty()) {
    return "Tidak ada riwayat pencarian";
  }
  return searchHistory.pop();
}

recordSearch("laptop");
recordSearch("phone");
recordSearch("tablet");

console.log("Item paling atas (peek):", searchHistory.peek());
console.log("Undo search:", undoSearch()); 
console.log("Undo search lagi:", undoSearch());
console.log("Undo search lagi:", undoSearch());
console.log("Undo search lagi (kosong):", undoSearch());

//bagian 14 queue

//latihan14.1
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }
 peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const customerQueue = new Queue();

customerQueue.enqueue("Andi");
customerQueue.enqueue("Budi");
customerQueue.enqueue("Citra");

console.log("Antrean paling depan (peek):", customerQueue.peek());
console.log("Dilayani:", customerQueue.dequeue()); 
console.log("Dilayani:", customerQueue.dequeue());
console.log("Dilayani:", customerQueue.dequeue());
console.log("Antrean kosong?", customerQueue.isEmpty());

//bagian 15 recursion

function countdown(n) {
  if (n <= 0) {
    console.log("Selesai");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

//latihan 15.1
const categories = [
  {
    name: "Electronics",
    children: [
      {
        name: "Laptop",
        children: [
          { name: "Gaming Laptop", children: [] },
          { name: "Ultrabook", children: [] }
        ]
      },
      { name: "Phone", children: [] }
    ]
  },
  { name: "Fashion", children: [] }
];

function printCategories(categories, depth = 0) {
  for (const category of categories) {
    console.log(" ".repeat(depth * 2) + category.name);
    if (category.children.length > 0) {
      printCategories(category.children, depth + 1);
    }
  }
}

console.log("--- Countdown ---");
countdown(5);

console.log("\n--- Print Categories ---");
printCategories(categories);

//bagian 16  Algorithm Complexity (Big-O)
//latihan 16.1

function linearSearchCountSteps(array, target) {
  let steps = 0;
  for (let i = 0; i < array.length; i++) {
    steps++;
    if (array[i] === target) return { index: i, steps };
  }
  return { index: -1, steps };
}
function binarySearchCountSteps(sortedArray, target) {
  let steps = 0;
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    steps++;
    const mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === target) return { index: mid, steps };
    if (sortedArray[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return { index: -1, steps };
}

// buat array besar
const largeSortedArray = Array.from({ length: 10000 }, (_, i) => i); // [0, 1, 2, ..., 9999]

//latihan 16.2
function groupByCategoryNestedLoop(products) {
  const uniqueCategories = [];
  for (const product of products) {
    let found = false;
    for (const cat of uniqueCategories) {
      if (cat === product.category) {
        found = true;
        break;
      }
    }
    if (!found) uniqueCategories.push(product.category);
  }
   return uniqueCategories;
}

function groupByCategoryWithMap(products) {
  const categoryMap = new Map();
  for (const product of products) {
    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, true);
    }
  }
  return [...categoryMap.keys()];
}

console.log("Linear search (target di akhir):", linearSearchCountSteps(largeSortedArray, 9999));
console.log("Binary search (target di akhir):", binarySearchCountSteps(largeSortedArray, 9999));

const largeProducts = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  category: `category-${i % 20}` // 20 kategori berbeda, diulang-ulang
}));

const start1 = performance.now();
groupByCategoryNestedLoop(largeProducts);
const end1 = performance.now();

const start2 = performance.now();
groupByCategoryWithMap(largeProducts);
const end2 = performance.now();

console.log(`\nNested loop: ${(end1 - start1).toFixed(4)} ms`);
console.log(`Map-based: ${(end2 - start2).toFixed(4)} ms`);



