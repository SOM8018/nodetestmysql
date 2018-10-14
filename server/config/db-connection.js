//import the db-properties
var prop= require("./db-properties");
//import mysql module
var mysql = require("mysql");
//export the json object
module.exports={
    getConnection:function(){
        return mysql.createConnection({
            host: prop.host,
            user: prop.user,
            password: prop.password,
            database: prop.database
        });
    }
}

