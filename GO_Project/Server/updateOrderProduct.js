var express = require("express");
var router = express.Router();
var updateProduct = require("../DataBase/updateProduct.js");


router.post("/updateProduct", function (req, res){
	res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
	updateProduct.update(req.body,function callback(result){
		
		console.log("Product updated");
		res.send(true);
		//res.end();
	});
});

module.exports = router;
