var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/register', {
			templateUrl: 'registration.html',
			controller: 'registrationController'
		})
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'loginController'
		})
		
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'homeController'
		})
		
		.when('/main', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		
		.otherwise({
			redirectTo: '/main'
		});
});

