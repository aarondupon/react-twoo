precision lowp float;
uniform sampler2D uSampler;
uniform float amount;
uniform float angle;

varying vec2 vTextureCoord;


const float Threshold = 1.0;
const float Intensity = 2.0;
const float BlurSize = 6.0;

vec4 BlurColor (vec2 Coord,sampler2D Tex,float MipBias)
{
	vec2 TexelSize = vec2(1000,1000);
    
    vec4  Color = texture2D(Tex, Coord, MipBias);
    Color += texture2D(Tex, Coord + vec2(TexelSize.x,0.0), MipBias);    	
    Color += texture2D(Tex, Coord + vec2(-TexelSize.x,0.0), MipBias);    	
    Color += texture2D(Tex, Coord + vec2(0.0,TexelSize.y), MipBias);    	
    Color += texture2D(Tex, Coord + vec2(0.0,-TexelSize.y), MipBias);    	
    Color += texture2D(Tex, Coord + vec2(TexelSize.x,TexelSize.y), MipBias);    	
    Color += texture2D(Tex, Coord + vec2(-TexelSize.x,TexelSize.y), MipBias);    	
    Color += texture2D(Tex, Coord + vec2(TexelSize.x,-TexelSize.y), MipBias);    	
    Color += texture2D(Tex, Coord + vec2(-TexelSize.x,-TexelSize.y), MipBias);    

    return Color/9.0;
}



void main() {

	//vec2 offset = amount * vec2( cos(angle), sin(angle));
	vec2 offset = vTextureCoord.xy*vec2(1.0,-1.0);
	vec4 Color = texture2D(uSampler, vTextureCoord);
    
	//vec4 cr = texture2D(uSampler, vTextureCoord + offset);
	//vec4 cga = texture2D(uSampler, vTextureCoord);
	//vec4 cb = texture2D(uSampler, vTextureCoord - offset);
	vec4 Highlight =  vec4(vTextureCoord.x, vTextureCoord.y, BlurSize,BlurSize);//
	//clamp(BlurColor(vTextureCoord, vTextureCoord, BlurSize)-Threshold,0.0,1.0)*1.0/(1.0-Threshold);
	gl_FragColor = 1.0-(1.0-Color)*(1.0-Highlight*Intensity); //Screen Blend Mode
	//gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

}