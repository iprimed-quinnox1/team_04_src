app.controller("addressManagementController", function ($scope, $rootScope, $location, $http) {
    $scope.CustomerDetails = $rootScope.CustomerDetails;
    var ob = { customerId: $scope.CustomerDetails.customerId };
    $http.post(url+"address/search", ob).then(
        function (response) {
            $scope.addressList = response.data;
            var add = $scope.addressList.filter(e => e.type === 'D');
            $scope.address = add[0];
            console.log($scope.address);
            
            if ($scope.addressList.length == 0) {
                alert("No saved addresses found, please add");
                //$location.path("/newAddress");
            }
        }, function (error) {
            if (!$scope.addressList) {
                alert("No addresses found, please add");
                //$location.path("/newAddress");
            }

    });

    

    $scope.changeDefaultAddress = function (x, index) {
        $http.post( url+"address/default", x).then(function (response) {
            alert("changed successfully");

        });
        for (var i = 0; i < $scope.addressList.length; i++) {
            $scope.addressList[i].type = 'T';
        }
        $scope.addressList[index].type = 'D';
        // /var defaultAddressButton = document.getElementById("defaultAddressButton");

    }
    $scope.editAddress = function(x){
        $rootScope.changeAddress = x;
        $('#myModal').modal('hide');
        $location.path("/newAddress")
    }
});