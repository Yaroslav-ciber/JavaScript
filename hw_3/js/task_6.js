const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = (allProducts, productName) => {
  const res = allProducts.find((item) => {
    return item.name === productName;
  });
  return res ? res.price * res.quantity : null;
};

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Сканер")); // 8100

console.log(calculateTotalPrice(products, "Дроид")); // 2800

console.log(calculateTotalPrice(products, "Захват")); // 2400
