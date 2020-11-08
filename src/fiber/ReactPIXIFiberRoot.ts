import * as PIXI from 'pixi.js';
import {mapStage,mapRender,mapCanvasToStage} from '../common/utils/mapRendererToStage';
// import {renderAnimationRaf} from '../common/utils/renderAnimation';
// import HtmlRenderer from '../pixi.js/HtmlRenderer';
import animate from 'animate';
import FPSController from '../common/FpsController';
import { CanvasProps } from 'src/canvas';


const PIXI_RENDERS:any[] = [];
let COUNT = 0;

PIXI.settings.FILTER_RESOLUTION = 1

export interface IReactPIXIFiberRoot {
  cancel(): void;
  autoRender(renderfunction:()=>{}): void;
  createPixiWebglRender(props:Partial<CanvasProps>, domElement:HTMLElement): any;
}

export type Stage = PIXI.Sprite & {renderer:PIXI.Renderer}

export type PIXIRenderer = PIXI.Renderer & {
  view: HTMLElement & {__PIXI__:{
    renderer:PIXI.Renderer,
    stage:Stage
  }}
}
export class ReactPIXIFiberRoot {
    props: CanvasProps;
    fpsController: FPSController;
    raf: any;
    renderer: any;
    stage: PIXI.Sprite;
    view: any;
    constructor(props:CanvasProps,domElement:HTMLElement){
      this.props = props;
      this.fpsController = new FPSController();

      this.cancel = this.cancel.bind(this)
      this.autoRender =  this.autoRender.bind(this)
      this.createPixiWebglRender = this.createPixiWebglRender.bind(this)
      
      COUNT ++;
      this.createPixiWebglRender(props,domElement)
      return this;  
    }
    cancel(){
      // tslint:disable-next-line:no-unused-expression
      (this.raf && typeof this.raf.cancel === "function") &&  this.raf.cancel()
    }
    autoRender(renderfunction: { (): void; (): void; }){
      
      this.raf = animate(()=>{
        renderfunction()
      },()=>this.fpsController.checkfps(30))

    }
    // Resize function window
    createPixiWebglRender(props: CanvasProps,domElement: HTMLElement){
        const {style = {},autoRender} =  props;
        
        const {preserveDrawingBuffer,transparent,width,height,backgroundColor,autoResize,className} = props;
        let {target} = props;
        const stage:Stage = new PIXI.Sprite() as Stage
        // @ts-ignore
        stage.CANVAS_ID = COUNT;
        const paddig = 0
        stage.y = paddig
        let renderer: PIXIRenderer
 
        if (!target || !document.getElementById(target) || target === undefined) {
            // @ts-ignore
            renderer = new PIXI.WebGLRenderer((width),(height)+paddig*2, {
            antialias: true,
            clearBeforeRender: false,
            forceFXAA: true,
            autoResize,
            backgroundColor,
            transparent,
            preserveDrawingBuffer,
            resolution: PIXI.settings.RESOLUTION,
            view:domElement,
          });
          
          console.log('autoResize',autoResize)

          if (!target){
            target = `${COUNT}_target`;
          }
          PIXI_RENDERS[target] = renderer;
        } else {
          renderer = PIXI_RENDERS[target];
        }
        // renderer.render(stage);///////!!!!
        // setInterval(function(){renderer.render(stage); }, 100);

        if (!document.getElementById(target) && target !== undefined) {
          renderer.view.id = target;
         
          renderer.view.style.position = style.position || 'absolute';
          renderer.view.style.top = `${-paddig}px` || 'inherit';
          renderer.view.style.left = `${style.left}px` || 'inherit';
          renderer.view.style.opacity = '1';
          renderer.view.setAttribute('data-name','front');
          renderer.view.className = `${className}`;
        } else if (target === undefined) {
          renderer.view.id = `stage_${COUNT}`;
          // @ts-ignore
          PIXI.TARGET_FPMS = 0.06;
        }

        renderer.view.__PIXI__ = {
          renderer,
          stage,
        }
        
        // @ts-ignore
        const ticker = PIXI.ticker.shared;
        // Set this to prevent starting this ticker when listeners are added to it
        // By default this is true only on the PIXI.ticker.shared instance
        ticker.autoStart = false;
        // Call this to ensure the ticker is stopped right now
        ticker.stop();

        mapCanvasToStage(renderer.view,stage)
        
        mapStage(stage,renderer)
        mapRender(stage,renderer)

        this.renderer = renderer;
        this.stage = stage;
        this.view = renderer.view;

        stage.renderer = renderer;
        // window.renderer = renderer;
        if(autoRender){
          this.autoRender(()=>renderer.render(stage))
        }
        // setTimeout(()=>renderer.render(stage),100)
        /// coment to remove html render
        
        // var accessibilityManager = new HtmlRenderer(renderer);
        // Object.assign( window,{HTMLRenderer:accessibilityManager});
        // this.htmlRenderer = accessibilityManager;
        // this.stage.htmlRenderer = accessibilityManager;
       
        // accessibilityManager.addChild(stage)
       
        // setTimeout(()=>{
        //   accessibilityManager.activate()
        // },1000)

        
        return renderer;
        
      }
}
