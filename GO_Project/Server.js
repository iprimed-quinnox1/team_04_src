var express = require("express");
var formidable = require("formidable");
var fs = require("fs");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";


var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/master", express.static(__dirname));


var cartServer = require("./Server/cartServer.js");
app.use("/cart",cartServer);

var addressServer = require("./Server/adrs.server.js");
app.use("/address",addressServer);


app.listen(3000, function () {
    console.log("Server started dafhahsaat 3000")
});

//
