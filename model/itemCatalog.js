const Item = require('./item');
const DataMapper = require('./dataMapper');

class ItemCatalog {
    constructor() {
        this.dataMapper = new DataMapper();
    }

    addItem(info, callback) {
        this.dataMapper.insertItem(info, callback);
    }

    removeItem(id, callback) {
        this.dataMapper.deleteItem(id, callback);
    }

    modifyItem(id, info, callback) {
        this.dataMapper.modifyItem(id, info, callback);
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