const User = require('./item');
const Database = require('./database');

class DataMapper {
    constructor() {
        this.database = new Database();
    }

    insertUser(info) {
        var values = [];
        for (var key in info) {
            var temp = [];
            temp.push(key);
            temp.push(info[key]);
            values.push(temp);
        }

        this.database.insertUser(values);
    }
}