import * as PIXI from 'pixi.js';
import css from 'css-to-react-native';
import parseCsstransition from 'parse-css-transition';
import camelizeStyleName from 'fbjs/lib/camelizeStyleName';
import FPSController from 'FpsController';
import shallowequal from 'shallowequal';



class AssetsLoader {
    constructor() {
      this.resources = {};
      this._isLoading = false;
      this.resouceQueu =  window.resouceQueu || ( window.resouceQueu = [])
      this.loadIndex = 0;
    }
  
    add(url,name, cb) {
    const res = this.resources[name];
    if(res){
            cb({ [res.name]: res });
        return
        }
      this.loadResource(url,name, cb);
    }
    cancel(){
      this.loader.removeAllListeners();
    }
    loadResource(url,name, cb) {
    
      const loader = new PIXI.loaders.Loader();
      this.resouceQueu.push({ url,name, cb });
      loader.removeAllListeners();
      loader.add(name, url, (res) => {
        const obj = this.resouceQueu.find(x => x.name === res.name);
        this.resources[res.name] = res;
        cb({ [res.name]: res });
      });
      loader.load();
    }
}
const assetsLoader = new AssetsLoader();

function transformBackgroundImage(image,width,height){
    const texture =  image.texture;
       

    const {width:textureWidth,height:textureHeight} = texture;

    // Generic as can be:
    // Image data: (wi, hi) and define ri = wi / hi
    // Screen resolution: (ws, hs) and define rs = ws / hs
    // Scaled image dimensions:
    const wi = textureWidth;
    const hi = textureHeight;
    const ws = width;
    const hs = height;
    
    const ri = wi/hi;
    const rs = ws/hs;

    // texture needs downscale
    const [sx,sy] = rs < ri ? [wi * hs/hi, hs] : [ws, hi * ws/wi];

    const scale = [(ws/sx),(hs/sy)];//[(ws/sx)*ws,(hs/sy)*hs]
    // center
    const wn = sx;//(ws/sx)*ws;
    const hn = sy;
    // const tx = ( -(ws - wn)/2)/ws;
    // const ty = ((ws-hn)/2)/ws;
    const tx = ((ws/2)-(wn/2))//wn 
    const ty = ((hs-hn)/2)//ws;

    image.width = wn;
    image.height = hn;
    image.x = tx;
    image.y = ty;

    // image.pivot.x = tx;
    // image.pivot.y = ty;
}
function addBackgroundImage(src,backgroundSize,w,h){
    if(this._src === src  && this.backgroundImage) {
        transformBackgroundImage(this.backgroundImage,this.width,this.height);
        return;
    }
    const name = src;//this._UID
    console.log('load',name,src)
    this.backgroundImage && this.removeChild(this.backgroundImage);
        
    
    const handleAssetsLoaded = (resources)=>{
        this.backgroundImage && this.removeChild(this.backgroundImage);
        const originalframe = resources[name].texture;
        let image;
        if(!this.props.enableMesh){
            image = new PIXI.Sprite(originalframe);
        }else{

        const mesh = new PIXI.mesh.Plane( originalframe, 20, 20 );
        image = mesh;
        }

        transformBackgroundImage(image,this.width,this.height)
        // image.interactive = this.interactive;
        // image.shader = this.shader;
        // image.filters =  this.filters;
        this.addChild(image);
        this.backgroundImage = image;
        console.log('loaded',this,src,originalframe)
        // image.cashAsBitmap = true
        //if(this.props.casheAsBitmap ) this.casheAsBitmap =  true
        if(this.props.enableMesh) this.props.onMesh(image);
    }
    const handleAssetsLoadedBinded= handleAssetsLoaded.bind(this)
   
   
    assetsLoader.add(src,name, handleAssetsLoadedBinded);
  
}

var date = Date.now();
const FPS = 30
const checkfps = (fps = FPS) => {
 
    let allow = false;
    const interval = 1000 / fps;
    const then = date;
    const now = Date.now();
    const delta = now - then;
    if (delta > interval && date) {
        date = now - (delta % interval);
        allow = true

    }
    return allow;
};

// class FPSController {
//     constructor(){
//     }
//     dates = {}
//     checkfps = (fps = FPS,id = 0) => {
//         if(!this.dates[id]) this.dates[id] = Date.now();
//         let allow = false;
//         const interval = 1000 / fps;
//         const then = this.dates[id];
//         const now = Date.now();
//         const delta = now - then;
//         if (delta > interval && this.dates[id]) {
//             this.dates[id] = now - (delta % interval);
//             allow = true

//         }
//         return allow;
//     };
// }

const fpsController = new FPSController()

// utils
const parseColor = (color)=>{
    let colorObj = rgbToHex(color);
    return colorObj;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(strColor){

    if (strColor.substr(0, 1) === '#' || strColor.substr(0, 1) === '0x') {
        const hex = strColor.includes('#') ? strColor.replace('#','0x') : strColor;
        return {hex,alpha:1};
    }
    
    var rgbReg = /^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    var rgbaReg = /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))?/i

    var res = strColor.match( strColor.indexOf('rgba') !== -1 ? rgbaReg : rgbReg);//strColor.match();
    
    const R = res[1];
    const G = res[2];
    const B = res[3];
    const A = res[4];
    
    const hex =  '0x' + ((B | G << 8 | R << 16) | 1 << 24).toString(16).slice(1);
    const alpha = parseFloat(A) || 1;
    return {hex:hex,alpha};
  }


// function applyCssProperty(property,value,SETTER){
//     if(value && this[`__${property}`] !== value ){
//         //console.log('applyCssProperty',property,value)
//         this[SETTER || property] = value;
//         this[`__${property}`] = value;
//     }
// }
function applyCssProperty(property,value,SETTER){
    if(value && this[`__${property}`] !== value ){
        //console.log('applyCssProperty',property,value)
        this[SETTER || property] = value;
        this[`__${property}`] = value;
    }
}

const cssTransfromProperty = {
    scale(value,target){
        /**f
         * pixi calculates the scale relative to y
         */
        let sx =  target._texture.orig.width > 1 ? target._width / target._texture.orig.width : 1;
        let sy =  1;//target._texture.orig.height > 1 ? target._height / target._texture.orig.height: 1;
            target.scale = {x:value*sx,y:value*sy};
    },
    scaleX(value,target){
         /**
         * pixi calculates the scale relative to y
         */
        let sx =  target._texture.orig.width > 1 ? target._width / target._texture.orig.width : 1;
        let sy =  target._texture.orig.height > 1 ?target._height / target._texture.orig.height: 1;
        target.scale = {x:value*sx,y:target.scale.y*sy};
    },
    scaleY(value,target){
         /**
         * pixi calculates the scale relative to y
         */
        let sx =  target._texture.orig.width > 1 ? target._width / target._texture.orig.width : 1;
        let sy =   1;//target._texture.orig.height  > 1 ? target._height / target._texture.orig.height: 1;
        target.scale =  {x:target.scale.x*sx,y:value*sy};
    },
}
function applyCssTransformProperty(transform){
    transform.forEach((tr)=>{
        const propName =Object.keys(tr)[0];
        let value = tr[propName];
        cssTransfromProperty[propName] && cssTransfromProperty[propName](value,this)
        
    })
    
}

// custom plugins 
function clip(x,y,w,h,maks){
    var _self = this;
    //_self.cacheAsBitmap = false;
    if(_self.mask){
       
        _self.removeChild(_self.mask);
        _self.mask = null;
        
        
    }

    var myMask = new PIXI.Graphics();
    myMask.beginFill();
    myMask.drawRect(
        x,
        y,
        w,
        h
        );
    
    myMask.endFill();
    _self.addChild(myMask)
    _self.mask = myMask;
    
    //_self.cacheAsBitmap = true;
    // _self.filterArea = new PIXI.Rectangle(
    //     0,//this.transform.worldTransform.tx,
    //     0,//this.transform.worldTransform.ty,
    //     w,
    //     h
    //     )
            
    
    
}

function drawBoundingbox(w,h,color= '#000000', width=1,style = 'solid'){
    if(this.boundingbox){
        this.removeChild(this.boundingbox);
    }
    const {hex,alpha}  = parseColor(color);
    var boundingbox = new PIXI.Graphics();
    boundingbox.lineStyle(width,hex,alpha)
    boundingbox.drawRect(
        0,
        0,
        w,
        h
        );
        boundingbox.endFill();
    this.boundingbox = boundingbox;
    this.addChild(boundingbox)
    }

//TODO:: needs to be optimised
function drawBackground(w,h,color= '#000000', width=1,style = 'solid'){
    if(this.background){
        this.removeChild(this.background);
    }
    var background = new PIXI.Graphics();
    const {hex,alpha} = parseColor(color);
    background.beginFill(hex,alpha)
    // drawBackground.lineStyle(width,parseColor(color))
    background.drawRect(
        0,
        0,
        w,
        h
        );
    background.endFill();
    this.background = background;
    this.addChildAt(background,0)
    }


function getBoundsWithChildren(){
    const root  = this;
    const getBounds = (root,bounds) =>{
        const getBoundFromChild = (node) =>{
            if(node.children.length > 0){
                bounds = node.children.reduce((bounds,node) => {
                
                    bounds.maxX =  Math.max(node._bounds.maxX , bounds.maxX)
                    bounds.maxY =  Math.max(node._bounds.maxY , bounds.maxY)
                    
                    
                    return bounds
                },node._bounds)
                // getBoundFromChild(node)
                return bounds
            }
            return bounds
        }
        
        const nenwBounds = getBoundFromChild(root)
        

        return nenwBounds
    }

}


/**
 * object.padding(number, string)
 * Transform the string object to string of the actual width filling by the padding character (by default ' ')
 * Negative value of width means left padding, and positive value means right one
 *
 * @param       number  Width of string
 * @param       string  Padding chacracter (by default, ' ')
 * @return      string
 * @access      public
 */
String.prototype.padding = function(n, c)
{
        var val = this.valueOf();
        if ( Math.abs(n) <= val.length ) {
                return val;
        }
        var m = Math.max((Math.abs(n) - this.length) || 0, 0);
        var pad = Array(m + 1).join(String(c || ' ').charAt(0));
//      var pad = String(c || ' ').charAt(0).repeat(Math.abs(n) - this.length);
        return (n < 0) ? pad + val : val + pad;
//      return (n < 0) ? val + pad : pad + val;
};

const csstransitionArray = (css) =>{
    // example: "opacity .3s, box-shadow 0.2s, transform 0.2s"
    const transition = parseCsstransition(css).map(o=>{
        o.name = camelizeStyleName(o.name)
        return o;
    });
    
    return transition
}
const cleanupStyle = (style) =>
            Object.keys(style).reduce((obj,key)=>{
                 if(style[key] !== 'none') obj[key] = style[key];
                return obj;
            },{})
const getStyle = (style) =>css(Object.keys(style).map((key)=>[key,String(style[key])]))

export default class Img extends PIXI.Sprite {
    static defaultProps = {
        style:{
            
            color:'none',
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            height:'initial',
            width:'initial',
            overflow:'none',
            overflowX: 'none',
            overflowY:'none',
            transform:'none',
            border:'none',
            opacity:'none',
            zIndex:'none',
            },
            src:null,
    }
    constructor(props) {
        
        super(props.texture)
        this.props = props;
        this._UID =  `div_${new Date().getTime()}`
       
        const style = Object.assign(JSON.parse(JSON.stringify(Img.defaultProps.style)),props.style)
        this._style = getStyle(cleanupStyle(style));
    }
    //plugins
    clip                        = clip
    drawBoundingbox             = drawBoundingbox
    drawBackground              = drawBackground
    applyCssProperty            = applyCssProperty
    applyCssTransformProperty   = applyCssTransformProperty
    addBackgroundImage          = addBackgroundImage
    applyStyle(style){
        if(!style) return;
        this.getBounds();
        const bounds = this._bounds;
        const width = this._width || style.width || bounds.maxX - bounds.minX;
        const height = this._height || style.height || bounds.maxY - bounds.minY ;
        const {width:textureWidth,height:textureHeight} = this.texture;

        this.width === 0 &&  (this.width = width)
        this.height === 0 && (this.height = height)
        

        if(style.transform){
            
            this.applyCssTransformProperty(style.transform)
           
        }

        //clippig
        // this._clip =  false    
        // if(
        //     style.overflow === 'hidden'  
        //     && width 
        //     && height
        //     && (this.__width !== width ||this.__height !== height)
        //     ){
        //         console.log('_clip_clip_clip',this.texture.valid ? textureWidth : width)
        //         // this.clip(0,0,width,height,this.props)   
        //         this.clip(0,0,this.texture.valid ? textureWidth : width ,this.texture.valid ? textureHeight : height ,style.backgroundColor,style.borderWidth,style.borderStyle)

        //         this._clip = true;        
        // }
        
        //borderColor 
        if(
            (style.borderColor || style.borderWidth)
            && (
                this.__width !== width ||this.__height !== height
                || this.__textureWidth !== textureWidth ||this.__textureHeight !== textureHeight
                )
            ){
           
                this.drawBoundingbox(textureWidth || width ,textureHeight ||height ,style.borderColor,style.borderWidth,style.borderStyle)
            
        }
        //background
        if(
            (style.backgroundColor)
            && (
                this.__width !== width ||this.__height !== height
                || this.__textureWidth !== textureWidth ||this.__textureHeight !== textureHeight
                )
            ){
                
               this.drawBackground(this.texture.valid ? textureWidth : width ,this.texture.valid ? textureHeight : height ,style.backgroundColor,style.borderWidth,style.borderStyle)
            
        }
        //backgroudImage
        if(
            (this.src)
            && (
                this.__width !== width ||this.__height !== height
                || this.__textureWidth !== textureWidth ||this.__textureHeight !== textureHeight
                )
            ){
                
               this.addBackgroundImage(this.src,this.texture.valid ? textureWidth : width ,this.texture.valid ? textureHeight : height ,style.backgroundColor,style.borderWidth,style.borderStyle)
            
        }
       

        this.applyCssProperty('left',style.left,'x');
        this.applyCssProperty('top',style.top,'y');
        this.applyCssProperty('opacity',style.opacity);
        this.applyCssProperty('zBuffer',style.zIndex);
        // applyCssProperty('transform',style.transform,(transform)=>{
        //         console.log('transform',transform)
        // });

        // if(newStyle.transform){
        //     newStyle.transform.forEach((obj)=>Object.assign(this,obj))
        // }
        if(this.parent){
            this.applyCssProperty('right',style.right,this.parent._bounds.maxX - style.right,'x');
            this.applyCssProperty('bottom',style.bottom,this.parent._bounds.maxY - style.bottom,'y');
        }
         
        this.__width  = width;
        this.__height = height;

        this.__textureWidth = this.texture.width || width;
        this.__textureHeight = this.texture.height || height;
         
        // this._style = style

    }
     /**
     * Updates the transform on all children of this container for rendering
     */
    updateTransform()
    {
        //if(!checkfps(1)) return
       // if(!fpsController.checkfps(24,'updateTransform')) return 

        this._boundsID++;
        
        this.transform.updateTransform(this.parent.transform);
        // TODO: check render flags, how to process stuff here
        this.worldAlpha = this.alpha * this.parent.worldAlpha;

        for (let i = 0, j = this.children.length; i < j; ++i)
        {
            const child = this.children[i];

            if (child.visible)
            {
                
                child.updateTransform();
                

                
            }
        }

         if(this._filters){
            // this._filters.forEach(filter=>filter.worldTransform =this.transform.worldTransform)
            const bounds = this._bounds;
            const width = this.width || this.style.width || bounds.maxX - bounds.minX;
            const height = this.height || this.style.height || bounds.maxY - bounds.minY;
            /**
             * if check on cliip bug on scroll after setState from App.js scrollHeight !!!!!!
             */
           // if(this._clip){

                // console.log(this.transform.worldTransform.ty)
                this.filterArea = new PIXI.Rectangle(
                    this.transform.worldTransform.tx,
                    this.transform.worldTransform.ty,
                    width,
                    height
                    )
        //    / }
           
        }
                
    }
    calculateBounds()
    {   
        //if(!checkfps(2)) return this._bounds;
     //   if(!fpsController.checkfps(10,'calculateBounds')) return this._bounds
        const style = this._style;
        this
            ._bounds
            .clear();

        this._calculateBounds();
        const width = this._width || style.width;
        const height = this._height || style.height;
        
        for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            if (!child.visible || !child.renderable) {
                continue;
            }
            child.calculateBounds();
            // TODO: filter+mask, need to mask both somehow
            if (child._mask) {
                child
                    ._mask
                    .calculateBounds();
                this
                    ._bounds
                    .addBoundsMask(child._bounds, child._mask._bounds);
            } else if (child.filterArea) {
                this
                    ._bounds
                    .addBoundsArea(child._bounds, child.filterArea);
            } else {
                this
                    ._bounds
                    .addBounds(child._bounds);
            }
        }
        var bounds = new PIXI.Bounds();
        // calclulate size        
        const maxX =  Number.isInteger(width) ? this._bounds.minX + width : this._bounds.maxX ;
        const maxY =  Number.isInteger(height) ? this._bounds.minY + height : this._bounds.maxY ;
        
        const paddingLeft = (style.paddingLeft || 0);
        const paddingTop = (style.paddingTop || 0);
        const paddingRight = (style.paddingRight || 0);
        const paddingBottom = (style.paddingBottom || 0);

        Object.assign(bounds, {
          minX: this._bounds.mixX - paddingLeft,
          maxX: maxX + paddingRight,
          minY: this._bounds.minY - paddingTop,
          maxY: maxY + paddingBottom
        })
        
        this
            ._bounds
            .addBounds(bounds);

        this._lastBoundsID = this._boundsID;
        return this._bounds
        return 
    }
    get style(){
        return this._style
    }
    set style(style){
        const newStyle = getStyle(cleanupStyle(style));
        shallowequal(newStyle,this._style) === false &&  this.applyStyle(newStyle)   
        this._style = newStyle     
    }
    /**
     * The width of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */
    get width()
    {
        return this._texture.orig.width > 1  ? Math.abs(this.scale.x) * this._texture.orig.width : this._width;
    }
    set width(value) // eslint-disable-line require-jsdoc
    {
        const s = Math.sign(this.scale.x) || 1;
       

        if(this._texture.orig.width > 1 ) this.scale.x = s * value / this._texture.orig.width ;
        this._width = value;
        this.applyStyle(this._style)
    }
    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */
    get height()
    {
        return this._texture.orig.width > 1 ? Math.abs(this.scale.y) * this._texture.orig.height : this._height;
    }
    set height(value) // eslint-disable-line require-jsdoc
    {
        const s = Math.sign(this.scale.y) || 1;
        if(this._texture.orig.height > 1 ) this.scale.y = s * value / this._texture.orig.height;
        this._height = value;
        this.applyStyle(this._style)
    }
    get opacity(){
        return this._alpha || 1
    }
    set opacity(opacity){
        this._alpha = opacity
    }
    get alpha(){
        return this._alpha || 1
    }
    set alpha(alpha){
        this._alpha = alpha
    }
    get translateX(){
        return this._translateX || 0
    }
    set translateX(translateX){
        this._translateX = translateX
        this.x = this.position.x + translateX
    }
    get translateY(){
        return this._translateY || 0
    }
    set translateY(translateY){
        this._translateY = translateY
        this.y =this.position.y + translateY
    }
    get x(){
        return this.transform.position.x;
    }

    set x(x){
        this.transform.position.x = x + this.translateX  +  (this._style.paddingLeft ||0)
    }
    get y(){
        return this.transform.position.y;
    }
    set y(y){       
        this.transform.position.y = y + this.translateY + (this._style.paddingTop ||0)
    }
    set src(source){
       
        if(this._src !== source){
            this.addBackgroundImage(source);
        }  
        this._src = source;
    }
    get src(){
        return this._src;
    }
    set enableMesh(enableMesh){
        this._enableMesh = enableMesh;
    }
    get enableMesh(){
        return this._enableMesh;
    }
}

PIXI.Img = Img;