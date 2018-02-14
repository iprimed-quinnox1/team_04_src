app.controller("cart", function($scope, $rootScope, $http, $location) {

	$scope.CustomerDetails = $rootScope.CustomerDetails;
	$http.post("http://localhost:3000/cart/fetch",$scope.CustomerDetails).then(function(response){
		$scope.Cart = response.data
//		alert(JSON.stringify($scope.Cart));
	});

	//console.log("This is cart controller");
	var selectedItem = {};
	$scope.init = function () {
		console.log("address:");
		console.log($scope.address);
		var ob = { cid: "C101" };
		$http.post("http://localhost:3000/address/search", ob).then(
			function (response) {
				$scope.addressList = response.data;
				var add = $scope.addressList.filter(e => e.type === 'D');
				$scope.address = add[0];
				console.log($scope.address);
				if ($scope.addressList.length == 0) {
					alert("No saved addresses found, please add");
					//$location.path("/newAddress");
				}
			}, function (error) {
				if (!$scope.addressList) {
					alert("No addresses found, please add");
					//$location.path("/newAddress");
				}

			});
	}
	$scope.changeAddress = function (x) {
		$scope.address = x;
	}

	$scope.updateAddress = function () {
		selectedItem.address = $scope.address;
	}
	$scope.addressChange = function (x) {
		selectedItem = x;
	}


	/*$scope.Cart = [ {
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
	} ];*/
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
			obj.ob[i].orderId = Math.floor(Math.random() * 100000000000)+"_" +obj.ob[i].pid;
		}
		console.log(obj);
		$http.post("http://localhost:3000/order/insert",obj).then(function(response) {
			alert("Order placed successfully");
			$scope.Cart = null;
			$location.path("/order");
        });
	}

});