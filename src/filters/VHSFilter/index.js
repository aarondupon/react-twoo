import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
var Fragment = require('./VHSFilter.frag');
var Vertext = require('./VHSFilter.vert');


const ticker =  PIXI.ticker.shared;

var core = PIXI;

function Filter(sprite)
{
    //var maskMatrix = new core.Matrix();
    //sprite.renderable = false;

    core.AbstractFilter.call(this,
        Vertext,
        Fragment,
        {
            //mapSampler:     { type: 'sampler2D', value: sprite.texture },
            //otherMatrix:    { type: 'mat3', value: maskMatrix.toArray(true) },
            scale:          { type: 'v2', value: { x: 100, y: 100 } },
            time:           { type: '1f', value: 1 },
            speed:          { type: '1f', value: 0.0004},
            distortion:     { type: '1f', value: 0.21 },
            distortion2:    { type: '1f', value: 10.10 },
            rollSpeed:      { type: '1f', value: 0.000 },
            waveHeight:     { type: '1f', value: 1}
        }
    );


    //this.maskSprite = sprite;
    //this.maskMatrix = maskMatrix;
    this.passes = 3;
    this._time = 10;
}

Filter.prototype = Object.create(core.AbstractFilter.prototype);
Filter.prototype.constructor = Filter;

Object.defineProperties(Filter.prototype, {
    time: {
        get: function ()
        {
            return   this.uniforms.time;
        },
        set: function (value)
        {
             this.uniforms.time = value
        }
    },
    distortion2: {
        get: function ()
        {
            return   this.uniforms.distortion2;
        },
        set: function (value)
        {
             this.uniforms.distortion2 = value
        }
    },
    waveHeight: {
        get: function ()
        {
            return   this.uniforms.waveHeight;
        },
        set: function (value)
        {
             this.uniforms.waveHeight = value
        }
    },
    distortion: {
        get: function ()
        {
            return   this.uniforms.distortion;
        },
        set: function (value)
        {
             this.uniforms.distortion = value
        }
    },
    rollSpeed: {
        get: function ()
        {
            return   this.uniforms.rollSpeed;
        },
        set: function (value)
        {
             this.uniforms.rollSpeed = value
        }
    }
});


// module.exports = Filter;


export default class VHSFilter extends Component {
	constructor(props){
		super(props)
		this.filter =  new Filter()
	}

	componentWillMount(){

	}
	animateFilter = () =>{
		var container = this.container;
    //  console.log('pause3:',this.props.pause)
		if(this.props.pause)return;

        this.filter.time = ticker.lastTime;
        this.filter.distortion2 =  this.props.distortion2;
        this.filter.waveHeight =  this.props.waveHeight;
        this.filter.distortion =  this.props.distortion;
        this.filter.rollSpeed = this.props.rollSpeed;
   
        //console.log(this.props,ticker.lastTime)
		

	}
	componentDidMount(){
		    PIXI.ticker.shared.add(this.animateFilter)
	}
	componentWillUnmount(){
			PIXI.ticker.shared.remove(this.animateFilter)
    }
    
    renderChidren(children){
       return React.Children.map(children, child =>  React.cloneElement(child,{...child.props,filters:[this.filter]},child.children))
       
    }
	render() {
        console.log('(this.props.children',this.props.children)
		return this.renderChidren(this.props.children)
	}
}
// _self.vhs_filter.distortion2 = 5;
// _self.vhs_filter.distortion = 2; // warp
// _self.vhs_filter.waveHeight = 5;
// // _self.vhs_filter.rollSpeed = .9;
// _self.rgb_filter.amount = .002;
VHSFilter.defaultProps = {
    pause:false,
    distortion:5,
    distortion2:20,
    waveHeight:50,
    rollSpeed:.000009,
    amount:.02,
}