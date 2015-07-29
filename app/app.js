var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when( '/home' ,{
		templateUrl:'views/homeTmpl.html',
		controller:'homeCtrl'
	})
	.otherwise('/home');
})
