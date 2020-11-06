precision lowp float;

#pragma glslify: blur = require(glsl-fast-gaussian-blur)

varying vec2 vMapCoord;
varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec2 iResolution;
uniform vec4 dimensions;
uniform vec4 filterArea;
uniform vec3 iMouse;
uniform float iTime;
uniform vec3 noise;

uniform float padding;
uniform float tx;
uniform float offset;
uniform float aspect;
uniform float parabola;
uniform vec2 direction;//vec2 direction = vec2(1.,0.);

// uniform sampler2D mapSampler;
uniform sampler2D uSampler;

varying vec2 vUv;

uniform vec3 prevCol;
uniform vec3 currCol;

uniform sampler2D prev;
uniform sampler2D curr;


uniform vec2 scale_prev;
uniform vec2 scale_curr;


uniform vec2 transform_prev;
uniform vec2 transform_curr;


uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;

uniform float aspect_iChannel1;
uniform float aspect_iChannel2;
uniform float aspect_iChannel3;
uniform float aspect_iChannel4;

uniform vec2 scale_iChannel0;
uniform vec2 scale_iChannel1;
uniform vec2 scale_iChannel2;
uniform vec2 scale_iChannel3;

uniform vec2 transform_iChannel0;
uniform vec2 transform_iChannel1;
uniform vec2 transform_iChannel2;
uniform vec2 transform_iChannel3;



uniform vec2 dimension_iChannel1;
uniform vec2 dimension_iChannel2;
uniform vec2 dimension_iChannel3;
uniform vec2 dimension_iChannel4;
// uniform sampler2D texture0;
// uniform sampler2D texture1;
// uniform sampler2D texture2;
// uniform sampler2D texture3;
// uniform sampler2D texture4;
uniform sampler2D disp;
uniform sampler2D tBias;

uniform float effectFactor;
uniform float progress;

vec4 texture(     sampler2D   s, vec2 c)                   { return texture2D(s,c); }
vec4 texture(     sampler2D   s, vec2 c, float b)          { return texture2D(s,c,b); }
vec4 texture(     samplerCube s, vec3 c )                  { return textureCube(s,c); }
vec4 texture(     samplerCube s, vec3 c, float b)          { return textureCube(s,c,b); }


vec4 detectOutside( vec2 uv ) 
{
    
   // return vec4(texture(iChannel0, uv).xyz, 1.0);
	if (length(clamp(uv, vec2(0.0, 0.0), vec2(1.0, 1.0)) - uv) == 0.0)
		return vec4(texture(iChannel0, uv).xyz, 1.0);
	else
		return vec4(0, 0, 0, 0);

}


vec2 rotate( vec2 v, vec2 o, float a )
{
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * (v-o) + o;
}


#define Max_Rotation 0.2125
#define Mouse_Rotation ( Max_Rotation - Max_Rotation * 2.0 * (iMouse.xy / iResolution.xy) )
#define RotationCenter vec2( 0.0, 0.0 )

vec2 TransformPlane( vec2 uv, vec2 center, float XRot, float YRot )
{
    float z= 0.125 - clamp(iMouse.z*0.005,0.0,0.005);
    
    //around y-axis
    vec2 RayDirection =  vec2(uv.x, z);
    vec2 A1 = vec2(0.0, -1.0);
    vec2 B1 = RayDirection - A1;
    vec2 C1 = rotate(vec2(-1.0, 0.0), vec2(center.x, 0.0), YRot);
    vec2 D1 = rotate(vec2( 1.0, 0.0), vec2(center.x, 0.0), YRot) - C1;
    //intersection point
    float u = ( (C1.y + 1.0) * D1.x - C1.x * D1.y ) / (D1.x*B1.y-D1.y*B1.x);
    //pos. on plane
    float sx = u * B1.x;
 	float sy = u * uv.y;
    //around x-axis
    RayDirection = vec2(sy, z);
    vec2 B2 = RayDirection - A1;
    vec2 C2 = rotate(vec2(-1.0, 0.0), vec2(center.y, 0.0), XRot);
    vec2 D2 = rotate(vec2( 1.0, 0.0), vec2(center.y, 0.0), XRot) - C2;
    //intersection point
    float v = ( (C2.y + 1.0) * D2.x - C2.x * D2.y ) / (D2.x*B2.y-D2.y*B2.x);
    //final pos. on plane:
    return vec2(v * sx, v * B2.x );
    
}


vec2 distortion(in vec2 uv){
    vec2 m = vec2(.5,.5);//iMouse.xy / iResolution.xy;//vec2(.5,.5);
    // float k = -0.1 * m.x, kcube = -.95 * m.y;//-0.8, kcube = 0.82
    float k = -0.5 * m.x, kcube = .5 * m.y;//-0.8, kcube = 0.82
    float r2 = (uv.x - .5) * (uv.x - .5) + (uv.y - .5) * (uv.y - .5);
    float f = 0.;
    if (kcube == 0.) f = 1. + r2 * k;
    else f = 1. + r2 * (k + kcube * sqrt(r2));
    float x = (f * (uv.x - .5) + .5);
    float y = (f * (uv.y - .5) + .5);
    return vec2(x,y);
}


vec4 getFromColor(vec2 uv) {
    // return halftone(texture0,uv*iResolution);
    return texture2D(prev,uv);
}

vec4 getToColor(vec2 uv) {
   return texture2D(curr,uv);
}

void transitionStart(in vec2 uv, out vec2 uv1, out vec2 uv2, out float weight) {
    vec2 p = uv + progress * sign(direction);
    //float scale = 1.-fract(progress)*.3;
//   vec2 f = (fract(p)* scale ) + (1. - scale)/2.;
    vec2 f = fract(p);//p - floor(p);
    uv1 = f;
    uv2 = f;
    weight = step(0.0, p.y) * step(p.y, 1.0) * step(0.0, p.x) * step(p.x, 1.0);
  
}

vec4 transitionEnd(in vec2 uv1, in vec2 uv2, in float weight){
  vec4 col =  mix(
        vec4(prevCol.rgb,1.)+getFromColor(uv2),
        vec4(currCol.rgb,1.)+getToColor(uv1),
    weight
  ); 
  return col;
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
	vec2 screenPos = uv.xy*iResolution;
    
    vec2 mousePos;


     mousePos = iMouse.xy;// + vec2(progress*dimensions.z,0.);
    // mousePos = iResolution*vec2(.5);
    
    vec2 dirFromMouse = screenPos - mousePos;
    float distance = length( dirFromMouse );///((1.-borderDist/2.));
    dirFromMouse /= distance;
    float weight = clamp( distance / scrunchDistance, 0.0, 1.0 );
    float distanceDeformed = pow( sineIn(weight), scrunchPower ) * scrunchDistance;
    ;

    // float distanceDeformed = pow( sineIn(weight), scrunchPower ) * scrunchDistance;
    distanceDeformed = mix( distanceDeformed, distance, weight+ clamp(iMouse.z*1.,0.0,1.) );
    vec2 screenPosDeformed = mousePos + dirFromMouse * (distanceDeformed) ;
    
    // Transform from "pixel space" to "texture space" (depends on application)
    // We could optionally clamp the uvs here, but better to specify wrap behavior in sampler or texture definition.
     vec2 uv2 = screenPosDeformed/iResolution;
    return uv2;

}


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = fragCoord.xy / iResolution.xy;
   
    vec2 uvDist = distortion(uv);
   	uv = -1.0 + 2.0 * uvDist;
    float R_X = iMouse.x > 0.0 ? Mouse_Rotation.y : Max_Rotation*cos(iTime)*.001;
    float R_Y = iMouse.x > 0.0 ? Mouse_Rotation.x : Max_Rotation*sin(iTime)*.001;
    vec2 MyCoords = TransformPlane(uv, RotationCenter, R_X, R_Y);
    vec2 MyTexCoord = (MyCoords+1.0)/2.0;

    vec2 target = iMouse.xy;
    MyTexCoord += (target.xy/iResolution.xy - vec2(.5,.5))*vec2(.1,.2) + (noise.xy*.1);


    vec2 uv1,uv2;
    float weight;
    vec4 color;
    
     MyTexCoord = distanceDeforme(MyTexCoord);

    // uv2 *= (uv2*.1);
    // uv2 += (1.-.1)/2.;

    transitionStart(MyTexCoord,uv1,uv2,weight);
    // uv2 = distanceDeforme(uv2);
  

    // uv2 *= scale_next/iResolution;
    // uv2 += transform_next/iResolution;

    // uv1 *= scale_curr/iResolution;
    // uv1 += transform_curr/iResolution;

  

    color = transitionEnd(uv1,uv2,weight);
    fragColor = color;
    //fragColor = vec4(detectOutside(MyTexCoord.xy));
}

 void main(){
     vec2 mapCords = vTextureCoord * dimensions.zw;
     
     mainImage(gl_FragColor,mapCords);
 }