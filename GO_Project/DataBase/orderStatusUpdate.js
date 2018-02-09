var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.updateOrder = function (myobj,callback){

	  MongoClient.connect(url, function (err, dbase) {
        if (err) throw err;
        var db = dbase.db("orders");
       var dbas = db.collection("order");
        dbas.updateOne({"orderId":myobj.orderId},{$set: {status: myobj.status}}, function (err, res) {
            if (err) throw err;
            //console.log(res);
            console.log(myobj.orderId + " satusUpdated");
        });
        dbase.close();
    });
}
