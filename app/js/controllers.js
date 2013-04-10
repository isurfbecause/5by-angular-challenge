'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.message = 'The 5by Challenge!';
}]);