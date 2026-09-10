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
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Mouse", price: 20, category: "accessories", stock: 50 },
  { id: 5, title: "Monitor", price: 300, category: "electronics", stock: 8 }
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
