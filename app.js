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

