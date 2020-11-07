/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

require('react');
var index = require('../../../../../node_modules/pixi.js/lib/index.js');

var Fragment = require('./VHSFilter.frag');

var Vertext = require('./VHSFilter.vert');
var core = index;

function Filter(sprite) {
  //var maskMatrix = new core.Matrix();
  //sprite.renderable = false;
  core.AbstractFilter.call(this, Vertext, Fragment, {
    //mapSampler:     { type: 'sampler2D', value: sprite.texture },
    //otherMatrix:    { type: 'mat3', value: maskMatrix.toArray(true) },
    scale: {
      type: 'v2',
      value: {
        x: 100,
        y: 100
      }
    },
    time: {
      type: '1f',
      value: 1
    },
    speed: {
      type: '1f',
      value: 0.0004
    },
    distortion: {
      type: '1f',
      value: 0.21
    },
    distortion2: {
      type: '1f',
      value: 10.10
    },
    rollSpeed: {
      type: '1f',
      value: 0.000
    },
    waveHeight: {
      type: '1f',
      value: 1
    }
  }); //this.maskSprite = sprite;
  //this.maskMatrix = maskMatrix;

  this.passes = 3;
  this._time = 10;
}

Filter.prototype = Object.create(core.AbstractFilter.prototype);
Filter.prototype.constructor = Filter;
Object.defineProperties(Filter.prototype, {
  time: {
    get: function get() {
      return this.uniforms.time;
    },
    set: function set(value) {
      this.uniforms.time = value;
    }
  },
  distortion2: {
    get: function get() {
      return this.uniforms.distortion2;
    },
    set: function set(value) {
      this.uniforms.distortion2 = value;
    }
  },
  waveHeight: {
    get: function get() {
      return this.uniforms.waveHeight;
    },
    set: function set(value) {
      this.uniforms.waveHeight = value;
    }
  },
  distortion: {
    get: function get() {
      return this.uniforms.distortion;
    },
    set: function set(value) {
      this.uniforms.distortion = value;
    }
  },
  rollSpeed: {
    get: function get() {
      return this.uniforms.rollSpeed;
    },
    set: function set(value) {
      this.uniforms.rollSpeed = value;
    }
  }
}); // module.exports = Filter;
