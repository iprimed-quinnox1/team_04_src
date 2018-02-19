// controller of Address Form
app.controller("newAddress", function ($scope, $rootScope, $http, $location) {
	// initial data;

	$scope.CustomerDetails = $rootScope.CustomerDetails;
	console.log("This is newAddress controller");
	if ($rootScope.changeAddress) {
		$scope.address = $rootScope.changeAddress;
	}
	$scope.saveAddress = function () {
		var r = confirm("Do you want to save it!");
		if (r == true) {
			txt = "Thank you!";
		} else {
			txt = "";
			return;
		}
		if ($rootScope.changeAddress) {
			var address = $scope.address;
			console.log(address);
		}
		else{
			var address = $scope.address;
			address.type = "T";
			address._id = Math.floor(Math.random() * 100000000000) + "_" + address.customerId;
			address.customerId = $rootScope.CustomerDetails.customerId;
			$rootScope.address = address;
			$http.post("http://localhost:3000/address/insert", address).then(
			function (response) {

				console.log(response.data);
				alert("received");
				window.history.back();

			}, function (error) {
				alert("Something Went Wrong!.");
			});
		}
		
		
		//console.log(address);
		
	}

	// Cancel
	$scope.cancel = function () {
		window.history.back();
	}
});