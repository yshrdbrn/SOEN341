const Registry = require('../model/registry');
const ItemCatalog = require('../model/itemCatalog');

class Console {
    constructor() {
        this.registry = new Registry();
        this.itemCatalog = new ItemCatalog();
    }

    login(user) { this.registry.login(user); }

    logout(user) { if (user) this.registry.logout(user); }

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

    findUser(id) { return this.registry.findUser(id); }

    addItem(info) { this.itemCatalog.addItem(info); }

    removeItem(id) { this.itemCatalog.removeItem(id); }

    modifyItem(id, info) { this.itemCatalog.modifyItem(id, info); }

    allItems() { return this.itemCatalog.allItems(); }
}

module.exports = new Console();
