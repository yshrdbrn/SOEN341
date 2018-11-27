const Item = require('./item');
const DataMapper = require('./dataMapper');
const IdentityMap = require('./identityMap');

class ItemCatalog {
    constructor() {
        this.dataMapper = DataMapper;
        this.identityMap = new IdentityMap();
    }

    addItem(info,callback) {
        var item = new Item(info);
        console.log(item);
        this.dataMapper.registerNew(item);
        this.dataMapper.commit();
        this.identityMap.clear();
        callback();
    }

    removeItem(id,callback) {
        var that = this;
        this.dataMapper.getItem(id,function(item){
          that.dataMapper.registerRemoved(item);
          that.dataMapper.commit();
          this.identityMap.clear();
          callback(true);
        });
    }

    modifyItem(id, info, callback) {
      var item = new Item(info);
      item.id = id;
      this.dataMapper.registerDirty(item);
      this.dataMapper.commit();
      this.identityMap.clear();
      callback(true);
    }

    allItems(info, callback) {
        this.dataMapper.getAllItems(info, this.identityMap, function(items){
          callback(items);
        });
    }

    getItem(id, callback) {
        let that = this;
        let item = this.identityMap.getObject(id);
        if (item) return item;

        this.dataMapper.getItem(id,function(item){
          that.identityMap.add(item);
          callback(item);
        });
    }
}

module.exports = ItemCatalog;
