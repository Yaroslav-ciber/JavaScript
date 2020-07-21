let credits = 23580;
const pricePerDroid = 3000;
let countDroid = +prompt("Сколько дроидов готови купить?");
if (countDroid === null) {
  console.log("Отменено пользователем!");
} else {
  let totalPrice = pricePerDroid * countDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    credits = credits - totalPrice;
    // credits-=totalPrice;
    console.log(
      `Вы купили ${countDroid} дроидов, на счету осталось ${credits} кредитов.`
    );
  }
}
