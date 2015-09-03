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

    function $3 () {}

    // Inherit from Superclass prototype, if is the case
    // $3.prototype = Object.create(Superclass.prototype)

    // Define the "instance" methods using the prototype
    // and standard prototypal inheritance.
    $3.prototype.instanceMethod = function () {}

    // Define the "class" / "static" methods. These are
    // utility methods on the class itself they do not
    // have access to the "this" reference.
    $3.staticMethod = function () {}

    // Return constructor - this is what defines the actual
    // injectable in the DI framework.
    return ($3)

  }

}(window.angular))
