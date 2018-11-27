const User = require('./user');
const DataMapper = require('./dataMapper');
const IdentityMap = require('./identityMap');

class Registry {
    constructor() {
        this.activeUsers = [];
        this.idGen = 0;
        this.dataMapper = DataMapper;
        this.identityMap = new IdentityMap();
    }

    addNewClient(info,callback) {
        var user = new User(info);
        user.isadmin = false;
        var that = this;
        this.dataMapper.userExists(info.email,function(exists){
          if(exists){
            callback(false);
          }else{
           that.dataMapper.registerNew(user);
           that.dataMapper.commit();
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
            that.dataMapper.registerNew(user);
            that.dataMapper.commit();
            callback(true);
          }
        });
    }

    isAdmin(user) {
        return user.isadmin;
    }

    findUser(id) {
      return this.identityMap.getObject(id);
    }

    getUserWithCredentials(email, password,callback) {
      var that = this;
        this.dataMapper.findUser(email,password,function(user){
          if(email == user.email && password == user.password){
            let newUser = that.identityMap.add(user);
            callback(newUser);
          }else{
            callback(false);
          }
        });
    }

    getUsersList(callback) {
        if(user.isadmin)
            callback(this.activeUsers);
        else
        console.log("Unauthorized access");
    }

    login(user) {
        this.activeUsers.push(user);
    }

    logout(user, callback) {
        let index = this.activeUsers.indexOf(user);
        console.log(index);
        if (index != -1) this.activeUsers.splice(index, 1);

        this.dataMapper.commit()
        callback();
    }
}

module.exports = Registry;
