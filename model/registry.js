const User = require('./user');
const DataMapper = require('./dataMapper');

class Registry {
    constructor() {
        this.userList = [];
        this.activeUsers = [];
        this.idGen = 0;
        this.dataMapper = new DataMapper();
    }

    addNewClient(info,callback) {
        var user = new User(info);
        user.isadmin = false;
        var that = this;
        this.dataMapper.userExists(info.email,function(exists){
          if(exists){
            callback(false);
          }else{
           that.dataMapper.insertUser(user);
            callback(true);
          }
        });
    }

    addNewAdmin(info,callback) {
        var user = new User(info);
        user.isadmin = true;
        var that = this;
        this.dataMapper.userExists(info.email,function(exists){
          if(exists){
            callback(false);
          }else{
            that.dataMapper.insertUser(user);
            callback(true);
          }
        });
    }

    isAdmin(user) {
        return user.isadmin;
    }

    findUser(id) {
      for (var i = 0; i < this.userList.length; i++) {
          if (this.userList[i].id == id)
              return this.userList[i];
      }
    }

    getUserWithCredentials(email, password,callback) {
      var that = this;
        this.dataMapper.findUser(email,password,function(user){
          if(email == user.email && password == user.password){
          that.userList.push(user);
            callback(user);
          }else{
            callback(false);
          }
        });
    }

    getUsersList(callback) {
        callback(this.activeUsers);
    }

    login(user) {
        this.activeUsers.push(user);
    }

    logout(user, callback) {
        let index = this.activeUsers.indexOf(user);
        console.log(index);
        if (index != -1) this.activeUsers.splice(index, 1);
        callback();
    }
}

module.exports = Registry;
