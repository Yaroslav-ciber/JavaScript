
///////////////////////////////////////////////////////////

class User {
  constructor(user) {
    this.name = user.name;
    this.age = user.age;
    this.follovers = user.follovers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.follovers} follovers`
    );
  }
}
const mango = new User({
  name: "Mango",
  age: "2",
  follovers: "20",
});
console.log(mango);
mango.getInfo();

const Polly = new User({
    name: 'Polly',
    age: '3',
    follovers: '17',
});
console.log(Polly);
Polly.getInfo();