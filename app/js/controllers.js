'use strict';

/* Controllers */

angular.module('myApp.controllers', ['LocalStorageModule'])

.controller('HomeCtrl', ['$scope','youtubeService','localStorageService', function($scope, youtubeService, localStorageService) {
  $scope.message = 'The 5by Challenge!';

   // localStorageService.clearAll();

    $scope.displayVideos = function(){

      var videos = [];
        for (var key in localStorage){
           videos.push( localStorageService.get( key.split('.')[1] ) );
        }

         $scope.videos = videos;
      }

      $scope.displayVideos();


  $scope.getMeta   = function( youtubeURL ){
    youtubeService.events( youtubeURL )
    .success(function(data, status, headers) { // the success function wraps

          $scope.vidId = data.items[0].id.videoId;
          $scope.result = data.items[0].snippet;

          localStorageService.set($scope.vidId, $scope.result);

          $scope.displayVideos();

        })

    .error(function(data, status, headers, config) {
        console.log( 'error' );
    });



  }

}]);
