// --- SEARCHING ---
export function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

export function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === target) return mid;
    if (sortedArray[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// --- SORTING ---
export function bubbleSort(numbers) {
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

export function sortProducts(products, sortBy) {
  const sorted = [...products];
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

// --- GROUPING & AGGREGATION ---
export function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}

// --- BAGIAN 25.1: STATISTICS ---
export function getStatistics(products) {
  if (!products || products.length === 0) return null;

  const prices = products.map(p => p.price);
  const ratings = products.map(p => p.rating ?? 0);
  const stocks = products.map(p => p.stock ?? 0);

  const totalProducts = products.length;
  const averagePrice = prices.reduce((a, b) => a + b, 0) / totalProducts;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const totalStock = stocks.reduce((a, b) => a + b, 0);
  const averageRating = ratings.reduce((a, b) => a + b, 0) / totalProducts;

  return { totalProducts, averagePrice, highestPrice, lowestPrice, totalStock, averageRating };
}

// --- BAGIAN 25.2: CATEGORY ANALYTICS ---
export function getCategoryAnalytics(products) {
  const groups = products.reduce((acc, product) => {
    const cat = product.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(product);
    return acc;
  }, {});

  const analytics = {};
  for (const category in groups) {
    const list = groups[category];
    const totalProducts = list.length;
    const avgPrice = list.reduce((sum, p) => sum + p.price, 0) / totalProducts;
    const avgRating = list.reduce((sum, p) => sum + p.rating, 0) / totalProducts;
    const totalStock = list.reduce((sum, p) => sum + p.stock, 0);

    analytics[category] = {
      totalProducts,
      averagePrice: avgPrice,
      averageRating: avgRating,
      totalStock
    };
  }

  return analytics;
}

// --- BAGIAN 25.3: PRODUCT SEARCH 3 MODE ---
export function searchProducts(products, keyword, mode = "partial") {
  if (!keyword) return products;

  switch (mode) {
    case "exact":
      return products.filter(p => p.title === keyword);

    case "case-insensitive":
      return products.filter(p => p.title.toLowerCase() === keyword.toLowerCase());

    case "partial":
    default:
      const lower = keyword.toLowerCase();
      return products.filter(p => p.title.toLowerCase().includes(lower));
  }
}

// --- FREQUENCY & LOOKUP ---
export function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

export function buildProductLookup(products) {
  const productMap = new Map();
  for (const product of products) {
    productMap.set(product.id, product);
  }
  return productMap;
}

// --- STACK & QUEUE ---
export class Stack {
  constructor() { this.items = []; }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
}

export class Queue {
  constructor() { this.items = []; }
  enqueue(item) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
  peek() { return this.items[0]; }
  isEmpty() { return this.items.length === 0; }
}

// --- RECURSION ---
export function printCategories(categories, depth = 0) {
  for (const category of categories) {
    console.log(" ".repeat(depth * 2) + category.name);
    if (category.children.length > 0) {
      printCategories(category.children, depth + 1);
    }
  }
}