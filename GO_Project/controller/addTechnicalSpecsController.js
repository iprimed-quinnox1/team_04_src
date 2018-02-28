
app.controller("myCtrl", function ($scope, $http) {
	$scope.product = {};
	$scope.pid = null;
	var update = false;
	$scope.searchList = false;
	$scope.product.pid = null;
	$scope.itemName = null;
	$scope.itemPrice = null;
	$scope.product.techSpecs = new Array();
	$scope.techSpecs = [{ techAttr: "", techValue: "" }];


	//
	//Initialising data from DB
	//
	$http.post(url + "product/fetch").then(function (response) {
		$scope.techSpecs1 = response.data;
		console.log(response.data);
	});
	//
	// Removing a Row
	//
	$scope.remove = function (index) {
		$scope.techSpecs.splice(index, 1);
	}


	//
	//search list
	//

	$scope.searchBox = function () {

		if ($scope.pid.length >= 2) {
			$scope.searchList = true;
		}
		else {
			$scope.searchList = false;

		}
	}

	$scope.fetchData = function (x) {
		$scope.pid = x.pid;
		for (var i = 0; i < x.techSpecs.length; i++) {
			$scope.techSpecs[i].techAttr = x.techSpecs[i].techAttr;
			$scope.techSpecs[i].techValue = x.techSpecs[i].techValue;
		}
		$scope.newItemName = x.itemName;
		$scope.newItemPrice = x.itemPrice;
		update = true;

	}

	//Pushing data in DB
	//
	$scope.addTextBox = function () {
		$scope.techSpecs.push({
			techAttr: "",
			techValue: ""
		});
	}


	$scope.save = function () {

		var image = null;
		var fd = new FormData();
		if ($scope.files) {
			image = $scope.files.name;
		}
		if (!$scope.pid) {
			alert("enter a product Id");
			return;
		}

		var txt;
		update = false;

		for (var i = 0; i < $scope.techSpecs1.length; i++) {
			if ($scope.pid == $scope.techSpecs1[i].pid) {
				update = true;
			}
		}

		for (var i = 0; i < $scope.techSpecs.length; i++) {
			if (!$scope.techSpecs[i].techAttr && !$scope.techSpecs[i].techValue) {
				$scope.techSpecs.splice(i, 1);
				i -= 1;
			}
		}

		console.log($scope.techSpecs);
		fd.append('file', $scope.files);
		fd.append('pid', $scope.pid);
		fd.append('itemName', $scope.newItemName);
		fd.append('itemPrice', $scope.newItemPrice);
		$scope.techSpecs = angular.toJson( $scope.techSpecs );
		$scope.techSpecs = JSON.parse($scope.techSpecs);
		fd.append('techSpecs', JSON.stringify($scope.techSpecs));
		// $scope.product.pid = $scope.pid;
		// $scope.product.techSpecs = $scope.techSpecs;
		console.log($scope.product);
		if (update) {
			var r = confirm("Product Id Already exists. Do you want to overwrite it?");
			if (r == true) {
				txt = "Updated!";
			}
			else {
				txt = "";
				return;
			}
			document.getElementById("demo").innerHTML = txt;
			$http.post(url + "product/updateData", fd, {
				transformRequest: angular.identity,
				headers: { 'Content-Type': undefined }
			}).then(function (response) {
				alert("received");
			});
		}
		else {
			var r = confirm("Do you want to save it?");
			if (r == true) {
				txt = "Saved!";
			}
			else {
				txt = "";
				return;
			}
			document.getElementById("demo").innerHTML = txt;
			$http.post(url + "product/insert", fd, {
				transformRequest: angular.identity,
				headers: { 'Content-Type': undefined }
			}).then(function (response) {
				alert("received");
			});
		}
		$scope.techSpecs = [{ techAttr: "", techValue: "" }];
		$scope.pid = "";
		document.getElementById("fileUpload").value = null;
		$scope.files = null;

	}



	//Delete
	$scope.delete = function () {
		var txt;
		if (!$scope.pid) {
			alert("enter a product Id");
			return;
		}
		var r = confirm("Are you sure to delete?");
		if (r == true) {
			txt = "Deleted!";
		}
		else {
			txt = "";
			return;
		}
		document.getElementById("demo").innerHTML = txt;
		var del = {
			pid: $scope.pid.toString()
		};

		$http.post(url + "addTechSpecs/DeleteData", del).then(function (response) {
			alert("received");
		});
		$scope.techSpecs = [{ techAttr: "", techValue: "" }];
		$scope.pid = "";
		document.getElementById("fileUpload").value = null;
		$scope.files = null;


	}
});

app.directive("fileInput", ['$parse', function ($parse) {
	return {
		restrict: 'A',
		link: function (scope, elm, attrs) {
			elm.bind('change', function (parse) {
				$parse(attrs.fileInput).assign(scope, elm[0].files[0]);
				scope.$apply();
			})
		}
	}
}]);