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

var Fragment = require('./ImageBeeldFilter.frag');

var Vertext = require('./ImageBeeldFilter.vert');
/**
 * The ImageBeeldFilter applies a Gaussian blur to an object.
 * The strength of the blur can be set for x- and y-axis separately.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */


var ImageBeeldFilter = /*#__PURE__*/function (_PIXI$Filter) {
  _rollupPluginBabelHelpers.inherits(ImageBeeldFilter, _PIXI$Filter);

  var _super = _rollupPluginBabelHelpers.createSuper(ImageBeeldFilter);

  /**
   * Creates an instance of ImageBeeldFilter.
   * @param {*} speed
   * @param {*} resolution
   * @memberof ImageBeeldFilter
   */
  function ImageBeeldFilter(padding, resolution) {
    var _this;

    _rollupPluginBabelHelpers.classCallCheck(this, ImageBeeldFilter);

    _this = _super.call(this, Vertext, Fragment);
    _this.uniforms.dimensions = new Float32Array(2);
    _this.uniforms.columnWidth = 1;
    _this.uniforms.uSpeed = 0; //http://pixijs.download/dev/docs/core_renderers_webgl_managers_FilterManager.js.html#line51
    // ---> check this to allow vertical padding onlu

    _this.padding = padding; // this.filterArea = [0,0,100,100]

    _this.passes = 1;
    _this.resolution = resolution || undefined; // this.autoFit = false;

    return _this;
  }
  /**
   * Applies the filter.
   *
   * @param {PIXI.FilterManager} filterManager - The manager.
   * @param {PIXI.RenderTarget} input - The input target.
   * @param {PIXI.RenderTarget} output - The output target.
   */


  _rollupPluginBabelHelpers.createClass(ImageBeeldFilter, [{
    key: "apply",
    value: function apply(filterManager, input, output, clear) {
      /** removes padding x */
      // input.sourceFrame.x = 0;
      // input.sourceFrame.width = input.sourceFrame.width  - this.padding;

      /** end removes padding x */
      var width = input.sourceFrame.width;
      var height = input.sourceFrame.height;
      this.uniforms.dimensions[0] = width; // - (this.padding*2);

      this.uniforms.dimensions[1] = height; //  - (this.padding*2);

      this.uniforms.aspect = height / width;
      this.uniforms.padding = this.padding; // A =  200;
      // padding 50;
      // total =  300;
      // scale =  (A+padding*2)/B
      // const scale = [outerWidth / width,outerHeight / height]

      this.uniforms.uPadding = [this.padding, this.padding]; //,0,0,this.padding/outerWidth,height/outerHeight);
      // console.log( this.uniforms.paddingMatrix);
      // in pixels

      this.uniforms.columnWidth = 20; //25;//window.innerWidth
      // this.uniforms.tx = input.sourceFrame.x;
      //.39

      this.uniforms.mapSampler = input.texture; // console.log('cacl:',input)
      // var projectionMatrix = [0.0025380710139870644, 0, 0, 0, -0.0035587188322097063, 0, -1, 1, 1]
      // this.transform.updateTransform(this.parent.transform);
      // draw the filter...

      var f = filterManager.applyFilter(this, input, output, clear);
      /*
              dimension: 1500, 1400];
      filterClap: [0, 0, 0.73193359375, 0.68310546875];
      filterArea:
          location: WebGLUniformLocation {}
          size: 1
          type: "vec4"
          value: Float32Array(4) [2048, 2048, -600, -600]
      */
      // -0.20000000000000007
      //this.uniforms.dimensions.x,filterManager.shaderCache[19].data);//,this.uniforms.aspect, this.padding,input.sourceFrame)
      // const renderTarget = filterManager.getRenderTarget(true);
      // filterManager.returnRenderTarget(renderTarget);
    }
  }, {
    key: "speed",
    get: function get() {
      return this.uniforms.uSpeed;
    },
    set: function set(value) {
      this.uniforms.uSpeed = value;
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
      // console.log('worldTransform',worldTransform.tx,worldTransform.toArray())   
      this._worldTransform = worldTransform; //.toArray();

      this.uniforms.tx = worldTransform.tx;
    },
    get: function get() {
      return this._.worldTransform;
    }
  }]);

  return ImageBeeldFilter;
}(undefined);

module.exports = ImageBeeldFilter;
