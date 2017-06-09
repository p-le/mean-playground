parkingApp.directive("alert", function() {
  return {
    templateUrl: 'alert.html',
    restrict: 'E',
    replace: true,
    scope: {
      topic: '=',
      description: '=',
      close: '&'
    }
  };
});

parkingApp.directive('transAlert', function() {
  return {
    templateUrl: 'trans-alert.html',
    restrict: 'E',
    replace: true,
    scope: {
      topic: '@'
    },
    transclude: true
  }
});

parkingApp.directive('accordion', function() {
  return {
    template: '<div ng-transclude></div>',
    restrict: 'E',
    transclude: true,
    controller: function($scope, $element, $attrs, $transclude) {
      var accordionItems = [];

      var addAccordionItem = function(accordionScope) {
        accordionItems.push(accordionScope);
      };
      var closeAll = function() {
        angular.forEach(accordionItems, function(accordionScope) {
          accordionScope.active = false;
        });
      };

      return {
        addAccordionItem,
        closeAll
      }
    }
  }
});

parkingApp.directive('accordionItem', function() {
  return {
    templateUrl: 'accordion-item.html',
    restrict: 'E',
    scope: {
      title: '@'
    },
    transclude: true,
    require: '^accordion',
    link: function(scope, element, attrs, ctrl, transcludeFn) {
      ctrl.addAccordionItem(scope);
      element.bind('click', function() {
        ctrl.closeAll();
        scope.$apply(function() {
          scope.active = !scope.active;
        });
      });
    }
  };
});