'use strict';

/* Controllers */


function HomeController($scope, $rootScope, $cookies) {
    //get instagram link
    if($cookies.token){
        $rootScope.token = $cookies.token;
    }
}
HomeController.$inject = ['$scope', '$rootScope', '$cookies'];

function InstagramAuthController($rootScope, $location, $cookies){
    var hash = $location.hash();
    $cookies.token = $rootScope.token = hash.substr(hash.indexOf('=')+1);
    $location.hash('').path('/home');
}
InstagramAuthController.$inject = ['$rootScope', '$location', '$cookies'];

