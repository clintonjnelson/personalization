'use strict';

module.exports = function(app) {
  app.directive('topLogoDirective', function() {
    return {
      restrict:    'AE',
      replace:     true,
      scope:       {},
      templateUrl: 'js/shared/logo/top_logo.html'
    };
  });
};
