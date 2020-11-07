// import pkg from "../../../../package.json";
// import invariant from "fbjs/lib/invariant";

import reconciler from 'react-reconciler';
import HostConfig from './HostConfig';
import * as PIXI from 'pixi.js';
// import './setupDevtools.pixi';
const ReactPIXIRender = reconciler(HostConfig);


   // ReactPIXIRender.injectIntoDevTools({
  //   findFiberByHostInstance: ReactPIXIRender.findFiberByHostInstance,
  //   bundleType: 1,//__DEV__ ? 1 : 0,
  //   version: pkg.version,
  //   rendererPackageName: pkg.name,
  // });
  ReactPIXIRender.injectIntoDevTools({
    bundleType: 1, // 0 for PROD, 1 for DEV
    version: '16.5.2', // version for your renderer
    rendererPackageName: 'react-pixi-renderer', // package name
    findHostInstanceByFiber: ReactPIXIRender.findFiberByHostInstance, // host instance (root)
    // findFiberByHostInstance(instance: Instance | TextInstance): Fiber | null {
    //   debugger
    //   if (!findFiberByHostInstance) {
    //     // Might not be implemented by the renderer.
    //     return null;
    //   }
    //   return findFiberByHostInstance(instance);
    // },
  })

 

  
  // window.__REACT_DEVTOOLS_GLOBAL_HOOK__.sub('highlight', ({node}) => {
  //     debugger
  //   // UIManager.setBoundingBoxVisible(node, true);
  //   currentHighlight = node;
    
  // });
  // window.__REACT_DEVTOOLS_GLOBAL_HOOK__.sub('hideHighlight', () => {
  //   debugger
  //   if (currentHighlight !== null) {
  //   //   UIManager.setBoundingBoxVisible(currentHighlight, false);
  //   }
  //   currentHighlight = null;
  // });
  // window.__REACT_DEVTOOLS_GLOBAL_HOOK__.on('react-devtools', agent => {
  //   debugger
  //   //   const NativeModules = require('NativeModules');
  //   //   const {UIManager} = NativeModules;
  //     let currentHighlight = null;
  //     agent.sub('highlight', ({node}) => {
  //         debugger
  //       // UIManager.setBoundingBoxVisible(node, true);
  //       currentHighlight = node;
  //       debugger
  //     });
  //     agent.sub('hideHighlight', () => {
  //       if (currentHighlight !== null) {
  //       //   UIManager.setBoundingBoxVisible(currentHighlight, false);
  //       }
  //       currentHighlight = null;
  //     });
  //   });

const render = (reactElement, node, callback) => {
  if(!node.container){
    // console.log('createContainer')
      node.container = ReactPIXIRender.createContainer(node,false);
  }
  //
  // console.log('ReactPIXIRender',reactElement,node,ReactPIXIRender.updateContainer)
  return ReactPIXIRender.updateContainer(reactElement, node.container, null, callback);
}

const createElement = (type,props,root)=>{
  
  HostConfig.createInstance(type,props,root);
}

const createPortal = (reactElement, node, callback) => {
  
  // const newRenderLayer = new  PIXI.Sprite()
  // node.addChild(newRenderLayer)
  // newRenderLayer.container = ReactPIXIRender.createContainer(newRenderLayer,false);
  // ReactPIXIRender.updateContainer(reactElement, newRenderLayer.container, null, callback);
  // return newRenderLayer

  /**
   * LARED
   */
  const newRenderLayer = new  PIXI.Sprite();
  node.addChild(newRenderLayer)
  /**
   * DIRECT ON STAGE
   */

  if(!newRenderLayer.container){
    // console.log('createContainer')
    newRenderLayer.container = ReactPIXIRender.createContainer(newRenderLayer,false);
  }
  // console.log('ReactPIXIRender',reactElement,node,ReactPIXIRender.updateContainer)
   ReactPIXIRender.updateContainer(reactElement, newRenderLayer.container, null, callback);
  return newRenderLayer;
  // node.container = ReactPIXIRender.createContainer(node,false);
  // ReactPIXIRender.updateContainer(reactElement,node.container, null, callback);
  // return node;
}

const updatePortal = (reactElement, node, callback) => {
  // console.log('updatePortal::',reactElement,reactElement.type,node.container) 
  ReactPIXIRender.updateContainer(reactElement, node.container, null, callback);
  // return node;
}

var RendererPublicAPI = {
    render,
    createElement,
    updatePortal,
    createPortal,
  };
  

export default RendererPublicAPI