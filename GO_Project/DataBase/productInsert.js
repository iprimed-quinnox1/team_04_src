var formidable = require("formidable");
var fs = require("fs");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.insert = function (req, callback) {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log("Ye Rha Fields");
        console.log(fields);
        //console.log(files);
        if (files)
            var oldPath = files.file.path;
        var newPath = __dirname + "./../resources/images/" + files.file.name;
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
                callback(res);
            });
            dbase.close();
            

        });
    });
}