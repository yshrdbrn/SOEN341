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
}

module.exports = DataMapper;