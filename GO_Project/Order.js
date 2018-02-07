
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

app.post("/deleteOrder", function (req, res) {
    MongoClient.connect(url, function (err, dbase) {
        if (err) throw err;
        var db = dbase.db("orders");
        var myobj = req.body;
        var dbas = db.collection("order");
        dbas.deleteOne({ "oid": myobj.oid }, function (err, res) {
            if (err) throw err;
            //console.log(res);
            console.log(myobj.oid + " orderDeleted");
        });
        dbase.close();
    });
});

app.post("/updateOrder", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
    MongoClient.connect(url, function (err, database) {
        if (err) throw err;
        var dbase = database.db("orders");
        var res1 = dbase.collection("order");
        var myobj = req.body;
        res1.update({ 'oid': myobj.oid }, { $set: { status: myobj.status } }, function (err, result) {
            if (err) throw err;
            console.log(myobj.oid + "Updated");
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
        res1.find({}, {
            'pid': 1,
            '_id': 0,
            'techSpecs': 0
        }).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            console.log("Server initial result");
            //console.log(result);
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
    }); // to set the header .
    MongoClient.connect(url, function (err, database) { // connecting to mongo
        // server
        if (err) throw err;
        var dbase = database.db("Product_Details");
        var myobj = req.body;
        //console.log("Servermyobj");
        //console.log(myobj);
        var res1 = dbase.collection("Tech_specification");
        res1.find({ pid: myobj.pid }).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            console.log("1 result sent");
            //console.log(result);
            res.end();
        });
        database.close();
    });
});
app.listen(3000, function () {
    console.log("Server started dafhahsaat 3000")
});
