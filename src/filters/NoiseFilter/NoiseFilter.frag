precision mediump float;
varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;
uniform sampler2D noiseSampler;
uniform float time;


vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
//note: uniformly distributed, normalized rand, [0;1[
float nrand( vec2 n )
{
	return fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);
}
//note: remaps v to [0;1] in interval [a;b]
float remap( float a, float b, float v )
{
	return clamp( (v-a) / (b-a), 0.0, 1.0 );
}
//note: quantizes in l levels
float trunc( float a, float l )
{
	return floor(a*l)/l;
}

float n1rand( vec2 n )
{
	float t = fract( time );
	float nrnd0 = nrand( n + 0.07*t );
	return nrnd0;
}
float n2rand( vec2 n )
{
	float t = fract( time );
	float nrnd0 = nrand( n + 0.07*t );
	float nrnd1 = nrand( n + 0.11*t );
	return (nrnd0+nrnd1) / 2.0;
}
float n3rand( vec2 n )
{
	float t = fract( time );
	float nrnd0 = nrand( n + 0.07*t );
	float nrnd1 = nrand( n + 0.11*t );
	float nrnd2 = nrand( n + 0.13*t );
	return (nrnd0+nrnd1+nrnd2) / 3.0;
}
float n4rand( vec2 n )
{
	float t = fract( time );
	float nrnd0 = nrand( n + 0.07*t );
	float nrnd1 = nrand( n + 0.11*t );
	float nrnd2 = nrand( n + 0.13*t );
	float nrnd3 = nrand( n + 0.17*t );
	return (nrnd0+nrnd1+nrnd2+nrnd3) / 4.0;
}

float n8rand( vec2 n )
{
	float t = fract( time );
	float nrnd0 = nrand( n + 0.07*t );
	float nrnd1 = nrand( n + 0.11*t );
	float nrnd2 = nrand( n + 0.13*t );
	float nrnd3 = nrand( n + 0.17*t );

    float nrnd4 = nrand( n + 0.19*t );
    float nrnd5 = nrand( n + 0.23*t );
    float nrnd6 = nrand( n + 0.29*t );
    float nrnd7 = nrand( n + 0.31*t );

	return (nrnd0+nrnd1+nrnd2+nrnd3 +nrnd4+nrnd5+nrnd6+nrnd7) / 8.0;
}

float snoise(vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
	f = f*f*(3.0-2.0*f);

	vec2 uv = (p.xy+vec2(37.0,17.0)*p.z) + f.xy;
	vec2 rg = texture2D( noiseSampler, (uv+ 0.5)/256.0, -100.0 ).yx;
	return mix( rg.x, rg.y, f.z );
}

float n5rand( vec2 n )
{
    #define PI acos(-1.0)

    //time counter
    float t = fract( time );

    //PRNG 2D - create two uniform noise values and save one DP2ADD
    float seed = dot(n.xy, vec2(12.9898, 78.233)) + (t);
    float sine = sin(seed);
    float cosine = cos(seed);
    float uniform_noise1 = fract(sine * 43758.5453 + t); //I just salt with t because I can
    float uniform_noise2 = fract(cosine * 43758.5453 - t); // and it doesn't cost any extra ASM


    //Box-MÃ¼ller transform
    uniform_noise1 = (uniform_noise1 < 0.0001) ? 0.0001 : uniform_noise1; //fix log(0)

    float r = sqrt(-log(uniform_noise1));
    float theta = 2.0 * PI * uniform_noise2;

    float variance = 0.23;//(1.0 - sqrt(iMouse.y / iResolution.y));//or just a constant. self_shadow used 0.23

    float gauss_noise1 = variance * r*cos(theta) + 0.5;
    float gauss_noise2 = variance * r*sin(theta) + 0.5; //we can get two gaussians out of it

	return gauss_noise1; //or gauss_noise2 or (gauss_noise1+gauss_noise2)*0.5
}
void main(void) {
vec2 cord = vTextureCoord;
vec4 temp = vec4(0.0,0.0,0.0,0.0);
//cord.y += noise * 0.001;
//float off = (-0.5 + texture2D(uScan, cord * vec2(1.0, 1.0/8.0)).g) * (power/630.0);
vec4 texture = texture2D(uSampler, vTextureCoord);
vec4 color = texture2D(uSampler, vTextureCoord);

float diff =  1.4*n5rand(vTextureCoord);//snoise(vec3(cord.xy*4.5*1.5,1.0));//snoise(vec3(cord.xy*4.5+noise*1.5,1.0));//((rand(vTextureCoord) - 0.5) );//2;
color.r += diff;
color.g += diff;
color.b += diff;

float gray =  rgb2hsv(texture.rgb).y;//(texture.r+texture.g+texture.b)/3.0;
//float gray =  rgb2hsv(texture.rgb).y;//(texture.r+texture.g+texture.b)/3.0;
float multi =  .05*(1.0-(gray*gray));
//float k =  vTextureCoord.y < 0.503 ? 1.0 : 1.0-textureAlpha.r;

gl_FragColor = vec4( mix(texture, color,vec4(multi,multi,multi,multi)) );

//vec4( mix(texture, color,.15*(1.0-(gray*gray))) );
//float n = snoise(vec3(cord.xy*4.5+ time *1.5 ,1.0));
//gl_FragColor =  color;//vec4(n,n,n,1.0);//color;

}
