const Registry = require('../model/registry');
const ItemCatalog = require('../model/itemCatalog');

class Console {
    constructor() {
        this.registry = new Registry();
        this.itemCatalog = new ItemCatalog();
    }

    login(user) { this.registry.login(user); }

    logout(user) { if (user) this.registry.logout(user); }

    addNewAdmin(info) { return this.registry.addNewAdmin(info); }

    registerClient(info) { return this.registry.addNewClient(info); }

    getUsersList() { return this.registry.getUsersList(); }

    getUserWithCredentials(username, password) { return this.registry.getUserWithCredentials(username, password); }

    findUser(id) { return this.registry.findUser(id); }

    addItem(info) { this.itemCatalog.addItem(info); }

    removeItem(id) { this.itemCatalog.removeItem(id); }

    modifyItem(id, info) { this.itemCatalog.modifyItem(id, info); }

    allItems() { return this.itemCatalog.allItems(); }

    getItem(id) {return this.itemCatalog.getItem(id); }
}

module.exports = new Console();