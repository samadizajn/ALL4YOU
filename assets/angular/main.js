var app = angular.module('all4you', []);

app.controller('ScreenSize', function($scope, $window, $timeout) {
  $scope.windowWidth = $window.innerWidth;
  
  $window.onresize = function(event) {
    $timeout(function() {
      $scope.windowWidth = $window.innerWidth;
    });
  };
});