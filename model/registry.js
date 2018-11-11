const User = require('./user');
const DataMapper = require('./dataMapper');

class Registry {
    constructor() {
        this.userList = [];
        this.activeUsers = [];
        this.idGen = 0;
        this.dataMapper = new DataMapper();

        let info = {
            email: 'yashar',
            password: '123',

        };
        //console.log(info);
        //this.addNewAdmin(info);
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
        // for (var i = 0; i < this.userList.length;i++) {
        //     if(info.username == this.userList[i].username) {
        //         return false;
        //         }
        // }

        info.id = this.idGen;
        this.idGen++;
        let user = new User(info);
        user.isadmin = true;
        this.userList.push(user);
        //console.log(user);
        return true;
    }

    isAdmin(user) {
        return user.isadmin;
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

    getUserWithCredentials(email, password,callback) {
      var that = this;
        this.dataMapper.findUser(email,password,function(user){
          if(email == user.email && password == user.password){
          console.log(user);
          that.userList.push(user);
            callback(user);
          }else{
            callback(false);
          }
          //console.log(user);
        });

    }

    getUsersList() {
        return this.activeUsers;
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
