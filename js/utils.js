export function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

export function sumPrices(...prices) {
  return prices.reduce((a, b) => a + b, 0);
}