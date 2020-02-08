var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JawsDB_URL);
} else {

  connection = mysql.createConnection({
    
    host: "u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "b9ktve8fcg7qbaxm",
    password: "ig39wx40kbakmps4",
    database: "zg04c58nn9eotcoz"

  });
};

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
