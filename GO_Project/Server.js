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

app.use("/", express.static(__dirname + "./resources"));
app.use("/", express.static(__dirname + "./resources/images"));
app.use("/master", express.static(__dirname + "./resources"));
app.use("/master", express.static(__dirname + "./resources/images"));

app.use("/master", express.static(__dirname));


var cartServer = require("./Server/cartServer.js");
app.use("/cart",cartServer);

var addressServer = require("./Server/addressServer.js");
app.use("/address",addressServer);

var orderServer = require("./Server/orderServer.js");
app.use("/order",orderServer);

var productServer = require("./Server/productServer.js");
app.use("/product",productServer);

var customerServer = require("./Server/customerServer.js");
app.use("/customer",customerServer);

var addTechSpecsServer = require("./Server/addTechSpecsServer.js");
app.use("/addTechSpecs",addTechSpecsServer);



app.listen(3000, function () {
    console.log("Server started 3000")
});

//
