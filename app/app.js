'use strict';

// Declare app level module which depends on views, and core components
angular.module('webApp', [
  'ngRoute',
  'webApp.home'
 
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
