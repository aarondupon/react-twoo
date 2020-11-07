import * as PIXI from 'pixi.js';
import css from 'css-to-react-native';
import parseCsstransition from 'parse-css-transition';
import camelizeStyleName from 'fbjs/lib/camelizeStyleName';
import shallowequal from 'shallowequal';

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

// utils
const parseColor = (color)=>{
    let colorObj = rgbToHex(color);
    return colorObj;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
a
function rgbToHex(strColor){

    if (strColor.substr(0, 1) === '#' || strColor.substr(0, 1) === '0x') {
        const hex = strColor.includes('#') ? strColor.replace('#','0x') : strColor;
        return {hex,alpha:1};
    }
    
    var rgbReg = /^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    var rgbaReg = /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))?/i

    var res = strColor.match( strColor.indexOf('rgba') !== -1 ? rgbaReg : rgbReg);//strColor.match();
    if(res === null) return {hex:0xffffff,alpha:0}
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
function drawBackground(w,h,color= '#000000', width=0,style = 'solid'){
    if(this.background){
        this.removeChild(this.background);
    }
    var background = new PIXI.Graphics();
    const {hex,alpha} = parseColor(color);
    background.beginFill(hex,alpha)
    width && background.lineStyle(width,hex,alpha)
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

export default class Div extends PIXI.Sprite {
    constructor(props) {
         super()
        super(props.texture)
        this._UID =  `div_${new Date().getTime()}`
        const style = Object.assign(JSON.parse(JSON.stringify(Div.defaultProps.style)),props.style)
        this._style = getStyle(cleanupStyle(style));
    }
    //plugins
    clip                        = clip
    drawBoundingbox             = drawBoundingbox
    drawBackground              = drawBackground
    applyCssProperty            = applyCssProperty
    applyCssTransformProperty   = applyCssTransformProperty
    applyStyle(style){

        if(!style) return;
        this.getBounds();
        const bounds = this._bounds;
        const width = this.width || style.width || bounds.maxX - bounds.minX;
        const height = this.height || style.height || bounds.maxY - bounds.minY ;
        const {width:textureWidth,height:textureHeight} = this.texture;
       
        this.width === 0 &&  (this.width = width)
        this.height === 0 && (this.height = height)
    
        if(style.transform){
            
            this.applyCssTransformProperty(style.transform)
           
        }

        //clippig
        this._clip =  false    
        if(
            style.overflow === 'hidden'  
            && width 
            && height
            && (this.__width !== width ||this.__height !== height)
            ){
                
                this.clip(0,0,width || style.width,height || style.width)   
                this._clip = true;        
        }
        
        //borderColor 
        if(
            (style.borderColor || style.borderWidth)
            && (
                this.__width !== width ||this.__height !== height
                || this.__textureWidth !== textureWidth ||this.__textureHeight !== textureHeight
                )
            ){
                this.drawBoundingbox( width ,height ,style.borderColor,style.borderWidth,style.borderStyle)
            
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
       
        // console.log('draw canvas div',this)
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
        // console.log(this._scaleX,this.scaleX)
        // this.scale.set(this._scaleX,this._scaleY)

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
    _scaleX = 1
    _scaleY = 1
    get scaleX(){
        return this._scaleX || 2;
    }
    set scaleX(scaleX){  
         this._scaleX = scaleX;
         this.scale.set(scaleX,this._scaleY)
    }
    get scaleY(){
        return this._scaleY || 1;

    }
    set scaleY(scaleY){  
         this._scaleY = scaleY;
         this.scale.set(this._scaleX,scaleY)
    }
}

Div.defaultProps = {
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
    accessibleTitle:null,
    accessibleHint:null,
    accessible:null,
    interactive:null,
    button:null,
    cursor:null,
}

PIXI.Div = Div;