angular.module('login')
.directive('loginDirDirDir', function() {
  return {

    restrict: 'E',
    templateUrl: './login.html',
    controller: function($scope) {
      $scope.logInUser = function(user) {
        alert('success for you ' + user)
      }
    }

    //end of return
  }
//end of directive
})
