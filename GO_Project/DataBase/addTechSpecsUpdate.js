var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";


exports.update = function (myobj,callback){

MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    var dbase = database.db("Product_Details");
    var res1 = dbase.collection("Tech_specification");
    var myobj = req.body;
    res1.update({
        'pid': myobj.pid
    }, {
        $set: {
            techSpecs: myobj.techSpecs
        }
    });
    database.close();
});
}
