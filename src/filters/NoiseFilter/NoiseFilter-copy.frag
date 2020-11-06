precision mediump float;
varying vec2 vTextureCoord;
varying vec4 vColor;
//uniform sampler2D uScan;
uniform sampler2D uSampler;
uniform float noise;
uniform float power;
vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

float rand(vec2 co) {
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233 * noise))) * 43758.5453);
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt= dot(co.xy ,vec2(a,b));
    highp float sn= mod(dt,3.14)*noise;
    return fract(sin(sn) * c*.01);
}

void main(void) {
vec2 cord = vTextureCoord;
vec4 temp = vec4(0.0,0.0,0.0,0.0);
cord.y += noise * 0.001;
//float off = (-0.5 + texture2D(uScan, cord * vec2(1.0, 1.0/8.0)).g) * (power/630.0);
vec4 texture = texture2D(uSampler, vTextureCoord);
vec4 color = texture2D(uSampler, vTextureCoord);

float diff =  ((rand(vTextureCoord) - 0.5) );//2;
color.r += diff;
color.g += diff;
color.b += diff;
float gray =  rgb2hsv(texture.rgb).y;//(texture.r+texture.g+texture.b)/3.0;
//float gray =  rgb2hsv(texture.rgb).y;//(texture.r+texture.g+texture.b)/3.0;
float multi =  .05*(1.0-(gray*gray));
//float k =  vTextureCoord.y < 0.503 ? 1.0 : 1.0-textureAlpha.r;

gl_FragColor = vec4( mix(texture, color,vec4(multi,multi,multi,multi)) );

//vec4( mix(texture, color,.15*(1.0-(gray*gray))) );

//gl_FragColor = color;

}
