var express = require("express");
var router = express.Router();
var productFetch = require("../DataBase/productFetch.js");



router.post("/fetch", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }); // to set the header .
    console.log("aa gya search me");
    var ob = req.body;
    productFetch.fetch(function callback(result){
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
	addInsert.insertNewAddress(req.body,function callback(result){
		
		console.log("New address inserted");
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
    addSearch.deleteAddress(req.body,function callback(result){
		 res.send(result);
		 console.log("Address is deleted");
		 res.end();
    });
       
});

module.exports = router;

