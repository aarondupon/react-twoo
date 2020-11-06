precision lowp float;
varying vec2 vMapCoord;
varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec2 dimensions;
uniform vec4 filterArea;
uniform vec2 uMouse;

uniform float padding;
uniform float tx;
uniform float offset;

// uniform sampler2D mapSampler;
uniform sampler2D uSampler;

varying vec2 vUv;

uniform sampler2D texture;
uniform sampler2D texture2;
uniform sampler2D disp;

uniform float effectFactor;
uniform float progress;

//http://acko.net/files/fullfrontal/fullfrontal/wdcode/online.html
vec4 getFromColor(vec2 uv) {
    return texture2D(texture,uv);
}

vec4 getToColor(vec2 uv) {
    return texture2D(texture2,uv);
}

vec4 transition (vec2 uv) {
  vec2 direction = vec2(1.,0.);
  vec2 p = uv + progress * sign(direction);
  vec2 f = fract(p);
  return mix(
    getToColor(f),
    getFromColor(f),
    step(0.0, p.y) * step(p.y, 1.0) * step(0.0, p.x) * step(p.x, 1.0)
  );
}

void main() {
    texture;
    texture2;
    disp;
    effectFactor;
    offset;
    tx;
    padding;
    progress;

    
    vec2 uv = vTextureCoord;
    vec4 finalTexture = transition(uv);


    // gl_FragColor = texture2D(uSampler,uv);
    
    vec4 disp = texture2D(disp, uv);

    vec2 distortedPosition = vec2(uv.x + progress * (disp.r*effectFactor), uv.y);
    vec2 distortedPosition2 = vec2(uv.x - (1.0 - progress) * (disp.r*effectFactor), uv.y);

    vec4 _texture = getFromColor(distortedPosition);
    vec4 _texture2 = getToColor(distortedPosition2);

    finalTexture = mix(finalTexture, _texture2, progress);
    
    gl_FragColor = finalTexture;
    // gl_FragColor = transition(uv);
    // gl_FragColor = disp;
}
