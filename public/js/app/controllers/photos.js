var app = angular.module("photo-directives", []);


// angular.module("gemStore").controller("PhotosController", function ($http) {
//     var photos = this;
//     photos.photos = [];
//     $http({
//         method: "GET",
//         url: "https://jsonplaceholder.typicode.com/photos"
//     }).then(function (success) { photos.photos = success.data; }, function (error) { });
// });


app.directive('photoGallery', function () {
    return {
        restrict: "E",
        templateUrl: "../app/templates/photos/photo-gallery.html",
        controller: function ($http) {
            var photos = this;
            photos.photos = [];
            $http({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/photos"
            }).then(function (success) { photos.photos = success.data; }, function (error) { });
        },
        controllerAs: "photos"
    };
});

$('.carousel').carousel({
    interval: 2000
})
