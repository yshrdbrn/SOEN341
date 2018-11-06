const User = require('./user');

class Registry {
    constructor() {
        this.userList = [];
        this.activeUsers = [];
        this.idGen = 0;

        let info = {
            username: 'yashar',
            password: '123',
        };
        this.addNewAdmin(info);
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

    findUser(id) {
        console.log("length of array:")
        console.log(this.userList.length);
        for (var i = 0; i < this.userList.length; i++) {
            console.log(id);
            console.log(this.userList[i].id);
            if (this.userList[i].id == id)
                return this.userList[i];
        }
    }

    getUserWithCredentials(username, password) {
        console.log("******");
        console.log(this.userList.length);
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList[i].username == username &&
                this.userList[i].password == password) {
                    console.log("hello");
                return this.userList[i];
            }
        }
        return null;
    }

}

module.exports = Registry;