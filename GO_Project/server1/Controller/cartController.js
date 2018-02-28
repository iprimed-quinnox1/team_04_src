var mongoose = require('mongoose');


var cart = mongoose.model("Cart");


exports.fetch = function(req,res){
    console.log(" cart fetch yahan to aa gya");
    //res.write("hello");
   var myobj = req.body;
    cart.find({customerId:myobj.customerId},function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
    console.log("Hey i reached here");
}

exports.removeAll = function(req,res){
    console.log("yahan to aa gya");
    //res.write("hello");
     var myobj = req.body;
    cart.remove({customerId:myobj.customerId},function(err,result){
        if(err) throw err;
        console.log(result);
    });
    console.log("Hey i reached here");
}

exports.insert = function(req,res){
    console.log("yahan to aa gya");
    //res.write("hello");
    var obj = req.body;
    var temp = new cart(obj);
    temp.save(req.body,function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(true);
    });
    console.log("Hey i reached here");
}

exports.delete = function(req,res){
    console.log("yahan to aa gya");
    //res.write("hello");
   var ob = req.body;
    cart.findByIdAndRemove(ob._id,function(err,result){
        if(err) throw err;
        console.log(result);
        console.log("cart item deleted");
        res.send(true);
    });
    console.log("Hey i reached here");
}