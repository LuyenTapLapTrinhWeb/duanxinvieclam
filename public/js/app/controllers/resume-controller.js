angular.module("gemStore")
    .controller('ResumeController', ["$http", function ($http) {
        var store = this;
        store.resumes = [];
        $http({
            method: "GET",
            url: "../../../json/résume.json"
        }).then(function (success) {
            store.resumes.push(success.data);
        });
    }])
    .directive('aboutmeDirective', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/resumes/aboutme-directive.html"
        };
    })
    .directive('contactDirective', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/resumes/contact-directive.html"
        };
    })
    .directive('educationDirective', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/resumes/education-directive.html"
        };
    })
    .directive('experienceDirective', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/resumes/experience-directive.html"
        };
    })
    .directive('skillDirective', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/resumes/skill-directive.html"
        };
    })
    .directive('resumeTab', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/resumes/resume-tab.html",
            controller: function ($http) {
                this.tab = 1;
                this.setTab = function (newValue) {
                    this.tab = newValue;
                };
                this.isSet = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: "tabCtrl"
        };
    })
    .directive('skillsTab', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/resumes/skills-tab.html",
            controller: function ($http) {
                this.tab = 1;
                this.setTab = function (newValue) {
                    this.tab = newValue;
                };
                this.isSet = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: "skillTabCtrl"
        };
    })
    .filter('ageFilter', function () {
        return function (birthday) {
            var birthday = new Date(birthday);
            var today = new Date();
            var age = ((today - birthday) / (31557600000));
            var age = Math.floor(age);
            return age;
        }
    });