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

uniform sampler2D uVelocity;
//uniform sampler2D uVelocity;


vec4 computeElement(float s, float t)
{
  float i = floor(width*s);
  float j = floor(height*t);
  return vec4(i*1000.0 + j, 0.0, 0.0, 0.0);//return vec4(i/1000000.0 + j, 0.0, 0.0, 0.0);
}

void main() {
  float time = uTime;
  //gl_FragColor = vec4(1.0, .0, 0.0, 1.0);
  vec4 position = texture2D(uInput,vTextureCoord.xy);//computeElement(vTextureCoord.s, vTextureCoord.t);
  //gl_FragColor = vec4(vec3(1.0, 0.0, 0.0) * 1.0,0.4);
  gl_FragColor = vec4(position.x,100.0,position.z,0.0);
  // gl_FragColor = vec4(position.xyz,0.0);// + vec4(150.0,0.0,0.0,0.0);//computeElement(vTextureCoord.s, vTextureCoord.t);
// gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);

}
