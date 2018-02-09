app.controller("cart", function($scope, $rootScope, $http) {

	$scope.CustomerDetails = {
		"_id" : "1",
		"customerId" : "C101",
		"customerName" : "Vaish",
		"customerEmail" : "vaish@gmail.com",
		"Address" : {
			"street" : "Colony",
			"city" : "Banglore",
			"state" : "Karnataka",
			"country" : "India",
			"ZIP" : "560027"
		}
	}
	$rootScope.CustomerDetails = $scope.CustomerDetails;

	//console.log("This is cart controller");

	$scope.Cart = [ {
		"customerId" : "C101",
		"pid" : "121",
		"pname" : "Shoe",
		"gift_Wrapper" : true,
		"quantity" : 1,
	}, {
		"customerId" : "C101",
		"pid" : "101",
		"pname" : "Tent",
		"gift_Wrapper" : false,
		"quantity" : 1
	}, {
		"customerId" : "C101",
		"pid" : "111",
		"pname" : "Gloves",
		"gift_Wrapper" : true,
		"quantity" : 1,
	} ];
	if ($rootScope.object) {
		for (var i = 0; i < $scope.Cart.length; i++) {
			$scope.Cart[i].address = $rootScope.object[i].address;
		}
	}

	//console.log($scope.Cart);

	$rootScope.object = $scope.Cart;

	$scope.deleteCartItem = function(index) {
		$scope.Cart.splice(index, 1);
		$rootScope.object = $scope.Cart;
	}

	$scope.checkout = function() {
		var obj = {ob:$scope.Cart};
		for(var i=0;i<obj.ob.length;i++){
			obj.ob[i].logisticsId = "L101";
			obj.ob[i].date = new Date();
			obj.ob[i].status = "0";
			obj.ob[i].orderId = obj.ob[i].date + obj.ob[i].pid + obj.ob[i].pname;
		}
		console.log(obj);
		$http.post("http://localhost:3000/order/insert",obj).then(function(response) {
            alert("received");
        });
	}

});