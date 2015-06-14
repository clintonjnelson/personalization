'use strict';

module.exports = function(app) {
  app.directive('searchProductsDirective', [function() {
    return {
      restrict:    'AE',
      replace:     true,
      templateUrl: 'js/shared/search/search_products.html',
      controller:  ['$scope', '$http', function($scope, $http) {
        $scope.products = [];
        $scope.thumb_url_base = "http://g.nordstromimage.com/imagegallery/store/product/medium/";

        $scope.searchProducts = function searchProducts() {
          $http.get('/products')
            .success(function(data) {
              $scope.products = data.products;
            })
            .error(function(err) {
              console.log("Error getting products. Error: ", err);
            });
        };
      }]
    };
  }]);
};
