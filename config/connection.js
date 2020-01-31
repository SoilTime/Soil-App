const mysql = require("mysql2");
var connection = mysql.createConnection({
    host: "localhost",
    port:3306,
    user:"root",
    password:"",
    database:"soil_db"
});

connection.connect(function(err){
    if (err) {
        console.error("Connection Error" + err.stack);
        return;
    }
    console.log("Connected as ID" + connection.threadId);
})

module.exports = connection;