var app = angular.module('myApp', [ "ngRoute" ]);

app.config(function($routeProvider) {
	$routeProvider.when("/cart", {
		templateUrl : "./HTML/cart.html",
		controller : "cart"
	}).when("/suggest", {
		templateUrl : "./HTML/Address_Suggestion.html",
		controller : "addressSuggestion"
	}).when("/newAddress", {
		templateUrl : "./HTML/address_form.html",
		controller : "newAddress"
	}).when("/logistics", {
		templateUrl : "./HTML/logisticsMain.html",
		controller : "logisticsMain"
	}).when("/order", {
		templateUrl : "./HTML/order.html",
		controller : "order"
	})
	.when("/addTechSpecs", {
		templateUrl : "./HTML/addTechSpecs.html",
		controller : "myCtrl"
	})

});