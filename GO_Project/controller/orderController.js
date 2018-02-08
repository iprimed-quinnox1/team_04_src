
app.controller("order", function ($scope,$rootScope) {

    $scope.product = [{
        _id: 1,
        customerId: "C101",
        price: 5000,
        supplierId: "C102",
        logisticId: "C103",
        status: "processed",
        timeDate: new Date(),
    },
    {
        _id: 2,
        customerId: "C101",
        price: 7000,
        quantity: 5,
        itemId: 2,
        supplierId: "C102",
        logisticId: "C103",
        status: "processed",
        timeDate: new Date(),
	}];
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
	
	if(!$rootScope.object){
		$rootScope.object = $scope.product;
	}
	else{
		$scope.product = $rootScope.object ;
	}

	console.log($rootScope.object);
});