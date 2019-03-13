function EMPTY(width=0,height=0) {
    const baseTexture = new  PIXI.BaseTexture()
    return new PIXI.Texture(baseTexture,new PIXI.Rectangle(0,0,width,height));

}
EMPTY.prototype.constructor = EMPTY;
export default EMPTY;