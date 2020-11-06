#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif

uniform float width;
uniform float height;
uniform float uTime;

varying vec2 vTextureCoord;
//uniform int uPhases;


vec4 computeElement(float s, float t)
{
  float i = floor(width*s);
  float j = floor(height*t);
  return vec4(i*1000.0 + j, 0.0, 0.0, 0.0);//return vec4(i/1000000.0 + j, 0.0, 0.0, 0.0);
}

void main() {

  //gl_FragColor = vec4(vec3(1.0, 0.0, 0.0) * 1.0,0.4);
  gl_FragColor = computeElement(vTextureCoord.s, vTextureCoord.t);
// gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);

}
