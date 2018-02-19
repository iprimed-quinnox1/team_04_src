var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var router = express.Router();
var addSearch = require("../DataBase/addressSearch.js");

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

router.post("/default", function(req,res){
	res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
	MongoClient.connect(url, function (err, dbase) {
        if (err) throw err;
        var db = dbase.db("Addresses");
        var myobj = req.body;
        console.log("reaching update");
        console.log(myobj);
       var dbas = db.collection("Address");
        dbas.update({"customerId":myobj.customerId},{$set:{"type":'T'}},{multi:true}, function (err, result) {
            if (err) throw err;
            console.log("sab T hua");
            //
            //console.log(res);
            
        });
        
        dbas.updateOne({_id:myobj._id},{$set:{type:'D'}},function(err,result){
            res.send(true);
            console.log("sab D hua");
        });
       
        dbase.close();
    });
})

module.exports = router;

