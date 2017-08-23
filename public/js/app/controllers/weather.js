angular.module("weatherApp", [])
    // .controller("weatherController", function ($http) {
    // var store = this;
    // store.weathers = [];

    // this.date = {};
    // this.date.createdOn = Date.now();

    // $http({
    //     method: "GET",
    //     url: "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1"
    //     // url: "http://api.openweathermap.org/data/2.5/weather?q=saigon,vn&units=metric&appid=60714b6c5ed733b26869dc7c1e762ac9"
    //     // url: weatherUrl
    // }).then(function (success) {
    //     store.weathers.push(this.date);
    //     // console.log(success.data);
    //     store.weathers.push(success.data);
    // }, function (error) { })
    // })
    // .controller('TabController', function () {
    //     this.tab = 1;
    //     this.setTab = function (newValue) {
    //         this.tab = newValue;
    //     };
    //     this.isSet = function (checkTab) {
    //         return this.tab === checkTab;
    //     };
    // })

    .directive('tabDirective', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/weathers/tab-directive.html",
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
    // .controller('ForecastController', function ($http) {
    //     var store = this;
    //     store.forecasts = [];
    //     let url = "../json/forecast.json";

    //     $http({
    //         method: "GET",
    //         url: url
    //     }).then(function (success) {
    //         store.forecasts = success.data;
    //     }, function (error) { })
    // })
    .directive('forecastDirective', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/weathers/forecast-directive.html",
            controller: function ($scope, $sce, $http) {

                // $scope.forecast = {};
                $scope.forecasts = [];

                let url = "http://api.openweathermap.org/data/2.5/forecast?q=saigon,vn&units=metric&appid=ac38411101be4802b337c2766d645b62&callback=JSONP_CALLBACK";
                var trustedUrl = $sce.trustAsResourceUrl(url);
                $.getJSON(url).done(function (success) {
                    // console.log(success);
                    $scope.forecasts.push(success);
                });
                // $http.jsonp(url, { jsonpCallbackParam: 'callback' })
                //     .then(function (success) {
                //         // console.log(success.data);
                //         $scope.forecasts.push(success.data);
                //     }, function (error) { })
               /* $http({
                    method: "GET",
                    // url: url
                    // url: "http://samples.openweathermap.org/data/2.5/forecast?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1"
                    // url: "http://api.openweathermap.org/data/2.5/forecast?q=saigon,vn&units=metric&appid=60714b6c5ed733b26869dc7c1e762ac9"
                    url: "http://api.openweathermap.org/data/2.5/forecast?q=saigon,vn&units=metric&appid=ac38411101be4802b337c2766d645b62&callback=JSONP_CALLBACK"
                    // ac38411101be4802b337c2766d645b62
                }).then(function (success) {
                    // store.forecasts = success.data;
                    $scope.forecasts.push(success.data);
                }, function (error) { })*/
            },
            controllerAs: "forecastCtrl"
        };
    })

    .directive('weatherDirective', function () {
        return {
            restrict: "E",
            templateUrl: "../app/templates/weathers/weather-directive.html",
            controller: function ($http) {
                var store = this;
                store.weathers = [];

                this.date = {};
                this.date.createdOn = Date.now();

                // let url = "../json/weather.json";
                let url = "http://api.openweathermap.org/data/2.5/weather?q=saigon,vn&units=metric&appid=ac38411101be4802b337c2766d645b62";
                $http.jsonp(url, { jsonpCallbackParam: 'callback' })
                    .then(function (success) {
                        store.weathers.push(this.date);
                        // console.log(success.data);
                        store.weathers.push(success.data);
                    }, function (error) { })
                /*$http({
                     method: "GET",
                     // url: url
                     // url: "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1"
                     // url: "http://api.openweathermap.org/data/2.5/weather?q=saigon,vn&units=metric&appid=60714b6c5ed733b26869dc7c1e762ac9"
                     url: "http://api.openweathermap.org/data/2.5/weather?q=saigon,vn&units=metric&appid=ac38411101be4802b337c2766d645b62"
                     // ac38411101be4802b337c2766d645b62
 
                     // url: weatherUrl
                 }).then(function (success) {
                     store.weathers.push(this.date);
                     // console.log(success.data);
                     store.weathers.push(success.data);
                 }, function (error) { })*/

            },
            controllerAs: "weatherCtrl"
        };
    });