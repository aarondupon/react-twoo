/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

require('react');
require('prop-types');
require('react-pixi-renderer');

var Fragment = require('./ScanLineFilter.frag');

var Vertext = require('./ScanLineFilter.vert'); ////import PIXI from 'pixi.js';//'vendor/pixi';
var ticker = PIXI.ticker.shared;

function Filter(sprite) {
  //var maskMatrix = new core.Matrix();
  //sprite.renderable = false;
  PIXI.Filter.call(this, null, Fragment, {
    //tDiffuse:   { type: 't', value: null },
    // time:       { type: '1f', value: 0.0 },
    // nIntensity: { type: '1f', value: 0.15 },  // default value 0.15
    // sIntensity: { type: '1f', value: 0.0 },
    // sCount:     { type: '1f', value: 10 },
    // grayscale:  { type: 'i', value: 0 }
    time: {
      type: '1f',
      value: 0.0
    },
    nIntensity: {
      type: '1f',
      value: 0.5
    },
    // default value 0.15
    sIntensity: {
      type: '1f',
      value: 0.5
    },
    sCount: {
      type: '1f',
      value: 1
    },
    grayscale: {
      type: 'i',
      value: 1
    }
  }); //this.maskSprite = sprite;
  //this.maskMatrix = maskMatrix;

  this.passes = 1;
  this._time = 1;
}

Filter.prototype = Object.create(PIXI.Filter.prototype);
Filter.prototype.constructor = Filter;
module.exports = Filter;
Object.defineProperties(Filter.prototype, {
  time: {
    get: function get() {
      return this.uniforms.time.value;
    },
    set: function set(value) {
      this.uniforms.time.value = value;
    }
  },
  nIntensity: {
    get: function get() {
      return this.uniforms.nIntensity.value;
    },
    set: function set(value) {
      this.uniforms.nIntensity.value = value;
    }
  },
  sIntensity: {
    get: function get() {
      return this.uniforms.sIntensity.value;
    },
    set: function set(value) {
      this.uniforms.sIntensity.value = value;
    }
  }
});
