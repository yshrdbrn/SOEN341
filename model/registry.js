const User = require('./user');
const DataMapper = require('./dataMapper');

class Registry {
    constructor() {
        this.userList = [];
        this.activeUsers = [];
        this.idGen = 0;
        this.dataMapper = new DataMapper();

        let info = {
            username: 'yashar',
            password: '123',
            email: '123@gmail.com'
        };
        this.addNewAdmin(info);
    }

    addNewClient(info) {
        info[isadmin] = false;
        
        this.dataMapper.insertUser(info);

        // TODO: Check if user already exists

        // for (var i = 0; i < this.userList.length;i++) {
        //     if(info.username == this.userList[i].username) { 
        //         return false;
        //     }
        // }

        // info.id = this.idGen;
        // this.idGen++;
        // let user = new User(info);
        // this.userList.push(user);

        return true;
    }

    addNewAdmin(info) {
        for (var i = 0; i < this.userList.length;i++) {
            if(info.username == this.userList[i].username) { 
                return false;
                }
        }

        info.id = this.idGen;
        this.idGen++;
        let user = new User(info);
        user.isAdmin = true;
        this.userList.push(user);
        return true;
    }

    isAdmin(user) {
        return user.isAdmin
    }

    findUser(id) {
        // console.log("length of array:")
        // console.log(this.userList.length);
        for (var i = 0; i < this.userList.length; i++) {
            // console.log(id);
            // console.log(this.userList[i].id);
            if (this.userList[i].id == id)
                return this.userList[i];
        }
    }

    getUserWithCredentials(username, password) {
        // console.log("******");
        // console.log(this.userList.length);
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList[i].username == username &&
                this.userList[i].password == password) {
                    // console.log("hello");
                return this.userList[i];
            }
        }
        return null;
    }

    getUsersList(callback) {
        //return this.activeUsers;
        this.dataMapper.selectAllUsers(callback);
    }

    login(user) {
        this.activeUsers.push(user);
    }

    logout(user) {
        let index = this.activeUsers.indexOf(user);
        if (index != -1) this.activeUsers.splice(index, 1);
    }
}

module.exports = Registry;