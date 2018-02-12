var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.insertTechSpecs = function (myobj,callback){

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
}