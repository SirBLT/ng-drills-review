angular.module('highlight')
.directive('highlightDir', function() {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      console.log('scope: ', scope);
      console.log('element: ', elem);
      console.log('attrs: ', attrs);

      elem.on('click', function() {
          elem.select();
      })

    }





    //end of return
  }

  //end of directive
})
