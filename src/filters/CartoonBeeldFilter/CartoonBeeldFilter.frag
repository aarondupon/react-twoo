#pragma glslify: blendMultiply = require(glsl-blend/multiply) 
#pragma glslify: blendNegation = require(glsl-blend/negation) 
#pragma glslify: blendNormal = require(glsl-blend/normal) 
#pragma glslify: blendOverlay = require(glsl-blend/overlay) 
#pragma glslify: blendAdd = require(glsl-blend/add) 
#pragma glslify: blendScreen = require(glsl-blend/screen) 
// precision mediump float;
precision mediump float;

varying vec2 vMapCoord;
varying vec2 vTextureCoord;
varying vec4 vColor;
uniform vec2 dimensions;
uniform mat3 paddingMatrix;
uniform vec4 filterArea;
uniform vec2 uMouse;
// uniform float uTime;
uniform float uSpeed;
uniform vec4 filterClamp;
// uniform floafpaddingt padding;
uniform float columnWidth;
uniform float offset;
uniform float tx;
uniform vec2 uPadding;

// uniform sampler2D mapSampler;
uniform sampler2D uSampler;
varying vec2 vUv;
//#define col0 vec4(252, 137, 98,1.);
// #define col1 vec4(O.,255.,255.,1.);
#define col0 vec4(0.,1.,1.,1.) 
#define col1 vec4(0.988, 0.537, 0.384,1.)

#define friction .8
#define timeStep .01
#define amount 15.
#define mass 2.
#define count 0.
#define invMass = .5

//https://thebookofshaders.com/examples/

// shader toy compilation in pixi4
//https://codepen.io/davidhartley/pen/YpvYBZ

//https://www.youtube.com/watch?v=tHwpj9b4zZo
//greatest integer function / round function
float round(float val, float stepSize){
    return floor(val *stepSize)/stepSize;
}

// vec2 parabola( vec2 p )
//     {
//     float x = p.x;
   
//     float k = 1.;
//     float maxX = (dimensions.x)/filterArea.x ;
//     float stepSize = filterArea.x/columnWidth;
   
//     float y = pow( -3.* x * (maxX - x) , k );
//     y = round(y,stepSize);
//     return vec2(x, p.y+y);
   
//     }
vec2 Slice(vec2 p )
{
    vec2 pixelCoord = vTextureCoord * filterArea.xy;
    vec2 normalizedCoord = pixelCoord / dimensions;
    vec2 unmappedCoord = pixelCoord / filterArea.xy;
    vec2 clampedCoord = clamp(unmappedCoord, filterClamp.xy,filterClamp.zw);
 
    // maxX normalised
    float maxX = (dimensions.x)/filterArea.x ;
    // filterArea     max size {x,y}    pixels 
    // columnWidth                      pixels
    float stepSize = filterArea.x/columnWidth;
    float minX = tx / filterArea.x;
    float center = minX+(maxX*.5);

    float dir = clampedCoord.x < center ? 1.:-1.;
    float x = round(p.x,stepSize);
    float offestY =  (x - center) * (dir*.1) * -offset*uSpeed;
    return vec2(p.x,p.y+offestY);
}

vec2 Wave(vec2 p )
{
    vec2 pixelCoord = vTextureCoord * filterArea.xy;
    vec2 normalizedCoord = pixelCoord / dimensions;
    vec2 unmappedCoord = pixelCoord / filterArea.xy;
    vec2 clampedCoord = clamp(unmappedCoord, filterClamp.xy,filterClamp.zw);
 
    // maxX normalised
    float maxX = (dimensions.x)/filterArea.x ;
    // filterArea     max size {x,y}    pixels 
    // columnWidth                      pixels
    float stepSize = filterArea.x/columnWidth;
    float minX = tx / filterArea.x;
    float center = minX + (maxX - minX)*.5;

    float dir = clampedCoord.x < center ? 1.:-1.;

    


    float x = round(p.x,stepSize);
    float offestY =  (x - center) * (dir*.1) * -offset*uSpeed;
    return vec2(p.x,p.y+offestY);
}
//f\left(x\right)=ax^2+bx+c
float parabola( float x, float k ){
    return pow( (.968)*x*(1.0-x), k );
}




vec4 toBezier(float delta, int i, vec4 P0, vec4 P1, vec4 P2, vec4 P3)
{
    float t = delta * float(i);
    float t2 = t * t;
    float one_minus_t = 1.0 - t;
    float one_minus_t2 = one_minus_t * one_minus_t;
    return (P0 * one_minus_t2 * one_minus_t + P1 * 3.0 * t * one_minus_t2 + P2 * 3.0 * t2 * one_minus_t + P3 * t2 * t);
}

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

vec4 toGrayscale(vec4 color)
{
  float average = (color.r + color.g + color.b) / 3.0;
  return vec4(average, average, average, 1.0);
}

vec4 colorize(vec4 grayscale,vec4 color)
{
    return (grayscale * color);
}




void main(void)
{
    // vars
    dimensions;
    filterArea;
    uMouse;
    uSpeed;
    filterClamp;
    columnWidth;
    offset;
    tx;
    uPadding;

    

    vec2 uv = vTextureCoord; 
    vec4 texture = texture2D(uSampler,(uv));
     // absolute pixels stage world screen pixil (x,y)
    vec2 pixelCoord = vTextureCoord * filterArea.xy;
    vec2 normalizedCoord = pixelCoord / dimensions;
    vec2 unmappedCoord = pixelCoord / filterArea.xy;
    vec2 clampedCoord = clamp(unmappedCoord, filterClamp.xy,filterClamp.zw);
    //normaliz padding
    vec2 padding = uPadding/dimensions;
    vec2 innerSize = (dimensions-uPadding*2.)/filterArea.xy;
    // inner box uv
    vec2 iUv = uv + (uPadding/filterArea.xy);
    
    // float maxX = (dimensions.x-uPadding.x)/filterArea.x ;
    // float minX = uPadding.x/filterArea.x;
    // float maxY = (dimensions.y-uPadding.y)/filterArea.y ;
    // float minY = uPadding.y/filterArea.y;
    // float width = maxX - minX;
    // float height = maxY - minY;
  
    /**
        ADD PARABOLA TRANSFORMATION
    **/
    vec2 line = normalizedCoord.xy;
    // project line coordinate system FROM outerBox TO innerBox
    line -= padding;
    line *= 1./(1.-(padding*2.));
    // calulate f(x) for parabola
    float lineY = offset*parabola(line.x,1.0) * pow(line.y*.5,2.) ;
    // plot debugger graph
    vec3 color = vec3(lineY);
    float pct = plot(line,lineY);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);
    vec4 graph = vec4(color.rgb,1.);
    // apply curve to texture uv
   
    // if(uv.y>  .5){
    //    
    //     //texture.rgb = vec3(0.);  
    // }
    
    // if(iUv.y >  .5){
    //       uv.y -= (innerSize.y)*lineY;
    // }else{
    //     uv.y -= innerSize.y*lineY*(iUv.y*.1);
    //    // uv.y += .5;   
    // }
    
    uv.y -= innerSize.y* lineY;// * pow(iUv.y,3.)*2.;
   
    texture = texture2D(uSampler,uv);
    if(uv.y > innerSize.y+padding.y){
        texture = vec4(0.,0.,0.,0.);
    }
    
//    if(normalizedCoord.y < padding.y +innerSize.y*.5 ){
       
//          texture.rgb = vec3(0.);  
//     }
    
    /**
        ADD OFFSET DISPACEMENT
    **/
    float dist =  .01;


   
    // texture.rgba += graph;

    gl_FragColor = texture;

    /**
         rgb split
    **/
    // vec4 l0 = texture2D(uSampler,uv+vec2(dist)); 
    // float alpha1 = l0.r;
    // l0 = colorize(l0,vec4(col0.rgb, l0.r > .628 ? .3*offset : 0.  ));
    
    // vec4 l1 = texture2D(uSampler,uv-vec2(dist)); 
    // float alpha2 = l1.r;
    // l1 = colorize(l1,vec4(col1.rgb, l1.r > .628 ? .3*offset : 0.  ));

    // float alpha = ((alpha2));
    // vec4 l3 = (1.0 - l0.a) * l0 + l1.a * l1;
    // vec4 l4 =  (1.0 - l3.a) * texture + l3.a * l3;
    
    // gl_FragColor = l4;

    /** other output **/
    // gl_FragColor = texture;
    // gl_FragColor = rgba;


    
}
