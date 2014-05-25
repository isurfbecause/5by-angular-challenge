'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
// angular.module('myApp.services', []).
//   value('version', '0.1');


angular.module('myApp.services',[]) .factory('githubService', function($http) {
// Our serviceInstance now has access to
// the $http service in it's function definition
var serviceInstance = {hi:'winston'};
//https://www.googleapis.com/youtube/v3/search?q=soccer&part=snippet
var baseService = 'https://www.googleapis.com/youtube/v3/';
return serviceInstance;
});
