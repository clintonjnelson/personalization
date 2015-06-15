'use strict';

require('angular/angular');
require('angular-route'  );

var persApp = angular.module('persApp', ['ngRoute']);

// Services

// Controllers

// Directives
require('./shared/logo/top_logo_directive.js'                )(persApp);
require('./search/search_products_directive.js'       )(persApp);
require('./product/product_detail_directive.js'              )(persApp);


// View Routes
persApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: 'templates/views/search_products.html'
    })
    .when('/products/:style_id', {
      templateUrl: 'templates/views/product_detail.html'
    })
    .when('/', {
      redirectTo: '/search'
    })
    .otherwise({ redirectTo: '/search' });
}]);
