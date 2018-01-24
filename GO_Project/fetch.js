//vaishnavi
var express = require("express");

var MongoClient = require('mongodb').MongoClient;
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

app.post("/insertData", function (req, res) {
    MongoClient.connect(url, function (err, dbase) {
        if (err) throw err;
        var db = dbase.db("Product_Details");
        var myobj = req.body;
        db.collection("Tech_specification").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log(myobj.pid + " Inserted");
        });
        dbase.close();
    });
});

app.post("/updateData", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }); 
    MongoClient.connect(url, function (err, database) { 
        if (err) throw err;
        var dbase = database.db("Product_Details");
		var res1 = dbase.collection("Tech_specification");
		var myobj = req.body;
        res1.update({'pid':myobj.pid},{$set:{techSpecs:myobj.techSpecs}}, function (err, result) {
            if (err) throw err;
           console.log("Updated");
        });
        database.close();
    });
});

app.post("/initializeData", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }); 
    MongoClient.connect(url, function (err, database) { 
        if (err) throw err;
        var dbase = database.db("Product_Details");
		var res1 = dbase.collection("Tech_specification");
        res1.find({},{'pid':1,'_id':0,'techSpecs':0} ).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            console.log("Server result");
            console.log(result);
            res.end();
        });
        database.close();
    });
});

app.post("/readData", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }); //to set the header .
    MongoClient.connect(url, function (err, database) { //connecting to mongo server
        if (err) throw err;
        var dbase = database.db("Product_Details");
		var myobj = req.body;
		console.log("Servermyobj");
		console.log(myobj);
        var res1 = dbase.collection("Tech_specification");
        res1.find({ pid : myobj.pid } ).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            console.log("Server result");
            console.log(result);
            res.end();
        });
        database.close();
    });
});

app.listen(3000, function () {
    console.log("Server started at 3000")
});
