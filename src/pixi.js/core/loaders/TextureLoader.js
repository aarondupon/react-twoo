const VIDEO_TEXTURE_ADDED = 'videoTextureAdded';
const VIDEO_TEXTURE_REMOVED = 'videoTextureRemoved';
const TEXTURE_ADDED = 'textureAdded';
const TEXTURE_REMOVED = 'TEXTURE_REMOVED';




function endedEventHandler(){
    const {animation} = this;
}

function playEventHandler(){
    const {texture,alias,url} = this;
}

function pauseEventHandler(){
    const {texture,alias,url,animation} = this;
}

function timeupdate(currentTime){
    const {texture,alias,url,animation} = this;

}

// PIXI.glCore.GLTexture.prototype.upload = function(source)
// {
// 	this.bind();

// 	var gl = this.gl;

// 	gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);

// 	var newWidth = source.videoWidth || source.width;
// 	var newHeight = source.videoHeight || source.height;

// 	if(newHeight !== this.height || newWidth !== this.width || source.videoWidth)
// 	{
// 		gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, source);
// 	}
// 	else
// 	{
//     	gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, this.format, this.type, source);
// 	}

// 	// if the source is a video, we need to use the videoWidth / videoHeight properties as width / height will be incorrect.
// 	this.width = newWidth;
// 	this.height = newHeight;

// };



const getFileType = (url)=>{
    var regex = /.mp4|.webm|.jpg|.png/;
    var found = url.match(regex);
    return found[0]
}

const videoSprites = {}

export default class TextureLoader{
    constructor(uniforms,filter){
        this.filter = filter;
        this.uniforms = uniforms;
        this.cachedTextures = {}
        
        document.addEventListener('click',()=>{
            this._userInteracted = true
        })

    }
    _userInteracted = false;
    _subscribe = null
    subscribe = (subscribe)=>{
       this._subscribe = subscribe;
    }
    next = (event)=>{
      
        if(
            typeof this._subscribe === 'function' 
            ) {
            this._subscribe(event)
        }
        console.log('event',event.type,event.url,event.name)
    }
    removeTexture = (textureData)=>{
        
        const {texture,url,cancel,alias} = textureData;
        const filetype = getFileType(url);
       
        switch (filetype) {
            case '.mp4':
            case '.webm':

                const videoElement = texture.baseTexture.source;
                if(videoElement.nodeName === 'VIDEO'){
                    videoElement.removeEventListener("loadeddata",videoElement._loadeddata)
                    // videoElement.pause();
                    cancel();
                    this.next({type:VIDEO_TEXTURE_REMOVED,video:videoElement,url:url, name:alias})

                }
                break;
        
            default:
            this.next({type:TEXTURE_REMOVED,url:url, name:alias})
                break;
        }
    }
    _prevTextures = {}
    addTextTures = (uniforms,textures,id,onLoaded=()=>{}) => {
            
       if(textures === undefined  || textures === null) return;
        const texturesArr = Array.isArray(textures) ? textures : [textures];
        if(texturesArr.length <= 0) return
        
        texturesArr.forEach((file,i) => {
            const name = Object.keys(file)[0];
            const alias = id ? id : name;
            const url = file[name];

            if(this._prevTextures[alias]  ){
               if(this._prevTextures[alias] ) {
                this.removeTexture(this._prevTextures[alias])
               }
            }
            // loading
            const filetype = getFileType(url);
        
            let texture = this.cachedTextures[url]
            if(texture && texture.textureCacheIds && texture.textureCacheIds[0] === '/assets/demo/demo5-(1).jpg'){
                texture = null
            }

            switch (filetype) {
                case '.mp4':
                case '.webm':
                    let videoElement;
                    if(!texture){
                        const v = document.createElement('video');  
                        v.crossOrigin = "anonymous";
                        v.setAttribute('_GLSL_ID',url)
                        v.muted = true;                      
                        v.src = url;
                        let sprite =  new PIXI.Sprite.from( PIXI.Texture.fromVideo(v,1,false,false));
                        texture = sprite.texture;
                        // UGLY UGLY UGLY !!!!
                        const source = texture.baseTexture.source;
                        this.next({type:VIDEO_TEXTURE_ADDED,video:source,url:url,texture, name:alias})
                        sprite.texture.baseTexture.on('loaded',()=>{
                            const texture =  sprite.texture;
                            this.applyTexture(texture, uniforms, alias, url);
                            texture.valid = true;
                            texture.requiresUpdate = true;
                            const source = texture.baseTexture.source;
                            this.next({type:VIDEO_TEXTURE_ADDED,video:source,url:url,texture, name:alias})
                            this.autoUpdate(texture)
                            
                        })
                        if(sprite.texture.baseTexture.hasLoaded){
                            const texture =  sprite.texture;
                            texture.valid = true;
                            texture.requiresUpdate = true;

                            this.applyTexture(texture, uniforms, alias, url)
                            const source = texture.baseTexture.source;
                            this.next({type:VIDEO_TEXTURE_ADDED,video:source,url:url,texture, name:alias})
                            this.autoUpdate(texture)

                        }
                    }else{
                        this.applyTexture(texture, uniforms, alias, url)
                        const source = texture.baseTexture.source;
                        texture.valid = true;
                        texture.requiresUpdate = true;
                        this.next({type:VIDEO_TEXTURE_ADDED,video:source,url:url,texture, name:alias})
                        this.autoUpdate(texture)
                    }
                    break;
            
                default:        
                    if(!texture){
                        let sprite =  new PIXI.Sprite.from(url);
                        texture =  sprite.texture;
                        sprite.texture.baseTexture.on('loaded',()=>{
                            //const source = texture.baseTexture.source;
                            this.next({type:TEXTURE_ADDED,url:url,texture, name:alias})
                            this.applyTexture(texture, uniforms, alias, url)
                                
                        })
                        if(sprite.texture.baseTexture.hasLoaded){
                            this.next({type:TEXTURE_ADDED,url:url,texture, name:alias})
                            this.applyTexture(texture, uniforms, alias, url)
                        
                        }
                    }else{
                        this.next({type:TEXTURE_ADDED,url:url,texture, name:alias})
                        this.applyTexture(texture, uniforms, alias, url)
                    }

                    
                  
                    this._prevTextures[alias] = {texture,cancel:()=>{},url,alias};
                break;
                } // end switch
                
                texturesArr[i] = texture;          
        }
        );
        return texturesArr.length > 1 ? texturesArr : texturesArr[0] ;
    }
    applyTexture = (texture, uniforms, alias, url, cache = true)=>{
       
        // texture.baseTexture.wrapMode = PIXI.WRAP_MODES.CLAMP;
        
        // if(this.filter && this.filter.renderer) this.filter.renderer.bindTexture(texture)
        // this.bindSampler2D(texture,uniforms,alias)
        if(cache) this.cacheTexture(texture,url,cache)
    }
    cacheTexture = (texture,url)=>{
        this.cachedTextures = {
            ...this.cachedTextures,
            [url]:texture,    
        }
    }
    autoUpdate = (texture)=>{
        
        PIXI.ticker.shared.add( ()=>{
            texture.baseTexture.update()
        }, this );
    }
    bindSampler2D  = (texture, uniforms,alias)=>{
        // add textrue to unifor
        // if(uniforms[alias] ) uniforms[alias]  = PIXI.Texture.EMPTY ;
        if(!uniforms[alias] ){
            uniforms[alias] = {type: 'sampler2D', value:texture};``
        }
       
        texture.baseTexture.wrapMode = PIXI.WRAP_MODES.CLAMP; 
        this.updateUniforms(texture,alias,uniforms); 
    }
    
    updateUniforms = (texture,name,uniforms)=>{
            const {width,height} = texture;

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

            const scale = [(ws/sx),(hs/sy)];//[(ws/sx)*ws,(hs/sy)*hs]
            if(!uniforms[`scale_${name}`] ){
                uniforms[`scale_${name}`] = {type:'f2', value:scale}
            }else{
                uniforms[`scale_${name}`] = scale
            }
            // center
            const wn = sx;//(ws/sx)*ws;
            const hn = sy;
            // const tx = ( -(ws - wn)/2)/ws;
            // const ty = ((ws-hn)/2)/ws;
            const tx = ((ws/2)-(wn/2))/wn ///((- ((ws - wn)/2))/ws)+;
            const ty = ((hs-hn)/2)/ws;
            if(! uniforms[`transform_${name}`]){
                uniforms[`transform_${name}`] = {type:'f2', value:[tx,ty]}
            }else{                
                uniforms[`transform_${name}`] = [tx,ty]
            }
            console.log('size',tx,ty)//,{wi,hi,ri,rs})
            uniforms[name] = texture;
    }
}


