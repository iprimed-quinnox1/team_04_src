var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.fetch = function(data,callback){
	
	MongoClient.connect(url, function (err, database) {
        if (err) throw err;
        var dbase = database.db("orders");
        var res1 = dbase.collection("order");
        res1.find({customerId:data.customerId}, {}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
        database.close();
    });
	
	
}
