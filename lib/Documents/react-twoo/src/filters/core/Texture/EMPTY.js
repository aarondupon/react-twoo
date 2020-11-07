/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

function EMPTY() {
  var baseTexture = new PIXI.BaseTexture();
  return new PIXI.Texture(baseTexture);
}

EMPTY.prototype.constructor = EMPTY;

module.exports = EMPTY;
