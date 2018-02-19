
app.controller("order", function ($scope, $rootScope, $http, $location) {

	/*$scope.CustomerDetails = {
		"_id": "1",
		"customerId": "C101",
		"customerName": "Vaish",
		"customerEmail": "vaish@gmail.com",
		"Address": {
			"street": "Colony",
			"city": "Banglore",
			"state": "Karnataka",
			"country": "India",
			"ZIP": "560027"
		}
	}*/
	if ($rootScope.CustomerDetails) {
		var ob = { customerId: $rootScope.CustomerDetails.customerId };
		$http.post("http://localhost:3000/order/fetch", ob).then(function (response) {
			$scope.loaded = true;
			$scope.product = response.data;
			console.log($scope.product);
			if (!$rootScope.object) {
				$rootScope.object = $scope.product;
			}
			else {
				$scope.product = $rootScope.object;
			}
		}, function (error) {
			$location.path("#!/cart");
		});
	}
	else{
		alert("Please Login");
		$location.path("/");
	}
	var selectedItem = {};
	$scope.init = function () {
		console.log("address:");
		console.log($scope.address);
		var ob = { customerId: $scope.CustomerDetails.customerId };
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
	// /$rootScope.CustomerDetails = $scope.CustomerDetails;
	



	$scope.changeAddress = function (x) {
		$scope.address = x;
	}

	$scope.updateAddress = function () {
		selectedItem.address = $scope.address;
	}
	$scope.changeDefaultAddress = function(x,index){
		$http.post("http://localhost:3000/address/default",x).then(function(response){
			alert("changed successfully");
			for(var i=0;i<$scope.addressList.length;i++){
				$scope.addressList[i].type = 'T';
			}
			$scope.addressList[index].type = 'D';
		});
	}

	$scope.cancelOrder = function (x) {
		x.status = 6;
		$http.post("http://localhost:3000/order/updatestatus", x).then(function (response) {
			alert("Status changed of " + x.pname);
		}, function (error) {
			alert("Something went wrong.Please try after some time.");
		});
	}
	$scope.addressChange = function (x) {
		selectedItem = x;
	}

});