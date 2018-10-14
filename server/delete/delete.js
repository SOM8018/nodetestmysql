//import db-connection
var conn= require("../config/db-connection");
var connection= conn.getConnection();
connection.connect();
var express= require("express");
var router= express.Router();
router.post("/",function(req,res){
    var p_id= req.body.p_id;
    connection.query("delete from products where p_id="+p_id,
    function(err,result){
        if(err){
            res.send({delete:"fail"});
        }
        else{
            res.send({delete:"success"});
        }
    });
});
module.exports= router;