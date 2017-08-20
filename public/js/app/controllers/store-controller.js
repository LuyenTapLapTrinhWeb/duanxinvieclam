angular.module("gemStore")
    .controller('StoreController', function ($http) {
        var store = this;
        store.products = [];
        $http({
            method: 'GET',
            url: '../json/store-products.json'
        }).then(function (success) {
            //success code
            store.products = success.data;
        }, function (error) {
            //failed code
            console.log("I am sorry");
        });
    })
    .directive("menuTab", function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/menus/menu-tab.html",
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