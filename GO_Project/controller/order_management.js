app.module("app"[]);
app.controller("product", function($scope) {

	$scope.product= [{
        		_id:1,
	customerId:"C101",
	price:5000,
    supplierId:"C102",
	logisticId:"C103",
	status: "processed",
	timeDate:07/02/18,
        },
     {
        _id:2,
        customerId:"C101",
        price:7000,
        quantity:5,
        itemId:2,
        supplierId:"C102",
        logisticId:"C103",
        status: "processed",
        timeDate:07/02/18,
    }]
    });


