precision mediump float;
// uniform sampler2D texture;
// uniform vec2 resolution;
// void main(void) {
//     vec2 uv = gl_FragCoord.xy / resolution.xy;
//     gl_FragColor = texture2D( texture, uv );
// }
varying vec2 vTextureCoord;
uniform sampler2D texture;
void main()
{
 float s = 4.0;
 float d = 1.0/1024.0;
 float x = vTextureCoord.x;
 float y = vTextureCoord.y;
 gl_FragColor = (texture2D( texture, vec2(x+d, y))
 +texture2D( texture, vec2(x, y+d))
 +texture2D( texture, vec2(x-d, y))
 +texture2D( texture, vec2(x, y-d)))/s;
}
