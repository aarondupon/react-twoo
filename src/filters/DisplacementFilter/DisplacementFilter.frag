// precision lowp float;
#pragma glslify: blur = require('glsl-fast-gaussian-blur')
#pragma glslify: pnoise2 = require(glsl-noise/periodic/2d)
#pragma glslify: snoise2 = require(glsl-noise/simplex/2d) 


varying vec2 vMapCoord;
varying vec2 vTextureCoord;
varying vec4 vColor;



uniform vec2 dimensions;
uniform vec4 filterArea;
uniform vec2 uMouse;



uniform vec2 uPadding;
uniform float tx;
uniform float offset;
uniform float aspect;
uniform float parabola;

// uniform sampler2D mapSampler;


varying vec2 vUv;
uniform sampler2D uSampler;
uniform sampler2D texture;
uniform sampler2D texture2;
uniform sampler2D disp;
uniform sampler2D tBias;

// uniform sampler2D mapSampler;

uniform float effectFactor;
uniform float progress;

//http://acko.net/files/fullfrontal/fullfrontal/wdcode/online.html
// https://github.com/spite/Wagner/blob/master/fragment-shaders/guided-directional-blur-fs.glsl
vec4 getFromColor(vec2 uv) {
    return texture2D(uSampler,uv);
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

float random2(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
}


float sampleBias( vec2 uv, sampler2D texBias) {
    // vec4 tBias = texture2;
	// return texture2D(tBias, uv ).r;
	vec3 luma = vec3( .299, 0.587, 0.114 );
	return dot( texture2D( texBias, uv ).rgb, luma );
}


float rand (vec2 co) {
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}


vec4 biasBlur (vec2 uv,sampler2D texBias) {
     vec2 pixelCoord = vTextureCoord * filterArea.xy;
    vec2 normalizedCoord = pixelCoord / dimensions;
    float f = sampleBias( normalizedCoord, texBias );
	float a = - f * 3.14159;
	vec4 o = texture2D( uSampler, uv );
	vec4 color= vec4(0.0);
	float total=0.0;
	vec2 tDelta = (.0001*offset) * vec2( cos( a ), sin( a ) );
	float offset=random(vec3(12.9898,78.233,151.7182),0.0);
	for(float t=-15.0;t<=15.0;t++){
		float percent=(t+offset-0.5)/15.0;
		float weight=1.0-abs(percent);
		vec4 sample=texture2D(uSampler,uv+tDelta*percent);
		sample.rgb*=sample.a;
		color+=sample*weight;
		total+=weight;
	}

    if( total == 0. ) total = 1.;
	color = color / total;
	color.rgb/=color.a+0.00001;
    return color;
}


// Simplex 2D noise
//
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 13.0 * dot(m, g);
}

vec3 hash3( vec2 p ){
    vec3 q = vec3( dot(p,vec2(127.1,311.7)), 
				   dot(p,vec2(269.5,183.3)), 
				   dot(p,vec2(419.2,371.9)) );
	return fract(sin(q)*43758.5453);
}

float iqnoise( in vec2 x, float u, float v ){
    vec2 p = floor(x);
    vec2 f = fract(x);
		
	float k = 1.0+63.0*pow(1.0-v,4.0);
	
	float va = 0.0;
	float wt = 0.0;
    for( int j=-2; j<=2; j++ )
    for( int i=-2; i<=2; i++ )
    {
        vec2 g = vec2( float(i),float(j) );
		vec3 o = hash3( p + g )*vec3(u,u,1.0);
		vec2 r = g - f + o.xy;
		float d = dot(r,r);
		float ww = pow( 1.0-smoothstep(0.0,1.414,sqrt(d)), k );
		va += o.z*ww;
		wt += ww;
    }
	
    return va/wt;
}


#define M_PI 3.14159265358979323846
float rand (vec2 co, float l) {return rand(vec2(rand(co), l));}
float rand (vec2 co, float l, float t) {return rand(vec2(rand(co, l), t));}

float perlin(vec2 p, float dim, float time) {
	vec2 pos = floor(p * dim);
	vec2 posx = pos + vec2(1.0, 0.0);
	vec2 posy = pos + vec2(0.0, 1.0);
	vec2 posxy = pos + vec2(1.0);
	
	float c = rand(pos, dim, time);
	float cx = rand(posx, dim, time);
	float cy = rand(posy, dim, time);
	float cxy = rand(posxy, dim, time);
	
	vec2 d = fract(p * dim);
	d = -0.5 * cos(d * M_PI) + 0.5;
	
	float ccx = mix(c, cx, d.x);
	float cycxy = mix(cy, cxy, d.x);
	float center = mix(ccx, cycxy, d.y);
	
	return center * 2.0 - 1.0;
}

//https://motionbro.net/videolancer/handy-seamless-transitions-preview/
void main() {
    texture;
    texture2;
    disp;
    effectFactor;
    offset;
    tx;
    progress;
    parabola;
    aspect;
    
    
    vec2 uv = vTextureCoord;
    vec2 pixelCoord = vTextureCoord * filterArea.xy;
    vec2 normalizedCoord = pixelCoord / dimensions;
    vec2 padding = uPadding/dimensions;
    vec2 innerSize = (dimensions-uPadding*2.)/filterArea.xy;

    
    vec4 _texture = getFromColor(uv);
    vec4 _texture2 = getToColor(uv);

   

    

    float gPower = .1;
    float seed = random2(uv);
  
    float stepx = uv.x;// 1.0 * (floor(uv.x * 20.0) / 20.0);
    float n = snoise2(vec2(stepx*8.,1.));
    // dist
   
    uv = vec2(uv.x,uv.y + (0.05*offset*stepx*n*.1));
    gl_FragColor =  texture2D( uSampler,uv );
    
    // vec4 color = biasBlur(uv,disp);
    // gl_FragColor = color;
    // gl_FragColor  = texture2D( uSampler,uv );

}
