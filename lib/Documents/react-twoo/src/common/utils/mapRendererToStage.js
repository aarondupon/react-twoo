/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var map = new Map();
var map2 = new Map();
var canvasToStageMap = new Map();
var mapRender = function mapRender(stage, renderer) {
  return map[stage] = renderer;
};
var getRender = function getRender(stage) {
  return map[stage];
};
var mapStage = function mapStage(stage, renderer) {
  return map2[renderer] = stage;
};
var getStage = function getStage(renderer) {
  return map2[renderer];
};
var mapCanvasToStage = function mapCanvasToStage(canvas, stage) {
  return canvasToStageMap[canvas] = stage;
};
var getStageFromCanvas = function getStageFromCanvas(canvas) {
  return canvasToStageMap[canvas];
};

exports.getRender = getRender;
exports.getStage = getStage;
exports.getStageFromCanvas = getStageFromCanvas;
exports.mapCanvasToStage = mapCanvasToStage;
exports.mapRender = mapRender;
exports.mapStage = mapStage;
