var express = require("express");
var router = express.Router();
var addSearch = require("../DataBase/addressSearch.js");

var addInsert = require("../DataBase/addressInsert.js");



router.post("/search", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }); // to set the header .
    addSearch.seachDb(req.body,function callback(result){
		 res.send(result);
		 console.log("Server initial result");
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
		res.send(result);
		console.log("New address inserted");
		res.end();
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

