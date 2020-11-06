attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMapCoord;
varying vec2 vTextureCoord;
varying vec4 vColor;
varying vec2 vUv;



void main(void)
{
  gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
  vTextureCoord = aTextureCoord;
  vUv = (vec3( aTextureCoord, 1.0)).xy*vec2(2.,1.)*vec2(400,400);
  vMapCoord = ( otherMatrix * vec3( vUv, 1.0)  ).xy;
  vColor = vec4(.4,.4,.0, aColor.a);

  
}