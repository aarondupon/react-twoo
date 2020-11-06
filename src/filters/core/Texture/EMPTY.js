function EMPTY() {
    const baseTexture = new  PIXI.BaseTexture()
    return new PIXI.Texture(baseTexture);

}
EMPTY.prototype.constructor = EMPTY;
export default EMPTY;