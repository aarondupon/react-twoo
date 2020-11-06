////import PIXI from 'pixi.js';//'vendor/pixi';
var Fragment = require('./RGBSplitFilter.frag');
var core = PIXI;

function Filter()
{
    core.AbstractFilter.call(this,
        null,
        Fragment,
        {
            amount:          { type: '1f', value:0.024 },
            angel:           { type: '1f', value: 1.0 }
        }
    );
    this.passes = 1;

}

Filter.prototype = Object.create(core.AbstractFilter.prototype);
Filter.prototype.constructor = Filter;
module.exports = Filter;
Object.defineProperties(Filter.prototype, {
    amount: {
        get: function ()
        {
            return   this.uniforms.amount.value;
        },
        set: function (value)
        {   
             this.uniforms.amount.value = value;
        }
    },
    angle: {
        get: function ()
        {
            return   this.uniforms.angle.value;
        },
        set: function (value)
        {   
             this.uniforms.angle.value = value;
        }
    }
});