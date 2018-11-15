const Item = require('./item');

class ItemCatalog {
    constructor() {
        this.items = [];

        this.idGen = 1;

        let info = {
            itemType: 'Book',
            title: 'hello',
            author: 'yashar'
        };
        this.addItem(info);
        let info2 = {
            itemType: 'Movie',
            director: 'hahaha',
            actors: 'SOEN 341'
        };
        this.addItem(info2);
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

    getItem(id) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                return this.items[i];
            }
        }
    }
}

module.exports = ItemCatalog;