'use strict';

module.exports = function(app) {
  app.directive('productDetailDirective', function() {
    return {
      restrict:    'AE',
      replace:     true,
      templateUrl: 'js/product/product_detail.html',
      scope:       {},
      controller:  ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
        console.log("ROUTE PARAMS ARE: ", $routeParams);
        $scope.product = {};

        $scope.getProduct = function getProduct() {
          console.log("ROUTE PARAMS ARE: ", $routeParams);
          $http.get('/products/' + $routeParams.style_id)
            .success(function(product) {
              $scope.product = product.product;
            })
            .error(function(err) {
              console.log('Error retrieving product: ', err);
              $location.path('/search');
            });
        };
      }]
    };
  });
};
