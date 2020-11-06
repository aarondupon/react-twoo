import React from 'react';
import * as PIXI from 'pixi.js';
import {METHODS} from '../shared/methods';
import {DISPLAY_OBJECT_PROPS} from '../shared/props';
import {COMPONENTS} from '../shared/components';
import {HANDLERS} from '../shared/events';
import {TYPES} from '../shared/types';

import {getRender} from '../common/utils/mapRendererToStage';
// import {renderAnimationOnce} from '../utils/renderAnimation'
// import {forceRender} from '../utils/renderAnimation'

const getPixiClassName = type => type.charAt(0).toUpperCase()+type.slice(1);
const getDefaultProps  = node => PIXI[node.constructor.name] ? PIXI[node.constructor.name].defaultProps : {}
export const applyMethodsToInstance = (host,type,props) => {
    const className = getPixiClassName(type);
    // recursive
    const findMethods = (graphics,props)=>{
        React.Children.map(props.children,(child)=>{
            if(METHODS[className][child.type]){
                METHODS[className][child.type](child.props)(host)
            }else{
                console.error(`metode <${child.type}/> of class <${className.toLowerCase()}/> is not descripted in ../shared/methods`)
            }
            findMethods(graphics,child.props)
        })
    }
    findMethods(host,props);
}

export const finalizeInitialChildren = (node,type,props) =>{
    if(type === TYPES.Div) node.applyStyle()
}
    

export const createElement = (type,props,root)=>{
    // console.log('METHODS[type]',type,METHODS[type],METHODS)
    let component = null;
    if( COMPONENTS[type]){
        component = COMPONENTS[type](props);
        component.stage = root;
        if(props.pluginName){
            console.log('pluginName::::',props.pluginName,component)
            component.pluginName = props.pluginName;
        }
       
    }
    
    // const component  =  COMPONENTS[type] ? COMPONENTS[type](props) : COMPONENTS.default(props)   
    // component.stage = root;
    return component
}

export const createTextElement = (text,style)=>{
    return new PIXI.Text(text,style);
}

export const appendChild = (parent,node) =>{
    if(node !== null ) parent.addChild(node);
}

export const updateZBuffer = (node) =>
    node.children && node.children.sort ? 
    node.children.sort((a, b) => {
      a.zBuffer = a.zBuffer || 0;
      b.zBuffer = b.zBuffer || 0;
      return b.zBuffer - a.zBuffer;
    }) : 0 ;


export const transferDisplayObjectPropsByName = (
        node,
        newProps,
        oldProps,
        propsToTransfer = DISPLAY_OBJECT_PROPS
    ) => {
        
        const allPropsTotransfer = Object.assign(propsToTransfer,getDefaultProps(node))
        // if(newProps.anchor){
        //     console.log( node.anchor instanceof PIXI.ObservablePoint )
        //     debugger
        // }
       // console.log(newProps)
        for (const propname in allPropsTotransfer) {
           
            if (typeof newProps[propname] !== 'undefined') {
               
                if(node[propname] instanceof PIXI.ObservablePoint){
                    // console.log("setObservable",`node[${propname}].set(${newProps[propname]})`,node,newProps[propname])
                    if(Array.isArray(newProps[propname])){
                        node[propname].set(...newProps[propname]);
                    }else{
                        node[propname].set(...Object.values(newProps[propname]));
                    }
                  
                        
                } else if (propname === 'filters'  ) {
                   
                    node[propname] = Array.isArray(newProps[propname])
                        ? newProps[propname]
                        : newProps[propname].toJS();
                } else if (propname === 'pluginName'){
                    
                } else {
                    if( oldProps === null || newProps[propname] !== oldProps[propname]) {
                        // if(propname === 'height') console.log('clip:propname',propname,node,node[propname],newProps[propname])

                        node[propname] = newProps[propname];
                    }
                    // if( oldProps === null || newProps[propname] !== oldProps[propname]) {
                    //     node[propname] = newProps[propname];
                    // }
                    
                }
            } else if (typeof propsToTransfer[propname] !== 'undefined') {
                //if( node[propname] === undefined)console.log('node[propname]',propsToTransfer[propname])
                // the field we use previously but not any more. reset it to some default value
                // (unless the default is undefined)
               if( node[propname] === undefined)  node[propname] = propsToTransfer[propname];
               
            //    if(oldProps ===  null ) node[propname] = propsToTransfer[propname];
            }
        }
    };

    // loops on enterframe (need optimalisation)
    export const transferEvents = (node,props) =>{
        HANDLERS.forEach((pixieventtype) => {
      
          if (typeof props[pixieventtype] !== 'undefined') {
            const pixievent = pixieventtype.toLowerCase().substring(2);
            node.interactive = true;
            node[pixievent] = null;
            delete node[pixievent];
            node[pixievent] = props[pixieventtype];
            
            // node.accessibleTitle="button";
            // node.accessibleHint='eraerezrrez'
            // node.accessible =ture
            // node.interactive =true
            // node.button= true
            // console.log('pixievent',pixievent,node[pixievent])
          } else {
            const pixievent = pixieventtype.toLowerCase().substring(2);
            delete node[pixievent];
          }
        });
    }

    export const renderNodes = (stage)=>{
        //  forceRender(getRender(stage),stage)
    }
       
    
    export const forceUpdate = (stage)=>{
        getRender(stage).render(stage);  
    }
        
    export const checkIfNodeHasMethods = (type) =>{
         return METHODS[getPixiClassName(type)]
    }