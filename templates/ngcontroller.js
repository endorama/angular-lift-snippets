(function (angular) {
  'use strict'
  // https://github.com/johnpapa/angularjs-styleguide#controllers

  angular
    .module('$1')
    .controller('$2', $2)

  /* @ngInject */
  function $2 ($scope) {
    var vm = this

    activate()

    // -------

    function activate () {

    }

    // deregister event handlers
    $scope.$on('$destroy', function () {})
  }

}(window.angular))
