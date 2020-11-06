precision mediump float;
varying vec2 vTextureCoord;
varying vec4 vColor;
uniform sampler2D uSampler;
uniform float threshold;

void main(void) {
   vec4 colour = texture2D(uSampler, vTextureCoord);
   colour.rgb = mix(colour.rgb, vec3(0.2126*colour.r + 0.7152*colour.g + 0.0722*colour.b), 1.0);
   if(colour.r>=threshold) {
       gl_FragColor = vec4 (colour.r,colour.b,colour.g,1.0);
   } else {
       discard;
   }
}