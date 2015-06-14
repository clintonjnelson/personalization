'use strict';

require('angular/angular');

var persApp = angular.module('persApp', []);

// Services

// Controllers

// Directives
require('./shared/logo/top_logo_directive.js'                )(persApp);
require('./shared/search/search_products_directive.js'       )(persApp);
require('./shared/product/product_thumb_summary_directive.js')(persApp);
