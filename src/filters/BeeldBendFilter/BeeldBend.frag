precision mediump float;
varying vec2 vTextureCoord;
varying vec4 vColor;
uniform sampler2D displacementMap;
uniform sampler2D uSampler;
uniform vec2 scale;
uniform vec2 offset;
uniform float padding;
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
//vec4 textureLod( sampler, vec? coord, float lod)
// vec4 textureLod(  sampler2D   s, vec2 c, float b){
//      return texture2DLodEXT(s,c,b); 
// }

vec4 Noise( in vec2 x )
{
    vec2 p = floor(x);
    vec2 f = fract(x);
	f = f*f*(3.0-2.0*f);
//	vec2 f2 = f*f; f = f*f2*(10.0-15.0*f+6.0*f2);

	vec2 uv = p + f;

// #if (1)
// 	vec4 rg = textureLod( iChannel0, (uv+0.5)/256.0, 0.0 );
// #else
	// on some hardware interpolation lacks precision
	vec4 rg = mix( mix(
                    texture( iChannel0, (floor(uv)+0.5)/256.0, -100.0 ),
                    texture( iChannel0, (floor(uv)+vec2(1,0)+0.5)/256.0, -100.0 ),
                    fract(uv.x) ),
                        mix(
                    texture( iChannel0, (floor(uv)+vec2(0,1)+0.5)/256.0, -100.0 ),
                    texture( iChannel0, (floor(uv)+1.5)/256.0, -100.0 ),
                    fract(uv.x) ),
                    fract(uv.y) );
// #endif			  
	// vec4 rg = texture(iChannel0,uv);
	return rg;
}


float RippleHeight( vec2 pos )
{
	vec2 p = pos+vec2(1,.2)*iTime*.00001;
	
	p += vec2(1,0);//*Noise(p).y; // more natural looking ripples
	float f = Noise(p).x-.5;
	p *= 2.0;
	p += vec2(0,-.5)*iTime;
	f += (Noise(p).x-.5)*.2;
	p *= 2.0;
	p += vec2(-3,0)*iTime;
	f += (Noise(p).x-.5)*.05;
	
	f = f*(1.+ .5*exp2(-abs(pos.x)));

	// return texture(iChannel3,pos).r*.33;
	return f*1.0*5.;
}


float DistanceField( vec3 pos );

vec3 Normal( vec3 pos )
{
	const vec2 delta = vec2(0,.1);
	vec3 grad;
	grad.x = DistanceField( pos+delta.yxx )-DistanceField( pos-delta.yxx );
	grad.y = DistanceField( pos+delta.xyx )-DistanceField( pos-delta.xyx );
	grad.z = DistanceField( pos+delta.xxy )-DistanceField( pos-delta.xxy );
	return normalize(grad);
}
float DistanceField( vec3 pos )
{
	return (RippleHeight(pos.xy)-pos.z*1.)*.5;
}
vec3 SinWave(in vec2 uv)
{
    const float speed = .05;
    float amp,freq;
    float t = iTime*speed;
    float f =.1;// distance(relativeMouse.xy,uv);
    freq = 5.0*exp(-10.*(f*f)) + sin(t);//5.0*exp(-10.0*(f*f)) + value*sin(iTime);
    //This parameter controls the amplitude of the waves, modulated by an exp along the x-axis 
    amp = .5;
    float d = amp*pow(sin(freq*uv.x + t + 00.0),2.0)*exp(-5.0*uv.x*uv.x)-uv.y*.1;
    return vec3(abs(d));

}
float qinticInOut(float t) {
  return t < 0.5
    ? +16.0 * pow(t, 5.0)
    : -0.5 * pow(2.0 * t - 2.0, 5.0) + 1.0;
}


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{


    vec2 uv = fragCoord.xy / iResolution.xy;

    //uv.y = 1. - uv.y;
    float aspectRatio = iResolution.x / iResolution.y;
    

    float strength = sin(tension * 2.0)*sin(tension * 2.0) * 0.04;
    //float strength = sin(iTime * 2.0)*sin(iTime * 2.0) * 0.04;

    vec2 intensity = vec2(strength * aspectRatio,
                          strength * aspectRatio);
    
    //svec2 scale = vec2(1.);//vec2(1.,scaleY);
	uv += uv - (uv*scale);// + ((vec2(1.) - scale)*.5* vec2(dimensions.zw) / iResolution);
   // uv -= (1.-scale)*.5;

    // vec2 center = .5 * vec2(dimensions.zw) / iResolution;
    vec2 center = .5 * vec2(dimensions.zw) / iResolution;
    
    vec2 coords = uv ;
    coords = (coords - (center)) * 2.;
    
    coords = coords + coords * 1.;
	
    vec2 realCoordOffs;
   // realCoordOffs.x = (1.0 - coords.y * coords.y) * intensity.y * (coords.x); 
    realCoordOffs.y = (1.0 - coords.x * coords.x) * intensity.x * (coords.y);

	
    uv = uv - realCoordOffs;
   
    vec4 color = texture(uSampler, uv );

    if(uv.x < padding/iResolution.x || uv.y <  padding/iResolution.y
        || uv.x > (dimensions.z/iResolution.x)-padding/iResolution.x || uv.y > (dimensions.w/iResolution.y)- padding/iResolution.y
    ){
        
        fragColor = vec4(0.,1.,0.,0);
        discard;
    }else{
        fragColor = vec4(color);
    }	 
    
	

}

void main(void) {

   float aspect = dimensions.x / dimensions.y;
   vec2 mapCords = vTextureCoord*iResolution;
   
//    mapCords.y *= -1.0;
//    mapCords.y += 1.0;
 

   mainImage(gl_FragColor,mapCords);
}
