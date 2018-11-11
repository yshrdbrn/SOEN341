class User {
    constructor(info) {
        this.id = info.id;
        this.password = info.password;
        this.firstname = info.firstname;
        this.lastname = info.lastname;
        this.address = info.address;
        this.email = info.email;
        this.phonenumber = info.phonenumber;

        this.isadmin = info.isadmin;
    }
}

module.exports = User;
