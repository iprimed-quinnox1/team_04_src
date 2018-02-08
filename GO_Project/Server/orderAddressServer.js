var express = require("express");
var router = express.Router();
var updateAddress = require("../DataBase/orderAddress.js");


router.post("/updateAddress", function (req, res){
	res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
	updateAddress.update(req.body,function callback(result){
		
		console.log("Address updated");
		res.send(true);
		//res.end();
	});
});

module.exports = router;