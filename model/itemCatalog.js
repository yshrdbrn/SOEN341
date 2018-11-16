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
        this.dataMapper.updateItem(id, info, callback);
    }

    allItems(callback) {
        this.dataMapper.getAllItems(callback);
    }

    getItem(id, callback) {
        this.dataMapper.getItem(id, callback);
    }
}

module.exports = ItemCatalog;