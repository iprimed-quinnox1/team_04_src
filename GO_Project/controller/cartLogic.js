var app = angular.module('myApp', ["ngRoute"]);


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./HTML/cartdiv.html",
            controller: "cart"
        })
        .when("/suggest", {
            templateUrl: "./HTML/Address_Suggestion.html",
            controller: "addressSuggestion"
        })
        .when("/newAddress", {
            templateUrl: "./HTML/address_form.html",
            controller: "newAddress"
        })

});


app.controller("cart", function ($scope, $rootScope, $http) {



    $scope.CustomerDetails = {
        "_id": "1",
        "customerName": "Vaish",
        "customerEmail": "vaish@gmail.com",
        "Address": [
            {
                "street": "Colony",
                "city": "Banglore",
                "state": "Karnataka",
                "country": "India",
                "ZIP": "560027"
                },

				]
    }
    $rootScope.abc = $scope.CustomerDetails;
    console.log("This is cart controller");
    console.log($scope.abc);
    $scope.Cart = {
        "customerId": "1",
        "Product_List": [
            {
                "pid": "121",
                "pname": "you",
                "gift_Wrapper": true
            },
            {
                "pid": "101",
                "pname": "know",
                "gift_Wrapper": false
            },
            {
                "pid": "111",
                "pname": "nothing",
                "gift_Wrapper": true
            }



			]
    }
    //$http.post("http://localhost:3000/initializeData").then(function (response) {
    //$scope.techSpecs1 = response.data;
    //console.log(response.data);
    //});

});

//controller of Address Suggestion
app.controller("addressSuggestion", function ($scope, $rootScope, $http) {

	console.log($rootScope.a);
    $scope.CustomerDetails = $rootScope.abc;
    console.log("This is addressSuggestion controller");
    console.log($scope.abc);
    $scope.address = [
        {
            custname: "lalli",
            city: "chennai",
            state: "tamilnadu",
            pinCode: "560060",
            mobileNo: "9445781234"
        }, {
            custname: "Anka",
            city: "Bangalore",
            state: "Karnataka",
            pinCode: "560060",
            mobileNo: "9445781234"
        }
    ];
    $scope.Data = function (index) {
        $scope.addressList = {
            name: $scope.address[index].custname,
            city: $scope.address[index].city,
            state: $scope.address[index].state,
            pin: $scope.address[index].pinCode,
            mob: $scope.address[index].mobileNo
        }
    }
});







//controller of Address Form
app.controller("newAddress", function ($scope, $rootScope, $http,$location) {
    // initial data;

    $scope.CustomerDetails = $rootScope.abc;
    console.log("This is newAddress controller");

    console.log($scope.abc);

    function Address(cid, mobNo, city, state, pinCode, Address) {
        this.cid = cid;
        this.mobileNo = mobNo;
        this.city = city;
        this.state = state;
        this.pincode = pinCode;
        this.Address = Address;

    }




    $scope.saveAddress = function () {
        var r = confirm("Do you want to save it!");
        if (r == true) {
            txt = "Thank you!";
        } else {
            txt = "";
        }
        console.log($scope.address);
        var address = $scope.address;     
        $rootScope.address = address;
        console.log(address);
       $http.post("http://localhost:3000/address/insert", address).then(function (response) {
            //$scope.addressList = response.data;
    	   console.log(response.data);
            alert("received");
            $rootScope.a = "hello from address form";
            $location.path("/suggest");
            
        }, function (error) {
            alert("Something Went Wrong!.");
        });
       //$location.path("/suggest");
    }

    //Cancel
    $scope.cancel = function () {
        var txt;
        if (!$scope.cid) {
            alert("enter a CId");
            return;
        }
        var r = confirm("Are you sure to delete?");
        if (r == true) {
            txt = "Deleted!";
        } else {
            txt = "";
            return;
        }
        document.getElementById("demo").innerHTML = txt;
        var del = {
            cid: $scope.cid.toString()
        };

        $http.post("http://localhost:3000/DeleteAddressForm", del).then(function (response) {
            alert("received");
        });


    }
});
