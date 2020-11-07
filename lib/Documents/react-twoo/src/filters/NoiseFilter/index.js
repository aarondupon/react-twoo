/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

require('react');
require('../../../../../node_modules/pixi-gl-core/src/index.js');

////import PIXI from 'pixi.js';//'vendor/pixi';
var Fragment = require('./NoiseFilter.frag');

var DEFAULT_VERTEX_PROGRAM = require('./_defaultProgram.vert');
var core = PIXI;
var ticker = PIXI.ticker.shared;

function Filter() {
  var uniforms = {};
  uniforms.resolution = {
    type: '2f',
    value: {
      x: 8,
      y: 2
    }
  };
  uniforms.nIntensity = {
    type: '1f',
    value: 0.005
  };
  uniforms.shift = {
    type: '1f',
    value: 0
  };
  uniforms.time = {
    type: '1f',
    value: 0
  };
  uniforms.speed = {
    type: '1f',
    value: 0.2
  };
  uniforms.noiseSampler = {
    type: 'sampler2D',
    value: null
  };
  core.Filter.call(this, DEFAULT_VERTEX_PROGRAM, Fragment, uniforms);
  this.passes = 1; //  var time = (10+PIXI.ticker.shared.elapsedMS);
  //this.noise = 1
}

Filter.prototype = Object.create(core.Filter.prototype); //Object.create(core.AbstractFilter.prototype);

Filter.prototype.constructor = Filter;
Object.defineProperties(Filter.prototype, {
  time: {
    get: function get() {
      return this.uniforms.time; //.value;
    },
    set: function set(value) {
      //this.uniformData.noise.value = value + 0.0;
      this.uniforms.time = value;
    }
  },
  noiseSampler: {
    get: function get() {
      return this.uniforms.noiseSampler; //.value;
    },
    set: function set(value) {
      //this.uniformData.noise.value = value + 0.0;
      this.uniforms.noiseSampler = value;
    }
  }
});
var filter = new Filter(); //let filter2 = new GLCore.GLShader(gl,DEFAULT_VERTEX_PROGRAM,Fragment);
//   //chromaFilter.size  = 1;
//   var time = PIXI.ticker.shared.elapsedMS
// 	noiseFilter.time = time;
//
//     console.log('NOISE TIME',time)
//     let filters =	[noiseFilter ];
// 	return  <Container  filters={ filters } >{props.children}</Container>
// }
