angular.module("gemStore").config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            redirectTo: "/resume"
        })
        .when("/gems", {
            templateUrl: "../app/store/gem/index.html"
        })
        .when('/photos', {
            templateUrl: "../app/store/photo/index.html"
        })
        .when('/weathers', {
            templateUrl: "../app/store/weather/index.html"
        })
        .when("/todo", {
            templateUrl: "../app/store/todos/index.html"
        })
        .when("/404", {
            templateUrl: "../app/store/404/index.html"
        })
        .when("/resume", {
            templateUrl: "../app/store/resume/index.html",
            controller: "ResumeController",
            controllerAs: "resumeCtrl"
        })
        .otherwise({ redirectTo: "/404" })
});