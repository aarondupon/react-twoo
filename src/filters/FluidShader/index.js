/* eslint-env es7 */
import React, { Component,PropTypes } from 'react';
import * as PIXI from 'pixi.js';
import {getRender} from '../../../utils/mapRendererToStage';
// import BaseShader from './BaseShader';
import CustomPoints from './CustomPoints';
//import GPUComputationRenderer from './GPUComputationRenderer2';
import GLCore from 'pixi-gl-core';
// import {Container,Sprite} from 'react-pixi-renderer';
var Vertex = require('./FluidShader.vert');
var Fragment = require('./FluidShader.frag');
// var Vertex = require('./SimulationShader.vert');
// var Fragment = require('./SimulationShader.frag');
var FragmentVelocity = require('./SimulationVeloctiyShader.frag');
var FragmentPosition = require('./SimulationPositionShader.frag');

var passThruFragment = require('./PassThroughFragmentShader.frag');
var passThruVertex = require('./PassThroughVertexShader.vert');

//var positionFragmentProgram = require('./positionProgram.frag');
const  DEFAULT_VERTEX_PROGRAM = require('./_defaultProgram.vert');
//
//https://experiments.p5aholic.me/
//_positionProgram


//var glCore = require('pixi-gl-core');
//glCore.GLShader//

var GPGPURender = function (width, height)
{

    var canvas = document.createElement('canvas');
    var gl =  null;
    var attributes = {alpha: false, depth: false, antialias: false}
    canvas.id     = "GPGPURender";
    canvas.width  = width;
    canvas.height = height;
    canvas.style.zIndex = 999999999;
    canvas.style.position = 'absolute';

    document.body.appendChild(canvas);
    gl = canvas.getContext("webgl",attributes) || canvas.getContext("experimental-webgl",attributes);
    gl['imageSmoothingEnabled'] = false;       /* standard */
    gl['mozImageSmoothingEnabled'] = false;    /* Firefox */
    gl['oImageSmoothingEnabled'] = false;      /* Opera */
    gl['webkitImageSmoothingEnabled'] = false; /* Safari */
    gl['msImageSmoothingEnabled'] = false;     /* IE */
    return {gl,canvas:canvas,width,height}


};

var step = 0;
var timestep = function(gl,propgram)
  {
    gl.useProgram(program);

    gl.bindFramebuffer(gl.FRAMEBUFFER, fbos[step]);

    // Step switches back and forth between 0 and 1,
    // ping ponging the source & destination textures.
    step = (step+1)%2;

    gpgpUtility.getStandardVertices();

    gl.vertexAttribPointer(positionHandle,     3, gl.FLOAT, gl.FALSE, 20, 0);
    gl.vertexAttribPointer(textureCoordHandle, 2, gl.FLOAT, gl.FALSE, 20, 12);

    gl.uniform1i(xResolutionHandle, xResolution);
    gl.uniform1f(lengthHandle, length);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, textures[step]);
    gl.uniform1i(waveFunctionHandle, 0);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, potential);
    gl.uniform1i(potentialHandle, 1);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }


var PING_VELOCITY_UNIT = 1,
    PONG_VELOCITY_UNIT = 2,
    PING_POSITION_UNIT = 3,
    PONG_POSITION_UNIT = 4;




const buildTexture = function (gl, unit, format, type, width, height, data, wrapS, wrapT, minFilter, magFilter) {
        var texture = gl.createTexture();//gl.activeTexture(gl.TEXTURE0);
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
        gl.texImage2D(gl.TEXTURE_2D, 0, format, width, height, 0, format, type, data);


        return texture;
};


const frameBufferIsComplete = function (gl)
{
  var message;
  var status;
  var value;

  status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

  switch (status)
  {
    case gl.FRAMEBUFFER_COMPLETE:
      value = true;
      break;
    case gl.FRAMEBUFFER_UNSUPPORTED:
      message = "Framebuffer is unsupported";
      value = false;
      break;
    case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
      message = "Framebuffer incomplete attachment";
      value = false;
      break;
    case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
      message = "Framebuffer incomplete (missmatched) dimensions";
      value = false;
      break;
    case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
      message = "Framebuffer incomplete missing attachment";
      value = false;
      break;
    default:
      message = "Unexpected framebuffer status: " + status;
      value = false;
  }
  return {isComplete: value, message: message};
};


const attachFrameBuffer = function(gl,texture,width,height){
  var frameBuffer;

  frameBuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
  gl.viewport(0,0,width,height); // new
  gl.clearColor(1.0,1.0,1.0,1.0); // new
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  return frameBuffer;
}
const createTexture = (gl, sizeXTexture, sizeYTexture, data) =>{

  sizeXTexture = sizeXTexture || sizeX;
  sizeYTexture = sizeYTexture || sizeY;

  var a = data ? data : new Float32Array( sizeXTexture * sizeYTexture * 4 );
  var gltexture = GLCore.GLTexture.fromData(gl,a,sizeXTexture,sizeXTexture)//new PIXI.RenderTexture(sizeXTexture, sizeXTexture); ///new PIXI.Texture();//(new THREE.DataTexture( a, sizeX, sizeY, THREE.RGBAFormat, THREE.FloatType );
  gltexture.enableNearestScaling()
  gltexture._glTextures = [];
  //var texture = gl.createTexture();

  return gltexture.texture;
  //texture.needsUpdate = true;



};



//
// const createTexture = (gl,width,height)=>{
// var data = new Float32Array(10*3 );//width * height * 3 );
// var metaballs =  [];
// // var texture = gl.createTexture();
// // gl.bindTexture(gl.TEXTURE_2D, texture);
// for (var i = 0; i < 10 ; i++) {
//   var radius = Math.random() * 60 + 10;
//   metaballs.push({
//     x: Math.random() * (20 - 2 * radius) + radius,
//     y: Math.random() * (20 - 2 * radius) + radius,
//     z: radius
//   });
// }
//


const passThruUniforms = {
		texture: { value: null }
};



const createPasThruShader =  (gl,renderer, passThruUniforms) => {
  var passThruShader = createShaderMaterial(gl,passThruFragment, passThruUniforms );



}

const createShaderMaterial = (gl, computeFragmentShader, uniforms )=> {

		uniforms = uniforms || {};

		var shader = new PIXI.Shader(
		//	uniforms: uniforms,
      gl,
		 passThruVertex,
		 computeFragmentShader
		);
  //  shader.defines.resolution = 'vec2( ' + sizeX.toFixed( 1 ) + ', ' + sizeY.toFixed( 1 ) + " )";
	//	addResolutionDefine( material );

		return shader;
	};

class SimulationShader extends PIXI.Shader
{
    /**
     * @param {PIXI.Shader} gl - The webgl shader manager this shader works for.
     */

    constructor(gl,m)
    {

        super(
            gl,
           // vertex shader
           [
               'attribute vec2 aVertexPosition;',
              // 'attribute vec2 aTextureCoord;',
            //   'attribute float aColor;',

               'attribute vec2 aPositionCoord;',
              // 'attribute vec2 aScale;',
               'attribute float aRotation;',



            //   'varying vec2 vTextureCoord;',
            //   'varying float vColor;',

               'void main(void){',
               '   vec2 v = aVertexPosition;',

               '   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);',
               '   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);',
               '   v = v + aPositionCoord;',

               '   gl_Position = vec4(( vec3(v, 1.0)).xy, 0.0, 1.0);',

              // '   vTextureCoord = aTextureCoord;',
              // '   vColor = aColor;',
               '}',
           ].join('\n'),
           // hello
           [   'precision mediump float;',
              // 'varying vec2 vTextureCoord;',
              // 'varying float vColor;',

              // 'uniform sampler2D uSampler;',
              // 'uniform float uAlpha;',
            //   'uniform mat3 projectionMatrix;',
               'void main(void){',
              // 'if(projectionMatrix[0] < 1.0){ };',
               '  vec4 color = vec4(0.0,1.0,0.2,0.0);',//texture2D(uSampler, vTextureCoord) * vColor;',// * uAlpha;',
            //   '  if (color.a == 0.0) discard;',
               '  gl_FragColor = color;',
               '}',
           ].join('\n'),
            {
                    //   projectionMatrix:    { type: 'mat3', value:m},
                      // uAlpha:    { type: 'f', value:0},

                   }
        );
    }
}


let time = 0;
var fluidShader;
var particles;
const updateTime = () =>{
  time +=0.001;
  // particles.uTime = time;
 fluidShader.utime  = time;
  window.requestAnimationFrame(updateTime);
}


const handelMouseMove = (evt)=>{
    let rect = evt.currentTarget.getBounds();//evt.target.getBounds();
    let position =  {x:(evt.data.global.x - rect.x)/ rect.width,y: 1.0 - (evt.data.global.y - rect.y)/ rect.height }
    if(particles) particles.uMouse = Object.values(position);
  //  console.log(particles.uMouse)
  //if(fluidShader)  fluidShader.mouse = Object.values(position);//[evt.clientX/window.innerHeight,evt.clientY/window.innerWidth];
//  console.log('handelMouseMove2',evt.target.getBounds(),Object.values(position))
}



const fillPositionTexture = ( gl,texture,width,height ) =>{

  var fb = gl.createFramebuffer();

  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture.texture, 0);

  if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) == gl.FRAMEBUFFER_COMPLETE) {
  var pixels = new Uint8Array(width * height * 4);
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  }



    // gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
    // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,
    //    gl.UNSIGNED_BYTE, videoElement);


				// var theArray = pixels;//texture.image.data;
        // var BOUNDS = window.innerWidth;
        // var BOUNDS_HALF = window.innerWidth/2;
        //
				// for ( var k = 0, kl = theArray.length; k < kl; k += 4 ) {
				// 	var x = Math.random() * BOUNDS - BOUNDS_HALF;
				// 	var y = Math.random() * BOUNDS - BOUNDS_HALF;
				// 	var z = Math.random() * BOUNDS - BOUNDS_HALF;
				// 	theArray[ k + 0 ] = x;
				// 	theArray[ k + 1 ] = y;
				// 	theArray[ k + 2 ] = z;
				// 	theArray[ k + 3 ] = 1;
				// }


			}
const  fillVelocityTexture = ( texture )=> {
				var theArray = texture.image.data;
				for ( var k = 0, kl = theArray.length; k < kl; k += 4 ) {
					var x = Math.random() - 0.5;
					var y = Math.random() - 0.5;
					var z = Math.random() - 0.5;
					theArray[ k + 0 ] = x * 10;
					theArray[ k + 1 ] = y * 10;
					theArray[ k + 2 ] = z * 10;
					theArray[ k + 3 ] = 1;
				}
			}

const createParticles = function(pixel_count){
      var AMOUNT  = pixel_count ? pixel_count : 1000;//window.innerWidth*window.innerHeight/2;//100000
      var resolution = null;
      var MAX_X  =   Math.sqrt( window.innerHeight*window.innerWidth / AMOUNT)  ;// Math.sqrt(AMOUNT);//* window.innerWidth/window.innerHeight;//Math.sqrt(AMOUNT);

      var MAX_Y =  AMOUNT / MAX_X;// Math.sqrt(AMOUNT);///M window.innerWidth/window.innerHeight;

      //var height = width;
      var vertices = new Float32Array(AMOUNT * 4);
      var indices  =  new Float32Array(AMOUNT);
      var aRandom = new Float32Array(AMOUNT);
      var delta = Math.PI * 2 / AMOUNT;
      var STEP = MAX_X;
      var y = 0;
      var x =0;
      var WIDTH = window.innerWidth;
      var HEIGHT = window.innerHeight;


      //var STEP_Y = MAX_Y;

      var HALF_WIDTH =  WIDTH/2;
      var HALF_HEIGHT =  HEIGHT/2
      for(var i = 0; i < AMOUNT; i++) {
          // x value
          vertices[i * 4] = x;// -HALF_WIDTH;//Math.cos(delta * i) * 200;
          x+= STEP;
          // y value
          if(x > WIDTH ) {
            x=0
            y += STEP;
          }
       //  console.log('pos',x,y)
          vertices[i * 4 + 1] = y;// - HALF_HEIGHT;//Math.sin(delta * i) * 200;
          // a random number as attribute
          aRandom[i] = Math.random();
          indices[i] = parseFloat(i)
      }


      //const RESOLUTION = 128;//
      resolution = Math.floor(Math.sqrt(AMOUNT));

      return {vertices,aRandom,indices,resolution}
}


class FluidShader extends Component {
  componentDidMount(){
    
    
    var renderer = getRender(this.container.stage);
    var particles = createParticles(100);
    const RESOLUTION = particles.resolution;
    var vertices = particles.vertices;
    var indices = particles.indices;
    var aRandom = particles.aRandom;
    var size =  indices.length

    var SimulutationRenderer = GPGPURender(RESOLUTION,RESOLUTION);
    var gl =  SimulutationRenderer.gl;
    //var gl = renderer.gl;

  //  gl.getExtension('OES_texture_float');
  //  gl.getExtension('OES_texture_float_linear');

    // Non null if we enable OES_texture_float
    var textureFloat;

    // Attempt to activate the extension, returns null on failure
    textureFloat = gl.getExtension('OES_texture_float');

    /**
     * Check if floating point textures are available. This is an optional feature,
     * and even if present are usually not usable as a rendering target.
     */
    var isFloatingTexture = function()
    {
      return textureFloat != null;
    };



    var shader = new PIXI.Shader(renderer.gl,Vertex,Fragment);///,uniforms,attributes);
    renderer.bindShader(shader)
    // var GLProgram = new GLCore.GLShader(gl,require('./_defaultVertex.vert'),require('./_defaultProgram.frag'));
    // GLProgram.bind();



    //http://www.vizitsolutions.com/portfolio/webgl/gpgpu/matrixInitialization.html

    // var pingPhaseTexture =  buildTexture(gl, PONG_PHASE_UNIT, gl.RGBA, gl.FLOAT, RESOLUTION, RESOLUTION, null, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE, gl.NEAREST, gl.NEAREST),
        // pongPhaseTexture =  buildTexture(gl, PONG_PHASE_UNIT, gl.RGBA, gl.FLOAT, RESOLUTION, RESOLUTION, null, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE, gl.NEAREST, gl.NEAREST),
  var   pingVelocityTexture =  buildTexture(gl, PING_VELOCITY_UNIT, gl.RGBA, gl.FLOAT, RESOLUTION, RESOLUTION, null, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE, gl.NEAREST, gl.NEAREST),
        pongVelocityTexture =  buildTexture(gl, PONG_VELOCITY_UNIT, gl.RGBA, gl.FLOAT, RESOLUTION, RESOLUTION, null, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE, gl.NEAREST, gl.NEAREST),
        pingPositionTexture =  buildTexture(gl, PING_POSITION_UNIT, gl.RGBA, gl.FLOAT, RESOLUTION, RESOLUTION, vertices, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE, gl.NEAREST, gl.NEAREST),
        pongPositionTexture =  buildTexture(gl, PONG_POSITION_UNIT, gl.RGBA, gl.FLOAT, RESOLUTION, RESOLUTION, null, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE, gl.NEAREST, gl.NEAREST);



  var GLPositionProgram = new GLCore.GLShader(gl,DEFAULT_VERTEX_PROGRAM,require('./_positionProgram.frag'));
  GLPositionProgram.bind();
  GLPositionProgram.uniforms.uInput =  pingPositionTexture;

  var GLVelocityProgram = new GLCore.GLShader(gl,DEFAULT_VERTEX_PROGRAM,require('./_positionProgram.frag'));
  GLVelocityProgram.bind();
  GLVelocityProgram.uniforms.uInput =  pingVelocityTexture;
  //positionVertex
  //  var pongPhaseFramebuffer = attachFrameBuffer(gl,pongPhaseTexture);
  //  var pingPhaseFramebuffer = attachFrameBuffer(gl,pingPhaseTexture);


   var pongPositionFramebuffer = attachFrameBuffer(gl,pongPositionTexture,RESOLUTION,RESOLUTION);
   var pingPositionFramebuffer = attachFrameBuffer(gl,pingPositionTexture,RESOLUTION,RESOLUTION);

   var pongVelocityFramebuffer = attachFrameBuffer(gl,pongVelocityTexture,RESOLUTION,RESOLUTION);
   var pingVelocityFramebuffer = attachFrameBuffer(gl,pingVelocityTexture,RESOLUTION,RESOLUTION);


   var bufferStatus = frameBufferIsComplete(gl);

   if( ! bufferStatus.isComplete){
     alert('Floating point textures are not supported.\n'+bufferStatus.message);
     return;
   }


    //var GLProgram = new GLCore.GLShader(gl,require('./_defaultVertex.vert'),require('./_defaultProgram.frag'));


    // GLProgram.bind();
    //  var positionHandle       = GLProgram.program.getAttribLocation(GLProgram.program,  "position");




    fluidShader = shader;

    ///----> NU!!!!!!
    //gl.bindBuffer(gl.FRAMEBUFFER, null);

    particles = new CustomPoints({
        shader : shader,
        WIDTH:RESOLUTION,
        HEIGHT:RESOLUTION,
        SimulutationRenderer:SimulutationRenderer,
        GLPositionProgram:GLPositionProgram,
        GLVelocityProgram:GLVelocityProgram,
        // pingPhaseFramebuffer,
        // pongPhaseFramebuffer,
        // pingPhaseTexture,
        // pongPhaseTexture,

        pingVelocityFramebuffer,
        pongVelocityFramebuffer,
        pingVelocityTexture,
        pongVelocityTexture,

        pingPositionFramebuffer,
        pongPositionFramebuffer,
        pingPositionTexture,
        pongPositionTexture,




        //texture2:texture2,
        vertexData : vertices,
        vertices: vertices,
        //framebuffer:framebuffer,
        indices:indices,
        size: size,
        aRandom : aRandom,
        uTime : 0,
        uMouse:[0,0],
        //_texture:positionTexture,
        //uPosition:positionTexture,
        // uVelocity:velocityTexture,

    });


    //particles =   particles ;

    console.log('particles',particles)
    //  this.container.addChild(particles);


    //   PIXI.paused =  true;
     particles._renderWebGL(renderer)
     
     

     window.requestAnimationFrame(updateTime);
    fluidShader.sampler_particles  = particles;

     this.container.shader = shader;
    
      renderer.bindShader(this.container.shader);

  }
  render() {
    return (
      <div ref={ref=>this.container = ref} onMouseMove={handelMouseMove}>
        {this.props.childrens}
      </div>
    )
  }
}

// const FluidShader = (props) => {

//   ///console.log('render FluidShader', props)
//   var childrenWithProps = React.Children.map(props.children,
//     (child) =>
//     {
//     //console.log('child::', child)
//       return React.cloneElement(child, {
//         onMouseMove:handelMouseMove,
//         interactive:true,

//       })
//     }
//    );

  
//    //window.requestAnimationFrame(animateFuildShader);
// 	return <sprite>{childrenWithProps}</sprite>
// }


class CustomShader extends Component {
  componentDidMount(){
    this.container.shader = new SimulationShader()
  }
  render() {
    
    return (
      <div ref={ref=>this.container = ref}>
        {this.props.children}
      </div>
    )
  }
}

export default FluidShader;
