const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let enterPass = prompt("Введите пароль");
console.log(enterPass);
if (enterPass === null) {
  message = "Отменено пользователем";
} else if (enterPass === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
