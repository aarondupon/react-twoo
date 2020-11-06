#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif

uniform float width;
uniform float height;

varying vec2 vTextureCoord;
uniform float uTime;
uniform sampler2D uInput;


uniform sampler2D uPosition;


vec4 computeElement(float s, float t)
{
  float i = floor(width*s);
  float j = floor(height*t);
  return vec4(i*1000.0 + j, 0.0, 0.0, 0.0);//return vec4(i/1000000.0 + j, 0.0, 0.0, 0.0);
}

void main() {
  float time = uTime;
  vec4 position = texture2D(uInput,vTextureCoord.xy);
  //gl_FragColor = vec4(vec3(1.0, 0.0, 0.0) * 1.0,0.4);
//  gl_FragColor = position;//computeElement(vTextureCoord.s, vTextureCoord.t);
  gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);

}
