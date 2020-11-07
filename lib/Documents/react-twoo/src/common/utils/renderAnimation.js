/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../node_modules/performance-now/lib/performance-now.js');

var date = Date.now();
var FPS = 30;
var renderAnimationOnce = function renderAnimationOnce(renderer, stage) {
  var fps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : FPS;
  var interval = 1000 / fps;
  var then = date;
  var now = Date.now();
  var delta = now - then;

  if (delta > interval && date) {
    date = now - delta % interval;
    renderer.render(stage);
  }
};
var loop = null;
var renderAnimationRaf = function renderAnimationRaf(renderer, stage) {
  var fps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : FPS;
  cancelAnimationFrame(loop);

  var render = function render() {
    renderAnimationOnce(renderer, stage, fps);
    loop = requestAnimationFrame(render);
  };

  loop = requestAnimationFrame(render); // const render = () =>{
  //     // renderAnimationOnce(renderer, stage,fps);
  //     renderer.render(stage);
  //     // raf(render)
  // }
  // raf(render)
};
var forceRender = function forceRender(renderer, stage) {// console.log('forceRender',renderer, stage)
  // renderer.render(stage);
  // setTimeout(()=>renderer.render(stage),0)
  // /raf(()=>renderer.render(stage))
};

exports.forceRender = forceRender;
exports.renderAnimationOnce = renderAnimationOnce;
exports.renderAnimationRaf = renderAnimationRaf;
