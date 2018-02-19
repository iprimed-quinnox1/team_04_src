app.controller("register", function($scope, $http) {
	// initial data;
	$scope.uname = ' ';
    $scope.password = ' ';
    $scope.confirmpassword = ' ';
   $scope.email = ' ';

	$scope.saveAddress = function() {
		var r = confirm("Do you want to save it!");
		if (r == true) {
			txt = "Thank you!";
		} else {
			txt = "invalid details";
		}
		console.log($scope.address);
		var address = new Address();
		console.log(address);
		$http.post("http://localhost:3000/registerationForm", address).then(
				function(response) {
					// $scope.addressList = response.data;
					console.log(response.data);
					alert("received");
				}, function(error) {
					alert("Something Went Wrong!.");
				});
	}

	$scope.registeration = function() {

		var customerOb = {
			customerId : "customer" + Math.floor(Math.random() * 10000000),
			// customerId : $rootScope.CustomerDetails.customerId,
			customerName : $scope.customer.customerName,
			customerPassword : $scope.customer.customerPassword,
			customerEmail : $scope.customer.customerEmail,
			address : {}
		}
		console.log(customerOb);
		$http.post("http://localhost:3000/customer/register", customerOb).then(
				function(response) {
					alert("received");
				}, function(error) {
					console.log(error);
					alert("Something went wrong.");
				});
	}

});
