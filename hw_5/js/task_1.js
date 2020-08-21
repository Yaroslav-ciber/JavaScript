// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// const Account = function ({ login, email }) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function () {
//   console.log(`login: ${this.login}, email: ${this.email}`);
// };
// console.log(Account.prototype.getInfo); // function

// const zexus = new Account({
//   login: "Zexus",
//   email: "zexus@com",
// });

// zexus.getInfo();

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// const mango = new Account({
//   login: "mangodog",
//   email: "mangodog@com",
// });
// mango.getInfo();

// const stryter = new Account({
//   login: "stryter",
//   email: "stryter_salo@com.salo",
// });
// stryter.getInfo();
///////////////////////////////////////////////////////////////


const Account = function ({login,email}){
    this.login = login;
    this.email = email;
};
Account.prototype.getInfo = function(){
    console.log(`login: ${this.login}, email: ${this.email}`)
};
console.log(Account.prototype.getInfo);

const tryer = new Account({
    login: "tryer",
    email : "Try@com"
});
tryer.getInfo();

