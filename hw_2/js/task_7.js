const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const isLoginValid = (login) => {
  return login.length > 3 && login.length <= 16;
};

const isLoginUnique = (allLogins, login) => {
  return allLogins.includes(login);
};

const addLogin = (allLogins, login) => {
  if (!isLoginValid(login)) {
    return "Помилка, логін має бути 4-16 символів!";
  }
  if (!isLoginUnique(allLogins, login)) {
    return "Цей логін вже існує";
  };
console.log(addLogin(logins, "Ajax")); //'Логін додано!'
console.log(addLogin(logins, "robotGoogles")); //'Цей логін вже існує'
console.log(addLogin(logins, "Zod")); //'Помилка, логін має бути 4-16 символів!'
console.log(addLogin(logins, "jqueryisextremelyfast")); //'Помилка, логін має бути 4-16 символів!'