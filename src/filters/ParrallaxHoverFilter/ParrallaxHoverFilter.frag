// precision lowp float;
#pragma glslify: blur = require('glsl-fast-gaussian-blur')
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
uniform float parabola;

// uniform sampler2D mapSampler;
uniform sampler2D uSampler;

varying vec2 vUv;

uniform sampler2D texture;
uniform sampler2D texture2;
uniform sampler2D disp;
uniform sampler2D tBias;

uniform float effectFactor;
uniform float progress;

//http://acko.net/files/fullfrontal/fullfrontal/wdcode/online.html
// https://github.com/spite/Wagner/blob/master/fragment-shaders/guided-directional-blur-fs.glsl
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

float random(vec3 scale,float seed){
    return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);
}


float sampleBias( vec2 uv ) {
    // vec4 tBias = texture2;
	// return texture2D(tBias, uv ).r;
	vec3 luma = vec3( .299, 0.587, 0.114 );
	return dot( texture2D( disp, uv ).rgb, luma );
}


float rand (vec2 co) {
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
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
    float u_time = parabola;
    float u_distortionAmount =  .5*(progress-0.5);//1.2;
    vec2 u_mouse =  vec2(progress,0.);

    vec2 parabola2 = vec2(parabola,.0);
    
    vec4 _texture = getFromColor(uv);
    vec4 _texture2 = getToColor(uv);

    vec4 depthDistortion = texture2D(disp, uv);
    float distortionMult = depthDistortion.g;     // just green channel
    float parallaxMult = depthDistortion.r;//(0.5 - depthDistortion.r);// * depthDistortion.a; // just red channel
    
   
    vec2 distortion = vec2(
        sin(u_time + uv.y * u_distortionRange), 0) * u_distortionAmount  * distortionMult;
    
    
    vec2 parallax = parabola2 * -parallaxMult;
        
    // uv = uv  +distortion+ parallax;
    uv = uv  + parallax;


    vec2 direction = vec2(-1.,0.);
    vec2 p = uv + (progress) * sign(direction);
    // vec2 p = uv + (.5-progress)*2. * sign(direction);
    vec2 f = fract(p);
    

    vec4 original = texture2D(texture, f);
    vec4 blurred = texture2D(texture2, f);
  
    
    // gl_FragColor = original;//mix(original, blurred, length(distortion) / u_distortionAmount);
    // vec4 rgba = mix(original, blurred, abs(u_mouse.x)/abs(1.-parallaxMult) );
    vec4 rgba = mix(original, blurred,  step(0.0, p.y) * step(p.y, 1.0) * step(0.0, p.x) * step(p.x, 1.0) );

    gl_FragColor = rgba;

//     float size = .2;
    
//     vec2  uv2 =  vTextureCoord / vec2(0.9,0.9*aspect);
//     float ff = sampleBias( uv2 );
//     // vec4 tInput = texture;
// 	float a = - ff * 3.14159;
// 	vec4 o = texture2D( texture,uv2 );
// 	vec4 color=vec4(0.0);
// 	float total=0.0;
// 	vec2 tDelta = parabola2 * vec2( cos( a ), sin( a ) );
// 	float offset=random(vec3(12.9898,78.233,151.7182),0.0);
// 	for(float t=-30.0;t<=30.0;t++){
// 		float percent=(t+offset-0.5)/30.0;
// 		float weight=1.0-abs(percent);
        
//         vec4 original = texture2D(texture, f+tDelta*percent);
//         vec4 blurred = texture2D(texture2, f+tDelta*percent);

//         float smoothness = 0.5;
//         vec2 center = vec2(0.5, 0.5);
//         vec2 v = normalize(direction);
//   v /= abs(v.x)+abs(v.y);
// //   float d = v.x * center.x + v.y * center.y;
// //   float m =
// //     (1.0-step(progress, 0.0)) * // there is something wrong with our formula that makes m not equals 0.0 with progress is 0.0
// //     (1.0 - smoothstep(-smoothness, 0.0, v.x * uv2.x + v.y * uv2.y - (d-0.5+progress*(1.+smoothness))));
// //   vec4 rgba = mix(original, blurred, m);
//         vec4 rgba = mix(original, blurred,  step(0.0, p.y) * step(p.y, 1.0) * step(0.0, p.x) * step(p.x, 1.0) );
//         if(uv.x > progress){
//             // rgba.r = 1.;
//         }
//         float dist = distance(uv.x , progress);
//         if(dist < .1){
//             rgba.a = dist*100.;
//         }
//         // srgba.a =  distance(uv.x , progress)*2. *progress;
        
// 		vec4 sample=  rgba;//texture2D(texture,uv2+tDelta*percent);
// 		sample.rgb*=sample.a;
// 		color+=sample*weight;
// 		total+=weight;
      
// 	}
	
// 	if( total == 0. ) total = 1.;
// 	gl_FragColor = color / total;
// 	gl_FragColor.rgb/=gl_FragColor.a+0.00001;
    // gl_FragColor = blur(texture, vTextureCoord, vec2(400.,400.), vec2(progress*5.,progress*.001));
    
    
    // gl_FragColor = mix(original, blurred, length(distortion) / u_distortionAmount);
        // gl_FragColor =  texture2D(tBias,uv2);
    // gl_FragColor = _texture;
    // gl_FragColor = transition(uv);
    // gl_FragColor = depthDistortion;
}
