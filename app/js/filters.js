'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])
  .filter('flicker_sign', function(){
        var secret = '93e768161447831f';
        return function(params){
            var sig = secret;
            var url = 'http://flickr.com/services/auth/?'
            _.each(params, function(value, key){
                sig+=key+value;
                url+='&'+key+'='+value;
            });
            url += 'api_sig='+sig
            return url;
        }
    });
