const Registry = require('../model/registry');

class Console {
    constructor() {
        this.registry = new Registry();
    }

    addNewAdmin(requester, info) {

    }

    registerClient(info) {
        this.registry.addNewClient(info);
    }

    getUsersList(requester) {

    }

    getUserWithCredentials(username, password) {
        return this.registry.getUserWithCredentials(username, password);
    }

    findUser(id) {
        return this.registry.findUser(id);
    }
}

module.exports = new Console();