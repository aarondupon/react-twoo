import * as PIXI from 'pixi.js';
import Fragment from './BeeldSlider2.frag';
import Vertext  from './BeeldSlider.vert';
import animate  from 'animate';
// import TextureLoader from './../core/TextureLoader';
import TextureLoader from './../../pixi.js/core/loaders/TextureLoader';
import EMPTY from './../core/Texture/EMPTY';
// import plot from 'plot';

const col = [
    [1,0,0],
    [0,1,0],
    [0,0,1],
    [1,0,1],
    [0,1,1],
    [1,1,0],
]

/**
 *
 * The BeeldWaveFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used offset the x and the g propery of the texture is used to offset the y.
 * @class BeeldWaveFilter
 * @contructor
 * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
 */

export default class BeeldSliderFilter extends PIXI.Filter {
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

       this.padding = 200;
       this.passes = 0;
       this.resolution = resolution || PIXI.settings.RESOLUTION;
       this.autoFit = false;
        /* Bypassing fucking pixi check if webgl input is in use  */
        const uniforms = {
            iResolution:        {type: '2f', value:[0,0]},
            direction:          {tyoe: '2f', value:[1,0]},
            prevCol:               {type: '3f', value:[0,0,0]},
            currCol:            {type: '3f', value:[0,0,0]},

            prev:               {type: 'sampler2D', value: new EMPTY()},
            curr:            {type: 'sampler2D', value: new EMPTY()},

            scale_prev:               {type: '2f', value:[0,0]},
            scale_curr:            {type: '2f', value:[1,1]},

            transform_prev:               {type: '2f', value:[0,0]},
            transform_curr:            {type: '2f', value:[0,0]},

            progress:           {type: '1f', value:0},
            parabola:           {type: '1f', value:1},
            effectFactor:       {type: '1f', value:0},

            scale:              {type: '2f', value:[1,1]},
            tension:            {type: '1f', value: 0},
            padding:            {type: '1f', value: this.padding},
            offset:             {type: '2f', value:{x:1, y:1}},
            mapDimensions:      {type: '2f', value:{x:1, y:5112}},
            dimensions:         {type: '4fv', value:[0,0,window.innerWidth,window.innerHeight]},
            focus:              {type: '1f', value:0.1},
            iTime:              {type: '1f', value:0.0},
            iMouse:             {type: '3f', value:[.5,.5,0]},
            noise:             {type: '3f', value:[0,0,0]},
          };
    
        this.loader = new TextureLoader(textures,uniforms,this)
        const filter = PIXI.Filter.call(this,
            Vertext,
            Fragment,
            uniforms
        );
        /* end hack */

       this.animation = animate(this.update, 24)
       this.animate =  true;




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
        this.renderer  = filterManager.renderer;
        
        const width = input.sourceFrame.width
        const height = input.sourceFrame.height
        const x = input.sourceFrame.x;
        const y = input.sourceFrame.y;
        this.uniforms.dimensions[1] = x;
        this.uniforms.dimensions[2] = y;
        this.uniforms.dimensions[2] = input.size.width;
        this.uniforms.dimensions[3] = input.size.height;
        
        this.uniforms.aspect = height / width;
        this.uniforms.padding = this.padding ;
    
        this.uniforms.iResolution[0] =  width;
        this.uniforms.iResolution[1] = height;

        
        // MOUSE IS NOT NORMALISED !!!!!;
        const mx = (this.mouse.x - x);
        const my = (this.mouse.y - y);
        const mz =  this.mouse.z;
        this.uniforms.iMouse = [0,0,0];
        // this.uniforms.iMouse = [mx,my,mz]
        filterManager.applyFilter(this, input, output, clear);
    }
    update = (t)=>{
       this.uniforms.iTime  = performance.now()/1000;
    }
    set prev(texture){
        console.log('texture:',texture)
        if(!texture || JSON.stringify(texture) == JSON.stringify(this._prev)) return;
        // this.uniforms.prevCol = col[texture.url.match(/\d+/g)[0]];
        this.loader.addTextTures(this.uniforms,texture,'prev');
        this._prev = texture;
    }
    set curr(texture){  
        console.log('texture:',texture)    
       if(!texture || JSON.stringify(texture) == JSON.stringify(this._curr) ) return;
    //    this.uniforms.currCol = col[texture.url.match(/\d+/g)[0]];
        this.loader.addTextTures(this.uniforms,texture,'curr');
        this._curr = texture;
    }
    get mouse() {
        return this._mouse || {x:0,y:0, z:0};
    }
    set mouse(value) {
        this._mouse = value
    }

    get noise() {
        return this._noise || {x:0,y:0};
    }
    set noise(value) {
        this.uniforms.noise = [value.x,value.y,value.z];
        this._noise = value
    }
    get scale() {
        return {x:this.uniforms.scale[0],y:this.uniforms.scale[1]};
    }
    set scale(value) {
       this.uniforms.scale = [value.x,value.y];
    }
    get progress (){
        return  this._progress || 0;
    }
    x = 0
    set progress (value){

        this.uniforms.progress = value;
        this._progress  = value;
    }
    get direction (){
        return  this._direction;
    }
    set direction (value){
        this.uniforms.direction = value;
        this._direction  = value;
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
    set tension(value){
        this.uniforms.tension = value
    }
    get tension(){
        return this.uniforms.tension;
    }
}