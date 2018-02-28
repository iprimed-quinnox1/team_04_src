var mongoose = require('mongoose');


var address = mongoose.model("Address");
exports.search = function (req, res) {
    //console.log("yahan to aa gya");
    //res.write("hello"); '' 
    var myobj = req.body;
    address.find({ customerId:myobj.customerId}, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        console.log("1 result sent");
    });
    //console.log("Hey i reached here");
}
exports.delete = function (req, res) {
    //console.log("yahan to aa gya");
    //res.write("hello"); '' 
    var myobj = req.body;
    address.findByIdAndRemove(myobj._id, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(true);
        console.log("1 address deleted");
    });
    //console.log("Hey i reached here");
}
exports.insert = function (req, res) {
    //console.log("yahan to aa gya");
    //res.write("hello"); '' 
    var myobj = req.body;
    var temp = new address(myobj);
    temp.save(myobj, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(true);
        console.log("1 address inserted");
    });
    //console.log("Hey i reached here");
}
exports.update = function (req, res) {
    //console.log("yahan to aa gya");
    //res.write("hello"); '' 
    var myobj = req.body;
    address.findByIdAndUpdate(myobj._id,{$set:myobj}, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(true);
        console.log("1 address updated");
    });
    //console.log("Hey i reached here");
}