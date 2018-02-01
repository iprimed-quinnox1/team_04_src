var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.readCart = function(data,callback){
	
	MongoClient.connect(url, function (err, database) {
        if (err) throw err;
        var dbase = database.db("cart");
        var res1 = dbase.collection("item");
        res1.find({customerId:101}, {}).toArray(function (err, result) {
            if (err) throw err;
           
            //console.log(result);
            
            callback(result);
        });
        database.close();
    });
	
	
}

