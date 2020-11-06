precision lowp float;
uniform sampler2D uSampler;
uniform float amount;
uniform float angle;

varying vec2 vTextureCoord;

void main() {

	vec2 offset = amount * vec2( cos(angle), sin(angle));
	vec4 cr = texture2D(uSampler, vTextureCoord + offset);
	vec4 cga = texture2D(uSampler, vTextureCoord);
	vec4 cb = texture2D(uSampler, vTextureCoord - offset);
	gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

}