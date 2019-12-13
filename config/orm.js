// Import (require) connection.js into orm.js
var connection = require("./connection");


// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

function selectAll() {
    console.log("select all function");
};


function insertOne() {
    console.log("insert one function");
};


function updateOne() {
    console.log("update one function");
};


// Export the ORM object in module.exports.
module.exports = orm;