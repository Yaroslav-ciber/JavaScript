let country = prompt("Enter your country").toLowerCase();
let china = 100;
let chili = 250;
let australia = 170;
let india = 80;
let jamaica = 120;
switch (country) {
  case "китай":
    console.log(`Доставка в ${country} будет стоить ${china} кредитов`);
    break;

  case "чили":
    console.log(`Доставка в ${country} будет стоить ${chili} кредитов`);
    break;

  case "австралия":
    console.log(`Доставка в ${country} будет стоить ${australia} кредитов`);
    break;

  case "индия":
    console.log(`Доставка в ${country} будет стоить ${india} кредитов`);
    break;

  case "ямайка":
    console.log(`Доставка в ${country} будет стоить ${jamaica} кредитов`);
    break;

  default:
    console.log("В вашей стране доставка не доступна");
    break;
}
