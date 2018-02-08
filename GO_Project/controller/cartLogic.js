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

	$scope.deleteCartItem = function(index){
		$scope.Cart.splice(index,1);
		$rootScope.Cart = $scope.Cart;
	}
	
	$scope.checkout = function() {
		alert("Proceed to checkout");
	}

});
//-----------------------------------------------------------------------------------------------------------------
// controller of Address Suggestion
app.controller("addressSuggestion", function($scope, $rootScope,$location, $http) {


	$scope.index = .search().index;
	$scope.CustomerDetails = $rootScope.CustomerDetails;
	$scope.address = $rootScope.address;
	var ob = {cid:$scope.CustomerDetails.customerId};
	$http.post("http://localhost:3000/address/search",ob).then(function(response){
		$scope.addressList = response.data;
        console.log(response.data);
        if($scope.addressList.length == 0){
			alert("No saved addresses found, please add");
			$location.path("/newAddress");
		}
	},function(error){
		if(!$scope.addressList){
			alert("No addresses found, please add");
			$location.path("/newAddress");
		}
		
	});
	
	$rootScope.Cart[$scope.index].address = $scope.address;
	$scope.Data = function(index) {
		$scope.address = $scope.addressList[index];
		$rootScope.Cart[$scope.index].address = $scope.address;
	}
});

//--------------------------------------------------------------------------------------------------------------
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
		address.customerId = $rootScope.CustomerDetails.customerId;
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
