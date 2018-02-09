
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
		if(!$rootScope.object){
			$rootScope.object = $scope.product;
		}
		else{
			$scope.product = $rootScope.object ;
		}
	},function(error){
		$location.path("#!/cart");
	});
	
	$scope.cancelOrder = function(x){
		x.status = 6;
		$http.post("http://localhost:3000/order/updatestatus",x).then(function(response){
			alert("Status changed of "+x.pname);
		},function(error){
			alert("Something went wrong.Please try after some time.");
		});
	}
	$scope.addressChange = function(index){
		$location.path("/suggest").search("index",index);
	}
	//console.log($rootScope.object);
});