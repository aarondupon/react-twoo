import * as PIXI from 'pixi.js';
var Fragment = require('./BeeldSlider2.frag');
var Vertext = require('./BeeldSlider.vert');
var animate = require('animate');
// import plot from 'plot';


class TextureLoader{
    constructor(textures,uniforms,filter){
        this.filter = filter;
        this.uniforms = uniforms;
        this.addTextTures(textures);
    }
    allTextures = {}
    addTextTures = (textures) => {
        textures.forEach((file,i) => {
            const name = Object.keys(file)[0];
            const url = file[name];
            console.log('texture',name,url,i)
            const sprite = new PIXI.Sprite.fromImage(url);
            
            const texture = sprite.texture;
            const {width,height} = texture;
           
            // add textrue to unifor
            this.uniforms[name] = {type: 'sampler2D', value:texture};
            
            // down vote
            // accepted
            // Generic as can be:

            // Image data: (wi, hi) and define ri = wi / hi
            // Screen resolution: (ws, hs) and define rs = ws / hs

            // Scaled image dimensions:
            const wi = width;
            const hi = height;
            const ws = window.innerWidth;
            const hs = window.innerHeight;
            
            const ri = wi/hi;
            const rs = ws/hs;
            
            //cover
           // if texture needs to be upscaled)
            // const [sx,sy] = rs < ri ? [wi * hs/hi, hs] : [ws, hi * ws/wi];

            // this.uniforms[`scale_${name}`] = {type:'f2', value:[(ws/sx)*ws,(hs/sy)*hs]}
            
            // console.log('addTextTures',`scale_${name}`,sx,sy,' | ',(ws/sx)*ws,(hs/sy)*hs,'\t\t\t',width,height)
            // // center
            // const tx = -(ws - wi*rs)/2;
            // const ty = -(hs - hi*rs)/2;

            // texture needs downscale
            const [sx,sy] = rs < ri ? [wi * hs/hi, hs] : [ws, hi * ws/wi];

            this.uniforms[`scale_${name}`] = {type:'f2', value:[(ws/sx)*ws,(hs/sy)*hs]}
            
            console.log('addTextTures',`scale_${name}`,sx,sy,' | ',(ws/sx)*ws,(hs/sy)*hs,'\t\t\t',width,height)
            // center
            const wn = sx;//(ws/sx)*ws;
            const hn = sy;
            const tx = -(ws - wn)/2;
            const ty = (ws-hn)/2;



            this.uniforms[`transform_${name}`] = {type:'f2', value:[tx,ty]}
            console.log('addTextTures',`transform_${name}`,'\n ws',ws,'\n wn',wn,'\n tx',tx)
            const mat3 = [
                sx/ws, 0, 0,
                0, sy/hs, 0,
                tx/ws, ty/hs, 1,
            ];

            this.uniforms[`size_matrix_${name}`] = {type:'mat3', value:mat3}

            //broll
            this.uniforms[`dimension_${name}`] = {type:'f2', value:[width,height]}
            this.uniforms[`aspect_${name}`] = {type:'f1', value:height/width}
     
            this.allTextures = {
                ...this.allTextures,
                [name]:url,
            }
            if(texture && texture.baseTexture.hasLoaded)
            {
                    // do noting
            }
            else
            {   texture.baseTexture.wrapMode = PIXI.WRAP_MODES.CLAMP;           
                texture && texture.baseTexture.on('loaded', ()=>this.onTextureLoaded(texture,name));
            }
                
        });
    }
    onTextureLoaded = (texture,name) =>{
        
        // this.uniforms.width = texture.baseTexture.width
        // this.uniforms[name].baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        // this.uniforms[name].baseTexture.off('loaded', this.boundLoadedFunction);
        texture.baseTexture.wrapMode = PIXI.WRAP_MODES.CLAMP;
        texture.baseTexture.off('loaded', this.boundLoadedFunction);
    }   
}
/**
 *
 * The BeeldWaveFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used offset the x and the g propery of the texture is used to offset the y.
 * @class BeeldWaveFilter
 * @contructor
 * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
 */

export default class BeeldHoverFilter extends PIXI.Filter {
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

            progress:           {type: '1f', value:0},
            parabola:           {type: '1f', value:1},
            effectFactor:        {type: '1f', value:0},

            scale:           {type: '2f', value:[1,1]},
            tension:         {type: '1f', value: 0},
            padding:         {type: '1f', value: this.padding},
            offset:          {type: '2f', value:{x:1, y:1}},
            mapDimensions:   {type: '2f', value:{x:1, y:5112}},
            dimensions:      {type: '4fv', value:[0,0,window.innerWidth,window.innerHeight]},
            focus:           {type: '1f', value:0.5},
            iTime:           {type: '1f', value:0.0},
            iMouse:           {type: '3f', value:[.5,.5,0]},
          };

        
        this.loader = new TextureLoader(textures,uniforms,this)

        PIXI.Filter.call(this,
            Vertext,
            Fragment,
            uniforms
        );
        /* end hack */
        
       
        console.log('constructor BeeldSlider')
        

        // PIXI.ticker.shared.add(this.update)
        // PIXI.ticker.shared.start();
        // PIXI.ticker.shared.speed = .0015;
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
    
        this.uniforms.iResolution[0]=  width;//input.size.width;//*resolution;
        this.uniforms.iResolution[1] = height;//input.size.height;//*resolution;
        // MOUSE IS NOT NORMALISED !!!!!;
        const mx = (this._mouse.x - x);/// width;//input.size.width//window.innerWidth ;
        const my = (this._mouse.y - y);/// height;//input.size.height;
        const mz =  this._mouse.z;
       
        // map to filter; .6
        this.uniforms.iMouse = [mx,my,mz]
        //console.log(this.uniformData)
      //  console.log('mx',mx)
        // console.log('x',mouse.x,mx,this.uniforms.iMouse[1])
        // this.uniforms.iMouse = [(mouse.x - x) / width+this.padding*2,(mouse.y - y) / height+this.padding*2]
        // this.transform.updateTransform(this.parent.transform);
        // draw the filter...
        filterManager.applyFilter(this, input, output, clear);
       
    }
    update = (t)=>{
        this.uniforms.iTime  = performance.now()/1000;
    }

    get mouse() {
        return this._mouse || {x:0,y:0};
    }
    set mouse(value) {
        this._mouse = value
    }
    get scale() {
        return {x:this.uniforms.scale[0],y:this.uniforms.scale[1]};
    }
    set scale(value) {
       this.uniforms.scale = [value.x,value.y];
    }
    get progress (){
      
        return  this.uniforms.progress
    }
    set progress (value){
        console.log('set progress',value)
        this.uniforms.progress = isNaN(value) ? 0 : (value);
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