app.controller("home",function($scope, $rootScope){
    $rootScope.CustomerDetails = {
        "_id": "1",
        "customerId": "C101",
        "customerName": "Vaish",
        "customerEmail": "vaish@gmail.com",
        "Address": {
            "street": "Colony",
            "city": "Banglore",
            "state": "Karnataka",
            "country": "India",
            "ZIP": "560027"
        }
    }
})
