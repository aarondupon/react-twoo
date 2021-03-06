import React, { Component } from 'react';
import ImageBeeldFilter from './ImageBeeldFilter'


export default class ImageBeeldFilterComponent extends Component {
	constructor(props){
		super(props)
        this.filter =  new ImageBeeldFilter(props.padding)
       
	}
	componentWillMount(){
        // window.addEventListener('mousemove',this.handleMouse)
    }
    handleMouse = (e)=>{
        this.filter.mouse =  [e.clientX/window.innerWidth,e.clientY/window.innerHeight];
    }
	update = (nextProps) =>{
        // console.log('nextProps.offset',nextProps.offset)
		// if(this.props.pause) return;
        // this.filter.mouse =  [0,nextProps.offset]
        this.filter.offset =  nextProps.offset*.03;
        // console.log('offset',nextProps.offset)
    }
    componentWillReceiveProps(nextProps){
        this.update(nextProps)
    }
	componentDidMount(){
        this.update(this.props)
        // this.container.anchor.set(0.5);
	}
	componentWillUnmount(){
    }
    
    renderChidren(children){
        const filters = [this.filter,...this.props.filters]
       return React.Children.map(children, child =>  React.cloneElement(child,{...child.props,filters},child.props.children))
       
    }
    // render() {
	// 	return <container ref={ref=>this.container=ref}  filters={[this.filter]}>{this.props.children}</container>
    // }
    
	render() {
        // console.log('(this.props.children',this.props.children)
		return this.renderChidren(this.props.children)
	}
}

ImageBeeldFilterComponent.defaultProps = {
    pause:false,
    offset:0,
    filters:[],
    padding:0,
}