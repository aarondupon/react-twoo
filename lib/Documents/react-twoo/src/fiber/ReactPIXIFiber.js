/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

var index = require('../../node_modules/react-reconciler/index.js');
require('../../../../node_modules/pixi.js/lib/index.js');
var HostConfig = require('./HostConfig.js');
require('./setupDevtools.pixi.js');

// import pkg from "../../../../package.json";
var ReactPIXIRender = index['default'](HostConfig); // ReactPIXIRender.injectIntoDevTools({
//   findFiberByHostInstance: ReactPIXIRender.findFiberByHostInstance,
//   bundleType: 1,//__DEV__ ? 1 : 0,
//   version: pkg.version,
//   rendererPackageName: pkg.name,
// });

ReactPIXIRender.injectIntoDevTools({
  bundleType: 1,
  // 0 for PROD, 1 for DEV
  version: '16.5.2',
  // version for your renderer
  rendererPackageName: 'react-pixi-renderer',
  // package name
  findHostInstanceByFiber: ReactPIXIRender.findFiberByHostInstance // host instance (root)
  // findFiberByHostInstance(instance: Instance | TextInstance): Fiber | null {
  //   debugger
  //   if (!findFiberByHostInstance) {
  //     // Might not be implemented by the renderer.
  //     return null;
  //   }
  //   return findFiberByHostInstance(instance);
  // },

}); // window.__REACT_DEVTOOLS_GLOBAL_HOOK__.sub('highlight', ({node}) => {
