app.controller("cart", function($scope, $rootScope, $http, $location) {

	$scope.CustomerDetails = $rootScope.CustomerDetails;
	$http.post(url+"cart/fetch",$scope.CustomerDetails).then(function(response){
		$scope.Cart = response.data;
		$scope.loaded = true;
	});
	if ($rootScope.object && $scope.Cart) {
		for (var i = 0; i < $scope.Cart.length; i++) {
			$scope.Cart[i].address = $rootScope.object[i].address;
		}
	}
	$rootScope.object = $scope.Cart;

	//console.log("This is cart controller");
	var selectedItem = {};
	$scope.init = function () {
		console.log("address:");
		console.log($scope.address);
		var ob = { customerId: $scope.CustomerDetails.customerId };
		$http.post(url+"address/search", ob).then(
			function (response) {
				$scope.addressList = response.data;
				var add = $scope.addressList.filter(e => e.type === 'D');
				$scope.address = add[0];
				console.log($scope.address);
				for (var i = 0; i < $scope.Cart.length; i++) {
					$scope.Cart[i].address = $scope.address;
				}
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

	$scope.changeDefaultAddress = function(x,index){
		$http.post(url+"address/default",x).then(function(response){
			alert("changed successfully");
			
		});
		for(var i=0;i<$scope.addressList.length;i++){
			$scope.addressList[i].type = 'T';
		}
		$scope.addressList[index].type = 'D';
		// /var defaultAddressButton = document.getElementById("defaultAddressButton");

	}


	

	$scope.deleteCartItem = function(ob,index) {
		
		$scope.Cart.splice(index, 1);
		$rootScope.object = $scope.Cart;
		$http.post(url+"cart/delete",ob).then(function(response){
			alert("Item removed successfully");
		});
	}

	$scope.checkout = function() {
		var obj = {ob:$scope.Cart};
		for(var i=0;i<obj.ob.length;i++){
			obj.ob[i].logisticsId = "L101";
			obj.ob[i].date = new Date();
			obj.ob[i].status = "0";
			obj.ob[i]._id = Math.floor(Math.random() * 100000000000)+"_" +obj.ob[i].pid;
			obj.ob[i].orderId = Math.floor(Math.random() * 100000000000)+"_" +obj.ob[i].pid;
		}
		console.log(obj);
		$http.post(url+"order/insert",obj).then(function(response) {
			alert("Order placed successfully");
			$scope.Cart = null;
			$http.post(url+"cart/removeAll",$scope.CustomerDetails).then(function(response){
				alert("hello");
			});
			$location.path("/order");
        });
	}

});