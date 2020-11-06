attribute vec3 aPosition;
attribute vec2 aTextureCoord;
//uniform mat3 projectionMatrix;

varying highp vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4(aPosition,1.0);//vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}
