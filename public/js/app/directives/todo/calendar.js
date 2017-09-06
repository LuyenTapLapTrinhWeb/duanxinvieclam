 
  angular.module('todoApp').directive('calendarDirective', [function () {
    return {
      restrict: "E",
      templateUrl: "../../app/templates/todos/calendar-directive.html",
      controller: function () {
         
      },
      controllerAs: 'KitchenSinkCtrl'
    };
  }])