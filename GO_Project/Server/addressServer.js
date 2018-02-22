var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var addSearch = require("../DataBase/addressSearch.js");
var addUpdate = require("../DataBase/addressUpdate.js");
var addInsert = require("../DataBase/addressInsert.js");



router.post("/search", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }); // to set the header .
    console.log("aa gya search me");
    var ob = req.body;
    addSearch.seachDb(ob,function callback(result){
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

router.post("/update", function (req, res){
	res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
	addUpdate.updateAddress(req.body,function callback(result){
		
		console.log(" address updated");
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

router.post("/default", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }); // to set the header .
    MongoClient.connect(url, function (err, database) { 	       
		if (err) throw err;
		var dbase = database.db("Addresses");
        var res1 = dbase.collection("Address");
        var myobj =req.body;
		res1.update({"customerId": myobj.customerId},{$set:{"type":'T'}},{multi:true}, function (err, result) {
			if (err) throw err;
			console.log(JSON.stringify( myobj) + "-------updated");
			
        });
        res1.updateOne({"_id":myobj._id},{$set:{"type":'D'}},function(err,result1){
            if (err) throw err;
            console.log("helloooooooooooooooooooo");
            res.send(true);
        });
		database.close();
	});
       
});

module.exports = router;

