import React, { Component } from 'react';
import DemoShaderFilter from './DemoShaderFilter'
import * as PIXI from 'pixi.js';
var animate = require('animate');


export default class DemoShaderFilterComponent extends Component {
	constructor(props){
		super(props)
		this.filter =  new DemoShaderFilter()
	}
	componentWillMount(){
        // window.addEventListener('mousemove',this.handleMouse)
    }
    handleMouse = (e)=>{
        this.filter.mouse =  [e.clientX/window.innerWidth,e.clientY/window.innerHeight];
    }
	update = (nextProps) =>{
		// if(this.props.pause) return;
        // this.filter.mouse =  [0,nextProps.offset]
        this.filter.offset =  nextProps.offset;
        // console.log('offset',nextProps.offset)
    }
    componentWillReceiveProps(nextProps){
        this.update(nextProps)
    }
	componentDidMount(){
       

        
        this.update(this.props);

        // this.container.anchor.set(0.5);
	}
	componentWillUnmount(){
    }
    
    renderChidren(children){
       return React.Children.map(children, child =>  React.cloneElement(child,{...child.props,filters:[this.filter]},child.props.children))
       
    }
    render() {
		return <div ref={ref=>this.container=ref}  filters={[this.filter]}>{this.props.children}</div>
    }
    
	// render() {
    //     // console.log('(this.props.children',this.props.children)
	// 	return this.renderChidren(this.props.children)
	// }
}

DemoShaderFilterComponent.defaultProps = {
    pause:false,
    offset:0,
}