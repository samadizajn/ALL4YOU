var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $window, $timeout) {
  $scope.windowWidth = $window.innerWidth;
  
  $window.onresize = function(event) {
    $timeout(function() {
      $scope.windowWidth = $window.innerWidth;
    });
  };
});