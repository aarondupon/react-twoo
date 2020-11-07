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

var Fragment = require('./BeeldBend.frag');

var Vertext = require('./BeeldBend.vert');

var TextureLoader = function TextureLoader(_textures, uniforms, filter) {
  var _this = this;

  _rollupPluginBabelHelpers.classCallCheck(this, TextureLoader);

  _rollupPluginBabelHelpers.defineProperty(this, "allTextures", {});

  _rollupPluginBabelHelpers.defineProperty(this, "addTextTures", function (textures) {
    textures.forEach(function (file, i) {
      var name = Object.keys(file)[0];
      var url = file[name];
      console.log('texture', name, url, i);
      var sprite = new undefined(url);
      var texture = sprite.texture;
      _this.uniforms[name] = {
        type: 'sampler2D',
        value: texture
      };
      _this.allTextures = _rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, _this.allTextures), {}, _rollupPluginBabelHelpers.defineProperty({}, name, url));

      if (texture && texture.baseTexture.hasLoaded) ; else {
        texture.baseTexture.wrapMode = undefined;
        texture && texture.baseTexture.on('loaded', function () {
          return _this.onTextureLoaded(texture, name);
        });
      }
    });
  });

  _rollupPluginBabelHelpers.defineProperty(this, "onTextureLoaded", function (texture, name) {
    // this.uniforms.width = texture.baseTexture.width
    // this.uniforms[name].baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    // this.uniforms[name].baseTexture.off('loaded', this.boundLoadedFunction);
    texture.baseTexture.wrapMode = undefined;
    texture.baseTexture.off('loaded', _this.boundLoadedFunction);
  });

  this.filter = filter;
  this.uniforms = uniforms;
  this.addTextTures(_textures);
};
/**
 *
 * The BeeldWaveFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used offset the x and the g propery of the texture is used to offset the y.
 * @class BeeldWaveFilter
 * @contructor
 * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
 */


var BeeldBendFilter = /*#__PURE__*/function (_PIXI$Filter) {
  _rollupPluginBabelHelpers.inherits(BeeldBendFilter, _PIXI$Filter);

  var _super = _rollupPluginBabelHelpers.createSuper(BeeldBendFilter);

  /**
   * Creates an instance of DisplacementFilter.
   * @param {*} speed
   * @param {*} resolution
   * @memberof DisplacementFilter
   */
  function BeeldBendFilter() {
    var _this2;

    var textures = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var resolution = arguments.length > 1 ? arguments[1] : undefined;

    _rollupPluginBabelHelpers.classCallCheck(this, BeeldBendFilter);

    _this2 = _super.call(this);
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

    _rollupPluginBabelHelpers.defineProperty(_rollupPluginBabelHelpers.assertThisInitialized(_this2), "update", function (t) {
      _this2.uniforms.iTime = performance.now() / 1000;
    });

    _this2.padding = 200;
    _this2.passes = 0;
    _this2.resolution = resolution || undefined;
    _this2.autoFit = false;
    /* Bypassing fucking pixi check if webgl input is in use  */

    var uniforms = {
      iResolution: {
        type: '4fv',
        value: [0, 0]
      },
      // scale:           {type: '1f', value:0.015},
      scale: {
        type: '2f',
        value: [1, 1]
      },
      tension: {
        type: '1f',
        value: 0
      },
      padding: {
        type: '1f',
        value: _this2.padding
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
      },
      iMouse: {
        type: '2f',
        value: [.5, .5]
      }
    };
    _this2.loader = new TextureLoader(textures, uniforms, _rollupPluginBabelHelpers.assertThisInitialized(_this2));
    undefined(_rollupPluginBabelHelpers.assertThisInitialized(_this2), Vertext, Fragment, uniforms);
    /* end hack */
    // PIXI.ticker.shared.add(this.update)
    // PIXI.ticker.shared.start();
    // PIXI.ticker.shared.speed = .0015;

    _this2.animation = animate__default['default'](_this2.update, 24);
    _this2.animate = true;
    return _this2;
  }
  /**
   * Applies the filter.
   *
   * @param {PIXI.FilterManager} filterManager - The manager.
   * @param {PIXI.RenderTarget} input - The input target.
   * @param {PIXI.RenderTarget} output - The output target.
   */


  _rollupPluginBabelHelpers.createClass(BeeldBendFilter, [{
    key: "apply",
    value: function apply(filterManager, input, output, clear) {
      var width = input.sourceFrame.width;
      var height = input.sourceFrame.height;
      var x = input.sourceFrame.x;
      var y = input.sourceFrame.y;
      this.uniforms.dimensions[1] = x;
      this.uniforms.dimensions[2] = y;
      this.uniforms.dimensions[2] = width;
      this.uniforms.dimensions[3] = height;
      this.uniforms.aspect = height / width;
      this.uniforms.padding = this.padding;
      this.uniforms.iResolution[0] = input.size.width; //*resolution;

      this.uniforms.iResolution[1] = input.size.height; //*resolution;

      var mouse = this.mouse; // remember texture are square sized!!

      var mx = (mouse.x - x) / input.size.width; //window.innerWidth ;

      var my = (mouse.y - y) / input.size.height; // map to filter; .6

      this.uniforms.iMouse = [mx, my]; //console.log(this.uniformData)
      //  console.log('mx',mx)
      // console.log('x',mouse.x,mx,this.uniforms.iMouse[1])
      // this.uniforms.iMouse = [(mouse.x - x) / width+this.padding*2,(mouse.y - y) / height+this.padding*2]
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
    key: "scale",
    get: function get() {
      return {
        x: this.uniforms.scale[0],
        y: this.uniforms.scale[1]
      };
    },
    set: function set(value) {
      this.uniforms.scale = [value.x, value.y];
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
  }, {
    key: "tension",
    set: function set(value) {
      this.uniforms.tension = value;
    },
    get: function get() {
      return this.uniforms.tension;
    }
  }]);

  return BeeldBendFilter;
}(undefined);

module.exports = BeeldBendFilter;
