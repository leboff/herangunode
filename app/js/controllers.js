'use strict';

/* Controllers */


function HomeController($scope, $http, InstagramToken, instagram_search_url) {
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
        console.log('position acquired', position);
        searchImages(position);
    };
    var geolocate = function(){
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
    };
    geolocate();

    //grab the images and process them
    var successCallback = function(resp, status, headers, config){
        $scope.images = resp.data;
    };
    var searchImages = function(position){
        //https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&?access_token=249962630.f59def8.4c1defa23e9c4c8e969c299d84029f8e
        var config = {
            params: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                access_token: InstagramToken(),
                callback: 'JSON_CALLBACK'
            }
        };
        $http.jsonp(instagram_search_url, config).success(successCallback);
    }


}
HomeController.$inject = ['$scope', '$http', 'InstagramToken', 'instagram_search_url'];

function InstagramAuthController($location, InstagramToken){
    var hash = $location.hash();
    InstagramToken(hash.substr(hash.indexOf('=')+1));
    $location.hash('').path('/home');
}
InstagramAuthController.$inject = ['$location', 'InstagramToken'];

