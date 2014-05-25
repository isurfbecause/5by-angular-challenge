'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('HomeCtrl', ['$scope','githubService', function($scope, githubService) {
  $scope.message = 'The 5by Challenge!';

  $scope.getMeta   = function( youtubeURL ){
    console.log( githubService);
  }

}]);
