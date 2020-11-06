precision mediump float;




uniform float uTimer;
uniform vec2 uMouse;
//
// uniform float opacity;
//
// uniform sampler2D tPositions;
// uniform sampler2D tOrigins;
// uniform vec3 metaballs[10];


varying vec2 vTextureCoord;


const float WIDTH = 200.0;
const float HEIGHT = 200.0;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {


	// vec4 pos = texture2D( tPositions, vTextureCoord );
  //
	// if ( rand( vTextureCoord + timer ) > 0.99 || pos.w <= 0.0 ) {
  //
	// 	pos.xyz = texture2D( tOrigins, vTextureCoord ).xyz;
	// 	pos.w = opacity;
  //
	// } else {
  //
	// 	if ( pos.w <= 0.0 ) discard;
  //
	// 	float x = pos.x + timer * 5.0;
	// 	float y = pos.y;
	// 	float z = pos.z + timer * 4.0;
  //
	// 	pos.x += sin( y * 0.033 ) * cos( z * 0.037 ) * 0.4;
	// 	pos.y += sin( x * 0.035 ) * cos( x * 0.035 ) * 0.4;
	// 	pos.z += sin( x * 0.037 ) * cos( y * 0.033 ) * 0.4;
	// 	pos.w -= 0.00001;
  //
	// }
  //
  float x = gl_FragCoord.x;
   float y = gl_FragCoord.y;
  //  for (int i = 0; i < 10; i++) {
  //      vec3 mb = metaballs[i];
  //      float dx = mb.x - x;
  //      float dy = mb.y - y;
  //      float r = mb.z;
  //      if (dx*dx + dy*dy <  r*r) {// 500000.0
  //          gl_FragColor = vec4(x/WIDTH*uTimer, y/HEIGHT,0.0, 1.0);
  //          return;
  //      }
  //  }

   gl_FragColor = vec4(uMouse.y, y/HEIGHT,0.0, 1.0);
   //gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
  //gl_FragColor = vec4(gl_FragCoord.x/500.0,gl_FragCoord.y/400.0, 0.0, 1.0);

	//gl_FragColor = pos;

}
