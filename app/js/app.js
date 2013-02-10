'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngCookies'])
    .config(['$locationProvider', function($location) {
        $location.html5Mode(true).hashPrefix('!'); //now there won't be a hashbang within URLs for browers that support HTML5 history
    }]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: HomeController});
    $routeProvider.when('/instagram', {templateUrl:'partials/instagram.html', controller: InstagramAuthController})
    $routeProvider.otherwise({redirectTo: '/home'});
  }])
  ;