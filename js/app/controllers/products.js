 var app = angular.module('store-directives',[]);
app.directive('productGallery', function () {
    return {
        restrict: "E",
        templateUrl: "../app/templates/products/product-gallery.html",
        controller: function () {
            this.current = 0;
            this.setCurrent = function (newValue) {
                this.current = newValue | 0;
            };
        },
        controllerAs: "gallery"
    };

});

app.directive("productTab", function () {
    return {
        restrict: "E",
        templateUrl: "../app/templates/products/product-tab.html",
        controller: function () {
            this.tab = 1;
            this.setTab = function (newValue) {
                this.tab = newValue;
            };
            this.isSet = function (checkTab) {
                return this.tab === checkTab;
            };
        },
        controllerAs: "tab"
    };
});
app.directive("productSpecs", function () {
    return {
        restrict: "A",
        templateUrl: "../app/templates/products/product-specs.html"
    };
});

app.directive("productReviews", function () {
    return {
        restrict: "E",
        templateUrl: "../app/templates/products/product-reviews.html",
        controller: function () {
            this.review = {};
            this.review.createdOn = Date.now();
            this.addReview = function (product) {
                product.reviews.push(this.review);
                this.review = {};
            };
        },
        controllerAs: "reviewCtrl"
    };
});