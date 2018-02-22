
app.controller("productList", function($scope, $http,$rootScope,$location) {

	//var ob = {logisticsId : "L101"};
	
	$http.post(url+"product/fetch").then(function(response) {
		$scope.products = response.data;
		$scope.loaded = true;
		
	},function(error){
		console.log(error);
	});
	$scope.selectedItem = function(pid){
		$location.path("/productDetails").search('pid',pid);
	}
	
	$scope.selectedItem = function(pid){
		$location.path("/productDetails").search('pid',pid);
	}
	
});