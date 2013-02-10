'use strict';

/* Controllers */


function HomeController($scope, InstagramToken) {
    //get instagram link
    $scope.token = InstagramToken();

    //geolocation stuff!
    var geoError = function(error){
        var errors = {
            1: 'Permission denied',
            2: 'Position unavailable',
            3: 'Request timeout'
        };
        $scope.positionError = ("Error: " + errors[error.code]);
    };
    var positionAcquired = function(position){
        $scope.postition = position;
        console.log('position acquired', position);
        $scope.$apply();
    };
    if ($scope.token && navigator.geolocation) {
        var timeoutVal = 10 * 1000 * 1000;
        navigator.geolocation.getCurrentPosition(
            positionAcquired,
            geoError,
            { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
        );
    }
    else {
        alert("Geolocation is not supported by this browser");
    }

}
HomeController.$inject = ['$scope', 'InstagramToken'];

function InstagramAuthController($location, InstagramToken){
    var hash = $location.hash();
    InstagramToken(hash.substr(hash.indexOf('=')+1));
    $location.hash('').path('/home');
}
InstagramAuthController.$inject = ['$location', 'InstagramToken'];

