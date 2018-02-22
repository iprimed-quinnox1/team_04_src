var express = require("express");
var router = express.Router();
var fetchuserDetails = require("../DataBase/loginDatabase.js")


router.post("/fetch",function(request,response){
	response.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
	});
	fetchOrders.fetch(request.body, function callback(result){
		response.send(result);
		response.end();
	});
})



module.exports = router;

