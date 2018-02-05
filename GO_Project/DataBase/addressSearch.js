var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.seachDb = function (myobj,callback){

	 mongo.connect(url, function (err, database) { 	       
	        if (err) throw err;
	        var dbase = database.db("Addresses");
	        var res1 = dbase.collection("Address");
	        console.log("Mongo server me aaya");
	        res1.find({ customerId: myobj.cid }).toArray(function (err, result) {
	            if (err) throw err;
	            console.log(result);
	            callback(result);
	            console.log("1 result sent");
	            //console.log(result);
	           
	        });
	        database.close();
	 });
}
