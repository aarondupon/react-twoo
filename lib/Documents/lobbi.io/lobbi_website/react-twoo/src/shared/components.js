/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../../../../../../node_modules/pixi.js/lib/index.js');
require('../pixi.js/html/Div.js');
require('../pixi.js/html/Img.js');

var COMPONENTS = {
  TEXT: function TEXT(props) {
    return new undefined(props.text || props, props.textStyleOptions, props.canvas);
  },
  // display
  displayobject: function displayobject(props) {
    return new undefined();
  },
  container: function container(props) {
    return new undefined();
  },
  // grapics
  graphics: function graphics(props) {
    return new undefined(props.nativeLines);
  },
  // sprite
  sprite: function sprite(props) {
    return new undefined(props.baseTexture);
  },
  'sprite-fromImage': function spriteFromImage(props) {
    var image = undefined(props.url);
    image.x = props.x;
    image.y = props.y;
    return image;
  },
  baseRenderTexture: function baseRenderTexture(props) {
    return new undefined(props.width, props.height);
  },
  // html mapping MAP HTML
  div: function div(props) {
    return new undefined(props);
  },
  img: function img(props) {
    return new undefined(props);
  },
  slider: function slider(props) {
    return new undefined(props);
  },
  //text elements
  // textContent: (props) => new TextContent(props),
  // sdfTextContent: (props) => new SDFTextContent(props),
  h1: function h1(props) {
    console.log('propspropspropsprops', props);
    return new SDFTextContent(props);
  },
  illuminate: function illuminate(props) {
    console.log('propspropspropsprops', props);
    return new undefined(props);
  },
  //slider: (props) => new PIXI.Sprite(props.baseTexture),
  // 'div-animated': (props) => new PIXI.DivAnimated(props),
  "default": function _default(props) {
    return new undefined();
  }
};

exports.COMPONENTS = COMPONENTS;
