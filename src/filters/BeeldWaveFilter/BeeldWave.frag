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
    float t = tension*speed*1000.;
    float f =.1;// distance(relativeMouse.xy,uv);
    freq = 10.0*exp(-10.*(f*f)) + sin(t);//5.0*exp(-10.0*(f*f)) + value*sin(iTime);
    //This parameter controls the amplitude of the waves, modulated by an exp along the x-axis 
    amp = .5;
    float d = amp*pow(sin(freq*uv.x + t + 00.0),2.0)*exp(-5.0*uv.x*uv.x)-uv.y*.1;
    return vec3(abs(d));

}
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    const float speed = .05;
    const float distortionAmount = .2;
    const float distortionIntensity = 4.;
    
    vec2 scale = vec2(dimensions.zw) / iResolution;
    //fragColor =  weave = Weave(uv);
	vec2 uv = fragCoord.xy;
	vec2 relativeMouse = vec2(.5);// iMouse.xy;
    
	vec2 dv = vec2(.5,.5);//1.*vec2(relativeMouse.x - uv.x, relativeMouse.y - uv.y);	
	float slope = cos(length(dv) * distortionIntensity - iTime * speed);
    if(uv.x > dimensions.y || uv.y < 0.  ||
        uv.y > dimensions.w || uv.y < 0.  ){
        discard;
    }
    
    vec2 dispacement = normalize(uv);
    //dispacement *= normalize(dv);
    //dispacement *= slope*distortionAmount*tension*10.;    
    dispacement *= .1*vec2(SinWave(uv).r)*tension;
    //dispacement *=  vec2((.5+dv).x*.1,0.);
    
    //pul corners
    vec2 center = vec2(.5)*scale;
    vec2 moveToMouse = vec2(5.5*vec2(-1,-1)*scale/30.; //<----cool
    float border = 0.1;
    // move to mouse
    // vec2 moveToMouse = ((iMouse - vec2(0.5))*-.1)-(.05) + (uv*.1);
   //dispacement += moveToMouse*-3.;// *  2.*(distance(center,vec2(distance(uv,center))));
    //end move to mouse

    vec2 pos =  uv + dispacement;
   // pos += vec2(.5);
    vec3 col = vec3(0,0,0);//texture(uSampler,pos).rgb;
    // vec3 normal = Normal( pos );
	// col += -normal.z*0.1  + normal.y*0.1;
    float nl = normalize(sqrt(dot(pos,dispacement)));
    float dist = sqrt(dot(dv,uv));
    vec3 normal = Normal( vec3(dispacement.xy,dist));
   // col.rbg += (slope*.1);
   col.rgb += pow(SinWave(pos).r,1.);
    

    // float m = distance(relativeMouse.xy,uv); 
    // col.r = m;
    
   
    // if(abs(tension) > 0.){
       // col.rgb += .5*SinWave(pos).r ; // shadow 
    // }
    

    vec4 layer = texture(uSampler,pos).rgba;
    layer.rgb += col;

    if(pos.x < 0. || pos.y < 0. || pos.x > (scale.x - 0.001) || pos.y > (scale.y - 0.001)  ){
        layer.rgba = vec4(1.,0.,1.,0.);
        discard;
    }
	fragColor = vec4(layer);
}

void main(void) {

   float aspect = dimensions.x / dimensions.y;
   vec2 scale2 = vec2(scale * min(1.0, 1.0 / aspect), scale * min(1.0, aspect)) * vec2(1, -1) * vec2(1);
   vec2 mapCords = vTextureCoord;
//    mapCords.y *= -1.0;
//    mapCords.y += 1.0;
   float map = texture2D(displacementMap, mapCords).r;
   map = map * -1.0 + focus;
   vec2 disCords = vTextureCoord;
   disCords += map*1.01;//offset * map * scale2;
    //gl_FragColor = texture2D(uSampler,vTextureCoord);
   mainImage(gl_FragColor,mapCords);
}
