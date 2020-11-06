precision mediump float;
varying vec2 vTextureCoord;
varying vec4 vColor;
uniform sampler2D displacementMap;
uniform sampler2D uSampler;
uniform float scale;
uniform vec2 offset;
uniform vec4 dimensions;
uniform vec2 mapDimensions;
uniform float focus;
uniform float iTime;
uniform vec2 iMouse;
uniform sampler2D iChannel0;
uniform vec2 iResolution;
uniform float tension;

 



// Divide the view into multiple viewports
// Set global variables to replace iResolution and fragCoord for the local viewport
// Returns index of which panel is being drawn for this pixel
// in the range [0,numPanels.x*numPanels.y)

vec4 texture(     sampler2D   s, vec2 c)                   { return texture2D(s,c); }
vec4 texture(     sampler2D   s, vec2 c, float b)          { return texture2D(s,c,b); }
vec4 texture(     samplerCube s, vec3 c )                  { return textureCube(s,c); }
vec4 texture(     samplerCube s, vec3 c, float b)          { return textureCube(s,c,b); }


// MTAT.03.015 Computer Graphics
// https://courses.cs.ut.ee/2013/cg/
//
// Basic ripple effect example


// Params = (wave frequency in Hz, number of waves per unit distance)
//
vec2 params = vec2(2.5, 10.0);
	
// Simple circular wave function
float wave(vec2 pos, float t, float freq, float numWaves, vec2 center) {
	float d = length(pos - center);
	d = log(1.0 + exp(d));
	return 1.0/(1.0+20.0*d*d) *
		   sin(2.0*3.1415*(-numWaves*d + t*freq));
}

// This height map combines a couple of waves
float height(vec2 pos, float t) {
	float w;
	w =  wave(pos, t, params.x, params.y, vec2(0.5, -0.5));
	w += wave(pos, t, params.x, params.y, -vec2(0.5, -0.5));
	return w;
}

// Discrete differentiation
vec2 normal(vec2 pos, float t) {
	return 	vec2(height(pos - vec2(0.01, 0), t) - height(pos, t), 
				 height(pos - vec2(0, 0.01), t) - height(pos, t));
}

// Simple ripple effect
void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
	//if (iMouse.z > 0.0) params = 2.0*params*iMouse.xy/iResolution.xy;
	vec2 scale = vec2(dimensions.zw) / iResolution;
    params = vec2(1, 4.0*tension);
	
	vec2 uv = fragCoord.xy / iResolution.xy;
    //vec2 uv = fragCoord.xy;
	vec2 uvn = 2.0*uv - vec2(1.0);	
	uv += normal(uvn, iTime);

    vec4 color =  texture(uSampler,uv);
    /****/
   float strength = 16.0;
    
    float x = (uv.x + 4.0 ) * (uv.y + 4.0 ) * (iTime * 10.0);
	vec4 grain = vec4(mod((mod(x, 13.0) + 1.0) * (mod(x, 123.0) + 1.0), 0.01)-0.005) * strength;
    

	fragColor = color + grain;

    
    
    
    /****/

//	fragColor = texture(uSampler, uv);//vec2(1.0-uv.x, uv.y));
}

// void main(void) {

// 	float aspect = dimensions.z / dimensions.w;
//    vec2 scale2 = vec2(scale * min(1.0, 1.0 / aspect), scale * min(1.0, aspect)) * vec2(1, -1) * vec2(1);
//    float resolution =  2.;
//    vec2 center = vec2(-.5,.5);

//    // pixi sprite coords
//    vec2 mapCords = (vTextureCoord* iResolution.xy/2.) - vec2(-iResolution.x*.5,-iResolution.y*.5) * center;//vec2(400,400); //vUv ;//* 2.;
// 	// shader toy iChannel0
// 	// vec2 mapCords = vUv;
// //  gl_FragColor = texture2D(uSampler,vTextureCoord);
//   mainImage(gl_FragColor,mapCords);
  
// }

void main(void) {

   float aspect = dimensions.x / dimensions.y;
   vec2 mapCords = vTextureCoord*iResolution;
   
//    mapCords.y *= -1.0;
//    mapCords.y += 1.0;
 

   mainImage(gl_FragColor,mapCords);
}