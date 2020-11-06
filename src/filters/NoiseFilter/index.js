////import PIXI from 'pixi.js';//'vendor/pixi';
var Fragment = require('./NoiseFilter.frag');
import React, { Component,PropTypes } from 'react';
// import {Container,Sprite} from 'react-pixi-renderer';
const  DEFAULT_VERTEX_PROGRAM = require('./_defaultProgram.vert');
import GLCore from 'pixi-gl-core';

var core = PIXI;
const ticker =  PIXI.ticker.shared;

function Filter()
{

    var uniforms = {};

    uniforms.resolution = { type: '2f', value: { x: 8, y: 2 } };
    uniforms.nIntensity = { type: '1f', value: 0.005 };
    uniforms.shift = { type: '1f', value: 0 };
    uniforms.time = { type: '1f', value: 0 };
    uniforms.speed = {type:'1f',value:0.2};
    uniforms.noiseSampler = {type:'sampler2D',value:null};

    core.Filter.call(this,
        DEFAULT_VERTEX_PROGRAM,
        Fragment,
        uniforms
    )

    this.passes = 1;

  //  var time = (10+PIXI.ticker.shared.elapsedMS);


    //this.noise = 1
}


Filter.prototype = Object.create(core.Filter.prototype);//Object.create(core.AbstractFilter.prototype);
Filter.prototype.constructor = Filter;


Object.defineProperties(Filter.prototype, {
    time: {
        get: function ()
        {
            return  this.uniforms.time;//.value;
        },
        set: function (value)
        {

          //this.uniformData.noise.value = value + 0.0;
          this.uniforms.time = value;

        }
    },

    noiseSampler: {
        get: function ()
        {
            return  this.uniforms.noiseSampler;//.value;
        },
        set: function (value)
        {

          //this.uniformData.noise.value = value + 0.0;
          this.uniforms.noiseSampler = value;

        }
    }

});

let filter =  new Filter();
//let filter2 = new GLCore.GLShader(gl,DEFAULT_VERTEX_PROGRAM,Fragment);
var i = 0;
class NoiseFilter extends Component {
	constructor(props){
		super(props)
		this.filter = filter;// new Filter()
	}
	componentWillMount(){

	}
	animateFilter = () =>{

		var container = this.refs.filter;
    //  console.log('pause3:',this.props.pause)
		if(this.props.pause)return;

    if(i> 6){//if(i> 6){
      //filter.noise = ticker.lastTime;
		container.filters[0].time =  ticker.lastTime;

    //console.log('noise',filter.noise)
      i=0;
    }
    i++;
	}
	componentDidMount(){
    var container = this.refs.filter;
    var texture = new PIXI.Texture.fromImage('/assets/noise/tex1.png');
  //  texture.renderable = false;
    texture.baseTexture.on('loaded', ()=>{
         console.log('texture',texture.width, texture.height);


         container.filters = [filter]
         	container.filters[0].noiseSampler = texture;
          PIXI.ticker.shared.add(this.animateFilter);

    });

	}
	componentWillUnmount(){
			PIXI.ticker.shared.remove(this.animateFilter)
	}
	render() {
		//this.filter.time = ticker.lastTime;

		return <container ref={'filter'} >{this.props.children}</container>
	}
};
export default NoiseFilter
// const NoiseFilter = (props) => {
//   //chromaFilter.size  = 1;
//   var time = PIXI.ticker.shared.elapsedMS
// 	noiseFilter.time = time;
//
//     console.log('NOISE TIME',time)
//     let filters =	[noiseFilter ];
// 	return  <Container  filters={ filters } >{props.children}</Container>
// }

