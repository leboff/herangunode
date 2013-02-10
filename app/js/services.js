'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
    factory('InstagramToken', ['$cookies', function($cookies) {
        var token;
        return function(tkn){
            if(tkn){
                token = $cookies.token = tkn;
            }else{
                if(!token && $cookies.token){
                    token = $cookies.token;
                }
            }
            return token;
        }
    }]);