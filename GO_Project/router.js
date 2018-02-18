var app = angular.module('myApp', [ "ngRoute" ]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "./HTML/home.html",
		controller : "home"
		
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
	}).when("/productDetails", {
		templateUrl : "./HTML/productDetails.html",
		controller : "productDetails"
	}).when("/register", {
		templateUrl : "./HTML/registerForm.html",
		controller : "register"
	}).when("/addSpecs", {
		templateUrl : "./HTML/addTechSpecs.html",
		controller : "addTechSpecs"
	})

});