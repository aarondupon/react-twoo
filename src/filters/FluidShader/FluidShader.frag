precision mediump float;
uniform vec4 dimensions;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;
varying vec2 vMapCoord;
//varying vec4 vColor;
uniform vec2 resolution;
float positionY, velocity;
uniform float time;
uniform vec2 mouse;
uniform sampler2D sampler_particles;
//float waves;




void main()
{
  vec4 bg;
  vec4 textureAlpha = texture2D(uSampler,vTextureCoord.xy);
  //vec2 offset_mask = vec2(0.0,0.5);
  vec4 texture =  texture2D(uSampler,vTextureCoord.xy);
  //vec2 particle =  texture2D(sampler_particles,vTextureCoord.xy).xy;
  vec3 pos = texture2D( sampler_particles, vTextureCoord.xy ).xyz;
  //vec4 k =  vec4(1.0-textureAlpha.r);//vTextureCoord.y < 0.503 ? 1.0 : 1.0-textureAlpha.r;


  float x = pos.x + time;
	float y = pos.y;
	float z = pos.z;

  pos.x += sin( y * 7.0 ) * cos( z * 12.0 ) * 0.005;
	pos.y += sin( x * 8.0 ) * cos( z * 13.0 ) * 0.005;
	pos.z += sin( x * 9.0 ) * cos( y * 14.0 ) * 0.005;

    // update;

  float targetHeight = vTextureCoord.y;
  float height =  mouse.y;
  const float k = 0.025; // DAMPENING adjust this value to your liking

  //float y = height - targetHeight;
  float springconstant =  0.04;
  float damping = 0.02;
  float mass  = 1.0;
  float force = (springconstant * y + velocity *damping) * 10.0 ;
  float acceleration = -force/mass;//-k * y;
  float waves = height;
  positionY += 0.0;//velocity;
  velocity += acceleration;


  // float color = particle.y;//1.0;//y < height ? (height - positionY) * 20.0 : 0.0;
  // particle.y += velocity;



  gl_FragColor = vec4( 1.0,1.0,velocity*mouse.y, 0.4 );

 //gl_FragColor = vec4( targetHeight <  waves ? mix(vec3(0.59,0.63,0.86),vec3(0.19,0.24,0.51),color) : vec3(1.0,0,0), 1.0 );

//wave
  // vec2 position = ( ( vTextureCoord.xy + vec2(0.0,+0.0)) / vec2(1.0,4.0)) - mouse/4.0 ;///- vec2(0.0,-0.2);
	// float waves = sin(position.x*10.0)*0.01*sin(time*10.0)   +  sin(position.x*10.0+1.3)*0.01*sin(time*10.0+10.5);
	// float color = position.y < waves ?(waves-position.y)*20.0 : 0.0;
	// color = min(pow(color,0.5),1.0);
	// gl_FragColor = vec4( position.y < waves ? mix(vec3(0.59,0.63,0.86),vec3(0.19,0.24,0.51),color) : vec3(0,0,0), 1.0 );
  //



//  texture.k = k;dddddddddddddddd
//  fffffffffffff
//  gl_FragColor = vec4(texture.r,time,texture.g,0.01);//vec4( mix(texture, b, k) );

}
