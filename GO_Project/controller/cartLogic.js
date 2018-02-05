var app = angular.module('myApp', [ "ngRoute" ]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "./HTML/cartdiv.html",
		controller : "cart"
	}).when("/suggest", {
		templateUrl : "./HTML/Address_Suggestion.html",
		controller : "addressSuggestion"
	}).when("/newAddress", {
		templateUrl : "./HTML/address_form.html",
		controller : "newAddress"
	})

});

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
	
	
	console.log("This is cart controller");
	
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
	if($rootScope.Cart){
		for(var i=0; i<$scope.Cart.length; i++){
			$scope.Cart[i].address = $rootScope.Cart[i].address;
		}
	}
	
	console.log($scope.Cart);
	
	$rootScope.Cart = $scope.Cart;
	
	$scope.checkout = function() {
		alert("Proceed to checkout");
	}

});

// controller of Address Suggestion
app.controller("addressSuggestion", function($scope, $rootScope,$location, $http) {

	//console.log($rootScope.a);
	$scope.index = $location.search().index;
	console.log($scope.index);
	$scope.CustomerDetails = $rootScope.abc;
	console.log("This is addressSuggestion controller");
	console.log($scope.abc);
	$scope.addressList = $rootScope.address;
	$scope.address = [ {
		"customerId" : "C101",
		custname : "lalli",
		city : "chennai",
		state : "tamilnadu",
		pinCode : "560060",
		mobileNo : "9445781234"
	}, {
		"customerId" : "C101",
		custname : "Anka",
		city : "Bangalore",
		state : "Karnataka",
		pinCode : "560060",
		mobileNo : "9445781234"
	} ];
	$rootScope.Cart[$scope.index].address = $scope.addressList;
	$scope.Data = function(index) {
		$scope.addressList = {
			name : $scope.address[index].custname,
			city : $scope.address[index].city,
			state : $scope.address[index].state,
			pin : $scope.address[index].pinCode,
			mob : $scope.address[index].mobileNo
		}
		$rootScope.Cart[$scope.index].address = $scope.addressList;
	}
});

// controller of Address Form
app.controller("newAddress", function($scope, $rootScope, $http, $location) {
	// initial data;

	$scope.CustomerDetails = $rootScope.abc;
	console.log("This is newAddress controller");

	console.log($scope.abc);

	$scope.saveAddress = function() {
		var r = confirm("Do you want to save it!");
		if (r == true) {
			txt = "Thank you!";
		} else {
			txt = "";
		}
		console.log($scope.address);
		var address = $scope.address;
		address.cid = $rootScope.CustomerDetails.cid;
		$rootScope.address = address;
		console.log(address);
		$http.post("http://localhost:3000/address/insert", address).then(
				function(response) {
					// $scope.addressList = response.data;
					console.log(response.data);
					alert("received");
					$rootScope.a = "hello from address form";
					window.history.back();

				}, function(error) {
					alert("Something Went Wrong!.");
				});
		// $location.path("/suggest");
	}

	// Cancel
	$scope.cancel = function() {
		window.history.back();
	}
});
