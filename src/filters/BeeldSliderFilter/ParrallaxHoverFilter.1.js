import * as PIXI from 'pixi.js';
import Fragment from './ParrallaxHoverFilter.frag';
import Vertext from './ParrallaxHoverFilter.vert';

/**
 * The ParrallaxHoverFilter applies a Gaussian blur to an object.
 * The strength of the blur can be set for x- and y-axis separately.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
export default class ParrallaxHoverFilter extends PIXI.Filter
{
    /**
     * Creates an instance of ParrallaxHoverFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof ParrallaxHoverFilter
     */
    constructor(resolution)
    {
        super(Vertext,Fragment);
        this.uniforms.dimensions = new Float32Array(2);

        //http://pixijs.download/dev/docs/core_renderers_webgl_managers_FilterManager.js.html#line51
        // ---> check this to allow vertical padding onlu
        this.padding = 10;//600;
        // this.filterArea = [0,0,100,100]
        this.passes = 1;
        this.resolution = resolution || PIXI.settings.RESOLUTION;
        // this.autoFit = false;

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
        /** removes padding x */
        // input.sourceFrame.x = 0;
        // input.sourceFrame.width = input.sourceFrame.width  - this.padding;
         /** end removes padding x */

        const width = input.sourceFrame.width;
        const height = input.sourceFrame.height;
        
        
        this.uniforms.dimensions[0] = width;// - (this.padding*2);
        this.uniforms.dimensions[1] = height;//  - (this.padding*2);
        this.uniforms.aspect = height / width;
        this.uniforms.padding = this.padding;
        // in pixels
        // this.uniforms.columnWidth = 25;//window.innerWidth
        // this.uniforms.tx = input.sourceFrame.x;
        //.39
        this.uniforms.mapSampler = input.texture;
        // console.log('cacl:',input)
        // var projectionMatrix = [0.0025380710139870644, 0, 0, 0, -0.0035587188322097063, 0, -1, 1, 1]
        
        // this.transform.updateTransform(this.parent.transform);
        // draw the filter...
        filterManager.applyFilter(this, input, output, clear);
        /*
       
        dimension: 1500, 1400];
        filterClap: [0, 0, 0.73193359375, 0.68310546875];
        filterArea:
            location: WebGLUniformLocation {}
            size: 1
            type: "vec4"
            value: Float32Array(4) [2048, 2048, -600, -600]
        */
        // -0.20000000000000007
        //this.uniforms.dimensions.x,filterManager.shaderCache[19].data);//,this.uniforms.aspect, this.padding,input.sourceFrame)

        
        // const renderTarget = filterManager.getRenderTarget(true);
       
        // filterManager.returnRenderTarget(renderTarget);
    }
    addTexture(texture,name){
        // console.log('addTexture',sprite,name)
        this.uniforms[name] = texture//sprite._texture   
    }
    set disp(sprite)
    {   
        this.uniforms['disp'] = sprite._texture
    }
    set texture(sprite)
    {   
        this.uniforms['texture'] = sprite._texture
    }
    set texture2(sprite)
    {   
        // console.log('mouseX',value)
        // value[1] = value[1] *1
        this.uniforms['texture2'] = sprite._texture;
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
        // console.log('worldTransform',worldTransform.tx,worldTransform.toArray())   
        this._worldTransform = worldTransform;//.toArray();
        this.uniforms.tx = worldTransform.tx;
        
    }
    get worldTransform()
    {
        return this._.worldTransform;
    }
    
}