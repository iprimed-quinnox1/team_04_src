var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.insertTechSpecs = function (obj,callback){


MongoClient.connect(url, function (err, dbase) {
    if (err) throw err;
    var db = dbase.db("Product_Details");
    //var myobj = req.body;
    db.collection("Tech_specification").insertOne(obj, function (err, res) {
        if (err) throw err;
        console.log(obj.pid + " Inserted");
    });
    database.close();
});
}