var express = require("express");

var router = express.Router();
var techSearch = require("../DataBase/addTechSpecsFetch.js");
var techInsert = require("../DataBase/addTechSpecsInsert.js");
var techDelete = require("../DataBase/addTechSpecsDelete.js");


router.post("/insertData", function (req, res) {
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

    });
});
router.post("/initializeData", function (req, res) {
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

// delete


router.post("/DeleteData", function (req, res) {

});



router.post("/updateData", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
updateAddress.update(req.body,function callback(result){
		
		console.log("Address updated");
		res.send(true);
		//res.end();
	});
});

router.post("/initializeData", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });


});

router.post("/readData", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
});

module.exports = router;
