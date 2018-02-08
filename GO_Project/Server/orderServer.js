var express = require("express");
var router = express.Router();
var orderDelete = require("../DataBase/orderStatusDelete.js");
var orderUpdateStatus = require("../DataBase/orderStatusUpdate.js");
var updateOrderAddress = require("../DataBase/orderAddressUpdate.js");

router.post("/updatestatus", function (req, res){
	res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
	orderUpdateStatus.updateOrder(req.body,function callback(result){
		
		console.log("New order updated");
		res.send(true);
		res.end();
	});
});
router.post("/updateAddress", function (req, res){
	res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
	updateOrderAddress.update(req.body,function callback(result){
		
		console.log("Address updated");
		res.send(true);
		res.end();
	});
});

//delete
/*
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
       
});*/

module.exports = router;
