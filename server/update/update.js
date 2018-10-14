//import db-connection
var conn= require("../config/db-connection");
//get the connection object
var connection= conn.getConnection();
//connect to database
connection.connect();
//import express
var express= require("express");
//create router instance
var router=express.Router();
//create the rest API
router.post("/",function(req,res){
    //read the data from cient
    var p_id=req.body.p_id;
    var p_name=req.body.p_name;
    var p_cost=req.body.p_cost;
    //update the database
    connection.query("update products set p_name='"+p_name+"',p_cost="+p_cost+",where p_id="+p_id,
    function(err,result){
        if(err){
            res.send({delete:"fail"});
        }
        else{
            res.send({delete:"success"});
        }
    });
});
//export the router
module.exports= router;