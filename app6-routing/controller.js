angular.module('routing')
.controller('mainCtrl', function($scope, mainService, $state) {

$scope.signIn = function(user) {
  alert('hey ' + user.username + ', ' + user.password + ' is a very unsecure password');
  $state.go('details')
}

var getPlanets = function() {
  mainService.getPlanets().then(function(response) {
    $scope.planets = response;
  })
}
getPlanets();


})
