'use strict';

/* Controllers */


function HomeController($scope, InstagramToken) {
    //get instagram link
    if(InstagramToken()){
        console.log(InstagramToken())
    }
}
HomeController.$inject = ['$scope', 'InstagramToken'];

function InstagramAuthController($location, InstagramToken){
    var hash = $location.hash();
    InstagramToken(hash.substr(hash.indexOf('=')+1));
    $location.hash('').path('/home');
}
InstagramAuthController.$inject = ['$location', 'InstagramToken'];

