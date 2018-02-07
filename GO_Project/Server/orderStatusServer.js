var express = require("express");
var router = express.Router();
var orderDelete = require("../DataBase/orderStatusDelete.js");
var orderUpdate = require("../DataBase/orderStatusUpdate.js");

router.post("/update", function (req, res){
	res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
	orderUpdate.updateOrder(req.body,function callback(result){
		
		console.log("New order updated");
		res.send(true);
		//res.end();
	});
});

//delete
router.post("/delete", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }); // to set the header .
    orderDelete.deleteOrder(req.body,function callback(result){
		 res.send(result);
		 console.log("Order is deleted");
		 res.end();
    });
       
});

module.exports = router;
