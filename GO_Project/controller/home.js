
app.controller("home",function($scope){
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
});                  
    
