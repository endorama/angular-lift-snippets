(function (angular) {
  'use strict'

  /**
    $1[$3]

    $2
   */

  angular
    .module('$1')
    .provider('$3', $3)

  /* @ngInject */
  function $3 () {
    var self = this

    // default options
    var defaults = {
      $4
    }

    /* allow defaults override */
    self.options = overrideOptions

    self.\$get = ConstructorFor$3Service

    return self

    // -------

    function overrideOptions (options) {
      options = options || {}
      defaults = angular.extend(defaults, options)
    }

    /* @ngInject */
    function ConstructorFor$3Service () {
      var self = this

      var _private = null

      self.instanceVariable = null
      
      self.instanceMethod = _instanceMethod

      __constructor()
      return self

      // -------

      // default constructor, run before return
      function __constructor () {}

      // instance methods
      function _instanceMethod () {}

      // private methods
      function __privateMethod () {}

      // no room for 'static' methods, because a service is invoked using new
      // Service(), so there should be no reason to use a static method

    }

  }

}(window.angular))
