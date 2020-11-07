// var Fragment = require('./ScanLineFilter.frag');
// var Vertext = require('./ScanLineFilter.vert');
import Fragment from './ScanLineFilter.frag';
import Vertext from './ScanLineFilter.vert';
////import PIXI from 'pixi.js';//'vendor/pixi';
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import {Container} from 'react-pixi-renderer';

const ticker =  PIXI.ticker.shared;


function Filter(sprite)
{
    //var maskMatrix = new core.Matrix();
    //sprite.renderable = false;

    PIXI.Filter.call(this,
        null,
        Fragment,
        {
        //tDiffuse:   { type: 't', value: null },
        // time:       { type: '1f', value: 0.0 },
        // nIntensity: { type: '1f', value: 0.15 },  // default value 0.15
        // sIntensity: { type: '1f', value: 0.0 },
        // sCount:     { type: '1f', value: 10 },
        // grayscale:  { type: 'i', value: 0 }


        time:       { type: '1f', value: 0.0 },
        nIntensity: { type: '1f', value: 0.5 },  // default value 0.15
        sIntensity: { type: '1f', value: 0.5 },
        sCount:     { type: '1f', value: 1 },
        grayscale:  { type: 'i', value: 1 }

        }
    );


    //this.maskSprite = sprite;
    //this.maskMatrix = maskMatrix;
    this.passes = 1;
    this._time = 1;
}

Filter.prototype = Object.create(PIXI.Filter.prototype);
Filter.prototype.constructor = Filter;
module.exports = Filter;
Object.defineProperties(Filter.prototype, {
    time: {
        get: function ()
        {
            return   this.uniforms.time.value;
        },
        set: function (value)
        {
             this.uniforms.time.value = value
        }
    },
    nIntensity: {
        get: function ()
        {
            return   this.uniforms.nIntensity.value;
        },
        set: function (value)
        {
             this.uniforms.nIntensity.value = value
        }
    },
    sIntensity: {
        get: function ()
        {
            return   this.uniforms.sIntensity.value;
        },
        set: function (value)
        {
             this.uniforms.sIntensity.value = value
        }
    }


});




export default class ScanLineFilter extends Component {
	constructor(props){
		super(props)
		this.filter =  new Filter()
	}
	componentWillMount(){

	}
	animateFilter = () =>{
		var container = this.refs.filter;
    //  console.log('pause3:',this.props.pause)
		if(this.props.pause)return;

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
ScanLineFilter.defaultProps = {
  pause:false
}