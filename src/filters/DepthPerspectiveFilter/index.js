////import PIXI from 'pixi.js';//'vendor/pixi';
var Fragment = require('./DepthPerspectiveFilter2.frag');
var Vertext = require('./DepthPerspectiveFilter.vert');

/**
 *
 * The DepthDisplacementFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used offset the x and the g propery of the texture is used to offset the y.
 * @class DepthDisplacementFilter
 * @contructor
 * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
 */

PIXI.DepthDisplacementFilter = function(sprite)
{
  var texture = sprite.texture

  const uniforms = {
    displacementMap: {type: 'sampler2D', value:texture},
    scale:           {type: '1f', value:0.015},
    offset:          {type: '2f', value:{x:1, y:1}},
    mapDimensions:   {type: '2f', value:{x:1, y:5112}},
    dimensions:      {type: '4fv', value:[0,0,0,0]},
    focus:           {type: '1f', value:0.5},
    iTime:           {type: '1f', value:0.0}
  };  
  PIXI.AbstractFilter.call(this,
      Vertext,
      Fragment,
      uniforms
  );

  sprite.alpha = 0;//sprite.renderable = false;
  // this.passes = [this];
  // texture.baseTexture._powerOf2 = true;
 
  // set the uniforms
  
  
  if(texture.baseTexture.hasLoaded)
  {
    
    this.uniforms.mapDimensions.x = texture.width;
    this.uniforms.mapDimensions.y = texture.height;
  }
  else
  {
    this.boundLoadedFunction = this.onTextureLoaded.bind(this);
    
    texture.baseTexture.on('loaded', this.boundLoadedFunction);
  }
//console.log(this.uniforms.offset.value)

 
 
};
 
PIXI.DepthDisplacementFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.DepthDisplacementFilter.prototype.constructor = PIXI.DepthDisplacementFilter;
 
PIXI.DepthDisplacementFilter.prototype.onTextureLoaded = function()
{

  this.uniforms.mapDimensions.x = this.uniforms.displacementMap.width;
  this.uniforms.mapDimensions.y = this.uniforms.displacementMap.height;
  
  this.uniforms.displacementMap.baseTexture.off('loaded', this.boundLoadedFunction);
};
 
/**
 * The texture used for the displacemtent map * must be power of 2 texture at the moment
 *
 * @property map
 * @type Texture
 */
Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'map', {
  get: function() {
    return this.uniforms.displacementMap;
  },
  set: function(value) {
    this.uniforms.displacementMap = value;
  }
});
 
/**
 * The multiplier used to scale the displacement result from the map calculation.
 *
 * @property scale
 * @type Point
 */
Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'scale', {
  get: function() {
    return this.uniforms.scale;
  },
  set: function(value) {
    this.uniforms.scale = value;
  }
});
 
/**
 * Focus point in paralax
 *
 * @property focus
 * @type float
 */
Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'focus', {
  get: function() {
    return this.uniforms.focus;
  },
  set: function(value) {
    this.uniforms.focus = Math.min(1,Math.max(0,value));
  }
});

/**
 * The offset used to move the displacement map.
 *
 * @property offset
 * @type Point
 */
Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'offset', {
  get: function() {
    return this.uniforms.offset;
  },
  set: function(value) {

    this.uniforms.offset = value;
  }
});

/**
 * The offset used to move the displacement map.
 *
 * @property offset
 * @type Point
 */
Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'time', {
  get: function() {
    return this.uniforms.iTime;
  },
  set: function(value) {

    this.uniforms.iTime = value;
  }
});


export default PIXI.DepthDisplacementFilter;
