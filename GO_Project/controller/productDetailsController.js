app.controller("productDetails",function($rootScope , $scope ,$http , $location){
    $scope.pid = $location.search().pid;
    var itemPid = {pid : $scope.pid.toString()};
		$http.post("http://localhost:3000/product/search",itemPid).then(function(response){
			$scope.product = response.data[0];
            //console.log($scope.techSpecs);
			$scope.image = "./resources/images/"+ $scope.product.img;
		 });
	
		 $scope.addToCart = function(){
			if ($rootScope.CustomerDetails) {
				var cartOb = {
						
					_id : "cart"+Math.floor(Math.random() * 100000000000)+"_" +$scope.pid,
					customerId : $rootScope.CustomerDetails.customerId,
					pid : $scope.pid,
					pname : $scope.product.itemName,
					price : $scope.product.itemPrice,
					gift_Wrapper : false,
					img: $scope.product.img,
					quantity : 1,
				}
				$http.post("http://localhost:3000/cart/insert",cartOb).then(function(response){
					alert("received");
				},function(error){
					console.log(error);
				}
			);
			}
			else{
				alert("Please Login");
				$location.path("/");
			}
		 }
	
});