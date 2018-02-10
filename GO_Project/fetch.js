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

app.use("/", express.static(__dirname + "/resources"));
app.use("/", express.static(__dirname + "/resources/images"));


app.use("/master", express.static(__dirname));

app.post("/insertData", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log("Ye Rha Fields");
        console.log(fields);
        //console.log(files);
        if (files)
            var oldPath = files.file.path;
        var newPath = __dirname + "/resources/images/" + files.file.name;
        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err;
        });
        var obj = {
            pid: fields.pid,
            itemName: fields.itemName,
            itemPrice: fields.itemPrice,
            techSpecs: JSON.parse(fields.techSpecs),
            img: files.file.name
        };
        MongoClient.connect(url, function (err, dbase) {
            if (err) throw err;
            var db = dbase.db("Product_Details");
            //var myobj = req.body;
            db.collection("Tech_specification").insertOne(obj, function (err, res) {
                if (err) throw err;
                console.log(obj.pid + " Inserted");
            });

        });
    });
});

// delete


app.post("/DeleteData", function (req, res) {
    MongoClient.connect(url, function (err, dbase) {
        if (err) throw err;
        var db = dbase.db("Product_Details");
        var myobj = req.body;
        var dbas = db.collection("Tech_specification");
        dbas.deleteOne({
            "pid": myobj.pid
        }, function (err, res) {
            if (err) throw err;
            //console.log(res);
            console.log(myobj.pid + " Deleted");
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
        res1.update({
            'pid': myobj.pid
        }, {
            $set: {
                techSpecs: myobj.techSpecs
            }
        }, function (err, result) {
            if (err) throw err;
            console.log(myobj.pid + "Updated");
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
    res1.find({
        pid: myobj.pid
    }).toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
        res.end();
    });
    console.log("1 result sent");
    //console.log(result);
    database.close();
    
});

});

app.listen(3000, function () {
    console.log("Server started dafhahsaat 3000")
});
