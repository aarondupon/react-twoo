import _VHSFilter from './VHSFilter';
import _RGBSplitFilter from './RGBSplitFilter';
import _ScanLineFilter from './ScanLineFilter';
import _BloomFilter from './BloomFilter';
import _DepthPerspectiveFilter from './DepthPerspectiveFilter';
import _DisplacementFilter from './DisplacementFilter';
import _GaussianBlurFilter from './GaussianBlurFilter';

const ticker =  PIXI.ticker.shared;

import Stage,{Sprite,Container,Box} from 'react-pixi-renderer';

////import PIXI from 'pixi.js';
// custom filters (aaron dupon)
import PropTypes from 'prop-types';

import React, { Component } from 'react';

export class ScanLineFilter extends Component {
	constructor(props){
		super(props)
		this.filter =  new _ScanLineFilter()
	}
	componentWillMount(){

	}
	animateFilter = () =>{
		var container = this.refs.filter;
		this.filter.time = ticker.lastTime;
		container.filters = [this.filter]
	}
	componentDidMount(){
		PIXI.ticker.shared.add(this.animateFilter)
	}
	componentWillUnmount(){
			PIXI.ticker.shared.remove(this.animateFilter)
	}
	render() {
		this.filter.time = ticker.lastTime;

		return <Container ref={'filter'} >{this.props.children}</Container>
	}
}
export class BlurFilter extends Component {
	constructor(props){
		super(props)
		this.filter =  new PIXI.filters.BlurFilter()
	}
	componentWillMount(){

	}
	render() {
		this.filter.blur = this.props.blur;//ticker.lastTime;
		this.filter.passes =20

		return <Container ref={'filter'} filters={[this.filter]} >{this.props.children}</Container>
	}
}

export class GaussianBlurFilter extends Component {
	constructor(props){
		super(props)
		this.filter =  new _GaussianBlurFilter()
	}
	componentWillMount(){

	}
	// animateFilter = () =>{
	// 	var container = this.refs.filter;
	// 	this.filter.time = ticker.lastTime;
	// 	container.filters = [this.filter]
	// }
	// componentDidMount(){
	// 	PIXI.ticker.shared.add(this.animateFilter)
	// }
	// componentWillUnmount(){
	// 		PIXI.ticker.shared.remove(this.animateFilter)
	// }
	render() {
		this.filter.blur = .001;//ticker.lastTime;
		var childrenWithProps = React.Children.map(this.props.children, (child) => {
        	return React.cloneElement(child, {});
    	});

		return <Container ref={'filter'} filters={[this.filter]} >{childrenWithProps}</Container>
	}
}

GaussianBlurFilter.defaultProps =  {
	blur:0
}


export class DisplacementFilter extends Component {
	constructor(props){
		super(props)

	}
	componentWillMount(){

	}
	render() {
		//this.filter.time = ticker.lastTime;
		var childrenWithProps = React.Children.map(this.props.children, (child) => {
        	return React.cloneElement(child, {});
    	});
		if(this.props.sprite && this.props.sprite.texture.baseTexture.hasLoaded){
			this.filter =  new _DisplacementFilter(this.props.sprite,100);

			return <Container filters={[this.filter]} >{childrenWithProps}</Container>;
		}else{
			return <Container  >{childrenWithProps}</Container>;
		}

	}
}

export class DepthPerspectiveFilter extends Component {
	static propTypes = {
    	sprite:PropTypes.instanceOf(PIXI.Sprite),
    	quality:PropTypes.oneOf([1,2,3]),
  	};


	constructor(props){
		super(props)

	}
	componentWillMount(){

	}
	render() {
		var childrenWithProps = React.Children.map(this.props.children, (child) => {
        	return React.cloneElement(child, {});
    	});
		if(this.props.sprite && this.props.sprite.texture.baseTexture.hasLoaded){
			let filter =  new _DepthPerspectiveFilter(this.props.sprite,this.props.quality);
			filter.quality = 3;
			 filter.scale = 0.02 * (100);
			filter.map = new PIXI.RenderTexture(window.innerWidth, window.innerHeight);
			return <Container filters={[filter]} >{childrenWithProps}</Container>;
		}else{
			return <Container>{childrenWithProps}</Container>;
		}
	}
}
DepthPerspectiveFilter.defaultProps = {
	quality:1,
};
//			return <Container filters={this.filter instanceof PIXI.AbstractFilter ? [this.filter] : null } >{childrenWithProps}</Container>;

// add Multiple filters pros.filters =  [...PIXI.Filter.name]
export class Filter extends Component {
	constructor(props){
		super(props)
		this.filters = []
	}
	componentWillMount(){

	}
	render() {

		var childrenWithProps = React.Children.map(this.props.children, (child) => {
        	return React.cloneElement(child, { doSomething: 'this.doSomething' });
    	});

		return <Container filters={this.filters} >{childrenWithProps}</Container>
	}
}
