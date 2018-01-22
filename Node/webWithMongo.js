var http = require('http');
var MongoClient = require('mongodb').MongoClient;

//create a server object:
http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'application/json'});
	var url = "mongodb://localhost:27017";
	var data = new Array();
	MongoClient.connect(url, function(err, client) {
		if (err) throw err;
		var db = client.db("mycart");
		console.log("Database created!");
		var coll = db.collection("products");
		coll.find({}, {"_id":false, "name":true}).toArray(function(err, prods){
			if(err){
				console.log("Error in find.");
			}
			console.log(prods);
			res.write(JSON.stringify(prods));
			res.end(); //end the response
		});
	});
	
}).listen(8080); //the server object listens on port 8080
