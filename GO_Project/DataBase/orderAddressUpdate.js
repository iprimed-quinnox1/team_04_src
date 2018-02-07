var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";


exports.update = function (myobj,callback){

    mongo.connect(url, function (err, database) {
        if (err) throw err;
        var dbase = database.db("orders");
        var res1 = dbase.collection("order");
        var myobj = req.body;
        res1.update({ 'orderId': myobj.oid }, { $set: { address: myobj.address } }, function (err, result) {
            if (err) throw err;
            console.log(myobj.oid + "Updated");
        });
        database.close();
            
    });
}



