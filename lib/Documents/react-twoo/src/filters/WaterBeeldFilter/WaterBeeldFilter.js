/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

var _rollupPluginBabelHelpers = require('../../../../../_virtual/_rollupPluginBabelHelpers.js');
var index = require('../../../../../node_modules/pixi.js/lib/index.js');

var Fragment = require('./WaterBeeldFilter.frag');

var Vertext = require('./WaterBeeldFilter.vert');
/**
 * The WaterBeeldFilter applies a Gaussian blur to an object.
 * The strength of the blur can be set for x- and y-axis separately.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */


var WaterBeeldFilter = /*#__PURE__*/function (_PIXI$Filter) {
  _rollupPluginBabelHelpers.inherits(WaterBeeldFilter, _PIXI$Filter);

  var _super = _rollupPluginBabelHelpers.createSuper(WaterBeeldFilter);

  /**
   * Creates an instance of WaterBeeldFilter.
   * @param {*} speed
   * @param {*} resolution
   * @memberof WaterBeeldFilter
   */
  function WaterBeeldFilter(resolution) {
    var _this;

    _rollupPluginBabelHelpers.classCallCheck(this, WaterBeeldFilter);

    _this = _super.call(this, Vertext, Fragment);
    _this.uniforms.dimensions = new Float32Array(2); //http://pixijs.download/dev/docs/core_renderers_webgl_managers_FilterManager.js.html#line51
    // ---> check this to allow vertical padding onlu

    _this.padding = 200;
    _this.passes = 1;
    _this.resolution = resolution || undefined;
    _this.autoFit = false;
    return _this;
  }
  /**
   * Applies the filter.
   *
   * @param {PIXI.FilterManager} filterManager - The manager.
   * @param {PIXI.RenderTarget} input - The input target.
   * @param {PIXI.RenderTarget} output - The output target.
   */


  _rollupPluginBabelHelpers.createClass(WaterBeeldFilter, [{
    key: "apply",
    value: function apply(filterManager, input, output, clear) {
      var width = input.sourceFrame.width;
      var height = input.sourceFrame.height;
      this.uniforms.dimensions[0] = width;
      this.uniforms.dimensions[1] = height;
      this.uniforms.aspect = height / width;
      this.uniforms.padding = this.padding;
      filterManager.applyFilter(this, input, output, clear); // const renderTarget = filterManager.getRenderTarget(true);
      // filterManager.returnRenderTarget(renderTarget);
    }
  }, {
    key: "addTexture",
    value: function addTexture(texture, name) {
      this.uniforms[name] = texture;
    }
  }, {
    key: "mouse",
    get: function get() {
      return this.uniforms.uMouse;
    },
    set: function set(value) {
      // console.log('mouseX',value)
      // value[1] = value[1] *1
      this.uniforms.uMouse = value;
    }
  }, {
    key: "offset",
    get: function get() {
      return this.uniforms.offset;
    },
    set: function set(value) {
      // console.log('offset',value)
      // value[1] = value[1] *1
      this.uniforms.offset = value;
    }
  }, {
    key: "worldTransform",
    set: function set(worldTransform) {
      this._worldTransform = worldTransform;
      this.uniforms.tx = worldTransform.tx;
    },
    get: function get() {
      return this._.worldTransform;
    }
  }]);

  return WaterBeeldFilter;
}(undefined);

module.exports = WaterBeeldFilter;
