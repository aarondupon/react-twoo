import * as PIXI from 'pixi.js';
import React,{Component} from 'react';
// import {Container,Sprite} from 'react-pixi-renderer';
var Vertex = require('./FluidShader.frag');
var Fragment = require('./FluidShader.frag');
// var Vertex = require('./SimulationShader.vert');
// var Fragment = require('./SimulationShader.frag');
var glCore = require('pixi-gl-core');

// export function Filter(sprite)
// {
//     //var maskMatrix = new core.Matrix();
//     //sprite.renderable = false;

//     PIXI.AbstractFilter.call(this,
//         Vertext,
//         Fragment,
//         {
//             //mapSampler:     { type: 'sampler2D', value: sprite.texture },
//             //otherMatrix:    { type: 'mat3', value: maskMatrix.toArray(true) },
//             scale:          { type: 'v2', value: { x: 100, y: 100 } },
//             time:           { type: '1f', value: 1 },
//             speed:          { type: '1f', value: 0.0004},
//             distortion:     { type: '1f', value: 0.21 },
//             distortion2:    { type: '1f', value: 10.10 },
//             rollSpeed:      { type: '1f', value: 0.000 },
//             waveHeight:     { type: '1f', value: 1}
//         }
//     );


//     //this.maskSprite = sprite;
//     //this.maskMatrix = maskMatrix;
//     this.passes = 1;
//     this._time = 10;
// }

// export function Shader (){

//   PIXI.Shader.call(this,
//     // vertex shader
//     Vertex,
//     // fragment shader
//     Fragment
//     ,
//     // custom uniforms
//     {
//       dimensions:     { type: '4fv',  value: new Float32Array([0, 0, 0, 0])},
//       resolution:      { type: '2f', value: [100.0,500.0] },
//       pixelSize:      { type: '1f',   value: 100},
//       time:           { type: '1f',   value: 1},
//       timer:          { type: "1f", value: 0 },
//       mouse:          { type: '2fv',   value: new Float32Array([0, 0])},
//       tOrigins:       {type: 'sampler2D', value:null},
//       tPosition:       {type: 'sampler2D', value:null},
//       opacity:       {type: '1f', value:0},
//       metaballs:       {type:'3fv', value:[0, 0, 0]},
//     //  position:       {type:'2f',}

//     }
//   );
// }



// Shader.prototype = Object.create(PIXI.Shader.prototype);//Object.create(PIXI.AbstractFilter.prototype);
// Shader.prototype.constructor = Shader;


export class Shader extends PIXI.Shader{
  constructor(gl)
    {
      
      super(
           // vertex shader
           Vertex,
           // fragment shader
           Fragment
       );
  }

}



Object.defineProperties(Shader.prototype, {
  /**
   * The pixel size used by the filter.
   *
   * @member {number}
   * @memberof AsciiFilter#
   */
  size: {
    get: function() {
      return this.uniforms.pixelSize.value;
    },
    set: function(value) {
      this.uniforms.pixelSize.value = value;
    }
  },
  metaballs: {
    get: function() {
      return this.uniforms.metaballs.value;
    },
    set: function(value) {
      this.uniforms.metaballs.value = value;
    }
  },

  time:{
    get: function() {
      return this.uniforms.time.value;
    },
    set: function(value) {
      this.uniforms.time.value = value;
    }
  },

  timer:{
    get: function() {
      return this.uniforms.timer.value;
    },
    set: function(value) {
      this.uniforms.timer.value = value;
    }
  },
  tOrigins:{
    get: function() {
      return this.uniforms.tOrigins.value;
    },
    set: function(value) {
      this.uniforms.tOrigins.value = value;
    }
  },
  tPositions:{
    get: function() {
      return this.uniforms.tPositions.value;
    },
    set: function(value) {
      this.uniforms.tPositions.value = value;
    }
  },
  mouse:{
    get: function() {
      return this.uniforms.mouse.value;
    },
    set: function(value) {
      this.uniforms.mouse.value = value;
    }
  },
  opacity:{
    get: function() {
      return this.uniforms.opacity.value;
    },
    set: function(value) {
      this.uniforms.opacity.value = value;
    }
  }
});

PIXI.FluidShader = Shader;



export default class ImageBeeldFilterComponent extends Component {
constructor(props){
  super(props)
  this.filter =  new Shader()
}
componentWillMount(){
      window.addEventListener('mousemove',this.handleMouse)
  }
  handleMouse = (e)=>{
      this.filter.mouse =  [e.clientX/window.innerWidth,e.clientY/window.innerHeight];
  }
update = (nextProps) =>{
  // if(this.props.pause) return;
      // this.filter.mouse =  [0,nextProps.offset]
      // this.filter.offset =  nextProps.offset;
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
     return React.Children.map(children, child =>  React.cloneElement(child,{...child.props,filters:[this.filter]},child.props.children))
     
  }
  // render() {
// 	return <div ref={ref=>this.container=ref}  filters={[this.filter]}>{this.props.children}</div>
  // }
  
render() {
      // console.log('(this.props.children',this.props.children)
  return this.renderChidren(this.props.children)
}
}

ImageBeeldFilterComponent.defaultProps = {
  pause:false,
  offset:0,
}



// let fluidShader;

// let time = 0;
// const updateTime = () =>{
//   time +=0.001;
//   // fluidShader.time  = time;

//   // if(time > 1){
//   //   time = 0;
//   // }

//   window.requestAnimationFrame(updateTime);
// }

// //
// // document.onmousemove = function(evt){
// //
// //   //Get the mouse position
// //   var mousePos = {x:evt.clientX,y:evt.clientY}
// //   //Assigning a new value lets Pixi know to update the uniform in the shader
// //   // But doing something like uniforms.mouse.x = 0, won't update in this current version of Pixi
// //   fluidShader.mouse = [evt.clientX/window.innerHeight,evt.clientY/window.innerWidth];
// // }

// const handelMouseMove = (evt)=>{
//     let rect = evt.currentTarget.getBounds();
//     let position =  {x:(evt.data.global.x - rect.x)/ rect.width,y: 1.0 - (evt.data.global.y - rect.y)/ rect.height }
//   //if(fluidShader)  fluidShader.mouse = Object.values(position);//[evt.clientX/window.innerHeight,evt.clientY/window.innerWidth];
//   console.log('handelMouseMove2',evt.currentTarget.getBounds(),Object.values(position))
// }

// const createBuffer =  (gl,width,height)=>{
// //  alert('e')

//  //var gl = PIXI.gl;


//   var scaleMode = scaleMode || PIXI.SCALE_MODES.DEFAULT;
// 	var frameBuffer = gl.createFramebuffer();
//   gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);

//   frameBuffer.width = 200;
//   frameBuffer.height = 200;
//   var texture = gl.createTexture();
//   gl.bindTexture(gl.TEXTURE_2D, texture);

//    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, scaleMode === PIXI.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
//    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, scaleMode === PIXI.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
//    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
//    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
//    //gl.generateMipmap(gl.TEXTURE_2D);


//    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, frameBuffer.width, frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

//    var renderbuffer = gl.createRenderbuffer();
//   gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
//   gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, frameBuffer.width, frameBuffer.height);



//    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
//    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);


//    gl.bindTexture(gl.TEXTURE_2D, null);
//   //gl.bindRenderbuffer(gl.RENDERBUFFER, null);
//   gl.bindFramebuffer(gl.FRAMEBUFFER, null);

//    ///gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
//    var valid = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
//    switch(valid){
//         case gl.FRAMEBUFFER_UNSUPPORTED:
//               alert( 'Framebuffer is unsupported');
//         case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
//               alert( 'Framebuffer incomplete attachment');
//         case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
//               alert('Framebuffer incomplete dimensions');
//         case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
//             alert('Framebuffer incomplete missing attachment');
//     }





//   //
//   // glFramebuffer.width = width;
//   // glFramebuffer.height = height;
//   //
//   // var baseTexture = new PIXI.BaseTexture();
//   //
//   // baseTexture.width = width;
//   // baseTexture.height = height;
//   //
//   // baseTexture._glTexture = gl.createTexture();
//   // gl.bindTexture(gl.TEXTURE_2D, baseTexture._glTexture);
//   //
//   // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,  width,  height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
//   //
//   // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
//   // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
//   // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
//   // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
//   //
//   // baseTexture.isRender = true;
//   //
//   // gl.bindFramebuffer(gl.FRAMEBUFFER, glFramebuffer );
//   // gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, baseTexture._glTexture, 0);

//   return frameBuffer//texture;

// }

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

// var ii = 0;

// for ( var i = 0, l = metaballs.length*3; i < l; i += 3 ) {
// var   metaball = metaballs[ii];
//   //var point =  {x:200 * Math.random(),y:200 * Math.random(),z:200 * Math.random()};//geometry.vertices[ Math.floor( Math.random() * geometry.vertices.length ) ];
//   data[ i ] = metaball.x;
// 	data[ i + 1 ] = metaball.y;
// 	data[ i + 2 ] = metaball.z;
//   ii++
// }


//  // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, scaleMode === PIXI.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
//  // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, scaleMode === PIXI.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
//  // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
//  // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
//  //gl.generateMipmap(gl.TEXTURE_2D);
// //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, data);


// //var metaballsHandle = getUniformLocation(program, 'metaballs');
// //gl.uniform3fv(metaballsHandle, dataToSendToGPU);



// // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
// // gl.bindTexture( gl.TEXTURE_2D, null )
// // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, frameBuffer.width, frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

// return data;
// //var originsTexture = new THREE.DataTexture( data, size, size, THREE.RGBFormat, THREE.FloatType );

// }

// function getAttribLocation(program, name,gl) {
//     var attributeLocation = gl.getAttribLocation(program, name);
//     if (attributeLocation === -1) {
//         throw 'Can not find attribute ' + name + '.';
//     }
//     return attributeLocation;
// }


// const FluidShader = (props) => {

//   console.log('render FluidShader', props)
//   var childrenWithProps = React.Children.map(props.children,
//     (child) =>
//     {
      
//     //console.log('child::', child)
//       return React.cloneElement(child, {

//       onMouseMove:handelMouseMove,
//       interactive:true,
//       onLoaded:(node,renderer)=>{

//           var render = renderer;
          
//           var gl = render.gl;

//           fluidShader = new FluidShader(gl);

//           var canvas = render.view;//document.getElementById("1_target");
//         var gl = canvas.getContext("webgl");

//         //  var shaderProgram = gl.createProgram();

//         //  var starVertexPositionBuffer  = createBuffer(gl,200,200);
//           var data = createTexture(gl,200,200);//starVertexPositionBuffer.trackedObject.attachments[0];
//           //fluidShader.metaballs =  data;
//           node.shader = fluidShader;
//           //var test = fluidShader;//.__proto__;//getShader(gl);
//           //debugger

//           window.requestAnimationFrame(updateTime);
//       //
//       //     var positionHandle = getAttribLocation(shaderProgram, 'position',gl);
//       // gl.enableVertexAttribArray(positionHandle);
//       // gl.vertexAttribPointer(positionHandle,
//       //                  2, // position is a vec2
//       //                  gl.FLOAT, // each component is a float
//       //                  gl.FALSE, // don't normalize values
//       //                  2 * 4, // two 4 byte float components per vertex
//       //                  0 // offset into each span of vertex data
//       //                  );


//         //  var shaderProgram = gl.createProgram();
//           // gl.bindBuffer(gl.ARRAY_BUFFER, starVertexPositionBuffer);
//           // gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, starVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

//           //fluidShader.sampler_particles  = particles;


//       },

//       //  ref:'fluid'
//     })
//     }
//    );


//    //window.requestAnimationFrame(animateFuildShader);
// 	return <container  >{childrenWithProps}</container>
// }


// export default FluidShader;
