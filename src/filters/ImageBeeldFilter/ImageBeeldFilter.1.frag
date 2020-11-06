precision lowp float;varying vec2 vMapCoord;
varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec2 dimensions;
uniform mat3 paddingMatrix;
uniform vec4 filterArea;
uniform vec2 uMouse;
// uniform float uTime;
uniform float uSpeed;
uniform vec4 filterClamp;
uniform float padding;
uniform float columnWidth;
uniform float offset;
uniform float tx;
uniform vec2 uPadding;

// uniform sampler2D mapSampler;
uniform sampler2D uSampler;
varying vec2 vUv;

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


void main(void)
{
    // vars
    dimensions;
    filterArea;
    uMouse;
    uSpeed;
    filterClamp;
    padding;
    columnWidth;
    offset;
    tx;
    uPadding;

    vec2 uv = vTextureCoord;    
    float maxX = (dimensions.x-padding)/filterArea.x ;
    float minX = padding/filterArea.x;
    float maxY = (dimensions.y-padding)/filterArea.y ;
    float minY = padding/filterArea.y;
    float width = maxX - minX;
    float height = maxY - minY;
    vec4 rgba = vec4(0.);
    if(uv.x > minX && uv.x < maxX &&
        uv.y > minY && uv.y < maxY
        ){
        gl_FragColor = vec4(0.,0.,1.,1.);
    }
    else{
        gl_FragColor = vec4(0.,1.,1.,1.);
        // discard;
    }
    float center = minX + (maxX - minX)*.5;

    // absolute pixels stage world screen pixil (x,y)
    vec2 pixelCoord = vTextureCoord * filterArea.xy;
    // coords make use of filterArea even if not given;
    // use always
    vec2 normalizedCoord = pixelCoord / dimensions;
    
    vec2 unmappedCoord = pixelCoord / filterArea.xy;
    vec2 clampedCoord = clamp(unmappedCoord, filterClamp.xy,filterClamp.zw);
 
    if(normalizedCoord.x > .5){
        rgba = vec4(1.,0.,0.,1.);
    }
    else{
        rgba = vec4(1.,1.,0.,1.);//texture2D(uSampler,Slice(uv));
    }
    
// gl_FragColor = vec4(0.,1.,1.,1.);
    // gl_FragColor = vec4(0.,0.,1.,1.);
    //  gl_FragColor = texture2D(uSampler,(uv));
    // gl_FragColor = texture2D(uSampler,Wave(uv));
    float offset2 = 1.4;
    vec4 texture = texture2D(uSampler,(uv));
    vec2 st = normalizedCoord.xy;//*vec2(1.1,1.);
    vec2 paddingNormalised = uPadding/dimensions;//uPadding.y;//padding/(dimensions.y);
    st -= paddingNormalised;
    st *= 1./(1.-(paddingNormalised*2.));
    // vec2 st = normalizedCoord.xy;//*vec2(1.1,1.    st -= uPadding;
    // st *= 1./(1.-(uPadding*2.));
    // st.y -= uPadding.y;
    float y = 1. * offset2*parabola(st.x,1.0) ;

    vec3 color = vec3(y);
    float pct = plot(st,y);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

    vec2 st2 = st.xy  ;//*vec2(1.1,1.); 
    vec2 box = (dimensions-uPadding*2.)/filterArea.xy;//height;
    // st2 /= 1./(1.-(uPadding*2.));
    // st2 *= (1.-(uPadding*2.));
    // st2 += uPadding;
    
   float yy = 1. * offset2*(box.y)*parabola(st2.x,1.0) ; //<--- lean vy d math problem
    
    texture = texture2D(uSampler,vec2(uv.x,uv.y-yy));//+(height*.5)));
    // vec4 texture = texture2D(uSampler,vec2(uv.x,y));
    
    gl_FragColor = vec4(color,1.0);
    // uv += vec2(0.,y);
    gl_FragColor = mix(vec4(color.rgb,1.),rgba,texture);
    //  gl_FragColor = texture;
    // gl_FragColor = rgba;


    
}
