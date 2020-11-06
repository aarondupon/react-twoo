// displacement.vert - DisplacementFilter vertex shader

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

uniform mat3 projectionMatrix; // has to be in source for the renderer to bind it correctly
uniform mat3 otherMatrix;
//varying vec2 vMapCoord;
varying vec2 vTextureCoord;
attribute vec2 position;
uniform float uTime;


uniform sampler2D uPosition;
//uniform sampler2D uVelocity;


/* Velocities Update Fragment Shader */
// uniform sampler2D positionTexture;
// uniform sampler2D velocityTexture;

//varying vec4 vColor;
void main(){
  //vUv = vec2( uv.x, 1.0 - uv.y );
  vTextureCoord = vec2( aTextureCoord.x,1.0- aTextureCoord.y) ;//vUv

  // float offset = texture2D(uPosition, aTextureCoord).x;
  // offset = (offset - 0.5) * 2.0; //map [0 -> +1] onto [-1 -> +1]
  float posx = aVertexPosition.x;
  float posy = aVertexPosition.y ;//+ offset/8.0; //offsetting y
  gl_Position = vec4((projectionMatrix * vec3(posx,posy, 1.0)).xy, 0.0, 1.0);//gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

  //gl_Position = vec4(posx, posy, 0.0, 1.0);
//  gl_Position = vec4(position, 0.0, 1.0);
//  gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);//gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
