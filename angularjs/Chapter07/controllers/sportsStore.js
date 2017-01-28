
angular.module("sportsStore", ["customFilters", "cart", "ngRoute"])
        .config(function ($routeProvider) {

            $routeProvider.when("/complete", {
                templateUrl: "/views/thankYou.html"
            });

            $routeProvider.when("/placeorder", {
                templateUrl: "/views/placeOrder.html"
            });

            $routeProvider.when("/checkout", {
                templateUrl: "/views/checkoutSummary.html"
            });

            $routeProvider.when("/products", {
                templateUrl: "/views/productList.html"
            });

            $routeProvider.otherwise({
                templateUrl: "/views/productList.html"
            });
        });

angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:2403/products")
    .controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {

        $scope.data = {};

        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data;
            })
            .error(function (error) {
                $scope.data.error = error;
            });
    });
