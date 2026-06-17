export class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  showItems() {
    console.log(this.items);
  }
}