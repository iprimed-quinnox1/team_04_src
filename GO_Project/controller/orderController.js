
app.controller("order", function ($scope,$rootScope,$http,$location) {

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
	var ob = {customerId : $scope.CustomerDetails.customerId};
	
	$http.post("http://localhost:3000/order/fetch", ob).then(function(response) {
		$scope.product = response.data;
		//console.log($scope.product);
	},function(error){
		$location.path("#!/cart");
	});
	
	if(!$rootScope.object){
		$rootScope.object = $scope.product;
	}
	else{
		$scope.product = $rootScope.object ;
	}
	$scope.cancelOrder = function(x){
		x.status = 6;
	}
	//console.log($rootScope.object);
});