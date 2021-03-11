import React, { ReactNode, Component, CSSProperties } from 'react';
import { Sprite, WebGLRenderer, Filter, DisplayObject, Bounds, Graphics, mesh } from 'pixi.js';
import { CanvasProps as CanvasProps$1 } from 'src/canvas';

declare class FPSController {
    lock: (fps?: number, id?: number) => boolean;
    check: (fps?: number, id?: number) => boolean;
    dates: {};
    checkfps(fps?: number, id?: number): boolean;
}

interface IReactPIXIFiberRoot {
    view: view;
    renderer: PIXIRenderer;
    stage: Stage;
    update(props: Readonly<CanvasProps$1> & Readonly<{
        children?: ReactNode;
    }>): any;
    cancel(): void;
    autoRender(renderfunction: () => {}): void;
    createPixiWebglRender(props: Partial<CanvasProps$1>, domElement: HTMLElement): any;
}
declare type Stage = Sprite & {
    renderer: WebGLRenderer;
};
declare type view = HTMLElement & {
    __PIXI__: {
        renderer: WebGLRenderer;
        stage: Stage;
    };
};
declare type PIXIRenderer = WebGLRenderer;
declare class ReactPIXIFiberRoot implements IReactPIXIFiberRoot {
    props: CanvasProps$1;
    fpsController: FPSController;
    raf: any;
    renderer: any;
    stage: Stage;
    view: any;
    update: any;
    constructor(props: CanvasProps$1, domElement: HTMLCanvasElement);
    cancel: () => void;
    autoRender: (renderfunction: {
        (): void;
        (): void;
    }) => void;
    createPixiWebglRender: (props: CanvasProps$1, domElement: HTMLCanvasElement) => WebGLRenderer;
}

declare type Color = number;
declare type CanvasProps = {
    children?: React.ReactNode;
    width: number;
    height: number;
    props: Partial<CanvasProps>;
    backgroundColor?: Color;
    clearBeforeRender?: boolean;
    transparent?: boolean;
    preserveDrawingBuffer?: boolean;
    autoResize?: boolean;
    forceFXAA?: boolean;
    antialias?: boolean;
    pause?: boolean;
    className?: string;
    onRender: () => {};
    autoRender: boolean;
    target?: string | undefined;
    style?: CSSProperties;
};
declare class Canvas extends Component<CanvasProps> {
    static defaultProps: {
        backgroundColor: string;
        children: null;
        clearBeforeRender: boolean;
        transparent: boolean;
        preserveDrawingBuffer: boolean;
        autoResize: boolean;
        forceFXAA: boolean;
        antialias: boolean;
        pause: boolean;
        className: string;
        onRender(): void;
        width: number;
        height: number;
        autoRender: boolean;
    };
    reactPIXIFiberRoot: IReactPIXIFiberRoot;
    container: any;
    constructor(props: CanvasProps);
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: any): void;
    resize(nextProps: any): void;
    shouldComponentUpdate(props: any): boolean;
    componentDidMount(): void;
    renderInner(): ReactPIXIFiberRoot;
    render(): React.DetailedReactHTMLElement<{
        ref: (ref: HTMLElement | null) => void;
        style: {
            border: string;
            width: number;
            height: number;
        };
        className: string;
    }, HTMLElement>;
}

declare function createAnimate(shedular?: () => boolean): (fps: any, render: any, repeat: any) => void;

declare class TextureLoader {
    constructor(uniforms: any, filter: any);
    filter: any;
    uniforms: any;
    cachedTextures: {};
    _userInteracted: boolean;
    _subscribe: any;
    subscribe: (subscribe: any) => void;
    next: (event: any) => void;
    removeTexture: (textureData: any) => void;
    _prevTextures: {};
    addTextTures: (uniforms: any, textures: any, id: any, onLoaded?: () => void) => any;
    applyTexture: (texture: any, uniforms: any, alias: any, url: any, cache?: boolean) => void;
    cacheTexture: (texture: any, url: any) => void;
    autoUpdate: (texture: any) => void;
    bindSampler2D: (texture: any, uniforms: any, alias: any) => void;
    updateUniforms: (texture: any, name: any, uniforms: any) => void;
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
declare class BeeldSliderFilter extends Filter<any> {
    /**
     * Creates an instance of DisplacementFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof DisplacementFilter
     */
    constructor(textures: any[] | undefined, resolution: any);
    passes: number;
    loader: TextureLoader;
    animation: any;
    set animate(arg: any);
    get animate(): any;
    renderer: WebGLRenderer | undefined;
    update: (t: any) => void;
    set prev(arg: any);
    _prev: any;
    set curr(arg: any);
    _curr: any;
    set mouse(arg: any);
    get mouse(): any;
    _mouse: any;
    set noise(arg: any);
    get noise(): any;
    _noise: any;
    set scale(arg: {
        x: any;
        y: any;
    });
    get scale(): {
        x: any;
        y: any;
    };
    set progress(arg: any);
    get progress(): any;
    x: number;
    _progress: any;
    set direction(arg: any);
    get direction(): any;
    _direction: any;
    set offset(arg: any);
    get offset(): any;
    set time(arg: any);
    get time(): any;
    _animate: any;
    set tension(arg: any);
    get tension(): any;
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
declare class BeeldHoverFilter extends Filter<any> {
    /**
     * Creates an instance of DisplacementFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof DisplacementFilter
     */
    constructor(textures: any[] | undefined, resolution: any);
    passes: number;
    loader: TextureLoader$1;
    animation: any;
    set animate(arg: any);
    get animate(): any;
    update: (t: any) => void;
    set mouse(arg: any);
    get mouse(): any;
    _mouse: any;
    set scale(arg: {
        x: any;
        y: any;
    });
    get scale(): {
        x: any;
        y: any;
    };
    set progress(arg: any);
    get progress(): any;
    set offset(arg: any);
    get offset(): any;
    set time(arg: any);
    get time(): any;
    _animate: any;
    set tension(arg: any);
    get tension(): any;
    set worldTransform(arg: any);
    get worldTransform(): any;
    _worldTransform: any;
}
declare class TextureLoader$1 {
    constructor(textures: any, uniforms: any, filter: any);
    filter: any;
    uniforms: any;
    allTextures: {};
    addTextTures: (textures: any) => void;
    onTextureLoaded: (texture: any, name: any) => void;
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
declare class BeeldSliderFilter$1 extends Filter<any> {
    /**
     * Creates an instance of DisplacementFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof DisplacementFilter
     */
    constructor(textures: any[] | undefined, resolution: any);
    passes: number;
    loader: TextureLoader;
    animation: any;
    set animate(arg: any);
    get animate(): any;
    renderer: WebGLRenderer | undefined;
    update: (t: any) => void;
    set prev(arg: any);
    _prev: any;
    set curr(arg: any);
    _curr: any;
    set mouse(arg: any);
    get mouse(): any;
    _mouse: any;
    set noise(arg: any);
    get noise(): any;
    _noise: any;
    set scale(arg: {
        x: any;
        y: any;
    });
    get scale(): {
        x: any;
        y: any;
    };
    set progress(arg: any);
    get progress(): any;
    x: number;
    _progress: any;
    set direction(arg: any);
    get direction(): any;
    _direction: any;
    set offset(arg: any);
    get offset(): any;
    set time(arg: any);
    get time(): any;
    _animate: any;
    set tension(arg: any);
    get tension(): any;
}

declare function EMPTY(): PIXI.Texture;
declare class EMPTY {
    constructor: typeof EMPTY;
}

/**
 * The Accessibility manager recreates the ability to tab and have content read by screen
 * readers. This is very important as it can possibly help people with disabilities access pixi
 * content.
 *
 * Much like interaction any DisplayObject can be made accessible. This manager will map the
 * events as if the mouse was being used, minimizing the effort required to implement.
 *
 * An instance of this class is automatically created by default, and can be found at renderer.plugins.accessibility
 *
 * @class
 * @memberof PIXI.accessibility
 */
declare class AccessibilityManager {
    /**
     * @param {PIXI.CanvasRenderer|PIXI.WebGLRenderer} renderer - A reference to the current renderer
     */
    constructor(renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer);
    /**
     * This is the dom element that will sit over the PixiJS element. This is where the div overlays will go.
     *
     * @type {HTMLElement}
     * @private
     */
    private div;
    /**
     * A simple pool for storing divs.
     *
     * @type {*}
     * @private
     */
    private pool;
    /**
     * This is a tick used to check if an object is no longer being rendered.
     *
     * @type {Number}
     * @private
     */
    private renderId;
    /**
     * Setting this to true will visually show the divs.
     *
     * @type {boolean}
     */
    debug: boolean;
    /**
     * The renderer this accessibility manager works for.
     *
     * @member {PIXI.SystemRenderer}
     */
    renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    /**
     * The array of currently active accessible items.
     *
     * @member {Array<*>}
     * @private
     */
    private children;
    /**
     * Is called when a key is pressed
     *
     * @private
     * @param {KeyboardEvent} e - The keydown event.
     */
    private _onKeyDown;
    /**
     * stores the state of the manager. If there are no accessible objects or the mouse is moving, this will be false.
     *
     * @member {Array<*>}
     * @private
     */
    private isActive;
    isMobileAccessabillity: boolean;
    /**
     * Creates the touch hooks.
     *
     */
    createTouchHook(): void;
    /**
     * Activating will cause the Accessibility layer to be shown. This is called when a user
     * preses the tab key.
     *
     * @private
     */
    private activate;
    __added: boolean | undefined;
    /**
     * Deactivating will cause the Accessibility layer to be hidden. This is called when a user moves
     * the mouse.
     *
     * @private
     */
    private deactivate;
    /**
     * This recursive function will run through the scene graph and add any new accessible objects to the DOM layer.
     *
     * @private
     * @param {PIXI.Container} displayObject - The DisplayObject to check.
     */
    private updateAccessibleObjects;
    /**
     * Before each render this function will ensure that all divs are mapped correctly to their DisplayObjects.
     *
     * @private
     */
    private update;
    /**
     * TODO: docs.
     *
     * @param {Rectangle} hitArea - TODO docs
     */
    capHitArea(hitArea: any): void;
    /**
     * Adds a DisplayObject to the accessibility manager
     *
     * @private
     * @param {DisplayObject} displayObject - The child to make accessible.
     */
    private addChild;
    _onMouseOver(e: any): void;
    _onMouseOut(e: any): void;
    _onMouseEnter(e: any): void;
    _onMouseLeave(e: any): void;
    /**
     * Maps the div button press to pixi's InteractionManager (click)
     *
     * @private
     * @param {MouseEvent} e - The click event.
     */
    private _onClick;
    /**
     * Maps the div focus events to pixi's InteractionManager (mouseover)
     *
     * @private
     * @param {FocusEvent} e - The focus event.
     */
    private _onFocus;
    /**
     * Maps the div focus events to pixi's InteractionManager (mouseout)
     *
     * @private
     * @param {FocusEvent} e - The focusout event.
     */
    private _onFocusOut;
    /**
     * Is called when the mouse moves across the renderer element
     *
     * @private
     * @param {MouseEvent} e - The mouse event.
     */
    private _onMouseMove;
    /**
     * Destroys the accessibility manager
     *
     */
    destroy(): void;
}

declare function getRandomColor(): string;
declare namespace ColorUtils {
    export { getRandomColor };
    export function hex2rgba(hex: any, opacity: any): string;
    export function hex2rgba(hex: any, opacity: any): string;
}

declare namespace DeviceUtil {
    function isTouchDevice(): number | true;
    function isTouchDevice(): number | true;
}

declare class Ease {
    static getEase(func: any): any;
    static backIn(time: any, begin: any, change: any, duration: any, overshoot?: number): any;
    static backOut(time: any, begin: any, change: any, duration: any, overshoot?: number): any;
    static backInOut(time: any, begin: any, change: any, duration: any, overshoot?: number): any;
    static bounceOut(time: any, begin: any, change: any, duration: any): any;
    static bounceIn(time: any, begin: any, change: any, duration: any): any;
    static bounceInOut(time: any, begin: any, change: any, duration: any): any;
    static circIn(time: any, begin: any, change: any, duration: any): any;
    static circOut(time: any, begin: any, change: any, duration: any): any;
    static circInOut(time: any, begin: any, change: any, duration: any): any;
    static cubicIn(time: any, begin: any, change: any, duration: any): any;
    static cubicOut(time: any, begin: any, change: any, duration: any): any;
    static cubicInOut(time: any, begin: any, change: any, duration: any): any;
    static elasticOut(time: any, begin: any, change: any, duration: any, amplitude?: any, period?: any): any;
    static elasticIn(time: any, begin: any, change: any, duration: any, amplitude?: any, period?: any): any;
    static elasticInOut(time: any, begin: any, change: any, duration: any, amplitude?: any, period?: any): any;
    static expoIn(time: any, begin: any, change: any, duration: any): any;
    static expoOut(time: any, begin: any, change: any, duration: any): any;
    static expoInOut(time: any, begin: any, change: any, duration: any): any;
    static linear(time: any, begin: any, change: any, duration: any): any;
    static quadIn(time: any, begin: any, change: any, duration: any): any;
    static quadOut(time: any, begin: any, change: any, duration: any): any;
    static quadInOut(time: any, begin: any, change: any, duration: any): any;
    static quartIn(time: any, begin: any, change: any, duration: any): any;
    static quartOut(time: any, begin: any, change: any, duration: any): any;
    static quartInOut(time: any, begin: any, change: any, duration: any): any;
    static quintIn(time: any, begin: any, change: any, duration: any): any;
    static quintOut(time: any, begin: any, change: any, duration: any): any;
    static quintInOut(time: any, begin: any, change: any, duration: any): any;
    static sineIn(time: any, begin: any, change: any, duration: any): any;
    static sineOut(time: any, begin: any, change: any, duration: any): any;
    static sineInOut(time: any, begin: any, change: any, duration: any): any;
    static quadraticBezier(time: any, begin: any, change: any, duration: any, p1y: any): number;
    static cubicBezier(time: any, begin: any, change: any, duration: any, p1y: any, p2y: any): number;
    static bezier(time: any, begin: any, change: any, duration: any, ...points: any[]): number;
}

declare class PIXIUtlis {
    /**
     * [updateLayersOrder description]
     * @param  {PIXI.DisplayObject} container updateLayersOrder call this function whenever you added a new layer/container
     * @return {[type]}           [description]
     */
    static updateLayersOrder(container: DisplayObject): [any];
    /**
     * [backgroundFit description]
     * @param  {[type]} background [description]
     * @param  {[type]} container  [description]
     * @return {[type]}            [description]
     */
    static backgroundFit(background: [any], container: [any]): [any];
    static backgroundFill(background: any, container: any): any;
    static copyTextureAsImage(texture: any, callback: any): void;
}

declare class TextureUtils {
    /**
     * [updateLayersOrder description]
     * @param  {PIXI.DisplayObject} container updateLayersOrder call this function whenever you added a new layer/container
     * @return {[type]}           [description]
     */
    static updateLayersOrder(container: PIXI.DisplayObject): [any];
    /**
     * [backgroundFit description]
     * @param  {[type]} background [description]
     * @param  {[type]} container  [description]
     * @return {[type]}            [description]
     */
    static backgroundFit(background: [any], container: [any]): [any];
    static backgroundFill(background: any, container: any, scale?: {
        x: number;
        y: number;
    }): any;
}

declare namespace Vec2Util {
    function horizontalAngle(a: any, b: any): number;
    function angle(a: any, b: any): number;
}

declare function plot2(propname: any, x: any, y: any, color?: string): void;

declare function filterManagerMixin(fm: any): void;

interface IDiv {
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
    accessibleTitle?: string | null;
    accessibleHint?: string | null;
    accessible?: boolean | null;
    interactive?: boolean | null;
    button?: boolean | null;
    cursor?: string | null;
    applyStyle(style: CSSProperties): void;
    /**
     * Updates the transform on all children of this container for rendering
     */
    updateTransform(): void;
    calculateBounds(): void;
}
declare function applyCssProperty(property: any, value: any, SETTER?: string | null): void;
declare function applyCssTransformProperty(transform: any[]): void;
declare function clip(x: number, y: number, w: number, h: number): void;
declare function drawBoundingbox(w: any, h: any, color?: string, width?: number, style?: string): void;
declare function drawBackground(w: any, h: any, color?: string, width?: number, style?: string): void;
declare class Div extends Sprite implements IDiv {
    static defaultProps: {
        style: {
            color: string;
            paddingTop: number;
            paddingRight: number;
            paddingBottom: number;
            paddingLeft: number;
            height: string;
            width: string;
            overflow: string;
            overflowX: string;
            overflowY: string;
            transform: string;
            border: string;
            opacity: string;
            zIndex: string;
        };
        accessibleTitle: null;
        accessibleHint: null;
        accessible: null;
        interactive: null;
        button: null;
        cursor: null;
    };
    clip: typeof clip;
    drawBoundingbox: typeof drawBoundingbox;
    drawBackground: typeof drawBackground;
    applyCssProperty: typeof applyCssProperty;
    applyCssTransformProperty: typeof applyCssTransformProperty;
    _scaleX: number;
    _scaleY: number;
    _clip: boolean;
    _styleWidth: any;
    _styleHeight: any;
    _textureWidth: number;
    _textureHeight: number;
    _lastBoundsID: number;
    _texture: any;
    _filters: any;
    get style(): any;
    set style(style: any);
    /**
     * The width of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */
    get width(): number;
    set width(value: number);
    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */
    get height(): number;
    set height(value: number);
    get opacity(): number;
    set opacity(opacity: number);
    get alpha(): number;
    set alpha(alpha: number);
    get translateX(): any;
    set translateX(translateX: any);
    get translateY(): number;
    set translateY(translateY: number);
    get x(): any;
    set x(x: any);
    get y(): any;
    set y(y: any);
    get scaleX(): number;
    set scaleX(scaleX: number);
    get scaleY(): number;
    set scaleY(scaleY: number);
    private _style;
    private _translateY;
    private _translateX;
    private _alpha;
    private _UID;
    constructor(props: any);
    applyStyle(style: any): void;
    /**
    * Updates the transform on all children of this container for rendering
    */
    updateTransform(): void;
    calculateBounds(): Bounds | undefined;
}

declare class Img extends Sprite {
    constructor(props: any);
    props: any;
    _UID: string;
    _style: any;
    clip: typeof clip$1;
    drawBoundingbox: typeof drawBoundingbox$1;
    drawBackground: typeof drawBackground$1;
    applyCssProperty: typeof applyCssProperty$1;
    applyCssTransformProperty: typeof applyCssTransformProperty$1;
    addBackgroundImage: typeof addBackgroundImage;
    applyStyle(style: any): void;
    __width: any;
    __height: any;
    __textureWidth: any;
    __textureHeight: any;
    set style(arg: any);
    get style(): any;
    set opacity(arg: any);
    get opacity(): any;
    _alpha: any;
    set translateX(arg: any);
    get translateX(): any;
    _translateX: any;
    set translateY(arg: any);
    get translateY(): any;
    _translateY: any;
    set src(arg: any);
    get src(): any;
    _src: any;
    set enableMesh(arg: any);
    get enableMesh(): any;
    _enableMesh: any;
}
declare namespace Img {
    namespace defaultProps {
        namespace style {
            const color: string;
            const paddingTop: number;
            const paddingRight: number;
            const paddingBottom: number;
            const paddingLeft: number;
            const height: string;
            const width: string;
            const overflow: string;
            const overflowX: string;
            const overflowY: string;
            const transform: string;
            const border: string;
            const opacity: string;
            const zIndex: string;
        }
        const src: null;
    }
}
declare function clip$1(x: any, y: any, w: any, h: any, maks: any): void;
declare function drawBoundingbox$1(w: any, h: any, color?: string, width?: number, style?: string): void;
declare class drawBoundingbox$1 {
    constructor(w: any, h: any, color?: string, width?: number, style?: string);
    boundingbox: Graphics;
}
declare function drawBackground$1(w: any, h: any, color?: string, width?: number, style?: string): void;
declare class drawBackground$1 {
    constructor(w: any, h: any, color?: string, width?: number, style?: string);
    background: Graphics;
}
declare function applyCssProperty$1(property: any, value: any, SETTER: any): void;
declare class applyCssProperty$1 {
}
declare function applyCssTransformProperty$1(transform: any): void;
declare function addBackgroundImage(src: any, backgroundSize: any, w: any, h: any): void;
declare class addBackgroundImage {
    constructor(src: any, backgroundSize: any, w: any, h: any);
    backgroundImage: Sprite | mesh.Plane;
    casheAsBitmap: boolean;
}

export { AccessibilityManager, BeeldSliderFilter as BeeldSliderFiler, BeeldHoverFilter as BeeldSliderFiler_1, BeeldSliderFilter$1 as BeeldSliderFiler_2, Canvas, ColorUtils, DeviceUtil, Div, EMPTY, Ease as EaseUtil, FPSController as FpsController, Img, PIXIUtlis as PixiUtils, TextureLoader, TextureUtils, Vec2Util, createAnimate as animate, filterManagerMixin, plot2 as plot };
