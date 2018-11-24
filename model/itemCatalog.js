const Item = require('./item');
const DataMapper = require('./dataMapper');

class ItemCatalog {
    constructor() {
        this.dataMapper = new DataMapper();
        this.catalog = [];
    }

    addItem(info,callback) {
        var item = new Item(info);
        console.log(item);
        this.dataMapper.registerNew(item);
        this.dataMapper.commit();
        callback();
    }

    removeItem(id,callback) {
        var that = this;
        this.dataMapper.getItem(id,function(item){
          that.dataMapper.registerRemoved(item);
          that.dataMapper.commit();
          callback(true);
        });
    }

    modifyItem(id, info, callback) {
      var item = new Item(info);
      item.id = id;
      this.dataMapper.registerDirty(item);
      this.dataMapper.commit();
      callback(true);
    }

    allItems(info, callback) {
        this.dataMapper.getAllItems(info, function(items){
          callback(items);
        });
    }

    getItem(id, callback) {
        this.dataMapper.getItem(id,function(item){
          callback(item);
        });
    }
}

module.exports = ItemCatalog;
