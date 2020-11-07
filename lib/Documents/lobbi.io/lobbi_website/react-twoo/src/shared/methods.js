/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// pixi methods
var METHODS = {
  Graphics: {
    drawRect: function drawRect(props) {
      return function (graphics) {
        return graphics.drawRect(props.x, props.y, props.width, props.height);
      };
    },
    drawRoundedRect: function drawRoundedRect(props) {
      return function (graphics) {
        return graphics.drawRect(props.x, props.y, props.width, props.height, props.radius);
      };
    },
    lineStyle: function lineStyle(props) {
      return function (graphics) {
        return graphics.lineStyle(props.lineWidth, props.color, props.alpha, props.alignemt);
      };
    },
    beginFill: function beginFill(props) {
      return function (graphics) {
        return graphics.beginFill(props.color);
      };
    },
    clear: function clear(props) {
      return function (graphics) {
        graphics.clear();
      };
    },
    drawCircle: function drawCircle(props) {
      return function (graphics) {
        return graphics.drawCircle(props.x, props.y, props.radius);
      };
    },
    drawPolygon: function drawPolygon(props) {
      return function (graphics) {
        return graphics.drawPolygon(props.path);
      };
    },
    endFill: function endFill(props) {
      return function (graphics) {
        return graphics.endFill();
      };
    }
  }
};

exports.METHODS = METHODS;
