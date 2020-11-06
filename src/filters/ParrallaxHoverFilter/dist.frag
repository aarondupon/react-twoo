precision mediump float;

uniform float u_time;
uniform float u_distortionAmount;
uniform float u_distortionRange;
uniform vec2 u_mouse;

// our textures
uniform sampler2D u_originalImage;
uniform sampler2D u_blurredImage;
uniform sampler2D u_mapImage;

// the texcoords passed in from the vertex shader.
varying vec2 v_texcoord;

void main() {
   vec4 depthDistortion = texture2D(u_mapImage, v_texcoord);
   float distortionMult = depthDistortion.g;     // just green channel
   float parallaxMult = 0.5 - depthDistortion.r; // just red channel
   
   vec2 distortion = vec2(
      sin(u_time + v_texcoord.y * u_distortionRange), 0) * u_distortionAmount  * distortionMult;
   vec2 parallax = u_mouse * parallaxMult;
      
   vec2 uv = v_texcoord + distortion + parallax;
   vec4 original = texture2D(u_originalImage, uv);
   vec4 blurred = texture2D(u_blurredImage, uv);
   gl_FragColor = mix(original, blurred, length(distortion) / u_distortionAmount);
}