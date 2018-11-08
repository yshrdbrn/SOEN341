class User {
    constructor(info) {
        this.id = info.id;
        this.password = info.password;
        this.firstName = info.firstName;
        this.lastName = info.lastName;
        this.address = info.address;
        this.email = info.email;
        this.phone = info.phone;

        this.isAdmin = false;
    }
}

module.exports = User;