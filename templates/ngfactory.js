(function (angular) {
  'use strict'
  // https://github.com/johnpapa/angularjs-styleguide#factories

  /**
    $1[$3]

    $2
   */

  angular
    .module('$1')
    .factory('$3', $3Container)

  /* @ngInject */
  function $3Container () {

    function $3 (data) {
      var self = this
      // copy argument to self
      // self = _.assign(this, data)
    }

    // Inherit from Superclass prototype, if is the case
    // $3.prototype = Object.create(Superclass.prototype)

    // Define the "instance" methods using the prototype
    // and standard prototypal inheritance.
    $3.prototype.instanceMethod = _instanceMethod

    // Define the "class" / "static" methods. These are
    // utility methods on the class itself, they do not
    // have access to the "this" reference.
    // $3.staticMethod = _staticMethod

    // Return constructor - this is what defines the actual
    // injectable in the DI framework.
    return ($3)

    // -------

    function _instanceMethod () {
      var self = this
    }

    // function _staticMethod () {}

  }

}(window.angular))
