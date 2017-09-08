 
  angular.module('todoApp').directive('calendarDirective', [function () {
    return {
      restrict: "E",
      templateUrl: "../../app/templates/todos/reminder/calendar-directive.html",
      controller: function () {
         
      },
      controllerAs: 'KitchenSinkCtrl'
    };
  }])
  