var app=angular.module("MyApp",[])
app.controller("getTechSpecsController",function($scope,$http){
	$scope.getData = function (){
		$scope.prod=false;
		var itemPid = {pid : $scope.pid.toString()};
		$http.post("http://localhost:3000/readData",itemPid).then(function(response){
			$scope.techSpecs = response.data;
            console.log($scope.techSpecs);
			$scope.imag = "resources/images/"+ $scope.techSpecs[0].img;
 		});
	}
});