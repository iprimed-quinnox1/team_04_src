var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

exports.deleteTechSpecs = function (myobj,callback){

mongo.connect(url, function(err, db){
        if(err) throw err;
        console.log("db reaching");
        var dbase = db.dbase("users");
        var data = request.body;
        console.log("user mail",data.username);
        console.log("user psd is", data.password);

        var res1  = db.collection("user");

        res1.find({$and : [{"email":data.username, "pass": data.password}]}).toArray(function(err, result){
            if(err) throw err;

            if(result.lenght == 1){
                console.log("bye", result);
                console.log("name is", result.name);
                console.log("email is", result.email);
            Response.send(true)
            }else{
            Response.send(false);
            }
        });
        db.close();
    });


