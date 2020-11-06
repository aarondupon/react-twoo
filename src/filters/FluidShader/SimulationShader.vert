// displacement.vert - DisplacementFilter vertex shader
//https://github.com/dli/waves/blob/master/simulation.js
varying vec2 vTextureCoord;
// uniform sampler2D uPhases;
uniform sampler2D uVelocity;
uniform sampler2D uPosition;


uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform float time;


attribute vec4 aVertexPosition;
attribute vec4 aTextureCoord;



const float GRAVITYX =  0.0;
const float GRAVITYY= 0.5;
const float RANGE= 50.0;
const float RANGE2= 10000.0; //range square
const float PRESSURE= 0.25;
const float VISCOSITY= 0.16;
const float PARTICLESIZE=40.0;
const float DENSITY= 0.2;
const float NUM_GRIDS= 24.0;

void main(){
  // float phase = texture2D(uPhases, vTextureCoord).r;
  vec2 pos = texture2D(uPosition, vTextureCoord).xy;
  vec2 vel = texture2D(uVelocity, vTextureCoord).xy;

  // float t = time;
   vec2 av = aVertexPosition.xy;

  // float vy = GRAVITYY;
  //
  //
  // vel += vec2(0,100.0);
//  pos +=  vel *time;


  vTextureCoord = vec2(aTextureCoord.x,1.0 - aTextureCoord.y);
  //gl_Position = vec4((projectionMatrix * vec3(aVertexPosition.xy, 1.0)).xy, 0.0, 1.0);

  gl_Position = vec4( (projectionMatrix * vec3(pos,1.0)).xy ,1.0,1.0);
  gl_PointSize = 10.0;
}
