
app.controller("productList", function($scope, $http,$rootScope) {

	var ob = {logisticsId : "L101"};
	
	$http.post("http://localhost:3000/product/fetch", ob).then(function(response) {
		$scope.products = response.data;
		
	},function(error){
		$location.path("/logistics");
	});
	
});