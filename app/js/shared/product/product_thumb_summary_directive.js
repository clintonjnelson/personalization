'use strict';

module.exports = function(app) {
  app.directive('productThumbSummaryDirective', [function() {
    return {
      restrict:    'AE',
      replace:     true,
      scope:       false,
      templateUrl: 'js/shared/product/product_thumb_summary.html'
    };
  }]);
};
