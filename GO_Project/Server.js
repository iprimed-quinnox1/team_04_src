var express = require("express");
var formidable = require("formidable");
var fs = require("fs");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";


var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
//var cartData = require("../DataBase/cartData.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/",express.static(__dirname+"/resources"));
app.use("/",express.static(__dirname+"/resources/images"));


app.use("/master", express.static(__dirname));


var cartServer = require("./Server/cartServer.js");
app.use("/cart",cartServer);



app.listen(3000, function () {
    console.log("Server started dafhahsaat 3000")
});
