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

// delete


router.post("/DeleteData", function (req, res) {

});



router.post("/updateData", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
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
