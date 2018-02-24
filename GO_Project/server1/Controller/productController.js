var mongoose = require('mongoose');


var product = mongoose.model("Product");
exports.search = function(req,res){
    console.log("yahan to aa gya");
   
    test.find(function(err,result){
        if(err) throw err;
        console.log(result);
    });
    console.log("Hey i reached here");
}
