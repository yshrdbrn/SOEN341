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
        return this.registry.getUsersList();
    }

    getUserWithCredentials(username, password) {
        return this.registry.getUserWithCredentials(username, password);
    }

    findUser(id) {
        return this.registry.findUser(id);
    }

    login(user) {
        this.registry.login(user);
    }

    logout(user) {
        if (user) this.registry.logout(user);
    }
}

module.exports = new Console();