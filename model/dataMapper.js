const User = require('./item');
const Database = require('./database');

class DataMapper {
    constructor() {
        this.database = new Database();
    }

    insertUser(info) {
        var value = [];
        value.push(info.firstname);
        value.push(info.lastname);
        value.push(info.address);
        value.push(info.email);
        value.push(info.password);
        value.push(info.phonenumber);
        value.push(info.isadmin);

        var values = [];
        values.push(value);
        this.database.insertUser(values);
    }

    deleteUser(id){
        this.database.deleteUser(id);
    }

    selectAllUsers(){
        
        this.database.selectAllUsers(function(users) {
            var objectUsers = [];

            for (user in users){
                objectUsers.push(new User(user));

            }
        });
        
        
    }

    insertItem(info){
        var value = [];
        value.push(info.itemType);
        value.push(info.title);
        value.push(info.author);
        value.push(info.format);
        value.push(info.pages);
        value.push(info.publisher);
        value.push(info.language);
        value.push(info.isbn10);
        value.push(info.isbn13);
        value.push(info.director);
        value.push(info.producers);
        value.push(info.actors);
        value.push(info.subtitles);
        value.push(info.dubbed);
        value.push(info.releaseDate);
        value.push(info.runTime);
        value.push(info.type);
        value.push(info.artist);
        value.push(info.label);
        value.push(info.asin);

        var values = [];
        values.push(value);
        this.database.insertItem(values);
    }

    updateItem(info){
        var value = [];
        value.push(info.itemType);
        value.push(info.title);
        value.push(info.author);
        value.push(info.format);
        value.push(info.pages);
        value.push(info.publisher);
        value.push(info.language);
        value.push(info.isbn10);
        value.push(info.isbn13);
        value.push(info.director);
        value.push(info.producers);
        value.push(info.actors);
        value.push(info.subtitles);
        value.push(info.dubbed);
        value.push(info.releaseDate);
        value.push(info.runTime);
        value.push(info.type);
        value.push(info.artist);
        value.push(info.label);
        value.push(info.asin);

        var values = [];
        values.push(value);
        this.database.updateItem(values);
    }

    deleteItem(id){
        this.database.deleteItem(id);
    }

}

module.exports = DataMapper;