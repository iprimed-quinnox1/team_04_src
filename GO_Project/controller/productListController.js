
app.controller("productList", function($scope, $http,$rootScope) {

	//var ob = {logisticsId : "L101"};
	
	$http.post("http://localhost:3000/product/fetch").then(function(response) {
		$scope.products = response.data;
		$scope.loaded = true;
		
	},function(error){
		console.log(error);
	});
	
});