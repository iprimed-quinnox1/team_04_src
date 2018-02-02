var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.insertNewAddress = function (myobj,callback)

	 MongoClient.connect(url, function (err, database) { 	       
	        if (err) throw err;
	        var dbase = database.db("Addresses");
	        var res1 = dbase.collection("Address");
	        dbase.InsertOne({}, function (err, res) {
	            if (err) throw err;
	            console.log(myobj.cid + "address Inserted");
	        });
	        database.close();
	 });
}