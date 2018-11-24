const DataMapper = require('./dataMapper');
  // the unit of work class contains three lists of new,dirty,and removed objects
  // the unit of work contains a reference to the DataMapper that created it.
  // because the datamapper class has a unit of work as a class variable.

class UnitOfWork{

  constructor(that){
    this.newObjects = [];
    this.dirtyObjects = [];
    this.removedObjects = [];
    //this.cleanObjects or Identity map here????
    this.mapper = that;
  }


  registerNew(obj){
    if(this.dirtyObjects.includes(obj)){
      console.log('Object is already registered in dirtyObjects');
      return;
    }
    if(this.removedObjects.includes(obj)){
      console.log('Object is already registered in removedObjects');
      return;
    }
    if(this.newObjects.includes(obj)){
      console.log('Object is already registered in newObjects');
      return;
    }
    this.newObjects.push(obj);// check to see if the object is already in any of the lists, if not then add it to the new objects list
  }

  registerDirty(obj){
    if(this.dirtyObjects.includes(obj)){
      console.log('Object is already registered in dirtyObjects');
      return;
    }
    if(this.removedObjects.includes(obj)){
      console.log('Object is already registered in removedObjects');
      return;
    }
    if(this.newObjects.includes(obj)){
      console.log('Object is already registered in newObjects');
      return;
    }
    this.dirtyObjects.push(obj); // check to see if the object is already in any of the lists, if not then add it to the dirty objects list
  }

  registerRemoved(obj){
    if(this.newObjects.includes(obj)){
      var i = this.newObjects.indexOf(obj); // if it's a new object then just remove it from the list of new objects and return
      this.newObjects.splice(i,1);
      return;
    }
    if(this.dirtyObjects.includes(obj)){
      var i = this.dirtyObjects.indexOf(obj); // if it's an object that's been recently modified then remove it from the dirty objects list
      this.dirtyObjects.splice(i,1);          // but don't return
    }
    if(!this.removedObjects.includes(obj)){
      this.removedObjects.push(obj);  // add the object to the removed objects list
    }
  }

  registerClean(obj){
    // Identity Map goes here
  }

  commit(){
    this.insertNew();
    this.updateDirty();
    this.deleteRemoved();
  }

  insertNew(){
    let that = this;
    this.newObjects.forEach(function(obj){
      if(obj.constructor.name == 'User'){
        console.log('Inserting User');
        that.mapper.insertUser(obj);
      }
      if(obj.constructor.name == 'Item'){
        console.log('Inserting Item');
        that.mapper.insertItem(obj);
        that.newObjects.pop();
      }
    });
  }

  updateDirty(){
    let that = this;
    this.dirtyObjects.forEach(function(obj){
      if(obj.constructor.name == 'User'){
        //no updating of users the if statement should never be true
      }
      if(obj.constructor.name == 'Item'){
        console.log('Updating Item');
        that.mapper.updateItem(obj);
        that.dirtyObjects.pop();
      }
    });
  }
  deleteRemoved(){
    let that = this;
    this.removedObjects.forEach(function(obj){
      if(obj.constructor.name == 'User'){
        //no deleting of users the if statement should never be true
      }
      if(obj.constructor.name == 'Item'){
        console.log('Deleting Item');
        that.mapper.deleteItem(obj);
        that.removedObjects.pop();
      }
    });
  }
}

module.exports = UnitOfWork;
