////import PIXI from 'pixi.js';
var core = PIXI;
// @see https://github.com/substack/brfs/issues/25
// var Fragment = require('./DisplacementFilter.frag');
// var Vertext = require('./DisplacementFilter.vert');
var Vertext = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform vec2 delta;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vDelta;\n\nvoid main(void)\n{\n\tgl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n\tvTextureCoord = aTextureCoord;\n\n\tvDelta = delta;\n\n\tvColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}";
var Fragment = "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vDelta;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nfloat random(vec3 scale, float seed) {\n    /* use the fragment position for a different seed per-pixel */\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main() {\n\tvec4 color = vec4(0.0);\n\tfloat total = 0.0;\n\t\n\t/* randomize the lookup values to hide the fixed number of samples */\n\tfloat offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\t\n\tfor (int t = -30; t <= 30; t++) {\n\t\tfloat percent = (float(t) + offset - 0.5) / 30.0;\n\t\tfloat weight = 1.0 - abs(percent);\n\t\tvec4 sample = texture2D(uSampler, vTextureCoord + vDelta * percent);\n\t\t\n\t\t/* switch to pre-multiplied alpha to correctly blur transparent images */\n\t\tsample.rgb *= sample.a;\n\t\t\n\t\tcolor += sample * weight;\n\t\ttotal += weight;\n\t}\n\t\n\tgl_FragColor = color / total;\n\t\n\t/* switch back from pre-multiplied alpha */\n\tgl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}";

/**
 * The DisplacementFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used to offset the x and the g property of the texture is used to offset the y.
 *
 * @class
 * @extends PIXI.AbstractFilter
 * @memberof PIXI.filters
 * @param sprite {PIXI.Sprite} the sprite used for the displacement map. (make sure its added to the scene!)
 */
function Filter(sprite, scale)
{

    PIXI.AbstractFilter.call(this,
        Vertext,
        Fragment,
        // uniforms
        {
              delta: { type: 'v2', value: { x: 1, y: 1 } }
        }
    );

}


Filter.prototype = Object.create(core.AbstractFilter.prototype);
Filter.prototype.constructor = Filter;
module.exports = Filter;

Object.defineProperties(Filter.prototype, {
    /**
     * The texture used for the displacement map. Must be power of 2 sized texture.
     *
     * @member {PIXI.Texture}
     * @memberof PIXI.filters.DisplacementFilter#
     */
    blur: {
        get: function ()
        {
            return this.uniforms.delta.value;
        },
        set: function (value)
        {
            this.uniforms.delta.value = value;

        }
    }
});
