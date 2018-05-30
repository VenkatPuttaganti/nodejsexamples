var mysql = require('mysql');
var config = require('./config');
var con = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.db
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "select name from person where id = 1;"
  con.query(sql, function (err, result) {
    if (err) throw err;
	var resultObj = result;
    console.log("Result: " + JSON.stringify(resultObj));
  });
});