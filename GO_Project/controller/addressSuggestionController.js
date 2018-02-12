// controller of Address Suggestion
app.controller("addressSuggestion", function($scope, $rootScope, $location,
		$http) {

	$scope.index = $location.search().index;
	$scope.CustomerDetails = $rootScope.CustomerDetails;
	$scope.address = $rootScope.address;
	var ob = {
		cid : $scope.CustomerDetails.customerId
	};
	$http.post("http://192.168.10.41:3000/address/search", ob).then(
			function(response) {
				$scope.addressList = response.data;
				console.log(response.data);
				$scope.address = $scope.addressList.filter(e=>e.type==='D');
				//console.log(($scope.defaultAddress));
				if ($scope.addressList.length == 0) {
					alert("No saved addresses found, please add");
					$location.path("/newAddress");
				}
			}, function(error) {
				if (!$scope.addressList) {
					alert("No addresses found, please add");
					$location.path("/newAddress");
				}

			});

	if($rootScope.object){
		//$rootScope.object[$scope.index].address = $scope.address;
	}
	$scope.Data = function(index) {
		$scope.address = $scope.addressList[index];
		$rootScope.object[$scope.index].address = $scope.address;
	}

	$scope.goBack = function() {
		window.history.back();
	}
});