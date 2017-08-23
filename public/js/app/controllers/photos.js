// $http.jsonp('https://jsonplaceholder.typicode.com/photos?api_key=[MY SECRET API Key]&callback=JSON_CALLBACK')
// .success(function (data) {
//   // my data analysis process
// });
angular.module("gemStore")
    .controller('photoController', ["$http", function ($http) {
        var store = this;
        store.photos = [];
        $http({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/photos"
        }).then(function (success) {
            store.photos = success.data;
        });
    }]) 

    .directive('photoGallery', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/photos/photo-gallery.html"
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
