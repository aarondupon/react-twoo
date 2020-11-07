/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

var _rollupPluginBabelHelpers = require('../../../../_virtual/_rollupPluginBabelHelpers.js');

var FPS = 60;

var FPSController = /*#__PURE__*/function () {
  function FPSController() {
    _rollupPluginBabelHelpers.classCallCheck(this, FPSController);

    this.lock = this.checkfps;
    this.check = this.checkfps;
    this.dates = {};
  }

  _rollupPluginBabelHelpers.createClass(FPSController, [{
    key: "checkfps",
    value: function checkfps() {
      var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FPS;
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!this.dates[id]) { this.dates[id] = Date.now(); }
      var allow = false;
      var interval = 1000 / fps;
      var then = this.dates[id];
      var now = Date.now();
      var delta = now - then;

      if (delta > interval && this.dates[id]) {
        this.dates[id] = now - delta % interval;
        allow = true;
      }

      return allow;
    }
  }]);

  return FPSController;
}();

module.exports = FPSController;
