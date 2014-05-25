'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
// angular.module('myApp.services', []).
//   value('version', '0.1');


angular.module('myApp.services',[]) .factory('youtubeService', function($http) {
  // Our serviceInstance now has access to
  // the $http service in it's function definition
  var serviceInstance = {hi:'winston'};
  https://www.googleapis.com/youtube/v3/search?q=soccer&part=snippet&key=AIzaSyBuVpJg1Ec7KD1_XPNMf_mIQIPT_paqoHU
  var baseURL = 'https://www.googleapis.com/youtube/v3/';
  var key = 'AIzaSyBuVpJg1Ec7KD1_XPNMf_mIQIPT_paqoHU';

  var runSearch = function( videoURL ){
    return $http({
      method: 'JSONP',
      url: baseURL + 'search?callback=JSON_CALLBACK&q=' + videoURL + '&part=snippet&alt=json&key=' + key
    });
  };

  return { events:
      function(videoURL){
        return runSearch( videoURL );
      }

  }
  });
