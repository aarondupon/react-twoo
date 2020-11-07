/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

require('react');
var mapRendererToStage = require('../common/utils/mapRendererToStage.js');
var ReactPIXIFiberManager = require('./ReactPIXIFiberManager.js');

var HostConfig = {
  appendInitialChild: function appendInitialChild(parent, child) {
    console.log('appendInitialChild::', parent, child);

    ReactPIXIFiberManager.appendChild(parent, child);
  },
  appendChild: function appendChild(parent, child) {
    console.log('appendChild');

    ReactPIXIFiberManager.appendChild(parent, child); // forceUpdate(parent.stage)

  },
  setInitialProperties: function setInitialProperties() {},
  clearContainer: function clearContainer(element) {},
  removeChild: function removeChild(parent, child) {
    if (parent && child && typeof parent.removeChild === "function") {
      var removeChildren = function removeChildren(parent) {
        parent.children.forEach(function (child, i) {
          removeChildren(child);
          parent.removeChild(child);
          child.destroy({
            children: true,
            texture: true,
            baseTexture: true
          });
        });
      };

      removeChildren(child);
      parent.removeChild(child);
      child.destroy({
        children: true,
        texture: true,
        baseTexture: true
      }); //console.log('removeChild:', parent,child)
    }
  },
  removeChildFromContainer: function removeChildFromContainer(parent, child) {
    if (parent && child && typeof parent.removeChild === "function") {
      parent.removeChild(child);
    } // console.log('removeChildFromContainer:', child)

  },
  createInstance: function createInstance(type, newProps, rootContainerInstance, _currentHostContext, workInProgress) {
    var node = ReactPIXIFiberManager.createElement(type, newProps, rootContainerInstance);

    if (node) {
      ReactPIXIFiberManager.transferDisplayObjectPropsByName(node, newProps, null);
      ReactPIXIFiberManager.updateZBuffer(node);
      ReactPIXIFiberManager.transferEvents(node, newProps);
      ReactPIXIFiberManager.renderNodes(node.stage);
    }

    return node;
  },
  commitUpdate: function commitUpdate(node, updatePayload, type, oldProps, nextProps, internalInstanceHandle) {
    if (type === 'graphics') {
      ReactPIXIFiberManager.applyMethodsToInstance(node, type, nextProps);
    }

    ReactPIXIFiberManager.transferDisplayObjectPropsByName(node, nextProps, oldProps);
    ReactPIXIFiberManager.updateZBuffer(node);
    ReactPIXIFiberManager.transferEvents(node, nextProps); // debugger

    ReactPIXIFiberManager.renderNodes(node.stage);
  },
  commitTextUpdate: function commitTextUpdate(node, oldPayload, updatePayload) {
    node.text = updatePayload;
    ReactPIXIFiberManager.renderNodes(node.stage);
  },
  appendChildToContainer: function appendChildToContainer(parent, node) {
    ReactPIXIFiberManager.appendChild(parent, node);
  },
  createTextInstance: function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
    return ReactPIXIFiberManager.createTextElement(text);
  },
  finalizeInitialChildren: function finalizeInitialChildren(node, type, props) {
    if (ReactPIXIFiberManager.checkIfNodeHasMethods(type)) {
      //if (type === 'graphics') {
      ReactPIXIFiberManager.applyMethodsToInstance(node, type, props);
    } else {
      ReactPIXIFiberManager.finalizeInitialChildren(node, type);
    } // BUGY SHIT !!!!


    if (props.onLoaded) {
      var renderer = mapRendererToStage.getRender(node.stage);
      props.onLoaded(node, renderer);
    }

    return false;
  },
  getPublicInstance: function getPublicInstance(inst) {
    return inst;
  },
  prepareForCommit: function prepareForCommit() {// noop
  },
  prepareUpdate: function prepareUpdate(wordElement, type, oldProps, newProps) {
    return true;
  },
  resetAfterCommit: function resetAfterCommit(stage) {// renderNodess(stage)//stage.__render()
  },
  resetTextContent: function resetTextContent(wordElement) {// noop
  },
  getRootHostContext: function getRootHostContext(rootInstance) {
    var renderer = mapRendererToStage.getRender(rootInstance);
    return {
      renderer: renderer
    }; // You can use this 'rootInstance' to pass data from the roots.
  },
  getChildHostContext: function getChildHostContext(parentHostContext, type, rootContainerInstance) {
    return parentHostContext;
  },
  shouldSetTextContent: function shouldSetTextContent(type, props) {
    return false;
  },
  now: function now() {
    return Date.now;
  },
  supportsMutation: true
};

module.exports = HostConfig;
