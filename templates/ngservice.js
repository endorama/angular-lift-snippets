(function (angular) {
  'use strict'
  // https://github.com/johnpapa/angularjs-styleguide#services

  /**
    $1[$3]

    $2
   */

  angular
    .module('$1')
    .service('$3', ContructorFor$3)

  /* @ngInject */
  function ContructorFor$3 () {
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
    function _instanceMethod () {
      var self = this
    }

    // private methods
    function __privateMethod () {}

    // no room for 'static' methods, because a service is invoked using new
    // Service(), so there should be no reason to use a static method

  }

}(window.angular))
