'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('HomeCtrl', ['$scope','youtubeService', function($scope, youtubeService) {
  $scope.message = 'The 5by Challenge!';

  $scope.getMeta   = function( youtubeURL ){
    youtubeService.events( youtubeURL )
    .success(function(data, status, headers) { // the success function wraps
          $scope.result = data.items[0].snippet;
        })

    .error(function(data, status, headers, config) {
        console.log( 'error' );
    });
  }

}]);
