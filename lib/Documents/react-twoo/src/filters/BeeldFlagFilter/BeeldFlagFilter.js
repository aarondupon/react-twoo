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
var animate = require('animate');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var animate__default = /*#__PURE__*/_interopDefaultLegacy(animate);

var Fragment = require('./BeeldFlagMouse.frag');

var Vertext = require('./BeeldFlag.vert');
var allTextures = {};
/**
 *
 * The BeeldFlagFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used offset the x and the g propery of the texture is used to offset the y.
 * @class BeeldFlagFilter
 * @contructor
 * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
 */

var BeeldFlagFilter = /*#__PURE__*/function (_PIXI$Filter) {
  _rollupPluginBabelHelpers.inherits(BeeldFlagFilter, _PIXI$Filter);

  var _super = _rollupPluginBabelHelpers.createSuper(BeeldFlagFilter);

  /**
   * Creates an instance of DisplacementFilter.
   * @param {*} speed
   * @param {*} resolution
   * @memberof DisplacementFilter
   */
  function BeeldFlagFilter() {
    var _this;

    var textures = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var resolution = arguments.length > 1 ? arguments[1] : undefined;

    _rollupPluginBabelHelpers.classCallCheck(this, BeeldFlagFilter);

    _this = _super.call(this);
    /* defaullt pixi implementation 
     Object.assign(this.uniforms,{
         dimensions:new Float32Array(4),
         scale:0.015,
         offet:0,
         mapDimensions:new Float32Array(2),
         focus:.5,
         iTime:0,
         displacementMap:texture,
     });
     */

    /* Bypassing fucking pixi check if webgl input is in use  */

    _rollupPluginBabelHelpers.defineProperty(_rollupPluginBabelHelpers.assertThisInitialized(_this), "animation", animate__default['default'](_this.update, 24));

    _rollupPluginBabelHelpers.defineProperty(_rollupPluginBabelHelpers.assertThisInitialized(_this), "onTextureLoaded", function (texture, name) {
      // this.uniforms.mapDimensions.x = this.uniforms.texture.width;
      // this.uniforms.mapDimensions.y = this.uniforms.texture.height;
      // this.uniforms.iResolution[0] = texture.width;
      // this.uniforms.iResolution[1] = texture.height;
      _this.uniforms[name].baseTexture.wrapMode = undefined;

      _this.uniforms[name].baseTexture.off('loaded', _this.boundLoadedFunction);
    });

    _rollupPluginBabelHelpers.defineProperty(_rollupPluginBabelHelpers.assertThisInitialized(_this), "update", function () {
      _this.uniforms.iTime += .1;
    });

    var uniforms = {
      iResolution: {
        type: '4fv',
        value: [0, 0]
      },
      scale: {
        type: '1f',
        value: 0.015
      },
      offset: {
        type: '2f',
        value: {
          x: 1,
          y: 1
        }
      },
      mapDimensions: {
        type: '2f',
        value: {
          x: 1,
          y: 5112
        }
      },
      dimensions: {
        type: '4fv',
        value: [0, 0, 0, 0]
      },
      focus: {
        type: '1f',
        value: 0.5
      },
      iTime: {
        type: '1f',
        value: 0.0
      } //uv:             {type: '2f', value:[.5,.5]},

    };
    textures.forEach(function (file, i) {
      var name = Object.keys(file)[0];
      var url = file[name];
      console.log('texture', name, url, i);
      var sprite = new undefined(url);
      var texture = sprite.texture;
      uniforms[name] = {
        type: 'sampler2D',
        value: texture
      };
      allTextures = _rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, allTextures), {}, _rollupPluginBabelHelpers.defineProperty({}, name, url));

      if (texture && texture.baseTexture.hasLoaded) ; else {
        texture.baseTexture.wrapMode = undefined;
        texture && texture.baseTexture.on('loaded', function () {
          return _this.onTextureLoaded(texture, name);
        });
      }
    });
    undefined(_rollupPluginBabelHelpers.assertThisInitialized(_this), Vertext, Fragment, uniforms);
    /* end hack */

    _this.padding = 0;
    _this.passes = 0;
    _this.resolution = resolution || undefined;
    _this.autoFit = false; // PIXI.ticker.shared.add(this.update)
    // PIXI.ticker.shared.start();
    // PIXI.ticker.shared.speed = .0015;

    _this.animation.pause();

    return _this;
  }

  _rollupPluginBabelHelpers.createClass(BeeldFlagFilter, [{
    key: "apply",

    /**
     * Applies the filter.
     *
     * @param {PIXI.FilterManager} filterManager - The manager.
     * @param {PIXI.RenderTarget} input - The input target.
     * @param {PIXI.RenderTarget} output - The output target.
     */
    value: function apply(filterManager, input, output, clear) {
      var width = input.sourceFrame.width;
      var height = input.sourceFrame.height;
      var x = input.sourceFrame.x;
      var y = input.sourceFrame.y;
      this.uniforms.dimensions[0] = x;
      this.uniforms.dimensions[1] = y;
      this.uniforms.dimensions[2] = width;
      this.uniforms.dimensions[3] = height;
      this.uniforms.aspect = height / width;
      this.uniforms.padding = this.padding;
      this.uniforms.mapDimensions[0] = width;
      this.uniforms.mapDimensions[1] = height; // this.uniforms.iResolution.x = width;
      this.uniforms.iResolution[0] = width; //*resolution;

      this.uniforms.iResolution[1] = height; //*resolution;

      var mouse = this.mouse; // this.uniforms.iMouse = [(mouse.x - x) / width,(mouse.y - y) / height]
      // this.transform.updateTransform(this.parent.transform);
      // draw the filter...

      filterManager.applyFilter(this, input, output, clear);
    }
  }, {
    key: "mouse",
    get: function get() {
      return this._mouse || {
        x: 0,
        y: 0
      };
    },
    set: function set(value) {
      this._mouse = value;
    }
  }, {
    key: "offset",
    get: function get() {
      return this.uniforms.offset;
    },
    set: function set(value) {
      this.uniforms.offset = value;
    }
  }, {
    key: "time",
    get: function get() {
      return this.uniforms.iTime;
    },
    set: function set(value) {
      this.uniforms.iTime = value;
    }
  }, {
    key: "animate",
    set: function set(bool) {
      this._animate = bool;
      bool ? this.animation.resume() : this.animation.pause();
    },
    get: function get() {
      return this._animate;
    }
  }]);

  return BeeldFlagFilter;
}(undefined);

module.exports = BeeldFlagFilter;
