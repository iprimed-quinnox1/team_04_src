var mongoose = require('mongoose');

var order = mongoose.model("Order");
exports.insert = function (req, res) {
	console.log("order insert me to aa gya");
	//res.write("hello");
	for (var i = 0; i < req.body.length; i++) {
		var temp = new order(req.body[i])
		temp.save(req.body[i], function (err, result) {
			if (err)
				throw err;
			console.log("hello")

			console.log(result);
		});
		//console.log("Hey i reached here");
	}
	res.send(true);
}

exports.fetch = function (req, res) {
	console.log("order fetch yahan to aa gya");
	//res.write("hello");
	myobj = req.body;
	order.find(myobj, function (err, result) {
		if (err)
			throw err;
		console.log(result);
		res.send(result);
	});
	//console.log("Hey i reached here");
}

exports.statusUpdate = function (req, res) {
	console.log("order status update yahan to aa gya");
	//res.write("hello");
	var myobj = req.body;
	order.update({ "orderId": myobj.orderId }, { $set: { status: myobj.status } }, function (err, result) {
		if (err)
			throw err;
		console.log(result);
		res.send(true);
	});
	console.log("Hey i reached here");
}

exports.addressUpdate = function (req, res) {
	console.log("order address update yahan to aa gya");
	//res.write("hello");
	var myobj = req.body;
	order.update({ "orderId": myobj.orderId }, { $set: { address: myobj.address } }, function (err, result) {
		if (err)
			throw err;
		console.log(result);
		res.send(true);
	});
	console.log("Hey i reached here");
}