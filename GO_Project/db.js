//lalitha
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
        //console.log(myobj);
        db.collection("Tech_specification").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log(myobj.pid + " Inserted");
        });
        dbase.close();
    });
});


app.listen(3000, function () {
    console.log("Server started at 3000")
});
