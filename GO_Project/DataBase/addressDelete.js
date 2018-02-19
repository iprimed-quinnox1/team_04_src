var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.deleteAddress = function (myobj,callback)

	  MongoClient.connect(url, function (err, dbase) {
        if (err) throw err;
        var db = dbase.db("Addresses");
        var myobj = req.body;
       var dbas = db.collection("address");
        dbas.update({"customer_id":myobj.cid}, function (err, res) {
            if (err) throw err;
            //console.log(res);
            console.log(myobj.cid + " Deleted");
        });
        dbase.close();
    });
}