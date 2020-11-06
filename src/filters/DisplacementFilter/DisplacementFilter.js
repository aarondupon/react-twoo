import * as PIXI from 'pixi.js';
var Fragment = require('./DisplacementFilter.frag');
var Vertext = require('./DisplacementFilter.vert');

/**
 * The DisplacementFilter applies a Gaussian blur to an object.
 * The strength of the blur can be set for x- and y-axis separately.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
export default class DisplacementFilter extends PIXI.Filter
{
    /**
     * Creates an instance of DisplacementFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof DisplacementFilter
     */
    constructor(resolution)
    {
        super(Vertext,Fragment);
        this.uniforms.dimensions = new Float32Array(2);

        //http://pixijs.download/dev/docs/core_renderers_webgl_managers_FilterManager.js.html#line51
        // ---> check this to allow vertical padding onlu
        this.padding = 200;
        this.passes = 1;
        this.resolution = resolution || PIXI.settings.RESOLUTION;
        this.autoFit = false;

    }

    /**
     * Applies the filter.
     *
     * @param {PIXI.FilterManager} filterManager - The manager.
     * @param {PIXI.RenderTarget} input - The input target.
     * @param {PIXI.RenderTarget} output - The output target.
     */
    apply(filterManager, input, output,clear)
    { 

        const width = input.sourceFrame.width;
        const height = input.sourceFrame.height;
        
        
        this.uniforms.dimensions[0] = width;
        this.uniforms.dimensions[1] = height;
        this.uniforms.aspect = height / width;
        this.uniforms.padding = this.padding;
      
        filterManager.applyFilter(this, input, output, clear);
        
        // const renderTarget = filterManager.getRenderTarget(true);
       
        // filterManager.returnRenderTarget(renderTarget);
    }
    addTexture(texture,name){
        this.uniforms[name] = texture
    }
    get mouse()
    {
       
        return  this.uniforms.uMouse;
    }
    set mouse(value)
    {   
        // console.log('mouseX',value)
        // value[1] = value[1] *1
        this.uniforms.uMouse = value
    }
    get offset()
    {
       
        return  this.uniforms.offset;
    }
    set offset(value)
    {   
        // console.log('offset',value)
        // value[1] = value[1] *1
        this.uniforms.offset = value
    }
    set worldTransform(worldTransform)
    {
        this._worldTransform = worldTransform;
        this.uniforms.tx = worldTransform.tx;
        
    }
    get worldTransform()
    {
        return this._.worldTransform;
    }
    
}