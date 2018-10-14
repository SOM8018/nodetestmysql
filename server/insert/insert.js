//import db-connection
var conn= require("../config/db-connection");
//get the connection object
var connection= conn.getConnection();
//connect to database
connection.connect();
//import express
var express= require("express");
//create the router instance
var router= express.Router();
//create the rest API
router.post("/",function(req,res){
    //read the data from cient
    var p_id=req.body.p_id;
    var p_name=req.body.p_name;
    var p_cost=req.body.p_cost;
    //insert into database
    connection.query("insert into products values("+p_id+",'"+p_name+"',"+p_cost+")",
    function(err,result){
        if(err){
            res.send({insert:"fail"});
        }
        else{
            res.send({insert: "success"});
        };
    });
});
module.exports= router;