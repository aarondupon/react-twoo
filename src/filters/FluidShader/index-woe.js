////import PIXI from 'pixi.js';
import React, { Component,PropTypes } from 'react';
import {Container,Sprite} from 'react-pixi-renderer';
// var Vertext = require('./FluidShader.frag');
// var Fragment = require('./FluidShader.frag');
var Vertex = require('./SimulationShader.vert');
var Fragment = require('./SimulationShader.frag');
var glCore = require('pixi-gl-core');
//glCore.GLShader///

export default class SimulationShader extends PIXI.Shader
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


        //this.shader.uniforms.uAlpha = container.worldAlpha;
    }
}

const FluidShader = (props) => {

  ///console.log('render FluidShader', props)
  var childrenWithProps = React.Children.map(props.children,
    (child) =>
    {
    //console.log('child::', child)
      return React.cloneElement(child, {
        //onMouseMove:handelMouseMove,
        interactive:true,
        onLoaded:(src,node,obj)=>{

            var render = obj._instance.context.pixi.renderer;
            var gl = render.gl;

          var m =  render.currentRenderTarget.projectionMatrix.toArray(true)

          var shader = new SimulationShader(gl,m);
          var shaderProgram  = shader.program;


          shader.aVertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
          shader.aPositionCoord = gl.getAttribLocation(shaderProgram, 'aPositionCoord');
      //    shader.aColor= gl.getAttribLocation(shaderProgram, 'aColor');

        //  shader.aScale = gl.getAttribLocation(program, 'aScale');
          shader.aRotation = gl.getAttribLocation(shaderProgram, 'aRotation');

      //    shader.aTextureCoord = gl.getAttribLocation(shaderProgram, 'aTextureCoord');


          //var program = PIXI.compileProgram(gl, this.vertexSrc, this.fragmentSrc);

          var vertSize =8;// [0,0,0,0,0,0,0,0]
          var stride =  vertSize* 4;

        //  gl.vertexAttribPointer(index, size, type, normalized, stride, pointer)
          gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, stride, 0);

            gl.vertexAttribPointer(shader.aPositionCoord, 2, gl.FLOAT, false, stride, 2 * 4);
          //  gl.vertexAttribPointer(shader.aColor,1, gl.FLOAT, false, stride, 5*4);
          //  gl.vertexAttribPointer(shader.aScale, 2, gl.FLOAT, false, stride, 4 * 4);

            gl.vertexAttribPointer(shader.aRotation, 1, gl.FLOAT, false, stride, 6*4);
//            gl.vertexAttribPointer(shader.aTextureCoord, 2, gl.FLOAT, false, stride, 7*4);



            //  gl.enableVertexAttribArray(0);


            var attrDict = []
            var attrNames  =['aVertexPosition','aPositionCoord','aRotation']
            for (var i=0; i<attrNames.length; i++) {
              attrDict[attrNames[i]] = gl.getAttribLocation(shaderProgram,
                                                            attrNames[i]);

              gl.enableVertexAttribArray(attrDict[attrNames[i]]); // THIS LINE ADDED
              }



            // gl.vertexAttribPointer(shader.aColor,2, gl.FLOAT, false, stride, 9 * 4);



// Begin worst hack eva //

// WHY??? ONLY on my chrome pixel the line above returns -1 when using filters?
// maybe its somthing to do with the current state of the gl context.
// Im convinced this is a bug in the chrome browser as there is NO reason why this should be returning -1 especially as it only manifests on my chrome pixel
// If theres any webGL people that know why could happen please help :)
// if(this.colorAttribute === -1)
// {
//     this.colorAttribute = 2;
// }

//this.attributes = [this.aVertexPosition, this.aPositionCoord,  this.aScale, this.aRotation, this.aTextureCoord];//, this.colorAttribute];



           //gl.vertexAttribPointer(this.shader.colorAttribute, 1, gl.FLOAT, false, stride, 9 * 4);
            // gl.bindAttribLocation(shader.program, 0, 'aVertexPosition');
            // gl.bindAttribLocation(shader.program, 0, 'aTextureCoord');
            // gl.bindAttribLocation(shader.program, 0, 'aColor');
            // gl.bindAttribLocation(shader.program, 0, 'aPosition');
            // gl.bindAttribLocation(shader.program, 0, 'aRotation');
            // gl.bindAttribLocation(shader.program, 0, 'aScale');
            node.shader = shader;
          //  render.bindShader(node.shader);


        },

         ref:'fluid'

      })
    }
   );


   //window.requestAnimationFrame(animateFuildShader);
	return <Container  >{childrenWithProps}</Container>
}

export default FluidShader;
