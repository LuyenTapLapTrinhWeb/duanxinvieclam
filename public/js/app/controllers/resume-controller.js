angular.module("gemStore")
    .controller('ResumeController', function ($scope, $http) {
        $scope.resumes = [];
        $http({
            method: "GET",
            url: "../../../json/resume.json"
        }).then(function (success) {
            $scope.resumes.push(success.data);
        });
    })
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
    .directive('databaseDirective', function () {
        return {
            restrict: "A",
            templateUrl: "../app/templates/resumes/skills/database-directive.html"
        };
    })
    .directive('englishDirective', function () {
        return {
            restrict: "A",
            templateUrl: "../app/templates/resumes/skills/english-directive.html"
        };
    })
    .directive('frameworkDirective', function () {
        return {
            restrict: "A",
            templateUrl: "../app/templates/resumes/skills/framework-directive.html"
        };
    })
    .directive('softwareDirective', function () {
        return {
            restrict: "A",
            templateUrl: "../app/templates/resumes/skills/software-directive.html"
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