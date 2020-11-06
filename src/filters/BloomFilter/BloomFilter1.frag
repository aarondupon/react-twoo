precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 glowColor;
uniform float intensity;
varying vec4 vColor;
void main() 
{
  //vec3 glow = glowColor * intensity;
  vec4 colour = texture2D(uSampler, vTextureCoord);
  //vec4 color = vec4( 33.0,33.0,44.0, 1.0 );
  gl_FragColor = colour * 0.2;// vec4(glow.r,glow.g,glow.b,0.01);
}