import React, { Component } from 'react';
import DistortionHoverFilter from './DistortionHoverFilter'
import * as PIXI from 'pixi.js'

//http://www.lafamiliaxsiempre.cl/lookbook
//http://super16.dk/medlemmer/glen-bay-grant
//https://gl-transitions.com/editor/directionalwarp?direction=-1,0
//https://gl-transitions.com/editor/crosswarp

// !!!!
//https://videohive.net/item/handy-seamless-transitions-pack-script/18967340?irgwc=1&clickid=0giS-aX0JQ2eUc10bqVBhWPIUkgzyHwI-QdBQs0&iradid=275988&irpid=1143794&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1143794&utm_medium=affiliate&utm_source=impact_radius

var loader = PIXI.loader;

export default class DistortionHoverFilterComponent extends Component {
	constructor(props){
        super(props)
        
		this.filter =  new DistortionHoverFilter()
	}
	componentWillMount(){
        window.addEventListener('mousemove',this.handleMouse)
    }
    handleMouse = (e)=>{
        this.filter.uniforms.dispFactor = e.clientX/100 ;
        this.filter.uniforms.effectFactor = e.clientX/100;
        this.filter.mouse =  [e.clientX/window.innerWidth,e.clientY/window.innerHeight];
    }
    _loader = []
    _loaderQue = [];
    add = (url,index) =>{
        const hasAsset = this._loader.find(x=>x.url === url) ? true : false;
        console.log('add',url,hasAsset)
        if(!hasAsset){
            if(!loader.isLoading) {
                this._loader.push({url,index}) 
                loader.add(url,index);
            }else{
                this._loaderQue.push({url,index}) 
            }
        }; 
    }
	update = (nextProps) =>{
	
        this.filter.offset =  nextProps.offset;
        
        if(nextProps.url) {         
           this.add(nextProps.url,0)
        }
        if(nextProps.url2) {
            this.add(nextProps.url2,1)
        }
        if(nextProps.url3) {
            console.log('nextProps.url3',nextProps.url3)
            this.add(nextProps.url3,2)
        }
        
        loader.once('complete',()=>{
            loader.isLoading = false;
            if(this._loaderQue.length > 0){
                this._loaderQue.forEach(item=>this.add(item.url,item.index));
            }

        });
        if(!loader.isLoading){
            loader.isLoading = true;
            loader.load((data)=>this.handleLoaded(data))
        }
       

    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.update(nextProps)
    }
	componentDidMount(){

        this.update(this.props);
        loader.on('error', this.handleError, this);
        // this.container.anchor.set(0.5);
	}
	componentWillUnmount(){
    }
    
    renderChidren(children){
       return React.Children.map(children, child =>  React.cloneElement(child,{...child.props,filters:[this.filter]},child.props.children))
       
    }
    handleError =  (error,loader)=>{
        console.log('handleError',error,loader);
        loader.isLoading = false;
        
   
    }   
    handleLoaded = (loader) =>{
        
        this._loader.forEach(({url,index})=>{
            console.log('handleLoaded',index)
            const resource = loader.resources[url];
            if(resource){
            const {texture} = resource;
            const sprite = new PIXI.Sprite(texture);
                if(index === 0){
                    this.filter.texture = sprite;
                    return;
                }
                if(index === 1){
                    this.filter.texture2 = sprite;
                    return;
                }
                if(index === 2){
                    this.filter.disp = sprite;
                    return;
                }
            }else{
                console.alert(`Texture does not exist: ${url}`)
            }
        })
      
    }
    load(url,index){
        PIXI.loader.add(url).load((data)=>this.handleLoaded(data,index));

    }
   
    // render() {
	// 	return <div ref={ref=>this.container=ref}  filters={[this.filter]}>{this.props.children}</div>
    // }
    
	render() {
        console.log('(this.props.children',this.props.children)
		return this.renderChidren(this.props.children)
	}
}

DistortionHoverFilterComponent.defaultProps = {
    pause:false,
    offset:0,
}