var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.insertNewOrder = function (myobj, callback) {

    MongoClient.connect(url, function (err, database) {
        if (err) throw err;
        var dbase = database.db("orders");
        var res1 = dbase.collection("order");
        res1.insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log(myobj.oid + "order Inserted");
            callback(res);
        });
        database.close();
    });
}
