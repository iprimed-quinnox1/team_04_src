var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.insert = function (myobj,callback){

	 MongoClient.connect(url, function (err, database) { 	       
	        if (err) throw err;
	        var dbase = database.db("cart");
	        var res1 = dbase.collection("item");
	        res1.insertOne(myobj, function (err, res) {
	            if (err) throw err;
	            console.log( " Cart Items sent");
	            callback(res);
	        });
	        database.close();
	 });
}
