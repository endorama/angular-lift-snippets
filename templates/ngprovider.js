(function (angular) {
  'use strict'

  /**
    $1[$3]

    $2
   */

  angular
    .module('$1')
    .provider('$3', $3)

  // $3.\$inject = [ ]

  /* @ngInject */
  function $3 () {
    var self = this

    // default options
    var defaults = {
      $4
    }

    /* allow defaults override */
    self.options = overrideOptions

    self.\$get = $3Service

    return self

    // -------

    function overrideOptions (options) {
      options = options || {}
      defaults = angular.extend(defaults, options)
    }

    /* @ngInject */
    function $3Service () {

      $5

    }

  }

}(window.angular))