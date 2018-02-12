
var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.search = function (ob,callback){

	 mongo.connect(url, function (err, database) { 	       
	        if (err) throw err;
	        var dbase = database.db("Product_Details");
	        var res1 = dbase.collection("Tech_specification");
	        console.log("Mongo server me aaya");
	        res1.find({pid:ob.pid}).toArray(function (err, result) {
	            if (err) throw err;
	            //console.log(result);
	            callback(result);
	            console.log("Products list sent");
	            //console.log(result);
	           
	        });
	        database.close();
	 });
}
