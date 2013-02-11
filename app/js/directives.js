'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
   directive('instagramImage', function(){
        return{
            template:
               '<img class="lowres" ng-src="{{image.images.low_resolution.url}}"> '+
               '<div class="modal">'+
                   '<div class="section"><img class="highres" ng-src="{{image.images.standard_resolution.url}}">' +
                       '<h2><span>User: {{image.user.full_name}} <br/>{{image.created_time | unixTimeFilter | date}}<br/>{{image.caption.text}}<br/>{{image.location.name}}</span></h2>' +
                   '</div>'+
               '</div>',
            restrict: 'E',
            scope: {
                'image': '='
            },
            link: function(scope, elm, attrs){
                console.log(scope.image);
                //hide the highres image
                $(elm).find('.highres').hide();
                //show when clicked
                $(elm).click(function(){
                    var modal =  $(elm).find('.modal');
                    var image = $(elm).find('.highres');
                    if(modal.hasClass('show')){
                        image.hide('slow');
                        modal.removeClass('show');
                    }
                    else{
                        modal.addClass('show');
                        image.show('slow');
                    }

                });


            }
        }
    });

