import React, {Component, CSSProperties} from 'react';
import ReactPIXIFiber from './fiber/ReactPIXIFiber';
import {ReactPIXIFiberRoot} from './fiber/ReactPIXIFiberRoot';

type Color = string;

export type CanvasProps = {
    children?: React.ReactNode,
    backgroundColor?: Color,
    clearBeforeRender?: boolean, // true,
    transparent?: boolean,
    preserveDrawingBuffer?: boolean, // true,
    autoResize?: boolean, // true,
    forceFXAA?: boolean,
    antialias?: boolean, // true,
    pause?: boolean,
    className?: string,
    onRender?: () => {},
    width?: number,
    height?: number,
    autoRender?: boolean,
    target?:string | undefined,
    style?: CSSProperties,
} & typeof defaultProps

const defaultProps  = {
    backgroundColor: '0xff0000',
    children: null,
    clearBeforeRender: false, // true,
    transparent: true,
    preserveDrawingBuffer: false, // true,
    autoResize: false, // true,
    forceFXAA: false,
    antialias: false, // true,
    pause: false,
    className: 'custom-render-canvas',
    onRender: () => {},
    width: window.innerWidth,
    height: window.innerHeight,
    autoRender: true,
}



export default class Canvas extends Component<CanvasProps> {
    reactPIXIFiberRoot: typeof ReactPIXIFiberRoot;
    constructor(props:CanvasProps){
        super(props);
        console.log('constructor:canvas:created and stage!')
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.resize = this.resize.bind(this);
        this.renderInner = this.renderInner.bind(this);
    }
    componentWillUnmount(){
        if(this.reactPIXIFiberRoot && typeof this.reactPIXIFiberRoot.cancel  ===  'function' ){
            this.reactPIXIFiberRoot.cancel();
        }
        console.log('componentWillUnmount:')
    }
    componentWillReceiveProps (nextProps) {
        console.log('renderInner3:canvas: created and stage')//,Date.now(),this.props, this.container)
 
          // console.log('reactPIXIFiberRoot',this.reactPIXIFiberRoot)
        ReactPIXIFiber.render(nextProps.children, this.reactPIXIFiberRoot.stage);
        
        if( nextProps.width !== this.props.width || nextProps.height !== this.props.height){
            this.resize(nextProps)
        }
    }
    resize(nextProps){
        const {renderer,view,state} = this.reactPIXIFiberRoot;
        const parent = view.parentNode;
        const w = parent.clientWidth;
        const h = parent.clientHeight;
        renderer.resize(w,h);
        renderer.view.style.width = w + 'px';
        renderer.view.style.height = h + 'px';
        renderer.resize(w,h);
    }
    shouldComponentUpdate({width,height}){
        return( width !== this.props.width || height !== this.props.height )
    }    
    componentDidMount() {
        if(this.reactPIXIFiberRoot)this.reactPIXIFiberRoot.update(this.props)
        console.log('if(this.reactPIXIFiberRoot',this.reactPIXIFiberRoot)
        this.renderInner()
       
    }
    renderInner(){
        const reactPIXIFiberRoot = new ReactPIXIFiberRoot(this.props, this.container);
        this.reactPIXIFiberRoot = reactPIXIFiberRoot
        
        ReactPIXIFiber.render(this.props.children, reactPIXIFiberRoot.stage);
    
        // if (this.props.autoRender) {
        //    reactPIXIFiberRoot.autoRender()
        // }
        console.log('renderInner2:canvas: created and stage::')//,Date.now(),this.props, this.container)
        return reactPIXIFiberRoot;
    }
    render() {
        console.log('render1: canvas:created and stage')
        const container = React.createElement('canvas', {
            ref: (ref) => {
                this.container = ref;
            },
            style: {
                // position: 'fixed',
                border:'red solid 1px',
                // zIndex:-1,
                // transform:'translate3d(0,0,1px)',
               // pointerEvents: 'none',
               // backgroundColor: 'transparent',
                width: this.props.width,
                height: this.props.height
            },
            className: 'canvas-render-container',
        });
        return container;
    }
}

Canvas.defaultProps = defaultProps