const Registry = require('../model/registry');
const ItemCatalog = require('../model/itemCatalog');

class Console {
    constructor() {
        this.registry = new Registry();
        this.itemCatalog = new ItemCatalog();
    }

    login(user) { this.registry.login(user); }

    logout(user, callback) {
      if (user) this.registry.logout(user, callback);
    }

    findUser(id) { return this.registry.findUser(id); }

    registerAdmin(info,callback) {
       this.registry.addNewAdmin(info,function(success){
        if(success){
          console.log('New Admin Registered');
          callback(true);
        }else{
          console.log('Admin Registration Failed!');
          callback(false);
        }
       });
    }

    registerClient(info,callback) {
      this.registry.addNewClient(info,function(success){
        if(success){
          callback(success);
        }else{
          callback(false);
        }
      });
    }

    getUsersList(callback) {
      this.registry.getUsersList(function(userslist){
        callback(userslist);
      });
    }

    getUserWithCredentials(email, password,callback) {
      this.registry.getUserWithCredentials(email, password,function(user){
        callback(user);
      });
    }

    addItem(info, callback) {
       this.itemCatalog.addItem(info, callback);
    }

    removeItem(id,callback) {
      this.itemCatalog.removeItem(id,function(result){
      callback(result);
      });
    }

    modifyItem(id, info, callback){
      this.itemCatalog.modifyItem(id, info, function(result){
        callback(result);
      });
    }

    allItems(info, callback){
      this.itemCatalog.allItems(info, function(items){
        callback(items);
      });
    }

    getItem(id, callback) {return this.itemCatalog.getItem(id, callback); }
}

module.exports = new Console();
