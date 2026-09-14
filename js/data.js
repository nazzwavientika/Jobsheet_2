export const cart = [
  { title: "Laptop", price: 1000, discountPercent: 10 },
  { title: "Mouse", price: 20, discountPercent: 5 },
  { title: "Keyboard", price: 50, discountPercent: 0 }
];

export const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5, rating: 4.5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15, rating: 4.2 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3, rating: 3.8 },
  { id: 4, title: "Mouse", price: 20, category: "accessories", stock: 50, rating: 4.0 },
  { id: 5, title: "Monitor", price: 300, category: "electronics", stock: 8, rating: 4.6 }
];

export const productsNested = [
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

export const categoriesData = [
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