/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

require('react');
require('./fiber/ReactPIXIFiber.js');
require('./fiber/ReactPIXIFiberRoot.js');

Cavans.defaultProps = {
  children: null,
  backgroundColor: '0xff0000',
  clearBeforeRender: false,
  // true,
  transparent: true,
  preserveDrawingBuffer: false,
  // true,
  autoResize: false,
  // true,
  forceFXAA: false,
  antialias: false,
  // true,
  pause: false,
  className: 'custom-render-canvas',
  onRender: function onRender() {},
  width: window.innerWidth,
  height: window.innerHeight,
  autoRender: true
};
