
app.controller("logisticsMain", function($scope, $http,$rootScope) {

	var ob = {logisticsId : "L101"};
	
	$http.post("http://192.168.10.41:3000/order/fetch", ob).then(function(response) {
		$scope.Order = response.data;
		
	},function(error){
		$location.path("/logistics");
	});
	$scope.store = function(x,status){
		////////
		x.status = status;
		$http.post("http://192.168.10.41:3000/order/updatestatus",x).then(function(response){
			alert("Status changed of "+x.pname);
		},function(error){
			alert("Something went wrong.Please try after some time.");
		});
		
	}
	$scope.status = ["order placed","processing","order dispatched","on the way","out for delivery","delivered"];
	//console.log($scope.Order);
	
});