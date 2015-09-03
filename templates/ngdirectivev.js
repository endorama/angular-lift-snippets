(function (angular, jq) {
  'use strict'
  // https://github.com/johnpapa/angularjs-styleguide#directives

  /**
    $1[$3] Directive

    $2
   */

  angular
    .module('$1')
    .directive('$3', $3)

  /* @ngInject */
  function $3 () {
    var directive = {
      link: postLinkFunction,
      restrict: 'A',
      scope: false
    }
    return directive

    function postLinkFunction (scope, element, attributes) {
      $4
    }

  }

}(window.angular, window.angular.element))
