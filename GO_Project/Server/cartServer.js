var express = require("express");
var router = express.Router();
var cartData = require("../DataBase/cartData.js");

router.get("/initializeData", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials":true
    });
    console.log("Server");
    cartData.readCart(req.body,function callback(result){
    	 res.send(result);
         console.log("Server initial result");
         res.end();
    });
});

module.exports = router;
//