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

 
#define iResolution vec2(1.)
// #define iMouse vec2(.0,.5)

vec4 texture(in sampler2D text, in vec2 uv)
{
    return texture2D(text, uv);
}


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    const float speed = .0005;
    const float distortionAmount = .02;
    const float distortionIntensity = 4.;
    

    //fragColor =  weave = Weave(uv);
	vec2 uv = fragCoord.xy / iResolution.xy;
	vec2 relativeMouse = iMouse.xy / iResolution.xy * 2.;
    
	vec2 dv = vec2(relativeMouse.x - uv.x, relativeMouse.y - uv.y);	
	float slope = cos(length(dv) * distortionIntensity - iTime * speed);
    if(uv.y > dimensions.w){
        discard;
    }
	fragColor = texture(uSampler, uv + normalize(dv) * slope * distortionAmount);
}

void main(void) {

   float aspect = dimensions.x / dimensions.y;
   vec2 scale2 = vec2(scale * min(1.0, 1.0 / aspect), scale * min(1.0, aspect)) * vec2(1, -1) * vec2(1);
   vec2 mapCords = vTextureCoord;
   mapCords.y *= -1.0;
   mapCords.y += 1.0;
   float map = texture2D(displacementMap, mapCords).r;
   map = map * -1.0 + focus;
   vec2 disCords = vTextureCoord;
   disCords += map*1.01;//offset * map * scale2;

   mainImage(gl_FragColor,vTextureCoord);
}
    
