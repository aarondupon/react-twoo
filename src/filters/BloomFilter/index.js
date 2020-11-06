/**
 * @author Squize http://gamingyourway.com/ @GamingYourWay
 * Based, naturally enough, on code by Mat Groves http://matgroves.com/ @Doormat23
 * v1.1 11/1/15 - Fixed bug with setting the blur values
 */

/**
 * Creates a bloom type effect. The filter doesn't work "in place", it requires a duplicate
 * display object to be placed above the object you wish to have the bloom effect on
 *
 * @usage
 *      var mySprite=new PIXI.Sprite.fromFrame("yourSexySprite");
 *      stage.addChild(mySprite);
 *
 *      var myBloomySprite=new PIXI.Sprite.fromFrame("yourSexySprite");
 *      var bloom=new Filter();
 *      bloom.threshold=0.2;     //Defaults to 0.5
 *      myBloomySprite.filters=[bloom];
 *      stage.addChild(myBloomySprite);
 *
 * @class Filter
 * @extends AbstractFilter
 * @constructor
 */

////import PIXI from 'pixi.js';//'vendor/pixi';
var Fragment = require('./BloomFilter.frag');
var core = PIXI;

function Filter()
{
    //PIXI.AbstractFilter.call( this );





    core.AbstractFilter.call(this,
        null,
        Fragment,
        {
            threshold: {type: '1f', value: 0.7}
        }
    );



    this.blurXFilter = new PIXI.filters.BlurXFilter();
    this.blurYFilter = new PIXI.filters.BlurYFilter();

    this.defaultFilter = new core.AbstractFilter();
    this.passes = 1;
    this.time = 10;
    this.blur = 20;
    //3 passes, which may be costly for large textures
};

module.exports = Filter;

Filter.prototype = Object.create( PIXI.AbstractFilter.prototype );
Filter.prototype.constructor = Filter;

Filter.prototype.applyFilter = function (renderer, input, output,clear)
{


    //TODO - copyTexSubImage2D could be used here?
    //this.defaultFilter.applyFilter(renderer, input, output);

    var shader = this.getShader(renderer);
    var renderTarget = renderer.filterManager.getRenderTarget(true);
    renderer.filterManager.applyFilter(shader, input, renderTarget, true);
    //renderTarget = renderer.filterManager.getRenderTarget(true);
    renderer.blendModeManager.setBlendMode(core.BLEND_MODES.ADD);
    this.blurXFilter.applyFilter(renderer, renderTarget, output);
    renderer.blendModeManager.setBlendMode(core.BLEND_MODES.NORMAL);
    this.blurYFilter.applyFilter(renderer, renderTarget, output);



    // this.blurYFilter.applyFilter(renderer, input, output);

     //renderer.blendModeManager.setBlendMode(core.BLEND_MODES.NORMAL);

    //var renderTarget = renderer.filterManager.getRenderTarget(true);
    renderer.filterManager.returnRenderTarget(renderTarget);
};


/**
 * The strength of the threshold for the effect.
 *
 * @property threshold
 * @type Number
 * @default 0.5
 */
Object.defineProperty(Filter.prototype, 'threshold', {
    get: function() {
        return this.uniforms.threshold.value;
    },
    set: function(value) {
        this.uniforms.threshold.value = value;
    }
});

/**
 * Sets the strength of both the blurX and blurY properties simultaneously
 *
 * @property blur
 * @type Number
 * @default 2
 */
Object.defineProperty(Filter.prototype, 'blur', {
    get: function() {
        return this.blurXFilter.blur;
    },
    set: function(value) {
        this.blurXFilter.blur = this.blurYFilter.blur = value;
    }
});

/**
 * Sets the strength of the blurX property
 *
 * @property blurX
 * @type Number
 * @default 2
 */
Object.defineProperty(Filter.prototype, 'blurX', {
    get: function() {
        return this.blurXFilter.blur;
    },
    set: function(value) {
        this.blurXFilter.blur = value;
    }
});

/**
 * Sets the strength of the blurY property
 *
 * @property blurY
 * @type Number
 * @default 2
 */
Object.defineProperty(Filter.prototype, 'blurY', {
    get: function() {
        return this.blurYFilter.blur;
    },
    set: function(value) {
        this.blurYFilter.blur = value;
    }
});
