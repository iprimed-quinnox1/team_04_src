var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var express = require("express");
var app = express();


var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use("/master", express.static(__dirname));
app.post("/updateProduct", function (req, res) {
    MongoClient.connect(url, function (err, dbase) {
        if (err) throw err;

        var db = dbase.db("Orders");
        var res1 = dbase.collection("Order");
	var myobj = req.body;
        db.res1.update( 
			{ 'Order_ID'  : myobj.oID }, 
			{ $set : { product : myobj.pid } } , function (err, result) {
            if (err) throw err;
            console.log( myobj.Oid + " Product Changed " );
        });
		      
            console.log(myobj._id + " Updated ");
        });
        dbase.close();
    });


app.listen(3000, function () {
    console.log("Server started at 3000")
});
