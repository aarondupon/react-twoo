precision lowp float;
#pragma glslify: blur = require(glsl-fast-gaussian-blur)
varying vec2 vMapCoord;
varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec2 iResolution;
uniform vec4 dimensions;
uniform vec4 filterArea;
uniform vec3 iMouse;
uniform vec2 iTime;

uniform float padding;
uniform float tx;
uniform float offset;
uniform float aspect;
uniform float parabola;

// uniform sampler2D mapSampler;
uniform sampler2D uSampler;

varying vec2 vUv;

uniform sampler2D prev;
uniform sampler2D current;
uniform sampler2D next;

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform sampler2D texture3;
uniform sampler2D texture4;
uniform sampler2D disp;
uniform sampler2D tBias;

uniform float effectFactor;
uniform float progress;


// Divide the view into multiple viewports
// Set global variables to replace iResolution and fragCoord for the local viewport
// Returns index of which panel is being drawn for this pixel
// in the range [0,numPanels.x*numPanels.y)

vec4 texture(     sampler2D   s, vec2 c)                   { return texture2D(s,c); }
vec4 texture(     sampler2D   s, vec2 c, float b)          { return texture2D(s,c,b); }
vec4 texture(     samplerCube s, vec3 c )                  { return textureCube(s,c); }
vec4 texture(     samplerCube s, vec3 c, float b)          { return textureCube(s,c,b); }

const float PI = 3.1415926535897932384626433832795;
const float PI180 = float(PI / 180.0);

float sind(float a)
{
	return sin(a * PI180);
}

float cosd(float a)
{
	return cos(a * PI180);
}

float added(vec2 sh, float sa, float ca, vec2 c, float d)
{
	return 0.5 + 0.25 * cos((sh.x * sa + sh.y * ca + c.x) * d) + 0.25 * cos((sh.x * ca - sh.y * sa + c.y) * d);
}

vec4 halftone(in sampler2D s, in vec2 fragCoord )
{
	// Halftone dot matrix shader
	// @author Tomek Augustyn 2010
	
	// Ported from my old PixelBender experiment
	// https://github.com/og2t/HiSlope/blob/master/src/hislope/pbk/fx/halftone/Halftone.pbk
	
	// Hold and drag horizontally to adjust the threshold

	float threshold = 0.3;//75;

	float ratio = iResolution.y / iResolution.x;
	float coordX = fragCoord.x / iResolution.x;
	float coordY = fragCoord.y / iResolution.x;
	vec2 dstCoord = vec2(coordX, coordY);
	vec2 srcCoord = vec2(coordX, coordY / ratio);
	vec2 rotationCenter = vec2(0.5, 0.5);
	vec2 shift = dstCoord - rotationCenter;

    float dotSize = clamp(float(iMouse.x / iResolution.x) + 2.6, 3.0, 10.0);
	float angle = .1;
    
    vec3 rasterPattern = vec3(
        added(shift, sind(angle + 00.0), cosd(angle), rotationCenter, PI / dotSize * 680.0),
        added(shift, sind(angle + 30.0), cosd(angle), rotationCenter, PI / dotSize * 680.0),
        added(shift, sind(angle + 60.0), cosd(angle), rotationCenter, PI / dotSize * 680.0)
    );
	
	//vec4 srcPixel = textur2D(texture0), srcCoord);
    vec4 srcPixel = texture(s,fragCoord/iResolution);
       
	vec4 color = vec4(
        (rasterPattern.r * threshold + srcPixel.r - threshold) / (1.0 - threshold),
        (rasterPattern.g * threshold + srcPixel.g - threshold) / (1.0 - threshold),
        (rasterPattern.b * threshold + srcPixel.b - threshold) / (1.0 - threshold),
        1.
   	);
    return color;//vec4(rasterPattern,1.);
}

//http://acko.net/files/fullfrontal/fullfrontal/wdcode/online.html
// https://github.com/spite/Wagner/blob/master/fragment-shaders/guided-directional-blur-fs.glsl
vec4 getFromColor(vec2 uv) {
    // return halftone(texture0,uv*iResolution);
    return texture2D(prev,uv);
}

vec4 getToColor(vec2 uv) {
    //  return halftone(texture1,uv*iResolution);
   return texture2D(current,uv);
}

vec4 transition2 (vec2 uv) {
  vec2 direction = vec2(1.,0.);
  vec2 p = uv + progress * sign(direction);
  vec2 f = fract(p);
  return mix(
    getToColor(f),
    getFromColor(f),
    step(0.0, p.y) * step(p.y, 1.0) * step(0.0, p.x) * step(p.x, 1.0)
  );
}

void transitionStart(in vec2 uv, out vec2 uv1, out vec2 uv2, out float weight) {
  vec2 direction = vec2(1.,0.);
  vec2 p = uv + progress * sign(direction);
  vec2 f = fract(p);
  uv1 = f;
  uv2 = f;
  weight = step(0.0, p.y) * step(p.y, 1.0) * step(0.0, p.x) * step(p.x, 1.0);
  
}

vec4 transitionEnd(in vec2 uv1, in vec2 uv2, in float weight){
 return mix(
    getToColor(uv1),
    getFromColor(uv2),
    weight
  ); 
}

const float smoothness = 0.5;
const vec2 center = vec2(0.5, 0.5);
mat2 rotateMatrix (in float ang){
    float c = cos(ang); 
    float s = sin(ang);    
    mat2 trans = mat2(c, s, -s, c);
    return trans;
}
vec4 transition (vec2 uv) {
    vec2 direction = vec2(1.,0.);
  float invers = -progress;

  

  vec2 v = normalize(direction);
  v /= abs(v.x) + abs(v.y);
  float d = v.x * center.x + v.y * center.y;
  vec2 deform = vec2(1.-sin(uv.y*3.14)*.1,uv.x*.1);
  
  v *= deform;
  float m = 1.0 - smoothstep(-smoothness, 0.0, v.x * uv.x + v.y * uv.y - (d - 0.5 + progress * (1.0 + smoothness)));


  m = m*1.;//+wave.x;
  
    
  uv.x += invers*.5;
   

  vec2 uv2 = uv-vec2(-(1.-.4)-invers*.1,0);
  

  uv2 =uv2*rotateMatrix(abs(mod(-progress,1.)) * -0.3);
  uv =uv*rotateMatrix(abs(mod(progress,1.)) * 0.3);
  
  return mix(getFromColor((uv - 0.5) * (1.0 - m) + 0.5), getToColor((uv2 - 0.5) * m + 0.5), m);
}


// Author: pschroen
// License: MIT
//LEFT ---> RIGHT


vec4 transition3 (vec2 uv) {
    vec2 direction = vec2(1.,0.);
  float invers = -progress;
  vec2 v = normalize(direction);
  v /= abs(v.x) + abs(v.y);
  float d = v.x * center.x + v.y * center.y;
  vec2 deform = vec2(1.-sin(uv.y*3.14)*.2,uv.y);
  
  v *= deform;
  float m = 1.0 - smoothstep(-smoothness, 0.0, v.x * uv.x + v.y * uv.y - (d - 0.5 + progress * (1.0 + smoothness)));

  vec2 wave = vec2(sin(.5),0.) - sin(progress*.5)*vec2(1.,0);
  //m = m+wave.x;
  vec2 uv2 = uv + vec2(1.,0.)*(invers*.1 + .1);
  uv.x += invers*.1;
 // vec2 uv2 = uv;//-vec2(.3*(1.+invers),0.);
  return mix(getFromColor((uv - 0.5) * (1.0 - m) + 0.5), getToColor((uv2 - 0.5) * m + 0.5), m);
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



const float scrunchDistance = 400.0; // In "pixel space"
const float scrunchPower = .4;

#ifndef HALF_PI
#define HALF_PI 1.5707963267948966
#endif

float sineIn(float t) {
  return sin((t - 1.0) * HALF_PI) + 1.0;
}
float getDistanceFromBorder(in vec2 uv){
    vec2 uvn=abs((uv)-0.5)*2.0;
    vec2 distV     = uvn;
    float maxDist  = max(abs(distV.x), abs(distV.y));
    float circular = length(distV);
    float square   = maxDist;
    float mate= mix(0., 1., mix(circular,square,maxDist));
    return mate;
}


vec2 distanceDeforme( in vec2 uv )
{

    float borderDist =  getDistanceFromBorder(uv/iResolution);
    // Deformation is performed in "pixel space"
    // This is necessary to use since "screen space" rescales to aspect ratio!
	vec2 screenPos = uv.xy;
    
    vec2 mousePos;

     mousePos = iMouse.xy;
    // mousePos = iResolution*vec2(.5);
    
    vec2 dirFromMouse = screenPos - mousePos;
    float distance = length( dirFromMouse )/((1.-borderDist/2.));
    dirFromMouse /= distance;
    
    float weight = clamp( distance / scrunchDistance, 0.0, 1.0 );
    float distanceDeformed = pow( sineIn(weight), scrunchPower ) * scrunchDistance;

    // float distanceDeformed = pow( sineIn(weight), scrunchPower ) * scrunchDistance;
    distanceDeformed = mix( distanceDeformed, distance, weight );
    vec2 screenPosDeformed = mousePos + dirFromMouse * distanceDeformed ;
    
    // Transform from "pixel space" to "texture space" (depends on application)
    // We could optionally clamp the uvs here, but better to specify wrap behavior in sampler or texture definition.
     vec2 uv2 = screenPosDeformed;
    return uv2;
	//fragColor = texture( iChannel0, uv );
}

// WAVE FUNCTIONS 
vec2 mirrored(vec2 v) {
    vec2 m = mod(v,2.);
    return mix(m,2.0 - m, step(1.0 ,m));
}

float tri(float p) { 
    return mix(p,1.0 - p, step(0.5 ,p))*2.;
} 
// END WAVE FUNCTIONS

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

vec4 waveTransition( in vec2 fragCoord){
     vec2 uv  =fragCoord;/// vec2(974.);
    vec2 accel = vec2(2,0.5);
    //'vec2 vUv = (( uv - 0.5 ) / u_blockRatio.xy / u_texRatio0.xy ) +  0.5;\n' +
    uv = uv/iResolution;
    // vec2 uv = v_texcoord;
    //uv = (uv.xy/vec2(974.));
    float _progress = progress*0.9999;
    float p = fract(_progress);
    // float p = fract(.5);
    float delayValue = p*7. - uv.y*2. + uv.x - 2.;

    delayValue = clamp(delayValue,0.,1.);

     vec2 translateValue = p + delayValue*accel;
    // vec2 translateValue1 = vec2(-0.5,1.)* translateValue;
    // vec2 translateValue2 = vec2(0.5,1.)* (translateValue - 1. - accel);
    vec2 translateValue1 = vec2(1.,0.5)* translateValue;
    vec2 translateValue2 = vec2(1.,-0.5)* (translateValue - 1. - accel);
    //   vec2 translateValue2 = vec2(1.,-0.5)* progress*10.;


    float ang = .5;//progress * 0.5;

    //Transform coordinates:
    float c = cos(ang); 
    float s = sin(ang);    
    mat2 trans = mat2(c, s, -s, c);


    
    vec2 w =  sin(sin(progress*10.)*vec2(0.,3.)*trans  + (trans*fragCoord.yx/iResolution)*vec2(8.,1.))*vec2(0.15,0.05);
    w =  rotate(w,progress);
   vec2 xy = w*iResolution*(tri(p)*0.5 + tri(delayValue)*0.5);
   
    //  vec2 w = sin( sin(1.)*vec2(0,0.3) + (fragCoord.yx/iResolution)*vec2(0,4.))*vec2(0,0.5);
    // vec2 xy = w*(tri(p)*0.5 + tri(delayValue)*0.5);
   
    vec2 translateHorizontal1 =vec2(-.8,.0)*iResolution*_progress;
    vec2 translateHorizontal2 =(vec2(-.3,.0)*iResolution*_progress) +vec2(.3,0.)*iResolution;
    vec2 uv1 = fragCoord + translateValue1 + xy; //+ translateHorizontal1;
    vec2 uv2 = fragCoord + translateValue2 + xy;// +translateHorizontal2;

    
    vec4 rgba1 = texture2D(texture0,mirrored(uv1/iResolution));
    vec4 rgba2 = texture2D(texture1,mirrored(uv2/iResolution));

    vec4 rgba = mix(rgba1,rgba2,delayValue);
    return rgba;
    
}


float sine1(float t, float amplitude, float frequency, float phase){
    return amplitude * sin((t * frequency - phase) * 6.28318530718);
}

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	mat4 m = rotationMatrix(axis, angle);
	return (m * vec4(v, 1.0)).xyz;
}
 
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    
    vec2 uv  =fragCoord;
    vec2 uv1,uv2;
    float weight;
    vec4 color;
    float aspectRatio = iResolution.x / iResolution.y;


   


    uv = distanceDeforme(fragCoord);  
    
   


     
    color = texture2D(texture0,uv/iResolution);
    // vec2 accel = vec2(0.5,2);
    transitionStart(uv/iResolution,uv1,uv2,weight);

    // wave sin start
    // float p = fract(iMouse.x);
    // float delayValue = p*7. - uv.y*2. + uv.x - 2.;
    // delayValue = clamp(delayValue,0.,1.);
    // vec2 w =  sin(sin(progress*10.)*vec2(0.,3.)  + (fragCoord.yx/iResolution)*vec2(8.,1.))*vec2(0.15,0.05);
    // w =  rotate(w,progress);
    // vec2 xy=w*iMouse.xy/iResolution;
    // uv1 = uv1+xy;
    // uv2 = uv2+xy;
    // wave sin stop
   

  vec2 scale = vec2(dimensions.zw) / iResolution;
     vec2 center = vec2(.5)*scale;
    vec2 moveToMouse = vec2(-.5)+iMouse.xy*vec2(1.,1.)/iResolution;//*scale/30.; //<----cool
    uv2 +=moveToMouse/iResolution * 100.;//<---
    uv1 +=moveToMouse/iResolution * 100.;
    // uv2 *= vec2(1.)- 200./iResolution;
    // uv1 *= vec2(1.) -   200./iResolution;

   // uv2 += vec2(1.,0.)* sin(uv.y/iResolution.y*.1); 


    float tension = -1.*uv.y/iResolution.y;
    //float strength = sin(tension * 2.0)*sin(tension * 2.0) * 0.3;
    float strength = sin(tension * 3.14)*sin(tension *  3.14) * 0.01;
    strength = (smoothstep(0.0,0.3,uv.y/iResolution.y) -smoothstep(-0.7,-1.,-uv.y/iResolution.y))*.1;
    uv2 +=  strength*vec2(1.,0.);
    float deg = (1.- iMouse.x/iResolution.x)*.05;
   // uv2 = rotate(vec3(uv2.xy,0.-strength),vec3(0,-1.,0.),deg).xy;
// // Smooth interpolation between 0.1 and 0.9
   // float y = (smoothstep(0.1,0.3,st.x) -smoothstep(-0.7,-.9,-st.x))*.1;
   // // Smooth interpolation between -1 and +1
// (smoothstep(-0.3,-0.1,x) - smoothstep(0.1,0.3,x))*0.1



   color = transitionEnd(uv1,uv2,weight);
   // color =  texture2D(disp, mapCords);//transitionEnd(uv1,uv2,weight);
   
   // color = halftone(uv);

    
    // color.rgb += vec3(.1)*getDistanceFromBorder(fragCoord/iResolution);
    fragColor = color;//vec4(mate,mate,mate,1.);

    // if (iMouse.z == 1.)
    // {
     //  color = waveTransition(uv);
   // };
    
    fragColor = color;//vec4(mate,mate,mate,1.);

}

 void main(){
     vec2 mapCords = vTextureCoord * dimensions.zw;
     
     mainImage(gl_FragColor,mapCords);
 }



//https://motionbro.net/videolancer/handy-seamless-transitions-preview/
void main2222() {

    
    
    vec2 uv = vTextureCoord / vec2(0.9,0.9);
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
    

    vec4 original = texture2D(texture1, f);
    vec4 blurred = texture2D(texture0, f);
  
    
    // gl_FragColor = original;//mix(original, blurred, length(distortion) / u_distortionAmount);
    // vec4 rgba = mix(original, blurred, abs(u_mouse.x)/abs(1.-parallaxMult) );
    vec4 rgba = mix(original, blurred,  step(0.0, p.y) * step(p.y, 1.0) * step(0.0, p.x) * step(p.x, 1.0) );

    gl_FragColor = rgba;

    float size = .1;
    
    vec2  uv2 =  vTextureCoord / vec2(0.9,0.9*aspect);
    float ff = sampleBias( uv2 );
    // vec4 tInput = texture;
	float a = - ff * 3.14159;
	vec4 o = texture2D( texture1,uv2 );
	vec4 color=vec4(0.0);
	float total=0.0;
	vec2 tDelta = parabola2 * vec2( cos( a ), sin( a ) );
	float offset=random(vec3(12.9898,78.233,151.7182),0.0);
	for(float t=-30.0;t<=30.0;t++){
		float percent=(t+offset-0.5)/30.0;
		float weight=1.0-abs(percent);
        
        vec4 original = texture2D(texture1, f+tDelta*percent);
        vec4 blurred = texture2D(texture2, f+tDelta*percent);

        float smoothness = 0.5;
        vec2 center = vec2(0.5, 0.5);
        vec2 v = normalize(direction);
  v /= abs(v.x)+abs(v.y);
//   float d = v.x * center.x + v.y * center.y;
//   float m =
//     (1.0-step(progress, 0.0)) * // there is something wrong with our formula that makes m not equals 0.0 with progress is 0.0
//     (1.0 - smoothstep(-smoothness, 0.0, v.x * uv2.x + v.y * uv2.y - (d-0.5+progress*(1.+smoothness))));
//   vec4 rgba = mix(original, blurred, m);
        vec4 rgba = mix(original, blurred,  step(0.0, p.y) * step(p.y, 1.0) * step(0.0, p.x) * step(p.x, 1.0) );
        if(uv.x > progress){
            // rgba.r = 1.;
        }
        float dist = distance(uv.x , progress);
        if(dist < .1){
            rgba.a = dist*100.;
        }
        // srgba.a =  distance(uv.x , progress)*2. *progress;
        
		vec4 sample=  rgba;//texture2D(texture,uv2+tDelta*percent);
		sample.rgb*=sample.a;
		color+=sample*weight;
		total+=weight;
      
	}
	
	if( total == 0. ) total = 1.;
	gl_FragColor = color / total;
	gl_FragColor.rgb/=gl_FragColor.a+0.00001;
    // gl_FragColor = blur(texture, vTextureCoord, vec2(400.,400.), vec2(progress*5.,progress*.001));
    
    
    // gl_FragColor = mix(original, blurred, length(distortion) / u_distortionAmount);
        // gl_FragColor =  texture2D(tBias,uv2);
    // gl_FragColor = _texture;
    // gl_FragColor = transition(uv);
  //  gl_FragColor = depthDistortion;
}
