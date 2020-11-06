import * as PIXI from 'pixi.js';
var Fragment = require('./BeeldFlagMouse.frag');
var Vertext = require('./BeeldFlag.vert');
import  animate from 'animate';

let allTextures = {}
/**
 *
 * The BeeldFlagFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used offset the x and the g propery of the texture is used to offset the y.
 * @class BeeldFlagFilter
 * @contructor
 * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
 */
export default class BeeldFlagFilter extends PIXI.Filter {
    /**
     * Creates an instance of DisplacementFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof DisplacementFilter
     */
    constructor(textures = [] ,resolution)
    {
        
        
        
        super();
       

       /* defaullt pixi implementation 
        Object.assign(this.uniforms,{
            dimensions:new Float32Array(4),
            scale:0.015,
            offet:0,
            mapDimensions:new Float32Array(2),
            focus:.5,
            iTime:0,
            displacementMap:texture,
        });
        */

        /* Bypassing fucking pixi check if webgl input is in use  */
        const uniforms = {
            iResolution:        {type: '4fv', value:[0,0]},
            scale:              {type: '1f', value:0.015},
            offset:             {type: '2f', value:{x:1, y:1}},
            mapDimensions:      {type: '2f', value:{x:1, y:5112}},
            dimensions:         {type: '4fv', value:[0,0,0,0]},
            focus:              {type: '1f', value:0.5},
            iTime:              {type: '1f', value:0.0},
            //uv:             {type: '2f', value:[.5,.5]},
          };
        textures.forEach((file,i) => {
            const name = Object.keys(file)[0];
            const url = file[name];
            console.log('texture',name,url,i)
            const sprite = new PIXI.Sprite.fromImage(url);
            const texture = sprite.texture
            uniforms[name] = {type: 'sampler2D', value:texture};
            allTextures = {
                ...allTextures,
                [name]:url,
            }
            if(texture && texture.baseTexture.hasLoaded)
            {
                    // do noting
            }
            else
            {   texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;           
                texture && texture.baseTexture.on('loaded', ()=>this.onTextureLoaded(texture,name));
            }
                
        });

        PIXI.Filter.call(this,
            Vertext,
            Fragment,
            uniforms
        );
        /* end hack */
        
        this.padding = 0;
        this.passes = 0;
        this.resolution = resolution || PIXI.settings.RESOLUTION;
        this.autoFit = false;

        

        // PIXI.ticker.shared.add(this.update)
        // PIXI.ticker.shared.start();
        // PIXI.ticker.shared.speed = .0015;
        
        this.animation.pause();
        

    }
    animation = animate(this.update, 24)
    onTextureLoaded = (texture,name) =>{
        // this.uniforms.mapDimensions.x = this.uniforms.texture.width;
        // this.uniforms.mapDimensions.y = this.uniforms.texture.height;
        // this.uniforms.iResolution[0] = texture.width;
        // this.uniforms.iResolution[1] = texture.height;
        this.uniforms[name].baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        this.uniforms[name].baseTexture.off('loaded', this.boundLoadedFunction);
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
        
        const width = input.sourceFrame.width
        const height = input.sourceFrame.height
        const x = input.sourceFrame.x;
        const y = input.sourceFrame.y;
        this.uniforms.dimensions[0] = x;
        this.uniforms.dimensions[1] = y;
        this.uniforms.dimensions[2] = width;
        this.uniforms.dimensions[3] = height;
        
        this.uniforms.aspect = height / width;
        this.uniforms.padding = this.padding ;
        
        this.uniforms.mapDimensions[0] = width;
        this.uniforms.mapDimensions[1] = height;
        // this.uniforms.iResolution.x = width;
        // this.uniforms.iResolution.y = height;
        var resolution = window.devicePixelRatio || 1;

        this.uniforms.iResolution[0]= width;//*resolution;
        this.uniforms.iResolution[1] = height;//*resolution;
        
        const {mouse} = this;
       // this.uniforms.iMouse = [(mouse.x - x) / width,(mouse.y - y) / height]
        // this.transform.updateTransform(this.parent.transform);
        // draw the filter...
        filterManager.applyFilter(this, input, output, clear);
       
    }
 
    update = ()=>{
        
        this.uniforms.iTime +=.1;
    }

   

    get mouse() {
        return this._mouse || {x:0,y:0};
    }
    set mouse(value) {
        this._mouse = value
    }
    get offset() {
        return this.uniforms.offset;
    }
    set offset(value) {
        this.uniforms.offset = value
    }
    get time() {
        return this.uniforms.iTime;
    }
    set time(value) {
        this.uniforms.iTime = value
    }

    set animate (bool) {
        this._animate = bool;
        bool ? this.animation.resume() : this.animation.pause()
    }
    get animate () {
        return this._animate;
    }

}