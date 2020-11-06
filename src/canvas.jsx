import React, {Component} from 'react';
import ReactPIXIFiber from './fiber/ReactPIXIFiber';
import {ReactPIXIFiberRoot} from './fiber/ReactPIXIFiberRoot';
// import throttle from 'lodash.throttle';
// import App from './App';

export default class Canvas extends Component {
    static defaultProps = {
        children: null,
        backgroundColor: '0xff0000',
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
    };
    constructor(){
        super();
        console.log('constructor:canvas:created and stage!')
        // this.resize = throttle(this.resize,200)
    }
    componentWillUnmount(){
        if(this._reactPIXIFiberRoot && typeof this._reactPIXIFiberRoot.cancel  ===  'function' ){
            this._reactPIXIFiberRoot.cancel();
        }
        console.log('componentWillUnmount:')
    }
    componentWillReceiveProps = (nextProps) => {
        console.log('renderInner3:canvas: created and stage')//,Date.now(),this.props, this.container)
 
          // console.log('_reactPIXIFiberRoot',this._reactPIXIFiberRoot)
        ReactPIXIFiber.render(nextProps.children, this._reactPIXIFiberRoot.stage);
        
        if( nextProps.width !== this.props.width || nextProps.height !== this.props.height){
            this.resize(nextProps)
        }
    }
    resize=(nextProps)=>{
        const {renderer,view,state} = this._reactPIXIFiberRoot;
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
        if(this._reactPIXIFiberRoot)this._reactPIXIFiberRoot.update(this.props)
        console.log('if(this._reactPIXIFiberRoot',this._reactPIXIFiberRoot)
        this.renderInner()
       
    }
    renderInner = ()=>{
        const reactPIXIFiberRoot = new ReactPIXIFiberRoot(this.props, this.container);
        this._reactPIXIFiberRoot = reactPIXIFiberRoot
        
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