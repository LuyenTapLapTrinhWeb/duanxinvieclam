angular.module('todoApp', ['ui.bootstrap'])
  .controller('TodoListController', function () {
    var todoList = this;
    todoList.todos = [
      { text: 'learn AngularJS', done: true },
      { text: 'build an AngularJS app', done: false }];

    todoList.addTodo = function () {
      todoList.todos.push({ text: todoList.todoText, done: false });
      todoList.todoText = '';
    };

    todoList.remaining = function () {
      var count = 0;
      angular.forEach(todoList.todos, function (todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function () {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function (todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  })
  .directive("slideDirective", function () {
    return {
      restrict: "E",
      templateUrl: "../../app/templates/todos/slide-directive.html",
      controller: function ($scope, $http) {
        $scope.myInterval = 5000;

        $scope.slides = [];
        $http({ method: "GET", url: "../json/todo.json" }).then(function (success) {
          $scope.slides = success.data;
        });
      },
      controllerAs: "slideCtrl"
    };
  })
  .directive('reminderApp', function () {
    return {
      restrict: "E",
      templateUrl: "../../app/templates/todos/reminder-app.html",
      controller: function ($scope, $http) {
        // select all
        $http({ method: "GET", url: "http://localhost:3000/todo/" }).then(function success(success) {
          $scope.reminders = success.data;
        })
      },
      controllerAs: "reminderCtrl"
    };
  }) 