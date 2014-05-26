'use strict';

/* Controllers */

angular.module('myApp.controllers', ['LocalStorageModule'])

.controller('HomeCtrl', ['$scope','youtubeService','localStorageService', function($scope, youtubeService, localStorageService) {

    $scope.message = 'The 5by Challenge!';

    // localStorageService.clearAll();

    $scope.displayVideos = function(){
        var videos = [];

        //Loop through storage keys and add to videos array
        for (var key in localStorage){
            videos.push( localStorageService.get( key.split('.')[1] ) );
        }

        $scope.videos = videos;
     }

    //Look up youtube meta data
    $scope.getMeta   = function( youtubeURL ){
         youtubeService.events( youtubeURL )

        .success(function(data, status, headers) { // the success function wraps

            var vidId     = data.items[0].id.videoId;
            $scope.result = data.items[0].snippet;

            localStorageService.set(vidId, $scope.result);

            $scope.displayVideos();

        })

        .error(function(data, status, headers, config) {
            console.log( 'error' );
        });
    }

    $scope.displayVideos();

}]);
