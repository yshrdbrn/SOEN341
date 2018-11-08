

  var mysql = require('mysql');

class Database{
  constructor(){
    this.con;
    this.hostname = "den1.mysql5.gear.host";
    this.username = "soen341db";
    this.dbpass = "Og7Z837r--A1";
    this.dbname = "soen341db";
  }

  myconnect(){
     this.con = mysql.createConnection({
      host: this.hostname,
      user: this.username,
      password: this.dbpass,
      database: this.dbname
    });
    this.con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
    return this.con;
  }

  mydisconnect(){
    this.con.end((err) => {
      console.log("Disconnected!")
    });

  }

  insertUser(values){
    this.myconnect();
    var sql = "INSERT INTO Users (firstname,lastname,address,email,password,phonenumber,isadmin) VALUES ?";
    this.con.query(sql, [values], function (err, result) {
      if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
    });

    this.mydisconnect();

  }

  deleteUser(id){
    this.myconnect();
    this.con.query(
    'DELETE FROM Users WHERE id = ?', id, (err, result) => {
      if (err) throw err;

      console.log(`Deleted ${result.affectedRows} row(s)`);
    }
  );

    this.mydisconnect();

  }


  selectAllUsers(){
    this.myconnect();
  this.con.query("SELECT * FROM Users", function (err, result) {
    if (err) throw err;
    console.log(result);
    return result;
  });

    this.mydisconnect();


}


}
module.exports = Database;
