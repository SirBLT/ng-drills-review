angular.module('picture')
.directive('pictureDir', function() {
  return {
    restrict: 'E',
    templateUrl: './pictureDir.html',
    scope: {
      urlPic: '@str',
      jname: '=joesname'
    },
    link: function(scope, elem, attrs) {
      console.log(scope);

    }




  }




})
