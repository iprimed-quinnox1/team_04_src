
app.controller("logisticsMain", function($scope, $http,$rootScope) {

	$scope.Order = [ {
		"customerId" : "C101",
		"pid" : "121",
		"pname" : "Shoe",
		"gift_Wrapper" : true,
		"quantity" : 1,
		"status" : 2,
		logisticsId :"L101",
		"address" : {
			Address : "HAriom Nagar",
			_id : "5a759efcacf4680a3735f8ef",
			city : "Patna",
			customerId : "C101",
			customerName : "Nitish",
			mobileNo : 8967474127,
			pincode : 801503,
			state : "Bihar"
		},
		
	}, {
		"customerId" : "C101",
		"pid" : "101",
		"pname" : "Tent",
		"gift_Wrapper" : false,
		"quantity" : 1,
		status :0,
		logisticsId :"L101",
		"address" : {
			Address : "HAriom Nagar",
			_id : "5a759efcacf4680a3735f8ef",
			city : "Patna",
			customerId : "C101",
			customerName : "Nitish",
			mobileNo : 8967474127,
			pincode : 801503,
			state : "Bihar"
		}
	}, {
		"customerId" : "C101",
		"pid" : "111",
		"pname" : "Gloves",
		"gift_Wrapper" : true,
		"quantity" : 1,
		status :1,
		logisticsId :"L101",
		"address" : {
			Address : "HAriom Nagar",
			_id : "5a759efcacf4680a3735f8ef",
			city : "Patna",
			customerId : "C101",
			customerName : "Nitish",
			mobileNo : 8967474127,
			pincode : 801503,
			state : "Bihar"
		}
	} ];
	$scope.status = ["order placed","processing","order dispatched","on the way","out for delivery","delivered"];
	//console.log($scope.Order);
	$scope.store = function(ob){
		console.log(ob);
	}
});