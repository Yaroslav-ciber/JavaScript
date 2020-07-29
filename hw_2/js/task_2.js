"use strict";
const calculateEngravingPrice = (message, pricePerWord) => {
  return message.split(" ").length * pricePerWord;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // price 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // price 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // price 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // price 120
