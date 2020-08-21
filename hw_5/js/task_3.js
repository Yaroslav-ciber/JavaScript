class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    let ind = this.items.findIndex((obj) => {
      return obj === item;
    });
    if (ind !== -1) {
      this.items.splice(ind, 1);
    }
  }
}
const storage = new Storage([
  "Nanotoids",
  "Prolonger",
  "Zeleznie gupy",
  "Antigravitator",
]);

const items = storage.getItems();
console.table(items);

storage.addItem("Droid");
console.table(storage.items);

storage.removeItem('Prolonger');
console.table(storage.items);
