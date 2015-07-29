var app = angular.module('directivePractice');

app.directive('dirDisplay', function(){
  return {
    
    templateUrl: 'views/directiveTmpl.html',
    scope: {
      setUser: '&',
      user: '='
    },
    link: function (scope, element, attributes) {
      element.on('click', function(){
        scope.showInfo = !scope.showInfo;
        scope.setUser({user: scope.user});
        scope.$apply();
      });
    }
  }
});
