//priyankajoseph
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

app.post("/DeleteData", function (req, res) {
    MongoClient.connect(url, function (err, dbase) {
        if (err) throw err;
        var db = dbase.db("Addresses");
        var myobj = req.body;
       var dbas = db.collection("address");
        dbas.deleteOne({"customer_id":myobj.cid}, function (err, res) {
            if (err) throw err;
            //console.log(res);
            console.log(myobj.cid + " Deleted");
        });
        dbase.close();
    });
});
