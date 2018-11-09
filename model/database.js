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

  selectAllUsers(callback){
    this.myconnect();
  this.con.query("SELECT * FROM Users", function (err, result) {
    if (err) throw err;
    
    callback(result);
  });
    this.mydisconnect();
}



  insertItem(values){
    this.myconnect();
    var sql = "INSERT INTO Item (itemType,title,author,format,pages,publisher,language,isbn10,isbn13,director, producers,actors,subtitles,dubbed,releaseDate,runTime,type,artist,label,asin  ) VALUES ?";
    this.con.query(sql, [values], function (err, result) {
      if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
    });
    this.mydisconnect();
  }


  updateItem(values,itemid){
    this.myconnect();
    var sql = "UPDATE Item SET itemType = ?,title = ?,author = ?,format = ?,pages = ?,publisher = ?,language = ?,isbn10 = ?,isbn13 = ?,director = ?, producers = ?,actors = ?,subtitles = ?,dubbed = ?,releaseDate = ?,runTime = ?,type = ?,artist = ?,label = ?,asin = ? WHERE itemid = ?";
    this.con.query(sql, [values[0][0],values[0][1],values[0][2],values[0][3],values[0][4],values[0][5],values[0][6],values[0][7],values[0][8],values[0][9],values[0][10],values[0][11],values[0][12],values[0][13],values[0][14],values[0][15],values[0][16],values[0][17],values[0][18],values[0][19],itemid], function (err, result) {
      if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
    this.mydisconnect();
  }

  deleteItem(id){
    this.myconnect();
    this.con.query(
    'DELETE FROM Item WHERE itemid = ?', id, (err, result) => {
      if (err) throw err;
      console.log(`Deleted ${result.affectedRows} row(s)`);
    }
  );
    this.mydisconnect();
  }

  viewItem(itemType, title, callback){
    this.myconnect();
    var sql = "SELECT * FROM Item WHERE itemType = ? AND title = ?";
    this.con.query(sql, itemType, title, function(err, result){
      if (err) throw err;
      console.log(`Displayed ${result.affectedRows} row(s)`);
    }
    );
    this.mydisconnect();
  }

}
module.exports = Database;
