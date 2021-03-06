import * as PIXI from 'pixi.js';
import css from 'css-to-react-native';
// import parseCsstransition from 'parse-css-transition';
// import camelizeStyleName from 'fbjs/lib/camelizeStyleName';
import shallowequal from 'shallowequal';
import { CSSProperties } from 'react';
import EMPTY from '../../filters/core/Texture/EMPTY';


export interface IDiv {
    clip: typeof clip;
    drawBoundingbox: typeof drawBoundingbox;
    drawBackground: typeof drawBackground;
    applyCssProperty: typeof applyCssProperty;
    applyCssTransformProperty: typeof applyCssTransformProperty;
    _scaleX: number;
    _scaleY: number;
    style: CSSProperties;
    /**
     * The width of the sprite, setting this will actually modify the scale to achieve the value set
     * 
     * @member {number}
     */
    width: number;
    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     * 
     * @member {number}
     */
    height: number;
    opacity: any;
    alpha: any;
    translateX: any;
    translateY: any;
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;

    accessibleTitle?:string | null, 
    accessibleHint?:string | null,
    accessible?:boolean | null,
    interactive?:boolean | null,
    button?:boolean | null,
    cursor?:string | null,
    applyStyle(style:CSSProperties): void,
    /**
     * Updates the transform on all children of this container for rendering
     */
    updateTransform(): void,
    calculateBounds(): void,
// tslint:disable-next-line:no-bitwise
}

const defaultProps = {
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

// utils
const parseColor = (color)=>{
    const colorObj = rgbToHex(color);
    return colorObj;
}

// @ts-ignore
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(strColor:string){

    if (strColor.substr(0, 1) === '#' || strColor.substr(0, 1) === '0x') {
        const col = strColor.includes('#') ? strColor.replace('#','0x') : strColor;
        return {hex:col,alpha:1};
    }
    
    const rgbReg = /^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    const rgbaReg = /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))?/i

    const res = strColor.match( strColor.indexOf('rgba') !== -1 ? rgbaReg : rgbReg);// strColor.match();
    if(res === null) { return {hex:0xffffff,alpha:0} }
    const R = res[1];
    const G = res[2];
    const B = res[3];
    const A = res[4];
    // @ts-ignore
    const hex =  '0x' + ((B | G << 8 | R << 16) | 1 << 24).toString(16).slice(1);
    const alpha = parseFloat(A) || 1;
    return {hex,alpha};
  }


// function applyCssProperty(property,value,SETTER){
//     if(value && this[`__${property}`] !== value ){
//         //console.log('applyCssProperty',property,value)
//         this[SETTER || property] = value;
//         this[`__${property}`] = value;
//     }
// }
function applyCssProperty(property,value,SETTER: string | null = null){
    if(value && this[`__${property}`] !== value ){
        // console.log('applyCssProperty',property,value)
        this[SETTER || property] = value;
        this[`__${property}`] = value;
    }
}

const cssTransfromProperty = {
    scale(value: number,target: { _texture: { orig: { width: number; }; }; _width: number; scale: { x: number; y: number; }; }){
        /**f
         * pixi calculates the scale relative to y
         */
        const sx =  target._texture.orig.width > 1 ? target._width / target._texture.orig.width : 1;
        const sy =  1;// target._texture.orig.height > 1 ? target._height / target._texture.orig.height: 1;
            target.scale = {x:value*sx,y:value*sy};
    },
    scaleX(value: number,target: { _texture: { orig: { width: number; height: number; }; }; _width: number; _height: number; scale: { y: any; x?: number; }; }){
        /**
         * pixi calculates the scale relative to y
         */
        const sx =  target._texture.orig.width > 1 ? target._width / target._texture.orig.width : 1;
        const sy =  target._texture.orig.height > 1 ?target._height / target._texture.orig.height: 1;
        target.scale = {x:value*sx,y:target.scale.y*sy};
    },
    scaleY(value: number,target: { _texture: { orig: { width: number; }; }; _width: number; scale: { x: any; y?: number; }; }){
        /**
         * pixi calculates the scale relative to y
         */
        const sx =  target._texture.orig.width > 1 ? target._width / target._texture.orig.width : 1;
        const sy =   1;// target._texture.orig.height  > 1 ? target._height / target._texture.orig.height: 1;
        target.scale =  {x:target.scale.x*sx,y:value*sy};
    },
}
function applyCssTransformProperty(transform: any[]){
    transform.forEach((tr)=>{
        const propName =Object.keys(tr)[0];
        const value = tr[propName];
        // tslint:disable-next-line:no-unused-expression
        cssTransfromProperty[propName] && cssTransfromProperty[propName](value,this)
        
    })
    
}

// custom plugins 
function clip(x:number,y:number,w:number,h:number){
    const self = this;
    // self.cacheAsBitmap = false;
    if(self.mask){
        self.removeChild(self.mask);
        self.mask = null;        
    }

    const myMask = new PIXI.Graphics();
    myMask.beginFill(0x000000);
    myMask.drawRect(
        x,
        y,
        w,
        h
        );
    
    myMask.endFill();
    self.addChild(myMask)
    self.mask = myMask;
    
    // self.cacheAsBitmap = true;
    // self.filterArea = new PIXI.Rectangle(
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
    const boundingbox = new PIXI.Graphics();
    // @ts-ignore
    boundingbox.lineStyle(width,hex ,alpha)
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

// TODO:: needs to be optimised
function drawBackground(w,h,color= '#000000', width=0,style = 'solid'){
    if(this.background){
        this.removeChild(this.background);
    }
    const background = new PIXI.Graphics();
    const {hex,alpha} = parseColor(color);

    background.beginFill(hex as number ,alpha)
    // tslint:disable-next-line:no-unused-expression
    width && background.lineStyle(width,hex as number,alpha)
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


// function getBoundsWithChildren(){
//     const root  = this;
//     // @ts-ignore
//     const getBounds = (root: any,bounds: any) =>{
//         const getBoundFromChild = (node) =>{
//             if(node.children.length > 0){
//                 bounds = node.children.reduce((bounds,node) => {
                
//                     bounds.maxX =  Math.max(node._bounds.maxX , bounds.maxX)
//                     bounds.maxY =  Math.max(node._bounds.maxY , bounds.maxY)
                    
                    
//                     return bounds
//                 },node._bounds)
//                 // getBoundFromChild(node)
//                 return bounds
//             }
//             return bounds
//         }
        
//         const nenwBounds = getBoundFromChild(root)
        

//         return nenwBounds
//     }

// }


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
// String.prototype.padding = function(n, c)
// {
//         const val = this.valueOf();
//         if ( Math.abs(n) <= val.length ) {
//                 return val;
//         }
//         const m = Math.max((Math.abs(n) - this.length) || 0, 0);
//         const pad = Array(m + 1).join(String(c || ' ').charAt(0));
// //      var pad = String(c || ' ').charAt(0).repeat(Math.abs(n) - this.length);
//         return (n < 0) ? pad + val : val + pad;
// //      return (n < 0) ? val + pad : pad + val;
// };


// const csstransitionArray = (css) =>{
//     // example: "opacity .3s, box-shadow 0.2s, transform 0.2s"
//     const transition = parseCsstransition(css).map(o=>{
//         o.name = camelizeStyleName(o.name)
//         return o;
//     });
    
//     return transition
// }
const cleanupStyle = (style) =>
            Object.keys(style).reduce((obj,key)=>{
                 if(style[key] !== 'none') { obj[key] = style[key]; }
                return obj;
            },{})
const getStyle = (style) =>css(Object.keys(style).map((key)=>[key,String(style[key])]))


export default class Div extends PIXI.Sprite implements IDiv {
    static defaultProps = defaultProps
    // plugins
    clip                        = clip
    drawBoundingbox             = drawBoundingbox
    drawBackground              = drawBackground
    applyCssProperty            = applyCssProperty
    applyCssTransformProperty   = applyCssTransformProperty

    _scaleX = 1
    _scaleY = 1
    
    _clip: boolean;
    _styleWidth: any;
    _styleHeight: any;
    _textureWidth: number;
    _textureHeight: number;
    _lastBoundsID: number;
    _texture: any;
    _filters: any;
    
    get style(){
        return this._style
    }
    set style(style){
        const newStyle = getStyle(cleanupStyle(style));
        // tslint:disable-next-line:no-unused-expression
        shallowequal(newStyle,this._style) === false &&  this.applyStyle(newStyle) 
        this._style = newStyle     
    }
    /**
     * The width of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */
    // @ts-ignore
    get width()
    {
        return this._texture?.orig?.width > 1  ? Math.abs(this.scale.x) * this._texture.orig.width : this._width;
    }
    set width(value) // eslint-disable-line require-jsdoc
    {
        const s = Math.sign(this.scale.x) || 1;
       

        if(this._texture?.orig?.width > 1 ) { this.scale.x = s * value / this._texture.orig.width ; }
        this._width = value;
        this.applyStyle(this._style)
    }
    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */
    // @ts-ignore
    get height()
    {
        return this._texture?.orig?.width > 1 ? Math.abs(this.scale.y) * this._texture.orig.height : this._height;
    }
    set height(value) // eslint-disable-line require-jsdoc
    {
        const s = Math.sign(this.scale.y) || 1;
        if(this._texture?.orig?.height > 1 ) { this.scale.y = s * value / this._texture.orig.height; }
        this._height = value;
        
        this.applyStyle(this._style)
    }
    get opacity(){
        return this._alpha || 1
    }
    set opacity(opacity){
        this._alpha = opacity
    }
    // @ts-ignore
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
    // @ts-ignore
    get x(){
        // @ts-ignore
        return this.transform?.position.x;
    }

    set x(x){
          // @ts-ignore
        this.transform.position.x = x + this.translateX  +  (this._style.paddingLeft ||0)
    }
    // @ts-ignore
    get y(){
          // @ts-ignore
        return this.transform.position.y;
    }
    set y(y){    
         // @ts-ignore   
        this.transform.position.y = y + this.translateY + (this._style.paddingTop ||0)
    }
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

    private _style:any
    private _translateY: number;
    private _translateX: any;
    private _alpha: number;
     // @ts-ignore
    private _UID: string;
    constructor(props) {
        super(props.texture || new EMPTY)
        this._UID =  `div_${new Date().getTime()}`
        const style = Object.assign(JSON.parse(JSON.stringify(Div.defaultProps.style)),props.style)
        this._style = getStyle(cleanupStyle(style));
    }
    applyStyle(style){

        if(!style) { return; }
        if(this._texture){
            this.getBounds();
        }
        const bounds = this._bounds;
        const width = this.width || style.width || bounds.maxX - bounds.minX;
        const height = this.height || style.height || bounds.maxY - bounds.minY ;
        const textureWidth = this.texture ? this.texture.width :  undefined
        const textureHeight = this.texture ? this.texture.height :  undefined
        // tslint:disable-next-line:no-unused-expression
        this.width === 0 &&  (this.width = width)
         // tslint:disable-next-line:no-unused-expression
        this.height === 0 && (this.height = height)
    
        if(style.transform){
            
            this.applyCssTransformProperty(style.transform)
           
        }

        // clippig
        this._clip =  false    
        if(
            style.overflow === 'hidden'  
            && width 
            && height
            && (this._styleWidth !== width ||this._styleHeight !== height)
            ){
                
                this.clip(0,0,width || style.width,height || style.width)   
                this._clip = true;        
        }
        
        // borderColor 
        if(
            (style.borderColor || style.borderWidth)
            && (
                this._styleWidth !== width ||this._styleHeight !== height
                || this._textureWidth !== textureWidth ||this._textureHeight !== textureHeight
                )
            ){
                this.drawBoundingbox( width ,height ,style.borderColor,style.borderWidth,style.borderStyle)
            
        }
        // background
        if(
            (style.backgroundColor)
            && (
                this._styleWidth !== width ||this._styleHeight !== height
                || this._textureWidth !== textureWidth ||this._textureHeight !== textureHeight
                )
            ){
                this.drawBackground((this.texture && this.texture.valid )? textureWidth : width ,(this.texture && this.texture.valid) ? textureHeight : height ,style.backgroundColor,style.borderWidth,style.borderStyle)
            
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
            // @ts-ignore
            this.applyCssProperty('right',style.right || this.parent._bounds.maxX - style.right,'x');
            // @ts-ignore
            this.applyCssProperty('bottom',style.bottom || this.parent._bounds.maxY - style.bottom,'y');
        }
         
        this._styleWidth  = width;
        this._styleHeight = height;

        this._textureWidth = this.texture ? this.texture.width : width;
        this._textureHeight = this.texture ? this.texture.height : height;
         
        // this._style = style

    }
     /**
     * Updates the transform on all children of this container for rendering
     */
    updateTransform()
    {
        // if(!checkfps(1)) return
       // if(!fpsController.checkfps(24,'updateTransform')) return 

        this._boundsID++;
        
        this.transform.updateTransform(this.parent.transform);
        // TODO: check render flags, how to process stuff here
         // @ts-ignore
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
        // if(!checkfps(2)) return this._bounds;
     //   if(!fpsController.checkfps(10,'calculateBounds')) return this._bounds
        const style = this._style;
        this
            ._bounds
            .clear();

        if(this.texture !== undefined) {
            this._calculateBounds();
        }
        const width = this._width || style.width;
        const height = this._height || style.height;
        
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (!child.visible || !child.renderable) {
                continue;
            }
            // @ts-ignore
            child.calculateBounds();
            // TODO: filter+mask, need to mask both somehow
             // @ts-ignore
            if (child._mask) {
                child
                    // @ts-ignore
                    ._mask
                     // @ts-ignore
                    .calculateBounds();
                this
                    ._bounds
                     // @ts-ignore
                    .addBoundsMask(child._bounds, child._mask._bounds);
            } else if (child.filterArea) {
                this
                    ._bounds
                    // @ts-ignore
                    .addBoundsArea(child._bounds, child.filterArea);
            } else {
                this
                    ._bounds
                    // @ts-ignore
                    .addBounds(child._bounds);
            }
        }
        const bounds = new PIXI.Bounds();
        // calclulate size        
        const maxX =  Number.isInteger(width) ? this._bounds.minX + width : this._bounds.maxX ;
        const maxY =  Number.isInteger(height) ? this._bounds.minY + height : this._bounds.maxY ;
        
        const paddingLeft = (style.paddingLeft || 0);
        const paddingTop = (style.paddingTop || 0);
        const paddingRight = (style.paddingRight || 0);
        const paddingBottom = (style.paddingBottom || 0);

        Object.assign(bounds, {
          // @ts-ignore
          minX: this._bounds.mixX - paddingLeft,
          maxX: maxX + paddingRight,
          // @ts-ignore
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
}

 // @ts-ignore
PIXI.Div = Div;