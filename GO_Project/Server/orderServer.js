var express = require("express");
var router = express.Router();
var orderDelete = require("../DataBase/orderStatusDelete.js");
var orderUpdateStatus = require("../DataBase/orderStatusUpdate.js");
var updateOrderAddress = require("../DataBase/orderAddressUpdate.js");
var insertOrder = require("../DataBase/orderInsert.js");
var fetchOrders = require("../DataBase/orderFetch.js")

router.post("/insert", function (req, res){
	res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
	insertOrder.insertNewOrder(req.body,function callback(result){
		
		console.log("New order inserted");
		res.send(result);
		res.end();
	});
});

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
