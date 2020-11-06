import mixIn from 'mout/object/mixIn';
import glCore from 'pixi-gl-core';
import * as PIXI from 'pixi.js';
var undef;
var prevBuffer = new Float32Array(4) ;

var PING_VELOCITY_UNIT = 1,
    PONG_VELOCITY_UNIT = 2,
    PING_POSITION_UNIT = 3,
    PONG_POSITION_UNIT = 4;

//var Shader = PIXI.mesh.MeshShader;
    // tempPoint = new core.Point(),
    // tempPolygon = new core.Polygon();

function test(gl,i,j){
    
  // test
  // One each for RGBA component of a pixel
  var buffer = new Float32Array(4);
  // Read a 1x1 block of pixels, a single pixel
  gl.readPixels(i,       // x-coord of lower left corner
                j,       // y-coord of lower left corner
                1,       // width of the block
                1,       // height of the block
                gl.RGBA, // Format of pixel data.
                gl.FLOAT,// Data type of the pixel data, must match makeTexture
                buffer); // Load pixel data into buffer
 if(prevBuffer[0] != buffer[0]){
   console.log(`TEST: (${i},${j})`,buffer)
 }
 prevBuffer[0] = buffer[0]
}

function Points(cfg) {

    //PIXI.mesh.Mesh.call(this);
    // PIXI.Sprite.call(this);

    mixIn(this, {
        //_texture:PIXI.Texture.EMPTY,
        pingPhase:false,
        SimulutationRenderer:null,
        vertexData: undef,

        size:0,
        WIDTH:null,
        HEIGHT:null,

        texture1:null,
        texture2:null,

        GLPositionProgram:null,
        GLVelocityProgram:null,
        pingPhaseFramebuffer:null,
        pongPhaseFramebuffer:null,
        pingPhaseTexture:null,
        pongPhaseTexture:null,

        pingVelocityFramebuffer:null,
        pongVelocityFramebuffer:null,
        pingVelocityTexture:null,
        pongVelocityTexture:null,

        pingPositionFramebuffer:null,
        pongPositionFramebuffer:null,
        pingPositionTexture:null,
        pongPositionTexture:null,

        framebuffer:null,

        shader: undef,

        drawMode: 'POINTS',

        buffers: {},

        tempMatrix: new PIXI.Matrix(),

        dirties: {},

        drawOffset: 0,

        blendMode : PIXI.BLEND_MODES.NORMAL,

      //  bounds: new PIXI.Rectangle(-1, -1, 2, 2),

        drawCount: 4294967295

    }, cfg);

    if(!this.shader) {
        console.error('shader is missing.');
    }

    if(!this.vertexData) {
        console.error('vertices is missing.');
    }

    this.hasInitialized = false;


    //INTI;
    //
    //renderer.bindShader(this.shader);
}


var deltaTime = 0;


var _p = Points.prototype = Object.create(PIXI.Container.prototype);
_p.constructor = Points;
_p._renderWebGL2 = function(renderer){
  console.log('render',PIXI.paused)
}
_p._renderWebGL =  function (renderer){
        deltaTime ++;

        renderer.flush();
        renderer.bindShader(this.shader);
        this.hasInitialized = true;
        //  renderer.plugins.mesh.render(this);
        var gl = this.SimulutationRenderer.gl;//renderer.gl;
      //  var glData = this._glDatas[renderer.CONTEXT_UID];

        //renderer.state.setBlendMode(this.blendMode);

        var {GLPositionProgram,GLVelocityProgram} =  this;


        var pingPhase =  (deltaTime+1)%2 //this.pingPhase;// step = (step+1)%2;
        //gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.useProgram(this.GLPositionProgram.program);
        //gl.bindTexture(gl.TEXTURE_2D, (pingPhase ? this.pongPositionTexture : this.pingPositionTexture));
        //gl.bindFramebuffer(gl.FRAMEBUFFER, pingPhase ? this.pingPositionFramebuffer : this.pongPositionFramebuffer);
        // gl.bindTexture(gl.TEXTURE_2D, this.pingPositionTexture);
        // gl.bindFramebuffer(gl.FRAMEBUFFER, this.pingPositionFramebuffer);



         //gl.bindTexture(gl.TEXTURE_2D, (pingPhase ? this.pongPositionTexture : this.pingPositionTexture));
         gl.bindFramebuffer(gl.FRAMEBUFFER, (pingPhase ? this.pingPositionFramebuffer : this.pongPositionFramebuffer))
         //gl.uniform1i(this.GLPositionProgram.uniforms.uInput._location, pingPhase ? PING_POSITION_UNIT : PONG_POSITION_UNIT);
         //gl.uniform1i(this.GLPositionProgram.uniforms.uInput._location,

        // if (pingPhase){
        //   gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.pongPositionTexture, 0);
        //   gl.drawArrays(gl.POINTS, 0, 100);
        // }
        // else {
        //
        //    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.pingPositionTexture, 0);
        //    gl.drawArrays(gl.POINTS, 0, 100);
        // }


        //gl.activeTexture(gl.TEXTURE0 + (pingPhase ? PING_POSITION_UNIT : PONG_POSITION_UNIT));
         //gl.bindTexture(gl.TEXTURE_2D, (pingPhase ? this.pongPositionTexture : this.pingPositionTexture));
         //gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, (pingPhase  ? this.pingPositionTexture : this.pongPositionTexture), 0);


        test(gl,1,0);
        test(gl,6,0);
        test(gl,9,9);


        //console.log('test : ',this.vertices[(this.vertices.length -  4 )],this.vertices[(this.vertices.length -  4+1 )],this.vertices[(this.vertices.length -  4+2 )])



         var pixelsBuffer = new Float32Array(this.WIDTH*this.HEIGHT* 4);//Uint8array
         gl.readPixels(0, 0, this.WIDTH, this.HEIGHT, gl.RGBA, gl.FLOAT, pixelsBuffer);
         var pixels = pixelsBuffer;


         gl = renderer.gl;
        // Create an empty buffer object to store the vertex buffer
         var vertex_buffer = gl.createBuffer();
        // //Bind appropriate array buffer to it
          gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
        //
        //  // Pass the vertex data to the buffer

          gl.bufferData(gl.ARRAY_BUFFER,pixels, gl.STATIC_DRAW);//gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);
        //
        //  // Unbind the buffer
        //  gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.vertexAttribPointer(this.shader.attributes.aVertexPosition.location, this.shader.attributes.aVertexPosition.size, gl.FLOAT, false, 0, 0);
        // Enable the attribute
        gl.enableVertexAttribArray(this.shader.attributes.aVertexPosition.location);

      //  this.shader.uniforms.uPosition = this.pingPositionTexture;
          //GLPositionProgram.uniforms.uInput =  pingPositionTexture;


  var texture0 = gl.getUniformLocation(this.shader.program, "uPosition");

  gl.uniform1i(texture0, 0);

        gl.drawArrays(gl.POINTS, 0, 100);

      //  swap(this,'pongPositionTexture','pingPositionTexture')

}
_p._renderWebG1L=  function (renderer){
    // get rid of any thing that may be batching.
    renderer.flush();
    //  renderer.plugins.mesh.render(this);
    var gl = renderer.gl;
    var glData = this._glDatas[renderer.CONTEXT_UID];

    if(!glData)
    {
        glData = {
            shader:this.shader,//new Shader(gl),
            vertexBuffer:glCore.GLBuffer.createVertexBuffer(gl, this.vertices, gl.STATIC_DRAW),
            uvBuffer:glCore.GLBuffer.createVertexBuffer(gl, this.uvs, gl.STATIC_DRAW),
            indexBuffer:glCore.GLBuffer.createIndexBuffer(gl, this.indices, gl.STATIC_DRAW),
            // build the vao object that will render..
            vao:new glCore.VertexArrayObject(gl),
            dirty:this.dirty,
            indexDirty:this.indexDirty
        };

        // build the vao object that will render..
        glData.vao = new glCore.VertexArrayObject(gl)
        .addIndex(glData.indexBuffer)
        .addAttribute(glData.vertexBuffer, glData.shader.attributes.aVertexPosition, gl.FLOAT, false, 2 * 4, 0)
        .addAttribute(glData.uvBuffer, glData.shader.attributes.aTextureCoord, gl.FLOAT, false, 2 * 4, 0);

        this._glDatas[renderer.CONTEXT_UID] = glData;
    }
    // if(this.dirty !== glData.dirty)
    // {
    //     glData.dirty = this.dirty;
    //     glData.uvBuffer.upload();
    // }
    // if(this.indexDirty !== glData.indexDirty)
    // {
    //     glData.indexDirty = this.indexDirty;
    //     glData.indexBuffer.upload();
    // }
    glData.uvBuffer.upload();
    glData.indexBuffer.upload();
    glData.vertexBuffer.upload();
    //gl.uniformMatrix3fv(this.internalUniforms.translationMatrix._location, false, customObject.worldTransform.toArray(true));

    renderer.bindShader(glData.shader);
    renderer.bindTexture(this._texture, 0);
    renderer.state.setBlendMode(this.blendMode);
    glData.shader.uniforms.translationMatrix = this.worldTransform.toArray(true);
    glData.shader.uniforms.alpha = this.worldAlpha;
    glData.shader.uniforms.tint = this.tintRgb;

    var drawMode = gl.POINTS;//this.drawMode === Mesh.DRAW_MODES.TRIANGLE_MESH ? gl.TRIANGLE_STRIP : gl.TRIANGLES;
    var fuck = glData.vao.bind()
    //
    //debugger
    var drawCount = Math.min(this.drawCount, this.vertices.length / this.shader.attributes.aVertexPosition.size);
    fuck.draw(drawMode,0,drawCount)
    //renderer.gl.drawArrays(drawMode,0,drawCount)
    fuck.unbind();

  //  gl.drawArrays(drawMode, 0, this.size)

};
// _p._renderWebGL = function (renderer) {
//
//   renderer.bindShader(this.shader);
//   //renderer.bindTexture(this._texture, 0);
//   renderer.state.setBlendMode(this.blendMode);
//
//   //
//   //   renderer.setObjectRenderer(this.shader);
//   //   //console.log(this.uMouse)
//   //  this.shader.render(this);
// };

// this is for internal use
_p._beforeDrawing = function (gl) {};

// over this to do things like gl.enable(gl.CULL_FACE) or gl.enable(gl.DEPTH_TEST)
_p.beforeRender = function(gl) {};

_p.afterRender = function(gl) {};

_p.getBounds2 = function (matrix) {
    if(!this._currentBounds) {

        if (!this.renderable) {
            return PIXI.math.Rectangle.EMPTY;
        }
        var bounds = this.bounds;
        var w0 = bounds.x;
        var w1 = bounds.width + bounds.x;
        var h0 = bounds.y;
        var h1 = bounds.height + bounds.y;
        var worldTransform = matrix || this.worldTransform;
        var a = worldTransform.a;
        var b = worldTransform.b;
        var c = worldTransform.c;
        var d = worldTransform.d;
        var tx = worldTransform.tx;
        var ty = worldTransform.ty;
        var x1 = a * w1 + c * h1 + tx;
        var y1 = d * h1 + b * w1 + ty;
        var x2 = a * w0 + c * h1 + tx;
        var y2 = d * h1 + b * w0 + ty;
        var x3 = a * w0 + c * h0 + tx;
        var y3 = d * h0 + b * w0 + ty;
        var x4 =  a * w1 + c * h0 + tx;
        var y4 =  d * h0 + b * w1 + ty;
        var maxX = x1;
        var maxY = y1;
        var minX = x1;
        var minY = y1;
        minX = x2 < minX ? x2 : minX;
        minX = x3 < minX ? x3 : minX;
        minX = x4 < minX ? x4 : minX;
        minY = y2 < minY ? y2 : minY;
        minY = y3 < minY ? y3 : minY;
        minY = y4 < minY ? y4 : minY;
        maxX = x2 > maxX ? x2 : maxX;
        maxX = x3 > maxX ? x3 : maxX;
        maxX = x4 > maxX ? x4 : maxX;
        maxY = y2 > maxY ? y2 : maxY;
        maxY = y3 > maxY ? y3 : maxY;
        maxY = y4 > maxY ? y4 : maxY;
        this._bounds.x = minX;
        this._bounds.width = maxX - minX;
        this._bounds.y = minY;
        this._bounds.height = maxY - minY;
        this._currentBounds = this._bounds;
    }
    return this._currentBounds;
};


function swap (object, a, b) {
       var temp = object[a];
       object[a] = object[b];
       object[b] = temp;
   }

export default Points;
