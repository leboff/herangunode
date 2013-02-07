'use strict';

/* Controllers */


function HomeController($scope) {
    //http://flickr.com/services/auth/?api_key=[api_key]&perms=[perms]&api_sig=[api_sig]
    $scope.auth = {
        api_key: '2d7a4c8d1bd92eecc2b914e433d7e2c1',
        perms: 'read'
    }
}
HomeController.$inject = ['$scope'];

