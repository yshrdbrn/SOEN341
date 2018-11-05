const User = require('./user');

class Registry {
    constructor() {
        this.userList = [];
        this.activeUsers = [];
        this.idGen = 0;
    }

    addNewClient(info) {
        info.id = this.idGen;
        this.idGen++;
        let user = new User(info);
        this.userList.push(user);
    }

    addNewAdmin(info) {
        info.id = this.idGen;
        this.idGen++;
        let user = new User(info);
        user.setAdmin(true);
        this.userList.push(user);
    }

    isAdmin(user) {
        return 
    }

}

module.exports = Registry;