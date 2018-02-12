var express = require("express");
var router = express.Router();
var userInsert = require("../DataBase/registerFormInsert.js");



router.post("/register", function (req, res){
	res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
	userInsert.registerNew(req.body,function callback(result){
		
		console.log(" new user registered");
		res.send(true);
		//res.end();
	});
});


module.exports = router;

