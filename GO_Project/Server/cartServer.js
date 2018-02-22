var express = require("express");
var router = express.Router();
var cartRead = require("../DataBase/cartData.js");
var cartInsert = require("../DataBase/cartInsert.js");

router.post("/fetch", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials":true
    });
    console.log("Server");
    cartRead.readCart(req.body,function callback(result){
    	 res.send(result);
         console.log("Server initial result");
         res.end();
    });
});
router.post("/insert", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials":true
    });
    console.log("Server");
    cartInsert.insert(req.body,function callback(result){
    	 res.send(true);
         //console.log("Server initial result");
         res.end();
    });

});

module.exports = router;
//