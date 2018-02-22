var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.updateAddress = function (myobj,callback){

	MongoClient.connect(url, function (err, database) { 	       
		if (err) throw err;
		var dbase = database.db("Addresses");
		var res1 = dbase.collection("Address");
		res1.updateOne({_id:myobj._id},{$set:myobj}, function (err, res) {
			if (err) throw err;
			console.log(JSON.stringify(myobj) + "address Updated");
			callback(res);
		});
		database.close();
	});
}
