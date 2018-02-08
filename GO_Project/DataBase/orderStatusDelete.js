var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.deleteOrder = function (myobj,callback){

	  MongoClient.connect(url, function (err, dbase) {
        if (err) throw err;
        var db = dbase.db("orders");
        var myobj = req.body;
       var dbas = db.collection("order");
        dbas.deleteOne({"orderId":myobj.oid}, function (err, res) {
            if (err) throw err;
            //console.log(res);
            console.log(myobj.oid + " Deleted");
        });
        dbase.close();
    });
}
