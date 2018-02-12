var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.deleteTechSpecs = function (myobj,callback){

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
}