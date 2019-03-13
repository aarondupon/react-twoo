import * as PIXI from 'pixi.js';
import {mapStage,mapRender,mapCanvasToStage} from './../utils/mapRendererToStage';
import {renderAnimationRaf} from '../utils/renderAnimation';
import HtmlRenderer from '../pixi.js/HtmlRenderer';
import animate from '../utils/animate';
import FPSController from 'FpsController';


const PIXI_RENDERS = [];
var COUNT = 0;

PIXI.settings.FILTER_RESOLUTION = 1
export class ReactPIXIFiberRoot {
    constructor(props,domElement){
      this.props = props;
      this.fpsController = new FPSController();

      COUNT ++;
      this._createPixiWebglRender(props,domElement)
      return this;  
    }
    cancel = () =>{
      this.raf &&  this.raf.cancel()
    }
    autoRender = (renderfunction) =>{
      
      this.raf = animate(()=>{
        renderfunction()
      },()=>this.fpsController.checkfps(30))

    }
    // Resize function window
    _createPixiWebglRender = (props,domElement) => {
        const {style = {},autoRender} =  props;
        
        let {targetName,preserveDrawingBuffer,transparent, target,width,height,backgroundColor,clearBeforeRender,autoResize,className} = props;
        const stage = new PIXI.Sprite()
        stage.CANVAS_ID = COUNT;
        // stage.UID = this.UID
        stage.filters = [new PIXI.filters.AlphaFilter()];
        const paddig = 0
        stage.y = paddig
        const res = 1
        //stage.scale = (new PIXI.Point(res,res))
        // stage.filterArea = new PIXI.Rectangle(-300,-300,1000,1000)

        // PIXI.settings.RESOLUTION = 1  
        let renderer;
        PIXI.RESOLUTION = window.devicePixelRatio || 1;
       // const COUNT = Date.now();//Snew Date().getUTCMilliseconds();
        if (!document.getElementById(target) || target === undefined) {
            renderer = new PIXI.WebGLRenderer((width),(height)+paddig*2, {
           forceFXAA: true,//this.props.forceFXAA,
            antialias: true, // this.props.antialias,
            backgroundColor,
            clearBeforeRender:false,
            transparent,
            preserveDrawingBuffer, // this.props.preserveDrawingBuffer,
            autoResize,
            resolution: PIXI.settings.RESOLUTION,
            view:domElement,
          });
          
          console.log('autoResize',autoResize)

          if (!target) target = `${COUNT}_target`;
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
          renderer.view.style.opacity = 1;
          renderer.view.setAttribute('data-name','front');
          renderer.view.className = `${className}`;
          // domElement.appendChild(renderer.view);
        } else if (target === undefined) {
          renderer.view.id = `stage_${COUNT}`;
          PIXI.TARGET_FPMS = 0.06;
          // domElement.appendChild(renderer.view);
        }

        renderer.view.__PIXI__ = {
          renderer,
          stage,
        }
        
        var ticker = PIXI.ticker.shared;
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