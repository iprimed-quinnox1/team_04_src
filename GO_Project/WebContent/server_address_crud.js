//priyankajoseph
app.use("/master", express.static(__dirname));
app.post("/InsertData", function (req, res) {
    MongoClient.connect(url, function (err, dbase) {
        res.set({
            'Content-Type' :'application/json',
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Credentials":true
        });
        if (err) throw err;
    var db = dbase.db("Addresses");
    var myobj = req.body;
    var dbase = db.collection("address");
    dbase.InsertOne({"customer_id":myobj.cid}, function (err, res) {
            if (err) throw err;
            //console.log(res);
            console.log(myobj.cid + " Inserted");
        });
app.post("/DeleteData", function (req, res) {
    MongoClient.connect(url, function (err, dbase) {
        if (err) throw err;
        var db = dbase.db("Addresses");
        var myobj = req.body;
       var dbas = db.collection("address");
        dbas.deleteOne({"customer_id":myobj.cid}, function (err, res) {
            if (err) throw err;
            //console.log(res);
            console.log(myobj.cid + " Deleted");
        });
        dbase.close();
    });
});
        dbase.close();

    });
});
