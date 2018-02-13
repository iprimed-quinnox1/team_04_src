var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.registerNew = function (myobj,callback){

	 MongoClient.connect(url, function (err, database) { 	       
	        if (err) throw err;
	        var dbase = database.db("customers");
	        var res1 = dbase.collection("customerList");
	        res1.insertOne(myobj, function (err, res) {
	            if (err) throw err;
	            console.log( " details are saved");
	            callback(res);
	        });
	        database.close();
	 });
}
