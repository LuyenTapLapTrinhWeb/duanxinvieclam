// $http.jsonp('https://jsonplaceholder.typicode.com/photos?api_key=[MY SECRET API Key]&callback=JSON_CALLBACK')
// .success(function (data) {
//   // my data analysis process
// });
angular.module("gemStore")
    .controller('photoController', ["$scope", "$http", function ($scope, $http) {

        $scope.photos = [];
        $scope.limitTo = 1000;
        $http({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/photos"
        }).then(function (success) {

            // alert("vaoday");
            $scope.photos = success.data;
        });
    }])

    .directive('photoGallery', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/photos/photo-gallery.html"
        };
    })
    .directive('albumGallery', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/photos/album-gallery.html"
        };
    })
    .directive('productGallery', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/photos/product-gallery.html"
        };
    })
    .controller("photoShowController", function ($scope, $http, $routeParams) {
        $scope.photo = {};
        $http({ method: "GET", url: "https://jsonplaceholder.typicode.com/photos/" + $routeParams.id })
            .then(function (success) {
                // alert(JSON.stringify(success.data));
                $scope.photo = success.data;
            }, function (error) {
                alert(error)
            });
    })
    // https://jsonplaceholder.typicode.com/photos?albumId=1
    .controller("productPhotoController", function ($scope, $http, $routeParams) {
        $scope.photos = [];
        $http({ method: "GET", url: "https://jsonplaceholder.typicode.com/photos?albumId=" + $routeParams.albumId })
            .then(function (success) {
                // alert(JSON.stringify(success.data));
                $scope.photos = success.data;
            }, function (error) {
                alert(error)
            });
    })
    .controller('NoteCreateController', function ($http) {
        var controller = this;
        this.saveNote = function (note) {
            controller.errors = null;
            $http({ method: 'POST', url: '/notes', data: note })
                // passing ‘note’ as a data option
                .catch(function (note) {
                    controller.errors = note.data.error;
                })
        };
    })
    .directive('listviewTab', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/photos/listview-tab.html",
            controller: function ($http) {
                this.tab = 1;
                this.setTab = function (newValue) {
                    this.tab = newValue;
                };
                this.isSet = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: "listviewCtrl"
        };
    })
    .directive('tableView', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/photos/table-view.html"
        };
    })
    .directive('imageView', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/photos/image-view.html"
        };
    })
    .directive('headerGallery', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/photos/header-gallery.html"
        };
    })