precision lowp float;
varying vec2 vMapCoord;
varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec2 dimensions;
uniform vec4 filterArea;
uniform vec2 uMouse;

uniform float padding;
uniform float tx;
uniform float offset;
uniform float aspect;

// uniform sampler2D mapSampler;
uniform sampler2D uSampler;

varying vec2 vUv;

uniform sampler2D texture;
uniform sampler2D texture2;
uniform sampler2D disp;

uniform float effectFactor;
uniform float progress;

//http://acko.net/files/fullfrontal/fullfrontal/wdcode/online.html
vec4 getFromColor(vec2 uv) {
    return texture2D(texture,uv);
}

vec4 getToColor(vec2 uv) {
    return texture2D(texture2,uv);
}

vec4 transition (vec2 uv) {
  vec2 direction = vec2(1.,0.);
  vec2 p = uv + progress * sign(direction);
  vec2 f = fract(p);
  return mix(
    getToColor(f),
    getFromColor(f),
    step(0.0, p.y) * step(p.y, 1.0) * step(0.0, p.x) * step(p.x, 1.0)
  );
}
//https://motionbro.net/videolancer/handy-seamless-transitions-preview/
void main() {
    texture;
    texture2;
    disp;
    effectFactor;
    offset;
    tx;
    padding;
    progress;
    aspect;
    
    vec2 uv = vTextureCoord / vec2(0.9,0.9*aspect);
    float u_distortionRange = .1;
    float u_time = progress;
    float u_distortionAmount =  .5*(progress-0.5);//1.2;
    vec2 u_mouse =  vec2(0.5-progress,0.);

    vec4 _texture = getFromColor(uv);
    vec4 _texture2 = getToColor(uv);

    vec4 depthDistortion = texture2D(disp, uv);
    float distortionMult = depthDistortion.g;     // just green channel
    float parallaxMult = depthDistortion.r;//(0.5 - depthDistortion.r);// * depthDistortion.a; // just red channel
    
   
    vec2 distortion = vec2(
        sin(u_time + uv.y * u_distortionRange), 0) * u_distortionAmount  * distortionMult;
    vec2 parallax = u_mouse * parallaxMult;
        
    uv = uv  +distortion+ parallax;
    vec4 original = texture2D(texture, uv);
    vec4 blurred = texture2D(texture2, uv);
    
    // gl_FragColor = original;//mix(original, blurred, length(distortion) / u_distortionAmount);
    gl_FragColor = mix(original, blurred, abs(u_mouse.x)/abs(1.-parallaxMult) );


    
    // gl_FragColor = mix(original, blurred, length(distortion) / u_distortionAmount);
    
    // gl_FragColor = _texture;
    // gl_FragColor = transition(uv);
    // gl_FragColor = depthDistortion;
}
