export default class TextureLoader{
    constructor(textures,uniforms,filter){
        this.filter = filter;
        this.uniforms = uniforms;
        this.cachedTextures = {}
        this.addTextTures(uniforms,textures);
    }
    addTextTures = (uniforms,textures,id) => {
       if(textures === undefined  || textures === null) return;
        const texturesArr = Array.isArray(textures) ? textures : [textures];
        if(texturesArr.length <= 0) return
        texturesArr.forEach((file,i) => {

            const name = Object.keys(file)[0];

            const alias = id ? id : name;
            const url = file[name];
        
           
           if( this.cachedTextures[url]){
            // from cache
            const texture = this.cachedTextures[url];
            
            //console.log('loaded',alias,name, url);
            this.applyTexture(texture, uniforms, alias,url)
           }else{
            // loading
            const sprite = new PIXI.Sprite.fromImage(url);
            sprite.texture.baseTexture.on('loaded',()=>{
                //console.log('loaded',texture);
                const texture =  sprite.texture;
                this.applyTexture(texture, uniforms, alias, url)
            })
            if(sprite.texture.baseTexture.hasLoaded){
                //console.log('hasloaded',texture);
                const texture =  sprite.texture;
                this.applyTexture(texture, uniforms, alias, url)
            }
           }
        });
    }
    applyTexture = (texture, uniforms, alias, url)=>{
        texture.baseTexture.wrapMode = PIXI.WRAP_MODES.CLAMP;
        if(this.filter && this.filter.renderer) this.filter.renderer.bindTexture(texture)
        this.bindSampler2D(texture,uniforms,alias)
        this.cacheTexture(texture,url)
    }
    cacheTexture = (texture,url)=>{
        this.cachedTextures = {
            ...this.cachedTextures,
            [url]:texture,
        }
    }
    bindSampler2D  = (texture, uniforms,alias)=>{
        // add textrue to unifor
        if(!uniforms[alias] ){
            uniforms[alias] = {type: 'sampler2D', value:texture};``
        }
        texture.baseTexture.wrapMode = PIXI.WRAP_MODES.CLAMP; 
        this.updateUniforms(texture,alias,uniforms);       
    }
    updateUniforms = (texture,name,uniforms)=>{
             const {width,height} = texture;
            //  console.log('width,height',width,height)
           // down vote
            // accepted
            // Generic as can be:
            // Image data: (wi, hi) and define ri = wi / hi
            // Screen resolution: (ws, hs) and define rs = ws / hs
            // Scaled image dimensions:
            const wi = width;
            const hi = height;
            const ws = window.innerWidth;
            const hs = window.innerHeight;
            
            const ri = wi/hi;
            const rs = ws/hs;
            
            // texture needs downscale
            const [sx,sy] = rs < ri ? [wi * hs/hi, hs] : [ws, hi * ws/wi];

            if(!uniforms[`scale_${name}`] ){
                uniforms[`scale_${name}`] = {type:'f2', value:[(ws/sx)*ws,(hs/sy)*hs]}
            }else{
                uniforms[`scale_${name}`] = [(ws/sx)*ws,(hs/sy)*hs]
            }
            // center
            const wn = sx;//(ws/sx)*ws;
            const hn = sy;
            const tx = -(ws - wn)/2;
            const ty = (ws-hn)/2;
            if(! uniforms[`transform_${name}`]){
                uniforms[`transform_${name}`] = {type:'f2', value:[tx,ty]}
            }else{                
                uniforms[`transform_${name}`] = [tx,ty]
            }

            uniforms[name] = texture;
    }
}

