
myBlogApp.directive('whenScrolled', ['$window', function($window) {
    return function(scope, elm, attr) {
        var raw = elm[0];

        fnc = function() {
            var rectObject = raw.getBoundingClientRect();
            if(window.innerHeight > rectObject.bottom)
              scope.$apply(attr.whenScrolled);
        }

        angular.element($window).bind('scroll', fnc);

        scope.$on('$destroy', function(){
          angular.element($window).unbind('scroll', fnc);
        })
    };
}]);

