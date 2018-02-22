// controller of Address Suggestion
app.controller("addressSuggestion", function($scope, $rootScope, $location,
		$http) {

	//$scope.index = $location.search().index;
	//$scope.CustomerDetails = $rootScope.CustomerDetails;
	//$scope.address = $rootScope.address;
	$scope.init = function(){
		console.log("address:");
		console.log($scope.address);
		var ob = {
			cid : "C101"
		};
		$http.post(url+"address/search", ob).then(
				function(response) {
					$scope.addressList = response.data;
					//console.log(response.data);
					var add= $scope.addressList.filter(e=>e.type==='D');
					$scope.address = add[0];
					console.log($scope.address);
					//console.log(($scope.defaultAddress));
					if ($scope.addressList.length == 0) {
						alert("No saved addresses found, please add");
						//$location.path("/newAddress");
					}
				}, function(error) {
					if (!$scope.addressList) {
						alert("No addresses found, please add");
						//$location.path("/newAddress");
					}

				});

		if($rootScope.object){
			//$rootScope.object[$scope.index].address = $scope.address;
		}
	}
	$scope.Data = function(index) {
		$scope.address = $scope.addressList[index];
		$rootScope.object[$scope.index].address = $scope.address;
	}

	$scope.goBack = function() {
		window.history.back();
	}
});