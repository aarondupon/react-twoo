// displacement.vert - DisplacementFilter vertex shader
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

uniform mat3 projectionMatrix; // has to be in source for the renderer to bind it correctly
uniform mat3 otherMatrix;

varying vec2 vMapCoord;
varying vec2 vTextureCoord;
varying vec4 vColor;

//uniform sampler2D sampler_particles; // particle positions in a float texture

void main(void)
{
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = vec2( aTextureCoord.x,aTextureCoord.y) ;
   vMapCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
   vColor = vec4(aColor.rgb * aColor.a, aColor.a);
}

