//import db-connectionn
var conn= require("../config/db-connection");
//get the connection object
var connection= conn.getConnection();
//connect to database
connection.connect();
//import express
var express= require("express");
//create the router instance
var router= express.Router();
//create the Rest API
router.get("/",function(req,res){
    connection.query("Select * from products",
    function(err,recordsArray,fields){
        res.send(recordsArray);
    });
});
//export the router
module.exports= router;