angular.module("gemStore").config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "../app/store/homepage/index.html"
        })
        .when("/home", {
            templateUrl: "../app/store/homepage/index.html"
        })
        .when("/gems", {
            templateUrl: "../app/store/gem/index.html"
        })
        .when('/photos', {
            templateUrl: "../app/store/photo/index.html",
            controller: "photoController",
            controllerAs: "photoCtrl"
        })
        .when("/photos/:id", {
            templateUrl: "../app/store/photo/show.html",
            controller: "photoShowController",
            controllerAs: "ptshowCtrl"
        })
        .when("/photos/album/:albumId", {
            templateUrl: "../app/store/photo/photo.html",
            controller: "productPhotoController",
            controllerAs: "ppCtrl"
        })

        .when('/weathers', {
            templateUrl: "../app/store/weather/index.html"
        })
        .when("/todo", {
            templateUrl: "../app/store/todos/index.html"
        })
        .when("/todo/edit", {
            templateUrl: "../app/templates/todos/reminder/edit-reminder.html"
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