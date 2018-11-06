const Item = require('./item');

class ItemCatalog {
    constructor() {
        this.items = [];

        this.idGen = 0;
    }

    addItem(info) {
        let item = new Item(this.idGen, info);
        this.idGen++;
        this.items.push(item);
    }

    removeItem(id) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                this.items.splice(i, 1);
            }
        }
    }

    modifyItem(id, info) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                this.items[i] = new Item(id, info);
            }
        }
    }

    allItems() {
        return this.items;
    }
}

module.exports = ItemCatalog;