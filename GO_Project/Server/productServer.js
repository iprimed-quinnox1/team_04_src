var express = require("express");
var formidable = require("formidable");
var fs = require("fs");
var router = express.Router();


var productFetch = require("../DataBase/productFetch.js");
var productSearch = require("../DataBase/productSearch.js");
var productInsert = require("../DataBase/productInsert.js");



router.post("/fetch", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }); // to set the header .
    productFetch.fetch(function callback(result){
		 res.send(result);
		 //console.log("Server initial result");
		 res.end();
    });
       
});
router.post("/search", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }); // to set the header .
    console.log("aa gya search me");
    var ob = req.body;
    productSearch.search(ob,function callback(result){
		 res.send(result);
		 //console.log("Server initial result");
		 res.end();
    });
       
});

router.post("/insert", function (req, res){
	res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
	productInsert.insert(req,function callback(result){
		
		console.log("New product inserted");
		res.send(true);
		//res.end();
	});
});

//delete
router.post("/delete", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }); // to set the header .
    addSearch.deleteAddress(req,function callback(result){
		 res.send(result);
		 console.log("Address is deleted");
		 res.end();
    });
       
});

module.exports = router;

