let input;
let numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введіть число!");
  while (isNaN(Number(input))) {
    alert("Не коректний номер, спробуйте ще раз!");
    input = prompt("Введіть число!");
  }
  numbers.push(Number(input));
}
numbers.pop();

if (numbers.length) {
  for (let num of numbers) {
    total += num;
  }
  console.log(`Загальна сума = ${total}`);
}
else {
  console.log("Скасовано користувачем!");
}