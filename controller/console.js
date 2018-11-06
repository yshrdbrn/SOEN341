const Registry = require('../model/registry');

class Console {
    constructor() {
        this.registry = new Registry();
    }

    addNewAdmin(info) {
        return this.registry.addNewAdmin(info);
    }

    registerClient(info) {
        return this.registry.addNewClient(info);
    }

    getUsersList() {

    }

    getUserWithCredentials(username, password) {
        return this.registry.getUserWithCredentials(username, password);
    }

    findUser(id) {
        return this.registry.findUser(id);
    }
}

module.exports = new Console();