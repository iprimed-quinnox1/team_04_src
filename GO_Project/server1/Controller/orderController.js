var mongoose = require('mongoose');


var order = mongoose.model("Order");
exports.fetch = function(req,res){
    console.log("yahan to aa gya");
    //res.write("hello");
   
   address.find(function(err,result){
        if(err) throw err;
        console.log(result);
    });
    console.log("Hey i reached here");
}