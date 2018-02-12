// controller of Address Form
app.controller("newAddress", function($scope, $rootScope, $http, $location) {
	// initial data;

	$scope.CustomerDetails = $rootScope.CustomerDetails;
	console.log("This is newAddress controller");

	$scope.saveAddress = function() {
		var r = confirm("Do you want to save it!");
		if (r == true) {
			txt = "Thank you!";
		} else {
			txt = "";
		}
		console.log($scope.address);
		var address = $scope.address;
		address.customerId = $rootScope.CustomerDetails.customerId;
		address.type = "T";
		$rootScope.address = address;
		console.log(address);
		$http.post("http://localhost:3000/address/insert", address).then(
				function(response) {

					console.log(response.data);
					alert("received");
					$rootScope.a = "hello from address form";
					window.history.back();

				}, function(error) {
					alert("Something Went Wrong!.");
				});
	}

	// Cancel
	$scope.cancel = function() {
		window.history.back();
	}
});