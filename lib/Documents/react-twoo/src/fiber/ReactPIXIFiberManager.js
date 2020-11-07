/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../../node_modules/pixi.js/lib/index.js');
var methods = require('../shared/methods.js');
var props = require('../shared/props.js');
var components = require('../shared/components.js');
var events = require('../shared/events.js');
var types = require('../shared/types.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// import {forceRender} from '../utils/renderAnimation'

var getPixiClassName = function getPixiClassName(type) {
  return type.charAt(0).toUpperCase() + type.slice(1);
};

var getDefaultProps = function getDefaultProps(node) {
  return index[node.constructor.name] ? index[node.constructor.name].defaultProps : {};
};

var applyMethodsToInstance = function applyMethodsToInstance(host, type, props) {
  var className = getPixiClassName(type); // recursive

  var findMethods = function findMethods(graphics, props) {
    React__default['default'].Children.map(props.children, function (child) {
      if (methods.METHODS[className][child.type]) {
        methods.METHODS[className][child.type](child.props)(host);
      } else {
        console.error("metode <".concat(child.type, "/> of class <").concat(className.toLowerCase(), "/> is not descripted in ../shared/methods"));
      }

      findMethods(graphics, child.props);
    });
  };

  findMethods(host, props);
};
var finalizeInitialChildren = function finalizeInitialChildren(node, type, props) {
  if (type === types.TYPES.Div) { node.applyStyle(); }
};
var createElement = function createElement(type, props, root) {
  // console.log('METHODS[type]',type,METHODS[type],METHODS)
  var component = null;

  if (components.COMPONENTS[type]) {
    component = components.COMPONENTS[type](props);
    component.stage = root;

    if (props.pluginName) {
      console.log('pluginName::::', props.pluginName, component);
      component.pluginName = props.pluginName;
    }
  } // const component  =  COMPONENTS[type] ? COMPONENTS[type](props) : COMPONENTS.default(props)   
  // component.stage = root;


  return component;
};
var createTextElement = function createTextElement(text, style) {
  return new undefined(text, style);
};
var appendChild = function appendChild(parent, node) {
  if (node !== null) { parent.addChild(node); }
};
var updateZBuffer = function updateZBuffer(node) {
  return node.children && node.children.sort ? node.children.sort(function (a, b) {
    a.zBuffer = a.zBuffer || 0;
    b.zBuffer = b.zBuffer || 0;
    return b.zBuffer - a.zBuffer;
  }) : 0;
};
var transferDisplayObjectPropsByName = function transferDisplayObjectPropsByName(node, newProps, oldProps) {
  var propsToTransfer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : props.DISPLAY_OBJECT_PROPS;
  var allPropsTotransfer = Object.assign(propsToTransfer, getDefaultProps(node)); // if(newProps.anchor){
  //     console.log( node.anchor instanceof PIXI.ObservablePoint )
  //     debugger
  // }
  // console.log(newProps)

  for (var propname in allPropsTotransfer) {
    if (typeof newProps[propname] !== 'undefined') {
      if (node[propname] instanceof undefined) {
        // console.log("setObservable",`node[${propname}].set(${newProps[propname]})`,node,newProps[propname])
        if (Array.isArray(newProps[propname])) {
          var _node$propname;

          (_node$propname = node[propname]).set.apply(_node$propname, _rollupPluginBabelHelpers.toConsumableArray(newProps[propname]));
        } else {
          var _node$propname2;

          (_node$propname2 = node[propname]).set.apply(_node$propname2, _rollupPluginBabelHelpers.toConsumableArray(Object.values(newProps[propname])));
        }
      } else if (propname === 'filters') {
        node[propname] = Array.isArray(newProps[propname]) ? newProps[propname] : newProps[propname].toJS();
      } else if (propname === 'pluginName') ; else {
        if (oldProps === null || newProps[propname] !== oldProps[propname]) {
          // if(propname === 'height') console.log('clip:propname',propname,node,node[propname],newProps[propname])
          node[propname] = newProps[propname];
        } // if( oldProps === null || newProps[propname] !== oldProps[propname]) {
        //     node[propname] = newProps[propname];
        // }

      }
    } else if (typeof propsToTransfer[propname] !== 'undefined') {
      //if( node[propname] === undefined)console.log('node[propname]',propsToTransfer[propname])
      // the field we use previously but not any more. reset it to some default value
      // (unless the default is undefined)
      if (node[propname] === undefined) { node[propname] = propsToTransfer[propname]; } //    if(oldProps ===  null ) node[propname] = propsToTransfer[propname];
    }
  }
}; // loops on enterframe (need optimalisation)

var transferEvents = function transferEvents(node, props) {
  events.HANDLERS.forEach(function (pixieventtype) {
    if (typeof props[pixieventtype] !== 'undefined') {
      var pixievent = pixieventtype.toLowerCase().substring(2);
      node.interactive = true;
      node[pixievent] = null;
      delete node[pixievent];
      node[pixievent] = props[pixieventtype]; // node.accessibleTitle="button";
      // node.accessibleHint='eraerezrrez'
      // node.accessible =ture
      // node.interactive =true
      // node.button= true
      // console.log('pixievent',pixievent,node[pixievent])
    } else {
      var _pixievent = pixieventtype.toLowerCase().substring(2);

      delete node[_pixievent];
    }
  });
};
var renderNodes = function renderNodes(stage) {//  forceRender(getRender(stage),stage)
};
var checkIfNodeHasMethods = function checkIfNodeHasMethods(type) {
  return methods.METHODS[getPixiClassName(type)];
};

exports.appendChild = appendChild;
exports.applyMethodsToInstance = applyMethodsToInstance;
exports.checkIfNodeHasMethods = checkIfNodeHasMethods;
exports.createElement = createElement;
exports.createTextElement = createTextElement;
exports.finalizeInitialChildren = finalizeInitialChildren;
exports.renderNodes = renderNodes;
exports.transferDisplayObjectPropsByName = transferDisplayObjectPropsByName;
exports.transferEvents = transferEvents;
exports.updateZBuffer = updateZBuffer;
