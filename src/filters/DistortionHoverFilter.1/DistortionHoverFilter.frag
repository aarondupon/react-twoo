precision lowp float;varying vec2 vMapCoord;
varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec2 dimensions;
uniform vec4 filterArea;
uniform vec2 uMouse;
// uniform float uTime;
// uniform float uSpeed;
// uniform vec4 filterClamp;
// uniform float padding;
// uniform float columnWidth;
// uniform float offset;

 uniform float padding;
uniform float tx;
uniform float offset;

// uniform sampler2D mapSampler;
uniform sampler2D uSampler;

varying vec2 vUv;

uniform sampler2D texture;
uniform sampler2D texture2;
uniform sampler2D disp;

uniform float dispFactor;
uniform float effectFactor;


void main() {
    texture;
    texture2;
    disp;
    dispFactor;
    effectFactor;
    offset;
    tx;
    padding;

    vec2 uv = vTextureCoord;
    // gl_FragColor = texture2D(uSampler,uv);
    
    vec4 disp = texture2D(disp, uv);

    vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
    vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);

    vec4 _texture = texture2D(texture, distortedPosition);
    vec4 _texture2 = texture2D(texture2, distortedPosition2);

    vec4 finalTexture = mix(_texture, _texture2, dispFactor);

    gl_FragColor = finalTexture;
    // gl_FragColor = disp;
}

// //https://thebookofshaders.com/examples/

// // shader toy compilation in pixi4
// //https://codepen.io/davidhartley/pen/YpvYBZ

// //https://www.youtube.com/watch?v=tHwpj9b4zZo
// //greatest integer function / round function
// float round(float val, float stepSize){
//     return floor(val *stepSize)/stepSize;
// }

// // vec2 parabola( vec2 p )
// //     {
// //     float x = p.x;
   
// //     float k = 1.;
// //     float maxX = (dimensions.x)/filterArea.x ;
// //     float stepSize = filterArea.x/columnWidth;
   
// //     float y = pow( -3.* x * (maxX - x) , k );
// //     y = round(y,stepSize);
// //     return vec2(x, p.y+y);
   
// //     }
// vec2 Slice(vec2 p )
// {
//     vec2 pixelCoord = vTextureCoord * filterArea.xy;
//     vec2 normalizedCoord = pixelCoord / dimensions;
//     vec2 unmappedCoord = pixelCoord / filterArea.xy;
//     vec2 clampedCoord = clamp(unmappedCoord, filterClamp.xy,filterClamp.zw);
 
//     // maxX normalised
//     float maxX = (dimensions.x)/filterArea.x ;
//     // filterArea     max size {x,y}    pixels 
//     // columnWidth                      pixels
//     float stepSize = filterArea.x/columnWidth;
//     float minX = tx / filterArea.x;
//     float center = minX+(maxX*.5);

//     float dir = clampedCoord.x < center ? 1.:-1.;
//     float x = round(p.x,stepSize);
//     float offestY =  (x - center) * (dir*.1) * -offset*uSpeed;
//     return vec2(p.x,p.y+offestY);
// }

// void main(void)
// {
//     // vars
//     dimensions;
//     filterArea;
//     uMouse;
//     uSpeed;
//     filterClamp;
//     padding;
//     columnWidth;
//     offset;
//     tx;

//     vec2 uv = vTextureCoord;    
//     float maxX = (dimensions.x-padding)/filterArea.x ;
//     float minX = padding/filterArea.x;
//     float width = maxX - minX;
//     if(uv.x > minX && uv.x < maxX){
       
//     }
//     else{
//         // discard;
//     }
//      gl_FragColor = texture2D(uSampler,Slice(uv));
// }
