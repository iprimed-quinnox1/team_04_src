var app = angular.module('myApp', [ "ngRoute" ]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "./HTML/home.html",
		
	}).when("/cart", {
		templateUrl : "./HTML/cart.html",
		controller : "cart"
	}).when("/suggest", {
		templateUrl : "./HTML/addressSuggestion.html",
		controller : "addressSuggestion"
	}).when("/newAddress", {
		templateUrl : "./HTML/addressForm.html",
		controller : "newAddress"
	}).when("/logistics", {
		templateUrl : "./HTML/logisticsMain.html",
		controller : "logisticsMain"
	}).when("/order", {
		templateUrl : "./HTML/order.html",
		controller : "order"
	}).when("/productList", {
		templateUrl : "./HTML/productList.html",
		controller : "productList"
	})

});