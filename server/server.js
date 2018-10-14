var express= require("express");
var bodyparser= require("body-parser");
//create the rest object
var app= express();
//enable the CORS
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//set the json as MIMI type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//import the fetch module
var fetch= require("./fetch/fetch");
app.use("/fetch",fetch);
//import the insert module
var insert= require("./insert/insert");
app.use("/insert",insert);
//import the update module
var update= require("./update/update");
app.use("/update",update);
//import the update module
var remove= require("./delete/delete");
app.use("/delete",remove);
//assign the port no.
app.listen(8080);
console.log("Server is Listening to the port no. 8080");