'use strict';

// Declare app level module which depends on views, and core components
angular.module('webApp.home', [
  'ngRoute',])

.config([ '$routeProvider', function($routeProvider) {

  $routeProvider.when('/home',{
  	templateUrl: 'home/home.html',
  	controller: 'HomeCtrl'
  });
}])
.controller('HomeCtrl',[function(){
	
}])