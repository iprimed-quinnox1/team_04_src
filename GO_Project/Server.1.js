var express = require("express");
var fs = require('fs');
var mongoose = require("mongoose");
var url = 'mongodb://localhost:27017/GO_Project';

mongoose.connect(url);
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

require("./server1/model/Address.model.js");
require("./server1/routes.server")(app);

require("./server1/model/productModel.js");
require("./server1/routes.server")(app);

require("./server1/model/cartModel.js");
require("./server1/routes.server")(app);

require("./server1/model/orderModel.js");
require("./server1/routes.server")(app);


app.use("/master", express.static(__dirname));

/*
db.Address.insert({
	"_id" : "57370929762_undefined",
	"customerName" : "Nitish",
	"mobileNo" : 8967474127,
	"city" : "Bangalore",
	"state" : "Karnataka",
	"pincode" : 56005,
	"Address" : "E city",
	"type" : "D",
	"customerId" : "C101"
})
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

*/

app.listen(3000, function () {
    console.log("Server started 3000")
});

//
