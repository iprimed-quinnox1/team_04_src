var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.insertTechSpecs = function (myobj,callback){

MongoClient.connect(url, function (err, database) { // connecting to mongo
    // server
    if (err) throw err;
    var dbase = database.db("Product_Details");
    var myobj = req.body;
    //console.log("Servermyobj");
    //console.log(myobj);
    var res1 = dbase.collection("Tech_specification");
    res1.find({
        pid: myobj.pid
    }).toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
        res.end();
    });
    console.log("1 result sent");
    //console.log(result);
    database.close();
    
});
}