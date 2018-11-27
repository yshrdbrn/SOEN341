const User = require('./user');

class IdentityMap{

  constructor(){
    this.list = [];
  }

  getObject(id) {
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].id == id)
          return this.list[i];
    }

    return null;
  }

  clear() {
    this.list = [];
  }

  add(newObj) {
    let obj = this.getObject(newObj.id);
    if (obj) {
      return obj;
    } else {
      this.list.push(newObj);
      return newObj;
    }
  }

  getAll() {
    return this.list;
  }

  addAll(objects) {
    for (var i = 0; i < objects.length; i++) {
      this.list.push(objects[i]);
    }
  }
}

module.exports = IdentityMap;
