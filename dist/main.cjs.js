/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('pixi.js'), require('css-to-react-native'), require('parse-css-transition'), require('fbjs/lib/camelizeStyleName'), require('shallowequal'), require('pixi.js/lib/core'), require('animate'), require('plot'), require('prop-types'), require('react-pixi-renderer')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'pixi.js', 'css-to-react-native', 'parse-css-transition', 'fbjs/lib/camelizeStyleName', 'shallowequal', 'pixi.js/lib/core', 'animate', 'plot', 'prop-types', 'react-pixi-renderer'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['react-twoo'] = {}, global.React, global.PIXI, global.css, null, null, global.shallowequal, global.core$2, global.animate$1, global.plot, global.PropTypes, global.reactPixiRenderer));
}(this, (function (exports, React, PIXI$1, css, parseCsstransition, camelizeStyleName, shallowequal, core$2, animate$1, plot, propTypes, reactPixiRenderer) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PIXI__namespace = /*#__PURE__*/_interopNamespace(PIXI$1);
  var css__default = /*#__PURE__*/_interopDefaultLegacy(css);
  var shallowequal__default = /*#__PURE__*/_interopDefaultLegacy(shallowequal);
  var animate__default = /*#__PURE__*/_interopDefaultLegacy(animate$1);
  var plot__default = /*#__PURE__*/_interopDefaultLegacy(plot);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /** @license React v0.26.0
   * react-reconciler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  module.exports = function $$$reconciler($$$hostConfig) {
    var exports = {};

    var aa = require("object-assign"),
        ba = require("react"),
        m = require("scheduler");

    function q(a) {
      var arguments$1 = arguments;

      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
        b += "&args[]=" + encodeURIComponent(arguments$1[c]);
      }

      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }

    var ca = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        da = 60103,
        ea = 60106,
        fa = 60107,
        ha = 60108,
        ia = 60114,
        ja = 60109,
        ka = 60110,
        la = 60112,
        ma = 60113,
        na = 60120,
        oa = 60115,
        pa = 60116,
        qa = 60121,
        ra = 60129,
        sa = 60130,
        ta = 60131;

    if ("function" === typeof Symbol && Symbol["for"]) {
      var r = Symbol["for"];
      da = r("react.element");
      ea = r("react.portal");
      fa = r("react.fragment");
      ha = r("react.strict_mode");
      ia = r("react.profiler");
      ja = r("react.provider");
      ka = r("react.context");
      la = r("react.forward_ref");
      ma = r("react.suspense");
      na = r("react.suspense_list");
      oa = r("react.memo");
      pa = r("react.lazy");
      qa = r("react.block");
      r("react.scope");
      ra = r("react.debug_trace_mode");
      sa = r("react.offscreen");
      ta = r("react.legacy_hidden");
    }

    var ua = "function" === typeof Symbol && Symbol.iterator;

    function va(a) {
      if (null === a || "object" !== _typeof(a)) { return null; }
      a = ua && a[ua] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }

    function wa(a) {
      if (null == a) { return null; }
      if ("function" === typeof a) { return a.displayName || a.name || null; }
      if ("string" === typeof a) { return a; }

      switch (a) {
        case fa:
          return "Fragment";

        case ea:
          return "Portal";

        case ia:
          return "Profiler";

        case ha:
          return "StrictMode";

        case ma:
          return "Suspense";

        case na:
          return "SuspenseList";
      }

      if ("object" === _typeof(a)) { switch (a.$$typeof) {
        case ka:
          return (a.displayName || "Context") + ".Consumer";

        case ja:
          return (a._context.displayName || "Context") + ".Provider";

        case la:
          var b = a.render;
          b = b.displayName || b.name || "";
          return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

        case oa:
          return wa(a.type);

        case qa:
          return wa(a._render);

        case pa:
          b = a._payload;
          a = a._init;

          try {
            return wa(a(b));
          } catch (c) {}

      } }
      return null;
    }

    function xa(a) {
      var b = a,
          c = a;
      if (a.alternate) { for (; b["return"];) {
        b = b["return"];
      } } else {
        a = b;

        do {
          b = a, 0 !== (b.flags & 1026) && (c = b["return"]), a = b["return"];
        } while (a);
      }
      return 3 === b.tag ? c : null;
    }

    function ya(a) {
      if (xa(a) !== a) { throw Error(q(188)); }
    }

    function za(a) {
      var b = a.alternate;

      if (!b) {
        b = xa(a);
        if (null === b) { throw Error(q(188)); }
        return b !== a ? null : a;
      }

      for (var c = a, d = b;;) {
        var e = c["return"];
        if (null === e) { break; }
        var f = e.alternate;

        if (null === f) {
          d = e["return"];

          if (null !== d) {
            c = d;
            continue;
          }

          break;
        }

        if (e.child === f.child) {
          for (f = e.child; f;) {
            if (f === c) { return ya(e), a; }
            if (f === d) { return ya(e), b; }
            f = f.sibling;
          }

          throw Error(q(188));
        }

        if (c["return"] !== d["return"]) { c = e, d = f; }else {
          for (var g = !1, h = e.child; h;) {
            if (h === c) {
              g = !0;
              c = e;
              d = f;
              break;
            }

            if (h === d) {
              g = !0;
              d = e;
              c = f;
              break;
            }

            h = h.sibling;
          }

          if (!g) {
            for (h = f.child; h;) {
              if (h === c) {
                g = !0;
                c = f;
                d = e;
                break;
              }

              if (h === d) {
                g = !0;
                d = f;
                c = e;
                break;
              }

              h = h.sibling;
            }

            if (!g) { throw Error(q(189)); }
          }
        }
        if (c.alternate !== d) { throw Error(q(190)); }
      }

      if (3 !== c.tag) { throw Error(q(188)); }
      return c.stateNode.current === c ? a : b;
    }

    function Aa(a) {
      a = za(a);
      if (!a) { return null; }

      for (var b = a;;) {
        if (5 === b.tag || 6 === b.tag) { return b; }
        if (b.child) { b.child["return"] = b, b = b.child; }else {
          if (b === a) { break; }

          for (; !b.sibling;) {
            if (!b["return"] || b["return"] === a) { return null; }
            b = b["return"];
          }

          b.sibling["return"] = b["return"];
          b = b.sibling;
        }
      }

      return null;
    }

    function Ba(a) {
      a = za(a);
      if (!a) { return null; }

      for (var b = a;;) {
        if (5 === b.tag || 6 === b.tag) { return b; }
        if (b.child && 4 !== b.tag) { b.child["return"] = b, b = b.child; }else {
          if (b === a) { break; }

          for (; !b.sibling;) {
            if (!b["return"] || b["return"] === a) { return null; }
            b = b["return"];
          }

          b.sibling["return"] = b["return"];
          b = b.sibling;
        }
      }

      return null;
    }

    function Ca(a, b) {
      for (var c = a.alternate; null !== b;) {
        if (b === a || b === c) { return !0; }
        b = b["return"];
      }

      return !1;
    }

    var Da = $$$hostConfig.getPublicInstance,
        Ea = $$$hostConfig.getRootHostContext,
        Fa = $$$hostConfig.getChildHostContext,
        Ga = $$$hostConfig.prepareForCommit,
        Ha = $$$hostConfig.resetAfterCommit,
        Ia = $$$hostConfig.createInstance,
        Ja = $$$hostConfig.appendInitialChild,
        Ka = $$$hostConfig.finalizeInitialChildren,
        La = $$$hostConfig.prepareUpdate,
        Ma = $$$hostConfig.shouldSetTextContent,
        Na = $$$hostConfig.createTextInstance,
        Pa = $$$hostConfig.scheduleTimeout,
        Qa = $$$hostConfig.cancelTimeout,
        Ra = $$$hostConfig.noTimeout,
        Sa = $$$hostConfig.isPrimaryRenderer,
        Ta = $$$hostConfig.supportsMutation,
        Ua = $$$hostConfig.supportsPersistence,
        Va = $$$hostConfig.supportsHydration,
        Wa = $$$hostConfig.getInstanceFromNode,
        Xa = $$$hostConfig.makeOpaqueHydratingObject,
        Ya = $$$hostConfig.makeClientId,
        Za = $$$hostConfig.beforeActiveInstanceBlur,
        $a = $$$hostConfig.afterActiveInstanceBlur,
        ab = $$$hostConfig.preparePortalMount,
        bb = $$$hostConfig.supportsTestSelectors,
        cb = $$$hostConfig.findFiberRoot,
        db = $$$hostConfig.getBoundingRect,
        eb = $$$hostConfig.getTextContent,
        fb = $$$hostConfig.isHiddenSubtree,
        gb = $$$hostConfig.matchAccessibilityRole,
        hb = $$$hostConfig.setFocusIfFocusable,
        ib = $$$hostConfig.setupIntersectionObserver,
        jb = $$$hostConfig.appendChild,
        kb = $$$hostConfig.appendChildToContainer,
        lb = $$$hostConfig.commitTextUpdate,
        mb = $$$hostConfig.commitMount,
        nb = $$$hostConfig.commitUpdate,
        ob = $$$hostConfig.insertBefore,
        pb = $$$hostConfig.insertInContainerBefore,
        qb = $$$hostConfig.removeChild,
        rb = $$$hostConfig.removeChildFromContainer,
        sb = $$$hostConfig.resetTextContent,
        tb = $$$hostConfig.hideInstance,
        ub = $$$hostConfig.hideTextInstance,
        vb = $$$hostConfig.unhideInstance,
        wb = $$$hostConfig.unhideTextInstance,
        xb = $$$hostConfig.clearContainer,
        yb = $$$hostConfig.cloneInstance,
        zb = $$$hostConfig.createContainerChildSet,
        Ab = $$$hostConfig.appendChildToContainerChildSet,
        Bb = $$$hostConfig.finalizeContainerChildren,
        Cb = $$$hostConfig.replaceContainerChildren,
        Db = $$$hostConfig.cloneHiddenInstance,
        Eb = $$$hostConfig.cloneHiddenTextInstance,
        Fb = $$$hostConfig.canHydrateInstance,
        Gb = $$$hostConfig.canHydrateTextInstance,
        Hb = $$$hostConfig.isSuspenseInstancePending,
        Ib = $$$hostConfig.isSuspenseInstanceFallback,
        Jb = $$$hostConfig.getNextHydratableSibling,
        Kb = $$$hostConfig.getFirstHydratableChild,
        Lb = $$$hostConfig.hydrateInstance,
        Mb = $$$hostConfig.hydrateTextInstance,
        Nb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
        Ob = $$$hostConfig.commitHydratedContainer,
        Pb = $$$hostConfig.commitHydratedSuspenseInstance,
        Qb;

    function Rb(a) {
      if (void 0 === Qb) { try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        Qb = b && b[1] || "";
      } }
      return "\n" + Qb + a;
    }

    var Sb = !1;

    function Tb(a, b) {
      if (!a || Sb) { return ""; }
      Sb = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;

      try {
        if (b) {
          if (b = function b() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", {
            set: function set() {
              throw Error();
            }
          }), "object" === (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (k) {
              var d = k;
            }

            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (k) {
              d = k;
            }

            a.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            d = k;
          }

          a();
        }
      } catch (k) {
        if (k && d && "string" === typeof k.stack) {
          for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) {
            h--;
          }

          for (; 1 <= g && 0 <= h; g--, h--) {
            if (e[g] !== f[h]) {
              if (1 !== g || 1 !== h) {
                do {
                  if (g--, h--, 0 > h || e[g] !== f[h]) { return "\n" + e[g].replace(" at new ", " at "); }
                } while (1 <= g && 0 <= h);
              }

              break;
            }
          }
        }
      } finally {
        Sb = !1, Error.prepareStackTrace = c;
      }

      return (a = a ? a.displayName || a.name : "") ? Rb(a) : "";
    }

    var Ub = [],
        Vb = -1;

    function Wb(a) {
      return {
        current: a
      };
    }

    function z(a) {
      0 > Vb || (a.current = Ub[Vb], Ub[Vb] = null, Vb--);
    }

    function A(a, b) {
      Vb++;
      Ub[Vb] = a.current;
      a.current = b;
    }

    var Xb = {},
        B = Wb(Xb),
        D = Wb(!1),
        Yb = Xb;

    function Zb(a, b) {
      var c = a.type.contextTypes;
      if (!c) { return Xb; }
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) { return d.__reactInternalMemoizedMaskedChildContext; }
      var e = {},
          f;

      for (f in c) {
        e[f] = b[f];
      }

      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
      return e;
    }

    function E(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }

    function $b() {
      z(D);
      z(B);
    }

    function ac(a, b, c) {
      if (B.current !== Xb) { throw Error(q(168)); }
      A(B, b);
      A(D, c);
    }

    function bc(a, b, c) {
      var d = a.stateNode;
      a = b.childContextTypes;
      if ("function" !== typeof d.getChildContext) { return c; }
      d = d.getChildContext();

      for (var e in d) {
        if (!(e in a)) { throw Error(q(108, wa(b) || "Unknown", e)); }
      }

      return aa({}, c, d);
    }

    function cc(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Xb;
      Yb = B.current;
      A(B, a);
      A(D, D.current);
      return !0;
    }

    function dc(a, b, c) {
      var d = a.stateNode;
      if (!d) { throw Error(q(169)); }
      c ? (a = bc(a, b, Yb), d.__reactInternalMemoizedMergedChildContext = a, z(D), z(B), A(B, a)) : z(D);
      A(D, c);
    }

    var ec = null,
        fc = null,
        gc = m.unstable_now;
    gc();
    var hc = 0,
        F = 8;

    function ic(a) {
      if (0 !== (1 & a)) { return F = 15, 1; }
      if (0 !== (2 & a)) { return F = 14, 2; }
      if (0 !== (4 & a)) { return F = 13, 4; }
      var b = 24 & a;
      if (0 !== b) { return F = 12, b; }
      if (0 !== (a & 32)) { return F = 11, 32; }
      b = 192 & a;
      if (0 !== b) { return F = 10, b; }
      if (0 !== (a & 256)) { return F = 9, 256; }
      b = 3584 & a;
      if (0 !== b) { return F = 8, b; }
      if (0 !== (a & 4096)) { return F = 7, 4096; }
      b = 4186112 & a;
      if (0 !== b) { return F = 6, b; }
      b = 62914560 & a;
      if (0 !== b) { return F = 5, b; }
      if (a & 67108864) { return F = 4, 67108864; }
      if (0 !== (a & 134217728)) { return F = 3, 134217728; }
      b = 805306368 & a;
      if (0 !== b) { return F = 2, b; }
      if (0 !== (1073741824 & a)) { return F = 1, 1073741824; }
      F = 8;
      return a;
    }

    function jc(a) {
      switch (a) {
        case 99:
          return 15;

        case 98:
          return 10;

        case 97:
        case 96:
          return 8;

        case 95:
          return 2;

        default:
          return 0;
      }
    }

    function kc(a) {
      switch (a) {
        case 15:
        case 14:
          return 99;

        case 13:
        case 12:
        case 11:
        case 10:
          return 98;

        case 9:
        case 8:
        case 7:
        case 6:
        case 4:
        case 5:
          return 97;

        case 3:
        case 2:
        case 1:
          return 95;

        case 0:
          return 90;

        default:
          throw Error(q(358, a));
      }
    }

    function lc(a, b) {
      var c = a.pendingLanes;
      if (0 === c) { return F = 0; }
      var d = 0,
          e = 0,
          f = a.expiredLanes,
          g = a.suspendedLanes,
          h = a.pingedLanes;
      if (0 !== f) { d = f, e = F = 15; }else if (f = c & 134217727, 0 !== f) {
        var k = f & ~g;
        0 !== k ? (d = ic(k), e = F) : (h &= f, 0 !== h && (d = ic(h), e = F));
      } else { f = c & ~g, 0 !== f ? (d = ic(f), e = F) : 0 !== h && (d = ic(h), e = F); }
      if (0 === d) { return 0; }
      d = 31 - mc(d);
      d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;

      if (0 !== b && b !== d && 0 === (b & g)) {
        ic(b);
        if (e <= F) { return b; }
        F = e;
      }

      b = a.entangledLanes;
      if (0 !== b) { for (a = a.entanglements, b &= d; 0 < b;) {
        c = 31 - mc(b), e = 1 << c, d |= a[c], b &= ~e;
      } }
      return d;
    }

    function nc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }

    function oc(a, b) {
      switch (a) {
        case 15:
          return 1;

        case 14:
          return 2;

        case 12:
          return a = pc(24 & ~b), 0 === a ? oc(10, b) : a;

        case 10:
          return a = pc(192 & ~b), 0 === a ? oc(8, b) : a;

        case 8:
          return a = pc(3584 & ~b), 0 === a && (a = pc(4186112 & ~b), 0 === a && (a = 512)), a;

        case 2:
          return b = pc(805306368 & ~b), 0 === b && (b = 268435456), b;
      }

      throw Error(q(358, a));
    }

    function pc(a) {
      return a & -a;
    }

    function qc(a, b, c) {
      a.pendingLanes |= b;
      var d = b - 1;
      a.suspendedLanes &= d;
      a.pingedLanes &= d;
      a = a.eventTimes;
      b = 31 - mc(b);
      a[b] = c;
    }

    var mc = Math.clz32 ? Math.clz32 : rc,
        sc = Math.log,
        tc = Math.LN2;

    function rc(a) {
      return 0 === a ? 32 : 31 - (sc(a) / tc | 0) | 0;
    }

    var uc = m.unstable_runWithPriority,
        vc = m.unstable_scheduleCallback,
        wc = m.unstable_cancelCallback,
        xc = m.unstable_shouldYield,
        yc = m.unstable_requestPaint,
        zc = m.unstable_now,
        Ac = m.unstable_getCurrentPriorityLevel,
        Bc = m.unstable_ImmediatePriority,
        Cc = m.unstable_UserBlockingPriority,
        Dc = m.unstable_NormalPriority,
        Ec = m.unstable_LowPriority,
        Fc = m.unstable_IdlePriority,
        Gc = {},
        Hc = void 0 !== yc ? yc : function () {},
        Ic = null,
        Jc = null,
        Kc = !1,
        Lc = zc(),
        G = 1E4 > Lc ? zc : function () {
      return zc() - Lc;
    };

    function Mc() {
      switch (Ac()) {
        case Bc:
          return 99;

        case Cc:
          return 98;

        case Dc:
          return 97;

        case Ec:
          return 96;

        case Fc:
          return 95;

        default:
          throw Error(q(332));
      }
    }

    function Nc(a) {
      switch (a) {
        case 99:
          return Bc;

        case 98:
          return Cc;

        case 97:
          return Dc;

        case 96:
          return Ec;

        case 95:
          return Fc;

        default:
          throw Error(q(332));
      }
    }

    function Oc(a, b) {
      a = Nc(a);
      return uc(a, b);
    }

    function Pc(a, b, c) {
      a = Nc(a);
      return vc(a, b, c);
    }

    function H() {
      if (null !== Jc) {
        var a = Jc;
        Jc = null;
        wc(a);
      }

      Qc();
    }

    function Qc() {
      if (!Kc && null !== Ic) {
        Kc = !0;
        var a = 0;

        try {
          var b = Ic;
          Oc(99, function () {
            for (; a < b.length; a++) {
              var c = b[a];

              do {
                c = c(!0);
              } while (null !== c);
            }
          });
          Ic = null;
        } catch (c) {
          throw null !== Ic && (Ic = Ic.slice(a + 1)), vc(Bc, H), c;
        } finally {
          Kc = !1;
        }
      }
    }

    var Rc = ca.ReactCurrentBatchConfig;

    function Sc(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }

    var I = "function" === typeof Object.is ? Object.is : Sc,
        Tc = Object.prototype.hasOwnProperty;

    function Uc(a, b) {
      if (I(a, b)) { return !0; }
      if ("object" !== _typeof(a) || null === a || "object" !== _typeof(b) || null === b) { return !1; }
      var c = Object.keys(a),
          d = Object.keys(b);
      if (c.length !== d.length) { return !1; }

      for (d = 0; d < c.length; d++) {
        if (!Tc.call(b, c[d]) || !I(a[c[d]], b[c[d]])) { return !1; }
      }

      return !0;
    }

    function Vc(a) {
      switch (a.tag) {
        case 5:
          return Rb(a.type);

        case 16:
          return Rb("Lazy");

        case 13:
          return Rb("Suspense");

        case 19:
          return Rb("SuspenseList");

        case 0:
        case 2:
        case 15:
          return a = Tb(a.type, !1), a;

        case 11:
          return a = Tb(a.type.render, !1), a;

        case 22:
          return a = Tb(a.type._render, !1), a;

        case 1:
          return a = Tb(a.type, !0), a;

        default:
          return "";
      }
    }

    function Wc(a, b) {
      if (a && a.defaultProps) {
        b = aa({}, b);
        a = a.defaultProps;

        for (var c in a) {
          void 0 === b[c] && (b[c] = a[c]);
        }

        return b;
      }

      return b;
    }

    var Xc = Wb(null),
        Yc = null,
        Zc = null,
        $c = null;

    function ad() {
      $c = Zc = Yc = null;
    }

    function bd(a, b) {
      a = a.type._context;
      Sa ? (A(Xc, a._currentValue), a._currentValue = b) : (A(Xc, a._currentValue2), a._currentValue2 = b);
    }

    function cd(a) {
      var b = Xc.current;
      z(Xc);
      a = a.type._context;
      Sa ? a._currentValue = b : a._currentValue2 = b;
    }

    function dd(a, b) {
      for (; null !== a;) {
        var c = a.alternate;
        if ((a.childLanes & b) === b) {
          if (null === c || (c.childLanes & b) === b) { break; }else { c.childLanes |= b; }
        } else { a.childLanes |= b, null !== c && (c.childLanes |= b); }
        a = a["return"];
      }
    }

    function ed(a, b) {
      Yc = a;
      $c = Zc = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (fd = !0), a.firstContext = null);
    }

    function J(a, b) {
      if ($c !== a && !1 !== b && 0 !== b) {
        if ("number" !== typeof b || 1073741823 === b) { $c = a, b = 1073741823; }
        b = {
          context: a,
          observedBits: b,
          next: null
        };

        if (null === Zc) {
          if (null === Yc) { throw Error(q(308)); }
          Zc = b;
          Yc.dependencies = {
            lanes: 0,
            firstContext: b,
            responders: null
          };
        } else { Zc = Zc.next = b; }
      }

      return Sa ? a._currentValue : a._currentValue2;
    }

    var gd = !1;

    function hd(a) {
      a.updateQueue = {
        baseState: a.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null
        },
        effects: null
      };
    }

    function id(a, b) {
      a = a.updateQueue;
      b.updateQueue === a && (b.updateQueue = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects
      });
    }

    function jd(a, b) {
      return {
        eventTime: a,
        lane: b,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }

    function ld(a, b) {
      a = a.updateQueue;

      if (null !== a) {
        a = a.shared;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
    }

    function md(a, b) {
      var c = a.updateQueue,
          d = a.alternate;

      if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null,
            f = null;
        c = c.firstBaseUpdate;

        if (null !== c) {
          do {
            var g = {
              eventTime: c.eventTime,
              lane: c.lane,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null
            };
            null === f ? e = f = g : f = f.next = g;
            c = c.next;
          } while (null !== c);

          null === f ? e = f = b : f = f.next = b;
        } else { e = f = b; }

        c = {
          baseState: d.baseState,
          firstBaseUpdate: e,
          lastBaseUpdate: f,
          shared: d.shared,
          effects: d.effects
        };
        a.updateQueue = c;
        return;
      }

      a = c.lastBaseUpdate;
      null === a ? c.firstBaseUpdate = b : a.next = b;
      c.lastBaseUpdate = b;
    }

    function nd(a, b, c, d) {
      var e = a.updateQueue;
      gd = !1;
      var f = e.firstBaseUpdate,
          g = e.lastBaseUpdate,
          h = e.shared.pending;

      if (null !== h) {
        e.shared.pending = null;
        var k = h,
            l = k.next;
        k.next = null;
        null === g ? f = l : g.next = l;
        g = k;
        var n = a.alternate;

        if (null !== n) {
          n = n.updateQueue;
          var t = n.lastBaseUpdate;
          t !== g && (null === t ? n.firstBaseUpdate = l : t.next = l, n.lastBaseUpdate = k);
        }
      }

      if (null !== f) {
        t = e.baseState;
        g = 0;
        n = l = k = null;

        do {
          h = f.lane;
          var p = f.eventTime;

          if ((d & h) === h) {
            null !== n && (n = n.next = {
              eventTime: p,
              lane: 0,
              tag: f.tag,
              payload: f.payload,
              callback: f.callback,
              next: null
            });

            a: {
              var y = a,
                  x = f;
              h = b;
              p = c;

              switch (x.tag) {
                case 1:
                  y = x.payload;

                  if ("function" === typeof y) {
                    t = y.call(p, t, h);
                    break a;
                  }

                  t = y;
                  break a;

                case 3:
                  y.flags = y.flags & -4097 | 64;

                case 0:
                  y = x.payload;
                  h = "function" === typeof y ? y.call(p, t, h) : y;
                  if (null === h || void 0 === h) { break a; }
                  t = aa({}, t, h);
                  break a;

                case 2:
                  gd = !0;
              }
            }

            null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f] : h.push(f));
          } else { p = {
            eventTime: p,
            lane: h,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, null === n ? (l = n = p, k = t) : n = n.next = p, g |= h; }

          f = f.next;
          if (null === f) { if (h = e.shared.pending, null === h) { break; }else { f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null; } }
        } while (1);

        null === n && (k = t);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = n;
        od |= g;
        a.lanes = g;
        a.memoizedState = t;
      }
    }

    function pd(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (null !== a) { for (b = 0; b < a.length; b++) {
        var d = a[b],
            e = d.callback;

        if (null !== e) {
          d.callback = null;
          d = c;
          if ("function" !== typeof e) { throw Error(q(191, e)); }
          e.call(d);
        }
      } }
    }

    var qd = new ba.Component().refs;

    function rd(a, b, c, d) {
      b = a.memoizedState;
      c = c(d, b);
      c = null === c || void 0 === c ? b : aa({}, b, c);
      a.memoizedState = c;
      0 === a.lanes && (a.updateQueue.baseState = c);
    }

    var ud = {
      isMounted: function isMounted(a) {
        return (a = a._reactInternals) ? xa(a) === a : !1;
      },
      enqueueSetState: function enqueueSetState(a, b, c) {
        a = a._reactInternals;
        var d = K(),
            e = sd(a),
            f = jd(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        ld(a, f);
        td(a, e, d);
      },
      enqueueReplaceState: function enqueueReplaceState(a, b, c) {
        a = a._reactInternals;
        var d = K(),
            e = sd(a),
            f = jd(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        ld(a, f);
        td(a, e, d);
      },
      enqueueForceUpdate: function enqueueForceUpdate(a, b) {
        a = a._reactInternals;
        var c = K(),
            d = sd(a),
            e = jd(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        ld(a, e);
        td(a, d, c);
      }
    };

    function vd(a, b, c, d, e, f, g) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Uc(c, d) || !Uc(e, f) : !0;
    }

    function wd(a, b, c) {
      var d = !1,
          e = Xb;
      var f = b.contextType;
      "object" === _typeof(f) && null !== f ? f = J(f) : (e = E(b) ? Yb : B.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Zb(a, e) : Xb);
      b = new b(c, f);
      a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = ud;
      a.stateNode = b;
      b._reactInternals = a;
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
      return b;
    }

    function xd(a, b, c, d) {
      a = b.state;
      "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
      "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
      b.state !== a && ud.enqueueReplaceState(b, b.state, null);
    }

    function yd(a, b, c, d) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = qd;
      hd(a);
      var f = b.contextType;
      "object" === _typeof(f) && null !== f ? e.context = J(f) : (f = E(b) ? Yb : B.current, e.context = Zb(a, f));
      nd(a, c, e, d);
      e.state = a.memoizedState;
      f = b.getDerivedStateFromProps;
      "function" === typeof f && (rd(a, b, f, c), e.state = a.memoizedState);
      "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && ud.enqueueReplaceState(e, e.state, null), nd(a, c, e, d), e.state = a.memoizedState);
      "function" === typeof e.componentDidMount && (a.flags |= 4);
    }

    var zd = Array.isArray;

    function Ad(a, b, c) {
      a = c.ref;

      if (null !== a && "function" !== typeof a && "object" !== _typeof(a)) {
        if (c._owner) {
          c = c._owner;

          if (c) {
            if (1 !== c.tag) { throw Error(q(309)); }
            var d = c.stateNode;
          }

          if (!d) { throw Error(q(147, a)); }
          var e = "" + a;
          if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) { return b.ref; }

          b = function b(a) {
            var b = d.refs;
            b === qd && (b = d.refs = {});
            null === a ? delete b[e] : b[e] = a;
          };

          b._stringRef = e;
          return b;
        }

        if ("string" !== typeof a) { throw Error(q(284)); }
        if (!c._owner) { throw Error(q(290, a)); }
      }

      return a;
    }

    function Bd(a, b) {
      if ("textarea" !== a.type) { throw Error(q(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b)); }
    }

    function Cd(a) {
      function b(b, c) {
        if (a) {
          var d = b.lastEffect;
          null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
          c.nextEffect = null;
          c.flags = 8;
        }
      }

      function c(c, d) {
        if (!a) { return null; }

        for (; null !== d;) {
          b(c, d), d = d.sibling;
        }

        return null;
      }

      function d(a, b) {
        for (a = new Map(); null !== b;) {
          null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
        }

        return a;
      }

      function e(a, b) {
        a = Dd(a, b);
        a.index = 0;
        a.sibling = null;
        return a;
      }

      function f(b, c, d) {
        b.index = d;
        if (!a) { return c; }
        d = b.alternate;
        if (null !== d) { return d = d.index, d < c ? (b.flags = 2, c) : d; }
        b.flags = 2;
        return c;
      }

      function g(b) {
        a && null === b.alternate && (b.flags = 2);
        return b;
      }

      function h(a, b, c, d) {
        if (null === b || 6 !== b.tag) { return b = Ed(c, a.mode, d), b["return"] = a, b; }
        b = e(b, c);
        b["return"] = a;
        return b;
      }

      function k(a, b, c, d) {
        if (null !== b && b.elementType === c.type) { return d = e(b, c.props), d.ref = Ad(a, b, c), d["return"] = a, d; }
        d = Fd(c.type, c.key, c.props, null, a.mode, d);
        d.ref = Ad(a, b, c);
        d["return"] = a;
        return d;
      }

      function l(a, b, c, d) {
        if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) { return b = Gd(c, a.mode, d), b["return"] = a, b; }
        b = e(b, c.children || []);
        b["return"] = a;
        return b;
      }

      function n(a, b, c, d, f) {
        if (null === b || 7 !== b.tag) { return b = Hd(c, a.mode, d, f), b["return"] = a, b; }
        b = e(b, c);
        b["return"] = a;
        return b;
      }

      function t(a, b, c) {
        if ("string" === typeof b || "number" === typeof b) { return b = Ed("" + b, a.mode, c), b["return"] = a, b; }

        if ("object" === _typeof(b) && null !== b) {
          switch (b.$$typeof) {
            case da:
              return c = Fd(b.type, b.key, b.props, null, a.mode, c), c.ref = Ad(a, null, b), c["return"] = a, c;

            case ea:
              return b = Gd(b, a.mode, c), b["return"] = a, b;
          }

          if (zd(b) || va(b)) { return b = Hd(b, a.mode, c, null), b["return"] = a, b; }
          Bd(a, b);
        }

        return null;
      }

      function p(a, b, c, d) {
        var e = null !== b ? b.key : null;
        if ("string" === typeof c || "number" === typeof c) { return null !== e ? null : h(a, b, "" + c, d); }

        if ("object" === _typeof(c) && null !== c) {
          switch (c.$$typeof) {
            case da:
              return c.key === e ? c.type === fa ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

            case ea:
              return c.key === e ? l(a, b, c, d) : null;
          }

          if (zd(c) || va(c)) { return null !== e ? null : n(a, b, c, d, null); }
          Bd(a, c);
        }

        return null;
      }

      function y(a, b, c, d, e) {
        if ("string" === typeof d || "number" === typeof d) { return a = a.get(c) || null, h(b, a, "" + d, e); }

        if ("object" === _typeof(d) && null !== d) {
          switch (d.$$typeof) {
            case da:
              return a = a.get(null === d.key ? c : d.key) || null, d.type === fa ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);

            case ea:
              return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
          }

          if (zd(d) || va(d)) { return a = a.get(c) || null, n(b, a, d, e, null); }
          Bd(b, d);
        }

        return null;
      }

      function x(e, g, h, k) {
        for (var l = null, v = null, u = g, C = g = 0, n = null; null !== u && C < h.length; C++) {
          u.index > C ? (n = u, u = null) : n = u.sibling;
          var w = p(e, u, h[C], k);

          if (null === w) {
            null === u && (u = n);
            break;
          }

          a && u && null === w.alternate && b(e, u);
          g = f(w, g, C);
          null === v ? l = w : v.sibling = w;
          v = w;
          u = n;
        }

        if (C === h.length) { return c(e, u), l; }

        if (null === u) {
          for (; C < h.length; C++) {
            u = t(e, h[C], k), null !== u && (g = f(u, g, C), null === v ? l = u : v.sibling = u, v = u);
          }

          return l;
        }

        for (u = d(e, u); C < h.length; C++) {
          n = y(u, e, C, h[C], k), null !== n && (a && null !== n.alternate && u["delete"](null === n.key ? C : n.key), g = f(n, g, C), null === v ? l = n : v.sibling = n, v = n);
        }

        a && u.forEach(function (a) {
          return b(e, a);
        });
        return l;
      }

      function Y(e, g, h, k) {
        var l = va(h);
        if ("function" !== typeof l) { throw Error(q(150)); }
        h = l.call(h);
        if (null == h) { throw Error(q(151)); }

        for (var u = l = null, v = g, n = g = 0, C = null, w = h.next(); null !== v && !w.done; n++, w = h.next()) {
          v.index > n ? (C = v, v = null) : C = v.sibling;
          var x = p(e, v, w.value, k);

          if (null === x) {
            null === v && (v = C);
            break;
          }

          a && v && null === x.alternate && b(e, v);
          g = f(x, g, n);
          null === u ? l = x : u.sibling = x;
          u = x;
          v = C;
        }

        if (w.done) { return c(e, v), l; }

        if (null === v) {
          for (; !w.done; n++, w = h.next()) {
            w = t(e, w.value, k), null !== w && (g = f(w, g, n), null === u ? l = w : u.sibling = w, u = w);
          }

          return l;
        }

        for (v = d(e, v); !w.done; n++, w = h.next()) {
          w = y(v, e, n, w.value, k), null !== w && (a && null !== w.alternate && v["delete"](null === w.key ? n : w.key), g = f(w, g, n), null === u ? l = w : u.sibling = w, u = w);
        }

        a && v.forEach(function (a) {
          return b(e, a);
        });
        return l;
      }

      return function (a, d, f, h) {
        var k = "object" === _typeof(f) && null !== f && f.type === fa && null === f.key;
        k && (f = f.props.children);
        var l = "object" === _typeof(f) && null !== f;
        if (l) { switch (f.$$typeof) {
          case da:
            a: {
              l = f.key;

              for (k = d; null !== k;) {
                if (k.key === l) {
                  switch (k.tag) {
                    case 7:
                      if (f.type === fa) {
                        c(a, k.sibling);
                        d = e(k, f.props.children);
                        d["return"] = a;
                        a = d;
                        break a;
                      }

                      break;

                    default:
                      if (k.elementType === f.type) {
                        c(a, k.sibling);
                        d = e(k, f.props);
                        d.ref = Ad(a, k, f);
                        d["return"] = a;
                        a = d;
                        break a;
                      }

                  }

                  c(a, k);
                  break;
                } else { b(a, k); }

                k = k.sibling;
              }

              f.type === fa ? (d = Hd(f.props.children, a.mode, h, f.key), d["return"] = a, a = d) : (h = Fd(f.type, f.key, f.props, null, a.mode, h), h.ref = Ad(a, d, f), h["return"] = a, a = h);
            }

            return g(a);

          case ea:
            a: {
              for (k = f.key; null !== d;) {
                if (d.key === k) {
                  if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                    c(a, d.sibling);
                    d = e(d, f.children || []);
                    d["return"] = a;
                    a = d;
                    break a;
                  } else {
                    c(a, d);
                    break;
                  }
                } else { b(a, d); }
                d = d.sibling;
              }

              d = Gd(f, a.mode, h);
              d["return"] = a;
              a = d;
            }

            return g(a);
        } }
        if ("string" === typeof f || "number" === typeof f) { return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d["return"] = a, a = d) : (c(a, d), d = Ed(f, a.mode, h), d["return"] = a, a = d), g(a); }
        if (zd(f)) { return x(a, d, f, h); }
        if (va(f)) { return Y(a, d, f, h); }
        l && Bd(a, f);
        if ("undefined" === typeof f && !k) { switch (a.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(q(152, wa(a.type) || "Component"));
        } }
        return c(a, d);
      };
    }

    var Id = Cd(!0),
        Jd = Cd(!1),
        Kd = {},
        L = Wb(Kd),
        Ld = Wb(Kd),
        Md = Wb(Kd);

    function Nd(a) {
      if (a === Kd) { throw Error(q(174)); }
      return a;
    }

    function Od(a, b) {
      A(Md, b);
      A(Ld, a);
      A(L, Kd);
      a = Ea(b);
      z(L);
      A(L, a);
    }

    function Pd() {
      z(L);
      z(Ld);
      z(Md);
    }

    function Qd(a) {
      var b = Nd(Md.current),
          c = Nd(L.current);
      b = Fa(c, a.type, b);
      c !== b && (A(Ld, a), A(L, b));
    }

    function Rd(a) {
      Ld.current === a && (z(L), z(Ld));
    }

    var M = Wb(0);

    function Sd(a) {
      for (var b = a; null !== b;) {
        if (13 === b.tag) {
          var c = b.memoizedState;
          if (null !== c && (c = c.dehydrated, null === c || Hb(c) || Ib(c))) { return b; }
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.flags & 64)) { return b; }
        } else if (null !== b.child) {
          b.child["return"] = b;
          b = b.child;
          continue;
        }

        if (b === a) { break; }

        for (; null === b.sibling;) {
          if (null === b["return"] || b["return"] === a) { return null; }
          b = b["return"];
        }

        b.sibling["return"] = b["return"];
        b = b.sibling;
      }

      return null;
    }

    var Td = null,
        Ud = null,
        Vd = !1;

    function Wd(a, b) {
      var c = Xd(5, null, null, 0);
      c.elementType = "DELETED";
      c.type = "DELETED";
      c.stateNode = b;
      c["return"] = a;
      c.flags = 8;
      null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
    }

    function Yd(a, b) {
      switch (a.tag) {
        case 5:
          return b = Fb(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;

        case 6:
          return b = Gb(b, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;

        case 13:
          return !1;

        default:
          return !1;
      }
    }

    function Zd(a) {
      if (Vd) {
        var b = Ud;

        if (b) {
          var c = b;

          if (!Yd(a, b)) {
            b = Jb(c);

            if (!b || !Yd(a, b)) {
              a.flags = a.flags & -1025 | 2;
              Vd = !1;
              Td = a;
              return;
            }

            Wd(Td, c);
          }

          Td = a;
          Ud = Kb(b);
        } else { a.flags = a.flags & -1025 | 2, Vd = !1, Td = a; }
      }
    }

    function $d(a) {
      for (a = a["return"]; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) {
        a = a["return"];
      }

      Td = a;
    }

    function ae(a) {
      if (!Va || a !== Td) { return !1; }
      if (!Vd) { return $d(a), Vd = !0, !1; }
      var b = a.type;
      if (5 !== a.tag || "head" !== b && "body" !== b && !Ma(b, a.memoizedProps)) { for (b = Ud; b;) {
        Wd(a, b), b = Jb(b);
      } }
      $d(a);

      if (13 === a.tag) {
        if (!Va) { throw Error(q(316)); }
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) { throw Error(q(317)); }
        Ud = Nb(a);
      } else { Ud = Td ? Jb(a.stateNode) : null; }

      return !0;
    }

    function be() {
      Va && (Ud = Td = null, Vd = !1);
    }

    var ce = [];

    function de() {
      for (var a = 0; a < ce.length; a++) {
        var b = ce[a];
        Sa ? b._workInProgressVersionPrimary = null : b._workInProgressVersionSecondary = null;
      }

      ce.length = 0;
    }

    var ee = ca.ReactCurrentDispatcher,
        fe = ca.ReactCurrentBatchConfig,
        ge = 0,
        N = null,
        O = null,
        P = null,
        he = !1,
        ie = !1;

    function Q() {
      throw Error(q(321));
    }

    function je(a, b) {
      if (null === b) { return !1; }

      for (var c = 0; c < b.length && c < a.length; c++) {
        if (!I(a[c], b[c])) { return !1; }
      }

      return !0;
    }

    function ke(a, b, c, d, e, f) {
      ge = f;
      N = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      ee.current = null === a || null === a.memoizedState ? le : me;
      a = c(d, e);

      if (ie) {
        f = 0;

        do {
          ie = !1;
          if (!(25 > f)) { throw Error(q(301)); }
          f += 1;
          P = O = null;
          b.updateQueue = null;
          ee.current = ne;
          a = c(d, e);
        } while (ie);
      }

      ee.current = oe;
      b = null !== O && null !== O.next;
      ge = 0;
      P = O = N = null;
      he = !1;
      if (b) { throw Error(q(300)); }
      return a;
    }

    function pe() {
      var a = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      null === P ? N.memoizedState = P = a : P = P.next = a;
      return P;
    }

    function qe() {
      if (null === O) {
        var a = N.alternate;
        a = null !== a ? a.memoizedState : null;
      } else { a = O.next; }

      var b = null === P ? N.memoizedState : P.next;
      if (null !== b) { P = b, O = a; }else {
        if (null === a) { throw Error(q(310)); }
        O = a;
        a = {
          memoizedState: O.memoizedState,
          baseState: O.baseState,
          baseQueue: O.baseQueue,
          queue: O.queue,
          next: null
        };
        null === P ? N.memoizedState = P = a : P = P.next = a;
      }
      return P;
    }

    function re(a, b) {
      return "function" === typeof b ? b(a) : b;
    }

    function se(a) {
      var b = qe(),
          c = b.queue;
      if (null === c) { throw Error(q(311)); }
      c.lastRenderedReducer = a;
      var d = O,
          e = d.baseQueue,
          f = c.pending;

      if (null !== f) {
        if (null !== e) {
          var g = e.next;
          e.next = f.next;
          f.next = g;
        }

        d.baseQueue = e = f;
        c.pending = null;
      }

      if (null !== e) {
        e = e.next;
        d = d.baseState;
        var h = g = f = null,
            k = e;

        do {
          var l = k.lane;
          if ((ge & l) === l) { null !== h && (h = h.next = {
            lane: 0,
            action: k.action,
            eagerReducer: k.eagerReducer,
            eagerState: k.eagerState,
            next: null
          }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action); }else {
            var n = {
              lane: l,
              action: k.action,
              eagerReducer: k.eagerReducer,
              eagerState: k.eagerState,
              next: null
            };
            null === h ? (g = h = n, f = d) : h = h.next = n;
            N.lanes |= l;
            od |= l;
          }
          k = k.next;
        } while (null !== k && k !== e);

        null === h ? f = d : h.next = g;
        I(d, b.memoizedState) || (fd = !0);
        b.memoizedState = d;
        b.baseState = f;
        b.baseQueue = h;
        c.lastRenderedState = d;
      }

      return [b.memoizedState, c.dispatch];
    }

    function te(a) {
      var b = qe(),
          c = b.queue;
      if (null === c) { throw Error(q(311)); }
      c.lastRenderedReducer = a;
      var d = c.dispatch,
          e = c.pending,
          f = b.memoizedState;

      if (null !== e) {
        c.pending = null;
        var g = e = e.next;

        do {
          f = a(f, g.action), g = g.next;
        } while (g !== e);

        I(f, b.memoizedState) || (fd = !0);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
      }

      return [f, d];
    }

    function ue(a, b, c) {
      var d = b._getVersion;
      d = d(b._source);
      var e = Sa ? b._workInProgressVersionPrimary : b._workInProgressVersionSecondary;
      if (null !== e) { a = e === d; }else if (a = a.mutableReadLanes, a = (ge & a) === a) { Sa ? b._workInProgressVersionPrimary = d : b._workInProgressVersionSecondary = d, ce.push(b); }
      if (a) { return c(b._source); }
      ce.push(b);
      throw Error(q(350));
    }

    function ve(a, b, c, d) {
      var e = R;
      if (null === e) { throw Error(q(349)); }
      var f = b._getVersion,
          g = f(b._source),
          h = ee.current,
          k = h.useState(function () {
        return ue(e, b, c);
      }),
          l = k[1],
          n = k[0];
      k = P;
      var t = a.memoizedState,
          p = t.refs,
          y = p.getSnapshot,
          x = t.source;
      t = t.subscribe;
      var Y = N;
      a.memoizedState = {
        refs: p,
        source: b,
        subscribe: d
      };
      h.useEffect(function () {
        p.getSnapshot = c;
        p.setSnapshot = l;
        var a = f(b._source);

        if (!I(g, a)) {
          a = c(b._source);
          I(n, a) || (l(a), a = sd(Y), e.mutableReadLanes |= a & e.pendingLanes);
          a = e.mutableReadLanes;
          e.entangledLanes |= a;

          for (var d = e.entanglements, h = a; 0 < h;) {
            var k = 31 - mc(h),
                t = 1 << k;
            d[k] |= a;
            h &= ~t;
          }
        }
      }, [c, b, d]);
      h.useEffect(function () {
        return d(b._source, function () {
          var a = p.getSnapshot,
              c = p.setSnapshot;

          try {
            c(a(b._source));
            var d = sd(Y);
            e.mutableReadLanes |= d & e.pendingLanes;
          } catch (Oa) {
            c(function () {
              throw Oa;
            });
          }
        });
      }, [b, d]);
      I(y, c) && I(x, b) && I(t, d) || (a = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: re,
        lastRenderedState: n
      }, a.dispatch = l = we.bind(null, N, a), k.queue = a, k.baseQueue = null, n = ue(e, b, c), k.memoizedState = k.baseState = n);
      return n;
    }

    function xe(a, b, c) {
      var d = qe();
      return ve(d, a, b, c);
    }

    function ye(a) {
      var b = pe();
      "function" === typeof a && (a = a());
      b.memoizedState = b.baseState = a;
      a = b.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: re,
        lastRenderedState: a
      };
      a = a.dispatch = we.bind(null, N, a);
      return [b.memoizedState, a];
    }

    function ze(a, b, c, d) {
      a = {
        tag: a,
        create: b,
        destroy: c,
        deps: d,
        next: null
      };
      b = N.updateQueue;
      null === b ? (b = {
        lastEffect: null
      }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
      return a;
    }

    function Ae(a) {
      var b = pe();
      a = {
        current: a
      };
      return b.memoizedState = a;
    }

    function Be() {
      return qe().memoizedState;
    }

    function Ce(a, b, c, d) {
      var e = pe();
      N.flags |= a;
      e.memoizedState = ze(1 | b, c, void 0, void 0 === d ? null : d);
    }

    function De(a, b, c, d) {
      var e = qe();
      d = void 0 === d ? null : d;
      var f = void 0;

      if (null !== O) {
        var g = O.memoizedState;
        f = g.destroy;

        if (null !== d && je(d, g.deps)) {
          ze(b, c, f, d);
          return;
        }
      }

      N.flags |= a;
      e.memoizedState = ze(1 | b, c, f, d);
    }

    function Ee(a, b) {
      return Ce(516, 4, a, b);
    }

    function Fe(a, b) {
      return De(516, 4, a, b);
    }

    function Ge(a, b) {
      return De(4, 2, a, b);
    }

    function He(a, b) {
      if ("function" === typeof b) { return a = a(), b(a), function () {
        b(null);
      }; }
      if (null !== b && void 0 !== b) { return a = a(), b.current = a, function () {
        b.current = null;
      }; }
    }

    function Ie(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return De(4, 2, He.bind(null, b, a), c);
    }

    function Je() {}

    function Ke(a, b) {
      var c = qe();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && je(b, d[1])) { return d[0]; }
      c.memoizedState = [a, b];
      return a;
    }

    function Le(a, b) {
      var c = qe();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && je(b, d[1])) { return d[0]; }
      a = a();
      c.memoizedState = [a, b];
      return a;
    }

    function Me(a, b) {
      var c = Mc();
      Oc(98 > c ? 98 : c, function () {
        a(!0);
      });
      Oc(97 < c ? 97 : c, function () {
        var c = fe.transition;
        fe.transition = 1;

        try {
          a(!1), b();
        } finally {
          fe.transition = c;
        }
      });
    }

    function we(a, b, c) {
      var d = K(),
          e = sd(a),
          f = {
        lane: e,
        action: c,
        eagerReducer: null,
        eagerState: null,
        next: null
      },
          g = b.pending;
      null === g ? f.next = f : (f.next = g.next, g.next = f);
      b.pending = f;
      g = a.alternate;
      if (a === N || null !== g && g === N) { ie = he = !0; }else {
        if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) { try {
          var h = b.lastRenderedState,
              k = g(h, c);
          f.eagerReducer = g;
          f.eagerState = k;
          if (I(k, h)) { return; }
        } catch (l) {} finally {} }
        td(a, e, d);
      }
    }

    var oe = {
      readContext: J,
      useCallback: Q,
      useContext: Q,
      useEffect: Q,
      useImperativeHandle: Q,
      useLayoutEffect: Q,
      useMemo: Q,
      useReducer: Q,
      useRef: Q,
      useState: Q,
      useDebugValue: Q,
      useDeferredValue: Q,
      useTransition: Q,
      useMutableSource: Q,
      useOpaqueIdentifier: Q,
      unstable_isNewReconciler: !1
    },
        le = {
      readContext: J,
      useCallback: function useCallback(a, b) {
        pe().memoizedState = [a, void 0 === b ? null : b];
        return a;
      },
      useContext: J,
      useEffect: Ee,
      useImperativeHandle: function useImperativeHandle(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return Ce(4, 2, He.bind(null, b, a), c);
      },
      useLayoutEffect: function useLayoutEffect(a, b) {
        return Ce(4, 2, a, b);
      },
      useMemo: function useMemo(a, b) {
        var c = pe();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      },
      useReducer: function useReducer(a, b, c) {
        var d = pe();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = d.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: a,
          lastRenderedState: b
        };
        a = a.dispatch = we.bind(null, N, a);
        return [d.memoizedState, a];
      },
      useRef: Ae,
      useState: ye,
      useDebugValue: Je,
      useDeferredValue: function useDeferredValue(a) {
        var b = ye(a),
            c = b[0],
            d = b[1];
        Ee(function () {
          var b = fe.transition;
          fe.transition = 1;

          try {
            d(a);
          } finally {
            fe.transition = b;
          }
        }, [a]);
        return c;
      },
      useTransition: function useTransition() {
        var a = ye(!1),
            b = a[0];
        a = Me.bind(null, a[1]);
        Ae(a);
        return [a, b];
      },
      useMutableSource: function useMutableSource(a, b, c) {
        var d = pe();
        d.memoizedState = {
          refs: {
            getSnapshot: b,
            setSnapshot: null
          },
          source: a,
          subscribe: c
        };
        return ve(d, a, b, c);
      },
      useOpaqueIdentifier: function useOpaqueIdentifier() {
        if (Vd) {
          var a = !1,
              b = Xa(function () {
            a || (a = !0, c(Ya()));
            throw Error(q(355));
          }),
              c = ye(b)[1];
          0 === (N.mode & 2) && (N.flags |= 516, ze(5, function () {
            c(Ya());
          }, void 0, null));
          return b;
        }

        b = Ya();
        ye(b);
        return b;
      },
      unstable_isNewReconciler: !1
    },
        me = {
      readContext: J,
      useCallback: Ke,
      useContext: J,
      useEffect: Fe,
      useImperativeHandle: Ie,
      useLayoutEffect: Ge,
      useMemo: Le,
      useReducer: se,
      useRef: Be,
      useState: function useState() {
        return se(re);
      },
      useDebugValue: Je,
      useDeferredValue: function useDeferredValue(a) {
        var b = se(re),
            c = b[0],
            d = b[1];
        Fe(function () {
          var b = fe.transition;
          fe.transition = 1;

          try {
            d(a);
          } finally {
            fe.transition = b;
          }
        }, [a]);
        return c;
      },
      useTransition: function useTransition() {
        var a = se(re)[0];
        return [Be().current, a];
      },
      useMutableSource: xe,
      useOpaqueIdentifier: function useOpaqueIdentifier() {
        return se(re)[0];
      },
      unstable_isNewReconciler: !1
    },
        ne = {
      readContext: J,
      useCallback: Ke,
      useContext: J,
      useEffect: Fe,
      useImperativeHandle: Ie,
      useLayoutEffect: Ge,
      useMemo: Le,
      useReducer: te,
      useRef: Be,
      useState: function useState() {
        return te(re);
      },
      useDebugValue: Je,
      useDeferredValue: function useDeferredValue(a) {
        var b = te(re),
            c = b[0],
            d = b[1];
        Fe(function () {
          var b = fe.transition;
          fe.transition = 1;

          try {
            d(a);
          } finally {
            fe.transition = b;
          }
        }, [a]);
        return c;
      },
      useTransition: function useTransition() {
        var a = te(re)[0];
        return [Be().current, a];
      },
      useMutableSource: xe,
      useOpaqueIdentifier: function useOpaqueIdentifier() {
        return te(re)[0];
      },
      unstable_isNewReconciler: !1
    },
        Ne = ca.ReactCurrentOwner,
        fd = !1;

    function S(a, b, c, d) {
      b.child = null === a ? Jd(b, null, c, d) : Id(b, a.child, c, d);
    }

    function Oe(a, b, c, d, e) {
      c = c.render;
      var f = b.ref;
      ed(b, e);
      d = ke(a, b, c, d, f, e);
      if (null !== a && !fd) { return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, Qe(a, b, e); }
      b.flags |= 1;
      S(a, b, d, e);
      return b.child;
    }

    function Re(a, b, c, d, e, f) {
      if (null === a) {
        var g = c.type;
        if ("function" === typeof g && !Se(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) { return b.tag = 15, b.type = g, Te(a, b, g, d, e, f); }
        a = Fd(c.type, null, d, b, b.mode, f);
        a.ref = b.ref;
        a["return"] = b;
        return b.child = a;
      }

      g = a.child;
      if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Uc, c(e, d) && a.ref === b.ref)) { return Qe(a, b, f); }
      b.flags |= 1;
      a = Dd(g, d);
      a.ref = b.ref;
      a["return"] = b;
      return b.child = a;
    }

    function Te(a, b, c, d, e, f) {
      if (null !== a && Uc(a.memoizedProps, d) && a.ref === b.ref) { if (fd = !1, 0 !== (f & e)) { 0 !== (a.flags & 16384) && (fd = !0); }else { return b.lanes = a.lanes, Qe(a, b, f); } }
      return Ue(a, b, c, d, f);
    }

    function Ve(a, b, c) {
      var d = b.pendingProps,
          e = d.children,
          f = null !== a ? a.memoizedState : null;
      if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) {
        if (0 === (b.mode & 4)) { b.memoizedState = {
          baseLanes: 0
        }, We(b, c); }else if (0 !== (c & 1073741824)) { b.memoizedState = {
          baseLanes: 0
        }, We(b, null !== f ? f.baseLanes : c); }else { return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
          baseLanes: a
        }, We(b, a), null; }
      } else { null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, We(b, d); }
      S(a, b, e, c);
      return b.child;
    }

    function Xe(a, b) {
      var c = b.ref;
      if (null === a && null !== c || null !== a && a.ref !== c) { b.flags |= 128; }
    }

    function Ue(a, b, c, d, e) {
      var f = E(c) ? Yb : B.current;
      f = Zb(b, f);
      ed(b, e);
      c = ke(a, b, c, d, f, e);
      if (null !== a && !fd) { return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, Qe(a, b, e); }
      b.flags |= 1;
      S(a, b, c, e);
      return b.child;
    }

    function Ye(a, b, c, d, e) {
      if (E(c)) {
        var f = !0;
        cc(b);
      } else { f = !1; }

      ed(b, e);
      if (null === b.stateNode) { null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), wd(b, c, d), yd(b, c, d, e), d = !0; }else if (null === a) {
        var g = b.stateNode,
            h = b.memoizedProps;
        g.props = h;
        var k = g.context,
            l = c.contextType;
        "object" === _typeof(l) && null !== l ? l = J(l) : (l = E(c) ? Yb : B.current, l = Zb(b, l));
        var n = c.getDerivedStateFromProps,
            t = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
        t || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && xd(b, g, d, l);
        gd = !1;
        var p = b.memoizedState;
        g.state = p;
        nd(b, d, g, e);
        k = b.memoizedState;
        h !== d || p !== k || D.current || gd ? ("function" === typeof n && (rd(b, c, n, d), k = b.memoizedState), (h = gd || vd(b, c, h, d, p, k, l)) ? (t || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
      } else {
        g = b.stateNode;
        id(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : Wc(b.type, h);
        g.props = l;
        t = b.pendingProps;
        p = g.context;
        k = c.contextType;
        "object" === _typeof(k) && null !== k ? k = J(k) : (k = E(c) ? Yb : B.current, k = Zb(b, k));
        var y = c.getDerivedStateFromProps;
        (n = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== t || p !== k) && xd(b, g, d, k);
        gd = !1;
        p = b.memoizedState;
        g.state = p;
        nd(b, d, g, e);
        var x = b.memoizedState;
        h !== t || p !== x || D.current || gd ? ("function" === typeof y && (rd(b, c, y, d), x = b.memoizedState), (l = gd || vd(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
      }
      return Ze(a, b, c, d, f, e);
    }

    function Ze(a, b, c, d, e, f) {
      Xe(a, b);
      var g = 0 !== (b.flags & 64);
      if (!d && !g) { return e && dc(b, c, !1), Qe(a, b, f); }
      d = b.stateNode;
      Ne.current = b;
      var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
      b.flags |= 1;
      null !== a && g ? (b.child = Id(b, a.child, null, f), b.child = Id(b, null, h, f)) : S(a, b, h, f);
      b.memoizedState = d.state;
      e && dc(b, c, !0);
      return b.child;
    }

    function $e(a) {
      var b = a.stateNode;
      b.pendingContext ? ac(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ac(a, b.context, !1);
      Od(a, b.containerInfo);
    }

    var af = {
      dehydrated: null,
      retryLane: 0
    };

    function bf(a, b, c) {
      var d = b.pendingProps,
          e = M.current,
          f = !1,
          g;
      (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
      g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
      A(M, e & 1);

      if (null === a) {
        void 0 !== d.fallback && Zd(b);
        a = d.children;
        e = d.fallback;
        if (f) { return a = cf(b, a, e, c), b.child.memoizedState = {
          baseLanes: c
        }, b.memoizedState = af, a; }
        if ("number" === typeof d.unstable_expectedLoadTime) { return a = cf(b, a, e, c), b.child.memoizedState = {
          baseLanes: c
        }, b.memoizedState = af, b.lanes = 33554432, a; }
        c = df({
          mode: "visible",
          children: a
        }, b.mode, c, null);
        c["return"] = b;
        return b.child = c;
      }

      if (null !== a.memoizedState) {
        if (f) { return d = ef(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
          baseLanes: c
        } : {
          baseLanes: e.baseLanes | c
        }, f.childLanes = a.childLanes & ~c, b.memoizedState = af, d; }
        c = ff(a, b, d.children, c);
        b.memoizedState = null;
        return c;
      }

      if (f) { return d = ef(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
        baseLanes: c
      } : {
        baseLanes: e.baseLanes | c
      }, f.childLanes = a.childLanes & ~c, b.memoizedState = af, d; }
      c = ff(a, b, d.children, c);
      b.memoizedState = null;
      return c;
    }

    function cf(a, b, c, d) {
      var e = a.mode,
          f = a.child;
      b = {
        mode: "hidden",
        children: b
      };
      0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = df(b, e, 0, null);
      c = Hd(c, e, d, null);
      f["return"] = a;
      c["return"] = a;
      f.sibling = c;
      a.child = f;
      return c;
    }

    function ff(a, b, c, d) {
      var e = a.child;
      a = e.sibling;
      c = Dd(e, {
        mode: "visible",
        children: c
      });
      0 === (b.mode & 2) && (c.lanes = d);
      c["return"] = b;
      c.sibling = null;
      null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
      return b.child = c;
    }

    function ef(a, b, c, d, e) {
      var f = b.mode,
          g = a.child;
      a = g.sibling;
      var h = {
        mode: "hidden",
        children: c
      };
      0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Dd(g, h);
      null !== a ? d = Dd(a, d) : (d = Hd(d, f, e, null), d.flags |= 2);
      d["return"] = b;
      c["return"] = b;
      c.sibling = d;
      b.child = c;
      return d;
    }

    function gf(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      null !== c && (c.lanes |= b);
      dd(a["return"], b);
    }

    function hf(a, b, c, d, e, f) {
      var g = a.memoizedState;
      null === g ? a.memoizedState = {
        isBackwards: b,
        rendering: null,
        renderingStartTime: 0,
        last: d,
        tail: c,
        tailMode: e,
        lastEffect: f
      } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
    }

    function jf(a, b, c) {
      var d = b.pendingProps,
          e = d.revealOrder,
          f = d.tail;
      S(a, b, d.children, c);
      d = M.current;
      if (0 !== (d & 2)) { d = d & 1 | 2, b.flags |= 64; }else {
        if (null !== a && 0 !== (a.flags & 64)) { a: for (a = b.child; null !== a;) {
          if (13 === a.tag) { null !== a.memoizedState && gf(a, c); }else if (19 === a.tag) { gf(a, c); }else if (null !== a.child) {
            a.child["return"] = a;
            a = a.child;
            continue;
          }
          if (a === b) { break a; }

          for (; null === a.sibling;) {
            if (null === a["return"] || a["return"] === b) { break a; }
            a = a["return"];
          }

          a.sibling["return"] = a["return"];
          a = a.sibling;
        } }
        d &= 1;
      }
      A(M, d);
      if (0 === (b.mode & 2)) { b.memoizedState = null; }else { switch (e) {
        case "forwards":
          c = b.child;

          for (e = null; null !== c;) {
            a = c.alternate, null !== a && null === Sd(a) && (e = c), c = c.sibling;
          }

          c = e;
          null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          hf(b, !1, e, c, f, b.lastEffect);
          break;

        case "backwards":
          c = null;
          e = b.child;

          for (b.child = null; null !== e;) {
            a = e.alternate;

            if (null !== a && null === Sd(a)) {
              b.child = e;
              break;
            }

            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }

          hf(b, !0, c, null, f, b.lastEffect);
          break;

        case "together":
          hf(b, !1, null, null, void 0, b.lastEffect);
          break;

        default:
          b.memoizedState = null;
      } }
      return b.child;
    }

    function Qe(a, b, c) {
      null !== a && (b.dependencies = a.dependencies);
      od |= b.lanes;

      if (0 !== (c & b.childLanes)) {
        if (null !== a && b.child !== a.child) { throw Error(q(153)); }

        if (null !== b.child) {
          a = b.child;
          c = Dd(a, a.pendingProps);
          b.child = c;

          for (c["return"] = b; null !== a.sibling;) {
            a = a.sibling, c = c.sibling = Dd(a, a.pendingProps), c["return"] = b;
          }

          c.sibling = null;
        }

        return b.child;
      }

      return null;
    }

    function kf(a) {
      a.flags |= 4;
    }

    var _lf, mf, nf, of;

    if (Ta) { _lf = function lf(a, b) {
      for (var c = b.child; null !== c;) {
        if (5 === c.tag || 6 === c.tag) { Ja(a, c.stateNode); }else if (4 !== c.tag && null !== c.child) {
          c.child["return"] = c;
          c = c.child;
          continue;
        }
        if (c === b) { break; }

        for (; null === c.sibling;) {
          if (null === c["return"] || c["return"] === b) { return; }
          c = c["return"];
        }

        c.sibling["return"] = c["return"];
        c = c.sibling;
      }
    }, mf = function mf() {}, nf = function nf(a, b, c, d, e) {
      a = a.memoizedProps;

      if (a !== d) {
        var f = b.stateNode,
            g = Nd(L.current);
        c = La(f, c, a, d, e, g);
        (b.updateQueue = c) && kf(b);
      }
    }, of = function of(a, b, c, d) {
      c !== d && kf(b);
    }; }else if (Ua) {
      _lf = function lf(a, b, c, d) {
        for (var e = b.child; null !== e;) {
          if (5 === e.tag) {
            var f = e.stateNode;
            c && d && (f = Db(f, e.type, e.memoizedProps, e));
            Ja(a, f);
          } else if (6 === e.tag) { f = e.stateNode, c && d && (f = Eb(f, e.memoizedProps, e)), Ja(a, f); }else if (4 !== e.tag) {
            if (13 === e.tag && 0 !== (e.flags & 4) && (f = null !== e.memoizedState)) {
              var g = e.child;

              if (null !== g && (null !== g.child && (g.child["return"] = g, _lf(a, g, !0, f)), f = g.sibling, null !== f)) {
                f["return"] = e;
                e = f;
                continue;
              }
            }

            if (null !== e.child) {
              e.child["return"] = e;
              e = e.child;
              continue;
            }
          }

          if (e === b) { break; }

          for (; null === e.sibling;) {
            if (null === e["return"] || e["return"] === b) { return; }
            e = e["return"];
          }

          e.sibling["return"] = e["return"];
          e = e.sibling;
        }
      };

      var pf = function pf(a, b, c, d) {
        for (var e = b.child; null !== e;) {
          if (5 === e.tag) {
            var f = e.stateNode;
            c && d && (f = Db(f, e.type, e.memoizedProps, e));
            Ab(a, f);
          } else if (6 === e.tag) { f = e.stateNode, c && d && (f = Eb(f, e.memoizedProps, e)), Ab(a, f); }else if (4 !== e.tag) {
            if (13 === e.tag && 0 !== (e.flags & 4) && (f = null !== e.memoizedState)) {
              var g = e.child;

              if (null !== g && (null !== g.child && (g.child["return"] = g, pf(a, g, !0, f)), f = g.sibling, null !== f)) {
                f["return"] = e;
                e = f;
                continue;
              }
            }

            if (null !== e.child) {
              e.child["return"] = e;
              e = e.child;
              continue;
            }
          }

          if (e === b) { break; }

          for (; null === e.sibling;) {
            if (null === e["return"] || e["return"] === b) { return; }
            e = e["return"];
          }

          e.sibling["return"] = e["return"];
          e = e.sibling;
        }
      };

      mf = function mf(a) {
        var b = a.stateNode;

        if (null !== a.firstEffect) {
          var c = b.containerInfo,
              d = zb(c);
          pf(d, a, !1, !1);
          b.pendingChildren = d;
          kf(a);
          Bb(c, d);
        }
      };

      nf = function nf(a, b, c, d, e) {
        var f = a.stateNode,
            g = a.memoizedProps;
        if ((a = null === b.firstEffect) && g === d) { b.stateNode = f; }else {
          var h = b.stateNode,
              k = Nd(L.current),
              l = null;
          g !== d && (l = La(h, c, g, d, e, k));
          a && null === l ? b.stateNode = f : (f = yb(f, l, c, g, d, b, a, h), Ka(f, c, d, e, k) && kf(b), b.stateNode = f, a ? kf(b) : _lf(f, b, !1, !1));
        }
      };

      of = function of(a, b, c, d) {
        c !== d ? (a = Nd(Md.current), c = Nd(L.current), b.stateNode = Na(d, a, c, b), kf(b)) : b.stateNode = a.stateNode;
      };
    } else { mf = function mf() {}, nf = function nf() {}, of = function of() {}; }

    function qf(a, b) {
      if (!Vd) { switch (a.tailMode) {
        case "hidden":
          b = a.tail;

          for (var c = null; null !== b;) {
            null !== b.alternate && (c = b), b = b.sibling;
          }

          null === c ? a.tail = null : c.sibling = null;
          break;

        case "collapsed":
          c = a.tail;

          for (var d = null; null !== c;) {
            null !== c.alternate && (d = c), c = c.sibling;
          }

          null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
      } }
    }

    function rf(a, b, c) {
      var d = b.pendingProps;

      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return null;

        case 1:
          return E(b.type) && $b(), null;

        case 3:
          Pd();
          z(D);
          z(B);
          de();
          d = b.stateNode;
          d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
          if (null === a || null === a.child) { ae(b) ? kf(b) : d.hydrate || (b.flags |= 256); }
          mf(b);
          return null;

        case 5:
          Rd(b);
          var e = Nd(Md.current);
          c = b.type;
          if (null !== a && null != b.stateNode) { nf(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128); }else {
            if (!d) {
              if (null === b.stateNode) { throw Error(q(166)); }
              return null;
            }

            a = Nd(L.current);

            if (ae(b)) {
              if (!Va) { throw Error(q(175)); }
              a = Lb(b.stateNode, b.type, b.memoizedProps, e, a, b);
              b.updateQueue = a;
              null !== a && kf(b);
            } else {
              var f = Ia(c, d, e, a, b);

              _lf(f, b, !1, !1);

              b.stateNode = f;
              Ka(f, c, d, e, a) && kf(b);
            }

            null !== b.ref && (b.flags |= 128);
          }
          return null;

        case 6:
          if (a && null != b.stateNode) { of(a, b, a.memoizedProps, d); }else {
            if ("string" !== typeof d && null === b.stateNode) { throw Error(q(166)); }
            a = Nd(Md.current);
            e = Nd(L.current);

            if (ae(b)) {
              if (!Va) { throw Error(q(176)); }
              Mb(b.stateNode, b.memoizedProps, b) && kf(b);
            } else { b.stateNode = Na(d, a, e, b); }
          }
          return null;

        case 13:
          z(M);
          d = b.memoizedState;
          if (0 !== (b.flags & 64)) { return b.lanes = c, b; }
          d = null !== d;
          e = !1;
          null === a ? void 0 !== b.memoizedProps.fallback && ae(b) : e = null !== a.memoizedState;
          if (d && !e && 0 !== (b.mode & 2)) { if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (M.current & 1)) { 0 === T && (T = 3); }else {
            if (0 === T || 3 === T) { T = 4; }
            null === R || 0 === (od & 134217727) && 0 === (sf & 134217727) || tf(R, U);
          } }
          Ua && d && (b.flags |= 4);
          Ta && (d || e) && (b.flags |= 4);
          return null;

        case 4:
          return Pd(), mf(b), null === a && ab(b.stateNode.containerInfo), null;

        case 10:
          return cd(b), null;

        case 17:
          return E(b.type) && $b(), null;

        case 19:
          z(M);
          d = b.memoizedState;
          if (null === d) { return null; }
          e = 0 !== (b.flags & 64);
          f = d.rendering;
          if (null === f) {
            if (e) { qf(d, !1); }else {
              if (0 !== T || null !== a && 0 !== (a.flags & 64)) { for (a = b.child; null !== a;) {
                f = Sd(a);

                if (null !== f) {
                  b.flags |= 64;
                  qf(d, !1);
                  a = f.updateQueue;
                  null !== a && (b.updateQueue = a, b.flags |= 4);
                  null === d.lastEffect && (b.firstEffect = null);
                  b.lastEffect = d.lastEffect;
                  a = c;

                  for (d = b.child; null !== d;) {
                    e = d, c = a, e.flags &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, f = e.alternate, null === f ? (e.childLanes = 0, e.lanes = c, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = f.childLanes, e.lanes = f.lanes, e.child = f.child, e.memoizedProps = f.memoizedProps, e.memoizedState = f.memoizedState, e.updateQueue = f.updateQueue, e.type = f.type, c = f.dependencies, e.dependencies = null === c ? null : {
                      lanes: c.lanes,
                      firstContext: c.firstContext
                    }), d = d.sibling;
                  }

                  A(M, M.current & 1 | 2);
                  return b.child;
                }

                a = a.sibling;
              } }
              null !== d.tail && G() > uf && (b.flags |= 64, e = !0, qf(d, !1), b.lanes = 33554432);
            }
          } else {
            if (!e) { if (a = Sd(f), null !== a) {
              if (b.flags |= 64, e = !0, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), qf(d, !0), null === d.tail && "hidden" === d.tailMode && !f.alternate && !Vd) { return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null; }
            } else { 2 * G() - d.renderingStartTime > uf && 1073741824 !== c && (b.flags |= 64, e = !0, qf(d, !1), b.lanes = 33554432); } }
            d.isBackwards ? (f.sibling = b.child, b.child = f) : (a = d.last, null !== a ? a.sibling = f : b.child = f, d.last = f);
          }
          return null !== d.tail ? (a = d.tail, d.rendering = a, d.tail = a.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = G(), a.sibling = null, b = M.current, A(M, e ? b & 1 | 2 : b & 1), a) : null;

        case 23:
        case 24:
          return vf(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
      }

      throw Error(q(156, b.tag));
    }

    function wf(a) {
      switch (a.tag) {
        case 1:
          E(a.type) && $b();
          var b = a.flags;
          return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

        case 3:
          Pd();
          z(D);
          z(B);
          de();
          b = a.flags;
          if (0 !== (b & 64)) { throw Error(q(285)); }
          a.flags = b & -4097 | 64;
          return a;

        case 5:
          return Rd(a), null;

        case 13:
          return z(M), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

        case 19:
          return z(M), null;

        case 4:
          return Pd(), null;

        case 10:
          return cd(a), null;

        case 23:
        case 24:
          return vf(), null;

        default:
          return null;
      }
    }

    function xf(a, b) {
      try {
        var c = "",
            d = b;

        do {
          c += Vc(d), d = d["return"];
        } while (d);

        var e = c;
      } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
      }

      return {
        value: a,
        source: b,
        stack: e
      };
    }

    function yf(a, b) {
      try {
        console.error(b.value);
      } catch (c) {
        setTimeout(function () {
          throw c;
        });
      }
    }

    var zf = "function" === typeof WeakMap ? WeakMap : Map;

    function Af(a, b, c) {
      c = jd(-1, c);
      c.tag = 3;
      c.payload = {
        element: null
      };
      var d = b.value;

      c.callback = function () {
        Bf || (Bf = !0, Cf = d);
        yf(a, b);
      };

      return c;
    }

    function Df(a, b, c) {
      c = jd(-1, c);
      c.tag = 3;
      var d = a.type.getDerivedStateFromError;

      if ("function" === typeof d) {
        var e = b.value;

        c.payload = function () {
          yf(a, b);
          return d(e);
        };
      }

      var f = a.stateNode;
      null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
        "function" !== typeof d && (null === Ef ? Ef = new Set([this]) : Ef.add(this), yf(a, b));
        var c = b.stack;
        this.componentDidCatch(b.value, {
          componentStack: null !== c ? c : ""
        });
      });
      return c;
    }

    var Ff = "function" === typeof WeakSet ? WeakSet : Set;

    function Gf(a) {
      var b = a.ref;
      if (null !== b) { if ("function" === typeof b) { try {
        b(null);
      } catch (c) {
        Hf(a, c);
      } } else { b.current = null; } }
    }

    function If(a, b) {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;

        case 1:
          if (b.flags & 256 && null !== a) {
            var c = a.memoizedProps,
                d = a.memoizedState;
            a = b.stateNode;
            b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : Wc(b.type, c), d);
            a.__reactInternalSnapshotBeforeUpdate = b;
          }

          return;

        case 3:
          Ta && b.flags & 256 && xb(b.stateNode.containerInfo);
          return;

        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }

      throw Error(q(163));
    }

    function Jf(a, b) {
      b = b.updateQueue;
      b = null !== b ? b.lastEffect : null;

      if (null !== b) {
        var c = b = b.next;

        do {
          if ((c.tag & a) === a) {
            var d = c.destroy;
            c.destroy = void 0;
            void 0 !== d && d();
          }

          c = c.next;
        } while (c !== b);
      }
    }

    function Kf(a, b, c) {
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          b = c.updateQueue;
          b = null !== b ? b.lastEffect : null;

          if (null !== b) {
            a = b = b.next;

            do {
              if (3 === (a.tag & 3)) {
                var d = a.create;
                a.destroy = d();
              }

              a = a.next;
            } while (a !== b);
          }

          b = c.updateQueue;
          b = null !== b ? b.lastEffect : null;

          if (null !== b) {
            a = b = b.next;

            do {
              var e = a;
              d = e.next;
              e = e.tag;
              0 !== (e & 4) && 0 !== (e & 1) && (Lf(c, a), Mf(c, a));
              a = d;
            } while (a !== b);
          }

          return;

        case 1:
          a = c.stateNode;
          c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : Wc(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
          b = c.updateQueue;
          null !== b && pd(c, b, a);
          return;

        case 3:
          b = c.updateQueue;

          if (null !== b) {
            a = null;
            if (null !== c.child) { switch (c.child.tag) {
              case 5:
                a = Da(c.child.stateNode);
                break;

              case 1:
                a = c.child.stateNode;
            } }
            pd(c, b, a);
          }

          return;

        case 5:
          a = c.stateNode;
          null === b && c.flags & 4 && mb(a, c.type, c.memoizedProps, c);
          return;

        case 6:
          return;

        case 4:
          return;

        case 12:
          return;

        case 13:
          Va && null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Pb(c))));
          return;

        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
          return;
      }

      throw Error(q(163));
    }

    function Nf(a, b) {
      if (Ta) { for (var c = a;;) {
        if (5 === c.tag) {
          var d = c.stateNode;
          b ? tb(d) : vb(c.stateNode, c.memoizedProps);
        } else if (6 === c.tag) { d = c.stateNode, b ? ub(d) : wb(d, c.memoizedProps); }else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
          c.child["return"] = c;
          c = c.child;
          continue;
        }

        if (c === a) { break; }

        for (; null === c.sibling;) {
          if (null === c["return"] || c["return"] === a) { return; }
          c = c["return"];
        }

        c.sibling["return"] = c["return"];
        c = c.sibling;
      } }
    }

    function Of(a, b) {
      if (fc && "function" === typeof fc.onCommitFiberUnmount) { try {
        fc.onCommitFiberUnmount(ec, b);
      } catch (f) {} }

      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          a = b.updateQueue;

          if (null !== a && (a = a.lastEffect, null !== a)) {
            var c = a = a.next;

            do {
              var d = c,
                  e = d.destroy;
              d = d.tag;
              if (void 0 !== e) { if (0 !== (d & 4)) { Lf(b, c); }else {
                d = b;

                try {
                  e();
                } catch (f) {
                  Hf(d, f);
                }
              } }
              c = c.next;
            } while (c !== a);
          }

          break;

        case 1:
          Gf(b);
          a = b.stateNode;
          if ("function" === typeof a.componentWillUnmount) { try {
            a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
          } catch (f) {
            Hf(b, f);
          } }
          break;

        case 5:
          Gf(b);
          break;

        case 4:
          Ta ? Pf(a, b) : Ua && Ua && (b = b.stateNode.containerInfo, a = zb(b), Cb(b, a));
      }
    }

    function Qf(a, b) {
      for (var c = b;;) {
        if (Of(a, c), null === c.child || Ta && 4 === c.tag) {
          if (c === b) { break; }

          for (; null === c.sibling;) {
            if (null === c["return"] || c["return"] === b) { return; }
            c = c["return"];
          }

          c.sibling["return"] = c["return"];
          c = c.sibling;
        } else { c.child["return"] = c, c = c.child; }
      }
    }

    function Rf(a) {
      a.alternate = null;
      a.child = null;
      a.dependencies = null;
      a.firstEffect = null;
      a.lastEffect = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a["return"] = null;
      a.updateQueue = null;
    }

    function Sf(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }

    function Tf(a) {
      if (Ta) {
        a: {
          for (var b = a["return"]; null !== b;) {
            if (Sf(b)) { break a; }
            b = b["return"];
          }

          throw Error(q(160));
        }

        var c = b;
        b = c.stateNode;

        switch (c.tag) {
          case 5:
            var d = !1;
            break;

          case 3:
            b = b.containerInfo;
            d = !0;
            break;

          case 4:
            b = b.containerInfo;
            d = !0;
            break;

          default:
            throw Error(q(161));
        }

        c.flags & 16 && (sb(b), c.flags &= -17);

        a: b: for (c = a;;) {
          for (; null === c.sibling;) {
            if (null === c["return"] || Sf(c["return"])) {
              c = null;
              break a;
            }

            c = c["return"];
          }

          c.sibling["return"] = c["return"];

          for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
            if (c.flags & 2) { continue b; }
            if (null === c.child || 4 === c.tag) { continue b; }else { c.child["return"] = c, c = c.child; }
          }

          if (!(c.flags & 2)) {
            c = c.stateNode;
            break a;
          }
        }

        d ? Uf(a, c, b) : Vf(a, c, b);
      }
    }

    function Uf(a, b, c) {
      var d = a.tag,
          e = 5 === d || 6 === d;
      if (e) { a = e ? a.stateNode : a.stateNode.instance, b ? pb(c, a, b) : kb(c, a); }else if (4 !== d && (a = a.child, null !== a)) { for (Uf(a, b, c), a = a.sibling; null !== a;) {
        Uf(a, b, c), a = a.sibling;
      } }
    }

    function Vf(a, b, c) {
      var d = a.tag,
          e = 5 === d || 6 === d;
      if (e) { a = e ? a.stateNode : a.stateNode.instance, b ? ob(c, a, b) : jb(c, a); }else if (4 !== d && (a = a.child, null !== a)) { for (Vf(a, b, c), a = a.sibling; null !== a;) {
        Vf(a, b, c), a = a.sibling;
      } }
    }

    function Pf(a, b) {
      for (var c = b, d = !1, e, f;;) {
        if (!d) {
          d = c["return"];

          a: for (;;) {
            if (null === d) { throw Error(q(160)); }
            e = d.stateNode;

            switch (d.tag) {
              case 5:
                f = !1;
                break a;

              case 3:
                e = e.containerInfo;
                f = !0;
                break a;

              case 4:
                e = e.containerInfo;
                f = !0;
                break a;
            }

            d = d["return"];
          }

          d = !0;
        }

        if (5 === c.tag || 6 === c.tag) { Qf(a, c), f ? rb(e, c.stateNode) : qb(e, c.stateNode); }else if (4 === c.tag) {
          if (null !== c.child) {
            e = c.stateNode.containerInfo;
            f = !0;
            c.child["return"] = c;
            c = c.child;
            continue;
          }
        } else if (Of(a, c), null !== c.child) {
          c.child["return"] = c;
          c = c.child;
          continue;
        }
        if (c === b) { break; }

        for (; null === c.sibling;) {
          if (null === c["return"] || c["return"] === b) { return; }
          c = c["return"];
          4 === c.tag && (d = !1);
        }

        c.sibling["return"] = c["return"];
        c = c.sibling;
      }
    }

    function Wf(a, b) {
      if (Ta) {
        switch (b.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            Jf(3, b);
            return;

          case 1:
            return;

          case 5:
            var c = b.stateNode;

            if (null != c) {
              var d = b.memoizedProps;
              a = null !== a ? a.memoizedProps : d;
              var e = b.type,
                  f = b.updateQueue;
              b.updateQueue = null;
              null !== f && nb(c, f, e, a, d, b);
            }

            return;

          case 6:
            if (null === b.stateNode) { throw Error(q(162)); }
            c = b.memoizedProps;
            lb(b.stateNode, null !== a ? a.memoizedProps : c, c);
            return;

          case 3:
            Va && (b = b.stateNode, b.hydrate && (b.hydrate = !1, Ob(b.containerInfo)));
            return;

          case 12:
            return;

          case 13:
            Xf(b);
            Yf(b);
            return;

          case 19:
            Yf(b);
            return;

          case 17:
            return;

          case 23:
          case 24:
            Nf(b, null !== b.memoizedState);
            return;
        }

        throw Error(q(163));
      }

      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          Jf(3, b);
          return;

        case 12:
          return;

        case 13:
          Xf(b);
          Yf(b);
          return;

        case 19:
          Yf(b);
          return;

        case 3:
          Va && (c = b.stateNode, c.hydrate && (c.hydrate = !1, Ob(c.containerInfo)));
          break;

        case 23:
        case 24:
          return;
      }

      a: if (Ua) {
        switch (b.tag) {
          case 1:
          case 5:
          case 6:
          case 20:
            break a;

          case 3:
          case 4:
            b = b.stateNode;
            Cb(b.containerInfo, b.pendingChildren);
            break a;
        }

        throw Error(q(163));
      }
    }

    function Xf(a) {
      null !== a.memoizedState && (Zf = G(), Ta && Nf(a.child, !0));
    }

    function Yf(a) {
      var b = a.updateQueue;

      if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new Ff());
        b.forEach(function (b) {
          var d = $f.bind(null, a, b);
          c.has(b) || (c.add(b), b.then(d, d));
        });
      }
    }

    function ag(a, b) {
      return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
    }

    var bg = 0,
        cg = 1,
        dg = 2,
        eg = 3,
        fg = 4;

    if ("function" === typeof Symbol && Symbol["for"]) {
      var gg = Symbol["for"];
      bg = gg("selector.component");
      cg = gg("selector.has_pseudo_class");
      dg = gg("selector.role");
      eg = gg("selector.test_id");
      fg = gg("selector.text");
    }

    function hg(a) {
      var b = Wa(a);

      if (null != b) {
        if ("string" !== typeof b.memoizedProps["data-testname"]) { throw Error(q(364)); }
        return b;
      }

      a = cb(a);
      if (null === a) { throw Error(q(362)); }
      return a.stateNode.current;
    }

    function ig(a, b) {
      switch (b.$$typeof) {
        case bg:
          if (a.type === b.value) { return !0; }
          break;

        case cg:
          a: {
            b = b.value;
            a = [a, 0];

            for (var c = 0; c < a.length;) {
              var d = a[c++],
                  e = a[c++],
                  f = b[e];

              if (5 !== d.tag || !fb(d)) {
                for (; null != f && ig(d, f);) {
                  e++, f = b[e];
                }

                if (e === b.length) {
                  b = !0;
                  break a;
                } else { for (d = d.child; null !== d;) {
                  a.push(d, e), d = d.sibling;
                } }
              }
            }

            b = !1;
          }

          return b;

        case dg:
          if (5 === a.tag && gb(a.stateNode, b.value)) { return !0; }
          break;

        case fg:
          if (5 === a.tag || 6 === a.tag) { if (a = eb(a), null !== a && 0 <= a.indexOf(b.value)) { return !0; } }
          break;

        case eg:
          if (5 === a.tag && (a = a.memoizedProps["data-testname"], "string" === typeof a && a.toLowerCase() === b.value.toLowerCase())) { return !0; }
          break;

        default:
          throw Error(q(365, b));
      }

      return !1;
    }

    function jg(a) {
      switch (a.$$typeof) {
        case bg:
          return "<" + (wa(a.value) || "Unknown") + ">";

        case cg:
          return ":has(" + (jg(a) || "") + ")";

        case dg:
          return '[role="' + a.value + '"]';

        case fg:
          return '"' + a.value + '"';

        case eg:
          return '[data-testname="' + a.value + '"]';

        default:
          throw Error(q(365, a));
      }
    }

    function kg(a, b) {
      var c = [];
      a = [a, 0];

      for (var d = 0; d < a.length;) {
        var e = a[d++],
            f = a[d++],
            g = b[f];

        if (5 !== e.tag || !fb(e)) {
          for (; null != g && ig(e, g);) {
            f++, g = b[f];
          }

          if (f === b.length) { c.push(e); }else { for (e = e.child; null !== e;) {
            a.push(e, f), e = e.sibling;
          } }
        }
      }

      return c;
    }

    function lg(a, b) {
      if (!bb) { throw Error(q(363)); }
      a = hg(a);
      a = kg(a, b);
      b = [];
      a = Array.from(a);

      for (var c = 0; c < a.length;) {
        var d = a[c++];
        if (5 === d.tag) { fb(d) || b.push(d.stateNode); }else { for (d = d.child; null !== d;) {
          a.push(d), d = d.sibling;
        } }
      }

      return b;
    }

    var mg = null;

    function ng(a) {
      if (null === mg) { try {
        var b = ("require" + Math.random()).slice(0, 7);
        mg = (module && module[b]).call(module, "timers").setImmediate;
      } catch (c) {
        mg = function mg(a) {
          var b = new MessageChannel();
          b.port1.onmessage = a;
          b.port2.postMessage(void 0);
        };
      } }
      return mg(a);
    }

    var og = Math.ceil,
        pg = ca.ReactCurrentDispatcher,
        qg = ca.ReactCurrentOwner,
        rg = ca.IsSomeRendererActing,
        V = 0,
        R = null,
        W = null,
        U = 0,
        sg = 0,
        tg = Wb(0),
        T = 0,
        ug = null,
        vg = 0,
        od = 0,
        sf = 0,
        wg = 0,
        xg = null,
        Zf = 0,
        uf = Infinity;

    function yg() {
      uf = G() + 500;
    }

    var X = null,
        Bf = !1,
        Cf = null,
        Ef = null,
        zg = !1,
        Ag = null,
        Bg = 90,
        Cg = [],
        Dg = [],
        Eg = null,
        Fg = 0,
        Gg = null,
        Hg = -1,
        Ig = 0,
        Jg = 0,
        Kg = null,
        Lg = !1;

    function K() {
      return 0 !== (V & 48) ? G() : -1 !== Hg ? Hg : Hg = G();
    }

    function sd(a) {
      a = a.mode;
      if (0 === (a & 2)) { return 1; }
      if (0 === (a & 4)) { return 99 === Mc() ? 1 : 2; }
      0 === Ig && (Ig = vg);

      if (0 !== Rc.transition) {
        0 !== Jg && (Jg = null !== xg ? xg.pendingLanes : 0);
        a = Ig;
        var b = 4186112 & ~Jg;
        b &= -b;
        0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
        return b;
      }

      a = Mc();
      0 !== (V & 4) && 98 === a ? a = oc(12, Ig) : (a = jc(a), a = oc(a, Ig));
      return a;
    }

    function td(a, b, c) {
      if (50 < Fg) { throw Fg = 0, Gg = null, Error(q(185)); }
      a = Mg(a, b);
      if (null === a) { return null; }
      qc(a, b, c);
      a === R && (sf |= b, 4 === T && tf(a, U));
      var d = Mc();
      1 === b ? 0 !== (V & 8) && 0 === (V & 48) ? Ng(a) : (Z(a, c), 0 === V && (yg(), H())) : (0 === (V & 4) || 98 !== d && 99 !== d || (null === Eg ? Eg = new Set([a]) : Eg.add(a)), Z(a, c));
      xg = a;
    }

    function Mg(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      null !== c && (c.lanes |= b);
      c = a;

      for (a = a["return"]; null !== a;) {
        a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a["return"];
      }

      return 3 === c.tag ? c.stateNode : null;
    }

    function Z(a, b) {
      for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g;) {
        var h = 31 - mc(g),
            k = 1 << h,
            l = f[h];

        if (-1 === l) {
          if (0 === (k & d) || 0 !== (k & e)) {
            l = b;
            ic(k);
            var n = F;
            f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
          }
        } else { l <= b && (a.expiredLanes |= k); }

        g &= ~k;
      }

      d = lc(a, a === R ? U : 0);
      b = F;
      if (0 === d) { null !== c && (c !== Gc && wc(c), a.callbackNode = null, a.callbackPriority = 0); }else {
        if (null !== c) {
          if (a.callbackPriority === b) { return; }
          c !== Gc && wc(c);
        }

        15 === b ? (c = Ng.bind(null, a), null === Ic ? (Ic = [c], Jc = vc(Bc, Qc)) : Ic.push(c), c = Gc) : 14 === b ? c = Pc(99, Ng.bind(null, a)) : (c = kc(b), c = Pc(c, Og.bind(null, a)));
        a.callbackPriority = b;
        a.callbackNode = c;
      }
    }

    function Og(a) {
      Hg = -1;
      Jg = Ig = 0;
      if (0 !== (V & 48)) { throw Error(q(327)); }
      var b = a.callbackNode;
      if (Pg() && a.callbackNode !== b) { return null; }
      var c = lc(a, a === R ? U : 0);
      if (0 === c) { return null; }
      var d = c;
      var e = V;
      V |= 16;
      var f = Qg();
      if (R !== a || U !== d) { yg(), Rg(a, d); }

      do {
        try {
          Sg();
          break;
        } catch (h) {
          Tg(a, h);
        }
      } while (1);

      ad();
      pg.current = f;
      V = e;
      null !== W ? d = 0 : (R = null, U = 0, d = T);
      if (0 !== (vg & sf)) { Rg(a, 0); }else if (0 !== d) {
        2 === d && (V |= 64, a.hydrate && (a.hydrate = !1, xb(a.containerInfo)), c = nc(a), 0 !== c && (d = Ug(a, c)));
        if (1 === d) { throw b = ug, Rg(a, 0), tf(a, c), Z(a, G()), b; }
        a.finishedWork = a.current.alternate;
        a.finishedLanes = c;

        switch (d) {
          case 0:
          case 1:
            throw Error(q(345));

          case 2:
            Yg(a);
            break;

          case 3:
            tf(a, c);

            if ((c & 62914560) === c && (d = Zf + 500 - G(), 10 < d)) {
              if (0 !== lc(a, 0)) { break; }
              e = a.suspendedLanes;

              if ((e & c) !== c) {
                K();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }

              a.timeoutHandle = Pa(Yg.bind(null, a), d);
              break;
            }

            Yg(a);
            break;

          case 4:
            tf(a, c);
            if ((c & 4186112) === c) { break; }
            d = a.eventTimes;

            for (e = -1; 0 < c;) {
              var g = 31 - mc(c);
              f = 1 << g;
              g = d[g];
              g > e && (e = g);
              c &= ~f;
            }

            c = e;
            c = G() - c;
            c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * og(c / 1960)) - c;

            if (10 < c) {
              a.timeoutHandle = Pa(Yg.bind(null, a), c);
              break;
            }

            Yg(a);
            break;

          case 5:
            Yg(a);
            break;

          default:
            throw Error(q(329));
        }
      }
      Z(a, G());
      return a.callbackNode === b ? Og.bind(null, a) : null;
    }

    function tf(a, b) {
      b &= ~wg;
      b &= ~sf;
      a.suspendedLanes |= b;
      a.pingedLanes &= ~b;

      for (a = a.expirationTimes; 0 < b;) {
        var c = 31 - mc(b),
            d = 1 << c;
        a[c] = -1;
        b &= ~d;
      }
    }

    function Ng(a) {
      if (0 !== (V & 48)) { throw Error(q(327)); }
      Pg();

      if (a === R && 0 !== (a.expiredLanes & U)) {
        var b = U;
        var c = Ug(a, b);
        0 !== (vg & sf) && (b = lc(a, b), c = Ug(a, b));
      } else { b = lc(a, 0), c = Ug(a, b); }

      0 !== a.tag && 2 === c && (V |= 64, a.hydrate && (a.hydrate = !1, xb(a.containerInfo)), b = nc(a), 0 !== b && (c = Ug(a, b)));
      if (1 === c) { throw c = ug, Rg(a, 0), tf(a, b), Z(a, G()), c; }
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b;
      Yg(a);
      Z(a, G());
      return null;
    }

    function Zg() {
      if (null !== Eg) {
        var a = Eg;
        Eg = null;
        a.forEach(function (a) {
          a.expiredLanes |= 24 & a.pendingLanes;
          Z(a, G());
        });
      }

      H();
    }

    function $g(a, b) {
      var c = V;
      V |= 1;

      try {
        return a(b);
      } finally {
        V = c, 0 === V && (yg(), H());
      }
    }

    function ah(a, b) {
      var c = V;
      if (0 !== (c & 48)) { return a(b); }
      V |= 1;

      try {
        if (a) { return Oc(99, a.bind(null, b)); }
      } finally {
        V = c, H();
      }
    }

    function We(a, b) {
      A(tg, sg);
      sg |= b;
      vg |= b;
    }

    function vf() {
      sg = tg.current;
      z(tg);
    }

    function Rg(a, b) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c = a.timeoutHandle;
      c !== Ra && (a.timeoutHandle = Ra, Qa(c));
      if (null !== W) { for (c = W["return"]; null !== c;) {
        var d = c;

        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && $b();
            break;

          case 3:
            Pd();
            z(D);
            z(B);
            de();
            break;

          case 5:
            Rd(d);
            break;

          case 4:
            Pd();
            break;

          case 13:
            z(M);
            break;

          case 19:
            z(M);
            break;

          case 10:
            cd(d);
            break;

          case 23:
          case 24:
            vf();
        }

        c = c["return"];
      } }
      R = a;
      W = Dd(a.current, null);
      U = sg = vg = b;
      T = 0;
      ug = null;
      wg = sf = od = 0;
    }

    function Tg(a, b) {
      do {
        var c = W;

        try {
          ad();
          ee.current = oe;

          if (he) {
            for (var d = N.memoizedState; null !== d;) {
              var e = d.queue;
              null !== e && (e.pending = null);
              d = d.next;
            }

            he = !1;
          }

          ge = 0;
          P = O = N = null;
          ie = !1;
          qg.current = null;

          if (null === c || null === c["return"]) {
            T = 1;
            ug = b;
            W = null;
            break;
          }

          a: {
            var f = a,
                g = c["return"],
                h = c,
                k = b;
            b = U;
            h.flags |= 2048;
            h.firstEffect = h.lastEffect = null;

            if (null !== k && "object" === _typeof(k) && "function" === typeof k.then) {
              var l = k;

              if (0 === (h.mode & 2)) {
                var n = h.alternate;
                n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
              }

              var t = 0 !== (M.current & 1),
                  p = g;

              do {
                var y;

                if (y = 13 === p.tag) {
                  var x = p.memoizedState;
                  if (null !== x) { y = null !== x.dehydrated ? !0 : !1; }else {
                    var Y = p.memoizedProps;
                    y = void 0 === Y.fallback ? !1 : !0 !== Y.unstable_avoidThisFallback ? !0 : t ? !1 : !0;
                  }
                }

                if (y) {
                  var u = p.updateQueue;

                  if (null === u) {
                    var v = new Set();
                    v.add(l);
                    p.updateQueue = v;
                  } else { u.add(l); }

                  if (0 === (p.mode & 2)) {
                    p.flags |= 64;
                    h.flags |= 16384;
                    h.flags &= -2981;
                    if (1 === h.tag) { if (null === h.alternate) { h.tag = 17; }else {
                      var C = jd(-1, 1);
                      C.tag = 2;
                      ld(h, C);
                    } }
                    h.lanes |= 1;
                    break a;
                  }

                  k = void 0;
                  h = b;
                  var Oa = f.pingCache;
                  null === Oa ? (Oa = f.pingCache = new zf(), k = new Set(), Oa.set(l, k)) : (k = Oa.get(l), void 0 === k && (k = new Set(), Oa.set(l, k)));

                  if (!k.has(h)) {
                    k.add(h);
                    var Pe = bh.bind(null, f, l, h);
                    l.then(Pe, Pe);
                  }

                  p.flags |= 4096;
                  p.lanes = b;
                  break a;
                }

                p = p["return"];
              } while (null !== p);

              k = Error((wa(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
            }

            5 !== T && (T = 2);
            k = xf(k, h);
            p = g;

            do {
              switch (p.tag) {
                case 3:
                  f = k;
                  p.flags |= 4096;
                  b &= -b;
                  p.lanes |= b;
                  var Vg = Af(p, f, b);
                  md(p, Vg);
                  break a;

                case 1:
                  f = k;
                  var Wg = p.type,
                      kd = p.stateNode;

                  if (0 === (p.flags & 64) && ("function" === typeof Wg.getDerivedStateFromError || null !== kd && "function" === typeof kd.componentDidCatch && (null === Ef || !Ef.has(kd)))) {
                    p.flags |= 4096;
                    b &= -b;
                    p.lanes |= b;
                    var Xg = Df(p, f, b);
                    md(p, Xg);
                    break a;
                  }

              }

              p = p["return"];
            } while (null !== p);
          }

          ch(c);
        } catch (w) {
          b = w;
          W === c && null !== c && (W = c = c["return"]);
          continue;
        }

        break;
      } while (1);
    }

    function Qg() {
      var a = pg.current;
      pg.current = oe;
      return null === a ? oe : a;
    }

    function Ug(a, b) {
      var c = V;
      V |= 16;
      var d = Qg();
      R === a && U === b || Rg(a, b);

      do {
        try {
          dh();
          break;
        } catch (e) {
          Tg(a, e);
        }
      } while (1);

      ad();
      V = c;
      pg.current = d;
      if (null !== W) { throw Error(q(261)); }
      R = null;
      U = 0;
      return T;
    }

    function dh() {
      for (; null !== W;) {
        eh(W);
      }
    }

    function Sg() {
      for (; null !== W && !xc();) {
        eh(W);
      }
    }

    function eh(a) {
      var b = fh(a.alternate, a, sg);
      a.memoizedProps = a.pendingProps;
      null === b ? ch(a) : W = b;
      qg.current = null;
    }

    function ch(a) {
      var b = a;

      do {
        var c = b.alternate;
        a = b["return"];

        if (0 === (b.flags & 2048)) {
          c = rf(c, b, sg);

          if (null !== c) {
            W = c;
            return;
          }

          c = b;

          if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (sg & 1073741824) || 0 === (c.mode & 4)) {
            for (var d = 0, e = c.child; null !== e;) {
              d |= e.lanes | e.childLanes, e = e.sibling;
            }

            c.childLanes = d;
          }

          null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
        } else {
          c = wf(b);

          if (null !== c) {
            c.flags &= 2047;
            W = c;
            return;
          }

          null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
        }

        b = b.sibling;

        if (null !== b) {
          W = b;
          return;
        }

        W = b = a;
      } while (null !== b);

      0 === T && (T = 5);
    }

    function Yg(a) {
      var b = Mc();
      Oc(99, gh.bind(null, a, b));
      return null;
    }

    function gh(a, b) {
      do {
        Pg();
      } while (null !== Ag);

      if (0 !== (V & 48)) { throw Error(q(327)); }
      var c = a.finishedWork;
      if (null === c) { return null; }
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current) { throw Error(q(177)); }
      a.callbackNode = null;
      var d = c.lanes | c.childLanes,
          e = d,
          f = a.pendingLanes & ~e;
      a.pendingLanes = e;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= e;
      a.mutableReadLanes &= e;
      a.entangledLanes &= e;
      e = a.entanglements;

      for (var g = a.eventTimes, h = a.expirationTimes; 0 < f;) {
        var k = 31 - mc(f),
            l = 1 << k;
        e[k] = 0;
        g[k] = -1;
        h[k] = -1;
        f &= ~l;
      }

      null !== Eg && 0 === (d & 24) && Eg.has(a) && Eg["delete"](a);
      a === R && (W = R = null, U = 0);
      1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;

      if (null !== d) {
        e = V;
        V |= 32;
        qg.current = null;
        Kg = Ga(a.containerInfo);
        Lg = !1;
        X = d;

        do {
          try {
            hh();
          } catch (v) {
            if (null === X) { throw Error(q(330)); }
            Hf(X, v);
            X = X.nextEffect;
          }
        } while (null !== X);

        Kg = null;
        X = d;

        do {
          try {
            for (g = a; null !== X;) {
              var n = X.flags;
              n & 16 && Ta && sb(X.stateNode);

              if (n & 128) {
                var t = X.alternate;

                if (null !== t) {
                  var p = t.ref;
                  null !== p && ("function" === typeof p ? p(null) : p.current = null);
                }
              }

              switch (n & 1038) {
                case 2:
                  Tf(X);
                  X.flags &= -3;
                  break;

                case 6:
                  Tf(X);
                  X.flags &= -3;
                  Wf(X.alternate, X);
                  break;

                case 1024:
                  X.flags &= -1025;
                  break;

                case 1028:
                  X.flags &= -1025;
                  Wf(X.alternate, X);
                  break;

                case 4:
                  Wf(X.alternate, X);
                  break;

                case 8:
                  h = g;
                  f = X;
                  Ta ? Pf(h, f) : Qf(h, f);
                  var y = f.alternate;
                  Rf(f);
                  null !== y && Rf(y);
              }

              X = X.nextEffect;
            }
          } catch (v) {
            if (null === X) { throw Error(q(330)); }
            Hf(X, v);
            X = X.nextEffect;
          }
        } while (null !== X);

        Lg && $a();
        Ha(a.containerInfo);
        a.current = c;
        X = d;

        do {
          try {
            for (n = a; null !== X;) {
              var x = X.flags;
              x & 36 && Kf(n, X.alternate, X);

              if (x & 128) {
                t = void 0;
                var Y = X.ref;

                if (null !== Y) {
                  var u = X.stateNode;

                  switch (X.tag) {
                    case 5:
                      t = Da(u);
                      break;

                    default:
                      t = u;
                  }

                  "function" === typeof Y ? Y(t) : Y.current = t;
                }
              }

              X = X.nextEffect;
            }
          } catch (v) {
            if (null === X) { throw Error(q(330)); }
            Hf(X, v);
            X = X.nextEffect;
          }
        } while (null !== X);

        X = null;
        Hc();
        V = e;
      } else { a.current = c; }

      if (zg) { zg = !1, Ag = a, Bg = b; }else { for (X = d; null !== X;) {
        b = X.nextEffect, X.nextEffect = null, X.flags & 8 && (x = X, x.sibling = null, x.stateNode = null), X = b;
      } }
      d = a.pendingLanes;
      0 === d && (Ef = null);
      1 === d ? a === Gg ? Fg++ : (Fg = 0, Gg = a) : Fg = 0;
      c = c.stateNode;
      if (fc && "function" === typeof fc.onCommitFiberRoot) { try {
        fc.onCommitFiberRoot(ec, c, void 0, 64 === (c.current.flags & 64));
      } catch (v) {} }
      Z(a, G());
      if (Bf) { throw Bf = !1, a = Cf, Cf = null, a; }
      if (0 !== (V & 8)) { return null; }
      H();
      return null;
    }

    function hh() {
      for (; null !== X;) {
        var a = X.alternate;
        Lg || null === Kg || (0 !== (X.flags & 8) ? Ca(X, Kg) && (Lg = !0, Za()) : 13 === X.tag && ag(a, X) && Ca(X, Kg) && (Lg = !0, Za()));
        var b = X.flags;
        0 !== (b & 256) && If(a, X);
        0 === (b & 512) || zg || (zg = !0, Pc(97, function () {
          Pg();
          return null;
        }));
        X = X.nextEffect;
      }
    }

    function Pg() {
      if (90 !== Bg) {
        var a = 97 < Bg ? 97 : Bg;
        Bg = 90;
        return Oc(a, ih);
      }

      return !1;
    }

    function Mf(a, b) {
      Cg.push(b, a);
      zg || (zg = !0, Pc(97, function () {
        Pg();
        return null;
      }));
    }

    function Lf(a, b) {
      Dg.push(b, a);
      zg || (zg = !0, Pc(97, function () {
        Pg();
        return null;
      }));
    }

    function ih() {
      if (null === Ag) { return !1; }
      var a = Ag;
      Ag = null;
      if (0 !== (V & 48)) { throw Error(q(331)); }
      var b = V;
      V |= 32;
      var c = Dg;
      Dg = [];

      for (var d = 0; d < c.length; d += 2) {
        var e = c[d],
            f = c[d + 1],
            g = e.destroy;
        e.destroy = void 0;
        if ("function" === typeof g) { try {
          g();
        } catch (k) {
          if (null === f) { throw Error(q(330)); }
          Hf(f, k);
        } }
      }

      c = Cg;
      Cg = [];

      for (d = 0; d < c.length; d += 2) {
        e = c[d];
        f = c[d + 1];

        try {
          var h = e.create;
          e.destroy = h();
        } catch (k) {
          if (null === f) { throw Error(q(330)); }
          Hf(f, k);
        }
      }

      for (h = a.current.firstEffect; null !== h;) {
        a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
      }

      V = b;
      H();
      return !0;
    }

    function jh(a, b, c) {
      b = xf(c, b);
      b = Af(a, b, 1);
      ld(a, b);
      b = K();
      a = Mg(a, 1);
      null !== a && (qc(a, 1, b), Z(a, b));
    }

    function Hf(a, b) {
      if (3 === a.tag) { jh(a, a, b); }else { for (var c = a["return"]; null !== c;) {
        if (3 === c.tag) {
          jh(c, a, b);
          break;
        } else if (1 === c.tag) {
          var d = c.stateNode;

          if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ef || !Ef.has(d))) {
            a = xf(b, a);
            var e = Df(c, a, 1);
            ld(c, e);
            e = K();
            c = Mg(c, 1);
            if (null !== c) { qc(c, 1, e), Z(c, e); }else if ("function" === typeof d.componentDidCatch && (null === Ef || !Ef.has(d))) { try {
              d.componentDidCatch(b, a);
            } catch (f) {} }
            break;
          }
        }

        c = c["return"];
      } }
    }

    function bh(a, b, c) {
      var d = a.pingCache;
      null !== d && d["delete"](b);
      b = K();
      a.pingedLanes |= a.suspendedLanes & c;
      R === a && (U & c) === c && (4 === T || 3 === T && (U & 62914560) === U && 500 > G() - Zf ? Rg(a, 0) : wg |= c);
      Z(a, b);
    }

    function $f(a, b) {
      var c = a.stateNode;
      null !== c && c["delete"](b);
      b = 0;
      0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === Mc() ? 1 : 2 : (0 === Ig && (Ig = vg), b = pc(62914560 & ~Ig), 0 === b && (b = 4194304)));
      c = K();
      a = Mg(a, b);
      null !== a && (qc(a, b, c), Z(a, c));
    }

    var fh;

    fh = function fh(a, b, c) {
      var d = b.lanes;
      if (null !== a) {
        if (a.memoizedProps !== b.pendingProps || D.current) { fd = !0; }else if (0 !== (c & d)) { fd = 0 !== (a.flags & 16384) ? !0 : !1; }else {
          fd = !1;

          switch (b.tag) {
            case 3:
              $e(b);
              be();
              break;

            case 5:
              Qd(b);
              break;

            case 1:
              E(b.type) && cc(b);
              break;

            case 4:
              Od(b, b.stateNode.containerInfo);
              break;

            case 10:
              bd(b, b.memoizedProps.value);
              break;

            case 13:
              if (null !== b.memoizedState) {
                if (0 !== (c & b.child.childLanes)) { return bf(a, b, c); }
                A(M, M.current & 1);
                b = Qe(a, b, c);
                return null !== b ? b.sibling : null;
              }

              A(M, M.current & 1);
              break;

            case 19:
              d = 0 !== (c & b.childLanes);

              if (0 !== (a.flags & 64)) {
                if (d) { return jf(a, b, c); }
                b.flags |= 64;
              }

              var e = b.memoizedState;
              null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
              A(M, M.current);
              if (d) { break; }else { return null; }

            case 23:
            case 24:
              return b.lanes = 0, Ve(a, b, c);
          }

          return Qe(a, b, c);
        }
      } else { fd = !1; }
      b.lanes = 0;

      switch (b.tag) {
        case 2:
          d = b.type;
          null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
          a = b.pendingProps;
          e = Zb(b, B.current);
          ed(b, c);
          e = ke(null, b, d, a, e, c);
          b.flags |= 1;

          if ("object" === _typeof(e) && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
            b.tag = 1;
            b.memoizedState = null;
            b.updateQueue = null;

            if (E(d)) {
              var f = !0;
              cc(b);
            } else { f = !1; }

            b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
            hd(b);
            var g = d.getDerivedStateFromProps;
            "function" === typeof g && rd(b, d, g, a);
            e.updater = ud;
            b.stateNode = e;
            e._reactInternals = b;
            yd(b, d, a, c);
            b = Ze(null, b, d, !0, f, c);
          } else { b.tag = 0, S(null, b, e, c), b = b.child; }

          return b;

        case 16:
          e = b.elementType;

          a: {
            null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
            a = b.pendingProps;
            f = e._init;
            e = f(e._payload);
            b.type = e;
            f = b.tag = kh(e);
            a = Wc(e, a);

            switch (f) {
              case 0:
                b = Ue(null, b, e, a, c);
                break a;

              case 1:
                b = Ye(null, b, e, a, c);
                break a;

              case 11:
                b = Oe(null, b, e, a, c);
                break a;

              case 14:
                b = Re(null, b, e, Wc(e.type, a), d, c);
                break a;
            }

            throw Error(q(306, e, ""));
          }

          return b;

        case 0:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Wc(d, e), Ue(a, b, d, e, c);

        case 1:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Wc(d, e), Ye(a, b, d, e, c);

        case 3:
          $e(b);
          d = b.updateQueue;
          if (null === a || null === d) { throw Error(q(282)); }
          d = b.pendingProps;
          e = b.memoizedState;
          e = null !== e ? e.element : null;
          id(a, b);
          nd(b, d, null, c);
          d = b.memoizedState.element;
          if (d === e) { be(), b = Qe(a, b, c); }else {
            e = b.stateNode;
            if (f = e.hydrate) { Va ? (Ud = Kb(b.stateNode.containerInfo), Td = b, f = Vd = !0) : f = !1; }

            if (f) {
              if (Va && (a = e.mutableSourceEagerHydrationData, null != a)) { for (e = 0; e < a.length; e += 2) {
                f = a[e], g = a[e + 1], Sa ? f._workInProgressVersionPrimary = g : f._workInProgressVersionSecondary = g, ce.push(f);
              } }
              c = Jd(b, null, d, c);

              for (b.child = c; c;) {
                c.flags = c.flags & -3 | 1024, c = c.sibling;
              }
            } else { S(a, b, d, c), be(); }

            b = b.child;
          }
          return b;

        case 5:
          return Qd(b), null === a && Zd(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ma(d, e) ? g = null : null !== f && Ma(d, f) && (b.flags |= 16), Xe(a, b), S(a, b, g, c), b.child;

        case 6:
          return null === a && Zd(b), null;

        case 13:
          return bf(a, b, c);

        case 4:
          return Od(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Id(b, null, d, c) : S(a, b, d, c), b.child;

        case 11:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Wc(d, e), Oe(a, b, d, e, c);

        case 7:
          return S(a, b, b.pendingProps, c), b.child;

        case 8:
          return S(a, b, b.pendingProps.children, c), b.child;

        case 12:
          return S(a, b, b.pendingProps.children, c), b.child;

        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            g = b.memoizedProps;
            f = e.value;
            bd(b, f);

            if (null !== g) {
              var h = g.value;
              f = I(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;

              if (0 === f) {
                if (g.children === e.children && !D.current) {
                  b = Qe(a, b, c);
                  break a;
                }
              } else { for (h = b.child, null !== h && (h["return"] = b); null !== h;) {
                var k = h.dependencies;

                if (null !== k) {
                  g = h.child;

                  for (var l = k.firstContext; null !== l;) {
                    if (l.context === d && 0 !== (l.observedBits & f)) {
                      1 === h.tag && (l = jd(-1, c & -c), l.tag = 2, ld(h, l));
                      h.lanes |= c;
                      l = h.alternate;
                      null !== l && (l.lanes |= c);
                      dd(h["return"], c);
                      k.lanes |= c;
                      break;
                    }

                    l = l.next;
                  }
                } else { g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child; }

                if (null !== g) { g["return"] = h; }else { for (g = h; null !== g;) {
                  if (g === b) {
                    g = null;
                    break;
                  }

                  h = g.sibling;

                  if (null !== h) {
                    h["return"] = g["return"];
                    g = h;
                    break;
                  }

                  g = g["return"];
                } }
                h = g;
              } }
            }

            S(a, b, e.children, c);
            b = b.child;
          }

          return b;

        case 9:
          return e = b.type, f = b.pendingProps, d = f.children, ed(b, c), e = J(e, f.unstable_observedBits), d = d(e), b.flags |= 1, S(a, b, d, c), b.child;

        case 14:
          return e = b.type, f = Wc(e, b.pendingProps), f = Wc(e.type, f), Re(a, b, e, f, d, c);

        case 15:
          return Te(a, b, b.type, b.pendingProps, d, c);

        case 17:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Wc(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, E(d) ? (a = !0, cc(b)) : a = !1, ed(b, c), wd(b, d, e), yd(b, d, e, c), Ze(null, b, d, !0, a, c);

        case 19:
          return jf(a, b, c);

        case 23:
          return Ve(a, b, c);

        case 24:
          return Ve(a, b, c);
      }

      throw Error(q(156, b.tag));
    };

    var lh = {
      current: !1
    },
        mh = m.unstable_flushAllWithoutAsserting,
        nh = "function" === typeof mh;

    function oh() {
      if (void 0 !== mh) { return mh(); }

      for (var a = !1; Pg();) {
        a = !0;
      }

      return a;
    }

    function ph(a) {
      try {
        oh(), ng(function () {
          oh() ? ph(a) : a();
        });
      } catch (b) {
        a(b);
      }
    }

    var qh = 0,
        rh = !1;

    function sh(a, b, c, d) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this["return"] = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d;
      this.flags = 0;
      this.lastEffect = this.firstEffect = this.nextEffect = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }

    function Xd(a, b, c, d) {
      return new sh(a, b, c, d);
    }

    function Se(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }

    function kh(a) {
      if ("function" === typeof a) { return Se(a) ? 1 : 0; }

      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === la) { return 11; }
        if (a === oa) { return 14; }
      }

      return 2;
    }

    function Dd(a, b) {
      var c = a.alternate;
      null === c ? (c = Xd(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
      c.childLanes = a.childLanes;
      c.lanes = a.lanes;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies = null === b ? null : {
        lanes: b.lanes,
        firstContext: b.firstContext
      };
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      return c;
    }

    function Fd(a, b, c, d, e, f) {
      var g = 2;
      d = a;
      if ("function" === typeof a) { Se(a) && (g = 1); }else if ("string" === typeof a) { g = 5; }else { a: switch (a) {
        case fa:
          return Hd(c.children, e, f, b);

        case ra:
          g = 8;
          e |= 16;
          break;

        case ha:
          g = 8;
          e |= 1;
          break;

        case ia:
          return a = Xd(12, c, b, e | 8), a.elementType = ia, a.type = ia, a.lanes = f, a;

        case ma:
          return a = Xd(13, c, b, e), a.type = ma, a.elementType = ma, a.lanes = f, a;

        case na:
          return a = Xd(19, c, b, e), a.elementType = na, a.lanes = f, a;

        case sa:
          return df(c, e, f, b);

        case ta:
          return a = Xd(24, c, b, e), a.elementType = ta, a.lanes = f, a;

        default:
          if ("object" === _typeof(a) && null !== a) { switch (a.$$typeof) {
            case ja:
              g = 10;
              break a;

            case ka:
              g = 9;
              break a;

            case la:
              g = 11;
              break a;

            case oa:
              g = 14;
              break a;

            case pa:
              g = 16;
              d = null;
              break a;

            case qa:
              g = 22;
              break a;
          } }
          throw Error(q(130, null == a ? a : _typeof(a), ""));
      } }
      b = Xd(g, c, b, e);
      b.elementType = a;
      b.type = d;
      b.lanes = f;
      return b;
    }

    function Hd(a, b, c, d) {
      a = Xd(7, a, d, b);
      a.lanes = c;
      return a;
    }

    function df(a, b, c, d) {
      a = Xd(23, a, d, b);
      a.elementType = sa;
      a.lanes = c;
      return a;
    }

    function Ed(a, b, c) {
      a = Xd(6, a, null, b);
      a.lanes = c;
      return a;
    }

    function Gd(a, b, c) {
      b = Xd(4, null !== a.children ? a.children : [], a.key, b);
      b.lanes = c;
      b.stateNode = {
        containerInfo: a.containerInfo,
        pendingChildren: null,
        implementation: a.implementation
      };
      return b;
    }

    function th(a, b, c) {
      this.tag = b;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = Ra;
      this.pendingContext = this.context = null;
      this.hydrate = c;
      this.callbackNode = null;
      this.callbackPriority = 0;
      this.eventTimes = Array(31).fill(0);
      this.expirationTimes = Array(31).fill(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = Array(31).fill(0);
      Va && (this.mutableSourceEagerHydrationData = null);
    }

    function uh(a) {
      var b = a._reactInternals;

      if (void 0 === b) {
        if ("function" === typeof a.render) { throw Error(q(188)); }
        throw Error(q(268, Object.keys(a)));
      }

      a = Aa(b);
      return null === a ? null : a.stateNode;
    }

    function vh(a, b) {
      a = a.memoizedState;

      if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
      }
    }

    function wh(a, b) {
      vh(a, b);
      (a = a.alternate) && vh(a, b);
    }

    function xh(a) {
      a = Aa(a);
      return null === a ? null : a.stateNode;
    }

    function yh() {
      return null;
    }

    exports.IsThisRendererActing = lh;

    exports.act = function (a) {
      function b() {
        qh--;
        rg.current = c;
        lh.current = d;
      }

      !1 === rh && (rh = !0, console.error("act(...) is not supported in production builds of React, and might not behave as expected."));
      qh++;
      var c = rg.current,
          d = lh.current;
      rg.current = !0;
      lh.current = !0;

      try {
        var e = $g(a);
      } catch (f) {
        throw b(), f;
      }

      if (null !== e && "object" === _typeof(e) && "function" === typeof e.then) { return {
        then: function then(a, d) {
          e.then(function () {
            1 < qh || !0 === nh && !0 === c ? (b(), a()) : ph(function (c) {
              b();
              c ? d(c) : a();
            });
          }, function (a) {
            b();
            d(a);
          });
        }
      }; }

      try {
        1 !== qh || !1 !== nh && !1 !== c || oh(), b();
      } catch (f) {
        throw b(), f;
      }

      return {
        then: function then(a) {
          a();
        }
      };
    };

    exports.attemptContinuousHydration = function (a) {
      if (13 === a.tag) {
        var b = K();
        td(a, 67108864, b);
        wh(a, 67108864);
      }
    };

    exports.attemptHydrationAtCurrentPriority = function (a) {
      if (13 === a.tag) {
        var b = K(),
            c = sd(a);
        td(a, c, b);
        wh(a, c);
      }
    };

    exports.attemptSynchronousHydration = function (a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;

          if (b.hydrate) {
            var c = ic(b.pendingLanes);
            b.expiredLanes |= c & b.pendingLanes;
            Z(b, G());
            0 === (V & 48) && (yg(), H());
          }

          break;

        case 13:
          var d = K();
          ah(function () {
            return td(a, 1, d);
          });
          wh(a, 4);
      }
    };

    exports.attemptUserBlockingHydration = function (a) {
      if (13 === a.tag) {
        var b = K();
        td(a, 4, b);
        wh(a, 4);
      }
    };

    exports.batchedEventUpdates = function (a, b) {
      var c = V;
      V |= 2;

      try {
        return a(b);
      } finally {
        V = c, 0 === V && (yg(), H());
      }
    };

    exports.batchedUpdates = $g;

    exports.createComponentSelector = function (a) {
      return {
        $$typeof: bg,
        value: a
      };
    };

    exports.createContainer = function (a, b, c) {
      a = new th(a, b, c);
      b = Xd(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
      a.current = b;
      b.stateNode = a;
      hd(b);
      return a;
    };

    exports.createHasPsuedoClassSelector = function (a) {
      return {
        $$typeof: cg,
        value: a
      };
    };

    exports.createPortal = function (a, b, c) {
      var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: ea,
        key: null == d ? null : "" + d,
        children: a,
        containerInfo: b,
        implementation: c
      };
    };

    exports.createRoleSelector = function (a) {
      return {
        $$typeof: dg,
        value: a
      };
    };

    exports.createTestNameSelector = function (a) {
      return {
        $$typeof: eg,
        value: a
      };
    };

    exports.createTextSelector = function (a) {
      return {
        $$typeof: fg,
        value: a
      };
    };

    exports.deferredUpdates = function (a) {
      return Oc(97, a);
    };

    exports.discreteUpdates = function (a, b, c, d, e) {
      var f = V;
      V |= 4;

      try {
        return Oc(98, a.bind(null, b, c, d, e));
      } finally {
        V = f, 0 === V && (yg(), H());
      }
    };

    exports.findAllNodes = lg;

    exports.findBoundingRects = function (a, b) {
      if (!bb) { throw Error(q(363)); }
      b = lg(a, b);
      a = [];

      for (var c = 0; c < b.length; c++) {
        a.push(db(b[c]));
      }

      for (b = a.length - 1; 0 < b; b--) {
        c = a[b];

        for (var d = c.x, e = d + c.width, f = c.y, g = f + c.height, h = b - 1; 0 <= h; h--) {
          if (b !== h) {
            var k = a[h],
                l = k.x,
                n = l + k.width,
                t = k.y,
                p = t + k.height;

            if (d >= l && f >= t && e <= n && g <= p) {
              a.splice(b, 1);
              break;
            } else if (!(d !== l || c.width !== k.width || p < f || t > g)) {
              t > f && (k.height += t - f, k.y = f);
              p < g && (k.height = g - t);
              a.splice(b, 1);
              break;
            } else if (!(f !== t || c.height !== k.height || n < d || l > e)) {
              l > d && (k.width += l - d, k.x = d);
              n < e && (k.width = e - l);
              a.splice(b, 1);
              break;
            }
          }
        }
      }

      return a;
    };

    exports.findHostInstance = uh;

    exports.findHostInstanceWithNoPortals = function (a) {
      a = Ba(a);
      return null === a ? null : 20 === a.tag ? a.stateNode.instance : a.stateNode;
    };

    exports.findHostInstanceWithWarning = function (a) {
      return uh(a);
    };

    exports.flushControlled = function (a) {
      var b = V;
      V |= 1;

      try {
        Oc(99, a);
      } finally {
        V = b, 0 === V && (yg(), H());
      }
    };

    exports.flushDiscreteUpdates = function () {
      0 === (V & 49) && (Zg(), Pg());
    };

    exports.flushPassiveEffects = Pg;
    exports.flushSync = ah;

    exports.focusWithin = function (a, b) {
      if (!bb) { throw Error(q(363)); }
      a = hg(a);
      b = kg(a, b);
      b = Array.from(b);

      for (a = 0; a < b.length;) {
        var c = b[a++];

        if (!fb(c)) {
          if (5 === c.tag && hb(c.stateNode)) { return !0; }

          for (c = c.child; null !== c;) {
            b.push(c), c = c.sibling;
          }
        }
      }

      return !1;
    };

    exports.getCurrentUpdateLanePriority = function () {
      return hc;
    };

    exports.getFindAllNodesFailureDescription = function (a, b) {
      if (!bb) { throw Error(q(363)); }
      var c = 0,
          d = [];
      a = [hg(a), 0];

      for (var e = 0; e < a.length;) {
        var f = a[e++],
            g = a[e++],
            h = b[g];
        if (5 !== f.tag || !fb(f)) { if (ig(f, h) && (d.push(jg(h)), g++, g > c && (c = g)), g < b.length) { for (f = f.child; null !== f;) {
          a.push(f, g), f = f.sibling;
        } } }
      }

      if (c < b.length) {
        for (a = []; c < b.length; c++) {
          a.push(jg(b[c]));
        }

        return "findAllNodes was able to match part of the selector:\n  " + (d.join(" > ") + "\n\nNo matching component was found for:\n  ") + a.join(" > ");
      }

      return null;
    };

    exports.getPublicRootInstance = function (a) {
      a = a.current;
      if (!a.child) { return null; }

      switch (a.child.tag) {
        case 5:
          return Da(a.child.stateNode);

        default:
          return a.child.stateNode;
      }
    };

    exports.injectIntoDevTools = function (a) {
      a = {
        bundleType: a.bundleType,
        version: a.version,
        rendererPackageName: a.rendererPackageName,
        rendererConfig: a.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ca.ReactCurrentDispatcher,
        findHostInstanceByFiber: xh,
        findFiberByHostInstance: a.findFiberByHostInstance || yh,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
      };
      if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) { a = !1; }else {
        var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!b.isDisabled && b.supportsFiber) { try {
          ec = b.inject(a), fc = b;
        } catch (c) {} }
        a = !0;
      }
      return a;
    };

    exports.observeVisibleRects = function (a, b, c, d) {
      if (!bb) { throw Error(q(363)); }
      a = lg(a, b);
      var e = ib(a, c, d).disconnect;
      return {
        disconnect: function disconnect() {
          e();
        }
      };
    };

    exports.registerMutableSourceForHydration = function (a, b) {
      var c = b._getVersion;
      c = c(b._source);
      null == a.mutableSourceEagerHydrationData ? a.mutableSourceEagerHydrationData = [b, c] : a.mutableSourceEagerHydrationData.push(b, c);
    };

    exports.runWithPriority = function (a, b) {
      var c = hc;

      try {
        return hc = a, b();
      } finally {
        hc = c;
      }
    };

    exports.shouldSuspend = function () {
      return !1;
    };

    exports.unbatchedUpdates = function (a, b) {
      var c = V;
      V &= -2;
      V |= 8;

      try {
        return a(b);
      } finally {
        V = c, 0 === V && (yg(), H());
      }
    };

    exports.updateContainer = function (a, b, c, d) {
      var e = b.current,
          f = K(),
          g = sd(e);

      a: if (c) {
        c = c._reactInternals;

        b: {
          if (xa(c) !== c || 1 !== c.tag) { throw Error(q(170)); }
          var h = c;

          do {
            switch (h.tag) {
              case 3:
                h = h.stateNode.context;
                break b;

              case 1:
                if (E(h.type)) {
                  h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                  break b;
                }

            }

            h = h["return"];
          } while (null !== h);

          throw Error(q(171));
        }

        if (1 === c.tag) {
          var k = c.type;

          if (E(k)) {
            c = bc(c, k, h);
            break a;
          }
        }

        c = h;
      } else { c = Xb; }

      null === b.context ? b.context = c : b.pendingContext = c;
      b = jd(f, g);
      b.payload = {
        element: a
      };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      ld(e, b);
      td(e, g, f);
      return g;
    };

    return exports;
  };

  var reactReconciler_production_min = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  if(process.env.NODE_ENV!=="production"){module.exports=function $$$reconciler($$$hostConfig){var exports={};var React=require('react');var _assign=require('object-assign');var Scheduler=require('scheduler');var tracing=require('scheduler/tracing');var ReactSharedInternals=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;// by calls to these methods by a Babel plugin.
  //
  // In PROD (or in packages without access to React internals),
  // they are left as they are instead.
  function warn(format){
  var arguments$1 = arguments;
  {for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments$1[_key];}printWarning('warn',format,args);}}function error(format){
  var arguments$1 = arguments;
  {for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments$1[_key2];}printWarning('error',format,args);}}function printWarning(level,format,args){// When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {var ReactDebugCurrentFrame=ReactSharedInternals.ReactDebugCurrentFrame;var stack=ReactDebugCurrentFrame.getStackAddendum();if(stack!==''){format+='%s';args=args.concat([stack]);}var argsWithFormat=args.map(function(item){return ''+item;});// Careful: RN currently depends on this prefix
  argsWithFormat.unshift('Warning: '+format);// We intentionally don't use spread (or .apply) directly because it
  // breaks IE9: https://github.com/facebook/react/issues/13610
  // eslint-disable-next-line react-internal/no-production-logging
  Function.prototype.apply.call(console[level],console,argsWithFormat);}}var FunctionComponent=0;var ClassComponent=1;var IndeterminateComponent=2;// Before we know whether it is function or class
  var HostRoot=3;// Root of a host tree. Could be nested inside another node.
  var HostPortal=4;// A subtree. Could be an entry point to a different renderer.
  var HostComponent=5;var HostText=6;var Fragment=7;var Mode=8;var ContextConsumer=9;var ContextProvider=10;var ForwardRef=11;var Profiler=12;var SuspenseComponent=13;var MemoComponent=14;var SimpleMemoComponent=15;var LazyComponent=16;var IncompleteClassComponent=17;var DehydratedFragment=18;var SuspenseListComponent=19;var FundamentalComponent=20;var ScopeComponent=21;var Block=22;var OffscreenComponent=23;var LegacyHiddenComponent=24;/**
   * `ReactInstanceMap` maintains a mapping from a public facing stateful
   * instance (key) and the internal representation (value). This allows public
   * methods to accept the user facing instance as an argument and map them back
   * to internal methods.
   *
   * Note that this module is currently shared and assumed to be stateless.
   * If this becomes an actual Map, that will break.
   */function get(key){return key._reactInternals;}function set(key,value){key._reactInternals=value;}// ATTENTION
  // When adding new symbols to this file,
  // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var REACT_ELEMENT_TYPE=0xeac7;var REACT_PORTAL_TYPE=0xeaca;var REACT_FRAGMENT_TYPE=0xeacb;var REACT_STRICT_MODE_TYPE=0xeacc;var REACT_PROFILER_TYPE=0xead2;var REACT_PROVIDER_TYPE=0xeacd;var REACT_CONTEXT_TYPE=0xeace;var REACT_FORWARD_REF_TYPE=0xead0;var REACT_SUSPENSE_TYPE=0xead1;var REACT_SUSPENSE_LIST_TYPE=0xead8;var REACT_MEMO_TYPE=0xead3;var REACT_LAZY_TYPE=0xead4;var REACT_BLOCK_TYPE=0xead9;var REACT_SERVER_BLOCK_TYPE=0xeada;var REACT_FUNDAMENTAL_TYPE=0xead5;var REACT_SCOPE_TYPE=0xead7;var REACT_OPAQUE_ID_TYPE=0xeae0;var REACT_DEBUG_TRACING_MODE_TYPE=0xeae1;var REACT_OFFSCREEN_TYPE=0xeae2;var REACT_LEGACY_HIDDEN_TYPE=0xeae3;if(typeof Symbol==='function'&&Symbol["for"]){var symbolFor=Symbol["for"];REACT_ELEMENT_TYPE=symbolFor('react.element');REACT_PORTAL_TYPE=symbolFor('react.portal');REACT_FRAGMENT_TYPE=symbolFor('react.fragment');REACT_STRICT_MODE_TYPE=symbolFor('react.strict_mode');REACT_PROFILER_TYPE=symbolFor('react.profiler');REACT_PROVIDER_TYPE=symbolFor('react.provider');REACT_CONTEXT_TYPE=symbolFor('react.context');REACT_FORWARD_REF_TYPE=symbolFor('react.forward_ref');REACT_SUSPENSE_TYPE=symbolFor('react.suspense');REACT_SUSPENSE_LIST_TYPE=symbolFor('react.suspense_list');REACT_MEMO_TYPE=symbolFor('react.memo');REACT_LAZY_TYPE=symbolFor('react.lazy');REACT_BLOCK_TYPE=symbolFor('react.block');REACT_SERVER_BLOCK_TYPE=symbolFor('react.server.block');REACT_FUNDAMENTAL_TYPE=symbolFor('react.fundamental');REACT_SCOPE_TYPE=symbolFor('react.scope');REACT_OPAQUE_ID_TYPE=symbolFor('react.opaque.id');REACT_DEBUG_TRACING_MODE_TYPE=symbolFor('react.debug_trace_mode');REACT_OFFSCREEN_TYPE=symbolFor('react.offscreen');REACT_LEGACY_HIDDEN_TYPE=symbolFor('react.legacy_hidden');}var MAYBE_ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';function getIteratorFn(maybeIterable){if(maybeIterable===null||_typeof(maybeIterable)!=='object'){return null;}var maybeIterator=MAYBE_ITERATOR_SYMBOL&&maybeIterable[MAYBE_ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL];if(typeof maybeIterator==='function'){return maybeIterator;}return null;}function getWrappedName(outerType,innerType,wrapperName){var functionName=innerType.displayName||innerType.name||'';return outerType.displayName||(functionName!==''?wrapperName+"("+functionName+")":wrapperName);}function getContextName(type){return type.displayName||'Context';}function getComponentName(type){if(type==null){// Host root, text node or just invalid type.
  return null;}{if(typeof type.tag==='number'){error('Received an unexpected object in getComponentName(). '+'This is likely a bug in React. Please file an issue.');}}if(typeof type==='function'){return type.displayName||type.name||null;}if(typeof type==='string'){return type;}switch(type){case REACT_FRAGMENT_TYPE:return 'Fragment';case REACT_PORTAL_TYPE:return 'Portal';case REACT_PROFILER_TYPE:return 'Profiler';case REACT_STRICT_MODE_TYPE:return 'StrictMode';case REACT_SUSPENSE_TYPE:return 'Suspense';case REACT_SUSPENSE_LIST_TYPE:return 'SuspenseList';}if(_typeof(type)==='object'){switch(type.$$typeof){case REACT_CONTEXT_TYPE:var context=type;return getContextName(context)+'.Consumer';case REACT_PROVIDER_TYPE:var provider=type;return getContextName(provider._context)+'.Provider';case REACT_FORWARD_REF_TYPE:return getWrappedName(type,type.render,'ForwardRef');case REACT_MEMO_TYPE:return getComponentName(type.type);case REACT_BLOCK_TYPE:return getComponentName(type._render);case REACT_LAZY_TYPE:{var lazyComponent=type;var payload=lazyComponent._payload;var init=lazyComponent._init;try{return getComponentName(init(payload));}catch(x){return null;}}}}return null;}// Don't change these two values. They're used by React Dev Tools.
  var NoFlags=/*                      */0;var PerformedWork=/*                */1;// You can change the rest (and add more).
  var Placement=/*                    */2;var Update=/*                       */4;var PlacementAndUpdate=/*           */6;var Deletion=/*                     */8;var ContentReset=/*                 */16;var Callback=/*                     */32;var DidCapture=/*                   */64;var Ref=/*                          */128;var Snapshot=/*                     */256;var Passive=/*                      */512;// TODO (effects) Remove this bit once the new reconciler is synced to the old.
  var PassiveUnmountPendingDev=/*     */8192;var Hydrating=/*                    */1024;var HydratingAndUpdate=/*           */1028;// Passive & Update & Callback & Ref & Snapshot
  var LifecycleEffectMask=/*          */932;// Union of all host effects
  var HostEffectMask=/*               */2047;// These are not really side effects, but we still reuse this field.
  var Incomplete=/*                   */2048;var ShouldCapture=/*                */4096;var ForceUpdateForLegacySuspense=/* */16384;// Static tags describe aspects of a fiber that are not specific to a render,
  // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
  var enableProfilerTimer=true;// Record durations for commit and passive effects phases.
  var enableFundamentalAPI=false;// Experimental Scope support.
  var enableNewReconciler=false;// Errors that are thrown while unmounting (or after in the case of passive effects)
  var warnAboutStringRefs=false;var ReactCurrentOwner=ReactSharedInternals.ReactCurrentOwner;function getNearestMountedFiber(fiber){var node=fiber;var nearestMounted=fiber;if(!fiber.alternate){// If there is no alternate, this might be a new tree that isn't inserted
  // yet. If it is, then it will have a pending insertion effect on it.
  var nextNode=node;do{node=nextNode;if((node.flags&(Placement|Hydrating))!==NoFlags){// This is an insertion or in-progress hydration. The nearest possible
  // mounted fiber is the parent but we need to continue to figure out
  // if that one is still mounted.
  nearestMounted=node["return"];}nextNode=node["return"];}while(nextNode);}else {while(node["return"]){node=node["return"];}}if(node.tag===HostRoot){// TODO: Check if this was a nested HostRoot when used with
  // renderContainerIntoSubtree.
  return nearestMounted;}// If we didn't hit the root, that means that we're in an disconnected tree
  // that has been unmounted.
  return null;}function isFiberMounted(fiber){return getNearestMountedFiber(fiber)===fiber;}function isMounted(component){{var owner=ReactCurrentOwner.current;if(owner!==null&&owner.tag===ClassComponent){var ownerFiber=owner;var instance=ownerFiber.stateNode;if(!instance._warnedAboutRefsInRender){error('%s is accessing isMounted inside its render() function. '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',getComponentName(ownerFiber.type)||'A component');}instance._warnedAboutRefsInRender=true;}}var fiber=get(component);if(!fiber){return false;}return getNearestMountedFiber(fiber)===fiber;}function assertIsMounted(fiber){if(!(getNearestMountedFiber(fiber)===fiber)){{throw Error("Unable to find node on an unmounted component.");}}}function findCurrentFiberUsingSlowPath(fiber){var alternate=fiber.alternate;if(!alternate){// If there is no alternate, then we only need to check if it is mounted.
  var nearestMounted=getNearestMountedFiber(fiber);if(!(nearestMounted!==null)){{throw Error("Unable to find node on an unmounted component.");}}if(nearestMounted!==fiber){return null;}return fiber;}// If we have two possible branches, we'll walk backwards up to the root
  // to see what path the root points to. On the way we may hit one of the
  // special cases and we'll deal with them.
  var a=fiber;var b=alternate;while(true){var parentA=a["return"];if(parentA===null){// We're at the root.
  break;}var parentB=parentA.alternate;if(parentB===null){// There is no alternate. This is an unusual case. Currently, it only
  // happens when a Suspense component is hidden. An extra fragment fiber
  // is inserted in between the Suspense fiber and its children. Skip
  // over this extra fragment fiber and proceed to the next parent.
  var nextParent=parentA["return"];if(nextParent!==null){a=b=nextParent;continue;}// If there's no parent, we're at the root.
  break;}// If both copies of the parent fiber point to the same child, we can
  // assume that the child is current. This happens when we bailout on low
  // priority: the bailed out fiber's child reuses the current child.
  if(parentA.child===parentB.child){var child=parentA.child;while(child){if(child===a){// We've determined that A is the current branch.
  assertIsMounted(parentA);return fiber;}if(child===b){// We've determined that B is the current branch.
  assertIsMounted(parentA);return alternate;}child=child.sibling;}// We should never have an alternate for any mounting node. So the only
  // way this could possibly happen is if this was unmounted, if at all.
  {{throw Error("Unable to find node on an unmounted component.");}}}if(a["return"]!==b["return"]){// The return pointer of A and the return pointer of B point to different
  // fibers. We assume that return pointers never criss-cross, so A must
  // belong to the child set of A.return, and B must belong to the child
  // set of B.return.
  a=parentA;b=parentB;}else {// The return pointers point to the same fiber. We'll have to use the
  // default, slow path: scan the child sets of each parent alternate to see
  // which child belongs to which set.
  //
  // Search parent A's child set
  var didFindChild=false;var _child=parentA.child;while(_child){if(_child===a){didFindChild=true;a=parentA;b=parentB;break;}if(_child===b){didFindChild=true;b=parentA;a=parentB;break;}_child=_child.sibling;}if(!didFindChild){// Search parent B's child set
  _child=parentB.child;while(_child){if(_child===a){didFindChild=true;a=parentB;b=parentA;break;}if(_child===b){didFindChild=true;b=parentB;a=parentA;break;}_child=_child.sibling;}if(!didFindChild){{throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");}}}}if(!(a.alternate===b)){{throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");}}}// If the root is not a host container, we're in a disconnected tree. I.e.
  // unmounted.
  if(!(a.tag===HostRoot)){{throw Error("Unable to find node on an unmounted component.");}}if(a.stateNode.current===a){// We've determined that A is the current branch.
  return fiber;}// Otherwise B has to be current branch.
  return alternate;}function findCurrentHostFiber(parent){var currentParent=findCurrentFiberUsingSlowPath(parent);if(!currentParent){return null;}// Next we'll drill down this component to find the first HostComponent/Text.
  var node=currentParent;while(true){if(node.tag===HostComponent||node.tag===HostText){return node;}else if(node.child){node.child["return"]=node;node=node.child;continue;}if(node===currentParent){return null;}while(!node.sibling){if(!node["return"]||node["return"]===currentParent){return null;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}// Flow needs the return null here, but ESLint complains about it.
  // eslint-disable-next-line no-unreachable
  return null;}function findCurrentHostFiberWithNoPortals(parent){var currentParent=findCurrentFiberUsingSlowPath(parent);if(!currentParent){return null;}// Next we'll drill down this component to find the first HostComponent/Text.
  var node=currentParent;while(true){if(node.tag===HostComponent||node.tag===HostText||enableFundamentalAPI){return node;}else if(node.child&&node.tag!==HostPortal){node.child["return"]=node;node=node.child;continue;}if(node===currentParent){return null;}while(!node.sibling){if(!node["return"]||node["return"]===currentParent){return null;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}// Flow needs the return null here, but ESLint complains about it.
  // eslint-disable-next-line no-unreachable
  return null;}function doesFiberContain(parentFiber,childFiber){var node=childFiber;var parentFiberAlternate=parentFiber.alternate;while(node!==null){if(node===parentFiber||node===parentFiberAlternate){return true;}node=node["return"];}return false;}// This is a host config that's used for the `react-reconciler` package on npm.
  // It is only used by third-party renderers.
  //
  // Its API lets you pass the host config as an argument.
  // However, inside the `react-reconciler` we treat host config as a module.
  // This file is a shim between two worlds.
  //
  // It works because the `react-reconciler` bundle is wrapped in something like:
  //
  // module.exports = function ($$$config) {
  //   /* reconciler code */
  // }
  //
  // So `$$$config` looks like a global variable, but it's
  // really an argument to a top-level wrapping function.
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  var getPublicInstance=$$$hostConfig.getPublicInstance;var getRootHostContext=$$$hostConfig.getRootHostContext;var getChildHostContext=$$$hostConfig.getChildHostContext;var prepareForCommit=$$$hostConfig.prepareForCommit;var resetAfterCommit=$$$hostConfig.resetAfterCommit;var createInstance=$$$hostConfig.createInstance;var appendInitialChild=$$$hostConfig.appendInitialChild;var finalizeInitialChildren=$$$hostConfig.finalizeInitialChildren;var prepareUpdate=$$$hostConfig.prepareUpdate;var shouldSetTextContent=$$$hostConfig.shouldSetTextContent;var createTextInstance=$$$hostConfig.createTextInstance;var scheduleTimeout=$$$hostConfig.scheduleTimeout;var cancelTimeout=$$$hostConfig.cancelTimeout;var noTimeout=$$$hostConfig.noTimeout;var now=$$$hostConfig.now;var isPrimaryRenderer=$$$hostConfig.isPrimaryRenderer;var warnsIfNotActing=$$$hostConfig.warnsIfNotActing;var supportsMutation=$$$hostConfig.supportsMutation;var supportsPersistence=$$$hostConfig.supportsPersistence;var supportsHydration=$$$hostConfig.supportsHydration;var getFundamentalComponentInstance=$$$hostConfig.getFundamentalComponentInstance;var mountFundamentalComponent=$$$hostConfig.mountFundamentalComponent;var shouldUpdateFundamentalComponent=$$$hostConfig.shouldUpdateFundamentalComponent;var getInstanceFromNode=$$$hostConfig.getInstanceFromNode;var isOpaqueHydratingObject=$$$hostConfig.isOpaqueHydratingObject;var makeOpaqueHydratingObject=$$$hostConfig.makeOpaqueHydratingObject;var makeClientId=$$$hostConfig.makeClientId;var makeClientIdInDEV=$$$hostConfig.makeClientIdInDEV;var beforeActiveInstanceBlur=$$$hostConfig.beforeActiveInstanceBlur;var afterActiveInstanceBlur=$$$hostConfig.afterActiveInstanceBlur;var preparePortalMount=$$$hostConfig.preparePortalMount;var prepareScopeUpdate=$$$hostConfig.preparePortalMount;var getInstanceFromScope=$$$hostConfig.getInstanceFromScope;// -------------------
  //      Test selectors
  //     (optional)
  // -------------------
  var supportsTestSelectors=$$$hostConfig.supportsTestSelectors;var findFiberRoot=$$$hostConfig.findFiberRoot;var getBoundingRect=$$$hostConfig.getBoundingRect;var getTextContent=$$$hostConfig.getTextContent;var isHiddenSubtree=$$$hostConfig.isHiddenSubtree;var matchAccessibilityRole=$$$hostConfig.matchAccessibilityRole;var setFocusIfFocusable=$$$hostConfig.setFocusIfFocusable;var setupIntersectionObserver=$$$hostConfig.setupIntersectionObserver;// -------------------
  //      Mutation
  //     (optional)
  // -------------------
  var appendChild=$$$hostConfig.appendChild;var appendChildToContainer=$$$hostConfig.appendChildToContainer;var commitTextUpdate=$$$hostConfig.commitTextUpdate;var commitMount=$$$hostConfig.commitMount;var commitUpdate=$$$hostConfig.commitUpdate;var insertBefore=$$$hostConfig.insertBefore;var insertInContainerBefore=$$$hostConfig.insertInContainerBefore;var removeChild=$$$hostConfig.removeChild;var removeChildFromContainer=$$$hostConfig.removeChildFromContainer;var resetTextContent=$$$hostConfig.resetTextContent;var hideInstance=$$$hostConfig.hideInstance;var hideTextInstance=$$$hostConfig.hideTextInstance;var unhideInstance=$$$hostConfig.unhideInstance;var unhideTextInstance=$$$hostConfig.unhideTextInstance;var updateFundamentalComponent=$$$hostConfig.updateFundamentalComponent;var unmountFundamentalComponent=$$$hostConfig.unmountFundamentalComponent;var clearContainer=$$$hostConfig.clearContainer;// -------------------
  //     Persistence
  //     (optional)
  // -------------------
  var cloneInstance=$$$hostConfig.cloneInstance;var createContainerChildSet=$$$hostConfig.createContainerChildSet;var appendChildToContainerChildSet=$$$hostConfig.appendChildToContainerChildSet;var finalizeContainerChildren=$$$hostConfig.finalizeContainerChildren;var replaceContainerChildren=$$$hostConfig.replaceContainerChildren;var cloneHiddenInstance=$$$hostConfig.cloneHiddenInstance;var cloneHiddenTextInstance=$$$hostConfig.cloneHiddenTextInstance;var cloneFundamentalInstance=$$$hostConfig.cloneInstance;// -------------------
  //     Hydration
  //     (optional)
  // -------------------
  var canHydrateInstance=$$$hostConfig.canHydrateInstance;var canHydrateTextInstance=$$$hostConfig.canHydrateTextInstance;var canHydrateSuspenseInstance=$$$hostConfig.canHydrateSuspenseInstance;var isSuspenseInstancePending=$$$hostConfig.isSuspenseInstancePending;var isSuspenseInstanceFallback=$$$hostConfig.isSuspenseInstanceFallback;var registerSuspenseInstanceRetry=$$$hostConfig.registerSuspenseInstanceRetry;var getNextHydratableSibling=$$$hostConfig.getNextHydratableSibling;var getFirstHydratableChild=$$$hostConfig.getFirstHydratableChild;var hydrateInstance=$$$hostConfig.hydrateInstance;var hydrateTextInstance=$$$hostConfig.hydrateTextInstance;var hydrateSuspenseInstance=$$$hostConfig.hydrateSuspenseInstance;var getNextHydratableInstanceAfterSuspenseInstance=$$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance;var commitHydratedContainer=$$$hostConfig.commitHydratedContainer;var commitHydratedSuspenseInstance=$$$hostConfig.commitHydratedSuspenseInstance;var clearSuspenseBoundary=$$$hostConfig.clearSuspenseBoundary;var clearSuspenseBoundaryFromContainer=$$$hostConfig.clearSuspenseBoundaryFromContainer;var didNotMatchHydratedContainerTextInstance=$$$hostConfig.didNotMatchHydratedContainerTextInstance;var didNotMatchHydratedTextInstance=$$$hostConfig.didNotMatchHydratedTextInstance;var didNotHydrateContainerInstance=$$$hostConfig.didNotHydrateContainerInstance;var didNotHydrateInstance=$$$hostConfig.didNotHydrateInstance;var didNotFindHydratableContainerInstance=$$$hostConfig.didNotFindHydratableContainerInstance;var didNotFindHydratableContainerTextInstance=$$$hostConfig.didNotFindHydratableContainerTextInstance;var didNotFindHydratableContainerSuspenseInstance=$$$hostConfig.didNotFindHydratableContainerSuspenseInstance;var didNotFindHydratableInstance=$$$hostConfig.didNotFindHydratableInstance;var didNotFindHydratableTextInstance=$$$hostConfig.didNotFindHydratableTextInstance;var didNotFindHydratableSuspenseInstance=$$$hostConfig.didNotFindHydratableSuspenseInstance;// Helpers to patch console.logs to avoid logging during side-effect free
  // replaying on render function. This currently only patches the object
  // lazily which won't cover if the log function was extracted eagerly.
  // We could also eagerly patch the method.
  var disabledDepth=0;var prevLog;var prevInfo;var prevWarn;var prevError;var prevGroup;var prevGroupCollapsed;var prevGroupEnd;function disabledLog(){}disabledLog.__reactDisabledLog=true;function disableLogs(){{if(disabledDepth===0){/* eslint-disable react-internal/no-production-logging */prevLog=console.log;prevInfo=console.info;prevWarn=console.warn;prevError=console.error;prevGroup=console.group;prevGroupCollapsed=console.groupCollapsed;prevGroupEnd=console.groupEnd;// https://github.com/facebook/react/issues/19099
  var props={configurable:true,enumerable:true,value:disabledLog,writable:true};// $FlowFixMe Flow thinks console is immutable.
  Object.defineProperties(console,{info:props,log:props,warn:props,error:props,group:props,groupCollapsed:props,groupEnd:props});/* eslint-enable react-internal/no-production-logging */}disabledDepth++;}}function reenableLogs(){{disabledDepth--;if(disabledDepth===0){/* eslint-disable react-internal/no-production-logging */var props={configurable:true,enumerable:true,writable:true};// $FlowFixMe Flow thinks console is immutable.
  Object.defineProperties(console,{log:_assign({},props,{value:prevLog}),info:_assign({},props,{value:prevInfo}),warn:_assign({},props,{value:prevWarn}),error:_assign({},props,{value:prevError}),group:_assign({},props,{value:prevGroup}),groupCollapsed:_assign({},props,{value:prevGroupCollapsed}),groupEnd:_assign({},props,{value:prevGroupEnd})});/* eslint-enable react-internal/no-production-logging */}if(disabledDepth<0){error('disabledDepth fell below zero. '+'This is a bug in React. Please file an issue.');}}}var ReactCurrentDispatcher=ReactSharedInternals.ReactCurrentDispatcher;var prefix;function describeBuiltInComponentFrame(name,source,ownerFn){{if(prefix===undefined){// Extract the VM specific prefix used by each line.
  try{throw Error();}catch(x){var match=x.stack.trim().match(/\n( *(at )?)/);prefix=match&&match[1]||'';}}// We use the prefix to ensure our stacks line up with native stack frames.
  return '\n'+prefix+name;}}var reentry=false;var componentFrameCache;{var PossiblyWeakMap=typeof WeakMap==='function'?WeakMap:Map;componentFrameCache=new PossiblyWeakMap();}function describeNativeComponentFrame(fn,construct){// If something asked for a stack inside a fake render, it should get ignored.
  if(!fn||reentry){return '';}{var frame=componentFrameCache.get(fn);if(frame!==undefined){return frame;}}var control;reentry=true;var previousPrepareStackTrace=Error.prepareStackTrace;// $FlowFixMe It does accept undefined.
  Error.prepareStackTrace=undefined;var previousDispatcher;{previousDispatcher=ReactCurrentDispatcher.current;// Set the dispatcher in DEV because this might be call in the render function
  // for warnings.
  ReactCurrentDispatcher.current=null;disableLogs();}try{// This should throw.
  if(construct){// Something should be setting the props in the constructor.
  var Fake=function Fake(){throw Error();};// $FlowFixMe
  Object.defineProperty(Fake.prototype,'props',{set:function set(){// We use a throwing setter instead of frozen or non-writable props
  // because that won't throw in a non-strict mode function.
  throw Error();}});if((typeof Reflect==="undefined"?"undefined":_typeof(Reflect))==='object'&&Reflect.construct){// We construct a different control for this case to include any extra
  // frames added by the construct call.
  try{Reflect.construct(Fake,[]);}catch(x){control=x;}Reflect.construct(fn,[],Fake);}else {try{Fake.call();}catch(x){control=x;}fn.call(Fake.prototype);}}else {try{throw Error();}catch(x){control=x;}fn();}}catch(sample){// This is inlined manually because closure doesn't do it for us.
  if(sample&&control&&typeof sample.stack==='string'){// This extracts the first frame from the sample that isn't also in the control.
  // Skipping one frame that we assume is the frame that calls the two.
  var sampleLines=sample.stack.split('\n');var controlLines=control.stack.split('\n');var s=sampleLines.length-1;var c=controlLines.length-1;while(s>=1&&c>=0&&sampleLines[s]!==controlLines[c]){// We expect at least one stack frame to be shared.
  // Typically this will be the root most one. However, stack frames may be
  // cut off due to maximum stack limits. In this case, one maybe cut off
  // earlier than the other. We assume that the sample is longer or the same
  // and there for cut off earlier. So we should find the root most frame in
  // the sample somewhere in the control.
  c--;}for(;s>=1&&c>=0;s--,c--){// Next we find the first one that isn't the same which should be the
  // frame that called our sample function and the control.
  if(sampleLines[s]!==controlLines[c]){// In V8, the first line is describing the message but other VMs don't.
  // If we're about to return the first line, and the control is also on the same
  // line, that's a pretty good indicator that our sample threw at same line as
  // the control. I.e. before we entered the sample frame. So we ignore this result.
  // This can happen if you passed a class to function component, or non-function.
  if(s!==1||c!==1){do{s--;c--;// We may still have similar intermediate frames from the construct call.
  // The next one that isn't the same should be our match though.
  if(c<0||sampleLines[s]!==controlLines[c]){// V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
  var _frame='\n'+sampleLines[s].replace(' at new ',' at ');{if(typeof fn==='function'){componentFrameCache.set(fn,_frame);}}// Return the line we found.
  return _frame;}}while(s>=1&&c>=0);}break;}}}}finally{reentry=false;{ReactCurrentDispatcher.current=previousDispatcher;reenableLogs();}Error.prepareStackTrace=previousPrepareStackTrace;}// Fallback to just using the name if we couldn't make it throw.
  var name=fn?fn.displayName||fn.name:'';var syntheticFrame=name?describeBuiltInComponentFrame(name):'';{if(typeof fn==='function'){componentFrameCache.set(fn,syntheticFrame);}}return syntheticFrame;}function describeClassComponentFrame(ctor,source,ownerFn){{return describeNativeComponentFrame(ctor,true);}}function describeFunctionComponentFrame(fn,source,ownerFn){{return describeNativeComponentFrame(fn,false);}}function shouldConstruct(Component){var prototype=Component.prototype;return !!(prototype&&prototype.isReactComponent);}function describeUnknownElementTypeFrameInDEV(type,source,ownerFn){if(type==null){return '';}if(typeof type==='function'){{return describeNativeComponentFrame(type,shouldConstruct(type));}}if(typeof type==='string'){return describeBuiltInComponentFrame(type);}switch(type){case REACT_SUSPENSE_TYPE:return describeBuiltInComponentFrame('Suspense');case REACT_SUSPENSE_LIST_TYPE:return describeBuiltInComponentFrame('SuspenseList');}if(_typeof(type)==='object'){switch(type.$$typeof){case REACT_FORWARD_REF_TYPE:return describeFunctionComponentFrame(type.render);case REACT_MEMO_TYPE:// Memo may contain any component type so we recursively resolve it.
  return describeUnknownElementTypeFrameInDEV(type.type,source,ownerFn);case REACT_BLOCK_TYPE:return describeFunctionComponentFrame(type._render);case REACT_LAZY_TYPE:{var lazyComponent=type;var payload=lazyComponent._payload;var init=lazyComponent._init;try{// Lazy may contain any component type so we recursively resolve it.
  return describeUnknownElementTypeFrameInDEV(init(payload),source,ownerFn);}catch(x){}}}}return '';}var loggedTypeFailures={};var ReactDebugCurrentFrame=ReactSharedInternals.ReactDebugCurrentFrame;function setCurrentlyValidatingElement(element){{if(element){var owner=element._owner;var stack=describeUnknownElementTypeFrameInDEV(element.type,element._source,owner?owner.type:null);ReactDebugCurrentFrame.setExtraStackFrame(stack);}else {ReactDebugCurrentFrame.setExtraStackFrame(null);}}}function checkPropTypes(typeSpecs,values,location,componentName,element){{// $FlowFixMe This is okay but Flow doesn't know it.
  var has=Function.call.bind(Object.prototype.hasOwnProperty);for(var typeSpecName in typeSpecs){if(has(typeSpecs,typeSpecName)){var error$1=void 0;// Prop type validation may throw. In case they do, we don't want to
  // fail the render phase where it didn't fail before. So we log it.
  // After these have been cleaned up, we'll let them throw.
  try{// This is intentionally an invariant that gets caught. It's the same
  // behavior as without this statement except with a better message.
  if(typeof typeSpecs[typeSpecName]!=='function'){var err=Error((componentName||'React class')+': '+location+' type `'+typeSpecName+'` is invalid; '+'it must be a function, usually from the `prop-types` package, but received `'+_typeof(typeSpecs[typeSpecName])+'`.'+'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');err.name='Invariant Violation';throw err;}error$1=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');}catch(ex){error$1=ex;}if(error$1&&!(error$1 instanceof Error)){setCurrentlyValidatingElement(element);error('%s: type specification of %s'+' `%s` is invalid; the type checker '+'function must return `null` or an `Error` but returned a %s. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).',componentName||'React class',location,typeSpecName,_typeof(error$1));setCurrentlyValidatingElement(null);}if(error$1 instanceof Error&&!(error$1.message in loggedTypeFailures)){// Only monitor this failure once because there tends to be a lot of the
  // same error.
  loggedTypeFailures[error$1.message]=true;setCurrentlyValidatingElement(element);error('Failed %s type: %s',location,error$1.message);setCurrentlyValidatingElement(null);}}}}}var valueStack=[];var fiberStack;{fiberStack=[];}var index=-1;function createCursor(defaultValue){return {current:defaultValue};}function pop(cursor,fiber){if(index<0){{error('Unexpected pop.');}return;}{if(fiber!==fiberStack[index]){error('Unexpected Fiber popped.');}}cursor.current=valueStack[index];valueStack[index]=null;{fiberStack[index]=null;}index--;}function push(cursor,value,fiber){index++;valueStack[index]=cursor.current;{fiberStack[index]=fiber;}cursor.current=value;}var warnedAboutMissingGetChildContext;{warnedAboutMissingGetChildContext={};}var emptyContextObject={};{Object.freeze(emptyContextObject);}// A cursor to the current merged context object on the stack.
  var contextStackCursor=createCursor(emptyContextObject);// A cursor to a boolean indicating whether the context has changed.
  var didPerformWorkStackCursor=createCursor(false);// Keep track of the previous context object that was on the stack.
  // We use this to get access to the parent context after we have already
  // pushed the next context provider, and now need to merge their contexts.
  var previousContext=emptyContextObject;function getUnmaskedContext(workInProgress,Component,didPushOwnContextIfProvider){{if(didPushOwnContextIfProvider&&isContextProvider(Component)){// If the fiber is a context provider itself, when we read its context
  // we may have already pushed its own child context on the stack. A context
  // provider should not "see" its own child context. Therefore we read the
  // previous (parent) context instead for a context provider.
  return previousContext;}return contextStackCursor.current;}}function cacheContext(workInProgress,unmaskedContext,maskedContext){{var instance=workInProgress.stateNode;instance.__reactInternalMemoizedUnmaskedChildContext=unmaskedContext;instance.__reactInternalMemoizedMaskedChildContext=maskedContext;}}function getMaskedContext(workInProgress,unmaskedContext){{var type=workInProgress.type;var contextTypes=type.contextTypes;if(!contextTypes){return emptyContextObject;}// Avoid recreating masked context unless unmasked context has changed.
  // Failing to do this will result in unnecessary calls to componentWillReceiveProps.
  // This may trigger infinite loops if componentWillReceiveProps calls setState.
  var instance=workInProgress.stateNode;if(instance&&instance.__reactInternalMemoizedUnmaskedChildContext===unmaskedContext){return instance.__reactInternalMemoizedMaskedChildContext;}var context={};for(var key in contextTypes){context[key]=unmaskedContext[key];}{var name=getComponentName(type)||'Unknown';checkPropTypes(contextTypes,context,'context',name);}// Cache unmasked context so we can avoid recreating masked context unless necessary.
  // Context is created before the class component is instantiated so check for instance.
  if(instance){cacheContext(workInProgress,unmaskedContext,context);}return context;}}function hasContextChanged(){{return didPerformWorkStackCursor.current;}}function isContextProvider(type){{var childContextTypes=type.childContextTypes;return childContextTypes!==null&&childContextTypes!==undefined;}}function popContext(fiber){{pop(didPerformWorkStackCursor,fiber);pop(contextStackCursor,fiber);}}function popTopLevelContextObject(fiber){{pop(didPerformWorkStackCursor,fiber);pop(contextStackCursor,fiber);}}function pushTopLevelContextObject(fiber,context,didChange){{if(!(contextStackCursor.current===emptyContextObject)){{throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");}}push(contextStackCursor,context,fiber);push(didPerformWorkStackCursor,didChange,fiber);}}function processChildContext(fiber,type,parentContext){{var instance=fiber.stateNode;var childContextTypes=type.childContextTypes;// TODO (bvaughn) Replace this behavior with an invariant() in the future.
  // It has only been added in Fiber to match the (unintentional) behavior in Stack.
  if(typeof instance.getChildContext!=='function'){{var componentName=getComponentName(type)||'Unknown';if(!warnedAboutMissingGetChildContext[componentName]){warnedAboutMissingGetChildContext[componentName]=true;error('%s.childContextTypes is specified but there is no getChildContext() method '+'on the instance. You can either define getChildContext() on %s or remove '+'childContextTypes from it.',componentName,componentName);}}return parentContext;}var childContext=instance.getChildContext();for(var contextKey in childContext){if(!(contextKey in childContextTypes)){{throw Error((getComponentName(type)||'Unknown')+".getChildContext(): key \""+contextKey+"\" is not defined in childContextTypes.");}}}{var name=getComponentName(type)||'Unknown';checkPropTypes(childContextTypes,childContext,'child context',name);}return _assign({},parentContext,childContext);}}function pushContextProvider(workInProgress){{var instance=workInProgress.stateNode;// We push the context as early as possible to ensure stack integrity.
  // If the instance does not exist yet, we will push null at first,
  // and replace it on the stack later when invalidating the context.
  var memoizedMergedChildContext=instance&&instance.__reactInternalMemoizedMergedChildContext||emptyContextObject;// Remember the parent context so we can merge with it later.
  // Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
  previousContext=contextStackCursor.current;push(contextStackCursor,memoizedMergedChildContext,workInProgress);push(didPerformWorkStackCursor,didPerformWorkStackCursor.current,workInProgress);return true;}}function invalidateContextProvider(workInProgress,type,didChange){{var instance=workInProgress.stateNode;if(!instance){{throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");}}if(didChange){// Merge parent and own context.
  // Skip this if we're not updating due to sCU.
  // This avoids unnecessarily recomputing memoized values.
  var mergedContext=processChildContext(workInProgress,type,previousContext);instance.__reactInternalMemoizedMergedChildContext=mergedContext;// Replace the old (or empty) context with the new one.
  // It is important to unwind the context in the reverse order.
  pop(didPerformWorkStackCursor,workInProgress);pop(contextStackCursor,workInProgress);// Now push the new context and mark that it has changed.
  push(contextStackCursor,mergedContext,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress);}else {pop(didPerformWorkStackCursor,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress);}}}function findCurrentUnmaskedContext(fiber){{// Currently this is only used with renderSubtreeIntoContainer; not sure if it
  // makes sense elsewhere
  if(!(isFiberMounted(fiber)&&fiber.tag===ClassComponent)){{throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");}}var node=fiber;do{switch(node.tag){case HostRoot:return node.stateNode.context;case ClassComponent:{var Component=node.type;if(isContextProvider(Component)){return node.stateNode.__reactInternalMemoizedMergedChildContext;}break;}}node=node["return"];}while(node!==null);{{throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");}}}}var LegacyRoot=0;var BlockingRoot=1;var ConcurrentRoot=2;var rendererID=null;var injectedHook=null;var hasLoggedError=false;var isDevToolsPresent=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined';function injectInternals(internals){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==='undefined'){// No DevTools
  return false;}var hook=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(hook.isDisabled){// This isn't a real property on the hook, but it can be set to opt out
  // of DevTools integration and associated warnings and logs.
  // https://github.com/facebook/react/issues/3877
  return true;}if(!hook.supportsFiber){{error('The installed version of React DevTools is too old and will not work '+'with the current version of React. Please update React DevTools. '+'https://reactjs.org/link/react-devtools');}// DevTools exists, even though it doesn't support Fiber.
  return true;}try{rendererID=hook.inject(internals);// We have successfully injected, so now it is safe to set up hooks.
  injectedHook=hook;}catch(err){// Catch all errors because it is unsafe to throw during initialization.
  {error('React instrumentation encountered an error: %s.',err);}}// DevTools exists
  return true;}function onScheduleRoot(root,children){{if(injectedHook&&typeof injectedHook.onScheduleFiberRoot==='function'){try{injectedHook.onScheduleFiberRoot(rendererID,root,children);}catch(err){if(!hasLoggedError){hasLoggedError=true;error('React instrumentation encountered an error: %s',err);}}}}}function onCommitRoot(root,priorityLevel){if(injectedHook&&typeof injectedHook.onCommitFiberRoot==='function'){try{var didError=(root.current.flags&DidCapture)===DidCapture;if(enableProfilerTimer){injectedHook.onCommitFiberRoot(rendererID,root,priorityLevel,didError);}}catch(err){{if(!hasLoggedError){hasLoggedError=true;error('React instrumentation encountered an error: %s',err);}}}}}function onCommitUnmount(fiber){if(injectedHook&&typeof injectedHook.onCommitFiberUnmount==='function'){try{injectedHook.onCommitFiberUnmount(rendererID,fiber);}catch(err){{if(!hasLoggedError){hasLoggedError=true;error('React instrumentation encountered an error: %s',err);}}}}}var Scheduler_now=Scheduler.unstable_now;{// Provide explicit error message when production+profiling bundle of e.g.
  // react-dom is used with production (non-profiling) bundle of
  // scheduler/tracing
  if(!(tracing.__interactionsRef!=null&&tracing.__interactionsRef.current!=null)){{throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");}}}// ascending numbers so we can compare them like numbers. They start at 90 to
  // avoid clashing with Scheduler's priorities.
  var ImmediatePriority=99;var UserBlockingPriority=98;var NormalPriority=97;var LowPriority=96;var IdlePriority=95;// NoPriority is the absence of priority. Also React-only.
  var NoPriority=90;var initialTimeMs=Scheduler_now();// If the initial timestamp is reasonably small, use Scheduler's `now` directly.
  var SyncLanePriority=15;var SyncBatchedLanePriority=14;var InputDiscreteHydrationLanePriority=13;var InputDiscreteLanePriority=12;var InputContinuousHydrationLanePriority=11;var InputContinuousLanePriority=10;var DefaultHydrationLanePriority=9;var DefaultLanePriority=8;var TransitionHydrationPriority=7;var TransitionPriority=6;var RetryLanePriority=5;var SelectiveHydrationLanePriority=4;var IdleHydrationLanePriority=3;var IdleLanePriority=2;var OffscreenLanePriority=1;var NoLanePriority=0;var TotalLanes=31;var NoLanes=/*                        */0;var NoLane=/*                          */0;var SyncLane=/*                        */1;var SyncBatchedLane=/*                 */2;var InputDiscreteHydrationLane=/*      */4;var InputDiscreteLanes=/*                    */24;var InputContinuousHydrationLane=/*           */32;var InputContinuousLanes=/*                  */192;var DefaultHydrationLane=/*            */256;var DefaultLanes=/*                   */3584;var TransitionHydrationLane=/*                */4096;var TransitionLanes=/*                       */4186112;var RetryLanes=/*                            */62914560;var SomeRetryLane=/*                  */33554432;var SelectiveHydrationLane=/*          */67108864;var NonIdleLanes=/*                                 */134217727;var IdleHydrationLane=/*               */134217728;var IdleLanes=/*                             */805306368;var OffscreenLane=/*                   */1073741824;var NoTimestamp=-1;var currentUpdateLanePriority=NoLanePriority;function getCurrentUpdateLanePriority(){return currentUpdateLanePriority;}function setCurrentUpdateLanePriority(newLanePriority){currentUpdateLanePriority=newLanePriority;}// "Registers" used to "return" multiple values
  // Used by getHighestPriorityLanes and getNextLanes:
  var return_highestLanePriority=DefaultLanePriority;function getHighestPriorityLanes(lanes){if((SyncLane&lanes)!==NoLanes){return_highestLanePriority=SyncLanePriority;return SyncLane;}if((SyncBatchedLane&lanes)!==NoLanes){return_highestLanePriority=SyncBatchedLanePriority;return SyncBatchedLane;}if((InputDiscreteHydrationLane&lanes)!==NoLanes){return_highestLanePriority=InputDiscreteHydrationLanePriority;return InputDiscreteHydrationLane;}var inputDiscreteLanes=InputDiscreteLanes&lanes;if(inputDiscreteLanes!==NoLanes){return_highestLanePriority=InputDiscreteLanePriority;return inputDiscreteLanes;}if((lanes&InputContinuousHydrationLane)!==NoLanes){return_highestLanePriority=InputContinuousHydrationLanePriority;return InputContinuousHydrationLane;}var inputContinuousLanes=InputContinuousLanes&lanes;if(inputContinuousLanes!==NoLanes){return_highestLanePriority=InputContinuousLanePriority;return inputContinuousLanes;}if((lanes&DefaultHydrationLane)!==NoLanes){return_highestLanePriority=DefaultHydrationLanePriority;return DefaultHydrationLane;}var defaultLanes=DefaultLanes&lanes;if(defaultLanes!==NoLanes){return_highestLanePriority=DefaultLanePriority;return defaultLanes;}if((lanes&TransitionHydrationLane)!==NoLanes){return_highestLanePriority=TransitionHydrationPriority;return TransitionHydrationLane;}var transitionLanes=TransitionLanes&lanes;if(transitionLanes!==NoLanes){return_highestLanePriority=TransitionPriority;return transitionLanes;}var retryLanes=RetryLanes&lanes;if(retryLanes!==NoLanes){return_highestLanePriority=RetryLanePriority;return retryLanes;}if(lanes&SelectiveHydrationLane){return_highestLanePriority=SelectiveHydrationLanePriority;return SelectiveHydrationLane;}if((lanes&IdleHydrationLane)!==NoLanes){return_highestLanePriority=IdleHydrationLanePriority;return IdleHydrationLane;}var idleLanes=IdleLanes&lanes;if(idleLanes!==NoLanes){return_highestLanePriority=IdleLanePriority;return idleLanes;}if((OffscreenLane&lanes)!==NoLanes){return_highestLanePriority=OffscreenLanePriority;return OffscreenLane;}{error('Should have found matching lanes. This is a bug in React.');}// This shouldn't be reachable, but as a fallback, return the entire bitmask.
  return_highestLanePriority=DefaultLanePriority;return lanes;}function schedulerPriorityToLanePriority(schedulerPriorityLevel){switch(schedulerPriorityLevel){case ImmediatePriority:return SyncLanePriority;case UserBlockingPriority:return InputContinuousLanePriority;case NormalPriority:case LowPriority:// TODO: Handle LowSchedulerPriority, somehow. Maybe the same lane as hydration.
  return DefaultLanePriority;case IdlePriority:return IdleLanePriority;default:return NoLanePriority;}}function lanePriorityToSchedulerPriority(lanePriority){switch(lanePriority){case SyncLanePriority:case SyncBatchedLanePriority:return ImmediatePriority;case InputDiscreteHydrationLanePriority:case InputDiscreteLanePriority:case InputContinuousHydrationLanePriority:case InputContinuousLanePriority:return UserBlockingPriority;case DefaultHydrationLanePriority:case DefaultLanePriority:case TransitionHydrationPriority:case TransitionPriority:case SelectiveHydrationLanePriority:case RetryLanePriority:return NormalPriority;case IdleHydrationLanePriority:case IdleLanePriority:case OffscreenLanePriority:return IdlePriority;case NoLanePriority:return NoPriority;default:{{throw Error("Invalid update priority: "+lanePriority+". This is a bug in React.");}}}}function getNextLanes(root,wipLanes){// Early bailout if there's no pending work left.
  var pendingLanes=root.pendingLanes;if(pendingLanes===NoLanes){return_highestLanePriority=NoLanePriority;return NoLanes;}var nextLanes=NoLanes;var nextLanePriority=NoLanePriority;var expiredLanes=root.expiredLanes;var suspendedLanes=root.suspendedLanes;var pingedLanes=root.pingedLanes;// Check if any work has expired.
  if(expiredLanes!==NoLanes){nextLanes=expiredLanes;nextLanePriority=return_highestLanePriority=SyncLanePriority;}else {// Do not work on any idle work until all the non-idle work has finished,
  // even if the work is suspended.
  var nonIdlePendingLanes=pendingLanes&NonIdleLanes;if(nonIdlePendingLanes!==NoLanes){var nonIdleUnblockedLanes=nonIdlePendingLanes&~suspendedLanes;if(nonIdleUnblockedLanes!==NoLanes){nextLanes=getHighestPriorityLanes(nonIdleUnblockedLanes);nextLanePriority=return_highestLanePriority;}else {var nonIdlePingedLanes=nonIdlePendingLanes&pingedLanes;if(nonIdlePingedLanes!==NoLanes){nextLanes=getHighestPriorityLanes(nonIdlePingedLanes);nextLanePriority=return_highestLanePriority;}}}else {// The only remaining work is Idle.
  var unblockedLanes=pendingLanes&~suspendedLanes;if(unblockedLanes!==NoLanes){nextLanes=getHighestPriorityLanes(unblockedLanes);nextLanePriority=return_highestLanePriority;}else {if(pingedLanes!==NoLanes){nextLanes=getHighestPriorityLanes(pingedLanes);nextLanePriority=return_highestLanePriority;}}}}if(nextLanes===NoLanes){// This should only be reachable if we're suspended
  // TODO: Consider warning in this path if a fallback timer is not scheduled.
  return NoLanes;}// If there are higher priority lanes, we'll include them even if they
  // are suspended.
  nextLanes=pendingLanes&getEqualOrHigherPriorityLanes(nextLanes);// If we're already in the middle of a render, switching lanes will interrupt
  // it and we'll lose our progress. We should only do this if the new lanes are
  // higher priority.
  if(wipLanes!==NoLanes&&wipLanes!==nextLanes&&// If we already suspended with a delay, then interrupting is fine. Don't
  // bother waiting until the root is complete.
  (wipLanes&suspendedLanes)===NoLanes){getHighestPriorityLanes(wipLanes);var wipLanePriority=return_highestLanePriority;if(nextLanePriority<=wipLanePriority){return wipLanes;}else {return_highestLanePriority=nextLanePriority;}}// Check for entangled lanes and add them to the batch.
  //
  // A lane is said to be entangled with another when it's not allowed to render
  // in a batch that does not also include the other lane. Typically we do this
  // when multiple updates have the same source, and we only want to respond to
  // the most recent event from that source.
  //
  // Note that we apply entanglements *after* checking for partial work above.
  // This means that if a lane is entangled during an interleaved event while
  // it's already rendering, we won't interrupt it. This is intentional, since
  // entanglement is usually "best effort": we'll try our best to render the
  // lanes in the same batch, but it's not worth throwing out partially
  // completed work in order to do it.
  //
  // For those exceptions where entanglement is semantically important, like
  // useMutableSource, we should ensure that there is no partial work at the
  // time we apply the entanglement.
  var entangledLanes=root.entangledLanes;if(entangledLanes!==NoLanes){var entanglements=root.entanglements;var lanes=nextLanes&entangledLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;nextLanes|=entanglements[index];lanes&=~lane;}}return nextLanes;}function getMostRecentEventTime(root,lanes){var eventTimes=root.eventTimes;var mostRecentEventTime=NoTimestamp;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;var eventTime=eventTimes[index];if(eventTime>mostRecentEventTime){mostRecentEventTime=eventTime;}lanes&=~lane;}return mostRecentEventTime;}function computeExpirationTime(lane,currentTime){// TODO: Expiration heuristic is constant per lane, so could use a map.
  getHighestPriorityLanes(lane);var priority=return_highestLanePriority;if(priority>=InputContinuousLanePriority){// User interactions should expire slightly more quickly.
  //
  // NOTE: This is set to the corresponding constant as in Scheduler.js. When
  // we made it larger, a product metric in www regressed, suggesting there's
  // a user interaction that's being starved by a series of synchronous
  // updates. If that theory is correct, the proper solution is to fix the
  // starvation. However, this scenario supports the idea that expiration
  // times are an important safeguard when starvation does happen.
  //
  // Also note that, in the case of user input specifically, this will soon no
  // longer be an issue because we plan to make user input synchronous by
  // default (until you enter `startTransition`, of course.)
  //
  // If weren't planning to make these updates synchronous soon anyway, I
  // would probably make this number a configurable parameter.
  return currentTime+250;}else if(priority>=TransitionPriority){return currentTime+5000;}else {// Anything idle priority or lower should never expire.
  return NoTimestamp;}}function markStarvedLanesAsExpired(root,currentTime){// TODO: This gets called every time we yield. We can optimize by storing
  // the earliest expiration time on the root. Then use that to quickly bail out
  // of this function.
  var pendingLanes=root.pendingLanes;var suspendedLanes=root.suspendedLanes;var pingedLanes=root.pingedLanes;var expirationTimes=root.expirationTimes;// Iterate through the pending lanes and check if we've reached their
  // expiration time. If so, we'll assume the update is being starved and mark
  // it as expired to force it to finish.
  var lanes=pendingLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;var expirationTime=expirationTimes[index];if(expirationTime===NoTimestamp){// Found a pending lane with no expiration time. If it's not suspended, or
  // if it's pinged, assume it's CPU-bound. Compute a new expiration time
  // using the current time.
  if((lane&suspendedLanes)===NoLanes||(lane&pingedLanes)!==NoLanes){// Assumes timestamps are monotonically increasing.
  expirationTimes[index]=computeExpirationTime(lane,currentTime);}}else if(expirationTime<=currentTime){// This lane expired
  root.expiredLanes|=lane;}lanes&=~lane;}}// This returns the highest priority pending lanes regardless of whether they
  // are suspended.
  function getHighestPriorityPendingLanes(root){return getHighestPriorityLanes(root.pendingLanes);}function getLanesToRetrySynchronouslyOnError(root){var everythingButOffscreen=root.pendingLanes&~OffscreenLane;if(everythingButOffscreen!==NoLanes){return everythingButOffscreen;}if(everythingButOffscreen&OffscreenLane){return OffscreenLane;}return NoLanes;}function returnNextLanesPriority(){return return_highestLanePriority;}function includesNonIdleWork(lanes){return (lanes&NonIdleLanes)!==NoLanes;}function includesOnlyRetries(lanes){return (lanes&RetryLanes)===lanes;}function includesOnlyTransitions(lanes){return (lanes&TransitionLanes)===lanes;}// To ensure consistency across multiple updates in the same event, this should
  // be a pure function, so that it always returns the same lane for given inputs.
  function findUpdateLane(lanePriority,wipLanes){switch(lanePriority){case NoLanePriority:break;case SyncLanePriority:return SyncLane;case SyncBatchedLanePriority:return SyncBatchedLane;case InputDiscreteLanePriority:{var _lane=pickArbitraryLane(InputDiscreteLanes&~wipLanes);if(_lane===NoLane){// Shift to the next priority level
  return findUpdateLane(InputContinuousLanePriority,wipLanes);}return _lane;}case InputContinuousLanePriority:{var _lane2=pickArbitraryLane(InputContinuousLanes&~wipLanes);if(_lane2===NoLane){// Shift to the next priority level
  return findUpdateLane(DefaultLanePriority,wipLanes);}return _lane2;}case DefaultLanePriority:{var _lane3=pickArbitraryLane(DefaultLanes&~wipLanes);if(_lane3===NoLane){// If all the default lanes are already being worked on, look for a
  // lane in the transition range.
  _lane3=pickArbitraryLane(TransitionLanes&~wipLanes);if(_lane3===NoLane){// All the transition lanes are taken, too. This should be very
  // rare, but as a last resort, pick a default lane. This will have
  // the effect of interrupting the current work-in-progress render.
  _lane3=pickArbitraryLane(DefaultLanes);}}return _lane3;}case TransitionPriority:// Should be handled by findTransitionLane instead
  case RetryLanePriority:// Should be handled by findRetryLane instead
  break;case IdleLanePriority:var lane=pickArbitraryLane(IdleLanes&~wipLanes);if(lane===NoLane){lane=pickArbitraryLane(IdleLanes);}return lane;}{{throw Error("Invalid update priority: "+lanePriority+". This is a bug in React.");}}}// To ensure consistency across multiple updates in the same event, this should
  // be pure function, so that it always returns the same lane for given inputs.
  function findTransitionLane(wipLanes,pendingLanes){// First look for lanes that are completely unclaimed, i.e. have no
  // pending work.
  var lane=pickArbitraryLane(TransitionLanes&~pendingLanes);if(lane===NoLane){// If all lanes have pending work, look for a lane that isn't currently
  // being worked on.
  lane=pickArbitraryLane(TransitionLanes&~wipLanes);if(lane===NoLane){// If everything is being worked on, pick any lane. This has the
  // effect of interrupting the current work-in-progress.
  lane=pickArbitraryLane(TransitionLanes);}}return lane;}// To ensure consistency across multiple updates in the same event, this should
  // be pure function, so that it always returns the same lane for given inputs.
  function findRetryLane(wipLanes){// This is a fork of `findUpdateLane` designed specifically for Suspense
  // "retries" — a special update that attempts to flip a Suspense boundary
  // from its placeholder state to its primary/resolved state.
  var lane=pickArbitraryLane(RetryLanes&~wipLanes);if(lane===NoLane){lane=pickArbitraryLane(RetryLanes);}return lane;}function getHighestPriorityLane(lanes){return lanes&-lanes;}function getLowestPriorityLane(lanes){// This finds the most significant non-zero bit.
  var index=31-clz32(lanes);return index<0?NoLanes:1<<index;}function getEqualOrHigherPriorityLanes(lanes){return (getLowestPriorityLane(lanes)<<1)-1;}function pickArbitraryLane(lanes){// This wrapper function gets inlined. Only exists so to communicate that it
  // doesn't matter which bit is selected; you can pick any bit without
  // affecting the algorithms where its used. Here I'm using
  // getHighestPriorityLane because it requires the fewest operations.
  return getHighestPriorityLane(lanes);}function pickArbitraryLaneIndex(lanes){return 31-clz32(lanes);}function laneToIndex(lane){return pickArbitraryLaneIndex(lane);}function includesSomeLane(a,b){return (a&b)!==NoLanes;}function isSubsetOfLanes(set,subset){return (set&subset)===subset;}function mergeLanes(a,b){return a|b;}function removeLanes(set,subset){return set&~subset;}// Seems redundant, but it changes the type from a single lane (used for
  // updates) to a group of lanes (used for flushing work).
  function laneToLanes(lane){return lane;}function higherPriorityLane(a,b){// This works because the bit ranges decrease in priority as you go left.
  return a!==NoLane&&a<b?a:b;}function createLaneMap(initial){return new Array(TotalLanes).fill(initial);}function markRootUpdated(root,updateLane,eventTime){root.pendingLanes|=updateLane;// TODO: Theoretically, any update to any lane can unblock any other lane. But
  // it's not practical to try every single possible combination. We need a
  // heuristic to decide which lanes to attempt to render, and in which batches.
  // For now, we use the same heuristic as in the old ExpirationTimes model:
  // retry any lane at equal or lower priority, but don't try updates at higher
  // priority without also including the lower priority updates. This works well
  // when considering updates across different priority levels, but isn't
  // sufficient for updates within the same priority, since we want to treat
  // those updates as parallel.
  // Unsuspend any update at equal or lower priority.
  var higherPriorityLanes=updateLane-1;// Turns 0b1000 into 0b0111
  root.suspendedLanes&=higherPriorityLanes;root.pingedLanes&=higherPriorityLanes;var eventTimes=root.eventTimes;var index=laneToIndex(updateLane);// We can always overwrite an existing timestamp because we prefer the most
  // recent event, and we assume time is monotonically increasing.
  eventTimes[index]=eventTime;}function markRootSuspended(root,suspendedLanes){root.suspendedLanes|=suspendedLanes;root.pingedLanes&=~suspendedLanes;// The suspended lanes are no longer CPU-bound. Clear their expiration times.
  var expirationTimes=root.expirationTimes;var lanes=suspendedLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;expirationTimes[index]=NoTimestamp;lanes&=~lane;}}function markRootPinged(root,pingedLanes,eventTime){root.pingedLanes|=root.suspendedLanes&pingedLanes;}function markRootExpired(root,expiredLanes){root.expiredLanes|=expiredLanes&root.pendingLanes;}function markDiscreteUpdatesExpired(root){root.expiredLanes|=InputDiscreteLanes&root.pendingLanes;}function hasDiscreteLanes(lanes){return (lanes&InputDiscreteLanes)!==NoLanes;}function markRootMutableRead(root,updateLane){root.mutableReadLanes|=updateLane&root.pendingLanes;}function markRootFinished(root,remainingLanes){var noLongerPendingLanes=root.pendingLanes&~remainingLanes;root.pendingLanes=remainingLanes;// Let's try everything again
  root.suspendedLanes=0;root.pingedLanes=0;root.expiredLanes&=remainingLanes;root.mutableReadLanes&=remainingLanes;root.entangledLanes&=remainingLanes;var entanglements=root.entanglements;var eventTimes=root.eventTimes;var expirationTimes=root.expirationTimes;// Clear the lanes that no longer have pending work
  var lanes=noLongerPendingLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;entanglements[index]=NoLanes;eventTimes[index]=NoTimestamp;expirationTimes[index]=NoTimestamp;lanes&=~lane;}}function markRootEntangled(root,entangledLanes){root.entangledLanes|=entangledLanes;var entanglements=root.entanglements;var lanes=entangledLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;entanglements[index]|=entangledLanes;lanes&=~lane;}}var clz32=Math.clz32?Math.clz32:clz32Fallback;// Count leading zeros. Only used on lanes, so assume input is an integer.
  // Based on:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32
  var log=Math.log;var LN2=Math.LN2;function clz32Fallback(lanes){if(lanes===0){return 32;}return 31-(log(lanes)/LN2|0)|0;}var Scheduler_runWithPriority=Scheduler.unstable_runWithPriority,Scheduler_scheduleCallback=Scheduler.unstable_scheduleCallback,Scheduler_cancelCallback=Scheduler.unstable_cancelCallback,Scheduler_shouldYield=Scheduler.unstable_shouldYield,Scheduler_requestPaint=Scheduler.unstable_requestPaint,Scheduler_now$1=Scheduler.unstable_now,Scheduler_getCurrentPriorityLevel=Scheduler.unstable_getCurrentPriorityLevel,Scheduler_ImmediatePriority=Scheduler.unstable_ImmediatePriority,Scheduler_UserBlockingPriority=Scheduler.unstable_UserBlockingPriority,Scheduler_NormalPriority=Scheduler.unstable_NormalPriority,Scheduler_LowPriority=Scheduler.unstable_LowPriority,Scheduler_IdlePriority=Scheduler.unstable_IdlePriority;{// Provide explicit error message when production+profiling bundle of e.g.
  // react-dom is used with production (non-profiling) bundle of
  // scheduler/tracing
  if(!(tracing.__interactionsRef!=null&&tracing.__interactionsRef.current!=null)){{throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");}}}var fakeCallbackNode={};// Except for NoPriority, these correspond to Scheduler priorities. We use
  // ascending numbers so we can compare them like numbers. They start at 90 to
  // avoid clashing with Scheduler's priorities.
  var ImmediatePriority$1=99;var UserBlockingPriority$1=98;var NormalPriority$1=97;var LowPriority$1=96;var IdlePriority$1=95;// NoPriority is the absence of priority. Also React-only.
  var NoPriority$1=90;var shouldYield=Scheduler_shouldYield;var requestPaint=// Fall back gracefully if we're running an older version of Scheduler.
  Scheduler_requestPaint!==undefined?Scheduler_requestPaint:function(){};var syncQueue=null;var immediateQueueCallbackNode=null;var isFlushingSyncQueue=false;var initialTimeMs$1=Scheduler_now$1();// If the initial timestamp is reasonably small, use Scheduler's `now` directly.
  // This will be the case for modern browsers that support `performance.now`. In
  // older browsers, Scheduler falls back to `Date.now`, which returns a Unix
  // timestamp. In that case, subtract the module initialization time to simulate
  // the behavior of performance.now and keep our times small enough to fit
  // within 32 bits.
  // TODO: Consider lifting this into Scheduler.
  var now$1=initialTimeMs$1<10000?Scheduler_now$1:function(){return Scheduler_now$1()-initialTimeMs$1;};function getCurrentPriorityLevel(){switch(Scheduler_getCurrentPriorityLevel()){case Scheduler_ImmediatePriority:return ImmediatePriority$1;case Scheduler_UserBlockingPriority:return UserBlockingPriority$1;case Scheduler_NormalPriority:return NormalPriority$1;case Scheduler_LowPriority:return LowPriority$1;case Scheduler_IdlePriority:return IdlePriority$1;default:{{throw Error("Unknown priority level.");}}}}function reactPriorityToSchedulerPriority(reactPriorityLevel){switch(reactPriorityLevel){case ImmediatePriority$1:return Scheduler_ImmediatePriority;case UserBlockingPriority$1:return Scheduler_UserBlockingPriority;case NormalPriority$1:return Scheduler_NormalPriority;case LowPriority$1:return Scheduler_LowPriority;case IdlePriority$1:return Scheduler_IdlePriority;default:{{throw Error("Unknown priority level.");}}}}function runWithPriority(reactPriorityLevel,fn){var priorityLevel=reactPriorityToSchedulerPriority(reactPriorityLevel);return Scheduler_runWithPriority(priorityLevel,fn);}function scheduleCallback(reactPriorityLevel,callback,options){var priorityLevel=reactPriorityToSchedulerPriority(reactPriorityLevel);return Scheduler_scheduleCallback(priorityLevel,callback,options);}function scheduleSyncCallback(callback){// Push this callback into an internal queue. We'll flush these either in
  // the next tick, or earlier if something calls `flushSyncCallbackQueue`.
  if(syncQueue===null){syncQueue=[callback];// Flush the queue in the next tick, at the earliest.
  immediateQueueCallbackNode=Scheduler_scheduleCallback(Scheduler_ImmediatePriority,flushSyncCallbackQueueImpl);}else {// Push onto existing queue. Don't need to schedule a callback because
  // we already scheduled one when we created the queue.
  syncQueue.push(callback);}return fakeCallbackNode;}function cancelCallback(callbackNode){if(callbackNode!==fakeCallbackNode){Scheduler_cancelCallback(callbackNode);}}function flushSyncCallbackQueue(){if(immediateQueueCallbackNode!==null){var node=immediateQueueCallbackNode;immediateQueueCallbackNode=null;Scheduler_cancelCallback(node);}flushSyncCallbackQueueImpl();}function flushSyncCallbackQueueImpl(){if(!isFlushingSyncQueue&&syncQueue!==null){// Prevent re-entrancy.
  isFlushingSyncQueue=true;var i=0;{try{var _isSync2=true;var _queue=syncQueue;runWithPriority(ImmediatePriority$1,function(){for(;i<_queue.length;i++){var callback=_queue[i];do{callback=callback(_isSync2);}while(callback!==null);}});syncQueue=null;}catch(error){// If something throws, leave the remaining callbacks on the queue.
  if(syncQueue!==null){syncQueue=syncQueue.slice(i+1);}// Resume flushing in the next tick
  Scheduler_scheduleCallback(Scheduler_ImmediatePriority,flushSyncCallbackQueue);throw error;}finally{isFlushingSyncQueue=false;}}}}var NoMode=0;var StrictMode=1;// TODO: Remove BlockingMode and ConcurrentMode by reading from the root
  // tag instead
  var BlockingMode=2;var ConcurrentMode=4;var ProfileMode=8;var DebugTracingMode=16;var ReactCurrentBatchConfig=ReactSharedInternals.ReactCurrentBatchConfig;var NoTransition=0;function requestCurrentTransition(){return ReactCurrentBatchConfig.transition;}/**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */function is(x,y){return x===y&&(x!==0||1/x===1/y)||x!==x&&y!==y// eslint-disable-line no-self-compare
  ;}var objectIs=typeof Object.is==='function'?Object.is:is;var hasOwnProperty=Object.prototype.hasOwnProperty;/**
   * Performs equality by iterating through keys on an object and returning false
   * when any key has values which are not strictly equal between the arguments.
   * Returns true when the values of all keys are strictly equal.
   */function shallowEqual(objA,objB){if(objectIs(objA,objB)){return true;}if(_typeof(objA)!=='object'||objA===null||_typeof(objB)!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;}// Test for A's keys different from B.
  for(var i=0;i<keysA.length;i++){if(!hasOwnProperty.call(objB,keysA[i])||!objectIs(objA[keysA[i]],objB[keysA[i]])){return false;}}return true;}function describeFiber(fiber){var owner=fiber._debugOwner?fiber._debugOwner.type:null;var source=fiber._debugSource;switch(fiber.tag){case HostComponent:return describeBuiltInComponentFrame(fiber.type);case LazyComponent:return describeBuiltInComponentFrame('Lazy');case SuspenseComponent:return describeBuiltInComponentFrame('Suspense');case SuspenseListComponent:return describeBuiltInComponentFrame('SuspenseList');case FunctionComponent:case IndeterminateComponent:case SimpleMemoComponent:return describeFunctionComponentFrame(fiber.type);case ForwardRef:return describeFunctionComponentFrame(fiber.type.render);case Block:return describeFunctionComponentFrame(fiber.type._render);case ClassComponent:return describeClassComponentFrame(fiber.type);default:return '';}}function getStackByFiberInDevAndProd(workInProgress){try{var info='';var node=workInProgress;do{info+=describeFiber(node);node=node["return"];}while(node);return info;}catch(x){return '\nError generating stack: '+x.message+'\n'+x.stack;}}var ReactDebugCurrentFrame$1=ReactSharedInternals.ReactDebugCurrentFrame;var current=null;var isRendering=false;function getCurrentFiberOwnerNameInDevOrNull(){{if(current===null){return null;}var owner=current._debugOwner;if(owner!==null&&typeof owner!=='undefined'){return getComponentName(owner.type);}}return null;}function getCurrentFiberStackInDev(){{if(current===null){return '';}// Safe because if current fiber exists, we are reconciling,
  // and it is guaranteed to be the work-in-progress version.
  return getStackByFiberInDevAndProd(current);}}function resetCurrentFiber(){{ReactDebugCurrentFrame$1.getCurrentStack=null;current=null;isRendering=false;}}function setCurrentFiber(fiber){{ReactDebugCurrentFrame$1.getCurrentStack=getCurrentFiberStackInDev;current=fiber;isRendering=false;}}function setIsRendering(rendering){{isRendering=rendering;}}function getIsRendering(){{return isRendering;}}var ReactStrictModeWarnings={recordUnsafeLifecycleWarnings:function recordUnsafeLifecycleWarnings(fiber,instance){},flushPendingUnsafeLifecycleWarnings:function flushPendingUnsafeLifecycleWarnings(){},recordLegacyContextWarning:function recordLegacyContextWarning(fiber,instance){},flushLegacyContextWarning:function flushLegacyContextWarning(){},discardPendingWarnings:function discardPendingWarnings(){}};{var findStrictRoot=function findStrictRoot(fiber){var maybeStrictRoot=null;var node=fiber;while(node!==null){if(node.mode&StrictMode){maybeStrictRoot=node;}node=node["return"];}return maybeStrictRoot;};var setToSortedString=function setToSortedString(set){var array=[];set.forEach(function(value){array.push(value);});return array.sort().join(', ');};var pendingComponentWillMountWarnings=[];var pendingUNSAFE_ComponentWillMountWarnings=[];var pendingComponentWillReceivePropsWarnings=[];var pendingUNSAFE_ComponentWillReceivePropsWarnings=[];var pendingComponentWillUpdateWarnings=[];var pendingUNSAFE_ComponentWillUpdateWarnings=[];// Tracks components we have already warned about.
  var didWarnAboutUnsafeLifecycles=new Set();ReactStrictModeWarnings.recordUnsafeLifecycleWarnings=function(fiber,instance){// Dedup strategy: Warn once per component.
  if(didWarnAboutUnsafeLifecycles.has(fiber.type)){return;}if(typeof instance.componentWillMount==='function'&&// Don't warn about react-lifecycles-compat polyfilled components.
  instance.componentWillMount.__suppressDeprecationWarning!==true){pendingComponentWillMountWarnings.push(fiber);}if(fiber.mode&StrictMode&&typeof instance.UNSAFE_componentWillMount==='function'){pendingUNSAFE_ComponentWillMountWarnings.push(fiber);}if(typeof instance.componentWillReceiveProps==='function'&&instance.componentWillReceiveProps.__suppressDeprecationWarning!==true){pendingComponentWillReceivePropsWarnings.push(fiber);}if(fiber.mode&StrictMode&&typeof instance.UNSAFE_componentWillReceiveProps==='function'){pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);}if(typeof instance.componentWillUpdate==='function'&&instance.componentWillUpdate.__suppressDeprecationWarning!==true){pendingComponentWillUpdateWarnings.push(fiber);}if(fiber.mode&StrictMode&&typeof instance.UNSAFE_componentWillUpdate==='function'){pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);}};ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings=function(){// We do an initial pass to gather component names
  var componentWillMountUniqueNames=new Set();if(pendingComponentWillMountWarnings.length>0){pendingComponentWillMountWarnings.forEach(function(fiber){componentWillMountUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingComponentWillMountWarnings=[];}var UNSAFE_componentWillMountUniqueNames=new Set();if(pendingUNSAFE_ComponentWillMountWarnings.length>0){pendingUNSAFE_ComponentWillMountWarnings.forEach(function(fiber){UNSAFE_componentWillMountUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingUNSAFE_ComponentWillMountWarnings=[];}var componentWillReceivePropsUniqueNames=new Set();if(pendingComponentWillReceivePropsWarnings.length>0){pendingComponentWillReceivePropsWarnings.forEach(function(fiber){componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingComponentWillReceivePropsWarnings=[];}var UNSAFE_componentWillReceivePropsUniqueNames=new Set();if(pendingUNSAFE_ComponentWillReceivePropsWarnings.length>0){pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function(fiber){UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingUNSAFE_ComponentWillReceivePropsWarnings=[];}var componentWillUpdateUniqueNames=new Set();if(pendingComponentWillUpdateWarnings.length>0){pendingComponentWillUpdateWarnings.forEach(function(fiber){componentWillUpdateUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingComponentWillUpdateWarnings=[];}var UNSAFE_componentWillUpdateUniqueNames=new Set();if(pendingUNSAFE_ComponentWillUpdateWarnings.length>0){pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function(fiber){UNSAFE_componentWillUpdateUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingUNSAFE_ComponentWillUpdateWarnings=[];}// Finally, we flush all the warnings
  // UNSAFE_ ones before the deprecated ones, since they'll be 'louder'
  if(UNSAFE_componentWillMountUniqueNames.size>0){var sortedNames=setToSortedString(UNSAFE_componentWillMountUniqueNames);error('Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move code with side effects to componentDidMount, and set initial state in the constructor.\n'+'\nPlease update the following components: %s',sortedNames);}if(UNSAFE_componentWillReceivePropsUniqueNames.size>0){var _sortedNames=setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);error('Using UNSAFE_componentWillReceiveProps in strict mode is not recommended '+'and may indicate bugs in your code. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+"* If you're updating state whenever props change, "+'refactor your code to use memoization techniques or move it to '+'static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n'+'\nPlease update the following components: %s',_sortedNames);}if(UNSAFE_componentWillUpdateUniqueNames.size>0){var _sortedNames2=setToSortedString(UNSAFE_componentWillUpdateUniqueNames);error('Using UNSAFE_componentWillUpdate in strict mode is not recommended '+'and may indicate bugs in your code. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+'\nPlease update the following components: %s',_sortedNames2);}if(componentWillMountUniqueNames.size>0){var _sortedNames3=setToSortedString(componentWillMountUniqueNames);warn('componentWillMount has been renamed, and is not recommended for use. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move code with side effects to componentDidMount, and set initial state in the constructor.\n'+'* Rename componentWillMount to UNSAFE_componentWillMount to suppress '+'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. '+'To rename all deprecated lifecycles to their new names, you can run '+'`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n'+'\nPlease update the following components: %s',_sortedNames3);}if(componentWillReceivePropsUniqueNames.size>0){var _sortedNames4=setToSortedString(componentWillReceivePropsUniqueNames);warn('componentWillReceiveProps has been renamed, and is not recommended for use. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+"* If you're updating state whenever props change, refactor your "+'code to use memoization techniques or move it to '+'static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n'+'* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress '+'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. '+'To rename all deprecated lifecycles to their new names, you can run '+'`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n'+'\nPlease update the following components: %s',_sortedNames4);}if(componentWillUpdateUniqueNames.size>0){var _sortedNames5=setToSortedString(componentWillUpdateUniqueNames);warn('componentWillUpdate has been renamed, and is not recommended for use. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+'* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress '+'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. '+'To rename all deprecated lifecycles to their new names, you can run '+'`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n'+'\nPlease update the following components: %s',_sortedNames5);}};var pendingLegacyContextWarning=new Map();// Tracks components we have already warned about.
  var didWarnAboutLegacyContext=new Set();ReactStrictModeWarnings.recordLegacyContextWarning=function(fiber,instance){var strictRoot=findStrictRoot(fiber);if(strictRoot===null){error('Expected to find a StrictMode component in a strict mode tree. '+'This error is likely caused by a bug in React. Please file an issue.');return;}// Dedup strategy: Warn once per component.
  if(didWarnAboutLegacyContext.has(fiber.type)){return;}var warningsForRoot=pendingLegacyContextWarning.get(strictRoot);if(fiber.type.contextTypes!=null||fiber.type.childContextTypes!=null||instance!==null&&typeof instance.getChildContext==='function'){if(warningsForRoot===undefined){warningsForRoot=[];pendingLegacyContextWarning.set(strictRoot,warningsForRoot);}warningsForRoot.push(fiber);}};ReactStrictModeWarnings.flushLegacyContextWarning=function(){pendingLegacyContextWarning.forEach(function(fiberArray,strictRoot){if(fiberArray.length===0){return;}var firstFiber=fiberArray[0];var uniqueNames=new Set();fiberArray.forEach(function(fiber){uniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutLegacyContext.add(fiber.type);});var sortedNames=setToSortedString(uniqueNames);try{setCurrentFiber(firstFiber);error('Legacy context API has been detected within a strict-mode tree.'+'\n\nThe old API will be supported in all 16.x releases, but applications '+'using it should migrate to the new version.'+'\n\nPlease update the following components: %s'+'\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context',sortedNames);}finally{resetCurrentFiber();}});};ReactStrictModeWarnings.discardPendingWarnings=function(){pendingComponentWillMountWarnings=[];pendingUNSAFE_ComponentWillMountWarnings=[];pendingComponentWillReceivePropsWarnings=[];pendingUNSAFE_ComponentWillReceivePropsWarnings=[];pendingComponentWillUpdateWarnings=[];pendingUNSAFE_ComponentWillUpdateWarnings=[];pendingLegacyContextWarning=new Map();};}function resolveDefaultProps(Component,baseProps){if(Component&&Component.defaultProps){// Resolve default props. Taken from ReactElement
  var props=_assign({},baseProps);var defaultProps=Component.defaultProps;for(var propName in defaultProps){if(props[propName]===undefined){props[propName]=defaultProps[propName];}}return props;}return baseProps;}// Max 31 bit integer. The max integer size in V8 for 32-bit systems.
  // Math.pow(2, 30) - 1
  // 0b111111111111111111111111111111
  var MAX_SIGNED_31_BIT_INT=1073741823;var valueCursor=createCursor(null);var rendererSigil;{// Use this to detect multiple renderers using the same context
  rendererSigil={};}var currentlyRenderingFiber=null;var lastContextDependency=null;var lastContextWithAllBitsObserved=null;var isDisallowedContextReadInDEV=false;function resetContextDependencies(){// This is called right before React yields execution, to ensure `readContext`
  // cannot be called outside the render phase.
  currentlyRenderingFiber=null;lastContextDependency=null;lastContextWithAllBitsObserved=null;{isDisallowedContextReadInDEV=false;}}function enterDisallowedContextReadInDEV(){{isDisallowedContextReadInDEV=true;}}function exitDisallowedContextReadInDEV(){{isDisallowedContextReadInDEV=false;}}function pushProvider(providerFiber,nextValue){var context=providerFiber.type._context;if(isPrimaryRenderer){push(valueCursor,context._currentValue,providerFiber);context._currentValue=nextValue;{if(context._currentRenderer!==undefined&&context._currentRenderer!==null&&context._currentRenderer!==rendererSigil){error('Detected multiple renderers concurrently rendering the '+'same context provider. This is currently unsupported.');}context._currentRenderer=rendererSigil;}}else {push(valueCursor,context._currentValue2,providerFiber);context._currentValue2=nextValue;{if(context._currentRenderer2!==undefined&&context._currentRenderer2!==null&&context._currentRenderer2!==rendererSigil){error('Detected multiple renderers concurrently rendering the '+'same context provider. This is currently unsupported.');}context._currentRenderer2=rendererSigil;}}}function popProvider(providerFiber){var currentValue=valueCursor.current;pop(valueCursor,providerFiber);var context=providerFiber.type._context;if(isPrimaryRenderer){context._currentValue=currentValue;}else {context._currentValue2=currentValue;}}function calculateChangedBits(context,newValue,oldValue){if(objectIs(oldValue,newValue)){// No change
  return 0;}else {var changedBits=typeof context._calculateChangedBits==='function'?context._calculateChangedBits(oldValue,newValue):MAX_SIGNED_31_BIT_INT;{if((changedBits&MAX_SIGNED_31_BIT_INT)!==changedBits){error('calculateChangedBits: Expected the return value to be a '+'31-bit integer. Instead received: %s',changedBits);}}return changedBits|0;}}function scheduleWorkOnParentPath(parent,renderLanes){// Update the child lanes of all the ancestors, including the alternates.
  var node=parent;while(node!==null){var alternate=node.alternate;if(!isSubsetOfLanes(node.childLanes,renderLanes)){node.childLanes=mergeLanes(node.childLanes,renderLanes);if(alternate!==null){alternate.childLanes=mergeLanes(alternate.childLanes,renderLanes);}}else if(alternate!==null&&!isSubsetOfLanes(alternate.childLanes,renderLanes)){alternate.childLanes=mergeLanes(alternate.childLanes,renderLanes);}else {// Neither alternate was updated, which means the rest of the
  // ancestor path already has sufficient priority.
  break;}node=node["return"];}}function propagateContextChange(workInProgress,context,changedBits,renderLanes){var fiber=workInProgress.child;if(fiber!==null){// Set the return pointer of the child to the work-in-progress fiber.
  fiber["return"]=workInProgress;}while(fiber!==null){var nextFiber=void 0;// Visit this fiber.
  var list=fiber.dependencies;if(list!==null){nextFiber=fiber.child;var dependency=list.firstContext;while(dependency!==null){// Check if the context matches.
  if(dependency.context===context&&(dependency.observedBits&changedBits)!==0){// Match! Schedule an update on this fiber.
  if(fiber.tag===ClassComponent){// Schedule a force update on the work-in-progress.
  var update=createUpdate(NoTimestamp,pickArbitraryLane(renderLanes));update.tag=ForceUpdate;// TODO: Because we don't have a work-in-progress, this will add the
  // update to the current fiber, too, which means it will persist even if
  // this render is thrown away. Since it's a race condition, not sure it's
  // worth fixing.
  enqueueUpdate(fiber,update);}fiber.lanes=mergeLanes(fiber.lanes,renderLanes);var alternate=fiber.alternate;if(alternate!==null){alternate.lanes=mergeLanes(alternate.lanes,renderLanes);}scheduleWorkOnParentPath(fiber["return"],renderLanes);// Mark the updated lanes on the list, too.
  list.lanes=mergeLanes(list.lanes,renderLanes);// Since we already found a match, we can stop traversing the
  // dependency list.
  break;}dependency=dependency.next;}}else if(fiber.tag===ContextProvider){// Don't scan deeper if this is a matching provider
  nextFiber=fiber.type===workInProgress.type?null:fiber.child;}else {// Traverse down.
  nextFiber=fiber.child;}if(nextFiber!==null){// Set the return pointer of the child to the work-in-progress fiber.
  nextFiber["return"]=fiber;}else {// No child. Traverse to next sibling.
  nextFiber=fiber;while(nextFiber!==null){if(nextFiber===workInProgress){// We're back to the root of this subtree. Exit.
  nextFiber=null;break;}var sibling=nextFiber.sibling;if(sibling!==null){// Set the return pointer of the sibling to the work-in-progress fiber.
  sibling["return"]=nextFiber["return"];nextFiber=sibling;break;}// No more siblings. Traverse up.
  nextFiber=nextFiber["return"];}}fiber=nextFiber;}}function prepareToReadContext(workInProgress,renderLanes){currentlyRenderingFiber=workInProgress;lastContextDependency=null;lastContextWithAllBitsObserved=null;var dependencies=workInProgress.dependencies;if(dependencies!==null){var firstContext=dependencies.firstContext;if(firstContext!==null){if(includesSomeLane(dependencies.lanes,renderLanes)){// Context list has a pending update. Mark that this fiber performed work.
  markWorkInProgressReceivedUpdate();}// Reset the work-in-progress list
  dependencies.firstContext=null;}}}function _readContext(context,observedBits){{// This warning would fire if you read context inside a Hook like useMemo.
  // Unlike the class check below, it's not enforced in production for perf.
  if(isDisallowedContextReadInDEV){error('Context can only be read while React is rendering. '+'In classes, you can read it in the render method or getDerivedStateFromProps. '+'In function components, you can read it directly in the function body, but not '+'inside Hooks like useReducer() or useMemo().');}}if(lastContextWithAllBitsObserved===context);else if(observedBits===false||observedBits===0);else {var resolvedObservedBits;// Avoid deopting on observable arguments or heterogeneous types.
  if(typeof observedBits!=='number'||observedBits===MAX_SIGNED_31_BIT_INT){// Observe all updates.
  lastContextWithAllBitsObserved=context;resolvedObservedBits=MAX_SIGNED_31_BIT_INT;}else {resolvedObservedBits=observedBits;}var contextItem={context:context,observedBits:resolvedObservedBits,next:null};if(lastContextDependency===null){if(!(currentlyRenderingFiber!==null)){{throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");}}// This is the first dependency for this component. Create a new list.
  lastContextDependency=contextItem;currentlyRenderingFiber.dependencies={lanes:NoLanes,firstContext:contextItem,responders:null};}else {// Append a new context item.
  lastContextDependency=lastContextDependency.next=contextItem;}}return isPrimaryRenderer?context._currentValue:context._currentValue2;}var UpdateState=0;var ReplaceState=1;var ForceUpdate=2;var CaptureUpdate=3;// Global state that is reset at the beginning of calling `processUpdateQueue`.
  // It should only be read right after calling `processUpdateQueue`, via
  // `checkHasForceUpdateAfterProcessing`.
  var hasForceUpdate=false;var didWarnUpdateInsideUpdate;var currentlyProcessingQueue;{didWarnUpdateInsideUpdate=false;currentlyProcessingQueue=null;}function initializeUpdateQueue(fiber){var queue={baseState:fiber.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null};fiber.updateQueue=queue;}function cloneUpdateQueue(current,workInProgress){// Clone the update queue from current. Unless it's already a clone.
  var queue=workInProgress.updateQueue;var currentQueue=current.updateQueue;if(queue===currentQueue){var clone={baseState:currentQueue.baseState,firstBaseUpdate:currentQueue.firstBaseUpdate,lastBaseUpdate:currentQueue.lastBaseUpdate,shared:currentQueue.shared,effects:currentQueue.effects};workInProgress.updateQueue=clone;}}function createUpdate(eventTime,lane){var update={eventTime:eventTime,lane:lane,tag:UpdateState,payload:null,callback:null,next:null};return update;}function enqueueUpdate(fiber,update){var updateQueue=fiber.updateQueue;if(updateQueue===null){// Only occurs if the fiber has been unmounted.
  return;}var sharedQueue=updateQueue.shared;var pending=sharedQueue.pending;if(pending===null){// This is the first update. Create a circular list.
  update.next=update;}else {update.next=pending.next;pending.next=update;}sharedQueue.pending=update;{if(currentlyProcessingQueue===sharedQueue&&!didWarnUpdateInsideUpdate){error('An update (setState, replaceState, or forceUpdate) was scheduled '+'from inside an update function. Update functions should be pure, '+'with zero side-effects. Consider using componentDidUpdate or a '+'callback.');didWarnUpdateInsideUpdate=true;}}}function enqueueCapturedUpdate(workInProgress,capturedUpdate){// Captured updates are updates that are thrown by a child during the render
  // phase. They should be discarded if the render is aborted. Therefore,
  // we should only put them on the work-in-progress queue, not the current one.
  var queue=workInProgress.updateQueue;// Check if the work-in-progress queue is a clone.
  var current=workInProgress.alternate;if(current!==null){var currentQueue=current.updateQueue;if(queue===currentQueue){// The work-in-progress queue is the same as current. This happens when
  // we bail out on a parent fiber that then captures an error thrown by
  // a child. Since we want to append the update only to the work-in
  // -progress queue, we need to clone the updates. We usually clone during
  // processUpdateQueue, but that didn't happen in this case because we
  // skipped over the parent when we bailed out.
  var newFirst=null;var newLast=null;var firstBaseUpdate=queue.firstBaseUpdate;if(firstBaseUpdate!==null){// Loop through the updates and clone them.
  var update=firstBaseUpdate;do{var clone={eventTime:update.eventTime,lane:update.lane,tag:update.tag,payload:update.payload,callback:update.callback,next:null};if(newLast===null){newFirst=newLast=clone;}else {newLast.next=clone;newLast=clone;}update=update.next;}while(update!==null);// Append the captured update the end of the cloned list.
  if(newLast===null){newFirst=newLast=capturedUpdate;}else {newLast.next=capturedUpdate;newLast=capturedUpdate;}}else {// There are no base updates.
  newFirst=newLast=capturedUpdate;}queue={baseState:currentQueue.baseState,firstBaseUpdate:newFirst,lastBaseUpdate:newLast,shared:currentQueue.shared,effects:currentQueue.effects};workInProgress.updateQueue=queue;return;}}// Append the update to the end of the list.
  var lastBaseUpdate=queue.lastBaseUpdate;if(lastBaseUpdate===null){queue.firstBaseUpdate=capturedUpdate;}else {lastBaseUpdate.next=capturedUpdate;}queue.lastBaseUpdate=capturedUpdate;}function getStateFromUpdate(workInProgress,queue,update,prevState,nextProps,instance){switch(update.tag){case ReplaceState:{var payload=update.payload;if(typeof payload==='function'){// Updater function
  {enterDisallowedContextReadInDEV();}var nextState=payload.call(instance,prevState,nextProps);{if(workInProgress.mode&StrictMode){disableLogs();try{payload.call(instance,prevState,nextProps);}finally{reenableLogs();}}exitDisallowedContextReadInDEV();}return nextState;}// State object
  return payload;}case CaptureUpdate:{workInProgress.flags=workInProgress.flags&~ShouldCapture|DidCapture;}// Intentional fallthrough
  case UpdateState:{var _payload=update.payload;var partialState;if(typeof _payload==='function'){// Updater function
  {enterDisallowedContextReadInDEV();}partialState=_payload.call(instance,prevState,nextProps);{if(workInProgress.mode&StrictMode){disableLogs();try{_payload.call(instance,prevState,nextProps);}finally{reenableLogs();}}exitDisallowedContextReadInDEV();}}else {// Partial state object
  partialState=_payload;}if(partialState===null||partialState===undefined){// Null and undefined are treated as no-ops.
  return prevState;}// Merge the partial state and the previous state.
  return _assign({},prevState,partialState);}case ForceUpdate:{hasForceUpdate=true;return prevState;}}return prevState;}function processUpdateQueue(workInProgress,props,instance,renderLanes){// This is always non-null on a ClassComponent or HostRoot
  var queue=workInProgress.updateQueue;hasForceUpdate=false;{currentlyProcessingQueue=queue.shared;}var firstBaseUpdate=queue.firstBaseUpdate;var lastBaseUpdate=queue.lastBaseUpdate;// Check if there are pending updates. If so, transfer them to the base queue.
  var pendingQueue=queue.shared.pending;if(pendingQueue!==null){queue.shared.pending=null;// The pending queue is circular. Disconnect the pointer between first
  // and last so that it's non-circular.
  var lastPendingUpdate=pendingQueue;var firstPendingUpdate=lastPendingUpdate.next;lastPendingUpdate.next=null;// Append pending updates to base queue
  if(lastBaseUpdate===null){firstBaseUpdate=firstPendingUpdate;}else {lastBaseUpdate.next=firstPendingUpdate;}lastBaseUpdate=lastPendingUpdate;// If there's a current queue, and it's different from the base queue, then
  // we need to transfer the updates to that queue, too. Because the base
  // queue is a singly-linked list with no cycles, we can append to both
  // lists and take advantage of structural sharing.
  // TODO: Pass `current` as argument
  var current=workInProgress.alternate;if(current!==null){// This is always non-null on a ClassComponent or HostRoot
  var currentQueue=current.updateQueue;var currentLastBaseUpdate=currentQueue.lastBaseUpdate;if(currentLastBaseUpdate!==lastBaseUpdate){if(currentLastBaseUpdate===null){currentQueue.firstBaseUpdate=firstPendingUpdate;}else {currentLastBaseUpdate.next=firstPendingUpdate;}currentQueue.lastBaseUpdate=lastPendingUpdate;}}}// These values may change as we process the queue.
  if(firstBaseUpdate!==null){// Iterate through the list of updates to compute the result.
  var newState=queue.baseState;// TODO: Don't need to accumulate this. Instead, we can remove renderLanes
  // from the original lanes.
  var newLanes=NoLanes;var newBaseState=null;var newFirstBaseUpdate=null;var newLastBaseUpdate=null;var update=firstBaseUpdate;do{var updateLane=update.lane;var updateEventTime=update.eventTime;if(!isSubsetOfLanes(renderLanes,updateLane)){// Priority is insufficient. Skip this update. If this is the first
  // skipped update, the previous update/state is the new base
  // update/state.
  var clone={eventTime:updateEventTime,lane:updateLane,tag:update.tag,payload:update.payload,callback:update.callback,next:null};if(newLastBaseUpdate===null){newFirstBaseUpdate=newLastBaseUpdate=clone;newBaseState=newState;}else {newLastBaseUpdate=newLastBaseUpdate.next=clone;}// Update the remaining priority in the queue.
  newLanes=mergeLanes(newLanes,updateLane);}else {// This update does have sufficient priority.
  if(newLastBaseUpdate!==null){var _clone={eventTime:updateEventTime,// This update is going to be committed so we never want uncommit
  // it. Using NoLane works because 0 is a subset of all bitmasks, so
  // this will never be skipped by the check above.
  lane:NoLane,tag:update.tag,payload:update.payload,callback:update.callback,next:null};newLastBaseUpdate=newLastBaseUpdate.next=_clone;}// Process this update.
  newState=getStateFromUpdate(workInProgress,queue,update,newState,props,instance);var callback=update.callback;if(callback!==null){workInProgress.flags|=Callback;var effects=queue.effects;if(effects===null){queue.effects=[update];}else {effects.push(update);}}}update=update.next;if(update===null){pendingQueue=queue.shared.pending;if(pendingQueue===null){break;}else {// An update was scheduled from inside a reducer. Add the new
  // pending updates to the end of the list and keep processing.
  var _lastPendingUpdate=pendingQueue;// Intentionally unsound. Pending updates form a circular list, but we
  // unravel them when transferring them to the base queue.
  var _firstPendingUpdate=_lastPendingUpdate.next;_lastPendingUpdate.next=null;update=_firstPendingUpdate;queue.lastBaseUpdate=_lastPendingUpdate;queue.shared.pending=null;}}}while(true);if(newLastBaseUpdate===null){newBaseState=newState;}queue.baseState=newBaseState;queue.firstBaseUpdate=newFirstBaseUpdate;queue.lastBaseUpdate=newLastBaseUpdate;// Set the remaining expiration time to be whatever is remaining in the queue.
  // This should be fine because the only two other things that contribute to
  // expiration time are props and context. We're already in the middle of the
  // begin phase by the time we start processing the queue, so we've already
  // dealt with the props. Context in components that specify
  // shouldComponentUpdate is tricky; but we'll have to account for
  // that regardless.
  markSkippedUpdateLanes(newLanes);workInProgress.lanes=newLanes;workInProgress.memoizedState=newState;}{currentlyProcessingQueue=null;}}function callCallback(callback,context){if(!(typeof callback==='function')){{throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+callback);}}callback.call(context);}function resetHasForceUpdateBeforeProcessing(){hasForceUpdate=false;}function checkHasForceUpdateAfterProcessing(){return hasForceUpdate;}function commitUpdateQueue(finishedWork,finishedQueue,instance){// Commit the effects
  var effects=finishedQueue.effects;finishedQueue.effects=null;if(effects!==null){for(var i=0;i<effects.length;i++){var effect=effects[i];var callback=effect.callback;if(callback!==null){effect.callback=null;callCallback(callback,instance);}}}}var fakeInternalInstance={};var isArray=Array.isArray;// React.Component uses a shared frozen object by default.
  // We'll use it to determine whether we need to initialize legacy refs.
  var emptyRefsObject=new React.Component().refs;var didWarnAboutStateAssignmentForComponent;var didWarnAboutUninitializedState;var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;var didWarnAboutLegacyLifecyclesAndDerivedState;var didWarnAboutUndefinedDerivedState;var warnOnUndefinedDerivedState;var warnOnInvalidCallback;var didWarnAboutDirectlyAssigningPropsToState;var didWarnAboutContextTypeAndContextTypes;var didWarnAboutInvalidateContextType;{didWarnAboutStateAssignmentForComponent=new Set();didWarnAboutUninitializedState=new Set();didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate=new Set();didWarnAboutLegacyLifecyclesAndDerivedState=new Set();didWarnAboutDirectlyAssigningPropsToState=new Set();didWarnAboutUndefinedDerivedState=new Set();didWarnAboutContextTypeAndContextTypes=new Set();didWarnAboutInvalidateContextType=new Set();var didWarnOnInvalidCallback=new Set();warnOnInvalidCallback=function warnOnInvalidCallback(callback,callerName){if(callback===null||typeof callback==='function'){return;}var key=callerName+'_'+callback;if(!didWarnOnInvalidCallback.has(key)){didWarnOnInvalidCallback.add(key);error('%s(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callerName,callback);}};warnOnUndefinedDerivedState=function warnOnUndefinedDerivedState(type,partialState){if(partialState===undefined){var componentName=getComponentName(type)||'Component';if(!didWarnAboutUndefinedDerivedState.has(componentName)){didWarnAboutUndefinedDerivedState.add(componentName);error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. '+'You have returned undefined.',componentName);}}};// This is so gross but it's at least non-critical and can be removed if
  // it causes problems. This is meant to give a nicer error message for
  // ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
  // ...)) which otherwise throws a "_processChildContext is not a function"
  // exception.
  Object.defineProperty(fakeInternalInstance,'_processChildContext',{enumerable:false,value:function value(){{{throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");}}}});Object.freeze(fakeInternalInstance);}function applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,nextProps){var prevState=workInProgress.memoizedState;{if(workInProgress.mode&StrictMode){disableLogs();try{// Invoke the function an extra time to help detect side-effects.
  getDerivedStateFromProps(nextProps,prevState);}finally{reenableLogs();}}}var partialState=getDerivedStateFromProps(nextProps,prevState);{warnOnUndefinedDerivedState(ctor,partialState);}// Merge the partial state and the previous state.
  var memoizedState=partialState===null||partialState===undefined?prevState:_assign({},prevState,partialState);workInProgress.memoizedState=memoizedState;// Once the update queue is empty, persist the derived state onto the
  // base state.
  if(workInProgress.lanes===NoLanes){// Queue is always non-null for classes
  var updateQueue=workInProgress.updateQueue;updateQueue.baseState=memoizedState;}}var classComponentUpdater={isMounted:isMounted,enqueueSetState:function enqueueSetState(inst,payload,callback){var fiber=get(inst);var eventTime=requestEventTime();var lane=requestUpdateLane(fiber);var update=createUpdate(eventTime,lane);update.payload=payload;if(callback!==undefined&&callback!==null){{warnOnInvalidCallback(callback,'setState');}update.callback=callback;}enqueueUpdate(fiber,update);scheduleUpdateOnFiber(fiber,lane,eventTime);},enqueueReplaceState:function enqueueReplaceState(inst,payload,callback){var fiber=get(inst);var eventTime=requestEventTime();var lane=requestUpdateLane(fiber);var update=createUpdate(eventTime,lane);update.tag=ReplaceState;update.payload=payload;if(callback!==undefined&&callback!==null){{warnOnInvalidCallback(callback,'replaceState');}update.callback=callback;}enqueueUpdate(fiber,update);scheduleUpdateOnFiber(fiber,lane,eventTime);},enqueueForceUpdate:function enqueueForceUpdate(inst,callback){var fiber=get(inst);var eventTime=requestEventTime();var lane=requestUpdateLane(fiber);var update=createUpdate(eventTime,lane);update.tag=ForceUpdate;if(callback!==undefined&&callback!==null){{warnOnInvalidCallback(callback,'forceUpdate');}update.callback=callback;}enqueueUpdate(fiber,update);scheduleUpdateOnFiber(fiber,lane,eventTime);}};function checkShouldComponentUpdate(workInProgress,ctor,oldProps,newProps,oldState,newState,nextContext){var instance=workInProgress.stateNode;if(typeof instance.shouldComponentUpdate==='function'){{if(workInProgress.mode&StrictMode){disableLogs();try{// Invoke the function an extra time to help detect side-effects.
  instance.shouldComponentUpdate(newProps,newState,nextContext);}finally{reenableLogs();}}}var shouldUpdate=instance.shouldComponentUpdate(newProps,newState,nextContext);{if(shouldUpdate===undefined){error('%s.shouldComponentUpdate(): Returned undefined instead of a '+'boolean value. Make sure to return true or false.',getComponentName(ctor)||'Component');}}return shouldUpdate;}if(ctor.prototype&&ctor.prototype.isPureReactComponent){return !shallowEqual(oldProps,newProps)||!shallowEqual(oldState,newState);}return true;}function checkClassInstance(workInProgress,ctor,newProps){var instance=workInProgress.stateNode;{var name=getComponentName(ctor)||'Component';var renderPresent=instance.render;if(!renderPresent){if(ctor.prototype&&typeof ctor.prototype.render==='function'){error('%s(...): No `render` method found on the returned component '+'instance: did you accidentally return an object from the constructor?',name);}else {error('%s(...): No `render` method found on the returned component '+'instance: you may have forgotten to define `render`.',name);}}if(instance.getInitialState&&!instance.getInitialState.isReactClassApproved&&!instance.state){error('getInitialState was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Did you mean to define a state property instead?',name);}if(instance.getDefaultProps&&!instance.getDefaultProps.isReactClassApproved){error('getDefaultProps was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Use a static property to define defaultProps instead.',name);}if(instance.propTypes){error('propTypes was defined as an instance property on %s. Use a static '+'property to define propTypes instead.',name);}if(instance.contextType){error('contextType was defined as an instance property on %s. Use a static '+'property to define contextType instead.',name);}{if(instance.contextTypes){error('contextTypes was defined as an instance property on %s. Use a static '+'property to define contextTypes instead.',name);}if(ctor.contextType&&ctor.contextTypes&&!didWarnAboutContextTypeAndContextTypes.has(ctor)){didWarnAboutContextTypeAndContextTypes.add(ctor);error('%s declares both contextTypes and contextType static properties. '+'The legacy contextTypes property will be ignored.',name);}}if(typeof instance.componentShouldUpdate==='function'){error('%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',name);}if(ctor.prototype&&ctor.prototype.isPureReactComponent&&typeof instance.shouldComponentUpdate!=='undefined'){error('%s has a method called shouldComponentUpdate(). '+'shouldComponentUpdate should not be used when extending React.PureComponent. '+'Please extend React.Component if shouldComponentUpdate is used.',getComponentName(ctor)||'A pure component');}if(typeof instance.componentDidUnmount==='function'){error('%s has a method called '+'componentDidUnmount(). But there is no such lifecycle method. '+'Did you mean componentWillUnmount()?',name);}if(typeof instance.componentDidReceiveProps==='function'){error('%s has a method called '+'componentDidReceiveProps(). But there is no such lifecycle method. '+'If you meant to update the state in response to changing props, '+'use componentWillReceiveProps(). If you meant to fetch data or '+'run side-effects or mutations after React has updated the UI, use componentDidUpdate().',name);}if(typeof instance.componentWillRecieveProps==='function'){error('%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',name);}if(typeof instance.UNSAFE_componentWillRecieveProps==='function'){error('%s has a method called '+'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',name);}var hasMutatedProps=instance.props!==newProps;if(instance.props!==undefined&&hasMutatedProps){error('%s(...): When calling super() in `%s`, make sure to pass '+"up the same props that your component's constructor was passed.",name,name);}if(instance.defaultProps){error('Setting defaultProps as an instance property on %s is not supported and will be ignored.'+' Instead, define defaultProps as a static property on %s.',name,name);}if(typeof instance.getSnapshotBeforeUpdate==='function'&&typeof instance.componentDidUpdate!=='function'&&!didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)){didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);error('%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). '+'This component defines getSnapshotBeforeUpdate() only.',getComponentName(ctor));}if(typeof instance.getDerivedStateFromProps==='function'){error('%s: getDerivedStateFromProps() is defined as an instance method '+'and will be ignored. Instead, declare it as a static method.',name);}if(typeof instance.getDerivedStateFromError==='function'){error('%s: getDerivedStateFromError() is defined as an instance method '+'and will be ignored. Instead, declare it as a static method.',name);}if(typeof ctor.getSnapshotBeforeUpdate==='function'){error('%s: getSnapshotBeforeUpdate() is defined as a static method '+'and will be ignored. Instead, declare it as an instance method.',name);}var _state=instance.state;if(_state&&(_typeof(_state)!=='object'||isArray(_state))){error('%s.state: must be set to an object or null',name);}if(typeof instance.getChildContext==='function'&&_typeof(ctor.childContextTypes)!=='object'){error('%s.getChildContext(): childContextTypes must be defined in order to '+'use getChildContext().',name);}}}function adoptClassInstance(workInProgress,instance){instance.updater=classComponentUpdater;workInProgress.stateNode=instance;// The instance needs access to the fiber so that it can schedule updates
  set(instance,workInProgress);{instance._reactInternalInstance=fakeInternalInstance;}}function constructClassInstance(workInProgress,ctor,props){var isLegacyContextConsumer=false;var unmaskedContext=emptyContextObject;var context=emptyContextObject;var contextType=ctor.contextType;{if('contextType'in ctor){var isValid=// Allow null for conditional declaration
  contextType===null||contextType!==undefined&&contextType.$$typeof===REACT_CONTEXT_TYPE&&contextType._context===undefined;// Not a <Context.Consumer>
  if(!isValid&&!didWarnAboutInvalidateContextType.has(ctor)){didWarnAboutInvalidateContextType.add(ctor);var addendum='';if(contextType===undefined){addendum=' However, it is set to undefined. '+'This can be caused by a typo or by mixing up named and default imports. '+'This can also happen due to a circular dependency, so '+'try moving the createContext() call to a separate file.';}else if(_typeof(contextType)!=='object'){addendum=' However, it is set to a '+_typeof(contextType)+'.';}else if(contextType.$$typeof===REACT_PROVIDER_TYPE){addendum=' Did you accidentally pass the Context.Provider instead?';}else if(contextType._context!==undefined){// <Context.Consumer>
  addendum=' Did you accidentally pass the Context.Consumer instead?';}else {addendum=' However, it is set to an object with keys {'+Object.keys(contextType).join(', ')+'}.';}error('%s defines an invalid contextType. '+'contextType should point to the Context object returned by React.createContext().%s',getComponentName(ctor)||'Component',addendum);}}}if(_typeof(contextType)==='object'&&contextType!==null){context=_readContext(contextType);}else {unmaskedContext=getUnmaskedContext(workInProgress,ctor,true);var contextTypes=ctor.contextTypes;isLegacyContextConsumer=contextTypes!==null&&contextTypes!==undefined;context=isLegacyContextConsumer?getMaskedContext(workInProgress,unmaskedContext):emptyContextObject;}// Instantiate twice to help detect side-effects.
  {if(workInProgress.mode&StrictMode){disableLogs();try{new ctor(props,context);// eslint-disable-line no-new
  }finally{reenableLogs();}}}var instance=new ctor(props,context);var state=workInProgress.memoizedState=instance.state!==null&&instance.state!==undefined?instance.state:null;adoptClassInstance(workInProgress,instance);{if(typeof ctor.getDerivedStateFromProps==='function'&&state===null){var componentName=getComponentName(ctor)||'Component';if(!didWarnAboutUninitializedState.has(componentName)){didWarnAboutUninitializedState.add(componentName);error('`%s` uses `getDerivedStateFromProps` but its initial state is '+'%s. This is not recommended. Instead, define the initial state by '+'assigning an object to `this.state` in the constructor of `%s`. '+'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',componentName,instance.state===null?'null':'undefined',componentName);}}// If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Warn about these lifecycles if they are present.
  // Don't warn about react-lifecycles-compat polyfilled methods though.
  if(typeof ctor.getDerivedStateFromProps==='function'||typeof instance.getSnapshotBeforeUpdate==='function'){var foundWillMountName=null;var foundWillReceivePropsName=null;var foundWillUpdateName=null;if(typeof instance.componentWillMount==='function'&&instance.componentWillMount.__suppressDeprecationWarning!==true){foundWillMountName='componentWillMount';}else if(typeof instance.UNSAFE_componentWillMount==='function'){foundWillMountName='UNSAFE_componentWillMount';}if(typeof instance.componentWillReceiveProps==='function'&&instance.componentWillReceiveProps.__suppressDeprecationWarning!==true){foundWillReceivePropsName='componentWillReceiveProps';}else if(typeof instance.UNSAFE_componentWillReceiveProps==='function'){foundWillReceivePropsName='UNSAFE_componentWillReceiveProps';}if(typeof instance.componentWillUpdate==='function'&&instance.componentWillUpdate.__suppressDeprecationWarning!==true){foundWillUpdateName='componentWillUpdate';}else if(typeof instance.UNSAFE_componentWillUpdate==='function'){foundWillUpdateName='UNSAFE_componentWillUpdate';}if(foundWillMountName!==null||foundWillReceivePropsName!==null||foundWillUpdateName!==null){var _componentName=getComponentName(ctor)||'Component';var newApiName=typeof ctor.getDerivedStateFromProps==='function'?'getDerivedStateFromProps()':'getSnapshotBeforeUpdate()';if(!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)){didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n'+'%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n'+'The above lifecycles should be removed. Learn more about this warning here:\n'+'https://reactjs.org/link/unsafe-component-lifecycles',_componentName,newApiName,foundWillMountName!==null?"\n  "+foundWillMountName:'',foundWillReceivePropsName!==null?"\n  "+foundWillReceivePropsName:'',foundWillUpdateName!==null?"\n  "+foundWillUpdateName:'');}}}}// Cache unmasked context so we can avoid recreating masked context unless necessary.
  // ReactFiberContext usually updates this cache but can't for newly-created instances.
  if(isLegacyContextConsumer){cacheContext(workInProgress,unmaskedContext,context);}return instance;}function callComponentWillMount(workInProgress,instance){var oldState=instance.state;if(typeof instance.componentWillMount==='function'){instance.componentWillMount();}if(typeof instance.UNSAFE_componentWillMount==='function'){instance.UNSAFE_componentWillMount();}if(oldState!==instance.state){{error('%s.componentWillMount(): Assigning directly to this.state is '+"deprecated (except inside a component's "+'constructor). Use setState instead.',getComponentName(workInProgress.type)||'Component');}classComponentUpdater.enqueueReplaceState(instance,instance.state,null);}}function callComponentWillReceiveProps(workInProgress,instance,newProps,nextContext){var oldState=instance.state;if(typeof instance.componentWillReceiveProps==='function'){instance.componentWillReceiveProps(newProps,nextContext);}if(typeof instance.UNSAFE_componentWillReceiveProps==='function'){instance.UNSAFE_componentWillReceiveProps(newProps,nextContext);}if(instance.state!==oldState){{var componentName=getComponentName(workInProgress.type)||'Component';if(!didWarnAboutStateAssignmentForComponent.has(componentName)){didWarnAboutStateAssignmentForComponent.add(componentName);error('%s.componentWillReceiveProps(): Assigning directly to '+"this.state is deprecated (except inside a component's "+'constructor). Use setState instead.',componentName);}}classComponentUpdater.enqueueReplaceState(instance,instance.state,null);}}// Invokes the mount life-cycles on a previously never rendered instance.
  function mountClassInstance(workInProgress,ctor,newProps,renderLanes){{checkClassInstance(workInProgress,ctor,newProps);}var instance=workInProgress.stateNode;instance.props=newProps;instance.state=workInProgress.memoizedState;instance.refs=emptyRefsObject;initializeUpdateQueue(workInProgress);var contextType=ctor.contextType;if(_typeof(contextType)==='object'&&contextType!==null){instance.context=_readContext(contextType);}else {var unmaskedContext=getUnmaskedContext(workInProgress,ctor,true);instance.context=getMaskedContext(workInProgress,unmaskedContext);}{if(instance.state===newProps){var componentName=getComponentName(ctor)||'Component';if(!didWarnAboutDirectlyAssigningPropsToState.has(componentName)){didWarnAboutDirectlyAssigningPropsToState.add(componentName);error('%s: It is not recommended to assign props directly to state '+"because updates to props won't be reflected in state. "+'In most cases, it is better to use props directly.',componentName);}}if(workInProgress.mode&StrictMode){ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress,instance);}{ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress,instance);}}processUpdateQueue(workInProgress,newProps,instance,renderLanes);instance.state=workInProgress.memoizedState;var getDerivedStateFromProps=ctor.getDerivedStateFromProps;if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,newProps);instance.state=workInProgress.memoizedState;}// In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if(typeof ctor.getDerivedStateFromProps!=='function'&&typeof instance.getSnapshotBeforeUpdate!=='function'&&(typeof instance.UNSAFE_componentWillMount==='function'||typeof instance.componentWillMount==='function')){callComponentWillMount(workInProgress,instance);// If we had additional state updates during this life-cycle, let's
  // process them now.
  processUpdateQueue(workInProgress,newProps,instance,renderLanes);instance.state=workInProgress.memoizedState;}if(typeof instance.componentDidMount==='function'){workInProgress.flags|=Update;}}function resumeMountClassInstance(workInProgress,ctor,newProps,renderLanes){var instance=workInProgress.stateNode;var oldProps=workInProgress.memoizedProps;instance.props=oldProps;var oldContext=instance.context;var contextType=ctor.contextType;var nextContext=emptyContextObject;if(_typeof(contextType)==='object'&&contextType!==null){nextContext=_readContext(contextType);}else {var nextLegacyUnmaskedContext=getUnmaskedContext(workInProgress,ctor,true);nextContext=getMaskedContext(workInProgress,nextLegacyUnmaskedContext);}var getDerivedStateFromProps=ctor.getDerivedStateFromProps;var hasNewLifecycles=typeof getDerivedStateFromProps==='function'||typeof instance.getSnapshotBeforeUpdate==='function';// Note: During these life-cycles, instance.props/instance.state are what
  // ever the previously attempted to render - not the "current". However,
  // during componentDidUpdate we pass the "current" props.
  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillReceiveProps==='function'||typeof instance.componentWillReceiveProps==='function')){if(oldProps!==newProps||oldContext!==nextContext){callComponentWillReceiveProps(workInProgress,instance,newProps,nextContext);}}resetHasForceUpdateBeforeProcessing();var oldState=workInProgress.memoizedState;var newState=instance.state=oldState;processUpdateQueue(workInProgress,newProps,instance,renderLanes);newState=workInProgress.memoizedState;if(oldProps===newProps&&oldState===newState&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing()){// If an update was already in progress, we should schedule an Update
  // effect even though we're bailing out, so that cWU/cDU are called.
  if(typeof instance.componentDidMount==='function'){workInProgress.flags|=Update;}return false;}if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,newProps);newState=workInProgress.memoizedState;}var shouldUpdate=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(workInProgress,ctor,oldProps,newProps,oldState,newState,nextContext);if(shouldUpdate){// In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillMount==='function'||typeof instance.componentWillMount==='function')){if(typeof instance.componentWillMount==='function'){instance.componentWillMount();}if(typeof instance.UNSAFE_componentWillMount==='function'){instance.UNSAFE_componentWillMount();}}if(typeof instance.componentDidMount==='function'){workInProgress.flags|=Update;}}else {// If an update was already in progress, we should schedule an Update
  // effect even though we're bailing out, so that cWU/cDU are called.
  if(typeof instance.componentDidMount==='function'){workInProgress.flags|=Update;}// If shouldComponentUpdate returned false, we should still update the
  // memoized state to indicate that this work can be reused.
  workInProgress.memoizedProps=newProps;workInProgress.memoizedState=newState;}// Update the existing instance's state, props, and context pointers even
  // if shouldComponentUpdate returns false.
  instance.props=newProps;instance.state=newState;instance.context=nextContext;return shouldUpdate;}// Invokes the update life-cycles and returns false if it shouldn't rerender.
  function updateClassInstance(current,workInProgress,ctor,newProps,renderLanes){var instance=workInProgress.stateNode;cloneUpdateQueue(current,workInProgress);var unresolvedOldProps=workInProgress.memoizedProps;var oldProps=workInProgress.type===workInProgress.elementType?unresolvedOldProps:resolveDefaultProps(workInProgress.type,unresolvedOldProps);instance.props=oldProps;var unresolvedNewProps=workInProgress.pendingProps;var oldContext=instance.context;var contextType=ctor.contextType;var nextContext=emptyContextObject;if(_typeof(contextType)==='object'&&contextType!==null){nextContext=_readContext(contextType);}else {var nextUnmaskedContext=getUnmaskedContext(workInProgress,ctor,true);nextContext=getMaskedContext(workInProgress,nextUnmaskedContext);}var getDerivedStateFromProps=ctor.getDerivedStateFromProps;var hasNewLifecycles=typeof getDerivedStateFromProps==='function'||typeof instance.getSnapshotBeforeUpdate==='function';// Note: During these life-cycles, instance.props/instance.state are what
  // ever the previously attempted to render - not the "current". However,
  // during componentDidUpdate we pass the "current" props.
  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillReceiveProps==='function'||typeof instance.componentWillReceiveProps==='function')){if(unresolvedOldProps!==unresolvedNewProps||oldContext!==nextContext){callComponentWillReceiveProps(workInProgress,instance,newProps,nextContext);}}resetHasForceUpdateBeforeProcessing();var oldState=workInProgress.memoizedState;var newState=instance.state=oldState;processUpdateQueue(workInProgress,newProps,instance,renderLanes);newState=workInProgress.memoizedState;if(unresolvedOldProps===unresolvedNewProps&&oldState===newState&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing()){// If an update was already in progress, we should schedule an Update
  // effect even though we're bailing out, so that cWU/cDU are called.
  if(typeof instance.componentDidUpdate==='function'){if(unresolvedOldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.flags|=Update;}}if(typeof instance.getSnapshotBeforeUpdate==='function'){if(unresolvedOldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.flags|=Snapshot;}}return false;}if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,newProps);newState=workInProgress.memoizedState;}var shouldUpdate=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(workInProgress,ctor,oldProps,newProps,oldState,newState,nextContext);if(shouldUpdate){// In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillUpdate==='function'||typeof instance.componentWillUpdate==='function')){if(typeof instance.componentWillUpdate==='function'){instance.componentWillUpdate(newProps,newState,nextContext);}if(typeof instance.UNSAFE_componentWillUpdate==='function'){instance.UNSAFE_componentWillUpdate(newProps,newState,nextContext);}}if(typeof instance.componentDidUpdate==='function'){workInProgress.flags|=Update;}if(typeof instance.getSnapshotBeforeUpdate==='function'){workInProgress.flags|=Snapshot;}}else {// If an update was already in progress, we should schedule an Update
  // effect even though we're bailing out, so that cWU/cDU are called.
  if(typeof instance.componentDidUpdate==='function'){if(unresolvedOldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.flags|=Update;}}if(typeof instance.getSnapshotBeforeUpdate==='function'){if(unresolvedOldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.flags|=Snapshot;}}// If shouldComponentUpdate returned false, we should still update the
  // memoized props/state to indicate that this work can be reused.
  workInProgress.memoizedProps=newProps;workInProgress.memoizedState=newState;}// Update the existing instance's state, props, and context pointers even
  // if shouldComponentUpdate returns false.
  instance.props=newProps;instance.state=newState;instance.context=nextContext;return shouldUpdate;}var didWarnAboutMaps;var didWarnAboutGenerators;var didWarnAboutStringRefs;var ownerHasKeyUseWarning;var ownerHasFunctionTypeWarning;var warnForMissingKey=function warnForMissingKey(child,returnFiber){};{didWarnAboutMaps=false;didWarnAboutGenerators=false;didWarnAboutStringRefs={};/**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */ownerHasKeyUseWarning={};ownerHasFunctionTypeWarning={};warnForMissingKey=function warnForMissingKey(child,returnFiber){if(child===null||_typeof(child)!=='object'){return;}if(!child._store||child._store.validated||child.key!=null){return;}if(!(_typeof(child._store)==='object')){{throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");}}child._store.validated=true;var componentName=getComponentName(returnFiber.type)||'Component';if(ownerHasKeyUseWarning[componentName]){return;}ownerHasKeyUseWarning[componentName]=true;error('Each child in a list should have a unique '+'"key" prop. See https://reactjs.org/link/warning-keys for '+'more information.');};}var isArray$1=Array.isArray;function coerceRef(returnFiber,current,element){var mixedRef=element.ref;if(mixedRef!==null&&typeof mixedRef!=='function'&&_typeof(mixedRef)!=='object'){{// TODO: Clean this up once we turn on the string ref warning for
  // everyone, because the strict mode case will no longer be relevant
  if((returnFiber.mode&StrictMode||warnAboutStringRefs)&&// We warn in ReactElement.js if owner and self are equal for string refs
  // because these cannot be automatically converted to an arrow function
  // using a codemod. Therefore, we don't have to warn about string refs again.
  !(element._owner&&element._self&&element._owner.stateNode!==element._self)){var componentName=getComponentName(returnFiber.type)||'Component';if(!didWarnAboutStringRefs[componentName]){{error('A string ref, "%s", has been found within a strict mode tree. '+'String refs are a source of potential bugs and should be avoided. '+'We recommend using useRef() or createRef() instead. '+'Learn more about using refs safely here: '+'https://reactjs.org/link/strict-mode-string-ref',mixedRef);}didWarnAboutStringRefs[componentName]=true;}}}if(element._owner){var owner=element._owner;var inst;if(owner){var ownerFiber=owner;if(!(ownerFiber.tag===ClassComponent)){{throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");}}inst=ownerFiber.stateNode;}if(!inst){{throw Error("Missing owner for string ref "+mixedRef+". This error is likely caused by a bug in React. Please file an issue.");}}var stringRef=''+mixedRef;// Check if previous string ref matches new string ref
  if(current!==null&&current.ref!==null&&typeof current.ref==='function'&&current.ref._stringRef===stringRef){return current.ref;}var ref=function ref(value){var refs=inst.refs;if(refs===emptyRefsObject){// This is a lazy pooled frozen object, so we need to initialize.
  refs=inst.refs={};}if(value===null){delete refs[stringRef];}else {refs[stringRef]=value;}};ref._stringRef=stringRef;return ref;}else {if(!(typeof mixedRef==='string')){{throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");}}if(!element._owner){{throw Error("Element ref was specified as a string ("+mixedRef+") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information.");}}}}return mixedRef;}function throwOnInvalidObjectType(returnFiber,newChild){if(returnFiber.type!=='textarea'){{{throw Error("Objects are not valid as a React child (found: "+(Object.prototype.toString.call(newChild)==='[object Object]'?'object with keys {'+Object.keys(newChild).join(', ')+'}':newChild)+"). If you meant to render a collection of children, use an array instead.");}}}}function warnOnFunctionType(returnFiber){{var componentName=getComponentName(returnFiber.type)||'Component';if(ownerHasFunctionTypeWarning[componentName]){return;}ownerHasFunctionTypeWarning[componentName]=true;error('Functions are not valid as a React child. This may happen if '+'you return a Component instead of <Component /> from render. '+'Or maybe you meant to call this function rather than return it.');}}// We avoid inlining this to avoid potential deopts from using try/catch.
  // to be able to optimize each path individually by branching early. This needs
  // a compiler or we can do it manually. Helpers that don't need this branching
  // live outside of this function.
  function ChildReconciler(shouldTrackSideEffects){function deleteChild(returnFiber,childToDelete){if(!shouldTrackSideEffects){// Noop.
  return;}// Deletions are added in reversed order so we add it to the front.
  // At this point, the return fiber's effect list is empty except for
  // deletions, so we can just append the deletion to the list. The remaining
  // effects aren't added until the complete phase. Once we implement
  // resuming, this may not be true.
  var last=returnFiber.lastEffect;if(last!==null){last.nextEffect=childToDelete;returnFiber.lastEffect=childToDelete;}else {returnFiber.firstEffect=returnFiber.lastEffect=childToDelete;}childToDelete.nextEffect=null;childToDelete.flags=Deletion;}function deleteRemainingChildren(returnFiber,currentFirstChild){if(!shouldTrackSideEffects){// Noop.
  return null;}// TODO: For the shouldClone case, this could be micro-optimized a bit by
  // assuming that after the first child we've already added everything.
  var childToDelete=currentFirstChild;while(childToDelete!==null){deleteChild(returnFiber,childToDelete);childToDelete=childToDelete.sibling;}return null;}function mapRemainingChildren(returnFiber,currentFirstChild){// Add the remaining children to a temporary map so that we can find them by
  // keys quickly. Implicit (null) keys get added to this set with their index
  // instead.
  var existingChildren=new Map();var existingChild=currentFirstChild;while(existingChild!==null){if(existingChild.key!==null){existingChildren.set(existingChild.key,existingChild);}else {existingChildren.set(existingChild.index,existingChild);}existingChild=existingChild.sibling;}return existingChildren;}function useFiber(fiber,pendingProps){// We currently set sibling to null and index to 0 here because it is easy
  // to forget to do before returning it. E.g. for the single child case.
  var clone=createWorkInProgress(fiber,pendingProps);clone.index=0;clone.sibling=null;return clone;}function placeChild(newFiber,lastPlacedIndex,newIndex){newFiber.index=newIndex;if(!shouldTrackSideEffects){// Noop.
  return lastPlacedIndex;}var current=newFiber.alternate;if(current!==null){var oldIndex=current.index;if(oldIndex<lastPlacedIndex){// This is a move.
  newFiber.flags=Placement;return lastPlacedIndex;}else {// This item can stay in place.
  return oldIndex;}}else {// This is an insertion.
  newFiber.flags=Placement;return lastPlacedIndex;}}function placeSingleChild(newFiber){// This is simpler for the single child case. We only need to do a
  // placement for inserting new children.
  if(shouldTrackSideEffects&&newFiber.alternate===null){newFiber.flags=Placement;}return newFiber;}function updateTextNode(returnFiber,current,textContent,lanes){if(current===null||current.tag!==HostText){// Insert
  var created=createFiberFromText(textContent,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}else {// Update
  var existing=useFiber(current,textContent);existing["return"]=returnFiber;return existing;}}function updateElement(returnFiber,current,element,lanes){if(current!==null){if(current.elementType===element.type||// Keep this check inline so it only runs on the false path:
  isCompatibleFamilyForHotReloading(current,element)){// Move based on index
  var existing=useFiber(current,element.props);existing.ref=coerceRef(returnFiber,current,element);existing["return"]=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}}// Insert
  var created=createFiberFromElement(element,returnFiber.mode,lanes);created.ref=coerceRef(returnFiber,current,element);created["return"]=returnFiber;return created;}function updatePortal(returnFiber,current,portal,lanes){if(current===null||current.tag!==HostPortal||current.stateNode.containerInfo!==portal.containerInfo||current.stateNode.implementation!==portal.implementation){// Insert
  var created=createFiberFromPortal(portal,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}else {// Update
  var existing=useFiber(current,portal.children||[]);existing["return"]=returnFiber;return existing;}}function updateFragment(returnFiber,current,fragment,lanes,key){if(current===null||current.tag!==Fragment){// Insert
  var created=createFiberFromFragment(fragment,returnFiber.mode,lanes,key);created["return"]=returnFiber;return created;}else {// Update
  var existing=useFiber(current,fragment);existing["return"]=returnFiber;return existing;}}function createChild(returnFiber,newChild,lanes){if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes don't have keys. If the previous node is implicitly keyed
  // we can continue to replace it without aborting even if it is not a text
  // node.
  var created=createFiberFromText(''+newChild,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}if(_typeof(newChild)==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{var _created=createFiberFromElement(newChild,returnFiber.mode,lanes);_created.ref=coerceRef(returnFiber,null,newChild);_created["return"]=returnFiber;return _created;}case REACT_PORTAL_TYPE:{var _created2=createFiberFromPortal(newChild,returnFiber.mode,lanes);_created2["return"]=returnFiber;return _created2;}}if(isArray$1(newChild)||getIteratorFn(newChild)){var _created3=createFiberFromFragment(newChild,returnFiber.mode,lanes,null);_created3["return"]=returnFiber;return _created3;}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType(returnFiber);}}return null;}function updateSlot(returnFiber,oldFiber,newChild,lanes){// Update the fiber if the keys match, otherwise return null.
  var key=oldFiber!==null?oldFiber.key:null;if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes don't have keys. If the previous node is implicitly keyed
  // we can continue to replace it without aborting even if it is not a text
  // node.
  if(key!==null){return null;}return updateTextNode(returnFiber,oldFiber,''+newChild,lanes);}if(_typeof(newChild)==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{if(newChild.key===key){if(newChild.type===REACT_FRAGMENT_TYPE){return updateFragment(returnFiber,oldFiber,newChild.props.children,lanes,key);}return updateElement(returnFiber,oldFiber,newChild,lanes);}else {return null;}}case REACT_PORTAL_TYPE:{if(newChild.key===key){return updatePortal(returnFiber,oldFiber,newChild,lanes);}else {return null;}}}if(isArray$1(newChild)||getIteratorFn(newChild)){if(key!==null){return null;}return updateFragment(returnFiber,oldFiber,newChild,lanes,null);}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType(returnFiber);}}return null;}function updateFromMap(existingChildren,returnFiber,newIdx,newChild,lanes){if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes don't have keys, so we neither have to check the old nor
  // new node for the key. If both are text nodes, they match.
  var matchedFiber=existingChildren.get(newIdx)||null;return updateTextNode(returnFiber,matchedFiber,''+newChild,lanes);}if(_typeof(newChild)==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{var _matchedFiber=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;if(newChild.type===REACT_FRAGMENT_TYPE){return updateFragment(returnFiber,_matchedFiber,newChild.props.children,lanes,newChild.key);}return updateElement(returnFiber,_matchedFiber,newChild,lanes);}case REACT_PORTAL_TYPE:{var _matchedFiber2=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updatePortal(returnFiber,_matchedFiber2,newChild,lanes);}}if(isArray$1(newChild)||getIteratorFn(newChild)){var _matchedFiber3=existingChildren.get(newIdx)||null;return updateFragment(returnFiber,_matchedFiber3,newChild,lanes,null);}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType(returnFiber);}}return null;}/**
     * Warns if there is a duplicate or missing key
     */function warnOnInvalidKey(child,knownKeys,returnFiber){{if(_typeof(child)!=='object'||child===null){return knownKeys;}switch(child.$$typeof){case REACT_ELEMENT_TYPE:case REACT_PORTAL_TYPE:warnForMissingKey(child,returnFiber);var key=child.key;if(typeof key!=='string'){break;}if(knownKeys===null){knownKeys=new Set();knownKeys.add(key);break;}if(!knownKeys.has(key)){knownKeys.add(key);break;}error('Encountered two children with the same key, `%s`. '+'Keys should be unique so that components maintain their identity '+'across updates. Non-unique keys may cause children to be '+'duplicated and/or omitted — the behavior is unsupported and '+'could change in a future version.',key);break;}}return knownKeys;}function reconcileChildrenArray(returnFiber,currentFirstChild,newChildren,lanes){// This algorithm can't optimize by searching from both ends since we
  // don't have backpointers on fibers. I'm trying to see how far we can get
  // with that model. If it ends up not being worth the tradeoffs, we can
  // add it later.
  // Even with a two ended optimization, we'd want to optimize for the case
  // where there are few changes and brute force the comparison instead of
  // going for the Map. It'd like to explore hitting that path first in
  // forward-only mode and only go for the Map once we notice that we need
  // lots of look ahead. This doesn't handle reversal as well as two ended
  // search but that's unusual. Besides, for the two ended optimization to
  // work on Iterables, we'd need to copy the whole set.
  // In this first iteration, we'll just live with hitting the bad case
  // (adding everything to a Map) in for every insert/move.
  // If you change this code, also update reconcileChildrenIterator() which
  // uses the same algorithm.
  {// First, validate keys.
  var knownKeys=null;for(var i=0;i<newChildren.length;i++){var child=newChildren[i];knownKeys=warnOnInvalidKey(child,knownKeys,returnFiber);}}var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;for(;oldFiber!==null&&newIdx<newChildren.length;newIdx++){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else {nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,newChildren[newIdx],lanes);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
  // unfortunate because it triggers the slow path all the time. We need
  // a better way to communicate whether this was a miss or null,
  // boolean, undefined, etc.
  if(oldFiber===null){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
  // need to delete the existing child.
  deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
  resultingFirstChild=newFiber;}else {// TODO: Defer siblings if we're not at the right index for this slot.
  // I.e. if we had null values before, then we want to defer this
  // for each null value. However, we also don't want to call updateSlot
  // with the previous one.
  previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(newIdx===newChildren.length){// We've reached the end of the new children. We can delete the rest.
  deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
  // since the rest will all be insertions.
  for(;newIdx<newChildren.length;newIdx++){var _newFiber=createChild(returnFiber,newChildren[newIdx],lanes);if(_newFiber===null){continue;}lastPlacedIndex=placeChild(_newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
  resultingFirstChild=_newFiber;}else {previousNewFiber.sibling=_newFiber;}previousNewFiber=_newFiber;}return resultingFirstChild;}// Add all children to a key map for quick lookups.
  var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
  for(;newIdx<newChildren.length;newIdx++){var _newFiber2=updateFromMap(existingChildren,returnFiber,newIdx,newChildren[newIdx],lanes);if(_newFiber2!==null){if(shouldTrackSideEffects){if(_newFiber2.alternate!==null){// The new fiber is a work in progress, but if there exists a
  // current, that means that we reused the fiber. We need to delete
  // it from the child list so that we don't add it to the deletion
  // list.
  existingChildren["delete"](_newFiber2.key===null?newIdx:_newFiber2.key);}}lastPlacedIndex=placeChild(_newFiber2,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber2;}else {previousNewFiber.sibling=_newFiber2;}previousNewFiber=_newFiber2;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
  // to add them to the deletion list.
  existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}return resultingFirstChild;}function reconcileChildrenIterator(returnFiber,currentFirstChild,newChildrenIterable,lanes){// This is the same implementation as reconcileChildrenArray(),
  // but using the iterator instead.
  var iteratorFn=getIteratorFn(newChildrenIterable);if(!(typeof iteratorFn==='function')){{throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");}}{// We don't support rendering Generators because it's a mutation.
  // See https://github.com/facebook/react/issues/12995
  if(typeof Symbol==='function'&&// $FlowFixMe Flow doesn't know about toStringTag
  newChildrenIterable[Symbol.toStringTag]==='Generator'){if(!didWarnAboutGenerators){error('Using Generators as children is unsupported and will likely yield '+'unexpected results because enumerating a generator mutates it. '+'You may convert it to an array with `Array.from()` or the '+'`[...spread]` operator before rendering. Keep in mind '+'you might need to polyfill these features for older browsers.');}didWarnAboutGenerators=true;}// Warn about using Maps as children
  if(newChildrenIterable.entries===iteratorFn){if(!didWarnAboutMaps){error('Using Maps as children is not supported. '+'Use an array of keyed ReactElements instead.');}didWarnAboutMaps=true;}// First, validate keys.
  // We'll get a different iterator later for the main pass.
  var _newChildren=iteratorFn.call(newChildrenIterable);if(_newChildren){var knownKeys=null;var _step=_newChildren.next();for(;!_step.done;_step=_newChildren.next()){var child=_step.value;knownKeys=warnOnInvalidKey(child,knownKeys,returnFiber);}}}var newChildren=iteratorFn.call(newChildrenIterable);if(!(newChildren!=null)){{throw Error("An iterable object provided no iterator.");}}var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;var step=newChildren.next();for(;oldFiber!==null&&!step.done;newIdx++,step=newChildren.next()){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else {nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,step.value,lanes);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
  // unfortunate because it triggers the slow path all the time. We need
  // a better way to communicate whether this was a miss or null,
  // boolean, undefined, etc.
  if(oldFiber===null){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
  // need to delete the existing child.
  deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
  resultingFirstChild=newFiber;}else {// TODO: Defer siblings if we're not at the right index for this slot.
  // I.e. if we had null values before, then we want to defer this
  // for each null value. However, we also don't want to call updateSlot
  // with the previous one.
  previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(step.done){// We've reached the end of the new children. We can delete the rest.
  deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
  // since the rest will all be insertions.
  for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber3=createChild(returnFiber,step.value,lanes);if(_newFiber3===null){continue;}lastPlacedIndex=placeChild(_newFiber3,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
  resultingFirstChild=_newFiber3;}else {previousNewFiber.sibling=_newFiber3;}previousNewFiber=_newFiber3;}return resultingFirstChild;}// Add all children to a key map for quick lookups.
  var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
  for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber4=updateFromMap(existingChildren,returnFiber,newIdx,step.value,lanes);if(_newFiber4!==null){if(shouldTrackSideEffects){if(_newFiber4.alternate!==null){// The new fiber is a work in progress, but if there exists a
  // current, that means that we reused the fiber. We need to delete
  // it from the child list so that we don't add it to the deletion
  // list.
  existingChildren["delete"](_newFiber4.key===null?newIdx:_newFiber4.key);}}lastPlacedIndex=placeChild(_newFiber4,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber4;}else {previousNewFiber.sibling=_newFiber4;}previousNewFiber=_newFiber4;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
  // to add them to the deletion list.
  existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}return resultingFirstChild;}function reconcileSingleTextNode(returnFiber,currentFirstChild,textContent,lanes){// There's no need to check for keys on text nodes since we don't have a
  // way to define them.
  if(currentFirstChild!==null&&currentFirstChild.tag===HostText){// We already have an existing node so let's just update it and delete
  // the rest.
  deleteRemainingChildren(returnFiber,currentFirstChild.sibling);var existing=useFiber(currentFirstChild,textContent);existing["return"]=returnFiber;return existing;}// The existing first child is not a text node so we need to create one
  // and delete the existing ones.
  deleteRemainingChildren(returnFiber,currentFirstChild);var created=createFiberFromText(textContent,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}function reconcileSingleElement(returnFiber,currentFirstChild,element,lanes){var key=element.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
  // the first item in the list.
  if(child.key===key){switch(child.tag){case Fragment:{if(element.type===REACT_FRAGMENT_TYPE){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,element.props.children);existing["return"]=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}break;}case Block:// We intentionally fallthrough here if enableBlocksAPI is not on.
  // eslint-disable-next-lined no-fallthrough
  default:{if(child.elementType===element.type||// Keep this check inline so it only runs on the false path:
  isCompatibleFamilyForHotReloading(child,element)){deleteRemainingChildren(returnFiber,child.sibling);var _existing3=useFiber(child,element.props);_existing3.ref=coerceRef(returnFiber,child,element);_existing3["return"]=returnFiber;{_existing3._debugSource=element._source;_existing3._debugOwner=element._owner;}return _existing3;}break;}}// Didn't match.
  deleteRemainingChildren(returnFiber,child);break;}else {deleteChild(returnFiber,child);}child=child.sibling;}if(element.type===REACT_FRAGMENT_TYPE){var created=createFiberFromFragment(element.props.children,returnFiber.mode,lanes,element.key);created["return"]=returnFiber;return created;}else {var _created4=createFiberFromElement(element,returnFiber.mode,lanes);_created4.ref=coerceRef(returnFiber,currentFirstChild,element);_created4["return"]=returnFiber;return _created4;}}function reconcileSinglePortal(returnFiber,currentFirstChild,portal,lanes){var key=portal.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
  // the first item in the list.
  if(child.key===key){if(child.tag===HostPortal&&child.stateNode.containerInfo===portal.containerInfo&&child.stateNode.implementation===portal.implementation){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,portal.children||[]);existing["return"]=returnFiber;return existing;}else {deleteRemainingChildren(returnFiber,child);break;}}else {deleteChild(returnFiber,child);}child=child.sibling;}var created=createFiberFromPortal(portal,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}// This API will tag the children with the side-effect of the reconciliation
  // itself. They will be added to the side-effect list as we pass through the
  // children and the parent.
  function reconcileChildFibers(returnFiber,currentFirstChild,newChild,lanes){// This function is not recursive.
  // If the top level item is an array, we treat it as a set of children,
  // not as a fragment. Nested arrays on the other hand will be treated as
  // fragment nodes. Recursion happens at the normal flow.
  // Handle top level unkeyed fragments as if they were arrays.
  // This leads to an ambiguity between <>{[...]}</> and <>...</>.
  // We treat the ambiguous cases above the same.
  var isUnkeyedTopLevelFragment=_typeof(newChild)==='object'&&newChild!==null&&newChild.type===REACT_FRAGMENT_TYPE&&newChild.key===null;if(isUnkeyedTopLevelFragment){newChild=newChild.props.children;}// Handle object types
  var isObject=_typeof(newChild)==='object'&&newChild!==null;if(isObject){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:return placeSingleChild(reconcileSingleElement(returnFiber,currentFirstChild,newChild,lanes));case REACT_PORTAL_TYPE:return placeSingleChild(reconcileSinglePortal(returnFiber,currentFirstChild,newChild,lanes));}}if(typeof newChild==='string'||typeof newChild==='number'){return placeSingleChild(reconcileSingleTextNode(returnFiber,currentFirstChild,''+newChild,lanes));}if(isArray$1(newChild)){return reconcileChildrenArray(returnFiber,currentFirstChild,newChild,lanes);}if(getIteratorFn(newChild)){return reconcileChildrenIterator(returnFiber,currentFirstChild,newChild,lanes);}if(isObject){throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType(returnFiber);}}if(typeof newChild==='undefined'&&!isUnkeyedTopLevelFragment){// If the new child is undefined, and the return fiber is a composite
  // component, throw an error. If Fiber return types are disabled,
  // we already threw above.
  switch(returnFiber.tag){case ClassComponent:{{var instance=returnFiber.stateNode;if(instance.render._isMockFunction){// We allow auto-mocks to proceed as if they're returning null.
  break;}}}// Intentionally fall through to the next case, which handles both
  // functions and classes
  // eslint-disable-next-lined no-fallthrough
  case Block:case FunctionComponent:case ForwardRef:case SimpleMemoComponent:{{{throw Error((getComponentName(returnFiber.type)||'Component')+"(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");}}}}}// Remaining cases are all treated as empty.
  return deleteRemainingChildren(returnFiber,currentFirstChild);}return reconcileChildFibers;}var reconcileChildFibers=ChildReconciler(true);var mountChildFibers=ChildReconciler(false);function cloneChildFibers(current,workInProgress){if(!(current===null||workInProgress.child===current.child)){{throw Error("Resuming work not yet implemented.");}}if(workInProgress.child===null){return;}var currentChild=workInProgress.child;var newChild=createWorkInProgress(currentChild,currentChild.pendingProps);workInProgress.child=newChild;newChild["return"]=workInProgress;while(currentChild.sibling!==null){currentChild=currentChild.sibling;newChild=newChild.sibling=createWorkInProgress(currentChild,currentChild.pendingProps);newChild["return"]=workInProgress;}newChild.sibling=null;}// Reset a workInProgress child set to prepare it for a second pass.
  function resetChildFibers(workInProgress,lanes){var child=workInProgress.child;while(child!==null){resetWorkInProgress(child,lanes);child=child.sibling;}}var NO_CONTEXT={};var contextStackCursor$1=createCursor(NO_CONTEXT);var contextFiberStackCursor=createCursor(NO_CONTEXT);var rootInstanceStackCursor=createCursor(NO_CONTEXT);function requiredContext(c){if(!(c!==NO_CONTEXT)){{throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");}}return c;}function getRootHostContainer(){var rootInstance=requiredContext(rootInstanceStackCursor.current);return rootInstance;}function pushHostContainer(fiber,nextRootInstance){// Push current root instance onto the stack;
  // This allows us to reset root when portals are popped.
  push(rootInstanceStackCursor,nextRootInstance,fiber);// Track the context and the Fiber that provided it.
  // This enables us to pop only Fibers that provide unique contexts.
  push(contextFiberStackCursor,fiber,fiber);// Finally, we need to push the host context to the stack.
  // However, we can't just call getRootHostContext() and push it because
  // we'd have a different number of entries on the stack depending on
  // whether getRootHostContext() throws somewhere in renderer code or not.
  // So we push an empty value first. This lets us safely unwind on errors.
  push(contextStackCursor$1,NO_CONTEXT,fiber);var nextRootContext=getRootHostContext(nextRootInstance);// Now that we know this function doesn't throw, replace it.
  pop(contextStackCursor$1,fiber);push(contextStackCursor$1,nextRootContext,fiber);}function popHostContainer(fiber){pop(contextStackCursor$1,fiber);pop(contextFiberStackCursor,fiber);pop(rootInstanceStackCursor,fiber);}function getHostContext(){var context=requiredContext(contextStackCursor$1.current);return context;}function pushHostContext(fiber){var rootInstance=requiredContext(rootInstanceStackCursor.current);var context=requiredContext(contextStackCursor$1.current);var nextContext=getChildHostContext(context,fiber.type,rootInstance);// Don't push this Fiber's context unless it's unique.
  if(context===nextContext){return;}// Track the context and the Fiber that provided it.
  // This enables us to pop only Fibers that provide unique contexts.
  push(contextFiberStackCursor,fiber,fiber);push(contextStackCursor$1,nextContext,fiber);}function popHostContext(fiber){// Do not pop unless this Fiber provided the current context.
  // pushHostContext() only pushes Fibers that provide unique contexts.
  if(contextFiberStackCursor.current!==fiber){return;}pop(contextStackCursor$1,fiber);pop(contextFiberStackCursor,fiber);}var DefaultSuspenseContext=0;// The Suspense Context is split into two parts. The lower bits is
  // inherited deeply down the subtree. The upper bits only affect
  // this immediate suspense boundary and gets reset each new
  // boundary or suspense list.
  var SubtreeSuspenseContextMask=1;// Subtree Flags:
  // InvisibleParentSuspenseContext indicates that one of our parent Suspense
  // boundaries is not currently showing visible main content.
  // Either because it is already showing a fallback or is not mounted at all.
  // We can use this to determine if it is desirable to trigger a fallback at
  // the parent. If not, then we might need to trigger undesirable boundaries
  // and/or suspend the commit to avoid hiding the parent content.
  var InvisibleParentSuspenseContext=1;// Shallow Flags:
  // ForceSuspenseFallback can be used by SuspenseList to force newly added
  // items into their fallback state during one of the render passes.
  var ForceSuspenseFallback=2;var suspenseStackCursor=createCursor(DefaultSuspenseContext);function hasSuspenseContext(parentContext,flag){return (parentContext&flag)!==0;}function setDefaultShallowSuspenseContext(parentContext){return parentContext&SubtreeSuspenseContextMask;}function setShallowSuspenseContext(parentContext,shallowContext){return parentContext&SubtreeSuspenseContextMask|shallowContext;}function addSubtreeSuspenseContext(parentContext,subtreeContext){return parentContext|subtreeContext;}function pushSuspenseContext(fiber,newContext){push(suspenseStackCursor,newContext,fiber);}function popSuspenseContext(fiber){pop(suspenseStackCursor,fiber);}function shouldCaptureSuspense(workInProgress,hasInvisibleParent){// If it was the primary children that just suspended, capture and render the
  // fallback. Otherwise, don't capture and bubble to the next boundary.
  var nextState=workInProgress.memoizedState;if(nextState!==null){if(nextState.dehydrated!==null){// A dehydrated boundary always captures.
  return true;}return false;}var props=workInProgress.memoizedProps;// In order to capture, the Suspense component must have a fallback prop.
  if(props.fallback===undefined){return false;}// Regular boundaries always capture.
  if(props.unstable_avoidThisFallback!==true){return true;}// If it's a boundary we should avoid, then we prefer to bubble up to the
  // parent boundary if it is currently invisible.
  if(hasInvisibleParent){return false;}// If the parent is not able to handle it, we must handle it.
  return true;}function findFirstSuspended(row){var node=row;while(node!==null){if(node.tag===SuspenseComponent){var state=node.memoizedState;if(state!==null){var dehydrated=state.dehydrated;if(dehydrated===null||isSuspenseInstancePending(dehydrated)||isSuspenseInstanceFallback(dehydrated)){return node;}}}else if(node.tag===SuspenseListComponent&&// revealOrder undefined can't be trusted because it don't
  // keep track of whether it suspended or not.
  node.memoizedProps.revealOrder!==undefined){var didSuspend=(node.flags&DidCapture)!==NoFlags;if(didSuspend){return node;}}else if(node.child!==null){node.child["return"]=node;node=node.child;continue;}if(node===row){return null;}while(node.sibling===null){if(node["return"]===null||node["return"]===row){return null;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}return null;}var NoFlags$1=/*  */0;// Represents whether effect should fire.
  var HasEffect=/* */1;// Represents the phase in which the effect (not the clean-up) fires.
  var Layout=/*    */2;var Passive$1=/*   */4;// This may have been an insertion or a hydration.
  var hydrationParentFiber=null;var nextHydratableInstance=null;var isHydrating=false;function enterHydrationState(fiber){if(!supportsHydration){return false;}var parentInstance=fiber.stateNode.containerInfo;nextHydratableInstance=getFirstHydratableChild(parentInstance);hydrationParentFiber=fiber;isHydrating=true;return true;}function deleteHydratableInstance(returnFiber,instance){{switch(returnFiber.tag){case HostRoot:didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo,instance);break;case HostComponent:didNotHydrateInstance(returnFiber.type,returnFiber.memoizedProps,returnFiber.stateNode,instance);break;}}var childToDelete=createFiberFromHostInstanceForDeletion();childToDelete.stateNode=instance;childToDelete["return"]=returnFiber;childToDelete.flags=Deletion;// This might seem like it belongs on progressedFirstDeletion. However,
  // these children are not part of the reconciliation list of children.
  // Even if we abort and rereconcile the children, that will try to hydrate
  // again and the nodes are still in the host tree so these will be
  // recreated.
  if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=childToDelete;returnFiber.lastEffect=childToDelete;}else {returnFiber.firstEffect=returnFiber.lastEffect=childToDelete;}}function insertNonHydratedInstance(returnFiber,fiber){fiber.flags=fiber.flags&~Hydrating|Placement;{switch(returnFiber.tag){case HostRoot:{var parentContainer=returnFiber.stateNode.containerInfo;switch(fiber.tag){case HostComponent:var type=fiber.type;var props=fiber.pendingProps;didNotFindHydratableContainerInstance(parentContainer,type,props);break;case HostText:var text=fiber.pendingProps;didNotFindHydratableContainerTextInstance(parentContainer,text);break;case SuspenseComponent:didNotFindHydratableContainerSuspenseInstance(parentContainer);break;}break;}case HostComponent:{var parentType=returnFiber.type;var parentProps=returnFiber.memoizedProps;var parentInstance=returnFiber.stateNode;switch(fiber.tag){case HostComponent:var _type=fiber.type;var _props=fiber.pendingProps;didNotFindHydratableInstance(parentType,parentProps,parentInstance,_type,_props);break;case HostText:var _text=fiber.pendingProps;didNotFindHydratableTextInstance(parentType,parentProps,parentInstance,_text);break;case SuspenseComponent:didNotFindHydratableSuspenseInstance(parentType,parentProps,parentInstance);break;}break;}default:return;}}}function tryHydrate(fiber,nextInstance){switch(fiber.tag){case HostComponent:{var type=fiber.type;var props=fiber.pendingProps;var instance=canHydrateInstance(nextInstance,type,props);if(instance!==null){fiber.stateNode=instance;return true;}return false;}case HostText:{var text=fiber.pendingProps;var textInstance=canHydrateTextInstance(nextInstance,text);if(textInstance!==null){fiber.stateNode=textInstance;return true;}return false;}case SuspenseComponent:{return false;}default:return false;}}function tryToClaimNextHydratableInstance(fiber){if(!isHydrating){return;}var nextInstance=nextHydratableInstance;if(!nextInstance){// Nothing to hydrate. Make it an insertion.
  insertNonHydratedInstance(hydrationParentFiber,fiber);isHydrating=false;hydrationParentFiber=fiber;return;}var firstAttemptedInstance=nextInstance;if(!tryHydrate(fiber,nextInstance)){// If we can't hydrate this instance let's try the next one.
  // We use this as a heuristic. It's based on intuition and not data so it
  // might be flawed or unnecessary.
  nextInstance=getNextHydratableSibling(firstAttemptedInstance);if(!nextInstance||!tryHydrate(fiber,nextInstance)){// Nothing to hydrate. Make it an insertion.
  insertNonHydratedInstance(hydrationParentFiber,fiber);isHydrating=false;hydrationParentFiber=fiber;return;}// We matched the next one, we'll now assume that the first one was
  // superfluous and we'll delete it. Since we can't eagerly delete it
  // we'll have to schedule a deletion. To do that, this node needs a dummy
  // fiber associated with it.
  deleteHydratableInstance(hydrationParentFiber,firstAttemptedInstance);}hydrationParentFiber=fiber;nextHydratableInstance=getFirstHydratableChild(nextInstance);}function prepareToHydrateHostInstance(fiber,rootContainerInstance,hostContext){if(!supportsHydration){{{throw Error("Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");}}}var instance=fiber.stateNode;var updatePayload=hydrateInstance(instance,fiber.type,fiber.memoizedProps,rootContainerInstance,hostContext,fiber);// TODO: Type this specific to this type of component.
  fiber.updateQueue=updatePayload;// If the update payload indicates that there is a change or if there
  // is a new ref we mark this as an update.
  if(updatePayload!==null){return true;}return false;}function prepareToHydrateHostTextInstance(fiber){if(!supportsHydration){{{throw Error("Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");}}}var textInstance=fiber.stateNode;var textContent=fiber.memoizedProps;var shouldUpdate=hydrateTextInstance(textInstance,textContent,fiber);{if(shouldUpdate){// We assume that prepareToHydrateHostTextInstance is called in a context where the
  // hydration parent is the parent host component of this host text.
  var returnFiber=hydrationParentFiber;if(returnFiber!==null){switch(returnFiber.tag){case HostRoot:{var parentContainer=returnFiber.stateNode.containerInfo;didNotMatchHydratedContainerTextInstance(parentContainer,textInstance,textContent);break;}case HostComponent:{var parentType=returnFiber.type;var parentProps=returnFiber.memoizedProps;var parentInstance=returnFiber.stateNode;didNotMatchHydratedTextInstance(parentType,parentProps,parentInstance,textInstance,textContent);break;}}}}}return shouldUpdate;}function skipPastDehydratedSuspenseInstance(fiber){if(!supportsHydration){{{throw Error("Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");}}}var suspenseState=fiber.memoizedState;var suspenseInstance=suspenseState!==null?suspenseState.dehydrated:null;if(!suspenseInstance){{throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");}}return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);}function popToNextHostParent(fiber){var parent=fiber["return"];while(parent!==null&&parent.tag!==HostComponent&&parent.tag!==HostRoot&&parent.tag!==SuspenseComponent){parent=parent["return"];}hydrationParentFiber=parent;}function popHydrationState(fiber){if(!supportsHydration){return false;}if(fiber!==hydrationParentFiber){// We're deeper than the current hydration context, inside an inserted
  // tree.
  return false;}if(!isHydrating){// If we're not currently hydrating but we're in a hydration context, then
  // we were an insertion and now need to pop up reenter hydration of our
  // siblings.
  popToNextHostParent(fiber);isHydrating=true;return false;}var type=fiber.type;// If we have any remaining hydratable nodes, we need to delete them now.
  // We only do this deeper than head and body since they tend to have random
  // other nodes in them. We also ignore components with pure text content in
  // side of them.
  // TODO: Better heuristic.
  if(fiber.tag!==HostComponent||type!=='head'&&type!=='body'&&!shouldSetTextContent(type,fiber.memoizedProps)){var nextInstance=nextHydratableInstance;while(nextInstance){deleteHydratableInstance(fiber,nextInstance);nextInstance=getNextHydratableSibling(nextInstance);}}popToNextHostParent(fiber);if(fiber.tag===SuspenseComponent){nextHydratableInstance=skipPastDehydratedSuspenseInstance(fiber);}else {nextHydratableInstance=hydrationParentFiber?getNextHydratableSibling(fiber.stateNode):null;}return true;}function resetHydrationState(){if(!supportsHydration){return;}hydrationParentFiber=null;nextHydratableInstance=null;isHydrating=false;}function getIsHydrating(){return isHydrating;}// and should be reset before starting a new render.
  // This tracks which mutable sources need to be reset after a render.
  var workInProgressSources=[];var rendererSigil$1;{// Used to detect multiple renderers using the same mutable source.
  rendererSigil$1={};}function markSourceAsDirty(mutableSource){workInProgressSources.push(mutableSource);}function resetWorkInProgressVersions(){for(var i=0;i<workInProgressSources.length;i++){var mutableSource=workInProgressSources[i];if(isPrimaryRenderer){mutableSource._workInProgressVersionPrimary=null;}else {mutableSource._workInProgressVersionSecondary=null;}}workInProgressSources.length=0;}function getWorkInProgressVersion(mutableSource){if(isPrimaryRenderer){return mutableSource._workInProgressVersionPrimary;}else {return mutableSource._workInProgressVersionSecondary;}}function setWorkInProgressVersion(mutableSource,version){if(isPrimaryRenderer){mutableSource._workInProgressVersionPrimary=version;}else {mutableSource._workInProgressVersionSecondary=version;}workInProgressSources.push(mutableSource);}function warnAboutMultipleRenderersDEV(mutableSource){{if(isPrimaryRenderer){if(mutableSource._currentPrimaryRenderer==null){mutableSource._currentPrimaryRenderer=rendererSigil$1;}else if(mutableSource._currentPrimaryRenderer!==rendererSigil$1){error('Detected multiple renderers concurrently rendering the '+'same mutable source. This is currently unsupported.');}}else {if(mutableSource._currentSecondaryRenderer==null){mutableSource._currentSecondaryRenderer=rendererSigil$1;}else if(mutableSource._currentSecondaryRenderer!==rendererSigil$1){error('Detected multiple renderers concurrently rendering the '+'same mutable source. This is currently unsupported.');}}}}// Eager reads the version of a mutable source and stores it on the root.
  var ReactCurrentDispatcher$1=ReactSharedInternals.ReactCurrentDispatcher,ReactCurrentBatchConfig$1=ReactSharedInternals.ReactCurrentBatchConfig;var didWarnAboutMismatchedHooksForComponent;var didWarnAboutUseOpaqueIdentifier;{didWarnAboutUseOpaqueIdentifier={};didWarnAboutMismatchedHooksForComponent=new Set();}// These are set right before calling the component.
  var renderLanes=NoLanes;// The work-in-progress fiber. I've named it differently to distinguish it from
  // the work-in-progress hook.
  var currentlyRenderingFiber$1=null;// Hooks are stored as a linked list on the fiber's memoizedState field. The
  // current hook list is the list that belongs to the current fiber. The
  // work-in-progress hook list is a new list that will be added to the
  // work-in-progress fiber.
  var currentHook=null;var workInProgressHook=null;// Whether an update was scheduled at any point during the render phase. This
  // does not get reset if we do another render pass; only when we're completely
  // finished evaluating this component. This is an optimization so we know
  // whether we need to clear render phase updates after a throw.
  var didScheduleRenderPhaseUpdate=false;// Where an update was scheduled only during the current render pass. This
  // gets reset after each attempt.
  // TODO: Maybe there's some way to consolidate this with
  // `didScheduleRenderPhaseUpdate`. Or with `numberOfReRenders`.
  var didScheduleRenderPhaseUpdateDuringThisPass=false;var RE_RENDER_LIMIT=25;// In DEV, this is the name of the currently executing primitive hook
  var currentHookNameInDev=null;// In DEV, this list ensures that hooks are called in the same order between renders.
  // The list stores the order of hooks used during the initial render (mount).
  // Subsequent renders (updates) reference this list.
  var hookTypesDev=null;var hookTypesUpdateIndexDev=-1;// In DEV, this tracks whether currently rendering component needs to ignore
  // the dependencies for Hooks that need them (e.g. useEffect or useMemo).
  // When true, such Hooks will always be "remounted". Only used during hot reload.
  var ignorePreviousDependencies=false;function mountHookTypesDev(){{var hookName=currentHookNameInDev;if(hookTypesDev===null){hookTypesDev=[hookName];}else {hookTypesDev.push(hookName);}}}function updateHookTypesDev(){{var hookName=currentHookNameInDev;if(hookTypesDev!==null){hookTypesUpdateIndexDev++;if(hookTypesDev[hookTypesUpdateIndexDev]!==hookName){warnOnHookMismatchInDev(hookName);}}}}function checkDepsAreArrayDev(deps){{if(deps!==undefined&&deps!==null&&!Array.isArray(deps)){// Verify deps, but only on mount to avoid extra checks.
  // It's unlikely their type would change as usually you define them inline.
  error('%s received a final argument that is not an array (instead, received `%s`). When '+'specified, the final argument must be an array.',currentHookNameInDev,_typeof(deps));}}}function warnOnHookMismatchInDev(currentHookName){{var componentName=getComponentName(currentlyRenderingFiber$1.type);if(!didWarnAboutMismatchedHooksForComponent.has(componentName)){didWarnAboutMismatchedHooksForComponent.add(componentName);if(hookTypesDev!==null){var table='';var secondColumnStart=30;for(var i=0;i<=hookTypesUpdateIndexDev;i++){var oldHookName=hookTypesDev[i];var newHookName=i===hookTypesUpdateIndexDev?currentHookName:oldHookName;var row=i+1+". "+oldHookName;// Extra space so second column lines up
  // lol @ IE not supporting String#repeat
  while(row.length<secondColumnStart){row+=' ';}row+=newHookName+'\n';table+=row;}error('React has detected a change in the order of Hooks called by %s. '+'This will lead to bugs and errors if not fixed. '+'For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n'+'   Previous render            Next render\n'+'   ------------------------------------------------------\n'+'%s'+'   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n',componentName,table);}}}}function throwInvalidHookError(){{{throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");}}}function areHookInputsEqual(nextDeps,prevDeps){{if(ignorePreviousDependencies){// Only true when this component is being hot reloaded.
  return false;}}if(prevDeps===null){{error('%s received a final argument during this render, but not during '+'the previous render. Even though the final argument is optional, '+'its type cannot change between renders.',currentHookNameInDev);}return false;}{// Don't bother comparing lengths in prod because these arrays should be
  // passed inline.
  if(nextDeps.length!==prevDeps.length){error('The final argument passed to %s changed size between renders. The '+'order and size of this array must remain constant.\n\n'+'Previous: %s\n'+'Incoming: %s',currentHookNameInDev,"["+prevDeps.join(', ')+"]","["+nextDeps.join(', ')+"]");}}for(var i=0;i<prevDeps.length&&i<nextDeps.length;i++){if(objectIs(nextDeps[i],prevDeps[i])){continue;}return false;}return true;}function renderWithHooks(current,workInProgress,Component,props,secondArg,nextRenderLanes){renderLanes=nextRenderLanes;currentlyRenderingFiber$1=workInProgress;{hookTypesDev=current!==null?current._debugHookTypes:null;hookTypesUpdateIndexDev=-1;// Used for hot reloading:
  ignorePreviousDependencies=current!==null&&current.type!==workInProgress.type;}workInProgress.memoizedState=null;workInProgress.updateQueue=null;workInProgress.lanes=NoLanes;// The following should have already been reset
  // currentHook = null;
  // workInProgressHook = null;
  // didScheduleRenderPhaseUpdate = false;
  // TODO Warn if no hooks are used at all during mount, then some are used during update.
  // Currently we will identify the update render as a mount because memoizedState === null.
  // This is tricky because it's valid for certain types of components (e.g. React.lazy)
  // Using memoizedState to differentiate between mount/update only works if at least one stateful hook is used.
  // Non-stateful hooks (e.g. context) don't get added to memoizedState,
  // so memoizedState would be null during updates and mounts.
  {if(current!==null&&current.memoizedState!==null){ReactCurrentDispatcher$1.current=HooksDispatcherOnUpdateInDEV;}else if(hookTypesDev!==null){// This dispatcher handles an edge case where a component is updating,
  // but no stateful hooks have been used.
  // We want to match the production code behavior (which will use HooksDispatcherOnMount),
  // but with the extra DEV validation to ensure hooks ordering hasn't changed.
  // This dispatcher does that.
  ReactCurrentDispatcher$1.current=HooksDispatcherOnMountWithHookTypesInDEV;}else {ReactCurrentDispatcher$1.current=HooksDispatcherOnMountInDEV;}}var children=Component(props,secondArg);// Check if there was a render phase update
  if(didScheduleRenderPhaseUpdateDuringThisPass){// Keep rendering in a loop for as long as render phase updates continue to
  // be scheduled. Use a counter to prevent infinite loops.
  var numberOfReRenders=0;do{didScheduleRenderPhaseUpdateDuringThisPass=false;if(!(numberOfReRenders<RE_RENDER_LIMIT)){{throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");}}numberOfReRenders+=1;{// Even when hot reloading, allow dependencies to stabilize
  // after first render to prevent infinite render phase updates.
  ignorePreviousDependencies=false;}// Start over from the beginning of the list
  currentHook=null;workInProgressHook=null;workInProgress.updateQueue=null;{// Also validate hook order for cascading updates.
  hookTypesUpdateIndexDev=-1;}ReactCurrentDispatcher$1.current=HooksDispatcherOnRerenderInDEV;children=Component(props,secondArg);}while(didScheduleRenderPhaseUpdateDuringThisPass);}// We can assume the previous dispatcher is always this one, since we set it
  // at the beginning of the render phase and there's no re-entrancy.
  ReactCurrentDispatcher$1.current=ContextOnlyDispatcher;{workInProgress._debugHookTypes=hookTypesDev;}// This check uses currentHook so that it works the same in DEV and prod bundles.
  // hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.
  var didRenderTooFewHooks=currentHook!==null&&currentHook.next!==null;renderLanes=NoLanes;currentlyRenderingFiber$1=null;currentHook=null;workInProgressHook=null;{currentHookNameInDev=null;hookTypesDev=null;hookTypesUpdateIndexDev=-1;}didScheduleRenderPhaseUpdate=false;if(!!didRenderTooFewHooks){{throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");}}return children;}function bailoutHooks(current,workInProgress,lanes){workInProgress.updateQueue=current.updateQueue;workInProgress.flags&=~(Passive|Update);current.lanes=removeLanes(current.lanes,lanes);}function resetHooksAfterThrow(){// We can assume the previous dispatcher is always this one, since we set it
  // at the beginning of the render phase and there's no re-entrancy.
  ReactCurrentDispatcher$1.current=ContextOnlyDispatcher;if(didScheduleRenderPhaseUpdate){// There were render phase updates. These are only valid for this render
  // phase, which we are now aborting. Remove the updates from the queues so
  // they do not persist to the next render. Do not remove updates from hooks
  // that weren't processed.
  //
  // Only reset the updates from the queue if it has a clone. If it does
  // not have a clone, that means it wasn't processed, and the updates were
  // scheduled before we entered the render phase.
  var hook=currentlyRenderingFiber$1.memoizedState;while(hook!==null){var queue=hook.queue;if(queue!==null){queue.pending=null;}hook=hook.next;}didScheduleRenderPhaseUpdate=false;}renderLanes=NoLanes;currentlyRenderingFiber$1=null;currentHook=null;workInProgressHook=null;{hookTypesDev=null;hookTypesUpdateIndexDev=-1;currentHookNameInDev=null;isUpdatingOpaqueValueInRenderPhase=false;}didScheduleRenderPhaseUpdateDuringThisPass=false;}function mountWorkInProgressHook(){var hook={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};if(workInProgressHook===null){// This is the first hook in the list
  currentlyRenderingFiber$1.memoizedState=workInProgressHook=hook;}else {// Append to the end of the list
  workInProgressHook=workInProgressHook.next=hook;}return workInProgressHook;}function updateWorkInProgressHook(){// This function is used both for updates and for re-renders triggered by a
  // render phase update. It assumes there is either a current hook we can
  // clone, or a work-in-progress hook from a previous render pass that we can
  // use as a base. When we reach the end of the base list, we must switch to
  // the dispatcher used for mounts.
  var nextCurrentHook;if(currentHook===null){var current=currentlyRenderingFiber$1.alternate;if(current!==null){nextCurrentHook=current.memoizedState;}else {nextCurrentHook=null;}}else {nextCurrentHook=currentHook.next;}var nextWorkInProgressHook;if(workInProgressHook===null){nextWorkInProgressHook=currentlyRenderingFiber$1.memoizedState;}else {nextWorkInProgressHook=workInProgressHook.next;}if(nextWorkInProgressHook!==null){// There's already a work-in-progress. Reuse it.
  workInProgressHook=nextWorkInProgressHook;nextWorkInProgressHook=workInProgressHook.next;currentHook=nextCurrentHook;}else {// Clone from the current hook.
  if(!(nextCurrentHook!==null)){{throw Error("Rendered more hooks than during the previous render.");}}currentHook=nextCurrentHook;var newHook={memoizedState:currentHook.memoizedState,baseState:currentHook.baseState,baseQueue:currentHook.baseQueue,queue:currentHook.queue,next:null};if(workInProgressHook===null){// This is the first hook in the list.
  currentlyRenderingFiber$1.memoizedState=workInProgressHook=newHook;}else {// Append to the end of the list.
  workInProgressHook=workInProgressHook.next=newHook;}}return workInProgressHook;}function createFunctionComponentUpdateQueue(){return {lastEffect:null};}function basicStateReducer(state,action){// $FlowFixMe: Flow doesn't like mixed types
  return typeof action==='function'?action(state):action;}function mountReducer(reducer,initialArg,init){var hook=mountWorkInProgressHook();var initialState;if(init!==undefined){initialState=init(initialArg);}else {initialState=initialArg;}hook.memoizedState=hook.baseState=initialState;var queue=hook.queue={pending:null,dispatch:null,lastRenderedReducer:reducer,lastRenderedState:initialState};var dispatch=queue.dispatch=dispatchAction.bind(null,currentlyRenderingFiber$1,queue);return [hook.memoizedState,dispatch];}function updateReducer(reducer,initialArg,init){var hook=updateWorkInProgressHook();var queue=hook.queue;if(!(queue!==null)){{throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");}}queue.lastRenderedReducer=reducer;var current=currentHook;// The last rebase update that is NOT part of the base state.
  var baseQueue=current.baseQueue;// The last pending update that hasn't been processed yet.
  var pendingQueue=queue.pending;if(pendingQueue!==null){// We have new updates that haven't been processed yet.
  // We'll add them to the base queue.
  if(baseQueue!==null){// Merge the pending queue and the base queue.
  var baseFirst=baseQueue.next;var pendingFirst=pendingQueue.next;baseQueue.next=pendingFirst;pendingQueue.next=baseFirst;}{if(current.baseQueue!==baseQueue){// Internal invariant that should never happen, but feasibly could in
  // the future if we implement resuming, or some form of that.
  error('Internal error: Expected work-in-progress queue to be a clone. '+'This is a bug in React.');}}current.baseQueue=baseQueue=pendingQueue;queue.pending=null;}if(baseQueue!==null){// We have a queue to process.
  var first=baseQueue.next;var newState=current.baseState;var newBaseState=null;var newBaseQueueFirst=null;var newBaseQueueLast=null;var update=first;do{var updateLane=update.lane;if(!isSubsetOfLanes(renderLanes,updateLane)){// Priority is insufficient. Skip this update. If this is the first
  // skipped update, the previous update/state is the new base
  // update/state.
  var clone={lane:updateLane,action:update.action,eagerReducer:update.eagerReducer,eagerState:update.eagerState,next:null};if(newBaseQueueLast===null){newBaseQueueFirst=newBaseQueueLast=clone;newBaseState=newState;}else {newBaseQueueLast=newBaseQueueLast.next=clone;}// Update the remaining priority in the queue.
  // TODO: Don't need to accumulate this. Instead, we can remove
  // renderLanes from the original lanes.
  currentlyRenderingFiber$1.lanes=mergeLanes(currentlyRenderingFiber$1.lanes,updateLane);markSkippedUpdateLanes(updateLane);}else {// This update does have sufficient priority.
  if(newBaseQueueLast!==null){var _clone={// This update is going to be committed so we never want uncommit
  // it. Using NoLane works because 0 is a subset of all bitmasks, so
  // this will never be skipped by the check above.
  lane:NoLane,action:update.action,eagerReducer:update.eagerReducer,eagerState:update.eagerState,next:null};newBaseQueueLast=newBaseQueueLast.next=_clone;}// Process this update.
  if(update.eagerReducer===reducer){// If this update was processed eagerly, and its reducer matches the
  // current reducer, we can use the eagerly computed state.
  newState=update.eagerState;}else {var action=update.action;newState=reducer(newState,action);}}update=update.next;}while(update!==null&&update!==first);if(newBaseQueueLast===null){newBaseState=newState;}else {newBaseQueueLast.next=newBaseQueueFirst;}// Mark that the fiber performed work, but only if the new state is
  // different from the current state.
  if(!objectIs(newState,hook.memoizedState)){markWorkInProgressReceivedUpdate();}hook.memoizedState=newState;hook.baseState=newBaseState;hook.baseQueue=newBaseQueueLast;queue.lastRenderedState=newState;}var dispatch=queue.dispatch;return [hook.memoizedState,dispatch];}function rerenderReducer(reducer,initialArg,init){var hook=updateWorkInProgressHook();var queue=hook.queue;if(!(queue!==null)){{throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");}}queue.lastRenderedReducer=reducer;// This is a re-render. Apply the new render phase updates to the previous
  // work-in-progress hook.
  var dispatch=queue.dispatch;var lastRenderPhaseUpdate=queue.pending;var newState=hook.memoizedState;if(lastRenderPhaseUpdate!==null){// The queue doesn't persist past this render pass.
  queue.pending=null;var firstRenderPhaseUpdate=lastRenderPhaseUpdate.next;var update=firstRenderPhaseUpdate;do{// Process this render phase update. We don't have to check the
  // priority because it will always be the same as the current
  // render's.
  var action=update.action;newState=reducer(newState,action);update=update.next;}while(update!==firstRenderPhaseUpdate);// Mark that the fiber performed work, but only if the new state is
  // different from the current state.
  if(!objectIs(newState,hook.memoizedState)){markWorkInProgressReceivedUpdate();}hook.memoizedState=newState;// Don't persist the state accumulated from the render phase updates to
  // the base state unless the queue is empty.
  // TODO: Not sure if this is the desired semantics, but it's what we
  // do for gDSFP. I can't remember why.
  if(hook.baseQueue===null){hook.baseState=newState;}queue.lastRenderedState=newState;}return [newState,dispatch];}function readFromUnsubcribedMutableSource(root,source,getSnapshot){{warnAboutMultipleRenderersDEV(source);}var getVersion=source._getVersion;var version=getVersion(source._source);// Is it safe for this component to read from this source during the current render?
  var isSafeToReadFromSource=false;// Check the version first.
  // If this render has already been started with a specific version,
  // we can use it alone to determine if we can safely read from the source.
  var currentRenderVersion=getWorkInProgressVersion(source);if(currentRenderVersion!==null){// It's safe to read if the store hasn't been mutated since the last time
  // we read something.
  isSafeToReadFromSource=currentRenderVersion===version;}else {// If there's no version, then this is the first time we've read from the
  // source during the current render pass, so we need to do a bit more work.
  // What we need to determine is if there are any hooks that already
  // subscribed to the source, and if so, whether there are any pending
  // mutations that haven't been synchronized yet.
  //
  // If there are no pending mutations, then `root.mutableReadLanes` will be
  // empty, and we know we can safely read.
  //
  // If there *are* pending mutations, we may still be able to safely read
  // if the currently rendering lanes are inclusive of the pending mutation
  // lanes, since that guarantees that the value we're about to read from
  // the source is consistent with the values that we read during the most
  // recent mutation.
  isSafeToReadFromSource=isSubsetOfLanes(renderLanes,root.mutableReadLanes);if(isSafeToReadFromSource){// If it's safe to read from this source during the current render,
  // store the version in case other components read from it.
  // A changed version number will let those components know to throw and restart the render.
  setWorkInProgressVersion(source,version);}}if(isSafeToReadFromSource){var snapshot=getSnapshot(source._source);{if(typeof snapshot==='function'){error('Mutable source should not return a function as the snapshot value. '+'Functions may close over mutable values and cause tearing.');}}return snapshot;}else {// This handles the special case of a mutable source being shared between renderers.
  // In that case, if the source is mutated between the first and second renderer,
  // The second renderer don't know that it needs to reset the WIP version during unwind,
  // (because the hook only marks sources as dirty if it's written to their WIP version).
  // That would cause this tear check to throw again and eventually be visible to the user.
  // We can avoid this infinite loop by explicitly marking the source as dirty.
  //
  // This can lead to tearing in the first renderer when it resumes,
  // but there's nothing we can do about that (short of throwing here and refusing to continue the render).
  markSourceAsDirty(source);{{throw Error("Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.");}}}}function useMutableSource(hook,source,getSnapshot,subscribe){var root=getWorkInProgressRoot();if(!(root!==null)){{throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");}}var getVersion=source._getVersion;var version=getVersion(source._source);var dispatcher=ReactCurrentDispatcher$1.current;// eslint-disable-next-line prefer-const
  var _dispatcher$useState=dispatcher.useState(function(){return readFromUnsubcribedMutableSource(root,source,getSnapshot);}),currentSnapshot=_dispatcher$useState[0],setSnapshot=_dispatcher$useState[1];var snapshot=currentSnapshot;// Grab a handle to the state hook as well.
  // We use it to clear the pending update queue if we have a new source.
  var stateHook=workInProgressHook;var memoizedState=hook.memoizedState;var refs=memoizedState.refs;var prevGetSnapshot=refs.getSnapshot;var prevSource=memoizedState.source;var prevSubscribe=memoizedState.subscribe;var fiber=currentlyRenderingFiber$1;hook.memoizedState={refs:refs,source:source,subscribe:subscribe};// Sync the values needed by our subscription handler after each commit.
  dispatcher.useEffect(function(){refs.getSnapshot=getSnapshot;// Normally the dispatch function for a state hook never changes,
  // but this hook recreates the queue in certain cases  to avoid updates from stale sources.
  // handleChange() below needs to reference the dispatch function without re-subscribing,
  // so we use a ref to ensure that it always has the latest version.
  refs.setSnapshot=setSnapshot;// Check for a possible change between when we last rendered now.
  var maybeNewVersion=getVersion(source._source);if(!objectIs(version,maybeNewVersion)){var maybeNewSnapshot=getSnapshot(source._source);{if(typeof maybeNewSnapshot==='function'){error('Mutable source should not return a function as the snapshot value. '+'Functions may close over mutable values and cause tearing.');}}if(!objectIs(snapshot,maybeNewSnapshot)){setSnapshot(maybeNewSnapshot);var lane=requestUpdateLane(fiber);markRootMutableRead(root,lane);}// If the source mutated between render and now,
  // there may be state updates already scheduled from the old source.
  // Entangle the updates so that they render in the same batch.
  markRootEntangled(root,root.mutableReadLanes);}},[getSnapshot,source,subscribe]);// If we got a new source or subscribe function, re-subscribe in a passive effect.
  dispatcher.useEffect(function(){var handleChange=function handleChange(){var latestGetSnapshot=refs.getSnapshot;var latestSetSnapshot=refs.setSnapshot;try{latestSetSnapshot(latestGetSnapshot(source._source));// Record a pending mutable source update with the same expiration time.
  var lane=requestUpdateLane(fiber);markRootMutableRead(root,lane);}catch(error){// A selector might throw after a source mutation.
  // e.g. it might try to read from a part of the store that no longer exists.
  // In this case we should still schedule an update with React.
  // Worst case the selector will throw again and then an error boundary will handle it.
  latestSetSnapshot(function(){throw error;});}};var unsubscribe=subscribe(source._source,handleChange);{if(typeof unsubscribe!=='function'){error('Mutable source subscribe function must return an unsubscribe function.');}}return unsubscribe;},[source,subscribe]);// If any of the inputs to useMutableSource change, reading is potentially unsafe.
  //
  // If either the source or the subscription have changed we can't can't trust the update queue.
  // Maybe the source changed in a way that the old subscription ignored but the new one depends on.
  //
  // If the getSnapshot function changed, we also shouldn't rely on the update queue.
  // It's possible that the underlying source was mutated between the when the last "change" event fired,
  // and when the current render (with the new getSnapshot function) is processed.
  //
  // In both cases, we need to throw away pending updates (since they are no longer relevant)
  // and treat reading from the source as we do in the mount case.
  if(!objectIs(prevGetSnapshot,getSnapshot)||!objectIs(prevSource,source)||!objectIs(prevSubscribe,subscribe)){// Create a new queue and setState method,
  // So if there are interleaved updates, they get pushed to the older queue.
  // When this becomes current, the previous queue and dispatch method will be discarded,
  // including any interleaving updates that occur.
  var newQueue={pending:null,dispatch:null,lastRenderedReducer:basicStateReducer,lastRenderedState:snapshot};newQueue.dispatch=setSnapshot=dispatchAction.bind(null,currentlyRenderingFiber$1,newQueue);stateHook.queue=newQueue;stateHook.baseQueue=null;snapshot=readFromUnsubcribedMutableSource(root,source,getSnapshot);stateHook.memoizedState=stateHook.baseState=snapshot;}return snapshot;}function mountMutableSource(source,getSnapshot,subscribe){var hook=mountWorkInProgressHook();hook.memoizedState={refs:{getSnapshot:getSnapshot,setSnapshot:null},source:source,subscribe:subscribe};return useMutableSource(hook,source,getSnapshot,subscribe);}function updateMutableSource(source,getSnapshot,subscribe){var hook=updateWorkInProgressHook();return useMutableSource(hook,source,getSnapshot,subscribe);}function mountState(initialState){var hook=mountWorkInProgressHook();if(typeof initialState==='function'){// $FlowFixMe: Flow doesn't like mixed types
  initialState=initialState();}hook.memoizedState=hook.baseState=initialState;var queue=hook.queue={pending:null,dispatch:null,lastRenderedReducer:basicStateReducer,lastRenderedState:initialState};var dispatch=queue.dispatch=dispatchAction.bind(null,currentlyRenderingFiber$1,queue);return [hook.memoizedState,dispatch];}function updateState(initialState){return updateReducer(basicStateReducer);}function rerenderState(initialState){return rerenderReducer(basicStateReducer);}function pushEffect(tag,create,destroy,deps){var effect={tag:tag,create:create,destroy:destroy,deps:deps,// Circular
  next:null};var componentUpdateQueue=currentlyRenderingFiber$1.updateQueue;if(componentUpdateQueue===null){componentUpdateQueue=createFunctionComponentUpdateQueue();currentlyRenderingFiber$1.updateQueue=componentUpdateQueue;componentUpdateQueue.lastEffect=effect.next=effect;}else {var lastEffect=componentUpdateQueue.lastEffect;if(lastEffect===null){componentUpdateQueue.lastEffect=effect.next=effect;}else {var firstEffect=lastEffect.next;lastEffect.next=effect;effect.next=firstEffect;componentUpdateQueue.lastEffect=effect;}}return effect;}function mountRef(initialValue){var hook=mountWorkInProgressHook();var ref={current:initialValue};{Object.seal(ref);}hook.memoizedState=ref;return ref;}function updateRef(initialValue){var hook=updateWorkInProgressHook();return hook.memoizedState;}function mountEffectImpl(fiberFlags,hookFlags,create,deps){var hook=mountWorkInProgressHook();var nextDeps=deps===undefined?null:deps;currentlyRenderingFiber$1.flags|=fiberFlags;hook.memoizedState=pushEffect(HasEffect|hookFlags,create,undefined,nextDeps);}function updateEffectImpl(fiberFlags,hookFlags,create,deps){var hook=updateWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var destroy=undefined;if(currentHook!==null){var prevEffect=currentHook.memoizedState;destroy=prevEffect.destroy;if(nextDeps!==null){var prevDeps=prevEffect.deps;if(areHookInputsEqual(nextDeps,prevDeps)){pushEffect(hookFlags,create,destroy,nextDeps);return;}}}currentlyRenderingFiber$1.flags|=fiberFlags;hook.memoizedState=pushEffect(HasEffect|hookFlags,create,destroy,nextDeps);}function mountEffect(create,deps){{// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
  if('undefined'!==typeof jest){warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);}}return mountEffectImpl(Update|Passive,Passive$1,create,deps);}function updateEffect(create,deps){{// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
  if('undefined'!==typeof jest){warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);}}return updateEffectImpl(Update|Passive,Passive$1,create,deps);}function mountLayoutEffect(create,deps){return mountEffectImpl(Update,Layout,create,deps);}function updateLayoutEffect(create,deps){return updateEffectImpl(Update,Layout,create,deps);}function imperativeHandleEffect(create,ref){if(typeof ref==='function'){var refCallback=ref;var _inst=create();refCallback(_inst);return function(){refCallback(null);};}else if(ref!==null&&ref!==undefined){var refObject=ref;{if(!refObject.hasOwnProperty('current')){error('Expected useImperativeHandle() first argument to either be a '+'ref callback or React.createRef() object. Instead received: %s.','an object with keys {'+Object.keys(refObject).join(', ')+'}');}}var _inst2=create();refObject.current=_inst2;return function(){refObject.current=null;};}}function mountImperativeHandle(ref,create,deps){{if(typeof create!=='function'){error('Expected useImperativeHandle() second argument to be a function '+'that creates a handle. Instead received: %s.',create!==null?_typeof(create):'null');}}// TODO: If deps are provided, should we skip comparing the ref itself?
  var effectDeps=deps!==null&&deps!==undefined?deps.concat([ref]):null;return mountEffectImpl(Update,Layout,imperativeHandleEffect.bind(null,create,ref),effectDeps);}function updateImperativeHandle(ref,create,deps){{if(typeof create!=='function'){error('Expected useImperativeHandle() second argument to be a function '+'that creates a handle. Instead received: %s.',create!==null?_typeof(create):'null');}}// TODO: If deps are provided, should we skip comparing the ref itself?
  var effectDeps=deps!==null&&deps!==undefined?deps.concat([ref]):null;return updateEffectImpl(Update,Layout,imperativeHandleEffect.bind(null,create,ref),effectDeps);}function mountDebugValue(value,formatterFn){// This hook is normally a no-op.
  // The react-debug-hooks package injects its own implementation
  // so that e.g. DevTools can display custom hook values.
  }var updateDebugValue=mountDebugValue;function mountCallback(callback,deps){var hook=mountWorkInProgressHook();var nextDeps=deps===undefined?null:deps;hook.memoizedState=[callback,nextDeps];return callback;}function updateCallback(callback,deps){var hook=updateWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var prevState=hook.memoizedState;if(prevState!==null){if(nextDeps!==null){var prevDeps=prevState[1];if(areHookInputsEqual(nextDeps,prevDeps)){return prevState[0];}}}hook.memoizedState=[callback,nextDeps];return callback;}function mountMemo(nextCreate,deps){var hook=mountWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var nextValue=nextCreate();hook.memoizedState=[nextValue,nextDeps];return nextValue;}function updateMemo(nextCreate,deps){var hook=updateWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var prevState=hook.memoizedState;if(prevState!==null){// Assume these are defined. If they're not, areHookInputsEqual will warn.
  if(nextDeps!==null){var prevDeps=prevState[1];if(areHookInputsEqual(nextDeps,prevDeps)){return prevState[0];}}}var nextValue=nextCreate();hook.memoizedState=[nextValue,nextDeps];return nextValue;}function mountDeferredValue(value){var _mountState=mountState(value),prevValue=_mountState[0],setValue=_mountState[1];mountEffect(function(){var prevTransition=ReactCurrentBatchConfig$1.transition;ReactCurrentBatchConfig$1.transition=1;try{setValue(value);}finally{ReactCurrentBatchConfig$1.transition=prevTransition;}},[value]);return prevValue;}function updateDeferredValue(value){var _updateState=updateState(),prevValue=_updateState[0],setValue=_updateState[1];updateEffect(function(){var prevTransition=ReactCurrentBatchConfig$1.transition;ReactCurrentBatchConfig$1.transition=1;try{setValue(value);}finally{ReactCurrentBatchConfig$1.transition=prevTransition;}},[value]);return prevValue;}function rerenderDeferredValue(value){var _rerenderState=rerenderState(),prevValue=_rerenderState[0],setValue=_rerenderState[1];updateEffect(function(){var prevTransition=ReactCurrentBatchConfig$1.transition;ReactCurrentBatchConfig$1.transition=1;try{setValue(value);}finally{ReactCurrentBatchConfig$1.transition=prevTransition;}},[value]);return prevValue;}function startTransition(setPending,callback){var priorityLevel=getCurrentPriorityLevel();{runWithPriority(priorityLevel<UserBlockingPriority$1?UserBlockingPriority$1:priorityLevel,function(){setPending(true);});runWithPriority(priorityLevel>NormalPriority$1?NormalPriority$1:priorityLevel,function(){var prevTransition=ReactCurrentBatchConfig$1.transition;ReactCurrentBatchConfig$1.transition=1;try{setPending(false);callback();}finally{ReactCurrentBatchConfig$1.transition=prevTransition;}});}}function mountTransition(){var _mountState2=mountState(false),isPending=_mountState2[0],setPending=_mountState2[1];// The `start` method can be stored on a ref, since `setPending`
  // never changes.
  var start=startTransition.bind(null,setPending);mountRef(start);return [start,isPending];}function updateTransition(){var _updateState2=updateState(),isPending=_updateState2[0];var startRef=updateRef();var start=startRef.current;return [start,isPending];}function rerenderTransition(){var _rerenderState2=rerenderState(),isPending=_rerenderState2[0];var startRef=updateRef();var start=startRef.current;return [start,isPending];}var isUpdatingOpaqueValueInRenderPhase=false;function getIsUpdatingOpaqueValueInRenderPhaseInDEV(){{return isUpdatingOpaqueValueInRenderPhase;}}function warnOnOpaqueIdentifierAccessInDEV(fiber){{// TODO: Should warn in effects and callbacks, too
  var name=getComponentName(fiber.type)||'Unknown';if(getIsRendering()&&!didWarnAboutUseOpaqueIdentifier[name]){error('The object passed back from useOpaqueIdentifier is meant to be '+'passed through to attributes only. Do not read the '+'value directly.');didWarnAboutUseOpaqueIdentifier[name]=true;}}}function mountOpaqueIdentifier(){var makeId=makeClientIdInDEV.bind(null,warnOnOpaqueIdentifierAccessInDEV.bind(null,currentlyRenderingFiber$1));if(getIsHydrating()){var didUpgrade=false;var fiber=currentlyRenderingFiber$1;var readValue=function readValue(){if(!didUpgrade){// Only upgrade once. This works even inside the render phase because
  // the update is added to a shared queue, which outlasts the
  // in-progress render.
  didUpgrade=true;{isUpdatingOpaqueValueInRenderPhase=true;setId(makeId());isUpdatingOpaqueValueInRenderPhase=false;warnOnOpaqueIdentifierAccessInDEV(fiber);}}{{throw Error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");}}};var id=makeOpaqueHydratingObject(readValue);var setId=mountState(id)[1];if((currentlyRenderingFiber$1.mode&BlockingMode)===NoMode){currentlyRenderingFiber$1.flags|=Update|Passive;pushEffect(HasEffect|Passive$1,function(){setId(makeId());},undefined,null);}return id;}else {var _id=makeId();mountState(_id);return _id;}}function updateOpaqueIdentifier(){var id=updateState()[0];return id;}function rerenderOpaqueIdentifier(){var id=rerenderState()[0];return id;}function dispatchAction(fiber,queue,action){{if(typeof arguments[3]==='function'){error("State updates from the useState() and useReducer() Hooks don't support the "+'second callback argument. To execute a side effect after '+'rendering, declare it in the component body with useEffect().');}}var eventTime=requestEventTime();var lane=requestUpdateLane(fiber);var update={lane:lane,action:action,eagerReducer:null,eagerState:null,next:null};// Append the update to the end of the list.
  var pending=queue.pending;if(pending===null){// This is the first update. Create a circular list.
  update.next=update;}else {update.next=pending.next;pending.next=update;}queue.pending=update;var alternate=fiber.alternate;if(fiber===currentlyRenderingFiber$1||alternate!==null&&alternate===currentlyRenderingFiber$1){// This is a render phase update. Stash it in a lazily-created map of
  // queue -> linked list of updates. After this render pass, we'll restart
  // and apply the stashed updates on top of the work-in-progress hook.
  didScheduleRenderPhaseUpdateDuringThisPass=didScheduleRenderPhaseUpdate=true;}else {if(fiber.lanes===NoLanes&&(alternate===null||alternate.lanes===NoLanes)){// The queue is currently empty, which means we can eagerly compute the
  // next state before entering the render phase. If the new state is the
  // same as the current state, we may be able to bail out entirely.
  var lastRenderedReducer=queue.lastRenderedReducer;if(lastRenderedReducer!==null){var prevDispatcher;{prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;}try{var currentState=queue.lastRenderedState;var eagerState=lastRenderedReducer(currentState,action);// Stash the eagerly computed state, and the reducer used to compute
  // it, on the update object. If the reducer hasn't changed by the
  // time we enter the render phase, then the eager state can be used
  // without calling the reducer again.
  update.eagerReducer=lastRenderedReducer;update.eagerState=eagerState;if(objectIs(eagerState,currentState)){// Fast path. We can bail out without scheduling React to re-render.
  // It's still possible that we'll need to rebase this update later,
  // if the component re-renders for a different reason and by that
  // time the reducer has changed.
  return;}}catch(error){// Suppress the error. It will throw again in the render phase.
  }finally{{ReactCurrentDispatcher$1.current=prevDispatcher;}}}}{// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
  if('undefined'!==typeof jest){warnIfNotScopedWithMatchingAct(fiber);warnIfNotCurrentlyActingUpdatesInDev(fiber);}}scheduleUpdateOnFiber(fiber,lane,eventTime);}}var ContextOnlyDispatcher={readContext:_readContext,useCallback:throwInvalidHookError,useContext:throwInvalidHookError,useEffect:throwInvalidHookError,useImperativeHandle:throwInvalidHookError,useLayoutEffect:throwInvalidHookError,useMemo:throwInvalidHookError,useReducer:throwInvalidHookError,useRef:throwInvalidHookError,useState:throwInvalidHookError,useDebugValue:throwInvalidHookError,useDeferredValue:throwInvalidHookError,useTransition:throwInvalidHookError,useMutableSource:throwInvalidHookError,useOpaqueIdentifier:throwInvalidHookError,unstable_isNewReconciler:enableNewReconciler};var HooksDispatcherOnMountInDEV=null;var HooksDispatcherOnMountWithHookTypesInDEV=null;var HooksDispatcherOnUpdateInDEV=null;var HooksDispatcherOnRerenderInDEV=null;var InvalidNestedHooksDispatcherOnMountInDEV=null;var InvalidNestedHooksDispatcherOnUpdateInDEV=null;var InvalidNestedHooksDispatcherOnRerenderInDEV=null;{var warnInvalidContextAccess=function warnInvalidContextAccess(){error('Context can only be read while React is rendering. '+'In classes, you can read it in the render method or getDerivedStateFromProps. '+'In function components, you can read it directly in the function body, but not '+'inside Hooks like useReducer() or useMemo().');};var warnInvalidHookAccess=function warnInvalidHookAccess(){error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. '+'You can only call Hooks at the top level of your React function. '+'For more information, see '+'https://reactjs.org/link/rules-of-hooks');};HooksDispatcherOnMountInDEV={readContext:function readContext(context,observedBits){return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';mountHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';mountHookTypesDev();checkDepsAreArrayDev(deps);var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';mountHookTypesDev();return mountRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';mountHookTypesDev();return mountDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';mountHookTypesDev();return mountDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';mountHookTypesDev();return mountTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';mountHookTypesDev();return mountMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';mountHookTypesDev();return mountOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};HooksDispatcherOnMountWithHookTypesInDEV={readContext:function readContext(context,observedBits){return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';updateHookTypesDev();return mountCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';updateHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';updateHookTypesDev();return mountEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';updateHookTypesDev();return mountImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';updateHookTypesDev();return mountLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';updateHookTypesDev();return mountRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';updateHookTypesDev();return mountDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';updateHookTypesDev();return mountDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';updateHookTypesDev();return mountTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';updateHookTypesDev();return mountMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';updateHookTypesDev();return mountOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};HooksDispatcherOnUpdateInDEV={readContext:function readContext(context,observedBits){return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';updateHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';updateHookTypesDev();return updateRef();},useState:function useState(initialState){currentHookNameInDev='useState';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';updateHookTypesDev();return updateDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';updateHookTypesDev();return updateDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';updateHookTypesDev();return updateTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';updateHookTypesDev();return updateMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';updateHookTypesDev();return updateOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};HooksDispatcherOnRerenderInDEV={readContext:function readContext(context,observedBits){return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';updateHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnRerenderInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnRerenderInDEV;try{return rerenderReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';updateHookTypesDev();return updateRef();},useState:function useState(initialState){currentHookNameInDev='useState';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnRerenderInDEV;try{return rerenderState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';updateHookTypesDev();return updateDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';updateHookTypesDev();return rerenderDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';updateHookTypesDev();return rerenderTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';updateHookTypesDev();return updateMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';updateHookTypesDev();return rerenderOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};InvalidNestedHooksDispatcherOnMountInDEV={readContext:function readContext(context,observedBits){warnInvalidContextAccess();return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';warnInvalidHookAccess();mountHookTypesDev();return mountCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';warnInvalidHookAccess();mountHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';warnInvalidHookAccess();mountHookTypesDev();return mountEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';warnInvalidHookAccess();mountHookTypesDev();return mountImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';warnInvalidHookAccess();mountHookTypesDev();return mountLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';warnInvalidHookAccess();mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';warnInvalidHookAccess();mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';warnInvalidHookAccess();mountHookTypesDev();return mountRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';warnInvalidHookAccess();mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';warnInvalidHookAccess();mountHookTypesDev();return mountDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';warnInvalidHookAccess();mountHookTypesDev();return mountDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';warnInvalidHookAccess();mountHookTypesDev();return mountTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';warnInvalidHookAccess();mountHookTypesDev();return mountMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';warnInvalidHookAccess();mountHookTypesDev();return mountOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};InvalidNestedHooksDispatcherOnUpdateInDEV={readContext:function readContext(context,observedBits){warnInvalidContextAccess();return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';warnInvalidHookAccess();updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';warnInvalidHookAccess();updateHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';warnInvalidHookAccess();updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';warnInvalidHookAccess();updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';warnInvalidHookAccess();updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';warnInvalidHookAccess();updateHookTypesDev();return updateRef();},useState:function useState(initialState){currentHookNameInDev='useState';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';warnInvalidHookAccess();updateHookTypesDev();return updateDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';warnInvalidHookAccess();updateHookTypesDev();return updateDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';warnInvalidHookAccess();updateHookTypesDev();return updateTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';warnInvalidHookAccess();updateHookTypesDev();return updateMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';warnInvalidHookAccess();updateHookTypesDev();return updateOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};InvalidNestedHooksDispatcherOnRerenderInDEV={readContext:function readContext(context,observedBits){warnInvalidContextAccess();return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';warnInvalidHookAccess();updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';warnInvalidHookAccess();updateHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';warnInvalidHookAccess();updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';warnInvalidHookAccess();updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';warnInvalidHookAccess();updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return rerenderReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';warnInvalidHookAccess();updateHookTypesDev();return updateRef();},useState:function useState(initialState){currentHookNameInDev='useState';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return rerenderState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';warnInvalidHookAccess();updateHookTypesDev();return updateDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';warnInvalidHookAccess();updateHookTypesDev();return rerenderDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';warnInvalidHookAccess();updateHookTypesDev();return rerenderTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';warnInvalidHookAccess();updateHookTypesDev();return updateMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';warnInvalidHookAccess();updateHookTypesDev();return rerenderOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};}var now$2=Scheduler.unstable_now;var commitTime=0;var profilerStartTime=-1;function getCommitTime(){return commitTime;}function recordCommitTime(){commitTime=now$2();}function startProfilerTimer(fiber){profilerStartTime=now$2();if(fiber.actualStartTime<0){fiber.actualStartTime=now$2();}}function stopProfilerTimerIfRunning(fiber){profilerStartTime=-1;}function stopProfilerTimerIfRunningAndRecordDelta(fiber,overrideBaseTime){if(profilerStartTime>=0){var elapsedTime=now$2()-profilerStartTime;fiber.actualDuration+=elapsedTime;if(overrideBaseTime){fiber.selfBaseDuration=elapsedTime;}profilerStartTime=-1;}}function transferActualDuration(fiber){// Transfer time spent rendering these children so we don't lose it
  // after we rerender. This is used as a helper in special cases
  // where we should count the work of multiple passes.
  var child=fiber.child;while(child){fiber.actualDuration+=child.actualDuration;child=child.sibling;}}var ReactCurrentOwner$1=ReactSharedInternals.ReactCurrentOwner;var didReceiveUpdate=false;var didWarnAboutBadClass;var didWarnAboutModulePatternComponent;var didWarnAboutContextTypeOnFunctionComponent;var didWarnAboutGetDerivedStateOnFunctionComponent;var didWarnAboutFunctionRefs;var didWarnAboutReassigningProps;var didWarnAboutRevealOrder;var didWarnAboutTailOptions;{didWarnAboutBadClass={};didWarnAboutModulePatternComponent={};didWarnAboutContextTypeOnFunctionComponent={};didWarnAboutGetDerivedStateOnFunctionComponent={};didWarnAboutFunctionRefs={};didWarnAboutReassigningProps=false;didWarnAboutRevealOrder={};didWarnAboutTailOptions={};}function reconcileChildren(current,workInProgress,nextChildren,renderLanes){if(current===null){// If this is a fresh new component that hasn't been rendered yet, we
  // won't update its child set by applying minimal side-effects. Instead,
  // we will add them all to the child before it gets rendered. That means
  // we can optimize this reconciliation pass by not tracking side-effects.
  workInProgress.child=mountChildFibers(workInProgress,null,nextChildren,renderLanes);}else {// If the current child is the same as the work in progress, it means that
  // we haven't yet started any work on these children. Therefore, we use
  // the clone algorithm to create a copy of all the current children.
  // If we had any progressed work already, that is invalid at this point so
  // let's throw it out.
  workInProgress.child=reconcileChildFibers(workInProgress,current.child,nextChildren,renderLanes);}}function forceUnmountCurrentAndReconcile(current,workInProgress,nextChildren,renderLanes){// This function is fork of reconcileChildren. It's used in cases where we
  // want to reconcile without matching against the existing set. This has the
  // effect of all current children being unmounted; even if the type and key
  // are the same, the old child is unmounted and a new child is created.
  //
  // To do this, we're going to go through the reconcile algorithm twice. In
  // the first pass, we schedule a deletion for all the current children by
  // passing null.
  workInProgress.child=reconcileChildFibers(workInProgress,current.child,null,renderLanes);// In the second pass, we mount the new children. The trick here is that we
  // pass null in place of where we usually pass the current child set. This has
  // the effect of remounting all children regardless of whether their
  // identities match.
  workInProgress.child=reconcileChildFibers(workInProgress,null,nextChildren,renderLanes);}function updateForwardRef(current,workInProgress,Component,nextProps,renderLanes){// TODO: current can be non-null here even if the component
  // hasn't yet mounted. This happens after the first render suspends.
  // We'll need to figure out if this is fine or can cause issues.
  {if(workInProgress.type!==workInProgress.elementType){// Lazy component props can't be validated in createElement
  // because they're only guaranteed to be resolved here.
  var innerPropTypes=Component.propTypes;if(innerPropTypes){checkPropTypes(innerPropTypes,nextProps,// Resolved props
  'prop',getComponentName(Component));}}}var render=Component.render;var ref=workInProgress.ref;// The rest is a fork of updateFunctionComponent
  var nextChildren;prepareToReadContext(workInProgress,renderLanes);{ReactCurrentOwner$1.current=workInProgress;setIsRendering(true);nextChildren=renderWithHooks(current,workInProgress,render,nextProps,ref,renderLanes);if(workInProgress.mode&StrictMode){disableLogs();try{nextChildren=renderWithHooks(current,workInProgress,render,nextProps,ref,renderLanes);}finally{reenableLogs();}}setIsRendering(false);}if(current!==null&&!didReceiveUpdate){bailoutHooks(current,workInProgress,renderLanes);return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}// React DevTools reads this flag.
  workInProgress.flags|=PerformedWork;reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}function updateMemoComponent(current,workInProgress,Component,nextProps,updateLanes,renderLanes){if(current===null){var type=Component.type;if(isSimpleFunctionComponent(type)&&Component.compare===null&&// SimpleMemoComponent codepath doesn't resolve outer props either.
  Component.defaultProps===undefined){var resolvedType=type;{resolvedType=resolveFunctionForHotReloading(type);}// If this is a plain function component without default props,
  // and with only the default shallow comparison, we upgrade it
  // to a SimpleMemoComponent to allow fast path updates.
  workInProgress.tag=SimpleMemoComponent;workInProgress.type=resolvedType;{validateFunctionComponentInDev(workInProgress,type);}return updateSimpleMemoComponent(current,workInProgress,resolvedType,nextProps,updateLanes,renderLanes);}{var innerPropTypes=type.propTypes;if(innerPropTypes){// Inner memo component props aren't currently validated in createElement.
  // We could move it there, but we'd still need this for lazy code path.
  checkPropTypes(innerPropTypes,nextProps,// Resolved props
  'prop',getComponentName(type));}}var child=createFiberFromTypeAndProps(Component.type,null,nextProps,workInProgress,workInProgress.mode,renderLanes);child.ref=workInProgress.ref;child["return"]=workInProgress;workInProgress.child=child;return child;}{var _type=Component.type;var _innerPropTypes=_type.propTypes;if(_innerPropTypes){// Inner memo component props aren't currently validated in createElement.
  // We could move it there, but we'd still need this for lazy code path.
  checkPropTypes(_innerPropTypes,nextProps,// Resolved props
  'prop',getComponentName(_type));}}var currentChild=current.child;// This is always exactly one child
  if(!includesSomeLane(updateLanes,renderLanes)){// This will be the props with resolved defaultProps,
  // unlike current.memoizedProps which will be the unresolved ones.
  var prevProps=currentChild.memoizedProps;// Default to shallow comparison
  var compare=Component.compare;compare=compare!==null?compare:shallowEqual;if(compare(prevProps,nextProps)&&current.ref===workInProgress.ref){return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}}// React DevTools reads this flag.
  workInProgress.flags|=PerformedWork;var newChild=createWorkInProgress(currentChild,nextProps);newChild.ref=workInProgress.ref;newChild["return"]=workInProgress;workInProgress.child=newChild;return newChild;}function updateSimpleMemoComponent(current,workInProgress,Component,nextProps,updateLanes,renderLanes){// TODO: current can be non-null here even if the component
  // hasn't yet mounted. This happens when the inner render suspends.
  // We'll need to figure out if this is fine or can cause issues.
  {if(workInProgress.type!==workInProgress.elementType){// Lazy component props can't be validated in createElement
  // because they're only guaranteed to be resolved here.
  var outerMemoType=workInProgress.elementType;if(outerMemoType.$$typeof===REACT_LAZY_TYPE){// We warn when you define propTypes on lazy()
  // so let's just skip over it to find memo() outer wrapper.
  // Inner props for memo are validated later.
  var lazyComponent=outerMemoType;var payload=lazyComponent._payload;var init=lazyComponent._init;try{outerMemoType=init(payload);}catch(x){outerMemoType=null;}// Inner propTypes will be validated in the function component path.
  var outerPropTypes=outerMemoType&&outerMemoType.propTypes;if(outerPropTypes){checkPropTypes(outerPropTypes,nextProps,// Resolved (SimpleMemoComponent has no defaultProps)
  'prop',getComponentName(outerMemoType));}}}}if(current!==null){var prevProps=current.memoizedProps;if(shallowEqual(prevProps,nextProps)&&current.ref===workInProgress.ref&&// Prevent bailout if the implementation changed due to hot reload.
  workInProgress.type===current.type){didReceiveUpdate=false;if(!includesSomeLane(renderLanes,updateLanes)){// The pending lanes were cleared at the beginning of beginWork. We're
  // about to bail out, but there might be other lanes that weren't
  // included in the current render. Usually, the priority level of the
  // remaining updates is accumlated during the evaluation of the
  // component (i.e. when processing the update queue). But since since
  // we're bailing out early *without* evaluating the component, we need
  // to account for it here, too. Reset to the value of the current fiber.
  // NOTE: This only applies to SimpleMemoComponent, not MemoComponent,
  // because a MemoComponent fiber does not have hooks or an update queue;
  // rather, it wraps around an inner component, which may or may not
  // contains hooks.
  // TODO: Move the reset at in beginWork out of the common path so that
  // this is no longer necessary.
  workInProgress.lanes=current.lanes;return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}else if((current.flags&ForceUpdateForLegacySuspense)!==NoFlags){// This is a special case that only exists for legacy mode.
  // See https://github.com/facebook/react/pull/19216.
  didReceiveUpdate=true;}}}return updateFunctionComponent(current,workInProgress,Component,nextProps,renderLanes);}function updateOffscreenComponent(current,workInProgress,renderLanes){var nextProps=workInProgress.pendingProps;var nextChildren=nextProps.children;var prevState=current!==null?current.memoizedState:null;if(nextProps.mode==='hidden'||nextProps.mode==='unstable-defer-without-hiding'){if((workInProgress.mode&ConcurrentMode)===NoMode){// In legacy sync mode, don't defer the subtree. Render it now.
  // TODO: Figure out what we should do in Blocking mode.
  var nextState={baseLanes:NoLanes};workInProgress.memoizedState=nextState;pushRenderLanes(workInProgress,renderLanes);}else if(!includesSomeLane(renderLanes,OffscreenLane)){var nextBaseLanes;if(prevState!==null){var prevBaseLanes=prevState.baseLanes;nextBaseLanes=mergeLanes(prevBaseLanes,renderLanes);}else {nextBaseLanes=renderLanes;}// Schedule this fiber to re-render at offscreen priority. Then bailout.
  {markSpawnedWork(OffscreenLane);}workInProgress.lanes=workInProgress.childLanes=laneToLanes(OffscreenLane);var _nextState={baseLanes:nextBaseLanes};workInProgress.memoizedState=_nextState;// We're about to bail out, but we need to push this to the stack anyway
  // to avoid a push/pop misalignment.
  pushRenderLanes(workInProgress,nextBaseLanes);return null;}else {// Rendering at offscreen, so we can clear the base lanes.
  var _nextState2={baseLanes:NoLanes};workInProgress.memoizedState=_nextState2;// Push the lanes that were skipped when we bailed out.
  var subtreeRenderLanes=prevState!==null?prevState.baseLanes:renderLanes;pushRenderLanes(workInProgress,subtreeRenderLanes);}}else {var _subtreeRenderLanes;if(prevState!==null){_subtreeRenderLanes=mergeLanes(prevState.baseLanes,renderLanes);// Since we're not hidden anymore, reset the state
  workInProgress.memoizedState=null;}else {// We weren't previously hidden, and we still aren't, so there's nothing
  // special to do. Need to push to the stack regardless, though, to avoid
  // a push/pop misalignment.
  _subtreeRenderLanes=renderLanes;}pushRenderLanes(workInProgress,_subtreeRenderLanes);}reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}// Note: These happen to have identical begin phases, for now. We shouldn't hold
  // ourselves to this constraint, though. If the behavior diverges, we should
  // fork the function.
  var updateLegacyHiddenComponent=updateOffscreenComponent;function updateFragment(current,workInProgress,renderLanes){var nextChildren=workInProgress.pendingProps;reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}function updateMode(current,workInProgress,renderLanes){var nextChildren=workInProgress.pendingProps.children;reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}function updateProfiler(current,workInProgress,renderLanes){{workInProgress.flags|=Update;// Reset effect durations for the next eventual effect phase.
  // These are reset during render to allow the DevTools commit hook a chance to read them,
  var stateNode=workInProgress.stateNode;stateNode.effectDuration=0;stateNode.passiveEffectDuration=0;}var nextProps=workInProgress.pendingProps;var nextChildren=nextProps.children;reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}function markRef(current,workInProgress){var ref=workInProgress.ref;if(current===null&&ref!==null||current!==null&&current.ref!==ref){// Schedule a Ref effect
  workInProgress.flags|=Ref;}}function updateFunctionComponent(current,workInProgress,Component,nextProps,renderLanes){{if(workInProgress.type!==workInProgress.elementType){// Lazy component props can't be validated in createElement
  // because they're only guaranteed to be resolved here.
  var innerPropTypes=Component.propTypes;if(innerPropTypes){checkPropTypes(innerPropTypes,nextProps,// Resolved props
  'prop',getComponentName(Component));}}}var context;{var unmaskedContext=getUnmaskedContext(workInProgress,Component,true);context=getMaskedContext(workInProgress,unmaskedContext);}var nextChildren;prepareToReadContext(workInProgress,renderLanes);{ReactCurrentOwner$1.current=workInProgress;setIsRendering(true);nextChildren=renderWithHooks(current,workInProgress,Component,nextProps,context,renderLanes);if(workInProgress.mode&StrictMode){disableLogs();try{nextChildren=renderWithHooks(current,workInProgress,Component,nextProps,context,renderLanes);}finally{reenableLogs();}}setIsRendering(false);}if(current!==null&&!didReceiveUpdate){bailoutHooks(current,workInProgress,renderLanes);return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}// React DevTools reads this flag.
  workInProgress.flags|=PerformedWork;reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}function updateClassComponent(current,workInProgress,Component,nextProps,renderLanes){{if(workInProgress.type!==workInProgress.elementType){// Lazy component props can't be validated in createElement
  // because they're only guaranteed to be resolved here.
  var innerPropTypes=Component.propTypes;if(innerPropTypes){checkPropTypes(innerPropTypes,nextProps,// Resolved props
  'prop',getComponentName(Component));}}}// Push context providers early to prevent context stack mismatches.
  // During mounting we don't know the child context yet as the instance doesn't exist.
  // We will invalidate the child context in finishClassComponent() right after rendering.
  var hasContext;if(isContextProvider(Component)){hasContext=true;pushContextProvider(workInProgress);}else {hasContext=false;}prepareToReadContext(workInProgress,renderLanes);var instance=workInProgress.stateNode;var shouldUpdate;if(instance===null){if(current!==null){// A class component without an instance only mounts if it suspended
  // inside a non-concurrent tree, in an inconsistent state. We want to
  // treat it like a new mount, even though an empty version of it already
  // committed. Disconnect the alternate pointers.
  current.alternate=null;workInProgress.alternate=null;// Since this is conceptually a new fiber, schedule a Placement effect
  workInProgress.flags|=Placement;}// In the initial pass we might need to construct the instance.
  constructClassInstance(workInProgress,Component,nextProps);mountClassInstance(workInProgress,Component,nextProps,renderLanes);shouldUpdate=true;}else if(current===null){// In a resume, we'll already have an instance we can reuse.
  shouldUpdate=resumeMountClassInstance(workInProgress,Component,nextProps,renderLanes);}else {shouldUpdate=updateClassInstance(current,workInProgress,Component,nextProps,renderLanes);}var nextUnitOfWork=finishClassComponent(current,workInProgress,Component,shouldUpdate,hasContext,renderLanes);{var inst=workInProgress.stateNode;if(shouldUpdate&&inst.props!==nextProps){if(!didWarnAboutReassigningProps){error('It looks like %s is reassigning its own `this.props` while rendering. '+'This is not supported and can lead to confusing bugs.',getComponentName(workInProgress.type)||'a component');}didWarnAboutReassigningProps=true;}}return nextUnitOfWork;}function finishClassComponent(current,workInProgress,Component,shouldUpdate,hasContext,renderLanes){// Refs should update even if shouldComponentUpdate returns false
  markRef(current,workInProgress);var didCaptureError=(workInProgress.flags&DidCapture)!==NoFlags;if(!shouldUpdate&&!didCaptureError){// Context providers should defer to sCU for rendering
  if(hasContext){invalidateContextProvider(workInProgress,Component,false);}return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}var instance=workInProgress.stateNode;// Rerender
  ReactCurrentOwner$1.current=workInProgress;var nextChildren;if(didCaptureError&&typeof Component.getDerivedStateFromError!=='function'){// If we captured an error, but getDerivedStateFromError is not defined,
  // unmount all the children. componentDidCatch will schedule an update to
  // re-render a fallback. This is temporary until we migrate everyone to
  // the new API.
  // TODO: Warn in a future release.
  nextChildren=null;{stopProfilerTimerIfRunning();}}else {{setIsRendering(true);nextChildren=instance.render();if(workInProgress.mode&StrictMode){disableLogs();try{instance.render();}finally{reenableLogs();}}setIsRendering(false);}}// React DevTools reads this flag.
  workInProgress.flags|=PerformedWork;if(current!==null&&didCaptureError){// If we're recovering from an error, reconcile without reusing any of
  // the existing children. Conceptually, the normal children and the children
  // that are shown on error are two different sets, so we shouldn't reuse
  // normal children even if their identities match.
  forceUnmountCurrentAndReconcile(current,workInProgress,nextChildren,renderLanes);}else {reconcileChildren(current,workInProgress,nextChildren,renderLanes);}// Memoize state using the values we just used to render.
  // TODO: Restructure so we never read values from the instance.
  workInProgress.memoizedState=instance.state;// The context might have changed so we need to recalculate it.
  if(hasContext){invalidateContextProvider(workInProgress,Component,true);}return workInProgress.child;}function pushHostRootContext(workInProgress){var root=workInProgress.stateNode;if(root.pendingContext){pushTopLevelContextObject(workInProgress,root.pendingContext,root.pendingContext!==root.context);}else if(root.context){// Should always be set
  pushTopLevelContextObject(workInProgress,root.context,false);}pushHostContainer(workInProgress,root.containerInfo);}function updateHostRoot(current,workInProgress,renderLanes){pushHostRootContext(workInProgress);var updateQueue=workInProgress.updateQueue;if(!(current!==null&&updateQueue!==null)){{throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");}}var nextProps=workInProgress.pendingProps;var prevState=workInProgress.memoizedState;var prevChildren=prevState!==null?prevState.element:null;cloneUpdateQueue(current,workInProgress);processUpdateQueue(workInProgress,nextProps,null,renderLanes);var nextState=workInProgress.memoizedState;// Caution: React DevTools currently depends on this property
  // being called "element".
  var nextChildren=nextState.element;if(nextChildren===prevChildren){resetHydrationState();return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}var root=workInProgress.stateNode;if(root.hydrate&&enterHydrationState(workInProgress)){// If we don't have any current children this might be the first pass.
  // We always try to hydrate. If this isn't a hydration pass there won't
  // be any children to hydrate which is effectively the same thing as
  // not hydrating.
  if(supportsHydration){var mutableSourceEagerHydrationData=root.mutableSourceEagerHydrationData;if(mutableSourceEagerHydrationData!=null){for(var i=0;i<mutableSourceEagerHydrationData.length;i+=2){var mutableSource=mutableSourceEagerHydrationData[i];var version=mutableSourceEagerHydrationData[i+1];setWorkInProgressVersion(mutableSource,version);}}}var child=mountChildFibers(workInProgress,null,nextChildren,renderLanes);workInProgress.child=child;var node=child;while(node){// Mark each child as hydrating. This is a fast path to know whether this
  // tree is part of a hydrating tree. This is used to determine if a child
  // node has fully mounted yet, and for scheduling event replaying.
  // Conceptually this is similar to Placement in that a new subtree is
  // inserted into the React tree here. It just happens to not need DOM
  // mutations because it already exists.
  node.flags=node.flags&~Placement|Hydrating;node=node.sibling;}}else {// Otherwise reset hydration state in case we aborted and resumed another
  // root.
  reconcileChildren(current,workInProgress,nextChildren,renderLanes);resetHydrationState();}return workInProgress.child;}function updateHostComponent(current,workInProgress,renderLanes){pushHostContext(workInProgress);if(current===null){tryToClaimNextHydratableInstance(workInProgress);}var type=workInProgress.type;var nextProps=workInProgress.pendingProps;var prevProps=current!==null?current.memoizedProps:null;var nextChildren=nextProps.children;var isDirectTextChild=shouldSetTextContent(type,nextProps);if(isDirectTextChild){// We special case a direct text child of a host node. This is a common
  // case. We won't handle it as a reified child. We will instead handle
  // this in the host environment that also has access to this prop. That
  // avoids allocating another HostText fiber and traversing it.
  nextChildren=null;}else if(prevProps!==null&&shouldSetTextContent(type,prevProps)){// If we're switching from a direct text child to a normal child, or to
  // empty, we need to schedule the text content to be reset.
  workInProgress.flags|=ContentReset;}markRef(current,workInProgress);reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}function updateHostText(current,workInProgress){if(current===null){tryToClaimNextHydratableInstance(workInProgress);}// Nothing to do here. This is terminal. We'll do the completion step
  // immediately after.
  return null;}function mountLazyComponent(_current,workInProgress,elementType,updateLanes,renderLanes){if(_current!==null){// A lazy component only mounts if it suspended inside a non-
  // concurrent tree, in an inconsistent state. We want to treat it like
  // a new mount, even though an empty version of it already committed.
  // Disconnect the alternate pointers.
  _current.alternate=null;workInProgress.alternate=null;// Since this is conceptually a new fiber, schedule a Placement effect
  workInProgress.flags|=Placement;}var props=workInProgress.pendingProps;var lazyComponent=elementType;var payload=lazyComponent._payload;var init=lazyComponent._init;var Component=init(payload);// Store the unwrapped component in the type.
  workInProgress.type=Component;var resolvedTag=workInProgress.tag=resolveLazyComponentTag(Component);var resolvedProps=resolveDefaultProps(Component,props);var child;switch(resolvedTag){case FunctionComponent:{{validateFunctionComponentInDev(workInProgress,Component);workInProgress.type=Component=resolveFunctionForHotReloading(Component);}child=updateFunctionComponent(null,workInProgress,Component,resolvedProps,renderLanes);return child;}case ClassComponent:{{workInProgress.type=Component=resolveClassForHotReloading(Component);}child=updateClassComponent(null,workInProgress,Component,resolvedProps,renderLanes);return child;}case ForwardRef:{{workInProgress.type=Component=resolveForwardRefForHotReloading(Component);}child=updateForwardRef(null,workInProgress,Component,resolvedProps,renderLanes);return child;}case MemoComponent:{{if(workInProgress.type!==workInProgress.elementType){var outerPropTypes=Component.propTypes;if(outerPropTypes){checkPropTypes(outerPropTypes,resolvedProps,// Resolved for outer only
  'prop',getComponentName(Component));}}}child=updateMemoComponent(null,workInProgress,Component,resolveDefaultProps(Component.type,resolvedProps),// The inner type can have defaults too
  updateLanes,renderLanes);return child;}}var hint='';{if(Component!==null&&_typeof(Component)==='object'&&Component.$$typeof===REACT_LAZY_TYPE){hint=' Did you wrap a component in React.lazy() more than once?';}}// This message intentionally doesn't mention ForwardRef or MemoComponent
  // because the fact that it's a separate type of work is an
  // implementation detail.
  {{throw Error("Element type is invalid. Received a promise that resolves to: "+Component+". Lazy element type must resolve to a class or function."+hint);}}}function mountIncompleteClassComponent(_current,workInProgress,Component,nextProps,renderLanes){if(_current!==null){// An incomplete component only mounts if it suspended inside a non-
  // concurrent tree, in an inconsistent state. We want to treat it like
  // a new mount, even though an empty version of it already committed.
  // Disconnect the alternate pointers.
  _current.alternate=null;workInProgress.alternate=null;// Since this is conceptually a new fiber, schedule a Placement effect
  workInProgress.flags|=Placement;}// Promote the fiber to a class and try rendering again.
  workInProgress.tag=ClassComponent;// The rest of this function is a fork of `updateClassComponent`
  // Push context providers early to prevent context stack mismatches.
  // During mounting we don't know the child context yet as the instance doesn't exist.
  // We will invalidate the child context in finishClassComponent() right after rendering.
  var hasContext;if(isContextProvider(Component)){hasContext=true;pushContextProvider(workInProgress);}else {hasContext=false;}prepareToReadContext(workInProgress,renderLanes);constructClassInstance(workInProgress,Component,nextProps);mountClassInstance(workInProgress,Component,nextProps,renderLanes);return finishClassComponent(null,workInProgress,Component,true,hasContext,renderLanes);}function mountIndeterminateComponent(_current,workInProgress,Component,renderLanes){if(_current!==null){// An indeterminate component only mounts if it suspended inside a non-
  // concurrent tree, in an inconsistent state. We want to treat it like
  // a new mount, even though an empty version of it already committed.
  // Disconnect the alternate pointers.
  _current.alternate=null;workInProgress.alternate=null;// Since this is conceptually a new fiber, schedule a Placement effect
  workInProgress.flags|=Placement;}var props=workInProgress.pendingProps;var context;{var unmaskedContext=getUnmaskedContext(workInProgress,Component,false);context=getMaskedContext(workInProgress,unmaskedContext);}prepareToReadContext(workInProgress,renderLanes);var value;{if(Component.prototype&&typeof Component.prototype.render==='function'){var componentName=getComponentName(Component)||'Unknown';if(!didWarnAboutBadClass[componentName]){error("The <%s /> component appears to have a render method, but doesn't extend React.Component. "+'This is likely to cause errors. Change %s to extend React.Component instead.',componentName,componentName);didWarnAboutBadClass[componentName]=true;}}if(workInProgress.mode&StrictMode){ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress,null);}setIsRendering(true);ReactCurrentOwner$1.current=workInProgress;value=renderWithHooks(null,workInProgress,Component,props,context,renderLanes);setIsRendering(false);}// React DevTools reads this flag.
  workInProgress.flags|=PerformedWork;{// Support for module components is deprecated and is removed behind a flag.
  // Whether or not it would crash later, we want to show a good message in DEV first.
  if(_typeof(value)==='object'&&value!==null&&typeof value.render==='function'&&value.$$typeof===undefined){var _componentName=getComponentName(Component)||'Unknown';if(!didWarnAboutModulePatternComponent[_componentName]){error('The <%s /> component appears to be a function component that returns a class instance. '+'Change %s to a class that extends React.Component instead. '+"If you can't use a class try assigning the prototype on the function as a workaround. "+"`%s.prototype = React.Component.prototype`. Don't use an arrow function since it "+'cannot be called with `new` by React.',_componentName,_componentName,_componentName);didWarnAboutModulePatternComponent[_componentName]=true;}}}if(// Run these checks in production only if the flag is off.
  // Eventually we'll delete this branch altogether.
  _typeof(value)==='object'&&value!==null&&typeof value.render==='function'&&value.$$typeof===undefined){{var _componentName2=getComponentName(Component)||'Unknown';if(!didWarnAboutModulePatternComponent[_componentName2]){error('The <%s /> component appears to be a function component that returns a class instance. '+'Change %s to a class that extends React.Component instead. '+"If you can't use a class try assigning the prototype on the function as a workaround. "+"`%s.prototype = React.Component.prototype`. Don't use an arrow function since it "+'cannot be called with `new` by React.',_componentName2,_componentName2,_componentName2);didWarnAboutModulePatternComponent[_componentName2]=true;}}// Proceed under the assumption that this is a class instance
  workInProgress.tag=ClassComponent;// Throw out any hooks that were used.
  workInProgress.memoizedState=null;workInProgress.updateQueue=null;// Push context providers early to prevent context stack mismatches.
  // During mounting we don't know the child context yet as the instance doesn't exist.
  // We will invalidate the child context in finishClassComponent() right after rendering.
  var hasContext=false;if(isContextProvider(Component)){hasContext=true;pushContextProvider(workInProgress);}else {hasContext=false;}workInProgress.memoizedState=value.state!==null&&value.state!==undefined?value.state:null;initializeUpdateQueue(workInProgress);var getDerivedStateFromProps=Component.getDerivedStateFromProps;if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,Component,getDerivedStateFromProps,props);}adoptClassInstance(workInProgress,value);mountClassInstance(workInProgress,Component,props,renderLanes);return finishClassComponent(null,workInProgress,Component,true,hasContext,renderLanes);}else {// Proceed under the assumption that this is a function component
  workInProgress.tag=FunctionComponent;{if(workInProgress.mode&StrictMode){disableLogs();try{value=renderWithHooks(null,workInProgress,Component,props,context,renderLanes);}finally{reenableLogs();}}}reconcileChildren(null,workInProgress,value,renderLanes);{validateFunctionComponentInDev(workInProgress,Component);}return workInProgress.child;}}function validateFunctionComponentInDev(workInProgress,Component){{if(Component){if(Component.childContextTypes){error('%s(...): childContextTypes cannot be defined on a function component.',Component.displayName||Component.name||'Component');}}if(workInProgress.ref!==null){var info='';var ownerName=getCurrentFiberOwnerNameInDevOrNull();if(ownerName){info+='\n\nCheck the render method of `'+ownerName+'`.';}var warningKey=ownerName||workInProgress._debugID||'';var debugSource=workInProgress._debugSource;if(debugSource){warningKey=debugSource.fileName+':'+debugSource.lineNumber;}if(!didWarnAboutFunctionRefs[warningKey]){didWarnAboutFunctionRefs[warningKey]=true;error('Function components cannot be given refs. '+'Attempts to access this ref will fail. '+'Did you mean to use React.forwardRef()?%s',info);}}if(typeof Component.getDerivedStateFromProps==='function'){var _componentName3=getComponentName(Component)||'Unknown';if(!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]){error('%s: Function components do not support getDerivedStateFromProps.',_componentName3);didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]=true;}}if(_typeof(Component.contextType)==='object'&&Component.contextType!==null){var _componentName4=getComponentName(Component)||'Unknown';if(!didWarnAboutContextTypeOnFunctionComponent[_componentName4]){error('%s: Function components do not support contextType.',_componentName4);didWarnAboutContextTypeOnFunctionComponent[_componentName4]=true;}}}}var SUSPENDED_MARKER={dehydrated:null,retryLane:NoLane};function mountSuspenseOffscreenState(renderLanes){return {baseLanes:renderLanes};}function updateSuspenseOffscreenState(prevOffscreenState,renderLanes){return {baseLanes:mergeLanes(prevOffscreenState.baseLanes,renderLanes)};}// TODO: Probably should inline this back
  function shouldRemainOnFallback(suspenseContext,current,workInProgress,renderLanes){// If we're already showing a fallback, there are cases where we need to
  // remain on that fallback regardless of whether the content has resolved.
  // For example, SuspenseList coordinates when nested content appears.
  if(current!==null){var suspenseState=current.memoizedState;if(suspenseState===null){// Currently showing content. Don't hide it, even if ForceSuspenseFallack
  // is true. More precise name might be "ForceRemainSuspenseFallback".
  // Note: This is a factoring smell. Can't remain on a fallback if there's
  // no fallback to remain on.
  return false;}}// Not currently showing content. Consult the Suspense context.
  return hasSuspenseContext(suspenseContext,ForceSuspenseFallback);}function getRemainingWorkInPrimaryTree(current,renderLanes){// TODO: Should not remove render lanes that were pinged during this render
  return removeLanes(current.childLanes,renderLanes);}function updateSuspenseComponent(current,workInProgress,renderLanes){var nextProps=workInProgress.pendingProps;// This is used by DevTools to force a boundary to suspend.
  {if(shouldSuspend(workInProgress)){workInProgress.flags|=DidCapture;}}var suspenseContext=suspenseStackCursor.current;var showFallback=false;var didSuspend=(workInProgress.flags&DidCapture)!==NoFlags;if(didSuspend||shouldRemainOnFallback(suspenseContext,current)){// Something in this boundary's subtree already suspended. Switch to
  // rendering the fallback children.
  showFallback=true;workInProgress.flags&=~DidCapture;}else {// Attempting the main content
  if(current===null||current.memoizedState!==null){// This is a new mount or this boundary is already showing a fallback state.
  // Mark this subtree context as having at least one invisible parent that could
  // handle the fallback state.
  // Boundaries without fallbacks or should be avoided are not considered since
  // they cannot handle preferred fallback states.
  if(nextProps.fallback!==undefined&&nextProps.unstable_avoidThisFallback!==true){suspenseContext=addSubtreeSuspenseContext(suspenseContext,InvisibleParentSuspenseContext);}}}suspenseContext=setDefaultShallowSuspenseContext(suspenseContext);pushSuspenseContext(workInProgress,suspenseContext);// OK, the next part is confusing. We're about to reconcile the Suspense
  // boundary's children. This involves some custom reconcilation logic. Two
  // main reasons this is so complicated.
  //
  // First, Legacy Mode has different semantics for backwards compatibility. The
  // primary tree will commit in an inconsistent state, so when we do the
  // second pass to render the fallback, we do some exceedingly, uh, clever
  // hacks to make that not totally break. Like transferring effects and
  // deletions from hidden tree. In Concurrent Mode, it's much simpler,
  // because we bailout on the primary tree completely and leave it in its old
  // state, no effects. Same as what we do for Offscreen (except that
  // Offscreen doesn't have the first render pass).
  //
  // Second is hydration. During hydration, the Suspense fiber has a slightly
  // different layout, where the child points to a dehydrated fragment, which
  // contains the DOM rendered by the server.
  //
  // Third, even if you set all that aside, Suspense is like error boundaries in
  // that we first we try to render one tree, and if that fails, we render again
  // and switch to a different tree. Like a try/catch block. So we have to track
  // which branch we're currently rendering. Ideally we would model this using
  // a stack.
  if(current===null){// Initial mount
  // If we're currently hydrating, try to hydrate this boundary.
  // But only if this has a fallback.
  if(nextProps.fallback!==undefined){tryToClaimNextHydratableInstance(workInProgress);// This could've been a dehydrated suspense component.
  }var nextPrimaryChildren=nextProps.children;var nextFallbackChildren=nextProps.fallback;if(showFallback){var fallbackFragment=mountSuspenseFallbackChildren(workInProgress,nextPrimaryChildren,nextFallbackChildren,renderLanes);var primaryChildFragment=workInProgress.child;primaryChildFragment.memoizedState=mountSuspenseOffscreenState(renderLanes);workInProgress.memoizedState=SUSPENDED_MARKER;return fallbackFragment;}else if(typeof nextProps.unstable_expectedLoadTime==='number'){// This is a CPU-bound tree. Skip this tree and show a placeholder to
  // unblock the surrounding content. Then immediately retry after the
  // initial commit.
  var _fallbackFragment=mountSuspenseFallbackChildren(workInProgress,nextPrimaryChildren,nextFallbackChildren,renderLanes);var _primaryChildFragment=workInProgress.child;_primaryChildFragment.memoizedState=mountSuspenseOffscreenState(renderLanes);workInProgress.memoizedState=SUSPENDED_MARKER;// Since nothing actually suspended, there will nothing to ping this to
  // get it started back up to attempt the next item. While in terms of
  // priority this work has the same priority as this current render, it's
  // not part of the same transition once the transition has committed. If
  // it's sync, we still want to yield so that it can be painted.
  // Conceptually, this is really the same as pinging. We can use any
  // RetryLane even if it's the one currently rendering since we're leaving
  // it behind on this node.
  workInProgress.lanes=SomeRetryLane;{markSpawnedWork(SomeRetryLane);}return _fallbackFragment;}else {return mountSuspensePrimaryChildren(workInProgress,nextPrimaryChildren,renderLanes);}}else {// This is an update.
  // If the current fiber has a SuspenseState, that means it's already showing
  // a fallback.
  var prevState=current.memoizedState;if(prevState!==null){if(showFallback){var _nextFallbackChildren2=nextProps.fallback;var _nextPrimaryChildren2=nextProps.children;var _fallbackChildFragment=updateSuspenseFallbackChildren(current,workInProgress,_nextPrimaryChildren2,_nextFallbackChildren2,renderLanes);var _primaryChildFragment3=workInProgress.child;var prevOffscreenState=current.child.memoizedState;_primaryChildFragment3.memoizedState=prevOffscreenState===null?mountSuspenseOffscreenState(renderLanes):updateSuspenseOffscreenState(prevOffscreenState,renderLanes);_primaryChildFragment3.childLanes=getRemainingWorkInPrimaryTree(current,renderLanes);workInProgress.memoizedState=SUSPENDED_MARKER;return _fallbackChildFragment;}else {var _nextPrimaryChildren3=nextProps.children;var _primaryChildFragment4=updateSuspensePrimaryChildren(current,workInProgress,_nextPrimaryChildren3,renderLanes);workInProgress.memoizedState=null;return _primaryChildFragment4;}}else {// The current tree is not already showing a fallback.
  if(showFallback){// Timed out.
  var _nextFallbackChildren3=nextProps.fallback;var _nextPrimaryChildren4=nextProps.children;var _fallbackChildFragment2=updateSuspenseFallbackChildren(current,workInProgress,_nextPrimaryChildren4,_nextFallbackChildren3,renderLanes);var _primaryChildFragment5=workInProgress.child;var _prevOffscreenState=current.child.memoizedState;_primaryChildFragment5.memoizedState=_prevOffscreenState===null?mountSuspenseOffscreenState(renderLanes):updateSuspenseOffscreenState(_prevOffscreenState,renderLanes);_primaryChildFragment5.childLanes=getRemainingWorkInPrimaryTree(current,renderLanes);// Skip the primary children, and continue working on the
  // fallback children.
  workInProgress.memoizedState=SUSPENDED_MARKER;return _fallbackChildFragment2;}else {// Still haven't timed out. Continue rendering the children, like we
  // normally do.
  var _nextPrimaryChildren5=nextProps.children;var _primaryChildFragment6=updateSuspensePrimaryChildren(current,workInProgress,_nextPrimaryChildren5,renderLanes);workInProgress.memoizedState=null;return _primaryChildFragment6;}}}}function mountSuspensePrimaryChildren(workInProgress,primaryChildren,renderLanes){var mode=workInProgress.mode;var primaryChildProps={mode:'visible',children:primaryChildren};var primaryChildFragment=createFiberFromOffscreen(primaryChildProps,mode,renderLanes,null);primaryChildFragment["return"]=workInProgress;workInProgress.child=primaryChildFragment;return primaryChildFragment;}function mountSuspenseFallbackChildren(workInProgress,primaryChildren,fallbackChildren,renderLanes){var mode=workInProgress.mode;var progressedPrimaryFragment=workInProgress.child;var primaryChildProps={mode:'hidden',children:primaryChildren};var primaryChildFragment;var fallbackChildFragment;if((mode&BlockingMode)===NoMode&&progressedPrimaryFragment!==null){// In legacy mode, we commit the primary tree as if it successfully
  // completed, even though it's in an inconsistent state.
  primaryChildFragment=progressedPrimaryFragment;primaryChildFragment.childLanes=NoLanes;primaryChildFragment.pendingProps=primaryChildProps;if(workInProgress.mode&ProfileMode){// Reset the durations from the first pass so they aren't included in the
  // final amounts. This seems counterintuitive, since we're intentionally
  // not measuring part of the render phase, but this makes it match what we
  // do in Concurrent Mode.
  primaryChildFragment.actualDuration=0;primaryChildFragment.actualStartTime=-1;primaryChildFragment.selfBaseDuration=0;primaryChildFragment.treeBaseDuration=0;}fallbackChildFragment=createFiberFromFragment(fallbackChildren,mode,renderLanes,null);}else {primaryChildFragment=createFiberFromOffscreen(primaryChildProps,mode,NoLanes,null);fallbackChildFragment=createFiberFromFragment(fallbackChildren,mode,renderLanes,null);}primaryChildFragment["return"]=workInProgress;fallbackChildFragment["return"]=workInProgress;primaryChildFragment.sibling=fallbackChildFragment;workInProgress.child=primaryChildFragment;return fallbackChildFragment;}function createWorkInProgressOffscreenFiber(current,offscreenProps){// The props argument to `createWorkInProgress` is `any` typed, so we use this
  // wrapper function to constrain it.
  return createWorkInProgress(current,offscreenProps);}function updateSuspensePrimaryChildren(current,workInProgress,primaryChildren,renderLanes){var currentPrimaryChildFragment=current.child;var currentFallbackChildFragment=currentPrimaryChildFragment.sibling;var primaryChildFragment=createWorkInProgressOffscreenFiber(currentPrimaryChildFragment,{mode:'visible',children:primaryChildren});if((workInProgress.mode&BlockingMode)===NoMode){primaryChildFragment.lanes=renderLanes;}primaryChildFragment["return"]=workInProgress;primaryChildFragment.sibling=null;if(currentFallbackChildFragment!==null){// Delete the fallback child fragment
  currentFallbackChildFragment.nextEffect=null;currentFallbackChildFragment.flags=Deletion;workInProgress.firstEffect=workInProgress.lastEffect=currentFallbackChildFragment;}workInProgress.child=primaryChildFragment;return primaryChildFragment;}function updateSuspenseFallbackChildren(current,workInProgress,primaryChildren,fallbackChildren,renderLanes){var mode=workInProgress.mode;var currentPrimaryChildFragment=current.child;var currentFallbackChildFragment=currentPrimaryChildFragment.sibling;var primaryChildProps={mode:'hidden',children:primaryChildren};var primaryChildFragment;if(// In legacy mode, we commit the primary tree as if it successfully
  // completed, even though it's in an inconsistent state.
  (mode&BlockingMode)===NoMode&&// Make sure we're on the second pass, i.e. the primary child fragment was
  // already cloned. In legacy mode, the only case where this isn't true is
  // when DevTools forces us to display a fallback; we skip the first render
  // pass entirely and go straight to rendering the fallback. (In Concurrent
  // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
  // only codepath.)
  workInProgress.child!==currentPrimaryChildFragment){var progressedPrimaryFragment=workInProgress.child;primaryChildFragment=progressedPrimaryFragment;primaryChildFragment.childLanes=NoLanes;primaryChildFragment.pendingProps=primaryChildProps;if(workInProgress.mode&ProfileMode){// Reset the durations from the first pass so they aren't included in the
  // final amounts. This seems counterintuitive, since we're intentionally
  // not measuring part of the render phase, but this makes it match what we
  // do in Concurrent Mode.
  primaryChildFragment.actualDuration=0;primaryChildFragment.actualStartTime=-1;primaryChildFragment.selfBaseDuration=currentPrimaryChildFragment.selfBaseDuration;primaryChildFragment.treeBaseDuration=currentPrimaryChildFragment.treeBaseDuration;}// The fallback fiber was added as a deletion effect during the first pass.
  // However, since we're going to remain on the fallback, we no longer want
  // to delete it. So we need to remove it from the list. Deletions are stored
  // on the same list as effects. We want to keep the effects from the primary
  // tree. So we copy the primary child fragment's effect list, which does not
  // include the fallback deletion effect.
  var progressedLastEffect=primaryChildFragment.lastEffect;if(progressedLastEffect!==null){workInProgress.firstEffect=primaryChildFragment.firstEffect;workInProgress.lastEffect=progressedLastEffect;progressedLastEffect.nextEffect=null;}else {// TODO: Reset this somewhere else? Lol legacy mode is so weird.
  workInProgress.firstEffect=workInProgress.lastEffect=null;}}else {primaryChildFragment=createWorkInProgressOffscreenFiber(currentPrimaryChildFragment,primaryChildProps);}var fallbackChildFragment;if(currentFallbackChildFragment!==null){fallbackChildFragment=createWorkInProgress(currentFallbackChildFragment,fallbackChildren);}else {fallbackChildFragment=createFiberFromFragment(fallbackChildren,mode,renderLanes,null);// Needs a placement effect because the parent (the Suspense boundary) already
  // mounted but this is a new fiber.
  fallbackChildFragment.flags|=Placement;}fallbackChildFragment["return"]=workInProgress;primaryChildFragment["return"]=workInProgress;primaryChildFragment.sibling=fallbackChildFragment;workInProgress.child=primaryChildFragment;return fallbackChildFragment;}function scheduleWorkOnFiber(fiber,renderLanes){fiber.lanes=mergeLanes(fiber.lanes,renderLanes);var alternate=fiber.alternate;if(alternate!==null){alternate.lanes=mergeLanes(alternate.lanes,renderLanes);}scheduleWorkOnParentPath(fiber["return"],renderLanes);}function propagateSuspenseContextChange(workInProgress,firstChild,renderLanes){// Mark any Suspense boundaries with fallbacks as having work to do.
  // If they were previously forced into fallbacks, they may now be able
  // to unblock.
  var node=firstChild;while(node!==null){if(node.tag===SuspenseComponent){var state=node.memoizedState;if(state!==null){scheduleWorkOnFiber(node,renderLanes);}}else if(node.tag===SuspenseListComponent){// If the tail is hidden there might not be an Suspense boundaries
  // to schedule work on. In this case we have to schedule it on the
  // list itself.
  // We don't have to traverse to the children of the list since
  // the list will propagate the change when it rerenders.
  scheduleWorkOnFiber(node,renderLanes);}else if(node.child!==null){node.child["return"]=node;node=node.child;continue;}if(node===workInProgress){return;}while(node.sibling===null){if(node["return"]===null||node["return"]===workInProgress){return;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}}function findLastContentRow(firstChild){// This is going to find the last row among these children that is already
  // showing content on the screen, as opposed to being in fallback state or
  // new. If a row has multiple Suspense boundaries, any of them being in the
  // fallback state, counts as the whole row being in a fallback state.
  // Note that the "rows" will be workInProgress, but any nested children
  // will still be current since we haven't rendered them yet. The mounted
  // order may not be the same as the new order. We use the new order.
  var row=firstChild;var lastContentRow=null;while(row!==null){var currentRow=row.alternate;// New rows can't be content rows.
  if(currentRow!==null&&findFirstSuspended(currentRow)===null){lastContentRow=row;}row=row.sibling;}return lastContentRow;}function validateRevealOrder(revealOrder){{if(revealOrder!==undefined&&revealOrder!=='forwards'&&revealOrder!=='backwards'&&revealOrder!=='together'&&!didWarnAboutRevealOrder[revealOrder]){didWarnAboutRevealOrder[revealOrder]=true;if(typeof revealOrder==='string'){switch(revealOrder.toLowerCase()){case'together':case'forwards':case'backwards':{error('"%s" is not a valid value for revealOrder on <SuspenseList />. '+'Use lowercase "%s" instead.',revealOrder,revealOrder.toLowerCase());break;}case'forward':case'backward':{error('"%s" is not a valid value for revealOrder on <SuspenseList />. '+'React uses the -s suffix in the spelling. Use "%ss" instead.',revealOrder,revealOrder.toLowerCase());break;}default:error('"%s" is not a supported revealOrder on <SuspenseList />. '+'Did you mean "together", "forwards" or "backwards"?',revealOrder);break;}}else {error('%s is not a supported value for revealOrder on <SuspenseList />. '+'Did you mean "together", "forwards" or "backwards"?',revealOrder);}}}}function validateTailOptions(tailMode,revealOrder){{if(tailMode!==undefined&&!didWarnAboutTailOptions[tailMode]){if(tailMode!=='collapsed'&&tailMode!=='hidden'){didWarnAboutTailOptions[tailMode]=true;error('"%s" is not a supported value for tail on <SuspenseList />. '+'Did you mean "collapsed" or "hidden"?',tailMode);}else if(revealOrder!=='forwards'&&revealOrder!=='backwards'){didWarnAboutTailOptions[tailMode]=true;error('<SuspenseList tail="%s" /> is only valid if revealOrder is '+'"forwards" or "backwards". '+'Did you mean to specify revealOrder="forwards"?',tailMode);}}}}function validateSuspenseListNestedChild(childSlot,index){{var isArray=Array.isArray(childSlot);var isIterable=!isArray&&typeof getIteratorFn(childSlot)==='function';if(isArray||isIterable){var type=isArray?'array':'iterable';error('A nested %s was passed to row #%s in <SuspenseList />. Wrap it in '+'an additional SuspenseList to configure its revealOrder: '+'<SuspenseList revealOrder=...> ... '+'<SuspenseList revealOrder=...>{%s}</SuspenseList> ... '+'</SuspenseList>',type,index,type);return false;}}return true;}function validateSuspenseListChildren(children,revealOrder){{if((revealOrder==='forwards'||revealOrder==='backwards')&&children!==undefined&&children!==null&&children!==false){if(Array.isArray(children)){for(var i=0;i<children.length;i++){if(!validateSuspenseListNestedChild(children[i],i)){return;}}}else {var iteratorFn=getIteratorFn(children);if(typeof iteratorFn==='function'){var childrenIterator=iteratorFn.call(children);if(childrenIterator){var step=childrenIterator.next();var _i=0;for(;!step.done;step=childrenIterator.next()){if(!validateSuspenseListNestedChild(step.value,_i)){return;}_i++;}}}else {error('A single row was passed to a <SuspenseList revealOrder="%s" />. '+'This is not useful since it needs multiple rows. '+'Did you mean to pass multiple children or an array?',revealOrder);}}}}}function initSuspenseListRenderState(workInProgress,isBackwards,tail,lastContentRow,tailMode,lastEffectBeforeRendering){var renderState=workInProgress.memoizedState;if(renderState===null){workInProgress.memoizedState={isBackwards:isBackwards,rendering:null,renderingStartTime:0,last:lastContentRow,tail:tail,tailMode:tailMode,lastEffect:lastEffectBeforeRendering};}else {// We can reuse the existing object from previous renders.
  renderState.isBackwards=isBackwards;renderState.rendering=null;renderState.renderingStartTime=0;renderState.last=lastContentRow;renderState.tail=tail;renderState.tailMode=tailMode;renderState.lastEffect=lastEffectBeforeRendering;}}// This can end up rendering this component multiple passes.
  // The first pass splits the children fibers into two sets. A head and tail.
  // We first render the head. If anything is in fallback state, we do another
  // pass through beginWork to rerender all children (including the tail) with
  // the force suspend context. If the first render didn't have anything in
  // in fallback state. Then we render each row in the tail one-by-one.
  // That happens in the completeWork phase without going back to beginWork.
  function updateSuspenseListComponent(current,workInProgress,renderLanes){var nextProps=workInProgress.pendingProps;var revealOrder=nextProps.revealOrder;var tailMode=nextProps.tail;var newChildren=nextProps.children;validateRevealOrder(revealOrder);validateTailOptions(tailMode,revealOrder);validateSuspenseListChildren(newChildren,revealOrder);reconcileChildren(current,workInProgress,newChildren,renderLanes);var suspenseContext=suspenseStackCursor.current;var shouldForceFallback=hasSuspenseContext(suspenseContext,ForceSuspenseFallback);if(shouldForceFallback){suspenseContext=setShallowSuspenseContext(suspenseContext,ForceSuspenseFallback);workInProgress.flags|=DidCapture;}else {var didSuspendBefore=current!==null&&(current.flags&DidCapture)!==NoFlags;if(didSuspendBefore){// If we previously forced a fallback, we need to schedule work
  // on any nested boundaries to let them know to try to render
  // again. This is the same as context updating.
  propagateSuspenseContextChange(workInProgress,workInProgress.child,renderLanes);}suspenseContext=setDefaultShallowSuspenseContext(suspenseContext);}pushSuspenseContext(workInProgress,suspenseContext);if((workInProgress.mode&BlockingMode)===NoMode){// In legacy mode, SuspenseList doesn't work so we just
  // use make it a noop by treating it as the default revealOrder.
  workInProgress.memoizedState=null;}else {switch(revealOrder){case'forwards':{var lastContentRow=findLastContentRow(workInProgress.child);var tail;if(lastContentRow===null){// The whole list is part of the tail.
  // TODO: We could fast path by just rendering the tail now.
  tail=workInProgress.child;workInProgress.child=null;}else {// Disconnect the tail rows after the content row.
  // We're going to render them separately later.
  tail=lastContentRow.sibling;lastContentRow.sibling=null;}initSuspenseListRenderState(workInProgress,false,// isBackwards
  tail,lastContentRow,tailMode,workInProgress.lastEffect);break;}case'backwards':{// We're going to find the first row that has existing content.
  // At the same time we're going to reverse the list of everything
  // we pass in the meantime. That's going to be our tail in reverse
  // order.
  var _tail=null;var row=workInProgress.child;workInProgress.child=null;while(row!==null){var currentRow=row.alternate;// New rows can't be content rows.
  if(currentRow!==null&&findFirstSuspended(currentRow)===null){// This is the beginning of the main content.
  workInProgress.child=row;break;}var nextRow=row.sibling;row.sibling=_tail;_tail=row;row=nextRow;}// TODO: If workInProgress.child is null, we can continue on the tail immediately.
  initSuspenseListRenderState(workInProgress,true,// isBackwards
  _tail,null,// last
  tailMode,workInProgress.lastEffect);break;}case'together':{initSuspenseListRenderState(workInProgress,false,// isBackwards
  null,// tail
  null,// last
  undefined,workInProgress.lastEffect);break;}default:{// The default reveal order is the same as not having
  // a boundary.
  workInProgress.memoizedState=null;}}}return workInProgress.child;}function updatePortalComponent(current,workInProgress,renderLanes){pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);var nextChildren=workInProgress.pendingProps;if(current===null){// Portals are special because we don't append the children during mount
  // but at commit. Therefore we need to track insertions which the normal
  // flow doesn't do during mount. This doesn't happen at the root because
  // the root always starts with a "current" with a null child.
  // TODO: Consider unifying this with how the root works.
  workInProgress.child=reconcileChildFibers(workInProgress,null,nextChildren,renderLanes);}else {reconcileChildren(current,workInProgress,nextChildren,renderLanes);}return workInProgress.child;}var hasWarnedAboutUsingNoValuePropOnContextProvider=false;function updateContextProvider(current,workInProgress,renderLanes){var providerType=workInProgress.type;var context=providerType._context;var newProps=workInProgress.pendingProps;var oldProps=workInProgress.memoizedProps;var newValue=newProps.value;{if(!('value'in newProps)){if(!hasWarnedAboutUsingNoValuePropOnContextProvider){hasWarnedAboutUsingNoValuePropOnContextProvider=true;error('The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?');}}var providerPropTypes=workInProgress.type.propTypes;if(providerPropTypes){checkPropTypes(providerPropTypes,newProps,'prop','Context.Provider');}}pushProvider(workInProgress,newValue);if(oldProps!==null){var oldValue=oldProps.value;var changedBits=calculateChangedBits(context,newValue,oldValue);if(changedBits===0){// No change. Bailout early if children are the same.
  if(oldProps.children===newProps.children&&!hasContextChanged()){return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}}else {// The context value changed. Search for matching consumers and schedule
  // them to update.
  propagateContextChange(workInProgress,context,changedBits,renderLanes);}}var newChildren=newProps.children;reconcileChildren(current,workInProgress,newChildren,renderLanes);return workInProgress.child;}var hasWarnedAboutUsingContextAsConsumer=false;function updateContextConsumer(current,workInProgress,renderLanes){var context=workInProgress.type;// The logic below for Context differs depending on PROD or DEV mode. In
  // DEV mode, we create a separate object for Context.Consumer that acts
  // like a proxy to Context. This proxy object adds unnecessary code in PROD
  // so we use the old behaviour (Context.Consumer references Context) to
  // reduce size and overhead. The separate object references context via
  // a property called "_context", which also gives us the ability to check
  // in DEV mode if this property exists or not and warn if it does not.
  {if(context._context===undefined){// This may be because it's a Context (rather than a Consumer).
  // Or it may be because it's older React where they're the same thing.
  // We only want to warn if we're sure it's a new React.
  if(context!==context.Consumer){if(!hasWarnedAboutUsingContextAsConsumer){hasWarnedAboutUsingContextAsConsumer=true;error('Rendering <Context> directly is not supported and will be removed in '+'a future major release. Did you mean to render <Context.Consumer> instead?');}}}else {context=context._context;}}var newProps=workInProgress.pendingProps;var render=newProps.children;{if(typeof render!=='function'){error('A context consumer was rendered with multiple children, or a child '+"that isn't a function. A context consumer expects a single child "+'that is a function. If you did pass a function, make sure there '+'is no trailing or leading whitespace around it.');}}prepareToReadContext(workInProgress,renderLanes);var newValue=_readContext(context,newProps.unstable_observedBits);var newChildren;{ReactCurrentOwner$1.current=workInProgress;setIsRendering(true);newChildren=render(newValue);setIsRendering(false);}// React DevTools reads this flag.
  workInProgress.flags|=PerformedWork;reconcileChildren(current,workInProgress,newChildren,renderLanes);return workInProgress.child;}function markWorkInProgressReceivedUpdate(){didReceiveUpdate=true;}function bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes){if(current!==null){// Reuse previous dependencies
  workInProgress.dependencies=current.dependencies;}{// Don't update "base" render times for bailouts.
  stopProfilerTimerIfRunning();}markSkippedUpdateLanes(workInProgress.lanes);// Check if the children have any pending work.
  if(!includesSomeLane(renderLanes,workInProgress.childLanes)){// The children don't have any work either. We can skip them.
  // TODO: Once we add back resuming, we should check if the children are
  // a work-in-progress set. If so, we need to transfer their effects.
  return null;}else {// This fiber doesn't have work, but its subtree does. Clone the child
  // fibers and continue.
  cloneChildFibers(current,workInProgress);return workInProgress.child;}}function remountFiber(current,oldWorkInProgress,newWorkInProgress){{var returnFiber=oldWorkInProgress["return"];if(returnFiber===null){throw new Error('Cannot swap the root fiber.');}// Disconnect from the old current.
  // It will get deleted.
  current.alternate=null;oldWorkInProgress.alternate=null;// Connect to the new tree.
  newWorkInProgress.index=oldWorkInProgress.index;newWorkInProgress.sibling=oldWorkInProgress.sibling;newWorkInProgress["return"]=oldWorkInProgress["return"];newWorkInProgress.ref=oldWorkInProgress.ref;// Replace the child/sibling pointers above it.
  if(oldWorkInProgress===returnFiber.child){returnFiber.child=newWorkInProgress;}else {var prevSibling=returnFiber.child;if(prevSibling===null){throw new Error('Expected parent to have a child.');}while(prevSibling.sibling!==oldWorkInProgress){prevSibling=prevSibling.sibling;if(prevSibling===null){throw new Error('Expected to find the previous sibling.');}}prevSibling.sibling=newWorkInProgress;}// Delete the old fiber and place the new one.
  // Since the old fiber is disconnected, we have to schedule it manually.
  var last=returnFiber.lastEffect;if(last!==null){last.nextEffect=current;returnFiber.lastEffect=current;}else {returnFiber.firstEffect=returnFiber.lastEffect=current;}current.nextEffect=null;current.flags=Deletion;newWorkInProgress.flags|=Placement;// Restart work from the new fiber.
  return newWorkInProgress;}}function beginWork(current,workInProgress,renderLanes){var updateLanes=workInProgress.lanes;{if(workInProgress._debugNeedsRemount&&current!==null){// This will restart the begin phase with a new fiber.
  return remountFiber(current,workInProgress,createFiberFromTypeAndProps(workInProgress.type,workInProgress.key,workInProgress.pendingProps,workInProgress._debugOwner||null,workInProgress.mode,workInProgress.lanes));}}if(current!==null){var oldProps=current.memoizedProps;var newProps=workInProgress.pendingProps;if(oldProps!==newProps||hasContextChanged()||// Force a re-render if the implementation changed due to hot reload:
  workInProgress.type!==current.type){// If props or context changed, mark the fiber as having performed work.
  // This may be unset if the props are determined to be equal later (memo).
  didReceiveUpdate=true;}else if(!includesSomeLane(renderLanes,updateLanes)){didReceiveUpdate=false;// This fiber does not have any pending work. Bailout without entering
  // the begin phase. There's still some bookkeeping we that needs to be done
  // in this optimized path, mostly pushing stuff onto the stack.
  switch(workInProgress.tag){case HostRoot:pushHostRootContext(workInProgress);resetHydrationState();break;case HostComponent:pushHostContext(workInProgress);break;case ClassComponent:{var Component=workInProgress.type;if(isContextProvider(Component)){pushContextProvider(workInProgress);}break;}case HostPortal:pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);break;case ContextProvider:{var newValue=workInProgress.memoizedProps.value;pushProvider(workInProgress,newValue);break;}case Profiler:{// Profiler should only call onRender when one of its descendants actually rendered.
  var hasChildWork=includesSomeLane(renderLanes,workInProgress.childLanes);if(hasChildWork){workInProgress.flags|=Update;}// Reset effect durations for the next eventual effect phase.
  // These are reset during render to allow the DevTools commit hook a chance to read them,
  var stateNode=workInProgress.stateNode;stateNode.effectDuration=0;stateNode.passiveEffectDuration=0;}break;case SuspenseComponent:{var state=workInProgress.memoizedState;if(state!==null){// whether to retry the primary children, or to skip over it and
  // go straight to the fallback. Check the priority of the primary
  // child fragment.
  var primaryChildFragment=workInProgress.child;var primaryChildLanes=primaryChildFragment.childLanes;if(includesSomeLane(renderLanes,primaryChildLanes)){// The primary children have pending work. Use the normal path
  // to attempt to render the primary children again.
  return updateSuspenseComponent(current,workInProgress,renderLanes);}else {// The primary child fragment does not have pending work marked
  // on it
  pushSuspenseContext(workInProgress,setDefaultShallowSuspenseContext(suspenseStackCursor.current));// The primary children do not have pending work with sufficient
  // priority. Bailout.
  var child=bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);if(child!==null){// The fallback children have pending work. Skip over the
  // primary children and work on the fallback.
  return child.sibling;}else {return null;}}}else {pushSuspenseContext(workInProgress,setDefaultShallowSuspenseContext(suspenseStackCursor.current));}break;}case SuspenseListComponent:{var didSuspendBefore=(current.flags&DidCapture)!==NoFlags;var _hasChildWork=includesSomeLane(renderLanes,workInProgress.childLanes);if(didSuspendBefore){if(_hasChildWork){// If something was in fallback state last time, and we have all the
  // same children then we're still in progressive loading state.
  // Something might get unblocked by state updates or retries in the
  // tree which will affect the tail. So we need to use the normal
  // path to compute the correct tail.
  return updateSuspenseListComponent(current,workInProgress,renderLanes);}// If none of the children had any work, that means that none of
  // them got retried so they'll still be blocked in the same way
  // as before. We can fast bail out.
  workInProgress.flags|=DidCapture;}// If nothing suspended before and we're rendering the same children,
  // then the tail doesn't matter. Anything new that suspends will work
  // in the "together" mode, so we can continue from the state we had.
  var renderState=workInProgress.memoizedState;if(renderState!==null){// Reset to the "together" mode in case we've started a different
  // update in the past but didn't complete it.
  renderState.rendering=null;renderState.tail=null;renderState.lastEffect=null;}pushSuspenseContext(workInProgress,suspenseStackCursor.current);if(_hasChildWork){break;}else {// If none of the children had any work, that means that none of
  // them got retried so they'll still be blocked in the same way
  // as before. We can fast bail out.
  return null;}}case OffscreenComponent:case LegacyHiddenComponent:{// Need to check if the tree still needs to be deferred. This is
  // almost identical to the logic used in the normal update path,
  // so we'll just enter that. The only difference is we'll bail out
  // at the next level instead of this one, because the child props
  // have not changed. Which is fine.
  // TODO: Probably should refactor `beginWork` to split the bailout
  // path from the normal path. I'm tempted to do a labeled break here
  // but I won't :)
  workInProgress.lanes=NoLanes;return updateOffscreenComponent(current,workInProgress,renderLanes);}}return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}else {if((current.flags&ForceUpdateForLegacySuspense)!==NoFlags){// This is a special case that only exists for legacy mode.
  // See https://github.com/facebook/react/pull/19216.
  didReceiveUpdate=true;}else {// An update was scheduled on this fiber, but there are no new props
  // nor legacy context. Set this to false. If an update queue or context
  // consumer produces a changed value, it will set this to true. Otherwise,
  // the component will assume the children have not changed and bail out.
  didReceiveUpdate=false;}}}else {didReceiveUpdate=false;}// Before entering the begin phase, clear pending update priority.
  // TODO: This assumes that we're about to evaluate the component and process
  // the update queue. However, there's an exception: SimpleMemoComponent
  // sometimes bails out later in the begin phase. This indicates that we should
  // move this assignment out of the common path and into each branch.
  workInProgress.lanes=NoLanes;switch(workInProgress.tag){case IndeterminateComponent:{return mountIndeterminateComponent(current,workInProgress,workInProgress.type,renderLanes);}case LazyComponent:{var elementType=workInProgress.elementType;return mountLazyComponent(current,workInProgress,elementType,updateLanes,renderLanes);}case FunctionComponent:{var _Component=workInProgress.type;var unresolvedProps=workInProgress.pendingProps;var resolvedProps=workInProgress.elementType===_Component?unresolvedProps:resolveDefaultProps(_Component,unresolvedProps);return updateFunctionComponent(current,workInProgress,_Component,resolvedProps,renderLanes);}case ClassComponent:{var _Component2=workInProgress.type;var _unresolvedProps=workInProgress.pendingProps;var _resolvedProps=workInProgress.elementType===_Component2?_unresolvedProps:resolveDefaultProps(_Component2,_unresolvedProps);return updateClassComponent(current,workInProgress,_Component2,_resolvedProps,renderLanes);}case HostRoot:return updateHostRoot(current,workInProgress,renderLanes);case HostComponent:return updateHostComponent(current,workInProgress,renderLanes);case HostText:return updateHostText(current,workInProgress);case SuspenseComponent:return updateSuspenseComponent(current,workInProgress,renderLanes);case HostPortal:return updatePortalComponent(current,workInProgress,renderLanes);case ForwardRef:{var type=workInProgress.type;var _unresolvedProps2=workInProgress.pendingProps;var _resolvedProps2=workInProgress.elementType===type?_unresolvedProps2:resolveDefaultProps(type,_unresolvedProps2);return updateForwardRef(current,workInProgress,type,_resolvedProps2,renderLanes);}case Fragment:return updateFragment(current,workInProgress,renderLanes);case Mode:return updateMode(current,workInProgress,renderLanes);case Profiler:return updateProfiler(current,workInProgress,renderLanes);case ContextProvider:return updateContextProvider(current,workInProgress,renderLanes);case ContextConsumer:return updateContextConsumer(current,workInProgress,renderLanes);case MemoComponent:{var _type2=workInProgress.type;var _unresolvedProps3=workInProgress.pendingProps;// Resolve outer props first, then resolve inner props.
  var _resolvedProps3=resolveDefaultProps(_type2,_unresolvedProps3);{if(workInProgress.type!==workInProgress.elementType){var outerPropTypes=_type2.propTypes;if(outerPropTypes){checkPropTypes(outerPropTypes,_resolvedProps3,// Resolved for outer only
  'prop',getComponentName(_type2));}}}_resolvedProps3=resolveDefaultProps(_type2.type,_resolvedProps3);return updateMemoComponent(current,workInProgress,_type2,_resolvedProps3,updateLanes,renderLanes);}case SimpleMemoComponent:{return updateSimpleMemoComponent(current,workInProgress,workInProgress.type,workInProgress.pendingProps,updateLanes,renderLanes);}case IncompleteClassComponent:{var _Component3=workInProgress.type;var _unresolvedProps4=workInProgress.pendingProps;var _resolvedProps4=workInProgress.elementType===_Component3?_unresolvedProps4:resolveDefaultProps(_Component3,_unresolvedProps4);return mountIncompleteClassComponent(current,workInProgress,_Component3,_resolvedProps4,renderLanes);}case SuspenseListComponent:{return updateSuspenseListComponent(current,workInProgress,renderLanes);}case FundamentalComponent:{break;}case ScopeComponent:{break;}case Block:{break;}case OffscreenComponent:{return updateOffscreenComponent(current,workInProgress,renderLanes);}case LegacyHiddenComponent:{return updateLegacyHiddenComponent(current,workInProgress,renderLanes);}}{{throw Error("Unknown unit of work tag ("+workInProgress.tag+"). This error is likely caused by a bug in React. Please file an issue.");}}}function markUpdate(workInProgress){// Tag the fiber with an update effect. This turns a Placement into
  // a PlacementAndUpdate.
  workInProgress.flags|=Update;}function markRef$1(workInProgress){workInProgress.flags|=Ref;}var _appendAllChildren;var updateHostContainer;var updateHostComponent$1;var updateHostText$1;if(supportsMutation){// Mutation mode
  _appendAllChildren=function appendAllChildren(parent,workInProgress,needsVisibilityToggle,isHidden){// We only have the top Fiber that was created but we need recurse down its
  // children to find all the terminal nodes.
  var node=workInProgress.child;while(node!==null){if(node.tag===HostComponent||node.tag===HostText){appendInitialChild(parent,node.stateNode);}else if(node.tag===HostPortal);else if(node.child!==null){node.child["return"]=node;node=node.child;continue;}if(node===workInProgress){return;}while(node.sibling===null){if(node["return"]===null||node["return"]===workInProgress){return;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}};updateHostContainer=function updateHostContainer(workInProgress){// Noop
  };updateHostComponent$1=function updateHostComponent$1(current,workInProgress,type,newProps,rootContainerInstance){// If we have an alternate, that means this is an update and we need to
  // schedule a side-effect to do the updates.
  var oldProps=current.memoizedProps;if(oldProps===newProps){// In mutation mode, this is sufficient for a bailout because
  // we won't touch this node even if children changed.
  return;}// If we get updated because one of our children updated, we don't
  // have newProps so we'll have to reuse them.
  // TODO: Split the update API as separate for the props vs. children.
  // Even better would be if children weren't special cased at all tho.
  var instance=workInProgress.stateNode;var currentHostContext=getHostContext();// TODO: Experiencing an error where oldProps is null. Suggests a host
  // component is hitting the resume path. Figure out why. Possibly
  // related to `hidden`.
  var updatePayload=prepareUpdate(instance,type,oldProps,newProps,rootContainerInstance,currentHostContext);// TODO: Type this specific to this type of component.
  workInProgress.updateQueue=updatePayload;// If the update payload indicates that there is a change or if there
  // is a new ref we mark this as an update. All the work is done in commitWork.
  if(updatePayload){markUpdate(workInProgress);}};updateHostText$1=function updateHostText$1(current,workInProgress,oldText,newText){// If the text differs, mark it as an update. All the work in done in commitWork.
  if(oldText!==newText){markUpdate(workInProgress);}};}else if(supportsPersistence){// Persistent host tree mode
  _appendAllChildren=function appendAllChildren(parent,workInProgress,needsVisibilityToggle,isHidden){// We only have the top Fiber that was created but we need recurse down its
  // children to find all the terminal nodes.
  var node=workInProgress.child;while(node!==null){// eslint-disable-next-line no-labels
  if(node.tag===HostComponent){var instance=node.stateNode;if(needsVisibilityToggle&&isHidden){// This child is inside a timed out tree. Hide it.
  var props=node.memoizedProps;var type=node.type;instance=cloneHiddenInstance(instance,type,props,node);}appendInitialChild(parent,instance);}else if(node.tag===HostText){var _instance=node.stateNode;if(needsVisibilityToggle&&isHidden){// This child is inside a timed out tree. Hide it.
  var text=node.memoizedProps;_instance=cloneHiddenTextInstance(_instance,text,node);}appendInitialChild(parent,_instance);}else if(node.tag===HostPortal);else if(node.tag===SuspenseComponent){if((node.flags&Update)!==NoFlags){// Need to toggle the visibility of the primary children.
  var newIsHidden=node.memoizedState!==null;if(newIsHidden){var primaryChildParent=node.child;if(primaryChildParent!==null){if(primaryChildParent.child!==null){primaryChildParent.child["return"]=primaryChildParent;_appendAllChildren(parent,primaryChildParent,true,newIsHidden);}var fallbackChildParent=primaryChildParent.sibling;if(fallbackChildParent!==null){fallbackChildParent["return"]=node;node=fallbackChildParent;continue;}}}}if(node.child!==null){// Continue traversing like normal
  node.child["return"]=node;node=node.child;continue;}}else if(node.child!==null){node.child["return"]=node;node=node.child;continue;}// $FlowFixMe This is correct but Flow is confused by the labeled break.
  node=node;if(node===workInProgress){return;}while(node.sibling===null){if(node["return"]===null||node["return"]===workInProgress){return;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}};// An unfortunate fork of appendAllChildren because we have two different parent types.
  var appendAllChildrenToContainer=function appendAllChildrenToContainer(containerChildSet,workInProgress,needsVisibilityToggle,isHidden){// We only have the top Fiber that was created but we need recurse down its
  // children to find all the terminal nodes.
  var node=workInProgress.child;while(node!==null){// eslint-disable-next-line no-labels
  if(node.tag===HostComponent){var instance=node.stateNode;if(needsVisibilityToggle&&isHidden){// This child is inside a timed out tree. Hide it.
  var props=node.memoizedProps;var type=node.type;instance=cloneHiddenInstance(instance,type,props,node);}appendChildToContainerChildSet(containerChildSet,instance);}else if(node.tag===HostText){var _instance3=node.stateNode;if(needsVisibilityToggle&&isHidden){// This child is inside a timed out tree. Hide it.
  var text=node.memoizedProps;_instance3=cloneHiddenTextInstance(_instance3,text,node);}appendChildToContainerChildSet(containerChildSet,_instance3);}else if(node.tag===HostPortal);else if(node.tag===SuspenseComponent){if((node.flags&Update)!==NoFlags){// Need to toggle the visibility of the primary children.
  var newIsHidden=node.memoizedState!==null;if(newIsHidden){var primaryChildParent=node.child;if(primaryChildParent!==null){if(primaryChildParent.child!==null){primaryChildParent.child["return"]=primaryChildParent;appendAllChildrenToContainer(containerChildSet,primaryChildParent,true,newIsHidden);}var fallbackChildParent=primaryChildParent.sibling;if(fallbackChildParent!==null){fallbackChildParent["return"]=node;node=fallbackChildParent;continue;}}}}if(node.child!==null){// Continue traversing like normal
  node.child["return"]=node;node=node.child;continue;}}else if(node.child!==null){node.child["return"]=node;node=node.child;continue;}// $FlowFixMe This is correct but Flow is confused by the labeled break.
  node=node;if(node===workInProgress){return;}while(node.sibling===null){if(node["return"]===null||node["return"]===workInProgress){return;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}};updateHostContainer=function updateHostContainer(workInProgress){var portalOrRoot=workInProgress.stateNode;var childrenUnchanged=workInProgress.firstEffect===null;if(childrenUnchanged);else {var container=portalOrRoot.containerInfo;var newChildSet=createContainerChildSet(container);// If children might have changed, we have to add them all to the set.
  appendAllChildrenToContainer(newChildSet,workInProgress,false,false);portalOrRoot.pendingChildren=newChildSet;// Schedule an update on the container to swap out the container.
  markUpdate(workInProgress);finalizeContainerChildren(container,newChildSet);}};updateHostComponent$1=function updateHostComponent$1(current,workInProgress,type,newProps,rootContainerInstance){var currentInstance=current.stateNode;var oldProps=current.memoizedProps;// If there are no effects associated with this node, then none of our children had any updates.
  // This guarantees that we can reuse all of them.
  var childrenUnchanged=workInProgress.firstEffect===null;if(childrenUnchanged&&oldProps===newProps){// No changes, just reuse the existing instance.
  // Note that this might release a previous clone.
  workInProgress.stateNode=currentInstance;return;}var recyclableInstance=workInProgress.stateNode;var currentHostContext=getHostContext();var updatePayload=null;if(oldProps!==newProps){updatePayload=prepareUpdate(recyclableInstance,type,oldProps,newProps,rootContainerInstance,currentHostContext);}if(childrenUnchanged&&updatePayload===null){// No changes, just reuse the existing instance.
  // Note that this might release a previous clone.
  workInProgress.stateNode=currentInstance;return;}var newInstance=cloneInstance(currentInstance,updatePayload,type,oldProps,newProps,workInProgress,childrenUnchanged,recyclableInstance);if(finalizeInitialChildren(newInstance,type,newProps,rootContainerInstance,currentHostContext)){markUpdate(workInProgress);}workInProgress.stateNode=newInstance;if(childrenUnchanged){// If there are no other effects in this tree, we need to flag this node as having one.
  // Even though we're not going to use it for anything.
  // Otherwise parents won't know that there are new children to propagate upwards.
  markUpdate(workInProgress);}else {// If children might have changed, we have to add them all to the set.
  _appendAllChildren(newInstance,workInProgress,false,false);}};updateHostText$1=function updateHostText$1(current,workInProgress,oldText,newText){if(oldText!==newText){// If the text content differs, we'll create a new text instance for it.
  var rootContainerInstance=getRootHostContainer();var currentHostContext=getHostContext();workInProgress.stateNode=createTextInstance(newText,rootContainerInstance,currentHostContext,workInProgress);// We'll have to mark it as having an effect, even though we won't use the effect for anything.
  // This lets the parents know that at least one of their children has changed.
  markUpdate(workInProgress);}else {workInProgress.stateNode=current.stateNode;}};}else {// No host operations
  updateHostContainer=function updateHostContainer(workInProgress){// Noop
  };updateHostComponent$1=function updateHostComponent$1(current,workInProgress,type,newProps,rootContainerInstance){// Noop
  };updateHostText$1=function updateHostText$1(current,workInProgress,oldText,newText){// Noop
  };}function cutOffTailIfNeeded(renderState,hasRenderedATailFallback){if(getIsHydrating()){// If we're hydrating, we should consume as many items as we can
  // so we don't leave any behind.
  return;}switch(renderState.tailMode){case'hidden':{// Any insertions at the end of the tail list after this point
  // should be invisible. If there are already mounted boundaries
  // anything before them are not considered for collapsing.
  // Therefore we need to go through the whole tail to find if
  // there are any.
  var tailNode=renderState.tail;var lastTailNode=null;while(tailNode!==null){if(tailNode.alternate!==null){lastTailNode=tailNode;}tailNode=tailNode.sibling;}// Next we're simply going to delete all insertions after the
  // last rendered item.
  if(lastTailNode===null){// All remaining items in the tail are insertions.
  renderState.tail=null;}else {// Detach the insertion after the last node that was already
  // inserted.
  lastTailNode.sibling=null;}break;}case'collapsed':{// Any insertions at the end of the tail list after this point
  // should be invisible. If there are already mounted boundaries
  // anything before them are not considered for collapsing.
  // Therefore we need to go through the whole tail to find if
  // there are any.
  var _tailNode=renderState.tail;var _lastTailNode=null;while(_tailNode!==null){if(_tailNode.alternate!==null){_lastTailNode=_tailNode;}_tailNode=_tailNode.sibling;}// Next we're simply going to delete all insertions after the
  // last rendered item.
  if(_lastTailNode===null){// All remaining items in the tail are insertions.
  if(!hasRenderedATailFallback&&renderState.tail!==null){// We suspended during the head. We want to show at least one
  // row at the tail. So we'll keep on and cut off the rest.
  renderState.tail.sibling=null;}else {renderState.tail=null;}}else {// Detach the insertion after the last node that was already
  // inserted.
  _lastTailNode.sibling=null;}break;}}}function completeWork(current,workInProgress,renderLanes){var newProps=workInProgress.pendingProps;switch(workInProgress.tag){case IndeterminateComponent:case LazyComponent:case SimpleMemoComponent:case FunctionComponent:case ForwardRef:case Fragment:case Mode:case Profiler:case ContextConsumer:case MemoComponent:return null;case ClassComponent:{var Component=workInProgress.type;if(isContextProvider(Component)){popContext(workInProgress);}return null;}case HostRoot:{popHostContainer(workInProgress);popTopLevelContextObject(workInProgress);resetWorkInProgressVersions();var fiberRoot=workInProgress.stateNode;if(fiberRoot.pendingContext){fiberRoot.context=fiberRoot.pendingContext;fiberRoot.pendingContext=null;}if(current===null||current.child===null){// If we hydrated, pop so that we can delete any remaining children
  // that weren't hydrated.
  var wasHydrated=popHydrationState(workInProgress);if(wasHydrated){// If we hydrated, then we'll need to schedule an update for
  // the commit side-effects on the root.
  markUpdate(workInProgress);}else if(!fiberRoot.hydrate){// Schedule an effect to clear this container at the start of the next commit.
  // This handles the case of React rendering into a container with previous children.
  // It's also safe to do for updates too, because current.child would only be null
  // if the previous render was null (so the the container would already be empty).
  workInProgress.flags|=Snapshot;}}updateHostContainer(workInProgress);return null;}case HostComponent:{popHostContext(workInProgress);var rootContainerInstance=getRootHostContainer();var type=workInProgress.type;if(current!==null&&workInProgress.stateNode!=null){updateHostComponent$1(current,workInProgress,type,newProps,rootContainerInstance);if(current.ref!==workInProgress.ref){markRef$1(workInProgress);}}else {if(!newProps){if(!(workInProgress.stateNode!==null)){{throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");}}// This can happen when we abort work.
  return null;}var currentHostContext=getHostContext();// TODO: Move createInstance to beginWork and keep it on a context
  // "stack" as the parent. Then append children as we go in beginWork
  // or completeWork depending on whether we want to add them top->down or
  // bottom->up. Top->down is faster in IE11.
  var _wasHydrated=popHydrationState(workInProgress);if(_wasHydrated){// TODO: Move this and createInstance step into the beginPhase
  // to consolidate.
  if(prepareToHydrateHostInstance(workInProgress,rootContainerInstance,currentHostContext)){// If changes to the hydrated node need to be applied at the
  // commit-phase we mark this as such.
  markUpdate(workInProgress);}}else {var instance=createInstance(type,newProps,rootContainerInstance,currentHostContext,workInProgress);_appendAllChildren(instance,workInProgress,false,false);workInProgress.stateNode=instance;// Certain renderers require commit-time effects for initial mount.
  // (eg DOM renderer supports auto-focus for certain elements).
  // Make sure such renderers get scheduled for later work.
  if(finalizeInitialChildren(instance,type,newProps,rootContainerInstance,currentHostContext)){markUpdate(workInProgress);}}if(workInProgress.ref!==null){// If there is a ref on a host node we need to schedule a callback
  markRef$1(workInProgress);}}return null;}case HostText:{var newText=newProps;if(current&&workInProgress.stateNode!=null){var oldText=current.memoizedProps;// If we have an alternate, that means this is an update and we need
  // to schedule a side-effect to do the updates.
  updateHostText$1(current,workInProgress,oldText,newText);}else {if(typeof newText!=='string'){if(!(workInProgress.stateNode!==null)){{throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");}}// This can happen when we abort work.
  }var _rootContainerInstance=getRootHostContainer();var _currentHostContext=getHostContext();var _wasHydrated2=popHydrationState(workInProgress);if(_wasHydrated2){if(prepareToHydrateHostTextInstance(workInProgress)){markUpdate(workInProgress);}}else {workInProgress.stateNode=createTextInstance(newText,_rootContainerInstance,_currentHostContext,workInProgress);}}return null;}case SuspenseComponent:{popSuspenseContext(workInProgress);var nextState=workInProgress.memoizedState;if((workInProgress.flags&DidCapture)!==NoFlags){// Something suspended. Re-render with the fallback children.
  workInProgress.lanes=renderLanes;// Do not reset the effect list.
  if((workInProgress.mode&ProfileMode)!==NoMode){transferActualDuration(workInProgress);}return workInProgress;}var nextDidTimeout=nextState!==null;var prevDidTimeout=false;if(current===null){if(workInProgress.memoizedProps.fallback!==undefined){popHydrationState(workInProgress);}}else {var prevState=current.memoizedState;prevDidTimeout=prevState!==null;}if(nextDidTimeout&&!prevDidTimeout){// If this subtreee is running in blocking mode we can suspend,
  // otherwise we won't suspend.
  // TODO: This will still suspend a synchronous tree if anything
  // in the concurrent tree already suspended during this render.
  // This is a known bug.
  if((workInProgress.mode&BlockingMode)!==NoMode){// TODO: Move this back to throwException because this is too late
  // if this is a large tree which is common for initial loads. We
  // don't know if we should restart a render or not until we get
  // this marker, and this is too late.
  // If this render already had a ping or lower pri updates,
  // and this is the first time we know we're going to suspend we
  // should be able to immediately restart from within throwException.
  var hasInvisibleChildContext=current===null&&workInProgress.memoizedProps.unstable_avoidThisFallback!==true;if(hasInvisibleChildContext||hasSuspenseContext(suspenseStackCursor.current,InvisibleParentSuspenseContext)){// If this was in an invisible tree or a new render, then showing
  // this boundary is ok.
  renderDidSuspend();}else {// Otherwise, we're going to have to hide content so we should
  // suspend for longer if possible.
  renderDidSuspendDelayIfPossible();}}}if(supportsPersistence){// TODO: Only schedule updates if not prevDidTimeout.
  if(nextDidTimeout){// If this boundary just timed out, schedule an effect to attach a
  // retry listener to the promise. This flag is also used to hide the
  // primary children.
  workInProgress.flags|=Update;}}if(supportsMutation){// TODO: Only schedule updates if these values are non equal, i.e. it changed.
  if(nextDidTimeout||prevDidTimeout){// If this boundary just timed out, schedule an effect to attach a
  // retry listener to the promise. This flag is also used to hide the
  // primary children. In mutation mode, we also need the flag to
  // *unhide* children that were previously hidden, so check if this
  // is currently timed out, too.
  workInProgress.flags|=Update;}}return null;}case HostPortal:popHostContainer(workInProgress);updateHostContainer(workInProgress);if(current===null){preparePortalMount(workInProgress.stateNode.containerInfo);}return null;case ContextProvider:// Pop provider fiber
  popProvider(workInProgress);return null;case IncompleteClassComponent:{// Same as class component case. I put it down here so that the tags are
  // sequential to ensure this switch is compiled to a jump table.
  var _Component=workInProgress.type;if(isContextProvider(_Component)){popContext(workInProgress);}return null;}case SuspenseListComponent:{popSuspenseContext(workInProgress);var renderState=workInProgress.memoizedState;if(renderState===null){// We're running in the default, "independent" mode.
  // We don't do anything in this mode.
  return null;}var didSuspendAlready=(workInProgress.flags&DidCapture)!==NoFlags;var renderedTail=renderState.rendering;if(renderedTail===null){// We just rendered the head.
  if(!didSuspendAlready){// This is the first pass. We need to figure out if anything is still
  // suspended in the rendered set.
  // If new content unsuspended, but there's still some content that
  // didn't. Then we need to do a second pass that forces everything
  // to keep showing their fallbacks.
  // We might be suspended if something in this render pass suspended, or
  // something in the previous committed pass suspended. Otherwise,
  // there's no chance so we can skip the expensive call to
  // findFirstSuspended.
  var cannotBeSuspended=renderHasNotSuspendedYet()&&(current===null||(current.flags&DidCapture)===NoFlags);if(!cannotBeSuspended){var row=workInProgress.child;while(row!==null){var suspended=findFirstSuspended(row);if(suspended!==null){didSuspendAlready=true;workInProgress.flags|=DidCapture;cutOffTailIfNeeded(renderState,false);// If this is a newly suspended tree, it might not get committed as
  // part of the second pass. In that case nothing will subscribe to
  // its thennables. Instead, we'll transfer its thennables to the
  // SuspenseList so that it can retry if they resolve.
  // There might be multiple of these in the list but since we're
  // going to wait for all of them anyway, it doesn't really matter
  // which ones gets to ping. In theory we could get clever and keep
  // track of how many dependencies remain but it gets tricky because
  // in the meantime, we can add/remove/change items and dependencies.
  // We might bail out of the loop before finding any but that
  // doesn't matter since that means that the other boundaries that
  // we did find already has their listeners attached.
  var newThennables=suspended.updateQueue;if(newThennables!==null){workInProgress.updateQueue=newThennables;workInProgress.flags|=Update;}// Rerender the whole list, but this time, we'll force fallbacks
  // to stay in place.
  // Reset the effect list before doing the second pass since that's now invalid.
  if(renderState.lastEffect===null){workInProgress.firstEffect=null;}workInProgress.lastEffect=renderState.lastEffect;// Reset the child fibers to their original state.
  resetChildFibers(workInProgress,renderLanes);// Set up the Suspense Context to force suspense and immediately
  // rerender the children.
  pushSuspenseContext(workInProgress,setShallowSuspenseContext(suspenseStackCursor.current,ForceSuspenseFallback));return workInProgress.child;}row=row.sibling;}}if(renderState.tail!==null&&now$1()>getRenderTargetTime()){// We have already passed our CPU deadline but we still have rows
  // left in the tail. We'll just give up further attempts to render
  // the main content and only render fallbacks.
  workInProgress.flags|=DidCapture;didSuspendAlready=true;cutOffTailIfNeeded(renderState,false);// Since nothing actually suspended, there will nothing to ping this
  // to get it started back up to attempt the next item. While in terms
  // of priority this work has the same priority as this current render,
  // it's not part of the same transition once the transition has
  // committed. If it's sync, we still want to yield so that it can be
  // painted. Conceptually, this is really the same as pinging.
  // We can use any RetryLane even if it's the one currently rendering
  // since we're leaving it behind on this node.
  workInProgress.lanes=SomeRetryLane;{markSpawnedWork(SomeRetryLane);}}}else {cutOffTailIfNeeded(renderState,false);}// Next we're going to render the tail.
  }else {// Append the rendered row to the child list.
  if(!didSuspendAlready){var _suspended=findFirstSuspended(renderedTail);if(_suspended!==null){workInProgress.flags|=DidCapture;didSuspendAlready=true;// Ensure we transfer the update queue to the parent so that it doesn't
  // get lost if this row ends up dropped during a second pass.
  var _newThennables=_suspended.updateQueue;if(_newThennables!==null){workInProgress.updateQueue=_newThennables;workInProgress.flags|=Update;}cutOffTailIfNeeded(renderState,true);// This might have been modified.
  if(renderState.tail===null&&renderState.tailMode==='hidden'&&!renderedTail.alternate&&!getIsHydrating()// We don't cut it if we're hydrating.
  ){// We need to delete the row we just rendered.
  // Reset the effect list to what it was before we rendered this
  // child. The nested children have already appended themselves.
  var lastEffect=workInProgress.lastEffect=renderState.lastEffect;// Remove any effects that were appended after this point.
  if(lastEffect!==null){lastEffect.nextEffect=null;}// We're done.
  return null;}}else if(// The time it took to render last row is greater than the remaining
  // time we have to render. So rendering one more row would likely
  // exceed it.
  now$1()*2-renderState.renderingStartTime>getRenderTargetTime()&&renderLanes!==OffscreenLane){// We have now passed our CPU deadline and we'll just give up further
  // attempts to render the main content and only render fallbacks.
  // The assumption is that this is usually faster.
  workInProgress.flags|=DidCapture;didSuspendAlready=true;cutOffTailIfNeeded(renderState,false);// Since nothing actually suspended, there will nothing to ping this
  // to get it started back up to attempt the next item. While in terms
  // of priority this work has the same priority as this current render,
  // it's not part of the same transition once the transition has
  // committed. If it's sync, we still want to yield so that it can be
  // painted. Conceptually, this is really the same as pinging.
  // We can use any RetryLane even if it's the one currently rendering
  // since we're leaving it behind on this node.
  workInProgress.lanes=SomeRetryLane;{markSpawnedWork(SomeRetryLane);}}}if(renderState.isBackwards){// The effect list of the backwards tail will have been added
  // to the end. This breaks the guarantee that life-cycles fire in
  // sibling order but that isn't a strong guarantee promised by React.
  // Especially since these might also just pop in during future commits.
  // Append to the beginning of the list.
  renderedTail.sibling=workInProgress.child;workInProgress.child=renderedTail;}else {var previousSibling=renderState.last;if(previousSibling!==null){previousSibling.sibling=renderedTail;}else {workInProgress.child=renderedTail;}renderState.last=renderedTail;}}if(renderState.tail!==null){// We still have tail rows to render.
  // Pop a row.
  var next=renderState.tail;renderState.rendering=next;renderState.tail=next.sibling;renderState.lastEffect=workInProgress.lastEffect;renderState.renderingStartTime=now$1();next.sibling=null;// Restore the context.
  // TODO: We can probably just avoid popping it instead and only
  // setting it the first time we go from not suspended to suspended.
  var suspenseContext=suspenseStackCursor.current;if(didSuspendAlready){suspenseContext=setShallowSuspenseContext(suspenseContext,ForceSuspenseFallback);}else {suspenseContext=setDefaultShallowSuspenseContext(suspenseContext);}pushSuspenseContext(workInProgress,suspenseContext);// Do a pass over the next row.
  return next;}return null;}case FundamentalComponent:{break;}case ScopeComponent:{break;}case Block:break;case OffscreenComponent:case LegacyHiddenComponent:{popRenderLanes(workInProgress);if(current!==null){var _nextState=workInProgress.memoizedState;var _prevState=current.memoizedState;var prevIsHidden=_prevState!==null;var nextIsHidden=_nextState!==null;if(prevIsHidden!==nextIsHidden&&newProps.mode!=='unstable-defer-without-hiding'){workInProgress.flags|=Update;}}return null;}}{{throw Error("Unknown unit of work tag ("+workInProgress.tag+"). This error is likely caused by a bug in React. Please file an issue.");}}}function unwindWork(workInProgress,renderLanes){switch(workInProgress.tag){case ClassComponent:{var Component=workInProgress.type;if(isContextProvider(Component)){popContext(workInProgress);}var flags=workInProgress.flags;if(flags&ShouldCapture){workInProgress.flags=flags&~ShouldCapture|DidCapture;if((workInProgress.mode&ProfileMode)!==NoMode){transferActualDuration(workInProgress);}return workInProgress;}return null;}case HostRoot:{popHostContainer(workInProgress);popTopLevelContextObject(workInProgress);resetWorkInProgressVersions();var _flags=workInProgress.flags;if(!((_flags&DidCapture)===NoFlags)){{throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");}}workInProgress.flags=_flags&~ShouldCapture|DidCapture;return workInProgress;}case HostComponent:{// TODO: popHydrationState
  popHostContext(workInProgress);return null;}case SuspenseComponent:{popSuspenseContext(workInProgress);var _flags2=workInProgress.flags;if(_flags2&ShouldCapture){workInProgress.flags=_flags2&~ShouldCapture|DidCapture;// Captured a suspense effect. Re-render the boundary.
  if((workInProgress.mode&ProfileMode)!==NoMode){transferActualDuration(workInProgress);}return workInProgress;}return null;}case SuspenseListComponent:{popSuspenseContext(workInProgress);// SuspenseList doesn't actually catch anything. It should've been
  // caught by a nested boundary. If not, it should bubble through.
  return null;}case HostPortal:popHostContainer(workInProgress);return null;case ContextProvider:popProvider(workInProgress);return null;case OffscreenComponent:case LegacyHiddenComponent:popRenderLanes(workInProgress);return null;default:return null;}}function unwindInterruptedWork(interruptedWork){switch(interruptedWork.tag){case ClassComponent:{var childContextTypes=interruptedWork.type.childContextTypes;if(childContextTypes!==null&&childContextTypes!==undefined){popContext(interruptedWork);}break;}case HostRoot:{popHostContainer(interruptedWork);popTopLevelContextObject(interruptedWork);resetWorkInProgressVersions();break;}case HostComponent:{popHostContext(interruptedWork);break;}case HostPortal:popHostContainer(interruptedWork);break;case SuspenseComponent:popSuspenseContext(interruptedWork);break;case SuspenseListComponent:popSuspenseContext(interruptedWork);break;case ContextProvider:popProvider(interruptedWork);break;case OffscreenComponent:case LegacyHiddenComponent:popRenderLanes(interruptedWork);break;}}function createCapturedValue(value,source){// If the value is an error, call this function immediately after it is thrown
  // so the stack is accurate.
  return {value:value,source:source,stack:getStackByFiberInDevAndProd(source)};}// This module is forked in different environments.
  // By default, return `true` to log errors to the console.
  // Forks can return `false` if this isn't desirable.
  function showErrorDialog(boundary,errorInfo){return true;}function logCapturedError(boundary,errorInfo){try{var logError=showErrorDialog(boundary,errorInfo);// Allow injected showErrorDialog() to prevent default console.error logging.
  // This enables renderers like ReactNative to better manage redbox behavior.
  if(logError===false){return;}var error=errorInfo.value;if(true){var source=errorInfo.source;var stack=errorInfo.stack;var componentStack=stack!==null?stack:'';// Browsers support silencing uncaught errors by calling
  // `preventDefault()` in window `error` handler.
  // We record this information as an expando on the error.
  if(error!=null&&error._suppressLogging){if(boundary.tag===ClassComponent){// The error is recoverable and was silenced.
  // Ignore it and don't print the stack addendum.
  // This is handy for testing error boundaries without noise.
  return;}// The error is fatal. Since the silencing might have
  // been accidental, we'll surface it anyway.
  // However, the browser would have silenced the original error
  // so we'll print it first, and then print the stack addendum.
  console['error'](error);// Don't transform to our wrapper
  // For a more detailed description of this block, see:
  // https://github.com/facebook/react/pull/13384
  }var componentName=source?getComponentName(source.type):null;var componentNameMessage=componentName?"The above error occurred in the <"+componentName+"> component:":'The above error occurred in one of your React components:';var errorBoundaryMessage;var errorBoundaryName=getComponentName(boundary.type);if(errorBoundaryName){errorBoundaryMessage="React will try to recreate this component tree from scratch "+("using the error boundary you provided, "+errorBoundaryName+".");}else {errorBoundaryMessage='Consider adding an error boundary to your tree to customize error handling behavior.\n'+'Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.';}var combinedMessage=componentNameMessage+"\n"+componentStack+"\n\n"+(""+errorBoundaryMessage);// In development, we provide our own message with just the component stack.
  // We don't include the original error message and JS stack because the browser
  // has already printed it. Even if the application swallows the error, it is still
  // displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
  console['error'](combinedMessage);// Don't transform to our wrapper
  }}catch(e){// This method must not throw, or React internal state will get messed up.
  // If console.error is overridden, or logCapturedError() shows a dialog that throws,
  // we want to report this error outside of the normal stack as a last resort.
  // https://github.com/facebook/react/issues/13188
  setTimeout(function(){throw e;});}}var PossiblyWeakMap$1=typeof WeakMap==='function'?WeakMap:Map;function createRootErrorUpdate(fiber,errorInfo,lane){var update=createUpdate(NoTimestamp,lane);// Unmount the root by rendering null.
  update.tag=CaptureUpdate;// Caution: React DevTools currently depends on this property
  // being called "element".
  update.payload={element:null};var error=errorInfo.value;update.callback=function(){onUncaughtError(error);logCapturedError(fiber,errorInfo);};return update;}function createClassErrorUpdate(fiber,errorInfo,lane){var update=createUpdate(NoTimestamp,lane);update.tag=CaptureUpdate;var getDerivedStateFromError=fiber.type.getDerivedStateFromError;if(typeof getDerivedStateFromError==='function'){var error$1=errorInfo.value;update.payload=function(){logCapturedError(fiber,errorInfo);return getDerivedStateFromError(error$1);};}var inst=fiber.stateNode;if(inst!==null&&typeof inst.componentDidCatch==='function'){update.callback=function callback(){{markFailedErrorBoundaryForHotReloading(fiber);}if(typeof getDerivedStateFromError!=='function'){// To preserve the preexisting retry behavior of error boundaries,
  // we keep track of which ones already failed during this batch.
  // This gets reset before we yield back to the browser.
  // TODO: Warn in strict mode if getDerivedStateFromError is
  // not defined.
  markLegacyErrorBoundaryAsFailed(this);// Only log here if componentDidCatch is the only error boundary method defined
  logCapturedError(fiber,errorInfo);}var error$1=errorInfo.value;var stack=errorInfo.stack;this.componentDidCatch(error$1,{componentStack:stack!==null?stack:''});{if(typeof getDerivedStateFromError!=='function'){// If componentDidCatch is the only error boundary method defined,
  // then it needs to call setState to recover from errors.
  // If no state update is scheduled then the boundary will swallow the error.
  if(!includesSomeLane(fiber.lanes,SyncLane)){error('%s: Error boundaries should implement getDerivedStateFromError(). '+'In that method, return a state update to display an error message or fallback UI.',getComponentName(fiber.type)||'Unknown');}}}};}else {update.callback=function(){markFailedErrorBoundaryForHotReloading(fiber);};}return update;}function attachPingListener(root,wakeable,lanes){// Attach a listener to the promise to "ping" the root and retry. But only if
  // one does not already exist for the lanes we're currently rendering (which
  // acts like a "thread ID" here).
  var pingCache=root.pingCache;var threadIDs;if(pingCache===null){pingCache=root.pingCache=new PossiblyWeakMap$1();threadIDs=new Set();pingCache.set(wakeable,threadIDs);}else {threadIDs=pingCache.get(wakeable);if(threadIDs===undefined){threadIDs=new Set();pingCache.set(wakeable,threadIDs);}}if(!threadIDs.has(lanes)){// Memoize using the thread ID to prevent redundant listeners.
  threadIDs.add(lanes);var ping=pingSuspendedRoot.bind(null,root,wakeable,lanes);wakeable.then(ping,ping);}}function throwException(root,returnFiber,sourceFiber,value,rootRenderLanes){// The source fiber did not complete.
  sourceFiber.flags|=Incomplete;// Its effect list is no longer valid.
  sourceFiber.firstEffect=sourceFiber.lastEffect=null;if(value!==null&&_typeof(value)==='object'&&typeof value.then==='function'){// This is a wakeable.
  var wakeable=value;if((sourceFiber.mode&BlockingMode)===NoMode){// Reset the memoizedState to what it was before we attempted
  // to render it.
  var currentSource=sourceFiber.alternate;if(currentSource){sourceFiber.updateQueue=currentSource.updateQueue;sourceFiber.memoizedState=currentSource.memoizedState;sourceFiber.lanes=currentSource.lanes;}else {sourceFiber.updateQueue=null;sourceFiber.memoizedState=null;}}var hasInvisibleParentBoundary=hasSuspenseContext(suspenseStackCursor.current,InvisibleParentSuspenseContext);// Schedule the nearest Suspense to re-render the timed out view.
  var _workInProgress=returnFiber;do{if(_workInProgress.tag===SuspenseComponent&&shouldCaptureSuspense(_workInProgress,hasInvisibleParentBoundary)){// Found the nearest boundary.
  // Stash the promise on the boundary fiber. If the boundary times out, we'll
  // attach another listener to flip the boundary back to its normal state.
  var wakeables=_workInProgress.updateQueue;if(wakeables===null){var updateQueue=new Set();updateQueue.add(wakeable);_workInProgress.updateQueue=updateQueue;}else {wakeables.add(wakeable);}// If the boundary is outside of blocking mode, we should *not*
  // suspend the commit. Pretend as if the suspended component rendered
  // null and keep rendering. In the commit phase, we'll schedule a
  // subsequent synchronous update to re-render the Suspense.
  //
  // Note: It doesn't matter whether the component that suspended was
  // inside a blocking mode tree. If the Suspense is outside of it, we
  // should *not* suspend the commit.
  if((_workInProgress.mode&BlockingMode)===NoMode){_workInProgress.flags|=DidCapture;sourceFiber.flags|=ForceUpdateForLegacySuspense;// We're going to commit this fiber even though it didn't complete.
  // But we shouldn't call any lifecycle methods or callbacks. Remove
  // all lifecycle effect tags.
  sourceFiber.flags&=~(LifecycleEffectMask|Incomplete);if(sourceFiber.tag===ClassComponent){var currentSourceFiber=sourceFiber.alternate;if(currentSourceFiber===null){// This is a new mount. Change the tag so it's not mistaken for a
  // completed class component. For example, we should not call
  // componentWillUnmount if it is deleted.
  sourceFiber.tag=IncompleteClassComponent;}else {// When we try rendering again, we should not reuse the current fiber,
  // since it's known to be in an inconsistent state. Use a force update to
  // prevent a bail out.
  var update=createUpdate(NoTimestamp,SyncLane);update.tag=ForceUpdate;enqueueUpdate(sourceFiber,update);}}// The source fiber did not complete. Mark it with Sync priority to
  // indicate that it still has pending work.
  sourceFiber.lanes=mergeLanes(sourceFiber.lanes,SyncLane);// Exit without suspending.
  return;}// Confirmed that the boundary is in a concurrent mode tree. Continue
  // with the normal suspend path.
  //
  // After this we'll use a set of heuristics to determine whether this
  // render pass will run to completion or restart or "suspend" the commit.
  // The actual logic for this is spread out in different places.
  //
  // This first principle is that if we're going to suspend when we complete
  // a root, then we should also restart if we get an update or ping that
  // might unsuspend it, and vice versa. The only reason to suspend is
  // because you think you might want to restart before committing. However,
  // it doesn't make sense to restart only while in the period we're suspended.
  //
  // Restarting too aggressively is also not good because it starves out any
  // intermediate loading state. So we use heuristics to determine when.
  // Suspense Heuristics
  //
  // If nothing threw a Promise or all the same fallbacks are already showing,
  // then don't suspend/restart.
  //
  // If this is an initial render of a new tree of Suspense boundaries and
  // those trigger a fallback, then don't suspend/restart. We want to ensure
  // that we can show the initial loading state as quickly as possible.
  //
  // If we hit a "Delayed" case, such as when we'd switch from content back into
  // a fallback, then we should always suspend/restart. Transitions apply
  // to this case. If none is defined, JND is used instead.
  //
  // If we're already showing a fallback and it gets "retried", allowing us to show
  // another level, but there's still an inner boundary that would show a fallback,
  // then we suspend/restart for 500ms since the last time we showed a fallback
  // anywhere in the tree. This effectively throttles progressive loading into a
  // consistent train of commits. This also gives us an opportunity to restart to
  // get to the completed state slightly earlier.
  //
  // If there's ambiguity due to batching it's resolved in preference of:
  // 1) "delayed", 2) "initial render", 3) "retry".
  //
  // We want to ensure that a "busy" state doesn't get force committed. We want to
  // ensure that new initial loading states can commit as soon as possible.
  attachPingListener(root,wakeable,rootRenderLanes);_workInProgress.flags|=ShouldCapture;_workInProgress.lanes=rootRenderLanes;return;}// This boundary already captured during this render. Continue to the next
  // boundary.
  _workInProgress=_workInProgress["return"];}while(_workInProgress!==null);// No boundary was found. Fallthrough to error mode.
  // TODO: Use invariant so the message is stripped in prod?
  value=new Error((getComponentName(sourceFiber.type)||'A React component')+' suspended while rendering, but no fallback UI was specified.\n'+'\n'+'Add a <Suspense fallback=...> component higher in the tree to '+'provide a loading indicator or placeholder to display.');}// We didn't find a boundary that could handle this type of exception. Start
  // over and traverse parent path again, this time treating the exception
  // as an error.
  renderDidError();value=createCapturedValue(value,sourceFiber);var workInProgress=returnFiber;do{switch(workInProgress.tag){case HostRoot:{var _errorInfo=value;workInProgress.flags|=ShouldCapture;var lane=pickArbitraryLane(rootRenderLanes);workInProgress.lanes=mergeLanes(workInProgress.lanes,lane);var _update=createRootErrorUpdate(workInProgress,_errorInfo,lane);enqueueCapturedUpdate(workInProgress,_update);return;}case ClassComponent:// Capture and retry
  var errorInfo=value;var ctor=workInProgress.type;var instance=workInProgress.stateNode;if((workInProgress.flags&DidCapture)===NoFlags&&(typeof ctor.getDerivedStateFromError==='function'||instance!==null&&typeof instance.componentDidCatch==='function'&&!isAlreadyFailedLegacyErrorBoundary(instance))){workInProgress.flags|=ShouldCapture;var _lane=pickArbitraryLane(rootRenderLanes);workInProgress.lanes=mergeLanes(workInProgress.lanes,_lane);// Schedule the error boundary to re-render using updated state
  var _update2=createClassErrorUpdate(workInProgress,errorInfo,_lane);enqueueCapturedUpdate(workInProgress,_update2);return;}break;}workInProgress=workInProgress["return"];}while(workInProgress!==null);}function invokeGuardedCallbackProd(name,func,context,a,b,c,d,e,f){var funcArgs=Array.prototype.slice.call(arguments,3);try{func.apply(context,funcArgs);}catch(error){this.onError(error);}}var invokeGuardedCallbackImpl=invokeGuardedCallbackProd;{// In DEV mode, we swap out invokeGuardedCallback for a special version
  // that plays more nicely with the browser's DevTools. The idea is to preserve
  // "Pause on exceptions" behavior. Because React wraps all user-provided
  // functions in invokeGuardedCallback, and the production version of
  // invokeGuardedCallback uses a try-catch, all user exceptions are treated
  // like caught exceptions, and the DevTools won't pause unless the developer
  // takes the extra step of enabling pause on caught exceptions. This is
  // unintuitive, though, because even though React has caught the error, from
  // the developer's perspective, the error is uncaught.
  //
  // To preserve the expected "Pause on exceptions" behavior, we don't use a
  // try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
  // DOM node, and call the user-provided callback from inside an event handler
  // for that fake event. If the callback throws, the error is "captured" using
  // a global event handler. But because the error happens in a different
  // event loop context, it does not interrupt the normal program flow.
  // Effectively, this gives us try-catch behavior without actually using
  // try-catch. Neat!
  // Check that the browser supports the APIs we need to implement our special
  // DEV version of invokeGuardedCallback
  if(typeof window!=='undefined'&&typeof window.dispatchEvent==='function'&&typeof document!=='undefined'&&typeof document.createEvent==='function'){var fakeNode=document.createElement('react');invokeGuardedCallbackImpl=function invokeGuardedCallbackDev(name,func,context,a,b,c,d,e,f){// If document doesn't exist we know for sure we will crash in this method
  // when we call document.createEvent(). However this can cause confusing
  // errors: https://github.com/facebookincubator/create-react-app/issues/3482
  // So we preemptively throw with a better message instead.
  if(!(typeof document!=='undefined')){{throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");}}var evt=document.createEvent('Event');var didCall=false;// Keeps track of whether the user-provided callback threw an error. We
  // set this to true at the beginning, then set it to false right after
  // calling the function. If the function errors, `didError` will never be
  // set to false. This strategy works even if the browser is flaky and
  // fails to call our global error handler, because it doesn't rely on
  // the error event at all.
  var didError=true;// Keeps track of the value of window.event so that we can reset it
  // during the callback to let user code access window.event in the
  // browsers that support it.
  var windowEvent=window.event;// Keeps track of the descriptor of window.event to restore it after event
  // dispatching: https://github.com/facebook/react/issues/13688
  var windowEventDescriptor=Object.getOwnPropertyDescriptor(window,'event');function restoreAfterDispatch(){// We immediately remove the callback from event listeners so that
  // nested `invokeGuardedCallback` calls do not clash. Otherwise, a
  // nested call would trigger the fake event handlers of any call higher
  // in the stack.
  fakeNode.removeEventListener(evtType,callCallback,false);// We check for window.hasOwnProperty('event') to prevent the
  // window.event assignment in both IE <= 10 as they throw an error
  // "Member not found" in strict mode, and in Firefox which does not
  // support window.event.
  if(typeof window.event!=='undefined'&&window.hasOwnProperty('event')){window.event=windowEvent;}}// Create an event handler for our fake event. We will synchronously
  // dispatch our fake event using `dispatchEvent`. Inside the handler, we
  // call the user-provided callback.
  var funcArgs=Array.prototype.slice.call(arguments,3);function callCallback(){didCall=true;restoreAfterDispatch();func.apply(context,funcArgs);didError=false;}// Create a global error event handler. We use this to capture the value
  // that was thrown. It's possible that this error handler will fire more
  // than once; for example, if non-React code also calls `dispatchEvent`
  // and a handler for that event throws. We should be resilient to most of
  // those cases. Even if our error event handler fires more than once, the
  // last error event is always used. If the callback actually does error,
  // we know that the last error event is the correct one, because it's not
  // possible for anything else to have happened in between our callback
  // erroring and the code that follows the `dispatchEvent` call below. If
  // the callback doesn't error, but the error event was fired, we know to
  // ignore it because `didError` will be false, as described above.
  var error;// Use this to track whether the error event is ever called.
  var didSetError=false;var isCrossOriginError=false;function handleWindowError(event){error=event.error;didSetError=true;if(error===null&&event.colno===0&&event.lineno===0){isCrossOriginError=true;}if(event.defaultPrevented){// Some other error handler has prevented default.
  // Browsers silence the error report if this happens.
  // We'll remember this to later decide whether to log it or not.
  if(error!=null&&_typeof(error)==='object'){try{error._suppressLogging=true;}catch(inner){// Ignore.
  }}}}// Create a fake event type.
  var evtType="react-"+(name?name:'invokeguardedcallback');// Attach our event handlers
  window.addEventListener('error',handleWindowError);fakeNode.addEventListener(evtType,callCallback,false);// Synchronously dispatch our fake event. If the user-provided function
  // errors, it will trigger our global error handler.
  evt.initEvent(evtType,false,false);fakeNode.dispatchEvent(evt);if(windowEventDescriptor){Object.defineProperty(window,'event',windowEventDescriptor);}if(didCall&&didError){if(!didSetError){// The callback errored, but the error event never fired.
  error=new Error('An error was thrown inside one of your components, but React '+"doesn't know what it was. This is likely due to browser "+'flakiness. React does its best to preserve the "Pause on '+'exceptions" behavior of the DevTools, which requires some '+"DEV-mode only tricks. It's possible that these don't work in "+'your browser. Try triggering the error in production mode, '+'or switching to a modern browser. If you suspect that this is '+'actually an issue with React, please file an issue.');}else if(isCrossOriginError){error=new Error("A cross-origin error was thrown. React doesn't have access to "+'the actual error object in development. '+'See https://reactjs.org/link/crossorigin-error for more information.');}this.onError(error);}// Remove our event listeners
  window.removeEventListener('error',handleWindowError);if(!didCall){// Something went really wrong, and our event was not dispatched.
  // https://github.com/facebook/react/issues/16734
  // https://github.com/facebook/react/issues/16585
  // Fall back to the production implementation.
  restoreAfterDispatch();return invokeGuardedCallbackProd.apply(this,arguments);}};}}var invokeGuardedCallbackImpl$1=invokeGuardedCallbackImpl;var hasError=false;var caughtError=null;// Used by event system to capture/rethrow the first error.
  var reporter={onError:function onError(error){hasError=true;caughtError=error;}};/**
   * Call a function while guarding against errors that happens within it.
   * Returns an error if it throws, otherwise null.
   *
   * In production, this is implemented using a try-catch. The reason we don't
   * use a try-catch directly is so that we can swap out a different
   * implementation in DEV mode.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */function invokeGuardedCallback(name,func,context,a,b,c,d,e,f){hasError=false;caughtError=null;invokeGuardedCallbackImpl$1.apply(reporter,arguments);}function hasCaughtError(){return hasError;}function clearCaughtError(){if(hasError){var error=caughtError;hasError=false;caughtError=null;return error;}else {{{throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");}}}}var didWarnAboutUndefinedSnapshotBeforeUpdate=null;{didWarnAboutUndefinedSnapshotBeforeUpdate=new Set();}var PossiblyWeakSet=typeof WeakSet==='function'?WeakSet:Set;var callComponentWillUnmountWithTimer=function callComponentWillUnmountWithTimer(current,instance){instance.props=current.memoizedProps;instance.state=current.memoizedState;{instance.componentWillUnmount();}};// Capture errors so they don't interrupt unmounting.
  function safelyCallComponentWillUnmount(current,instance){{invokeGuardedCallback(null,callComponentWillUnmountWithTimer,null,current,instance);if(hasCaughtError()){var unmountError=clearCaughtError();captureCommitPhaseError(current,unmountError);}}}function safelyDetachRef(current){var ref=current.ref;if(ref!==null){if(typeof ref==='function'){{invokeGuardedCallback(null,ref,null,null);if(hasCaughtError()){var refError=clearCaughtError();captureCommitPhaseError(current,refError);}}}else {ref.current=null;}}}function safelyCallDestroy(current,destroy){{invokeGuardedCallback(null,destroy,null);if(hasCaughtError()){var error=clearCaughtError();captureCommitPhaseError(current,error);}}}function commitBeforeMutationLifeCycles(current,finishedWork){switch(finishedWork.tag){case FunctionComponent:case ForwardRef:case SimpleMemoComponent:case Block:{return;}case ClassComponent:{if(finishedWork.flags&Snapshot){if(current!==null){var prevProps=current.memoizedProps;var prevState=current.memoizedState;var instance=finishedWork.stateNode;// We could update instance props and state here,
  // but instead we rely on them being set during last render.
  // TODO: revisit this when we implement resuming.
  {if(finishedWork.type===finishedWork.elementType&&!didWarnAboutReassigningProps){if(instance.props!==finishedWork.memoizedProps){error('Expected %s props to match memoized props before '+'getSnapshotBeforeUpdate. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}if(instance.state!==finishedWork.memoizedState){error('Expected %s state to match memoized state before '+'getSnapshotBeforeUpdate. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.state`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}}}var snapshot=instance.getSnapshotBeforeUpdate(finishedWork.elementType===finishedWork.type?prevProps:resolveDefaultProps(finishedWork.type,prevProps),prevState);{var didWarnSet=didWarnAboutUndefinedSnapshotBeforeUpdate;if(snapshot===undefined&&!didWarnSet.has(finishedWork.type)){didWarnSet.add(finishedWork.type);error('%s.getSnapshotBeforeUpdate(): A snapshot value (or null) '+'must be returned. You have returned undefined.',getComponentName(finishedWork.type));}}instance.__reactInternalSnapshotBeforeUpdate=snapshot;}}return;}case HostRoot:{if(supportsMutation){if(finishedWork.flags&Snapshot){var root=finishedWork.stateNode;clearContainer(root.containerInfo);}}return;}case HostComponent:case HostText:case HostPortal:case IncompleteClassComponent:// Nothing to do for these component types
  return;}{{throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");}}}function commitHookEffectListUnmount(tag,finishedWork){var updateQueue=finishedWork.updateQueue;var lastEffect=updateQueue!==null?updateQueue.lastEffect:null;if(lastEffect!==null){var firstEffect=lastEffect.next;var effect=firstEffect;do{if((effect.tag&tag)===tag){// Unmount
  var destroy=effect.destroy;effect.destroy=undefined;if(destroy!==undefined){destroy();}}effect=effect.next;}while(effect!==firstEffect);}}function commitHookEffectListMount(tag,finishedWork){var updateQueue=finishedWork.updateQueue;var lastEffect=updateQueue!==null?updateQueue.lastEffect:null;if(lastEffect!==null){var firstEffect=lastEffect.next;var effect=firstEffect;do{if((effect.tag&tag)===tag){// Mount
  var create=effect.create;effect.destroy=create();{var destroy=effect.destroy;if(destroy!==undefined&&typeof destroy!=='function'){var addendum=void 0;if(destroy===null){addendum=' You returned null. If your effect does not require clean '+'up, return undefined (or nothing).';}else if(typeof destroy.then==='function'){addendum='\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. '+'Instead, write the async function inside your effect '+'and call it immediately:\n\n'+'useEffect(() => {\n'+'  async function fetchData() {\n'+'    // You can await here\n'+'    const response = await MyAPI.getData(someId);\n'+'    // ...\n'+'  }\n'+'  fetchData();\n'+"}, [someId]); // Or [] if effect doesn't need props or state\n\n"+'Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching';}else {addendum=' You returned: '+destroy;}error('An effect function must not return anything besides a function, '+'which is used for clean-up.%s',addendum);}}}effect=effect.next;}while(effect!==firstEffect);}}function schedulePassiveEffects(finishedWork){var updateQueue=finishedWork.updateQueue;var lastEffect=updateQueue!==null?updateQueue.lastEffect:null;if(lastEffect!==null){var firstEffect=lastEffect.next;var effect=firstEffect;do{var _effect=effect,next=_effect.next,tag=_effect.tag;if((tag&Passive$1)!==NoFlags$1&&(tag&HasEffect)!==NoFlags$1){enqueuePendingPassiveHookEffectUnmount(finishedWork,effect);enqueuePendingPassiveHookEffectMount(finishedWork,effect);}effect=next;}while(effect!==firstEffect);}}function commitLifeCycles(finishedRoot,current,finishedWork,committedLanes){switch(finishedWork.tag){case FunctionComponent:case ForwardRef:case SimpleMemoComponent:case Block:{// At this point layout effects have already been destroyed (during mutation phase).
  // This is done to prevent sibling component effects from interfering with each other,
  // e.g. a destroy function in one component should never override a ref set
  // by a create function in another component during the same commit.
  {commitHookEffectListMount(Layout|HasEffect,finishedWork);}schedulePassiveEffects(finishedWork);return;}case ClassComponent:{var instance=finishedWork.stateNode;if(finishedWork.flags&Update){if(current===null){// We could update instance props and state here,
  // but instead we rely on them being set during last render.
  // TODO: revisit this when we implement resuming.
  {if(finishedWork.type===finishedWork.elementType&&!didWarnAboutReassigningProps){if(instance.props!==finishedWork.memoizedProps){error('Expected %s props to match memoized props before '+'componentDidMount. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}if(instance.state!==finishedWork.memoizedState){error('Expected %s state to match memoized state before '+'componentDidMount. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.state`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}}}{instance.componentDidMount();}}else {var prevProps=finishedWork.elementType===finishedWork.type?current.memoizedProps:resolveDefaultProps(finishedWork.type,current.memoizedProps);var prevState=current.memoizedState;// We could update instance props and state here,
  // but instead we rely on them being set during last render.
  // TODO: revisit this when we implement resuming.
  {if(finishedWork.type===finishedWork.elementType&&!didWarnAboutReassigningProps){if(instance.props!==finishedWork.memoizedProps){error('Expected %s props to match memoized props before '+'componentDidUpdate. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}if(instance.state!==finishedWork.memoizedState){error('Expected %s state to match memoized state before '+'componentDidUpdate. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.state`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}}}{instance.componentDidUpdate(prevProps,prevState,instance.__reactInternalSnapshotBeforeUpdate);}}}// TODO: I think this is now always non-null by the time it reaches the
  // commit phase. Consider removing the type check.
  var updateQueue=finishedWork.updateQueue;if(updateQueue!==null){{if(finishedWork.type===finishedWork.elementType&&!didWarnAboutReassigningProps){if(instance.props!==finishedWork.memoizedProps){error('Expected %s props to match memoized props before '+'processing the update queue. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}if(instance.state!==finishedWork.memoizedState){error('Expected %s state to match memoized state before '+'processing the update queue. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.state`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}}}// We could update instance props and state here,
  // but instead we rely on them being set during last render.
  // TODO: revisit this when we implement resuming.
  commitUpdateQueue(finishedWork,updateQueue,instance);}return;}case HostRoot:{// TODO: I think this is now always non-null by the time it reaches the
  // commit phase. Consider removing the type check.
  var _updateQueue=finishedWork.updateQueue;if(_updateQueue!==null){var _instance=null;if(finishedWork.child!==null){switch(finishedWork.child.tag){case HostComponent:_instance=getPublicInstance(finishedWork.child.stateNode);break;case ClassComponent:_instance=finishedWork.child.stateNode;break;}}commitUpdateQueue(finishedWork,_updateQueue,_instance);}return;}case HostComponent:{var _instance2=finishedWork.stateNode;// Renderers may schedule work to be done after host components are mounted
  // (eg DOM renderer may schedule auto-focus for inputs and form controls).
  // These effects should only be committed when components are first mounted,
  // aka when there is no current/alternate.
  if(current===null&&finishedWork.flags&Update){var type=finishedWork.type;var props=finishedWork.memoizedProps;commitMount(_instance2,type,props,finishedWork);}return;}case HostText:{// We have no life-cycles associated with text.
  return;}case HostPortal:{// We have no life-cycles associated with portals.
  return;}case Profiler:{{var _finishedWork$memoize2=finishedWork.memoizedProps,onCommit=_finishedWork$memoize2.onCommit,onRender=_finishedWork$memoize2.onRender;var effectDuration=finishedWork.stateNode.effectDuration;var commitTime=getCommitTime();if(typeof onRender==='function'){{onRender(finishedWork.memoizedProps.id,current===null?'mount':'update',finishedWork.actualDuration,finishedWork.treeBaseDuration,finishedWork.actualStartTime,commitTime,finishedRoot.memoizedInteractions);}}}return;}case SuspenseComponent:{commitSuspenseHydrationCallbacks(finishedRoot,finishedWork);return;}case SuspenseListComponent:case IncompleteClassComponent:case FundamentalComponent:case ScopeComponent:case OffscreenComponent:case LegacyHiddenComponent:return;}{{throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");}}}function hideOrUnhideAllChildren(finishedWork,isHidden){if(supportsMutation){// We only have the top Fiber that was inserted but we need to recurse down its
  // children to find all the terminal nodes.
  var node=finishedWork;while(true){if(node.tag===HostComponent){var instance=node.stateNode;if(isHidden){hideInstance(instance);}else {unhideInstance(node.stateNode,node.memoizedProps);}}else if(node.tag===HostText){var _instance3=node.stateNode;if(isHidden){hideTextInstance(_instance3);}else {unhideTextInstance(_instance3,node.memoizedProps);}}else if((node.tag===OffscreenComponent||node.tag===LegacyHiddenComponent)&&node.memoizedState!==null&&node!==finishedWork);else if(node.child!==null){node.child["return"]=node;node=node.child;continue;}if(node===finishedWork){return;}while(node.sibling===null){if(node["return"]===null||node["return"]===finishedWork){return;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}}}function commitAttachRef(finishedWork){var ref=finishedWork.ref;if(ref!==null){var instance=finishedWork.stateNode;var instanceToUse;switch(finishedWork.tag){case HostComponent:instanceToUse=getPublicInstance(instance);break;default:instanceToUse=instance;}// Moved outside to ensure DCE works with this flag
  if(typeof ref==='function'){ref(instanceToUse);}else {{if(!ref.hasOwnProperty('current')){error('Unexpected ref object provided for %s. '+'Use either a ref-setter function or React.createRef().',getComponentName(finishedWork.type));}}ref.current=instanceToUse;}}}function commitDetachRef(current){var currentRef=current.ref;if(currentRef!==null){if(typeof currentRef==='function'){currentRef(null);}else {currentRef.current=null;}}}// User-originating errors (lifecycles and refs) should not interrupt
  // deletion, so don't let them throw. Host-originating errors should
  // interrupt deletion, so it's okay
  function commitUnmount(finishedRoot,current,renderPriorityLevel){onCommitUnmount(current);switch(current.tag){case FunctionComponent:case ForwardRef:case MemoComponent:case SimpleMemoComponent:case Block:{var updateQueue=current.updateQueue;if(updateQueue!==null){var lastEffect=updateQueue.lastEffect;if(lastEffect!==null){var firstEffect=lastEffect.next;var effect=firstEffect;do{var _effect2=effect,destroy=_effect2.destroy,tag=_effect2.tag;if(destroy!==undefined){if((tag&Passive$1)!==NoFlags$1){enqueuePendingPassiveHookEffectUnmount(current,effect);}else {{safelyCallDestroy(current,destroy);}}}effect=effect.next;}while(effect!==firstEffect);}}return;}case ClassComponent:{safelyDetachRef(current);var instance=current.stateNode;if(typeof instance.componentWillUnmount==='function'){safelyCallComponentWillUnmount(current,instance);}return;}case HostComponent:{safelyDetachRef(current);return;}case HostPortal:{// TODO: this is recursive.
  // We are also not using this parent because
  // the portal will get pushed immediately.
  if(supportsMutation){unmountHostComponents(finishedRoot,current);}else if(supportsPersistence){emptyPortalContainer(current);}return;}case FundamentalComponent:{return;}case DehydratedFragment:{return;}case ScopeComponent:{return;}}}function commitNestedUnmounts(finishedRoot,root,renderPriorityLevel){// While we're inside a removed host node we don't want to call
  // removeChild on the inner nodes because they're removed by the top
  // call anyway. We also want to call componentWillUnmount on all
  // composites before this host node is removed from the tree. Therefore
  // we do an inner loop while we're still inside the host node.
  var node=root;while(true){commitUnmount(finishedRoot,node);// Visit children because they may contain more composite or host nodes.
  // Skip portals because commitUnmount() currently visits them recursively.
  if(node.child!==null&&(// If we use mutation we drill down into portals using commitUnmount above.
  // If we don't use mutation we drill down into portals here instead.
  !supportsMutation||node.tag!==HostPortal)){node.child["return"]=node;node=node.child;continue;}if(node===root){return;}while(node.sibling===null){if(node["return"]===null||node["return"]===root){return;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}}function detachFiberMutation(fiber){// Cut off the return pointers to disconnect it from the tree. Ideally, we
  // should clear the child pointer of the parent alternate to let this
  // get GC:ed but we don't know which for sure which parent is the current
  // one so we'll settle for GC:ing the subtree of this child. This child
  // itself will be GC:ed when the parent updates the next time.
  // Note: we cannot null out sibling here, otherwise it can cause issues
  // with findDOMNode and how it requires the sibling field to carry out
  // traversal in a later effect. See PR #16820. We now clear the sibling
  // field after effects, see: detachFiberAfterEffects.
  //
  // Don't disconnect stateNode now; it will be detached in detachFiberAfterEffects.
  // It may be required if the current component is an error boundary,
  // and one of its descendants throws while unmounting a passive effect.
  fiber.alternate=null;fiber.child=null;fiber.dependencies=null;fiber.firstEffect=null;fiber.lastEffect=null;fiber.memoizedProps=null;fiber.memoizedState=null;fiber.pendingProps=null;fiber["return"]=null;fiber.updateQueue=null;{fiber._debugOwner=null;}}function emptyPortalContainer(current){if(!supportsPersistence){return;}var portal=current.stateNode;var containerInfo=portal.containerInfo;var emptyChildSet=createContainerChildSet(containerInfo);replaceContainerChildren(containerInfo,emptyChildSet);}function commitContainer(finishedWork){if(!supportsPersistence){return;}switch(finishedWork.tag){case ClassComponent:case HostComponent:case HostText:case FundamentalComponent:{return;}case HostRoot:case HostPortal:{var portalOrRoot=finishedWork.stateNode;var containerInfo=portalOrRoot.containerInfo,pendingChildren=portalOrRoot.pendingChildren;replaceContainerChildren(containerInfo,pendingChildren);return;}}{{throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");}}}function getHostParentFiber(fiber){var parent=fiber["return"];while(parent!==null){if(isHostParent(parent)){return parent;}parent=parent["return"];}{{throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");}}}function isHostParent(fiber){return fiber.tag===HostComponent||fiber.tag===HostRoot||fiber.tag===HostPortal;}function getHostSibling(fiber){// We're going to search forward into the tree until we find a sibling host
  // node. Unfortunately, if multiple insertions are done in a row we have to
  // search past them. This leads to exponential search for the next sibling.
  // TODO: Find a more efficient way to do this.
  var node=fiber;siblings:while(true){// If we didn't find anything, let's try the next sibling.
  while(node.sibling===null){if(node["return"]===null||isHostParent(node["return"])){// If we pop out of the root or hit the parent the fiber we are the
  // last sibling.
  return null;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;while(node.tag!==HostComponent&&node.tag!==HostText&&node.tag!==DehydratedFragment){// If it is not host node and, we might have a host node inside it.
  // Try to search down until we find one.
  if(node.flags&Placement){// If we don't have a child, try the siblings instead.
  continue siblings;}// If we don't have a child, try the siblings instead.
  // We also skip portals because they are not part of this host tree.
  if(node.child===null||node.tag===HostPortal){continue siblings;}else {node.child["return"]=node;node=node.child;}}// Check if this host node is stable or about to be placed.
  if(!(node.flags&Placement)){// Found it!
  return node.stateNode;}}}function commitPlacement(finishedWork){if(!supportsMutation){return;}// Recursively insert all host nodes into the parent.
  var parentFiber=getHostParentFiber(finishedWork);// Note: these two variables *must* always be updated together.
  var parent;var isContainer;var parentStateNode=parentFiber.stateNode;switch(parentFiber.tag){case HostComponent:parent=parentStateNode;isContainer=false;break;case HostRoot:parent=parentStateNode.containerInfo;isContainer=true;break;case HostPortal:parent=parentStateNode.containerInfo;isContainer=true;break;case FundamentalComponent:// eslint-disable-next-line-no-fallthrough
  default:{{throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");}}}if(parentFiber.flags&ContentReset){// Reset the text content of the parent before doing any insertions
  resetTextContent(parent);// Clear ContentReset from the effect tag
  parentFiber.flags&=~ContentReset;}var before=getHostSibling(finishedWork);// We only have the top Fiber that was inserted but we need to recurse down its
  // children to find all the terminal nodes.
  if(isContainer){insertOrAppendPlacementNodeIntoContainer(finishedWork,before,parent);}else {insertOrAppendPlacementNode(finishedWork,before,parent);}}function insertOrAppendPlacementNodeIntoContainer(node,before,parent){var tag=node.tag;var isHost=tag===HostComponent||tag===HostText;if(isHost||enableFundamentalAPI){var stateNode=isHost?node.stateNode:node.stateNode.instance;if(before){insertInContainerBefore(parent,stateNode,before);}else {appendChildToContainer(parent,stateNode);}}else if(tag===HostPortal);else {var child=node.child;if(child!==null){insertOrAppendPlacementNodeIntoContainer(child,before,parent);var sibling=child.sibling;while(sibling!==null){insertOrAppendPlacementNodeIntoContainer(sibling,before,parent);sibling=sibling.sibling;}}}}function insertOrAppendPlacementNode(node,before,parent){var tag=node.tag;var isHost=tag===HostComponent||tag===HostText;if(isHost||enableFundamentalAPI){var stateNode=isHost?node.stateNode:node.stateNode.instance;if(before){insertBefore(parent,stateNode,before);}else {appendChild(parent,stateNode);}}else if(tag===HostPortal);else {var child=node.child;if(child!==null){insertOrAppendPlacementNode(child,before,parent);var sibling=child.sibling;while(sibling!==null){insertOrAppendPlacementNode(sibling,before,parent);sibling=sibling.sibling;}}}}function unmountHostComponents(finishedRoot,current,renderPriorityLevel){// We only have the top Fiber that was deleted but we need to recurse down its
  // children to find all the terminal nodes.
  var node=current;// Each iteration, currentParent is populated with node's host parent if not
  // currentParentIsValid.
  var currentParentIsValid=false;// Note: these two variables *must* always be updated together.
  var currentParent;var currentParentIsContainer;while(true){if(!currentParentIsValid){var parent=node["return"];findParent:while(true){if(!(parent!==null)){{throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");}}var parentStateNode=parent.stateNode;switch(parent.tag){case HostComponent:currentParent=parentStateNode;currentParentIsContainer=false;break findParent;case HostRoot:currentParent=parentStateNode.containerInfo;currentParentIsContainer=true;break findParent;case HostPortal:currentParent=parentStateNode.containerInfo;currentParentIsContainer=true;break findParent;}parent=parent["return"];}currentParentIsValid=true;}if(node.tag===HostComponent||node.tag===HostText){commitNestedUnmounts(finishedRoot,node);// After all the children have unmounted, it is now safe to remove the
  // node from the tree.
  if(currentParentIsContainer){removeChildFromContainer(currentParent,node.stateNode);}else {removeChild(currentParent,node.stateNode);}// Don't visit children because we already visited them.
  }else if(node.tag===HostPortal){if(node.child!==null){// When we go into a portal, it becomes the parent to remove from.
  // We will reassign it back when we pop the portal on the way up.
  currentParent=node.stateNode.containerInfo;currentParentIsContainer=true;// Visit children because portals might contain host components.
  node.child["return"]=node;node=node.child;continue;}}else {commitUnmount(finishedRoot,node);// Visit children because we may find more host components below.
  if(node.child!==null){node.child["return"]=node;node=node.child;continue;}}if(node===current){return;}while(node.sibling===null){if(node["return"]===null||node["return"]===current){return;}node=node["return"];if(node.tag===HostPortal){// When we go out of the portal, we need to restore the parent.
  // Since we don't keep a stack of them, we will search for it.
  currentParentIsValid=false;}}node.sibling["return"]=node["return"];node=node.sibling;}}function commitDeletion(finishedRoot,current,renderPriorityLevel){if(supportsMutation){// Recursively delete all host nodes from the parent.
  // Detach refs and call componentWillUnmount() on the whole subtree.
  unmountHostComponents(finishedRoot,current);}else {// Detach refs and call componentWillUnmount() on the whole subtree.
  commitNestedUnmounts(finishedRoot,current);}var alternate=current.alternate;detachFiberMutation(current);if(alternate!==null){detachFiberMutation(alternate);}}function commitWork(current,finishedWork){if(!supportsMutation){switch(finishedWork.tag){case FunctionComponent:case ForwardRef:case MemoComponent:case SimpleMemoComponent:case Block:{// Layout effects are destroyed during the mutation phase so that all
  // destroy functions for all fibers are called before any create functions.
  // This prevents sibling component effects from interfering with each other,
  // e.g. a destroy function in one component should never override a ref set
  // by a create function in another component during the same commit.
  {commitHookEffectListUnmount(Layout|HasEffect,finishedWork);}return;}case Profiler:{return;}case SuspenseComponent:{commitSuspenseComponent(finishedWork);attachSuspenseRetryListeners(finishedWork);return;}case SuspenseListComponent:{attachSuspenseRetryListeners(finishedWork);return;}case HostRoot:{if(supportsHydration){var root=finishedWork.stateNode;if(root.hydrate){// We've just hydrated. No need to hydrate again.
  root.hydrate=false;commitHydratedContainer(root.containerInfo);}}break;}case OffscreenComponent:case LegacyHiddenComponent:{return;}}commitContainer(finishedWork);return;}switch(finishedWork.tag){case FunctionComponent:case ForwardRef:case MemoComponent:case SimpleMemoComponent:case Block:{// Layout effects are destroyed during the mutation phase so that all
  // destroy functions for all fibers are called before any create functions.
  // This prevents sibling component effects from interfering with each other,
  // e.g. a destroy function in one component should never override a ref set
  // by a create function in another component during the same commit.
  {commitHookEffectListUnmount(Layout|HasEffect,finishedWork);}return;}case ClassComponent:{return;}case HostComponent:{var instance=finishedWork.stateNode;if(instance!=null){// Commit the work prepared earlier.
  var newProps=finishedWork.memoizedProps;// For hydration we reuse the update path but we treat the oldProps
  // as the newProps. The updatePayload will contain the real change in
  // this case.
  var oldProps=current!==null?current.memoizedProps:newProps;var type=finishedWork.type;// TODO: Type the updateQueue to be specific to host components.
  var updatePayload=finishedWork.updateQueue;finishedWork.updateQueue=null;if(updatePayload!==null){commitUpdate(instance,updatePayload,type,oldProps,newProps,finishedWork);}}return;}case HostText:{if(!(finishedWork.stateNode!==null)){{throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");}}var textInstance=finishedWork.stateNode;var newText=finishedWork.memoizedProps;// For hydration we reuse the update path but we treat the oldProps
  // as the newProps. The updatePayload will contain the real change in
  // this case.
  var oldText=current!==null?current.memoizedProps:newText;commitTextUpdate(textInstance,oldText,newText);return;}case HostRoot:{if(supportsHydration){var _root=finishedWork.stateNode;if(_root.hydrate){// We've just hydrated. No need to hydrate again.
  _root.hydrate=false;commitHydratedContainer(_root.containerInfo);}}return;}case Profiler:{return;}case SuspenseComponent:{commitSuspenseComponent(finishedWork);attachSuspenseRetryListeners(finishedWork);return;}case SuspenseListComponent:{attachSuspenseRetryListeners(finishedWork);return;}case IncompleteClassComponent:{return;}case FundamentalComponent:{break;}case ScopeComponent:{break;}case OffscreenComponent:case LegacyHiddenComponent:{var newState=finishedWork.memoizedState;var isHidden=newState!==null;hideOrUnhideAllChildren(finishedWork,isHidden);return;}}{{throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");}}}function commitSuspenseComponent(finishedWork){var newState=finishedWork.memoizedState;if(newState!==null){markCommitTimeOfFallback();if(supportsMutation){// Hide the Offscreen component that contains the primary children. TODO:
  // Ideally, this effect would have been scheduled on the Offscreen fiber
  // itself. That's how unhiding works: the Offscreen component schedules an
  // effect on itself. However, in this case, the component didn't complete,
  // so the fiber was never added to the effect list in the normal path. We
  // could have appended it to the effect list in the Suspense component's
  // second pass, but doing it this way is less complicated. This would be
  // simpler if we got rid of the effect list and traversed the tree, like
  // we're planning to do.
  var primaryChildParent=finishedWork.child;hideOrUnhideAllChildren(primaryChildParent,true);}}}function commitSuspenseHydrationCallbacks(finishedRoot,finishedWork){if(!supportsHydration){return;}var newState=finishedWork.memoizedState;if(newState===null){var current=finishedWork.alternate;if(current!==null){var prevState=current.memoizedState;if(prevState!==null){var suspenseInstance=prevState.dehydrated;if(suspenseInstance!==null){commitHydratedSuspenseInstance(suspenseInstance);}}}}}function attachSuspenseRetryListeners(finishedWork){// If this boundary just timed out, then it will have a set of wakeables.
  // For each wakeable, attach a listener so that when it resolves, React
  // attempts to re-render the boundary in the primary (pre-timeout) state.
  var wakeables=finishedWork.updateQueue;if(wakeables!==null){finishedWork.updateQueue=null;var retryCache=finishedWork.stateNode;if(retryCache===null){retryCache=finishedWork.stateNode=new PossiblyWeakSet();}wakeables.forEach(function(wakeable){// Memoize using the boundary fiber to prevent redundant listeners.
  var retry=resolveRetryWakeable.bind(null,finishedWork,wakeable);if(!retryCache.has(wakeable)){{if(wakeable.__reactDoNotTraceInteractions!==true){retry=tracing.unstable_wrap(retry);}}retryCache.add(wakeable);wakeable.then(retry,retry);}});}}// This function detects when a Suspense boundary goes from visible to hidden.
  // It returns false if the boundary is already hidden.
  // TODO: Use an effect tag.
  function isSuspenseBoundaryBeingHidden(current,finishedWork){if(current!==null){var oldState=current.memoizedState;if(oldState===null||oldState.dehydrated!==null){var newState=finishedWork.memoizedState;return newState!==null&&newState.dehydrated===null;}}return false;}function commitResetTextContent(current){if(!supportsMutation){return;}resetTextContent(current.stateNode);}var COMPONENT_TYPE=0;var HAS_PSEUDO_CLASS_TYPE=1;var ROLE_TYPE=2;var TEST_NAME_TYPE=3;var TEXT_TYPE=4;if(typeof Symbol==='function'&&Symbol["for"]){var symbolFor$1=Symbol["for"];COMPONENT_TYPE=symbolFor$1('selector.component');HAS_PSEUDO_CLASS_TYPE=symbolFor$1('selector.has_pseudo_class');ROLE_TYPE=symbolFor$1('selector.role');TEST_NAME_TYPE=symbolFor$1('selector.test_id');TEXT_TYPE=symbolFor$1('selector.text');}function createComponentSelector(component){return {$$typeof:COMPONENT_TYPE,value:component};}function createHasPsuedoClassSelector(selectors){return {$$typeof:HAS_PSEUDO_CLASS_TYPE,value:selectors};}function createRoleSelector(role){return {$$typeof:ROLE_TYPE,value:role};}function createTextSelector(text){return {$$typeof:TEXT_TYPE,value:text};}function createTestNameSelector(id){return {$$typeof:TEST_NAME_TYPE,value:id};}function findFiberRootForHostRoot(hostRoot){var maybeFiber=getInstanceFromNode(hostRoot);if(maybeFiber!=null){if(!(typeof maybeFiber.memoizedProps['data-testname']==='string')){{throw Error("Invalid host root specified. Should be either a React container or a node with a testname attribute.");}}return maybeFiber;}else {var fiberRoot=findFiberRoot(hostRoot);if(!(fiberRoot!==null)){{throw Error("Could not find React container within specified host subtree.");}}// The Flow type for FiberRoot is a little funky.
  // createFiberRoot() cheats this by treating the root as :any and adding stateNode lazily.
  return fiberRoot.stateNode.current;}}function matchSelector(fiber,selector){switch(selector.$$typeof){case COMPONENT_TYPE:if(fiber.type===selector.value){return true;}break;case HAS_PSEUDO_CLASS_TYPE:return hasMatchingPaths(fiber,selector.value);case ROLE_TYPE:if(fiber.tag===HostComponent){var node=fiber.stateNode;if(matchAccessibilityRole(node,selector.value)){return true;}}break;case TEXT_TYPE:if(fiber.tag===HostComponent||fiber.tag===HostText){var textContent=getTextContent(fiber);if(textContent!==null&&textContent.indexOf(selector.value)>=0){return true;}}break;case TEST_NAME_TYPE:if(fiber.tag===HostComponent){var dataTestID=fiber.memoizedProps['data-testname'];if(typeof dataTestID==='string'&&dataTestID.toLowerCase()===selector.value.toLowerCase()){return true;}}break;default:{{throw Error("Invalid selector type "+selector+" specified.");}}}return false;}function selectorToString(selector){switch(selector.$$typeof){case COMPONENT_TYPE:var displayName=getComponentName(selector.value)||'Unknown';return "<"+displayName+">";case HAS_PSEUDO_CLASS_TYPE:return ":has("+(selectorToString(selector)||'')+")";case ROLE_TYPE:return "[role=\""+selector.value+"\"]";case TEXT_TYPE:return "\""+selector.value+"\"";case TEST_NAME_TYPE:return "[data-testname=\""+selector.value+"\"]";default:{{throw Error("Invalid selector type "+selector+" specified.");}}}}function findPaths(root,selectors){var matchingFibers=[];var stack=[root,0];var index=0;while(index<stack.length){var fiber=stack[index++];var selectorIndex=stack[index++];var selector=selectors[selectorIndex];if(fiber.tag===HostComponent&&isHiddenSubtree(fiber)){continue;}else {while(selector!=null&&matchSelector(fiber,selector)){selectorIndex++;selector=selectors[selectorIndex];}}if(selectorIndex===selectors.length){matchingFibers.push(fiber);}else {var child=fiber.child;while(child!==null){stack.push(child,selectorIndex);child=child.sibling;}}}return matchingFibers;}// Same as findPaths but with eager bailout on first match
  function hasMatchingPaths(root,selectors){var stack=[root,0];var index=0;while(index<stack.length){var fiber=stack[index++];var selectorIndex=stack[index++];var selector=selectors[selectorIndex];if(fiber.tag===HostComponent&&isHiddenSubtree(fiber)){continue;}else {while(selector!=null&&matchSelector(fiber,selector)){selectorIndex++;selector=selectors[selectorIndex];}}if(selectorIndex===selectors.length){return true;}else {var child=fiber.child;while(child!==null){stack.push(child,selectorIndex);child=child.sibling;}}}return false;}function findAllNodes(hostRoot,selectors){if(!supportsTestSelectors){{{throw Error("Test selector API is not supported by this renderer.");}}}var root=findFiberRootForHostRoot(hostRoot);var matchingFibers=findPaths(root,selectors);var instanceRoots=[];var stack=Array.from(matchingFibers);var index=0;while(index<stack.length){var node=stack[index++];if(node.tag===HostComponent){if(isHiddenSubtree(node)){continue;}instanceRoots.push(node.stateNode);}else {var child=node.child;while(child!==null){stack.push(child);child=child.sibling;}}}return instanceRoots;}function getFindAllNodesFailureDescription(hostRoot,selectors){if(!supportsTestSelectors){{{throw Error("Test selector API is not supported by this renderer.");}}}var root=findFiberRootForHostRoot(hostRoot);var maxSelectorIndex=0;var matchedNames=[];// The logic of this loop should be kept in sync with findPaths()
  var stack=[root,0];var index=0;while(index<stack.length){var fiber=stack[index++];var selectorIndex=stack[index++];var selector=selectors[selectorIndex];if(fiber.tag===HostComponent&&isHiddenSubtree(fiber)){continue;}else if(matchSelector(fiber,selector)){matchedNames.push(selectorToString(selector));selectorIndex++;if(selectorIndex>maxSelectorIndex){maxSelectorIndex=selectorIndex;}}if(selectorIndex<selectors.length){var child=fiber.child;while(child!==null){stack.push(child,selectorIndex);child=child.sibling;}}}if(maxSelectorIndex<selectors.length){var unmatchedNames=[];for(var i=maxSelectorIndex;i<selectors.length;i++){unmatchedNames.push(selectorToString(selectors[i]));}return 'findAllNodes was able to match part of the selector:\n'+("  "+matchedNames.join(' > ')+"\n\n")+'No matching component was found for:\n'+("  "+unmatchedNames.join(' > '));}return null;}function findBoundingRects(hostRoot,selectors){if(!supportsTestSelectors){{{throw Error("Test selector API is not supported by this renderer.");}}}var instanceRoots=findAllNodes(hostRoot,selectors);var boundingRects=[];for(var i=0;i<instanceRoots.length;i++){boundingRects.push(getBoundingRect(instanceRoots[i]));}for(var _i=boundingRects.length-1;_i>0;_i--){var targetRect=boundingRects[_i];var targetLeft=targetRect.x;var targetRight=targetLeft+targetRect.width;var targetTop=targetRect.y;var targetBottom=targetTop+targetRect.height;for(var j=_i-1;j>=0;j--){if(_i!==j){var otherRect=boundingRects[j];var otherLeft=otherRect.x;var otherRight=otherLeft+otherRect.width;var otherTop=otherRect.y;var otherBottom=otherTop+otherRect.height;// Merging all rects to the minimums set would be complicated,
  // but we can handle the most common cases:
  // 1. completely overlapping rects
  // 2. adjacent rects that are the same width or height (e.g. items in a list)
  //
  // Even given the above constraints,
  // we still won't end up with the fewest possible rects without doing multiple passes,
  // but it's good enough for this purpose.
  if(targetLeft>=otherLeft&&targetTop>=otherTop&&targetRight<=otherRight&&targetBottom<=otherBottom){// Complete overlapping rects; remove the inner one.
  boundingRects.splice(_i,1);break;}else if(targetLeft===otherLeft&&targetRect.width===otherRect.width&&!(otherBottom<targetTop)&&!(otherTop>targetBottom)){// Adjacent vertical rects; merge them.
  if(otherTop>targetTop){otherRect.height+=otherTop-targetTop;otherRect.y=targetTop;}if(otherBottom<targetBottom){otherRect.height=targetBottom-otherTop;}boundingRects.splice(_i,1);break;}else if(targetTop===otherTop&&targetRect.height===otherRect.height&&!(otherRight<targetLeft)&&!(otherLeft>targetRight)){// Adjacent horizontal rects; merge them.
  if(otherLeft>targetLeft){otherRect.width+=otherLeft-targetLeft;otherRect.x=targetLeft;}if(otherRight<targetRight){otherRect.width=targetRight-otherLeft;}boundingRects.splice(_i,1);break;}}}}return boundingRects;}function focusWithin(hostRoot,selectors){if(!supportsTestSelectors){{{throw Error("Test selector API is not supported by this renderer.");}}}var root=findFiberRootForHostRoot(hostRoot);var matchingFibers=findPaths(root,selectors);var stack=Array.from(matchingFibers);var index=0;while(index<stack.length){var fiber=stack[index++];if(isHiddenSubtree(fiber)){continue;}if(fiber.tag===HostComponent){var node=fiber.stateNode;if(setFocusIfFocusable(node)){return true;}}var child=fiber.child;while(child!==null){stack.push(child);child=child.sibling;}}return false;}var commitHooks=[];function onCommitRoot$1(){if(supportsTestSelectors){commitHooks.forEach(function(commitHook){return commitHook();});}}function observeVisibleRects(hostRoot,selectors,callback,options){if(!supportsTestSelectors){{{throw Error("Test selector API is not supported by this renderer.");}}}var instanceRoots=findAllNodes(hostRoot,selectors);var _setupIntersectionObs=setupIntersectionObserver(instanceRoots,callback,options),_disconnect=_setupIntersectionObs.disconnect,observe=_setupIntersectionObs.observe,unobserve=_setupIntersectionObs.unobserve;// When React mutates the host environment, we may need to change what we're listening to.
  var commitHook=function commitHook(){var nextInstanceRoots=findAllNodes(hostRoot,selectors);instanceRoots.forEach(function(target){if(nextInstanceRoots.indexOf(target)<0){unobserve(target);}});nextInstanceRoots.forEach(function(target){if(instanceRoots.indexOf(target)<0){observe(target);}});};commitHooks.push(commitHook);return {disconnect:function disconnect(){// Stop listening for React mutations:
  var index=commitHooks.indexOf(commitHook);if(index>=0){commitHooks.splice(index,1);}// Disconnect the host observer:
  _disconnect();}};}var didWarnAboutMessageChannel=false;var enqueueTaskImpl=null;function enqueueTask(task){if(enqueueTaskImpl===null){try{// read require off the module object to get around the bundlers.
  // we don't want them to detect a require and bundle a Node polyfill.
  var requireString=('require'+Math.random()).slice(0,7);var nodeRequire=module&&module[requireString];// assuming we're in node, let's try to get node's
  // version of setImmediate, bypassing fake timers if any.
  enqueueTaskImpl=nodeRequire.call(module,'timers').setImmediate;}catch(_err){// we're in a browser
  // we can't use regular timers because they may still be faked
  // so we try MessageChannel+postMessage instead
  enqueueTaskImpl=function enqueueTaskImpl(callback){{if(didWarnAboutMessageChannel===false){didWarnAboutMessageChannel=true;if(typeof MessageChannel==='undefined'){error('This browser does not have a MessageChannel implementation, '+'so enqueuing tasks via await act(async () => ...) will fail. '+'Please file an issue at https://github.com/facebook/react/issues '+'if you encounter this warning.');}}}var channel=new MessageChannel();channel.port1.onmessage=callback;channel.port2.postMessage(undefined);};}}return enqueueTaskImpl(task);}var ceil=Math.ceil;var ReactCurrentDispatcher$2=ReactSharedInternals.ReactCurrentDispatcher,ReactCurrentOwner$2=ReactSharedInternals.ReactCurrentOwner,IsSomeRendererActing=ReactSharedInternals.IsSomeRendererActing;var NoContext=/*             */0;var BatchedContext=/*               */1;var EventContext=/*                 */2;var DiscreteEventContext=/*         */4;var LegacyUnbatchedContext=/*       */8;var RenderContext=/*                */16;var CommitContext=/*                */32;var RetryAfterError=/*       */64;var RootIncomplete=0;var RootFatalErrored=1;var RootErrored=2;var RootSuspended=3;var RootSuspendedWithDelay=4;var RootCompleted=5;// Describes where we are in the React execution stack
  var executionContext=NoContext;// The root we're working on
  var workInProgressRoot=null;// The fiber we're working on
  var workInProgress=null;// The lanes we're rendering
  var workInProgressRootRenderLanes=NoLanes;// Stack that allows components to change the render lanes for its subtree
  // This is a superset of the lanes we started working on at the root. The only
  // case where it's different from `workInProgressRootRenderLanes` is when we
  // enter a subtree that is hidden and needs to be unhidden: Suspense and
  // Offscreen component.
  //
  // Most things in the work loop should deal with workInProgressRootRenderLanes.
  // Most things in begin/complete phases should deal with subtreeRenderLanes.
  var subtreeRenderLanes=NoLanes;var subtreeRenderLanesCursor=createCursor(NoLanes);// Whether to root completed, errored, suspended, etc.
  var workInProgressRootExitStatus=RootIncomplete;// A fatal error, if one is thrown
  var workInProgressRootFatalError=null;// "Included" lanes refer to lanes that were worked on during this render. It's
  // slightly different than `renderLanes` because `renderLanes` can change as you
  // enter and exit an Offscreen tree. This value is the combination of all render
  // lanes for the entire render phase.
  var workInProgressRootIncludedLanes=NoLanes;// The work left over by components that were visited during this render. Only
  // includes unprocessed updates, not work in bailed out children.
  var workInProgressRootSkippedLanes=NoLanes;// Lanes that were updated (in an interleaved event) during this render.
  var workInProgressRootUpdatedLanes=NoLanes;// Lanes that were pinged (in an interleaved event) during this render.
  var workInProgressRootPingedLanes=NoLanes;var mostRecentlyUpdatedRoot=null;// The most recent time we committed a fallback. This lets us ensure a train
  // model where we don't commit new loading states in too quick succession.
  var globalMostRecentFallbackTime=0;var FALLBACK_THROTTLE_MS=500;// The absolute time for when we should start giving up on rendering
  // more and prefer CPU suspense heuristics instead.
  var workInProgressRootRenderTargetTime=Infinity;// How long a render is supposed to take before we start following CPU
  // suspense heuristics and opt out of rendering more content.
  var RENDER_TIMEOUT_MS=500;function resetRenderTimer(){workInProgressRootRenderTargetTime=now$1()+RENDER_TIMEOUT_MS;}function getRenderTargetTime(){return workInProgressRootRenderTargetTime;}var nextEffect=null;var hasUncaughtError=false;var firstUncaughtError=null;var legacyErrorBoundariesThatAlreadyFailed=null;var rootDoesHavePassiveEffects=false;var rootWithPendingPassiveEffects=null;var pendingPassiveEffectsRenderPriority=NoPriority$1;var pendingPassiveEffectsLanes=NoLanes;var pendingPassiveHookEffectsMount=[];var pendingPassiveHookEffectsUnmount=[];var rootsWithPendingDiscreteUpdates=null;// Use these to prevent an infinite loop of nested updates
  var NESTED_UPDATE_LIMIT=50;var nestedUpdateCount=0;var rootWithNestedUpdates=null;var NESTED_PASSIVE_UPDATE_LIMIT=50;var nestedPassiveUpdateCount=0;// Marks the need to reschedule pending interactions at these lanes
  // during the commit phase. This enables them to be traced across components
  // that spawn new work during render. E.g. hidden boundaries, suspended SSR
  // hydration or SuspenseList.
  // TODO: Can use a bitmask instead of an array
  var spawnedWorkDuringRender=null;// If two updates are scheduled within the same event, we should treat their
  // event times as simultaneous, even if the actual clock time has advanced
  // between the first and second call.
  var currentEventTime=NoTimestamp;var currentEventWipLanes=NoLanes;var currentEventPendingLanes=NoLanes;// Dev only flag that tracks if passive effects are currently being flushed.
  // We warn about state updates for unmounted components differently in this case.
  var isFlushingPassiveEffects=false;var focusedInstanceHandle=null;var shouldFireAfterActiveInstanceBlur=false;function getWorkInProgressRoot(){return workInProgressRoot;}function requestEventTime(){if((executionContext&(RenderContext|CommitContext))!==NoContext){// We're inside React, so it's fine to read the actual time.
  return now$1();}// We're not inside React, so we may be in the middle of a browser event.
  if(currentEventTime!==NoTimestamp){// Use the same start time for all updates until we enter React again.
  return currentEventTime;}// This is the first update since React yielded. Compute a new start time.
  currentEventTime=now$1();return currentEventTime;}function requestUpdateLane(fiber){// Special cases
  var mode=fiber.mode;if((mode&BlockingMode)===NoMode){return SyncLane;}else if((mode&ConcurrentMode)===NoMode){return getCurrentPriorityLevel()===ImmediatePriority$1?SyncLane:SyncBatchedLane;}// The algorithm for assigning an update to a lane should be stable for all
  // updates at the same priority within the same event. To do this, the inputs
  // to the algorithm must be the same. For example, we use the `renderLanes`
  // to avoid choosing a lane that is already in the middle of rendering.
  //
  // However, the "included" lanes could be mutated in between updates in the
  // same event, like if you perform an update inside `flushSync`. Or any other
  // code path that might call `prepareFreshStack`.
  //
  // The trick we use is to cache the first of each of these inputs within an
  // event. Then reset the cached values once we can be sure the event is over.
  // Our heuristic for that is whenever we enter a concurrent work loop.
  //
  // We'll do the same for `currentEventPendingLanes` below.
  if(currentEventWipLanes===NoLanes){currentEventWipLanes=workInProgressRootIncludedLanes;}var isTransition=requestCurrentTransition()!==NoTransition;if(isTransition){if(currentEventPendingLanes!==NoLanes){currentEventPendingLanes=mostRecentlyUpdatedRoot!==null?mostRecentlyUpdatedRoot.pendingLanes:NoLanes;}return findTransitionLane(currentEventWipLanes,currentEventPendingLanes);}// TODO: Remove this dependency on the Scheduler priority.
  // To do that, we're replacing it with an update lane priority.
  var schedulerPriority=getCurrentPriorityLevel();// The old behavior was using the priority level of the Scheduler.
  // This couples React to the Scheduler internals, so we're replacing it
  // with the currentUpdateLanePriority above. As an example of how this
  // could be problematic, if we're not inside `Scheduler.runWithPriority`,
  // then we'll get the priority of the current running Scheduler task,
  // which is probably not what we want.
  var lane;if(// TODO: Temporary. We're removing the concept of discrete updates.
  (executionContext&DiscreteEventContext)!==NoContext&&schedulerPriority===UserBlockingPriority$1){lane=findUpdateLane(InputDiscreteLanePriority,currentEventWipLanes);}else {var schedulerLanePriority=schedulerPriorityToLanePriority(schedulerPriority);lane=findUpdateLane(schedulerLanePriority,currentEventWipLanes);}return lane;}function requestRetryLane(fiber){// This is a fork of `requestUpdateLane` designed specifically for Suspense
  // "retries" — a special update that attempts to flip a Suspense boundary
  // from its placeholder state to its primary/resolved state.
  // Special cases
  var mode=fiber.mode;if((mode&BlockingMode)===NoMode){return SyncLane;}else if((mode&ConcurrentMode)===NoMode){return getCurrentPriorityLevel()===ImmediatePriority$1?SyncLane:SyncBatchedLane;}// See `requestUpdateLane` for explanation of `currentEventWipLanes`
  if(currentEventWipLanes===NoLanes){currentEventWipLanes=workInProgressRootIncludedLanes;}return findRetryLane(currentEventWipLanes);}function scheduleUpdateOnFiber(fiber,lane,eventTime){checkForNestedUpdates();warnAboutRenderPhaseUpdatesInDEV(fiber);var root=markUpdateLaneFromFiberToRoot(fiber,lane);if(root===null){warnAboutUpdateOnUnmountedFiberInDEV(fiber);return null;}// Mark that the root has a pending update.
  markRootUpdated(root,lane,eventTime);if(root===workInProgressRoot){// Received an update to a tree that's in the middle of rendering. Mark
  // that there was an interleaved update work on this root. Unless the
  // `deferRenderPhaseUpdateToNextBatch` flag is off and this is a render
  // phase update. In that case, we don't treat render phase updates as if
  // they were interleaved, for backwards compat reasons.
  {workInProgressRootUpdatedLanes=mergeLanes(workInProgressRootUpdatedLanes,lane);}if(workInProgressRootExitStatus===RootSuspendedWithDelay){// The root already suspended with a delay, which means this render
  // definitely won't finish. Since we have a new update, let's mark it as
  // suspended now, right before marking the incoming update. This has the
  // effect of interrupting the current render and switching to the update.
  // TODO: Make sure this doesn't override pings that happen while we've
  // already started rendering.
  markRootSuspended$1(root,workInProgressRootRenderLanes);}}// TODO: requestUpdateLanePriority also reads the priority. Pass the
  // priority as an argument to that function and this one.
  var priorityLevel=getCurrentPriorityLevel();if(lane===SyncLane){if(// Check if we're inside unbatchedUpdates
  (executionContext&LegacyUnbatchedContext)!==NoContext&&// Check if we're not already rendering
  (executionContext&(RenderContext|CommitContext))===NoContext){// Register pending interactions on the root to avoid losing traced interaction data.
  schedulePendingInteractions(root,lane);// This is a legacy edge case. The initial mount of a ReactDOM.render-ed
  // root inside of batchedUpdates should be synchronous, but layout updates
  // should be deferred until the end of the batch.
  performSyncWorkOnRoot(root);}else {ensureRootIsScheduled(root,eventTime);schedulePendingInteractions(root,lane);if(executionContext===NoContext){// Flush the synchronous work now, unless we're already working or inside
  // a batch. This is intentionally inside scheduleUpdateOnFiber instead of
  // scheduleCallbackForFiber to preserve the ability to schedule a callback
  // without immediately flushing it. We only do this for user-initiated
  // updates, to preserve historical behavior of legacy mode.
  resetRenderTimer();flushSyncCallbackQueue();}}}else {// Schedule a discrete update but only if it's not Sync.
  if((executionContext&DiscreteEventContext)!==NoContext&&(// Only updates at user-blocking priority or greater are considered
  // discrete, even inside a discrete event.
  priorityLevel===UserBlockingPriority$1||priorityLevel===ImmediatePriority$1)){// This is the result of a discrete event. Track the lowest priority
  // discrete update per root so we can flush them early, if needed.
  if(rootsWithPendingDiscreteUpdates===null){rootsWithPendingDiscreteUpdates=new Set([root]);}else {rootsWithPendingDiscreteUpdates.add(root);}}// Schedule other updates after in case the callback is sync.
  ensureRootIsScheduled(root,eventTime);schedulePendingInteractions(root,lane);}// We use this when assigning a lane for a transition inside
  // `requestUpdateLane`. We assume it's the same as the root being updated,
  // since in the common case of a single root app it probably is. If it's not
  // the same root, then it's not a huge deal, we just might batch more stuff
  // together more than necessary.
  mostRecentlyUpdatedRoot=root;}// This is split into a separate function so we can mark a fiber with pending
  // work without treating it as a typical update that originates from an event;
  // e.g. retrying a Suspense boundary isn't an update, but it does schedule work
  // on a fiber.
  function markUpdateLaneFromFiberToRoot(sourceFiber,lane){// Update the source fiber's lanes
  sourceFiber.lanes=mergeLanes(sourceFiber.lanes,lane);var alternate=sourceFiber.alternate;if(alternate!==null){alternate.lanes=mergeLanes(alternate.lanes,lane);}{if(alternate===null&&(sourceFiber.flags&(Placement|Hydrating))!==NoFlags){warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);}}// Walk the parent path to the root and update the child expiration time.
  var node=sourceFiber;var parent=sourceFiber["return"];while(parent!==null){parent.childLanes=mergeLanes(parent.childLanes,lane);alternate=parent.alternate;if(alternate!==null){alternate.childLanes=mergeLanes(alternate.childLanes,lane);}else {{if((parent.flags&(Placement|Hydrating))!==NoFlags){warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);}}}node=parent;parent=parent["return"];}if(node.tag===HostRoot){var root=node.stateNode;return root;}else {return null;}}// Use this function to schedule a task for a root. There's only one task per
  // root; if a task was already scheduled, we'll check to make sure the priority
  // of the existing task is the same as the priority of the next level that the
  // root has work on. This function is called on every update, and right before
  // exiting a task.
  function ensureRootIsScheduled(root,currentTime){var existingCallbackNode=root.callbackNode;// Check if any lanes are being starved by other work. If so, mark them as
  // expired so we know to work on those next.
  markStarvedLanesAsExpired(root,currentTime);// Determine the next lanes to work on, and their priority.
  var nextLanes=getNextLanes(root,root===workInProgressRoot?workInProgressRootRenderLanes:NoLanes);// This returns the priority level computed during the `getNextLanes` call.
  var newCallbackPriority=returnNextLanesPriority();if(nextLanes===NoLanes){// Special case: There's nothing to work on.
  if(existingCallbackNode!==null){cancelCallback(existingCallbackNode);root.callbackNode=null;root.callbackPriority=NoLanePriority;}return;}// Check if there's an existing task. We may be able to reuse it.
  if(existingCallbackNode!==null){var existingCallbackPriority=root.callbackPriority;if(existingCallbackPriority===newCallbackPriority){// The priority hasn't changed. We can reuse the existing task. Exit.
  return;}// The priority changed. Cancel the existing callback. We'll schedule a new
  // one below.
  cancelCallback(existingCallbackNode);}// Schedule a new callback.
  var newCallbackNode;if(newCallbackPriority===SyncLanePriority){// Special case: Sync React callbacks are scheduled on a special
  // internal queue
  newCallbackNode=scheduleSyncCallback(performSyncWorkOnRoot.bind(null,root));}else if(newCallbackPriority===SyncBatchedLanePriority){newCallbackNode=scheduleCallback(ImmediatePriority$1,performSyncWorkOnRoot.bind(null,root));}else {var schedulerPriorityLevel=lanePriorityToSchedulerPriority(newCallbackPriority);newCallbackNode=scheduleCallback(schedulerPriorityLevel,performConcurrentWorkOnRoot.bind(null,root));}root.callbackPriority=newCallbackPriority;root.callbackNode=newCallbackNode;}// This is the entry point for every concurrent task, i.e. anything that
  // goes through Scheduler.
  function performConcurrentWorkOnRoot(root){// Since we know we're in a React event, we can clear the current
  // event time. The next update will compute a new event time.
  currentEventTime=NoTimestamp;currentEventWipLanes=NoLanes;currentEventPendingLanes=NoLanes;if(!((executionContext&(RenderContext|CommitContext))===NoContext)){{throw Error("Should not already be working.");}}// Flush any pending passive effects before deciding which lanes to work on,
  // in case they schedule additional work.
  var originalCallbackNode=root.callbackNode;var didFlushPassiveEffects=flushPassiveEffects();if(didFlushPassiveEffects){// Something in the passive effect phase may have canceled the current task.
  // Check if the task node for this root was changed.
  if(root.callbackNode!==originalCallbackNode){// The current task was canceled. Exit. We don't need to call
  // `ensureRootIsScheduled` because the check above implies either that
  // there's a new task, or that there's no remaining work on this root.
  return null;}}// Determine the next expiration time to work on, using the fields stored
  // on the root.
  var lanes=getNextLanes(root,root===workInProgressRoot?workInProgressRootRenderLanes:NoLanes);if(lanes===NoLanes){// Defensive coding. This is never expected to happen.
  return null;}var exitStatus=renderRootConcurrent(root,lanes);if(includesSomeLane(workInProgressRootIncludedLanes,workInProgressRootUpdatedLanes)){// The render included lanes that were updated during the render phase.
  // For example, when unhiding a hidden tree, we include all the lanes
  // that were previously skipped when the tree was hidden. That set of
  // lanes is a superset of the lanes we started rendering with.
  //
  // So we'll throw out the current work and restart.
  prepareFreshStack(root,NoLanes);}else if(exitStatus!==RootIncomplete){if(exitStatus===RootErrored){executionContext|=RetryAfterError;// If an error occurred during hydration,
  // discard server response and fall back to client side render.
  if(root.hydrate){root.hydrate=false;clearContainer(root.containerInfo);}// If something threw an error, try rendering one more time. We'll render
  // synchronously to block concurrent data mutations, and we'll includes
  // all pending updates are included. If it still fails after the second
  // attempt, we'll give up and commit the resulting tree.
  lanes=getLanesToRetrySynchronouslyOnError(root);if(lanes!==NoLanes){exitStatus=renderRootSync(root,lanes);}}if(exitStatus===RootFatalErrored){var fatalError=workInProgressRootFatalError;prepareFreshStack(root,NoLanes);markRootSuspended$1(root,lanes);ensureRootIsScheduled(root,now$1());throw fatalError;}// We now have a consistent tree. The next step is either to commit it,
  // or, if something suspended, wait to commit it after a timeout.
  var finishedWork=root.current.alternate;root.finishedWork=finishedWork;root.finishedLanes=lanes;finishConcurrentRender(root,exitStatus,lanes);}ensureRootIsScheduled(root,now$1());if(root.callbackNode===originalCallbackNode){// The task node scheduled for this root is the same one that's
  // currently executed. Need to return a continuation.
  return performConcurrentWorkOnRoot.bind(null,root);}return null;}function finishConcurrentRender(root,exitStatus,lanes){switch(exitStatus){case RootIncomplete:case RootFatalErrored:{{{throw Error("Root did not complete. This is a bug in React.");}}}// Flow knows about invariant, so it complains if I add a break
  // statement, but eslint doesn't know about invariant, so it complains
  // if I do. eslint-disable-next-line no-fallthrough
  case RootErrored:{// We should have already attempted to retry this tree. If we reached
  // this point, it errored again. Commit it.
  commitRoot(root);break;}case RootSuspended:{markRootSuspended$1(root,lanes);// We have an acceptable loading state. We need to figure out if we
  // should immediately commit it or wait a bit.
  if(includesOnlyRetries(lanes)&&// do not delay if we're inside an act() scope
  !shouldForceFlushFallbacksInDEV()){// This render only included retries, no updates. Throttle committing
  // retries so that we don't show too many loading states too quickly.
  var msUntilTimeout=globalMostRecentFallbackTime+FALLBACK_THROTTLE_MS-now$1();// Don't bother with a very short suspense time.
  if(msUntilTimeout>10){var nextLanes=getNextLanes(root,NoLanes);if(nextLanes!==NoLanes){// There's additional work on this root.
  break;}var suspendedLanes=root.suspendedLanes;if(!isSubsetOfLanes(suspendedLanes,lanes)){// We should prefer to render the fallback of at the last
  // suspended level. Ping the last suspended level to try
  // rendering it again.
  // FIXME: What if the suspended lanes are Idle? Should not restart.
  var eventTime=requestEventTime();markRootPinged(root,suspendedLanes);break;}// The render is suspended, it hasn't timed out, and there's no
  // lower priority work to do. Instead of committing the fallback
  // immediately, wait for more data to arrive.
  root.timeoutHandle=scheduleTimeout(commitRoot.bind(null,root),msUntilTimeout);break;}}// The work expired. Commit immediately.
  commitRoot(root);break;}case RootSuspendedWithDelay:{markRootSuspended$1(root,lanes);if(includesOnlyTransitions(lanes)){// This is a transition, so we should exit without committing a
  // placeholder and without scheduling a timeout. Delay indefinitely
  // until we receive more data.
  break;}if(!shouldForceFlushFallbacksInDEV()){// This is not a transition, but we did trigger an avoided state.
  // Schedule a placeholder to display after a short delay, using the Just
  // Noticeable Difference.
  // TODO: Is the JND optimization worth the added complexity? If this is
  // the only reason we track the event time, then probably not.
  // Consider removing.
  var mostRecentEventTime=getMostRecentEventTime(root,lanes);var eventTimeMs=mostRecentEventTime;var timeElapsedMs=now$1()-eventTimeMs;var _msUntilTimeout=jnd(timeElapsedMs)-timeElapsedMs;// Don't bother with a very short suspense time.
  if(_msUntilTimeout>10){// Instead of committing the fallback immediately, wait for more data
  // to arrive.
  root.timeoutHandle=scheduleTimeout(commitRoot.bind(null,root),_msUntilTimeout);break;}}// Commit the placeholder.
  commitRoot(root);break;}case RootCompleted:{// The work completed. Ready to commit.
  commitRoot(root);break;}default:{{{throw Error("Unknown root exit status.");}}}}}function markRootSuspended$1(root,suspendedLanes){// When suspending, we should always exclude lanes that were pinged or (more
  // rarely, since we try to avoid it) updated during the render phase.
  // TODO: Lol maybe there's a better way to factor this besides this
  // obnoxiously named function :)
  suspendedLanes=removeLanes(suspendedLanes,workInProgressRootPingedLanes);suspendedLanes=removeLanes(suspendedLanes,workInProgressRootUpdatedLanes);markRootSuspended(root,suspendedLanes);}// This is the entry point for synchronous tasks that don't go
  // through Scheduler
  function performSyncWorkOnRoot(root){if(!((executionContext&(RenderContext|CommitContext))===NoContext)){{throw Error("Should not already be working.");}}flushPassiveEffects();var lanes;var exitStatus;if(root===workInProgressRoot&&includesSomeLane(root.expiredLanes,workInProgressRootRenderLanes)){// There's a partial tree, and at least one of its lanes has expired. Finish
  // rendering it before rendering the rest of the expired work.
  lanes=workInProgressRootRenderLanes;exitStatus=renderRootSync(root,lanes);if(includesSomeLane(workInProgressRootIncludedLanes,workInProgressRootUpdatedLanes)){// The render included lanes that were updated during the render phase.
  // For example, when unhiding a hidden tree, we include all the lanes
  // that were previously skipped when the tree was hidden. That set of
  // lanes is a superset of the lanes we started rendering with.
  //
  // Note that this only happens when part of the tree is rendered
  // concurrently. If the whole tree is rendered synchronously, then there
  // are no interleaved events.
  lanes=getNextLanes(root,lanes);exitStatus=renderRootSync(root,lanes);}}else {lanes=getNextLanes(root,NoLanes);exitStatus=renderRootSync(root,lanes);}if(root.tag!==LegacyRoot&&exitStatus===RootErrored){executionContext|=RetryAfterError;// If an error occurred during hydration,
  // discard server response and fall back to client side render.
  if(root.hydrate){root.hydrate=false;clearContainer(root.containerInfo);}// If something threw an error, try rendering one more time. We'll render
  // synchronously to block concurrent data mutations, and we'll includes
  // all pending updates are included. If it still fails after the second
  // attempt, we'll give up and commit the resulting tree.
  lanes=getLanesToRetrySynchronouslyOnError(root);if(lanes!==NoLanes){exitStatus=renderRootSync(root,lanes);}}if(exitStatus===RootFatalErrored){var fatalError=workInProgressRootFatalError;prepareFreshStack(root,NoLanes);markRootSuspended$1(root,lanes);ensureRootIsScheduled(root,now$1());throw fatalError;}// We now have a consistent tree. Because this is a sync render, we
  // will commit it even if something suspended.
  var finishedWork=root.current.alternate;root.finishedWork=finishedWork;root.finishedLanes=lanes;commitRoot(root);// Before exiting, make sure there's a callback scheduled for the next
  // pending level.
  ensureRootIsScheduled(root,now$1());return null;}function flushRoot(root,lanes){markRootExpired(root,lanes);ensureRootIsScheduled(root,now$1());if((executionContext&(RenderContext|CommitContext))===NoContext){resetRenderTimer();flushSyncCallbackQueue();}}function flushDiscreteUpdates(){// TODO: Should be able to flush inside batchedUpdates, but not inside `act`.
  // However, `act` uses `batchedUpdates`, so there's no way to distinguish
  // those two cases. Need to fix this before exposing flushDiscreteUpdates
  // as a public API.
  if((executionContext&(BatchedContext|RenderContext|CommitContext))!==NoContext){{if((executionContext&RenderContext)!==NoContext){error('unstable_flushDiscreteUpdates: Cannot flush updates when React is '+'already rendering.');}}// We're already rendering, so we can't synchronously flush pending work.
  // This is probably a nested event dispatch triggered by a lifecycle/effect,
  // like `el.focus()`. Exit.
  return;}flushPendingDiscreteUpdates();// If the discrete updates scheduled passive effects, flush them now so that
  // they fire before the next serial event.
  flushPassiveEffects();}function deferredUpdates(fn){{return runWithPriority(NormalPriority$1,fn);}}function flushPendingDiscreteUpdates(){if(rootsWithPendingDiscreteUpdates!==null){// For each root with pending discrete updates, schedule a callback to
  // immediately flush them.
  var roots=rootsWithPendingDiscreteUpdates;rootsWithPendingDiscreteUpdates=null;roots.forEach(function(root){markDiscreteUpdatesExpired(root);ensureRootIsScheduled(root,now$1());});}// Now flush the immediate queue.
  flushSyncCallbackQueue();}function batchedUpdates(fn,a){var prevExecutionContext=executionContext;executionContext|=BatchedContext;try{return fn(a);}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
  resetRenderTimer();flushSyncCallbackQueue();}}}function batchedEventUpdates(fn,a){var prevExecutionContext=executionContext;executionContext|=EventContext;try{return fn(a);}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
  resetRenderTimer();flushSyncCallbackQueue();}}}function discreteUpdates(fn,a,b,c,d){var prevExecutionContext=executionContext;executionContext|=DiscreteEventContext;{try{return runWithPriority(UserBlockingPriority$1,fn.bind(null,a,b,c,d));}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
  resetRenderTimer();flushSyncCallbackQueue();}}}}function unbatchedUpdates(fn,a){var prevExecutionContext=executionContext;executionContext&=~BatchedContext;executionContext|=LegacyUnbatchedContext;try{return fn(a);}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
  resetRenderTimer();flushSyncCallbackQueue();}}}function flushSync(fn,a){var prevExecutionContext=executionContext;if((prevExecutionContext&(RenderContext|CommitContext))!==NoContext){{error('flushSync was called from inside a lifecycle method. React cannot '+'flush when React is already rendering. Consider moving this call to '+'a scheduler task or micro task.');}return fn(a);}executionContext|=BatchedContext;{try{if(fn){return runWithPriority(ImmediatePriority$1,fn.bind(null,a));}else {return undefined;}}finally{executionContext=prevExecutionContext;// Flush the immediate callbacks that were scheduled during this batch.
  // Note that this will happen even if batchedUpdates is higher up
  // the stack.
  flushSyncCallbackQueue();}}}function flushControlled(fn){var prevExecutionContext=executionContext;executionContext|=BatchedContext;{try{runWithPriority(ImmediatePriority$1,fn);}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
  resetRenderTimer();flushSyncCallbackQueue();}}}}function pushRenderLanes(fiber,lanes){push(subtreeRenderLanesCursor,subtreeRenderLanes,fiber);subtreeRenderLanes=mergeLanes(subtreeRenderLanes,lanes);workInProgressRootIncludedLanes=mergeLanes(workInProgressRootIncludedLanes,lanes);}function popRenderLanes(fiber){subtreeRenderLanes=subtreeRenderLanesCursor.current;pop(subtreeRenderLanesCursor,fiber);}function prepareFreshStack(root,lanes){root.finishedWork=null;root.finishedLanes=NoLanes;var timeoutHandle=root.timeoutHandle;if(timeoutHandle!==noTimeout){// The root previous suspended and scheduled a timeout to commit a fallback
  // state. Now that we have additional work, cancel the timeout.
  root.timeoutHandle=noTimeout;// $FlowFixMe Complains noTimeout is not a TimeoutID, despite the check above
  cancelTimeout(timeoutHandle);}if(workInProgress!==null){var interruptedWork=workInProgress["return"];while(interruptedWork!==null){unwindInterruptedWork(interruptedWork);interruptedWork=interruptedWork["return"];}}workInProgressRoot=root;workInProgress=createWorkInProgress(root.current,null);workInProgressRootRenderLanes=subtreeRenderLanes=workInProgressRootIncludedLanes=lanes;workInProgressRootExitStatus=RootIncomplete;workInProgressRootFatalError=null;workInProgressRootSkippedLanes=NoLanes;workInProgressRootUpdatedLanes=NoLanes;workInProgressRootPingedLanes=NoLanes;{spawnedWorkDuringRender=null;}{ReactStrictModeWarnings.discardPendingWarnings();}}function handleError(root,thrownValue){do{var erroredWork=workInProgress;try{// Reset module-level state that was set during the render phase.
  resetContextDependencies();resetHooksAfterThrow();resetCurrentFiber();// TODO: I found and added this missing line while investigating a
  // separate issue. Write a regression test using string refs.
  ReactCurrentOwner$2.current=null;if(erroredWork===null||erroredWork["return"]===null){// Expected to be working on a non-root fiber. This is a fatal error
  // because there's no ancestor that can handle it; the root is
  // supposed to capture all errors that weren't caught by an error
  // boundary.
  workInProgressRootExitStatus=RootFatalErrored;workInProgressRootFatalError=thrownValue;// Set `workInProgress` to null. This represents advancing to the next
  // sibling, or the parent if there are no siblings. But since the root
  // has no siblings nor a parent, we set it to null. Usually this is
  // handled by `completeUnitOfWork` or `unwindWork`, but since we're
  // intentionally not calling those, we need set it here.
  // TODO: Consider calling `unwindWork` to pop the contexts.
  workInProgress=null;return;}if(enableProfilerTimer&&erroredWork.mode&ProfileMode){// Record the time spent rendering before an error was thrown. This
  // avoids inaccurate Profiler durations in the case of a
  // suspended render.
  stopProfilerTimerIfRunningAndRecordDelta(erroredWork,true);}throwException(root,erroredWork["return"],erroredWork,thrownValue,workInProgressRootRenderLanes);completeUnitOfWork(erroredWork);}catch(yetAnotherThrownValue){// Something in the return path also threw.
  thrownValue=yetAnotherThrownValue;if(workInProgress===erroredWork&&erroredWork!==null){// If this boundary has already errored, then we had trouble processing
  // the error. Bubble it to the next boundary.
  erroredWork=erroredWork["return"];workInProgress=erroredWork;}else {erroredWork=workInProgress;}continue;}// Return to the normal work loop.
  return;}while(true);}function pushDispatcher(){var prevDispatcher=ReactCurrentDispatcher$2.current;ReactCurrentDispatcher$2.current=ContextOnlyDispatcher;if(prevDispatcher===null){// The React isomorphic package does not include a default dispatcher.
  // Instead the first renderer will lazily attach one, in order to give
  // nicer error messages.
  return ContextOnlyDispatcher;}else {return prevDispatcher;}}function popDispatcher(prevDispatcher){ReactCurrentDispatcher$2.current=prevDispatcher;}function pushInteractions(root){{var prevInteractions=tracing.__interactionsRef.current;tracing.__interactionsRef.current=root.memoizedInteractions;return prevInteractions;}}function popInteractions(prevInteractions){{tracing.__interactionsRef.current=prevInteractions;}}function markCommitTimeOfFallback(){globalMostRecentFallbackTime=now$1();}function markSkippedUpdateLanes(lane){workInProgressRootSkippedLanes=mergeLanes(lane,workInProgressRootSkippedLanes);}function renderDidSuspend(){if(workInProgressRootExitStatus===RootIncomplete){workInProgressRootExitStatus=RootSuspended;}}function renderDidSuspendDelayIfPossible(){if(workInProgressRootExitStatus===RootIncomplete||workInProgressRootExitStatus===RootSuspended){workInProgressRootExitStatus=RootSuspendedWithDelay;}// Check if there are updates that we skipped tree that might have unblocked
  // this render.
  if(workInProgressRoot!==null&&(includesNonIdleWork(workInProgressRootSkippedLanes)||includesNonIdleWork(workInProgressRootUpdatedLanes))){// Mark the current render as suspended so that we switch to working on
  // the updates that were skipped. Usually we only suspend at the end of
  // the render phase.
  // TODO: We should probably always mark the root as suspended immediately
  // (inside this function), since by suspending at the end of the render
  // phase introduces a potential mistake where we suspend lanes that were
  // pinged or updated while we were rendering.
  markRootSuspended$1(workInProgressRoot,workInProgressRootRenderLanes);}}function renderDidError(){if(workInProgressRootExitStatus!==RootCompleted){workInProgressRootExitStatus=RootErrored;}}// Called during render to determine if anything has suspended.
  // Returns false if we're not sure.
  function renderHasNotSuspendedYet(){// If something errored or completed, we can't really be sure,
  // so those are false.
  return workInProgressRootExitStatus===RootIncomplete;}function renderRootSync(root,lanes){var prevExecutionContext=executionContext;executionContext|=RenderContext;var prevDispatcher=pushDispatcher();// If the root or lanes have changed, throw out the existing stack
  // and prepare a fresh one. Otherwise we'll continue where we left off.
  if(workInProgressRoot!==root||workInProgressRootRenderLanes!==lanes){prepareFreshStack(root,lanes);startWorkOnPendingInteractions(root,lanes);}var prevInteractions=pushInteractions(root);do{try{workLoopSync();break;}catch(thrownValue){handleError(root,thrownValue);}}while(true);resetContextDependencies();{popInteractions(prevInteractions);}executionContext=prevExecutionContext;popDispatcher(prevDispatcher);if(workInProgress!==null){// This is a sync render, so we should have finished the whole tree.
  {{throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");}}}workInProgressRoot=null;workInProgressRootRenderLanes=NoLanes;return workInProgressRootExitStatus;}// The work loop is an extremely hot path. Tell Closure not to inline it.
  /** @noinline */function workLoopSync(){// Already timed out, so perform work without checking if we need to yield.
  while(workInProgress!==null){performUnitOfWork(workInProgress);}}function renderRootConcurrent(root,lanes){var prevExecutionContext=executionContext;executionContext|=RenderContext;var prevDispatcher=pushDispatcher();// If the root or lanes have changed, throw out the existing stack
  // and prepare a fresh one. Otherwise we'll continue where we left off.
  if(workInProgressRoot!==root||workInProgressRootRenderLanes!==lanes){resetRenderTimer();prepareFreshStack(root,lanes);startWorkOnPendingInteractions(root,lanes);}var prevInteractions=pushInteractions(root);do{try{workLoopConcurrent();break;}catch(thrownValue){handleError(root,thrownValue);}}while(true);resetContextDependencies();{popInteractions(prevInteractions);}popDispatcher(prevDispatcher);executionContext=prevExecutionContext;if(workInProgress!==null){return RootIncomplete;}else {workInProgressRoot=null;workInProgressRootRenderLanes=NoLanes;// Return the final exit status.
  return workInProgressRootExitStatus;}}/** @noinline */function workLoopConcurrent(){// Perform work until Scheduler asks us to yield
  while(workInProgress!==null&&!shouldYield()){performUnitOfWork(workInProgress);}}function performUnitOfWork(unitOfWork){// The current, flushed, state of this fiber is the alternate. Ideally
  // nothing should rely on this, but relying on it here means that we don't
  // need an additional field on the work in progress.
  var current=unitOfWork.alternate;setCurrentFiber(unitOfWork);var next;if((unitOfWork.mode&ProfileMode)!==NoMode){startProfilerTimer(unitOfWork);next=beginWork$1(current,unitOfWork,subtreeRenderLanes);stopProfilerTimerIfRunningAndRecordDelta(unitOfWork,true);}else {next=beginWork$1(current,unitOfWork,subtreeRenderLanes);}resetCurrentFiber();unitOfWork.memoizedProps=unitOfWork.pendingProps;if(next===null){// If this doesn't spawn new work, complete the current work.
  completeUnitOfWork(unitOfWork);}else {workInProgress=next;}ReactCurrentOwner$2.current=null;}function completeUnitOfWork(unitOfWork){// Attempt to complete the current unit of work, then move to the next
  // sibling. If there are no more siblings, return to the parent fiber.
  var completedWork=unitOfWork;do{// The current, flushed, state of this fiber is the alternate. Ideally
  // nothing should rely on this, but relying on it here means that we don't
  // need an additional field on the work in progress.
  var current=completedWork.alternate;var returnFiber=completedWork["return"];// Check if the work completed or if something threw.
  if((completedWork.flags&Incomplete)===NoFlags){setCurrentFiber(completedWork);var next=void 0;if((completedWork.mode&ProfileMode)===NoMode){next=completeWork(current,completedWork,subtreeRenderLanes);}else {startProfilerTimer(completedWork);next=completeWork(current,completedWork,subtreeRenderLanes);// Update render duration assuming we didn't error.
  stopProfilerTimerIfRunningAndRecordDelta(completedWork,false);}resetCurrentFiber();if(next!==null){// Completing this fiber spawned new work. Work on that next.
  workInProgress=next;return;}resetChildLanes(completedWork);if(returnFiber!==null&&// Do not append effects to parents if a sibling failed to complete
  (returnFiber.flags&Incomplete)===NoFlags){// Append all the effects of the subtree and this fiber onto the effect
  // list of the parent. The completion order of the children affects the
  // side-effect order.
  if(returnFiber.firstEffect===null){returnFiber.firstEffect=completedWork.firstEffect;}if(completedWork.lastEffect!==null){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=completedWork.firstEffect;}returnFiber.lastEffect=completedWork.lastEffect;}// If this fiber had side-effects, we append it AFTER the children's
  // side-effects. We can perform certain side-effects earlier if needed,
  // by doing multiple passes over the effect list. We don't want to
  // schedule our own side-effect on our own list because if end up
  // reusing children we'll schedule this effect onto itself since we're
  // at the end.
  var flags=completedWork.flags;// Skip both NoWork and PerformedWork tags when creating the effect
  // list. PerformedWork effect is read by React DevTools but shouldn't be
  // committed.
  if(flags>PerformedWork){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=completedWork;}else {returnFiber.firstEffect=completedWork;}returnFiber.lastEffect=completedWork;}}}else {// This fiber did not complete because something threw. Pop values off
  // the stack without entering the complete phase. If this is a boundary,
  // capture values if possible.
  var _next=unwindWork(completedWork);// Because this fiber did not complete, don't reset its expiration time.
  if(_next!==null){// If completing this work spawned new work, do that next. We'll come
  // back here again.
  // Since we're restarting, remove anything that is not a host effect
  // from the effect tag.
  _next.flags&=HostEffectMask;workInProgress=_next;return;}if((completedWork.mode&ProfileMode)!==NoMode){// Record the render duration for the fiber that errored.
  stopProfilerTimerIfRunningAndRecordDelta(completedWork,false);// Include the time spent working on failed children before continuing.
  var actualDuration=completedWork.actualDuration;var child=completedWork.child;while(child!==null){actualDuration+=child.actualDuration;child=child.sibling;}completedWork.actualDuration=actualDuration;}if(returnFiber!==null){// Mark the parent fiber as incomplete and clear its effect list.
  returnFiber.firstEffect=returnFiber.lastEffect=null;returnFiber.flags|=Incomplete;}}var siblingFiber=completedWork.sibling;if(siblingFiber!==null){// If there is more work to do in this returnFiber, do that next.
  workInProgress=siblingFiber;return;}// Otherwise, return to the parent
  completedWork=returnFiber;// Update the next thing we're working on in case something throws.
  workInProgress=completedWork;}while(completedWork!==null);// We've reached the root.
  if(workInProgressRootExitStatus===RootIncomplete){workInProgressRootExitStatus=RootCompleted;}}function resetChildLanes(completedWork){if(// TODO: Move this check out of the hot path by moving `resetChildLanes`
  // to switch statement in `completeWork`.
  (completedWork.tag===LegacyHiddenComponent||completedWork.tag===OffscreenComponent)&&completedWork.memoizedState!==null&&!includesSomeLane(subtreeRenderLanes,OffscreenLane)&&(completedWork.mode&ConcurrentMode)!==NoLanes){// The children of this component are hidden. Don't bubble their
  // expiration times.
  return;}var newChildLanes=NoLanes;// Bubble up the earliest expiration time.
  if((completedWork.mode&ProfileMode)!==NoMode){// In profiling mode, resetChildExpirationTime is also used to reset
  // profiler durations.
  var actualDuration=completedWork.actualDuration;var treeBaseDuration=completedWork.selfBaseDuration;// When a fiber is cloned, its actualDuration is reset to 0. This value will
  // only be updated if work is done on the fiber (i.e. it doesn't bailout).
  // When work is done, it should bubble to the parent's actualDuration. If
  // the fiber has not been cloned though, (meaning no work was done), then
  // this value will reflect the amount of time spent working on a previous
  // render. In that case it should not bubble. We determine whether it was
  // cloned by comparing the child pointer.
  var shouldBubbleActualDurations=completedWork.alternate===null||completedWork.child!==completedWork.alternate.child;var child=completedWork.child;while(child!==null){newChildLanes=mergeLanes(newChildLanes,mergeLanes(child.lanes,child.childLanes));if(shouldBubbleActualDurations){actualDuration+=child.actualDuration;}treeBaseDuration+=child.treeBaseDuration;child=child.sibling;}var isTimedOutSuspense=completedWork.tag===SuspenseComponent&&completedWork.memoizedState!==null;if(isTimedOutSuspense){// Don't count time spent in a timed out Suspense subtree as part of the base duration.
  var primaryChildFragment=completedWork.child;if(primaryChildFragment!==null){treeBaseDuration-=primaryChildFragment.treeBaseDuration;}}completedWork.actualDuration=actualDuration;completedWork.treeBaseDuration=treeBaseDuration;}else {var _child=completedWork.child;while(_child!==null){newChildLanes=mergeLanes(newChildLanes,mergeLanes(_child.lanes,_child.childLanes));_child=_child.sibling;}}completedWork.childLanes=newChildLanes;}function commitRoot(root){var renderPriorityLevel=getCurrentPriorityLevel();runWithPriority(ImmediatePriority$1,commitRootImpl.bind(null,root,renderPriorityLevel));return null;}function commitRootImpl(root,renderPriorityLevel){do{// `flushPassiveEffects` will call `flushSyncUpdateQueue` at the end, which
  // means `flushPassiveEffects` will sometimes result in additional
  // passive effects. So we need to keep flushing in a loop until there are
  // no more pending effects.
  // TODO: Might be better if `flushPassiveEffects` did not automatically
  // flush synchronous work at the end, to avoid factoring hazards like this.
  flushPassiveEffects();}while(rootWithPendingPassiveEffects!==null);flushRenderPhaseStrictModeWarningsInDEV();if(!((executionContext&(RenderContext|CommitContext))===NoContext)){{throw Error("Should not already be working.");}}var finishedWork=root.finishedWork;var lanes=root.finishedLanes;if(finishedWork===null){return null;}root.finishedWork=null;root.finishedLanes=NoLanes;if(!(finishedWork!==root.current)){{throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");}}// commitRoot never returns a continuation; it always finishes synchronously.
  // So we can clear these now to allow a new callback to be scheduled.
  root.callbackNode=null;// Update the first and last pending times on this root. The new first
  // pending time is whatever is left on the root fiber.
  var remainingLanes=mergeLanes(finishedWork.lanes,finishedWork.childLanes);markRootFinished(root,remainingLanes);// Clear already finished discrete updates in case that a later call of
  // `flushDiscreteUpdates` starts a useless render pass which may cancels
  // a scheduled timeout.
  if(rootsWithPendingDiscreteUpdates!==null){if(!hasDiscreteLanes(remainingLanes)&&rootsWithPendingDiscreteUpdates.has(root)){rootsWithPendingDiscreteUpdates["delete"](root);}}if(root===workInProgressRoot){// We can reset these now that they are finished.
  workInProgressRoot=null;workInProgress=null;workInProgressRootRenderLanes=NoLanes;}// Get the list of effects.
  var firstEffect;if(finishedWork.flags>PerformedWork){// A fiber's effect list consists only of its children, not itself. So if
  // the root has an effect, we need to add it to the end of the list. The
  // resulting list is the set that would belong to the root's parent, if it
  // had one; that is, all the effects in the tree including the root.
  if(finishedWork.lastEffect!==null){finishedWork.lastEffect.nextEffect=finishedWork;firstEffect=finishedWork.firstEffect;}else {firstEffect=finishedWork;}}else {// There is no effect on the root.
  firstEffect=finishedWork.firstEffect;}if(firstEffect!==null){var prevExecutionContext=executionContext;executionContext|=CommitContext;var prevInteractions=pushInteractions(root);// Reset this to null before calling lifecycles
  ReactCurrentOwner$2.current=null;// The commit phase is broken into several sub-phases. We do a separate pass
  // of the effect list for each phase: all mutation effects come before all
  // layout effects, and so on.
  // The first phase a "before mutation" phase. We use this phase to read the
  // state of the host tree right before we mutate it. This is where
  // getSnapshotBeforeUpdate is called.
  focusedInstanceHandle=prepareForCommit(root.containerInfo);shouldFireAfterActiveInstanceBlur=false;nextEffect=firstEffect;do{{invokeGuardedCallback(null,commitBeforeMutationEffects,null);if(hasCaughtError()){if(!(nextEffect!==null)){{throw Error("Should be working on an effect.");}}var error=clearCaughtError();captureCommitPhaseError(nextEffect,error);nextEffect=nextEffect.nextEffect;}}}while(nextEffect!==null);// We no longer need to track the active instance fiber
  focusedInstanceHandle=null;{// Mark the current commit time to be shared by all Profilers in this
  // batch. This enables them to be grouped later.
  recordCommitTime();}// The next phase is the mutation phase, where we mutate the host tree.
  nextEffect=firstEffect;do{{invokeGuardedCallback(null,commitMutationEffects,null,root,renderPriorityLevel);if(hasCaughtError()){if(!(nextEffect!==null)){{throw Error("Should be working on an effect.");}}var _error=clearCaughtError();captureCommitPhaseError(nextEffect,_error);nextEffect=nextEffect.nextEffect;}}}while(nextEffect!==null);if(shouldFireAfterActiveInstanceBlur){afterActiveInstanceBlur();}resetAfterCommit(root.containerInfo);// The work-in-progress tree is now the current tree. This must come after
  // the mutation phase, so that the previous tree is still current during
  // componentWillUnmount, but before the layout phase, so that the finished
  // work is current during componentDidMount/Update.
  root.current=finishedWork;// The next phase is the layout phase, where we call effects that read
  // the host tree after it's been mutated. The idiomatic use case for this is
  // layout, but class component lifecycles also fire here for legacy reasons.
  nextEffect=firstEffect;do{{invokeGuardedCallback(null,commitLayoutEffects,null,root,lanes);if(hasCaughtError()){if(!(nextEffect!==null)){{throw Error("Should be working on an effect.");}}var _error2=clearCaughtError();captureCommitPhaseError(nextEffect,_error2);nextEffect=nextEffect.nextEffect;}}}while(nextEffect!==null);nextEffect=null;// Tell Scheduler to yield at the end of the frame, so the browser has an
  // opportunity to paint.
  requestPaint();{popInteractions(prevInteractions);}executionContext=prevExecutionContext;}else {// No effects.
  root.current=finishedWork;// Measure these anyway so the flamegraph explicitly shows that there were
  // no effects.
  // TODO: Maybe there's a better way to report this.
  {recordCommitTime();}}var rootDidHavePassiveEffects=rootDoesHavePassiveEffects;if(rootDoesHavePassiveEffects){// This commit has passive effects. Stash a reference to them. But don't
  // schedule a callback until after flushing layout work.
  rootDoesHavePassiveEffects=false;rootWithPendingPassiveEffects=root;pendingPassiveEffectsLanes=lanes;pendingPassiveEffectsRenderPriority=renderPriorityLevel;}else {// We are done with the effect chain at this point so let's clear the
  // nextEffect pointers to assist with GC. If we have passive effects, we'll
  // clear this in flushPassiveEffects.
  nextEffect=firstEffect;while(nextEffect!==null){var nextNextEffect=nextEffect.nextEffect;nextEffect.nextEffect=null;if(nextEffect.flags&Deletion){detachFiberAfterEffects(nextEffect);}nextEffect=nextNextEffect;}}// Read this again, since an effect might have updated it
  remainingLanes=root.pendingLanes;// Check if there's remaining work on this root
  if(remainingLanes!==NoLanes){{if(spawnedWorkDuringRender!==null){var expirationTimes=spawnedWorkDuringRender;spawnedWorkDuringRender=null;for(var i=0;i<expirationTimes.length;i++){scheduleInteractions(root,expirationTimes[i],root.memoizedInteractions);}}schedulePendingInteractions(root,remainingLanes);}}else {// If there's no remaining work, we can clear the set of already failed
  // error boundaries.
  legacyErrorBoundariesThatAlreadyFailed=null;}{if(!rootDidHavePassiveEffects){// If there are no passive effects, then we can complete the pending interactions.
  // Otherwise, we'll wait until after the passive effects are flushed.
  // Wait to do this until after remaining work has been scheduled,
  // so that we don't prematurely signal complete for interactions when there's e.g. hidden work.
  finishPendingInteractions(root,lanes);}}if(remainingLanes===SyncLane){// Count the number of times the root synchronously re-renders without
  // finishing. If there are too many, it indicates an infinite update loop.
  if(root===rootWithNestedUpdates){nestedUpdateCount++;}else {nestedUpdateCount=0;rootWithNestedUpdates=root;}}else {nestedUpdateCount=0;}onCommitRoot(finishedWork.stateNode,renderPriorityLevel);{onCommitRoot$1();}// Always call this before exiting `commitRoot`, to ensure that any
  // additional work on this root is scheduled.
  ensureRootIsScheduled(root,now$1());if(hasUncaughtError){hasUncaughtError=false;var _error3=firstUncaughtError;firstUncaughtError=null;throw _error3;}if((executionContext&LegacyUnbatchedContext)!==NoContext){// a ReactDOM.render-ed root inside of batchedUpdates. The commit fired
  // synchronously, but layout updates should be deferred until the end
  // of the batch.
  return null;}// If layout work was scheduled, flush it now.
  flushSyncCallbackQueue();return null;}function commitBeforeMutationEffects(){while(nextEffect!==null){var current=nextEffect.alternate;if(!shouldFireAfterActiveInstanceBlur&&focusedInstanceHandle!==null){if((nextEffect.flags&Deletion)!==NoFlags){if(doesFiberContain(nextEffect,focusedInstanceHandle)){shouldFireAfterActiveInstanceBlur=true;beforeActiveInstanceBlur();}}else {// TODO: Move this out of the hot path using a dedicated effect tag.
  if(nextEffect.tag===SuspenseComponent&&isSuspenseBoundaryBeingHidden(current,nextEffect)&&doesFiberContain(nextEffect,focusedInstanceHandle)){shouldFireAfterActiveInstanceBlur=true;beforeActiveInstanceBlur();}}}var flags=nextEffect.flags;if((flags&Snapshot)!==NoFlags){setCurrentFiber(nextEffect);commitBeforeMutationLifeCycles(current,nextEffect);resetCurrentFiber();}if((flags&Passive)!==NoFlags){// If there are passive effects, schedule a callback to flush at
  // the earliest opportunity.
  if(!rootDoesHavePassiveEffects){rootDoesHavePassiveEffects=true;scheduleCallback(NormalPriority$1,function(){flushPassiveEffects();return null;});}}nextEffect=nextEffect.nextEffect;}}function commitMutationEffects(root,renderPriorityLevel){// TODO: Should probably move the bulk of this function to commitWork.
  while(nextEffect!==null){setCurrentFiber(nextEffect);var flags=nextEffect.flags;if(flags&ContentReset){commitResetTextContent(nextEffect);}if(flags&Ref){var current=nextEffect.alternate;if(current!==null){commitDetachRef(current);}}// The following switch statement is only concerned about placement,
  // updates, and deletions. To avoid needing to add a case for every possible
  // bitmap value, we remove the secondary effects from the effect tag and
  // switch on that value.
  var primaryFlags=flags&(Placement|Update|Deletion|Hydrating);switch(primaryFlags){case Placement:{commitPlacement(nextEffect);// Clear the "placement" from effect tag so that we know that this is
  // inserted, before any life-cycles like componentDidMount gets called.
  // TODO: findDOMNode doesn't rely on this any more but isMounted does
  // and isMounted is deprecated anyway so we should be able to kill this.
  nextEffect.flags&=~Placement;break;}case PlacementAndUpdate:{// Placement
  commitPlacement(nextEffect);// Clear the "placement" from effect tag so that we know that this is
  // inserted, before any life-cycles like componentDidMount gets called.
  nextEffect.flags&=~Placement;// Update
  var _current=nextEffect.alternate;commitWork(_current,nextEffect);break;}case Hydrating:{nextEffect.flags&=~Hydrating;break;}case HydratingAndUpdate:{nextEffect.flags&=~Hydrating;// Update
  var _current2=nextEffect.alternate;commitWork(_current2,nextEffect);break;}case Update:{var _current3=nextEffect.alternate;commitWork(_current3,nextEffect);break;}case Deletion:{commitDeletion(root,nextEffect);break;}}resetCurrentFiber();nextEffect=nextEffect.nextEffect;}}function commitLayoutEffects(root,committedLanes){while(nextEffect!==null){setCurrentFiber(nextEffect);var flags=nextEffect.flags;if(flags&(Update|Callback)){var current=nextEffect.alternate;commitLifeCycles(root,current,nextEffect);}{if(flags&Ref){commitAttachRef(nextEffect);}}resetCurrentFiber();nextEffect=nextEffect.nextEffect;}}function flushPassiveEffects(){// Returns whether passive effects were flushed.
  if(pendingPassiveEffectsRenderPriority!==NoPriority$1){var priorityLevel=pendingPassiveEffectsRenderPriority>NormalPriority$1?NormalPriority$1:pendingPassiveEffectsRenderPriority;pendingPassiveEffectsRenderPriority=NoPriority$1;{return runWithPriority(priorityLevel,flushPassiveEffectsImpl);}}return false;}function enqueuePendingPassiveHookEffectMount(fiber,effect){pendingPassiveHookEffectsMount.push(effect,fiber);if(!rootDoesHavePassiveEffects){rootDoesHavePassiveEffects=true;scheduleCallback(NormalPriority$1,function(){flushPassiveEffects();return null;});}}function enqueuePendingPassiveHookEffectUnmount(fiber,effect){pendingPassiveHookEffectsUnmount.push(effect,fiber);{fiber.flags|=PassiveUnmountPendingDev;var alternate=fiber.alternate;if(alternate!==null){alternate.flags|=PassiveUnmountPendingDev;}}if(!rootDoesHavePassiveEffects){rootDoesHavePassiveEffects=true;scheduleCallback(NormalPriority$1,function(){flushPassiveEffects();return null;});}}function invokePassiveEffectCreate(effect){var create=effect.create;effect.destroy=create();}function flushPassiveEffectsImpl(){if(rootWithPendingPassiveEffects===null){return false;}var root=rootWithPendingPassiveEffects;var lanes=pendingPassiveEffectsLanes;rootWithPendingPassiveEffects=null;pendingPassiveEffectsLanes=NoLanes;if(!((executionContext&(RenderContext|CommitContext))===NoContext)){{throw Error("Cannot flush passive effects while already rendering.");}}{isFlushingPassiveEffects=true;}var prevExecutionContext=executionContext;executionContext|=CommitContext;var prevInteractions=pushInteractions(root);// It's important that ALL pending passive effect destroy functions are called
  // before ANY passive effect create functions are called.
  // Otherwise effects in sibling components might interfere with each other.
  // e.g. a destroy function in one component may unintentionally override a ref
  // value set by a create function in another component.
  // Layout effects have the same constraint.
  // First pass: Destroy stale passive effects.
  var unmountEffects=pendingPassiveHookEffectsUnmount;pendingPassiveHookEffectsUnmount=[];for(var i=0;i<unmountEffects.length;i+=2){var _effect=unmountEffects[i];var fiber=unmountEffects[i+1];var destroy=_effect.destroy;_effect.destroy=undefined;{fiber.flags&=~PassiveUnmountPendingDev;var alternate=fiber.alternate;if(alternate!==null){alternate.flags&=~PassiveUnmountPendingDev;}}if(typeof destroy==='function'){{setCurrentFiber(fiber);{invokeGuardedCallback(null,destroy,null);}if(hasCaughtError()){if(!(fiber!==null)){{throw Error("Should be working on an effect.");}}var error=clearCaughtError();captureCommitPhaseError(fiber,error);}resetCurrentFiber();}}}// Second pass: Create new passive effects.
  var mountEffects=pendingPassiveHookEffectsMount;pendingPassiveHookEffectsMount=[];for(var _i=0;_i<mountEffects.length;_i+=2){var _effect2=mountEffects[_i];var _fiber=mountEffects[_i+1];{setCurrentFiber(_fiber);{invokeGuardedCallback(null,invokePassiveEffectCreate,null,_effect2);}if(hasCaughtError()){if(!(_fiber!==null)){{throw Error("Should be working on an effect.");}}var _error4=clearCaughtError();captureCommitPhaseError(_fiber,_error4);}resetCurrentFiber();}}// Note: This currently assumes there are no passive effects on the root fiber
  // because the root is not part of its own effect list.
  // This could change in the future.
  var effect=root.current.firstEffect;while(effect!==null){var nextNextEffect=effect.nextEffect;// Remove nextEffect pointer to assist GC
  effect.nextEffect=null;if(effect.flags&Deletion){detachFiberAfterEffects(effect);}effect=nextNextEffect;}{popInteractions(prevInteractions);finishPendingInteractions(root,lanes);}{isFlushingPassiveEffects=false;}executionContext=prevExecutionContext;flushSyncCallbackQueue();// If additional passive effects were scheduled, increment a counter. If this
  // exceeds the limit, we'll fire a warning.
  nestedPassiveUpdateCount=rootWithPendingPassiveEffects===null?0:nestedPassiveUpdateCount+1;return true;}function isAlreadyFailedLegacyErrorBoundary(instance){return legacyErrorBoundariesThatAlreadyFailed!==null&&legacyErrorBoundariesThatAlreadyFailed.has(instance);}function markLegacyErrorBoundaryAsFailed(instance){if(legacyErrorBoundariesThatAlreadyFailed===null){legacyErrorBoundariesThatAlreadyFailed=new Set([instance]);}else {legacyErrorBoundariesThatAlreadyFailed.add(instance);}}function prepareToThrowUncaughtError(error){if(!hasUncaughtError){hasUncaughtError=true;firstUncaughtError=error;}}var onUncaughtError=prepareToThrowUncaughtError;function captureCommitPhaseErrorOnRoot(rootFiber,sourceFiber,error){var errorInfo=createCapturedValue(error,sourceFiber);var update=createRootErrorUpdate(rootFiber,errorInfo,SyncLane);enqueueUpdate(rootFiber,update);var eventTime=requestEventTime();var root=markUpdateLaneFromFiberToRoot(rootFiber,SyncLane);if(root!==null){markRootUpdated(root,SyncLane,eventTime);ensureRootIsScheduled(root,eventTime);schedulePendingInteractions(root,SyncLane);}}function captureCommitPhaseError(sourceFiber,error){if(sourceFiber.tag===HostRoot){// Error was thrown at the root. There is no parent, so the root
  // itself should capture it.
  captureCommitPhaseErrorOnRoot(sourceFiber,sourceFiber,error);return;}var fiber=sourceFiber["return"];while(fiber!==null){if(fiber.tag===HostRoot){captureCommitPhaseErrorOnRoot(fiber,sourceFiber,error);return;}else if(fiber.tag===ClassComponent){var ctor=fiber.type;var instance=fiber.stateNode;if(typeof ctor.getDerivedStateFromError==='function'||typeof instance.componentDidCatch==='function'&&!isAlreadyFailedLegacyErrorBoundary(instance)){var errorInfo=createCapturedValue(error,sourceFiber);var update=createClassErrorUpdate(fiber,errorInfo,SyncLane);enqueueUpdate(fiber,update);var eventTime=requestEventTime();var root=markUpdateLaneFromFiberToRoot(fiber,SyncLane);if(root!==null){markRootUpdated(root,SyncLane,eventTime);ensureRootIsScheduled(root,eventTime);schedulePendingInteractions(root,SyncLane);}else {// This component has already been unmounted.
  // We can't schedule any follow up work for the root because the fiber is already unmounted,
  // but we can still call the log-only boundary so the error isn't swallowed.
  //
  // TODO This is only a temporary bandaid for the old reconciler fork.
  // We can delete this special case once the new fork is merged.
  if(typeof instance.componentDidCatch==='function'&&!isAlreadyFailedLegacyErrorBoundary(instance)){try{instance.componentDidCatch(error,errorInfo);}catch(errorToIgnore){// TODO Ignore this error? Rethrow it?
  // This is kind of an edge case.
  }}}return;}}fiber=fiber["return"];}}function pingSuspendedRoot(root,wakeable,pingedLanes){var pingCache=root.pingCache;if(pingCache!==null){// The wakeable resolved, so we no longer need to memoize, because it will
  // never be thrown again.
  pingCache["delete"](wakeable);}var eventTime=requestEventTime();markRootPinged(root,pingedLanes);if(workInProgressRoot===root&&isSubsetOfLanes(workInProgressRootRenderLanes,pingedLanes)){// Received a ping at the same priority level at which we're currently
  // rendering. We might want to restart this render. This should mirror
  // the logic of whether or not a root suspends once it completes.
  // TODO: If we're rendering sync either due to Sync, Batched or expired,
  // we should probably never restart.
  // If we're suspended with delay, or if it's a retry, we'll always suspend
  // so we can always restart.
  if(workInProgressRootExitStatus===RootSuspendedWithDelay||workInProgressRootExitStatus===RootSuspended&&includesOnlyRetries(workInProgressRootRenderLanes)&&now$1()-globalMostRecentFallbackTime<FALLBACK_THROTTLE_MS){// Restart from the root.
  prepareFreshStack(root,NoLanes);}else {// Even though we can't restart right now, we might get an
  // opportunity later. So we mark this render as having a ping.
  workInProgressRootPingedLanes=mergeLanes(workInProgressRootPingedLanes,pingedLanes);}}ensureRootIsScheduled(root,eventTime);schedulePendingInteractions(root,pingedLanes);}function retryTimedOutBoundary(boundaryFiber,retryLane){// The boundary fiber (a Suspense component or SuspenseList component)
  // previously was rendered in its fallback state. One of the promises that
  // suspended it has resolved, which means at least part of the tree was
  // likely unblocked. Try rendering again, at a new expiration time.
  if(retryLane===NoLane){retryLane=requestRetryLane(boundaryFiber);}// TODO: Special case idle priority?
  var eventTime=requestEventTime();var root=markUpdateLaneFromFiberToRoot(boundaryFiber,retryLane);if(root!==null){markRootUpdated(root,retryLane,eventTime);ensureRootIsScheduled(root,eventTime);schedulePendingInteractions(root,retryLane);}}function resolveRetryWakeable(boundaryFiber,wakeable){var retryLane=NoLane;// Default
  var retryCache;{retryCache=boundaryFiber.stateNode;}if(retryCache!==null){// The wakeable resolved, so we no longer need to memoize, because it will
  // never be thrown again.
  retryCache["delete"](wakeable);}retryTimedOutBoundary(boundaryFiber,retryLane);}// Computes the next Just Noticeable Difference (JND) boundary.
  // The theory is that a person can't tell the difference between small differences in time.
  // Therefore, if we wait a bit longer than necessary that won't translate to a noticeable
  // difference in the experience. However, waiting for longer might mean that we can avoid
  // showing an intermediate loading state. The longer we have already waited, the harder it
  // is to tell small differences in time. Therefore, the longer we've already waited,
  // the longer we can wait additionally. At some point we have to give up though.
  // We pick a train model where the next boundary commits at a consistent schedule.
  // These particular numbers are vague estimates. We expect to adjust them based on research.
  function jnd(timeElapsed){return timeElapsed<120?120:timeElapsed<480?480:timeElapsed<1080?1080:timeElapsed<1920?1920:timeElapsed<3000?3000:timeElapsed<4320?4320:ceil(timeElapsed/1960)*1960;}function checkForNestedUpdates(){if(nestedUpdateCount>NESTED_UPDATE_LIMIT){nestedUpdateCount=0;rootWithNestedUpdates=null;{{throw Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");}}}{if(nestedPassiveUpdateCount>NESTED_PASSIVE_UPDATE_LIMIT){nestedPassiveUpdateCount=0;error('Maximum update depth exceeded. This can happen when a component '+"calls setState inside useEffect, but useEffect either doesn't "+'have a dependency array, or one of the dependencies changes on '+'every render.');}}}function flushRenderPhaseStrictModeWarningsInDEV(){{ReactStrictModeWarnings.flushLegacyContextWarning();{ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();}}}var didWarnStateUpdateForNotYetMountedComponent=null;function warnAboutUpdateOnNotYetMountedFiberInDEV(fiber){{if((executionContext&RenderContext)!==NoContext){// We let the other warning about render phase updates deal with this one.
  return;}if(!(fiber.mode&(BlockingMode|ConcurrentMode))){return;}var tag=fiber.tag;if(tag!==IndeterminateComponent&&tag!==HostRoot&&tag!==ClassComponent&&tag!==FunctionComponent&&tag!==ForwardRef&&tag!==MemoComponent&&tag!==SimpleMemoComponent&&tag!==Block){// Only warn for user-defined components, not internal ones like Suspense.
  return;}// We show the whole stack but dedupe on the top component's name because
  // the problematic code almost always lies inside that component.
  var componentName=getComponentName(fiber.type)||'ReactComponent';if(didWarnStateUpdateForNotYetMountedComponent!==null){if(didWarnStateUpdateForNotYetMountedComponent.has(componentName)){return;}didWarnStateUpdateForNotYetMountedComponent.add(componentName);}else {didWarnStateUpdateForNotYetMountedComponent=new Set([componentName]);}var previousFiber=current;try{setCurrentFiber(fiber);error("Can't perform a React state update on a component that hasn't mounted yet. "+'This indicates that you have a side-effect in your render function that '+'asynchronously later calls tries to update the component. Move this work to '+'useEffect instead.');}finally{if(previousFiber){setCurrentFiber(fiber);}else {resetCurrentFiber();}}}}var didWarnStateUpdateForUnmountedComponent=null;function warnAboutUpdateOnUnmountedFiberInDEV(fiber){{var tag=fiber.tag;if(tag!==HostRoot&&tag!==ClassComponent&&tag!==FunctionComponent&&tag!==ForwardRef&&tag!==MemoComponent&&tag!==SimpleMemoComponent&&tag!==Block){// Only warn for user-defined components, not internal ones like Suspense.
  return;}// If there are pending passive effects unmounts for this Fiber,
  // we can assume that they would have prevented this update.
  if((fiber.flags&PassiveUnmountPendingDev)!==NoFlags){return;}// We show the whole stack but dedupe on the top component's name because
  // the problematic code almost always lies inside that component.
  var componentName=getComponentName(fiber.type)||'ReactComponent';if(didWarnStateUpdateForUnmountedComponent!==null){if(didWarnStateUpdateForUnmountedComponent.has(componentName)){return;}didWarnStateUpdateForUnmountedComponent.add(componentName);}else {didWarnStateUpdateForUnmountedComponent=new Set([componentName]);}if(isFlushingPassiveEffects);else {var previousFiber=current;try{setCurrentFiber(fiber);error("Can't perform a React state update on an unmounted component. This "+'is a no-op, but it indicates a memory leak in your application. To '+'fix, cancel all subscriptions and asynchronous tasks in %s.',tag===ClassComponent?'the componentWillUnmount method':'a useEffect cleanup function');}finally{if(previousFiber){setCurrentFiber(fiber);}else {resetCurrentFiber();}}}}}var beginWork$1;{var dummyFiber=null;beginWork$1=function beginWork$1(current,unitOfWork,lanes){// If a component throws an error, we replay it again in a synchronously
  // dispatched event, so that the debugger will treat it as an uncaught
  // error See ReactErrorUtils for more information.
  // Before entering the begin phase, copy the work-in-progress onto a dummy
  // fiber. If beginWork throws, we'll use this to reset the state.
  var originalWorkInProgressCopy=assignFiberPropertiesInDEV(dummyFiber,unitOfWork);try{return beginWork(current,unitOfWork,lanes);}catch(originalError){if(originalError!==null&&_typeof(originalError)==='object'&&typeof originalError.then==='function'){// Don't replay promises. Treat everything else like an error.
  throw originalError;}// Keep this code in sync with handleError; any changes here must have
  // corresponding changes there.
  resetContextDependencies();resetHooksAfterThrow();// Don't reset current debug fiber, since we're about to work on the
  // same fiber again.
  // Unwind the failed stack frame
  unwindInterruptedWork(unitOfWork);// Restore the original properties of the fiber.
  assignFiberPropertiesInDEV(unitOfWork,originalWorkInProgressCopy);if(unitOfWork.mode&ProfileMode){// Reset the profiler timer.
  startProfilerTimer(unitOfWork);}// Run beginWork again.
  invokeGuardedCallback(null,beginWork,null,current,unitOfWork,lanes);if(hasCaughtError()){var replayError=clearCaughtError();// `invokeGuardedCallback` sometimes sets an expando `_suppressLogging`.
  // Rethrow this error instead of the original one.
  throw replayError;}else {// This branch is reachable if the render phase is impure.
  throw originalError;}}};}var didWarnAboutUpdateInRender=false;var didWarnAboutUpdateInRenderForAnotherComponent;{didWarnAboutUpdateInRenderForAnotherComponent=new Set();}function warnAboutRenderPhaseUpdatesInDEV(fiber){{if(isRendering&&(executionContext&RenderContext)!==NoContext&&!getIsUpdatingOpaqueValueInRenderPhaseInDEV()){switch(fiber.tag){case FunctionComponent:case ForwardRef:case SimpleMemoComponent:{var renderingComponentName=workInProgress&&getComponentName(workInProgress.type)||'Unknown';// Dedupe by the rendering component because it's the one that needs to be fixed.
  var dedupeKey=renderingComponentName;if(!didWarnAboutUpdateInRenderForAnotherComponent.has(dedupeKey)){didWarnAboutUpdateInRenderForAnotherComponent.add(dedupeKey);var setStateComponentName=getComponentName(fiber.type)||'Unknown';error('Cannot update a component (`%s`) while rendering a '+'different component (`%s`). To locate the bad setState() call inside `%s`, '+'follow the stack trace as described in https://reactjs.org/link/setstate-in-render',setStateComponentName,renderingComponentName,renderingComponentName);}break;}case ClassComponent:{if(!didWarnAboutUpdateInRender){error('Cannot update during an existing state transition (such as '+'within `render`). Render methods should be a pure '+'function of props and state.');didWarnAboutUpdateInRender=true;}break;}}}}}// a 'shared' variable that changes when act() opens/closes in tests.
  var IsThisRendererActing={current:false};function warnIfNotScopedWithMatchingAct(fiber){{if(warnsIfNotActing===true&&IsSomeRendererActing.current===true&&IsThisRendererActing.current!==true){var previousFiber=current;try{setCurrentFiber(fiber);error("It looks like you're using the wrong act() around your test interactions.\n"+'Be sure to use the matching version of act() corresponding to your renderer:\n\n'+'// for react-dom:\n'+// Break up imports to avoid accidentally parsing them as dependencies.
  'import {act} fr'+"om 'react-dom/test-utils';\n"+'// ...\n'+'act(() => ...);\n\n'+'// for react-test-renderer:\n'+// Break up imports to avoid accidentally parsing them as dependencies.
  'import TestRenderer fr'+"om react-test-renderer';\n"+'const {act} = TestRenderer;\n'+'// ...\n'+'act(() => ...);');}finally{if(previousFiber){setCurrentFiber(fiber);}else {resetCurrentFiber();}}}}}function warnIfNotCurrentlyActingEffectsInDEV(fiber){{if(warnsIfNotActing===true&&(fiber.mode&StrictMode)!==NoMode&&IsSomeRendererActing.current===false&&IsThisRendererActing.current===false){error('An update to %s ran an effect, but was not wrapped in act(...).\n\n'+'When testing, code that causes React state updates should be '+'wrapped into act(...):\n\n'+'act(() => {\n'+'  /* fire events that update state */\n'+'});\n'+'/* assert on the output */\n\n'+"This ensures that you're testing the behavior the user would see "+'in the browser.'+' Learn more at https://reactjs.org/link/wrap-tests-with-act',getComponentName(fiber.type));}}}function warnIfNotCurrentlyActingUpdatesInDEV(fiber){{if(warnsIfNotActing===true&&executionContext===NoContext&&IsSomeRendererActing.current===false&&IsThisRendererActing.current===false){var previousFiber=current;try{setCurrentFiber(fiber);error('An update to %s inside a test was not wrapped in act(...).\n\n'+'When testing, code that causes React state updates should be '+'wrapped into act(...):\n\n'+'act(() => {\n'+'  /* fire events that update state */\n'+'});\n'+'/* assert on the output */\n\n'+"This ensures that you're testing the behavior the user would see "+'in the browser.'+' Learn more at https://reactjs.org/link/wrap-tests-with-act',getComponentName(fiber.type));}finally{if(previousFiber){setCurrentFiber(fiber);}else {resetCurrentFiber();}}}}}var warnIfNotCurrentlyActingUpdatesInDev=warnIfNotCurrentlyActingUpdatesInDEV;// In tests, we want to enforce a mocked scheduler.
  var didWarnAboutUnmockedScheduler=false;// TODO Before we release concurrent mode, revisit this and decide whether a mocked
  // scheduler is the actual recommendation. The alternative could be a testing build,
  // a new lib, or whatever; we dunno just yet. This message is for early adopters
  // to get their tests right.
  function warnIfUnmockedScheduler(fiber){{if(didWarnAboutUnmockedScheduler===false&&Scheduler.unstable_flushAllWithoutAsserting===undefined){if(fiber.mode&BlockingMode||fiber.mode&ConcurrentMode){didWarnAboutUnmockedScheduler=true;error('In Concurrent or Sync modes, the "scheduler" module needs to be mocked '+'to guarantee consistent behaviour across tests and browsers. '+'For example, with jest: \n'+// Break up requires to avoid accidentally parsing them as dependencies.
  "jest.mock('scheduler', () => require"+"('scheduler/unstable_mock'));\n\n"+'For more info, visit https://reactjs.org/link/mock-scheduler');}}}}function computeThreadID(root,lane){// Interaction threads are unique per root and expiration time.
  // NOTE: Intentionally unsound cast. All that matters is that it's a number
  // and it represents a batch of work. Could make a helper function instead,
  // but meh this is fine for now.
  return lane*1000+root.interactionThreadID;}function markSpawnedWork(lane){if(spawnedWorkDuringRender===null){spawnedWorkDuringRender=[lane];}else {spawnedWorkDuringRender.push(lane);}}function scheduleInteractions(root,lane,interactions){if(interactions.size>0){var pendingInteractionMap=root.pendingInteractionMap;var pendingInteractions=pendingInteractionMap.get(lane);if(pendingInteractions!=null){interactions.forEach(function(interaction){if(!pendingInteractions.has(interaction)){// Update the pending async work count for previously unscheduled interaction.
  interaction.__count++;}pendingInteractions.add(interaction);});}else {pendingInteractionMap.set(lane,new Set(interactions));// Update the pending async work count for the current interactions.
  interactions.forEach(function(interaction){interaction.__count++;});}var subscriber=tracing.__subscriberRef.current;if(subscriber!==null){var threadID=computeThreadID(root,lane);subscriber.onWorkScheduled(interactions,threadID);}}}function schedulePendingInteractions(root,lane){scheduleInteractions(root,lane,tracing.__interactionsRef.current);}function startWorkOnPendingInteractions(root,lanes){// we can accurately attribute time spent working on it, And so that cascading
  // work triggered during the render phase will be associated with it.
  var interactions=new Set();root.pendingInteractionMap.forEach(function(scheduledInteractions,scheduledLane){if(includesSomeLane(lanes,scheduledLane)){scheduledInteractions.forEach(function(interaction){return interactions.add(interaction);});}});// Store the current set of interactions on the FiberRoot for a few reasons:
  // We can re-use it in hot functions like performConcurrentWorkOnRoot()
  // without having to recalculate it. We will also use it in commitWork() to
  // pass to any Profiler onRender() hooks. This also provides DevTools with a
  // way to access it when the onCommitRoot() hook is called.
  root.memoizedInteractions=interactions;if(interactions.size>0){var subscriber=tracing.__subscriberRef.current;if(subscriber!==null){var threadID=computeThreadID(root,lanes);try{subscriber.onWorkStarted(interactions,threadID);}catch(error){// If the subscriber throws, rethrow it in a separate task
  scheduleCallback(ImmediatePriority$1,function(){throw error;});}}}}function finishPendingInteractions(root,committedLanes){var remainingLanesAfterCommit=root.pendingLanes;var subscriber;try{subscriber=tracing.__subscriberRef.current;if(subscriber!==null&&root.memoizedInteractions.size>0){// FIXME: More than one lane can finish in a single commit.
  var threadID=computeThreadID(root,committedLanes);subscriber.onWorkStopped(root.memoizedInteractions,threadID);}}catch(error){// If the subscriber throws, rethrow it in a separate task
  scheduleCallback(ImmediatePriority$1,function(){throw error;});}finally{// Clear completed interactions from the pending Map.
  // Unless the render was suspended or cascading work was scheduled,
  // In which case– leave pending interactions until the subsequent render.
  var pendingInteractionMap=root.pendingInteractionMap;pendingInteractionMap.forEach(function(scheduledInteractions,lane){// Only decrement the pending interaction count if we're done.
  // If there's still work at the current priority,
  // That indicates that we are waiting for suspense data.
  if(!includesSomeLane(remainingLanesAfterCommit,lane)){pendingInteractionMap["delete"](lane);scheduledInteractions.forEach(function(interaction){interaction.__count--;if(subscriber!==null&&interaction.__count===0){try{subscriber.onInteractionScheduledWorkCompleted(interaction);}catch(error){// If the subscriber throws, rethrow it in a separate task
  scheduleCallback(ImmediatePriority$1,function(){throw error;});}}});}});}}// `act` testing API
  function shouldForceFlushFallbacksInDEV(){// Never force flush in production. This function should get stripped out.
  return actingUpdatesScopeDepth>0;}var flushMockScheduler=Scheduler.unstable_flushAllWithoutAsserting;var isSchedulerMocked=typeof flushMockScheduler==='function';// Returns whether additional work was scheduled. Caller should keep flushing
  // until there's no work left.
  function flushActWork(){if(flushMockScheduler!==undefined){try{return flushMockScheduler();}finally{}}else {try{var didFlushWork=false;while(flushPassiveEffects()){didFlushWork=true;}return didFlushWork;}finally{}}}function flushWorkAndMicroTasks(onDone){try{flushActWork();enqueueTask(function(){if(flushActWork()){flushWorkAndMicroTasks(onDone);}else {onDone();}});}catch(err){onDone(err);}}// we track the 'depth' of the act() calls with this counter,
  // so we can tell if any async act() calls try to run in parallel.
  var actingUpdatesScopeDepth=0;function act(callback){var previousActingUpdatesScopeDepth=actingUpdatesScopeDepth;actingUpdatesScopeDepth++;var previousIsSomeRendererActing=IsSomeRendererActing.current;var previousIsThisRendererActing=IsThisRendererActing.current;IsSomeRendererActing.current=true;IsThisRendererActing.current=true;function onDone(){actingUpdatesScopeDepth--;IsSomeRendererActing.current=previousIsSomeRendererActing;IsThisRendererActing.current=previousIsThisRendererActing;{if(actingUpdatesScopeDepth>previousActingUpdatesScopeDepth){// if it's _less than_ previousActingUpdatesScopeDepth, then we can assume the 'other' one has warned
  error('You seem to have overlapping act() calls, this is not supported. '+'Be sure to await previous act() calls before making a new one. ');}}}var result;try{result=batchedUpdates(callback);}catch(error){// on sync errors, we still want to 'cleanup' and decrement actingUpdatesScopeDepth
  onDone();throw error;}if(result!==null&&_typeof(result)==='object'&&typeof result.then==='function'){// setup a boolean that gets set to true only
  // once this act() call is await-ed
  var called=false;{if(typeof Promise!=='undefined'){//eslint-disable-next-line no-undef
  Promise.resolve().then(function(){}).then(function(){if(called===false){error('You called act(async () => ...) without await. '+'This could lead to unexpected testing behaviour, interleaving multiple act '+'calls and mixing their scopes. You should - await act(async () => ...);');}});}}// in the async case, the returned thenable runs the callback, flushes
  // effects and  microtasks in a loop until flushPassiveEffects() === false,
  // and cleans up
  return {then:function then(resolve,reject){called=true;result.then(function(){if(actingUpdatesScopeDepth>1||isSchedulerMocked===true&&previousIsSomeRendererActing===true){onDone();resolve();return;}// we're about to exit the act() scope,
  // now's the time to flush tasks/effects
  flushWorkAndMicroTasks(function(err){onDone();if(err){reject(err);}else {resolve();}});},function(err){onDone();reject(err);});}};}else {{if(result!==undefined){error('The callback passed to act(...) function '+'must return undefined, or a Promise. You returned %s',result);}}// flush effects until none remain, and cleanup
  try{if(actingUpdatesScopeDepth===1&&(isSchedulerMocked===false||previousIsSomeRendererActing===false)){// we're about to exit the act() scope,
  // now's the time to flush effects
  flushActWork();}onDone();}catch(err){onDone();throw err;}// in the sync case, the returned thenable only warns *if* await-ed
  return {then:function then(resolve){{error('Do not await the result of calling act(...) with sync logic, it is not a Promise.');}resolve();}};}}function detachFiberAfterEffects(fiber){fiber.sibling=null;fiber.stateNode=null;}var resolveFamily=null;// $FlowFixMe Flow gets confused by a WeakSet feature check below.
  var failedBoundaries=null;var setRefreshHandler=function setRefreshHandler(handler){{resolveFamily=handler;}};function resolveFunctionForHotReloading(type){{if(resolveFamily===null){// Hot reloading is disabled.
  return type;}var family=resolveFamily(type);if(family===undefined){return type;}// Use the latest known implementation.
  return family.current;}}function resolveClassForHotReloading(type){// No implementation differences.
  return resolveFunctionForHotReloading(type);}function resolveForwardRefForHotReloading(type){{if(resolveFamily===null){// Hot reloading is disabled.
  return type;}var family=resolveFamily(type);if(family===undefined){// Check if we're dealing with a real forwardRef. Don't want to crash early.
  if(type!==null&&type!==undefined&&typeof type.render==='function'){// ForwardRef is special because its resolved .type is an object,
  // but it's possible that we only have its inner render function in the map.
  // If that inner render function is different, we'll build a new forwardRef type.
  var currentRender=resolveFunctionForHotReloading(type.render);if(type.render!==currentRender){var syntheticType={$$typeof:REACT_FORWARD_REF_TYPE,render:currentRender};if(type.displayName!==undefined){syntheticType.displayName=type.displayName;}return syntheticType;}}return type;}// Use the latest known implementation.
  return family.current;}}function isCompatibleFamilyForHotReloading(fiber,element){{if(resolveFamily===null){// Hot reloading is disabled.
  return false;}var prevType=fiber.elementType;var nextType=element.type;// If we got here, we know types aren't === equal.
  var needsCompareFamilies=false;var $$typeofNextType=_typeof(nextType)==='object'&&nextType!==null?nextType.$$typeof:null;switch(fiber.tag){case ClassComponent:{if(typeof nextType==='function'){needsCompareFamilies=true;}break;}case FunctionComponent:{if(typeof nextType==='function'){needsCompareFamilies=true;}else if($$typeofNextType===REACT_LAZY_TYPE){// We don't know the inner type yet.
  // We're going to assume that the lazy inner type is stable,
  // and so it is sufficient to avoid reconciling it away.
  // We're not going to unwrap or actually use the new lazy type.
  needsCompareFamilies=true;}break;}case ForwardRef:{if($$typeofNextType===REACT_FORWARD_REF_TYPE){needsCompareFamilies=true;}else if($$typeofNextType===REACT_LAZY_TYPE){needsCompareFamilies=true;}break;}case MemoComponent:case SimpleMemoComponent:{if($$typeofNextType===REACT_MEMO_TYPE){// TODO: if it was but can no longer be simple,
  // we shouldn't set this.
  needsCompareFamilies=true;}else if($$typeofNextType===REACT_LAZY_TYPE){needsCompareFamilies=true;}break;}default:return false;}// Check if both types have a family and it's the same one.
  if(needsCompareFamilies){// Note: memo() and forwardRef() we'll compare outer rather than inner type.
  // This means both of them need to be registered to preserve state.
  // If we unwrapped and compared the inner types for wrappers instead,
  // then we would risk falsely saying two separate memo(Foo)
  // calls are equivalent because they wrap the same Foo function.
  var prevFamily=resolveFamily(prevType);if(prevFamily!==undefined&&prevFamily===resolveFamily(nextType)){return true;}}return false;}}function markFailedErrorBoundaryForHotReloading(fiber){{if(resolveFamily===null){// Hot reloading is disabled.
  return;}if(typeof WeakSet!=='function'){return;}if(failedBoundaries===null){failedBoundaries=new WeakSet();}failedBoundaries.add(fiber);}}var scheduleRefresh=function scheduleRefresh(root,update){{if(resolveFamily===null){// Hot reloading is disabled.
  return;}var staleFamilies=update.staleFamilies,updatedFamilies=update.updatedFamilies;flushPassiveEffects();flushSync(function(){scheduleFibersWithFamiliesRecursively(root.current,updatedFamilies,staleFamilies);});}};var scheduleRoot=function scheduleRoot(root,element){{if(root.context!==emptyContextObject){// Super edge case: root has a legacy _renderSubtree context
  // but we don't know the parentComponent so we can't pass it.
  // Just ignore. We'll delete this with _renderSubtree code path later.
  return;}flushPassiveEffects();flushSync(function(){updateContainer(element,root,null,null);});}};function scheduleFibersWithFamiliesRecursively(fiber,updatedFamilies,staleFamilies){{var alternate=fiber.alternate,child=fiber.child,sibling=fiber.sibling,tag=fiber.tag,type=fiber.type;var candidateType=null;switch(tag){case FunctionComponent:case SimpleMemoComponent:case ClassComponent:candidateType=type;break;case ForwardRef:candidateType=type.render;break;}if(resolveFamily===null){throw new Error('Expected resolveFamily to be set during hot reload.');}var needsRender=false;var needsRemount=false;if(candidateType!==null){var family=resolveFamily(candidateType);if(family!==undefined){if(staleFamilies.has(family)){needsRemount=true;}else if(updatedFamilies.has(family)){if(tag===ClassComponent){needsRemount=true;}else {needsRender=true;}}}}if(failedBoundaries!==null){if(failedBoundaries.has(fiber)||alternate!==null&&failedBoundaries.has(alternate)){needsRemount=true;}}if(needsRemount){fiber._debugNeedsRemount=true;}if(needsRemount||needsRender){scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);}if(child!==null&&!needsRemount){scheduleFibersWithFamiliesRecursively(child,updatedFamilies,staleFamilies);}if(sibling!==null){scheduleFibersWithFamiliesRecursively(sibling,updatedFamilies,staleFamilies);}}}var findHostInstancesForRefresh=function findHostInstancesForRefresh(root,families){{var hostInstances=new Set();var types=new Set(families.map(function(family){return family.current;}));findHostInstancesForMatchingFibersRecursively(root.current,types,hostInstances);return hostInstances;}};function findHostInstancesForMatchingFibersRecursively(fiber,types,hostInstances){{var child=fiber.child,sibling=fiber.sibling,tag=fiber.tag,type=fiber.type;var candidateType=null;switch(tag){case FunctionComponent:case SimpleMemoComponent:case ClassComponent:candidateType=type;break;case ForwardRef:candidateType=type.render;break;}var didMatch=false;if(candidateType!==null){if(types.has(candidateType)){didMatch=true;}}if(didMatch){// We have a match. This only drills down to the closest host components.
  // There's no need to search deeper because for the purpose of giving
  // visual feedback, "flashing" outermost parent rectangles is sufficient.
  findHostInstancesForFiberShallowly(fiber,hostInstances);}else {// If there's no match, maybe there will be one further down in the child tree.
  if(child!==null){findHostInstancesForMatchingFibersRecursively(child,types,hostInstances);}}if(sibling!==null){findHostInstancesForMatchingFibersRecursively(sibling,types,hostInstances);}}}function findHostInstancesForFiberShallowly(fiber,hostInstances){{var foundHostInstances=findChildHostInstancesForFiberShallowly(fiber,hostInstances);if(foundHostInstances){return;}// If we didn't find any host children, fallback to closest host parent.
  var node=fiber;while(true){switch(node.tag){case HostComponent:hostInstances.add(node.stateNode);return;case HostPortal:hostInstances.add(node.stateNode.containerInfo);return;case HostRoot:hostInstances.add(node.stateNode.containerInfo);return;}if(node["return"]===null){throw new Error('Expected to reach root first.');}node=node["return"];}}}function findChildHostInstancesForFiberShallowly(fiber,hostInstances){{var node=fiber;var foundHostInstances=false;while(true){if(node.tag===HostComponent){// We got a match.
  foundHostInstances=true;hostInstances.add(node.stateNode);// There may still be more, so keep searching.
  }else if(node.child!==null){node.child["return"]=node;node=node.child;continue;}if(node===fiber){return foundHostInstances;}while(node.sibling===null){if(node["return"]===null||node["return"]===fiber){return foundHostInstances;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}}return false;}var hasBadMapPolyfill;{hasBadMapPolyfill=false;try{var nonExtensibleObject=Object.preventExtensions({});/* eslint-disable no-new */new Map([[nonExtensibleObject,null]]);new Set([nonExtensibleObject]);/* eslint-enable no-new */}catch(e){// TODO: Consider warning about bad polyfills
  hasBadMapPolyfill=true;}}var debugCounter=1;function FiberNode(tag,pendingProps,key,mode){// Instance
  this.tag=tag;this.key=key;this.elementType=null;this.type=null;this.stateNode=null;// Fiber
  this["return"]=null;this.child=null;this.sibling=null;this.index=0;this.ref=null;this.pendingProps=pendingProps;this.memoizedProps=null;this.updateQueue=null;this.memoizedState=null;this.dependencies=null;this.mode=mode;// Effects
  this.flags=NoFlags;this.nextEffect=null;this.firstEffect=null;this.lastEffect=null;this.lanes=NoLanes;this.childLanes=NoLanes;this.alternate=null;{// Note: The following is done to avoid a v8 performance cliff.
  //
  // Initializing the fields below to smis and later updating them with
  // double values will cause Fibers to end up having separate shapes.
  // This behavior/bug has something to do with Object.preventExtension().
  // Fortunately this only impacts DEV builds.
  // Unfortunately it makes React unusably slow for some applications.
  // To work around this, initialize the fields below with doubles.
  //
  // Learn more about this here:
  // https://github.com/facebook/react/issues/14365
  // https://bugs.chromium.org/p/v8/issues/detail?id=8538
  this.actualDuration=Number.NaN;this.actualStartTime=Number.NaN;this.selfBaseDuration=Number.NaN;this.treeBaseDuration=Number.NaN;// It's okay to replace the initial doubles with smis after initialization.
  // This won't trigger the performance cliff mentioned above,
  // and it simplifies other profiler code (including DevTools).
  this.actualDuration=0;this.actualStartTime=-1;this.selfBaseDuration=0;this.treeBaseDuration=0;}{// This isn't directly used but is handy for debugging internals:
  this._debugID=debugCounter++;this._debugSource=null;this._debugOwner=null;this._debugNeedsRemount=false;this._debugHookTypes=null;if(!hasBadMapPolyfill&&typeof Object.preventExtensions==='function'){Object.preventExtensions(this);}}}// This is a constructor function, rather than a POJO constructor, still
  // please ensure we do the following:
  // 1) Nobody should add any instance methods on this. Instance methods can be
  //    more difficult to predict when they get optimized and they are almost
  //    never inlined properly in static compilers.
  // 2) Nobody should rely on `instanceof Fiber` for type testing. We should
  //    always know when it is a fiber.
  // 3) We might want to experiment with using numeric keys since they are easier
  //    to optimize in a non-JIT environment.
  // 4) We can easily go from a constructor to a createFiber object literal if that
  //    is faster.
  // 5) It should be easy to port this to a C struct and keep a C implementation
  //    compatible.
  var createFiber=function createFiber(tag,pendingProps,key,mode){// $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
  return new FiberNode(tag,pendingProps,key,mode);};function shouldConstruct$1(Component){var prototype=Component.prototype;return !!(prototype&&prototype.isReactComponent);}function isSimpleFunctionComponent(type){return typeof type==='function'&&!shouldConstruct$1(type)&&type.defaultProps===undefined;}function resolveLazyComponentTag(Component){if(typeof Component==='function'){return shouldConstruct$1(Component)?ClassComponent:FunctionComponent;}else if(Component!==undefined&&Component!==null){var $$typeof=Component.$$typeof;if($$typeof===REACT_FORWARD_REF_TYPE){return ForwardRef;}if($$typeof===REACT_MEMO_TYPE){return MemoComponent;}}return IndeterminateComponent;}// This is used to create an alternate fiber to do work on.
  function createWorkInProgress(current,pendingProps){var workInProgress=current.alternate;if(workInProgress===null){// We use a double buffering pooling technique because we know that we'll
  // only ever need at most two versions of a tree. We pool the "other" unused
  // node that we're free to reuse. This is lazily created to avoid allocating
  // extra objects for things that are never updated. It also allow us to
  // reclaim the extra memory if needed.
  workInProgress=createFiber(current.tag,pendingProps,current.key,current.mode);workInProgress.elementType=current.elementType;workInProgress.type=current.type;workInProgress.stateNode=current.stateNode;{// DEV-only fields
  workInProgress._debugID=current._debugID;workInProgress._debugSource=current._debugSource;workInProgress._debugOwner=current._debugOwner;workInProgress._debugHookTypes=current._debugHookTypes;}workInProgress.alternate=current;current.alternate=workInProgress;}else {workInProgress.pendingProps=pendingProps;// Needed because Blocks store data on type.
  workInProgress.type=current.type;// We already have an alternate.
  // Reset the effect tag.
  workInProgress.flags=NoFlags;// The effect list is no longer valid.
  workInProgress.nextEffect=null;workInProgress.firstEffect=null;workInProgress.lastEffect=null;{// We intentionally reset, rather than copy, actualDuration & actualStartTime.
  // This prevents time from endlessly accumulating in new commits.
  // This has the downside of resetting values for different priority renders,
  // But works for yielding (the common case) and should support resuming.
  workInProgress.actualDuration=0;workInProgress.actualStartTime=-1;}}workInProgress.childLanes=current.childLanes;workInProgress.lanes=current.lanes;workInProgress.child=current.child;workInProgress.memoizedProps=current.memoizedProps;workInProgress.memoizedState=current.memoizedState;workInProgress.updateQueue=current.updateQueue;// Clone the dependencies object. This is mutated during the render phase, so
  // it cannot be shared with the current fiber.
  var currentDependencies=current.dependencies;workInProgress.dependencies=currentDependencies===null?null:{lanes:currentDependencies.lanes,firstContext:currentDependencies.firstContext};// These will be overridden during the parent's reconciliation
  workInProgress.sibling=current.sibling;workInProgress.index=current.index;workInProgress.ref=current.ref;{workInProgress.selfBaseDuration=current.selfBaseDuration;workInProgress.treeBaseDuration=current.treeBaseDuration;}{workInProgress._debugNeedsRemount=current._debugNeedsRemount;switch(workInProgress.tag){case IndeterminateComponent:case FunctionComponent:case SimpleMemoComponent:workInProgress.type=resolveFunctionForHotReloading(current.type);break;case ClassComponent:workInProgress.type=resolveClassForHotReloading(current.type);break;case ForwardRef:workInProgress.type=resolveForwardRefForHotReloading(current.type);break;}}return workInProgress;}// Used to reuse a Fiber for a second pass.
  function resetWorkInProgress(workInProgress,renderLanes){// This resets the Fiber to what createFiber or createWorkInProgress would
  // have set the values to before during the first pass. Ideally this wouldn't
  // be necessary but unfortunately many code paths reads from the workInProgress
  // when they should be reading from current and writing to workInProgress.
  // We assume pendingProps, index, key, ref, return are still untouched to
  // avoid doing another reconciliation.
  // Reset the effect tag but keep any Placement tags, since that's something
  // that child fiber is setting, not the reconciliation.
  workInProgress.flags&=Placement;// The effect list is no longer valid.
  workInProgress.nextEffect=null;workInProgress.firstEffect=null;workInProgress.lastEffect=null;var current=workInProgress.alternate;if(current===null){// Reset to createFiber's initial values.
  workInProgress.childLanes=NoLanes;workInProgress.lanes=renderLanes;workInProgress.child=null;workInProgress.memoizedProps=null;workInProgress.memoizedState=null;workInProgress.updateQueue=null;workInProgress.dependencies=null;workInProgress.stateNode=null;{// Note: We don't reset the actualTime counts. It's useful to accumulate
  // actual time across multiple render passes.
  workInProgress.selfBaseDuration=0;workInProgress.treeBaseDuration=0;}}else {// Reset to the cloned values that createWorkInProgress would've.
  workInProgress.childLanes=current.childLanes;workInProgress.lanes=current.lanes;workInProgress.child=current.child;workInProgress.memoizedProps=current.memoizedProps;workInProgress.memoizedState=current.memoizedState;workInProgress.updateQueue=current.updateQueue;// Needed because Blocks store data on type.
  workInProgress.type=current.type;// Clone the dependencies object. This is mutated during the render phase, so
  // it cannot be shared with the current fiber.
  var currentDependencies=current.dependencies;workInProgress.dependencies=currentDependencies===null?null:{lanes:currentDependencies.lanes,firstContext:currentDependencies.firstContext};{// Note: We don't reset the actualTime counts. It's useful to accumulate
  // actual time across multiple render passes.
  workInProgress.selfBaseDuration=current.selfBaseDuration;workInProgress.treeBaseDuration=current.treeBaseDuration;}}return workInProgress;}function createHostRootFiber(tag){var mode;if(tag===ConcurrentRoot){mode=ConcurrentMode|BlockingMode|StrictMode;}else if(tag===BlockingRoot){mode=BlockingMode|StrictMode;}else {mode=NoMode;}if(isDevToolsPresent){// Always collect profile timings when DevTools are present.
  // This enables DevTools to start capturing timing at any point–
  // Without some nodes in the tree having empty base times.
  mode|=ProfileMode;}return createFiber(HostRoot,null,null,mode);}function createFiberFromTypeAndProps(type,// React$ElementType
  key,pendingProps,owner,mode,lanes){var fiberTag=IndeterminateComponent;// The resolved type is set if we know what the final type will be. I.e. it's not lazy.
  var resolvedType=type;if(typeof type==='function'){if(shouldConstruct$1(type)){fiberTag=ClassComponent;{resolvedType=resolveClassForHotReloading(resolvedType);}}else {{resolvedType=resolveFunctionForHotReloading(resolvedType);}}}else if(typeof type==='string'){fiberTag=HostComponent;}else {getTag:switch(type){case REACT_FRAGMENT_TYPE:return createFiberFromFragment(pendingProps.children,mode,lanes,key);case REACT_DEBUG_TRACING_MODE_TYPE:fiberTag=Mode;mode|=DebugTracingMode;break;case REACT_STRICT_MODE_TYPE:fiberTag=Mode;mode|=StrictMode;break;case REACT_PROFILER_TYPE:return createFiberFromProfiler(pendingProps,mode,lanes,key);case REACT_SUSPENSE_TYPE:return createFiberFromSuspense(pendingProps,mode,lanes,key);case REACT_SUSPENSE_LIST_TYPE:return createFiberFromSuspenseList(pendingProps,mode,lanes,key);case REACT_OFFSCREEN_TYPE:return createFiberFromOffscreen(pendingProps,mode,lanes,key);case REACT_LEGACY_HIDDEN_TYPE:return createFiberFromLegacyHidden(pendingProps,mode,lanes,key);case REACT_SCOPE_TYPE:// eslint-disable-next-line no-fallthrough
  default:{if(_typeof(type)==='object'&&type!==null){switch(type.$$typeof){case REACT_PROVIDER_TYPE:fiberTag=ContextProvider;break getTag;case REACT_CONTEXT_TYPE:// This is a consumer
  fiberTag=ContextConsumer;break getTag;case REACT_FORWARD_REF_TYPE:fiberTag=ForwardRef;{resolvedType=resolveForwardRefForHotReloading(resolvedType);}break getTag;case REACT_MEMO_TYPE:fiberTag=MemoComponent;break getTag;case REACT_LAZY_TYPE:fiberTag=LazyComponent;resolvedType=null;break getTag;case REACT_BLOCK_TYPE:fiberTag=Block;break getTag;}}var info='';{if(type===undefined||_typeof(type)==='object'&&type!==null&&Object.keys(type).length===0){info+=' You likely forgot to export your component from the file '+"it's defined in, or you might have mixed up default and "+'named imports.';}var ownerName=owner?getComponentName(owner.type):null;if(ownerName){info+='\n\nCheck the render method of `'+ownerName+'`.';}}{{throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(type==null?type:_typeof(type))+"."+info);}}}}}var fiber=createFiber(fiberTag,pendingProps,key,mode);fiber.elementType=type;fiber.type=resolvedType;fiber.lanes=lanes;{fiber._debugOwner=owner;}return fiber;}function createFiberFromElement(element,mode,lanes){var owner=null;{owner=element._owner;}var type=element.type;var key=element.key;var pendingProps=element.props;var fiber=createFiberFromTypeAndProps(type,key,pendingProps,owner,mode,lanes);{fiber._debugSource=element._source;fiber._debugOwner=element._owner;}return fiber;}function createFiberFromFragment(elements,mode,lanes,key){var fiber=createFiber(Fragment,elements,key,mode);fiber.lanes=lanes;return fiber;}function createFiberFromProfiler(pendingProps,mode,lanes,key){{if(typeof pendingProps.id!=='string'){error('Profiler must specify an "id" as a prop');}}var fiber=createFiber(Profiler,pendingProps,key,mode|ProfileMode);// TODO: The Profiler fiber shouldn't have a type. It has a tag.
  fiber.elementType=REACT_PROFILER_TYPE;fiber.type=REACT_PROFILER_TYPE;fiber.lanes=lanes;{fiber.stateNode={effectDuration:0,passiveEffectDuration:0};}return fiber;}function createFiberFromSuspense(pendingProps,mode,lanes,key){var fiber=createFiber(SuspenseComponent,pendingProps,key,mode);// TODO: The SuspenseComponent fiber shouldn't have a type. It has a tag.
  // This needs to be fixed in getComponentName so that it relies on the tag
  // instead.
  fiber.type=REACT_SUSPENSE_TYPE;fiber.elementType=REACT_SUSPENSE_TYPE;fiber.lanes=lanes;return fiber;}function createFiberFromSuspenseList(pendingProps,mode,lanes,key){var fiber=createFiber(SuspenseListComponent,pendingProps,key,mode);{// TODO: The SuspenseListComponent fiber shouldn't have a type. It has a tag.
  // This needs to be fixed in getComponentName so that it relies on the tag
  // instead.
  fiber.type=REACT_SUSPENSE_LIST_TYPE;}fiber.elementType=REACT_SUSPENSE_LIST_TYPE;fiber.lanes=lanes;return fiber;}function createFiberFromOffscreen(pendingProps,mode,lanes,key){var fiber=createFiber(OffscreenComponent,pendingProps,key,mode);// TODO: The OffscreenComponent fiber shouldn't have a type. It has a tag.
  // This needs to be fixed in getComponentName so that it relies on the tag
  // instead.
  {fiber.type=REACT_OFFSCREEN_TYPE;}fiber.elementType=REACT_OFFSCREEN_TYPE;fiber.lanes=lanes;return fiber;}function createFiberFromLegacyHidden(pendingProps,mode,lanes,key){var fiber=createFiber(LegacyHiddenComponent,pendingProps,key,mode);// TODO: The LegacyHidden fiber shouldn't have a type. It has a tag.
  // This needs to be fixed in getComponentName so that it relies on the tag
  // instead.
  {fiber.type=REACT_LEGACY_HIDDEN_TYPE;}fiber.elementType=REACT_LEGACY_HIDDEN_TYPE;fiber.lanes=lanes;return fiber;}function createFiberFromText(content,mode,lanes){var fiber=createFiber(HostText,content,null,mode);fiber.lanes=lanes;return fiber;}function createFiberFromHostInstanceForDeletion(){var fiber=createFiber(HostComponent,null,null,NoMode);// TODO: These should not need a type.
  fiber.elementType='DELETED';fiber.type='DELETED';return fiber;}function createFiberFromPortal(portal,mode,lanes){var pendingProps=portal.children!==null?portal.children:[];var fiber=createFiber(HostPortal,pendingProps,portal.key,mode);fiber.lanes=lanes;fiber.stateNode={containerInfo:portal.containerInfo,pendingChildren:null,// Used by persistent updates
  implementation:portal.implementation};return fiber;}// Used for stashing WIP properties to replay failed work in DEV.
  function assignFiberPropertiesInDEV(target,source){if(target===null){// This Fiber's initial properties will always be overwritten.
  // We only use a Fiber to ensure the same hidden class so DEV isn't slow.
  target=createFiber(IndeterminateComponent,null,null,NoMode);}// This is intentionally written as a list of all properties.
  // We tried to use Object.assign() instead but this is called in
  // the hottest path, and Object.assign() was too slow:
  // https://github.com/facebook/react/issues/12502
  // This code is DEV-only so size is not a concern.
  target.tag=source.tag;target.key=source.key;target.elementType=source.elementType;target.type=source.type;target.stateNode=source.stateNode;target["return"]=source["return"];target.child=source.child;target.sibling=source.sibling;target.index=source.index;target.ref=source.ref;target.pendingProps=source.pendingProps;target.memoizedProps=source.memoizedProps;target.updateQueue=source.updateQueue;target.memoizedState=source.memoizedState;target.dependencies=source.dependencies;target.mode=source.mode;target.flags=source.flags;target.nextEffect=source.nextEffect;target.firstEffect=source.firstEffect;target.lastEffect=source.lastEffect;target.lanes=source.lanes;target.childLanes=source.childLanes;target.alternate=source.alternate;{target.actualDuration=source.actualDuration;target.actualStartTime=source.actualStartTime;target.selfBaseDuration=source.selfBaseDuration;target.treeBaseDuration=source.treeBaseDuration;}target._debugID=source._debugID;target._debugSource=source._debugSource;target._debugOwner=source._debugOwner;target._debugNeedsRemount=source._debugNeedsRemount;target._debugHookTypes=source._debugHookTypes;return target;}function FiberRootNode(containerInfo,tag,hydrate){this.tag=tag;this.containerInfo=containerInfo;this.pendingChildren=null;this.current=null;this.pingCache=null;this.finishedWork=null;this.timeoutHandle=noTimeout;this.context=null;this.pendingContext=null;this.hydrate=hydrate;this.callbackNode=null;this.callbackPriority=NoLanePriority;this.eventTimes=createLaneMap(NoLanes);this.expirationTimes=createLaneMap(NoTimestamp);this.pendingLanes=NoLanes;this.suspendedLanes=NoLanes;this.pingedLanes=NoLanes;this.expiredLanes=NoLanes;this.mutableReadLanes=NoLanes;this.finishedLanes=NoLanes;this.entangledLanes=NoLanes;this.entanglements=createLaneMap(NoLanes);if(supportsHydration){this.mutableSourceEagerHydrationData=null;}{this.interactionThreadID=tracing.unstable_getThreadID();this.memoizedInteractions=new Set();this.pendingInteractionMap=new Map();}{switch(tag){case BlockingRoot:this._debugRootType='createBlockingRoot()';break;case ConcurrentRoot:this._debugRootType='createRoot()';break;case LegacyRoot:this._debugRootType='createLegacyRoot()';break;}}}function createFiberRoot(containerInfo,tag,hydrate,hydrationCallbacks){var root=new FiberRootNode(containerInfo,tag,hydrate);// stateNode is any.
  var uninitializedFiber=createHostRootFiber(tag);root.current=uninitializedFiber;uninitializedFiber.stateNode=root;initializeUpdateQueue(uninitializedFiber);return root;}// This ensures that the version used for server rendering matches the one
  // that is eventually read during hydration.
  // If they don't match there's a potential tear and a full deopt render is required.
  function registerMutableSourceForHydration(root,mutableSource){var getVersion=mutableSource._getVersion;var version=getVersion(mutableSource._source);// TODO Clear this data once all pending hydration work is finished.
  // Retaining it forever may interfere with GC.
  if(root.mutableSourceEagerHydrationData==null){root.mutableSourceEagerHydrationData=[mutableSource,version];}else {root.mutableSourceEagerHydrationData.push(mutableSource,version);}}function createPortal(children,containerInfo,// TODO: figure out the API for cross-renderer implementation.
  implementation){var key=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;return {// This tag allow us to uniquely identify this as a React Portal
  $$typeof:REACT_PORTAL_TYPE,key:key==null?null:''+key,children:children,containerInfo:containerInfo,implementation:implementation};}var didWarnAboutNestedUpdates;var didWarnAboutFindNodeInStrictMode;{didWarnAboutNestedUpdates=false;didWarnAboutFindNodeInStrictMode={};}function getContextForSubtree(parentComponent){if(!parentComponent){return emptyContextObject;}var fiber=get(parentComponent);var parentContext=findCurrentUnmaskedContext(fiber);if(fiber.tag===ClassComponent){var Component=fiber.type;if(isContextProvider(Component)){return processChildContext(fiber,Component,parentContext);}}return parentContext;}function findHostInstance(component){var fiber=get(component);if(fiber===undefined){if(typeof component.render==='function'){{{throw Error("Unable to find node on an unmounted component.");}}}else {{{throw Error("Argument appears to not be a ReactComponent. Keys: "+Object.keys(component));}}}}var hostFiber=findCurrentHostFiber(fiber);if(hostFiber===null){return null;}return hostFiber.stateNode;}function findHostInstanceWithWarning(component,methodName){{var fiber=get(component);if(fiber===undefined){if(typeof component.render==='function'){{{throw Error("Unable to find node on an unmounted component.");}}}else {{{throw Error("Argument appears to not be a ReactComponent. Keys: "+Object.keys(component));}}}}var hostFiber=findCurrentHostFiber(fiber);if(hostFiber===null){return null;}if(hostFiber.mode&StrictMode){var componentName=getComponentName(fiber.type)||'Component';if(!didWarnAboutFindNodeInStrictMode[componentName]){didWarnAboutFindNodeInStrictMode[componentName]=true;var previousFiber=current;try{setCurrentFiber(hostFiber);if(fiber.mode&StrictMode){error('%s is deprecated in StrictMode. '+'%s was passed an instance of %s which is inside StrictMode. '+'Instead, add a ref directly to the element you want to reference. '+'Learn more about using refs safely here: '+'https://reactjs.org/link/strict-mode-find-node',methodName,methodName,componentName);}else {error('%s is deprecated in StrictMode. '+'%s was passed an instance of %s which renders StrictMode children. '+'Instead, add a ref directly to the element you want to reference. '+'Learn more about using refs safely here: '+'https://reactjs.org/link/strict-mode-find-node',methodName,methodName,componentName);}}finally{// Ideally this should reset to previous but this shouldn't be called in
  // render and there's another warning for that anyway.
  if(previousFiber){setCurrentFiber(previousFiber);}else {resetCurrentFiber();}}}}return hostFiber.stateNode;}}function createContainer(containerInfo,tag,hydrate,hydrationCallbacks){return createFiberRoot(containerInfo,tag,hydrate);}function updateContainer(element,container,parentComponent,callback){{onScheduleRoot(container,element);}var current$1=container.current;var eventTime=requestEventTime();{// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
  if('undefined'!==typeof jest){warnIfUnmockedScheduler(current$1);warnIfNotScopedWithMatchingAct(current$1);}}var lane=requestUpdateLane(current$1);var context=getContextForSubtree(parentComponent);if(container.context===null){container.context=context;}else {container.pendingContext=context;}{if(isRendering&&current!==null&&!didWarnAboutNestedUpdates){didWarnAboutNestedUpdates=true;error('Render methods should be a pure function of props and state; '+'triggering nested component updates from render is not allowed. '+'If necessary, trigger nested updates in componentDidUpdate.\n\n'+'Check the render method of %s.',getComponentName(current.type)||'Unknown');}}var update=createUpdate(eventTime,lane);// Caution: React DevTools currently depends on this property
  // being called "element".
  update.payload={element:element};callback=callback===undefined?null:callback;if(callback!==null){{if(typeof callback!=='function'){error('render(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callback);}}update.callback=callback;}enqueueUpdate(current$1,update);scheduleUpdateOnFiber(current$1,lane,eventTime);return lane;}function getPublicRootInstance(container){var containerFiber=container.current;if(!containerFiber.child){return null;}switch(containerFiber.child.tag){case HostComponent:return getPublicInstance(containerFiber.child.stateNode);default:return containerFiber.child.stateNode;}}function attemptSynchronousHydration(fiber){switch(fiber.tag){case HostRoot:var root=fiber.stateNode;if(root.hydrate){// Flush the first scheduled "update".
  var lanes=getHighestPriorityPendingLanes(root);flushRoot(root,lanes);}break;case SuspenseComponent:var eventTime=requestEventTime();flushSync(function(){return scheduleUpdateOnFiber(fiber,SyncLane,eventTime);});// If we're still blocked after this, we need to increase
  // the priority of any promises resolving within this
  // boundary so that they next attempt also has higher pri.
  var retryLane=InputDiscreteHydrationLane;markRetryLaneIfNotHydrated(fiber,retryLane);break;}}function markRetryLaneImpl(fiber,retryLane){var suspenseState=fiber.memoizedState;if(suspenseState!==null&&suspenseState.dehydrated!==null){suspenseState.retryLane=higherPriorityLane(suspenseState.retryLane,retryLane);}}// Increases the priority of thennables when they resolve within this boundary.
  function markRetryLaneIfNotHydrated(fiber,retryLane){markRetryLaneImpl(fiber,retryLane);var alternate=fiber.alternate;if(alternate){markRetryLaneImpl(alternate,retryLane);}}function attemptUserBlockingHydration(fiber){if(fiber.tag!==SuspenseComponent){// We ignore HostRoots here because we can't increase
  // their priority and they should not suspend on I/O,
  // since you have to wrap anything that might suspend in
  // Suspense.
  return;}var eventTime=requestEventTime();var lane=InputDiscreteHydrationLane;scheduleUpdateOnFiber(fiber,lane,eventTime);markRetryLaneIfNotHydrated(fiber,lane);}function attemptContinuousHydration(fiber){if(fiber.tag!==SuspenseComponent){// We ignore HostRoots here because we can't increase
  // their priority and they should not suspend on I/O,
  // since you have to wrap anything that might suspend in
  // Suspense.
  return;}var eventTime=requestEventTime();var lane=SelectiveHydrationLane;scheduleUpdateOnFiber(fiber,lane,eventTime);markRetryLaneIfNotHydrated(fiber,lane);}function attemptHydrationAtCurrentPriority(fiber){if(fiber.tag!==SuspenseComponent){// We ignore HostRoots here because we can't increase
  // their priority other than synchronously flush it.
  return;}var eventTime=requestEventTime();var lane=requestUpdateLane(fiber);scheduleUpdateOnFiber(fiber,lane,eventTime);markRetryLaneIfNotHydrated(fiber,lane);}function runWithPriority$1(priority,fn){var previousPriority=getCurrentUpdateLanePriority();try{setCurrentUpdateLanePriority(priority);return fn();}finally{setCurrentUpdateLanePriority(previousPriority);}}function findHostInstanceWithNoPortals(fiber){var hostFiber=findCurrentHostFiberWithNoPortals(fiber);if(hostFiber===null){return null;}if(hostFiber.tag===FundamentalComponent){return hostFiber.stateNode.instance;}return hostFiber.stateNode;}var shouldSuspendImpl=function shouldSuspendImpl(fiber){return false;};function shouldSuspend(fiber){return shouldSuspendImpl(fiber);}var overrideHookState=null;var overrideHookStateDeletePath=null;var overrideHookStateRenamePath=null;var overrideProps=null;var overridePropsDeletePath=null;var overridePropsRenamePath=null;var scheduleUpdate=null;var setSuspenseHandler=null;{var copyWithDeleteImpl=function copyWithDeleteImpl(obj,path,index){var key=path[index];var updated=Array.isArray(obj)?obj.slice():_assign({},obj);if(index+1===path.length){if(Array.isArray(updated)){updated.splice(key,1);}else {delete updated[key];}return updated;}// $FlowFixMe number or string is fine here
  updated[key]=copyWithDeleteImpl(obj[key],path,index+1);return updated;};var copyWithDelete=function copyWithDelete(obj,path){return copyWithDeleteImpl(obj,path,0);};var copyWithRenameImpl=function copyWithRenameImpl(obj,oldPath,newPath,index){var oldKey=oldPath[index];var updated=Array.isArray(obj)?obj.slice():_assign({},obj);if(index+1===oldPath.length){var newKey=newPath[index];// $FlowFixMe number or string is fine here
  updated[newKey]=updated[oldKey];if(Array.isArray(updated)){updated.splice(oldKey,1);}else {delete updated[oldKey];}}else {// $FlowFixMe number or string is fine here
  updated[oldKey]=copyWithRenameImpl(// $FlowFixMe number or string is fine here
  obj[oldKey],oldPath,newPath,index+1);}return updated;};var copyWithRename=function copyWithRename(obj,oldPath,newPath){if(oldPath.length!==newPath.length){warn('copyWithRename() expects paths of the same length');return;}else {for(var i=0;i<newPath.length-1;i++){if(oldPath[i]!==newPath[i]){warn('copyWithRename() expects paths to be the same except for the deepest key');return;}}}return copyWithRenameImpl(obj,oldPath,newPath,0);};var copyWithSetImpl=function copyWithSetImpl(obj,path,index,value){if(index>=path.length){return value;}var key=path[index];var updated=Array.isArray(obj)?obj.slice():_assign({},obj);// $FlowFixMe number or string is fine here
  updated[key]=copyWithSetImpl(obj[key],path,index+1,value);return updated;};var copyWithSet=function copyWithSet(obj,path,value){return copyWithSetImpl(obj,path,0,value);};var findHook=function findHook(fiber,id){// For now, the "id" of stateful hooks is just the stateful hook index.
  // This may change in the future with e.g. nested hooks.
  var currentHook=fiber.memoizedState;while(currentHook!==null&&id>0){currentHook=currentHook.next;id--;}return currentHook;};// Support DevTools editable values for useState and useReducer.
  overrideHookState=function overrideHookState(fiber,id,path,value){var hook=findHook(fiber,id);if(hook!==null){var newState=copyWithSet(hook.memoizedState,path,value);hook.memoizedState=newState;hook.baseState=newState;// We aren't actually adding an update to the queue,
  // because there is no update we can add for useReducer hooks that won't trigger an error.
  // (There's no appropriate action type for DevTools overrides.)
  // As a result though, React will see the scheduled update as a noop and bailout.
  // Shallow cloning props works as a workaround for now to bypass the bailout check.
  fiber.memoizedProps=_assign({},fiber.memoizedProps);scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);}};overrideHookStateDeletePath=function overrideHookStateDeletePath(fiber,id,path){var hook=findHook(fiber,id);if(hook!==null){var newState=copyWithDelete(hook.memoizedState,path);hook.memoizedState=newState;hook.baseState=newState;// We aren't actually adding an update to the queue,
  // because there is no update we can add for useReducer hooks that won't trigger an error.
  // (There's no appropriate action type for DevTools overrides.)
  // As a result though, React will see the scheduled update as a noop and bailout.
  // Shallow cloning props works as a workaround for now to bypass the bailout check.
  fiber.memoizedProps=_assign({},fiber.memoizedProps);scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);}};overrideHookStateRenamePath=function overrideHookStateRenamePath(fiber,id,oldPath,newPath){var hook=findHook(fiber,id);if(hook!==null){var newState=copyWithRename(hook.memoizedState,oldPath,newPath);hook.memoizedState=newState;hook.baseState=newState;// We aren't actually adding an update to the queue,
  // because there is no update we can add for useReducer hooks that won't trigger an error.
  // (There's no appropriate action type for DevTools overrides.)
  // As a result though, React will see the scheduled update as a noop and bailout.
  // Shallow cloning props works as a workaround for now to bypass the bailout check.
  fiber.memoizedProps=_assign({},fiber.memoizedProps);scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);}};// Support DevTools props for function components, forwardRef, memo, host components, etc.
  overrideProps=function overrideProps(fiber,path,value){fiber.pendingProps=copyWithSet(fiber.memoizedProps,path,value);if(fiber.alternate){fiber.alternate.pendingProps=fiber.pendingProps;}scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);};overridePropsDeletePath=function overridePropsDeletePath(fiber,path){fiber.pendingProps=copyWithDelete(fiber.memoizedProps,path);if(fiber.alternate){fiber.alternate.pendingProps=fiber.pendingProps;}scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);};overridePropsRenamePath=function overridePropsRenamePath(fiber,oldPath,newPath){fiber.pendingProps=copyWithRename(fiber.memoizedProps,oldPath,newPath);if(fiber.alternate){fiber.alternate.pendingProps=fiber.pendingProps;}scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);};scheduleUpdate=function scheduleUpdate(fiber){scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);};setSuspenseHandler=function setSuspenseHandler(newShouldSuspendImpl){shouldSuspendImpl=newShouldSuspendImpl;};}function findHostInstanceByFiber(fiber){var hostFiber=findCurrentHostFiber(fiber);if(hostFiber===null){return null;}return hostFiber.stateNode;}function emptyFindFiberByHostInstance(instance){return null;}function getCurrentFiberForDevTools(){return current;}function injectIntoDevTools(devToolsConfig){var findFiberByHostInstance=devToolsConfig.findFiberByHostInstance;var ReactCurrentDispatcher=ReactSharedInternals.ReactCurrentDispatcher;return injectInternals({bundleType:devToolsConfig.bundleType,version:devToolsConfig.version,rendererPackageName:devToolsConfig.rendererPackageName,rendererConfig:devToolsConfig.rendererConfig,overrideHookState:overrideHookState,overrideHookStateDeletePath:overrideHookStateDeletePath,overrideHookStateRenamePath:overrideHookStateRenamePath,overrideProps:overrideProps,overridePropsDeletePath:overridePropsDeletePath,overridePropsRenamePath:overridePropsRenamePath,setSuspenseHandler:setSuspenseHandler,scheduleUpdate:scheduleUpdate,currentDispatcherRef:ReactCurrentDispatcher,findHostInstanceByFiber:findHostInstanceByFiber,findFiberByHostInstance:findFiberByHostInstance||emptyFindFiberByHostInstance,// React Refresh
  findHostInstancesForRefresh:findHostInstancesForRefresh,scheduleRefresh:scheduleRefresh,scheduleRoot:scheduleRoot,setRefreshHandler:setRefreshHandler,// Enables DevTools to append owner stacks to error messages in DEV mode.
  getCurrentFiber:getCurrentFiberForDevTools});}exports.IsThisRendererActing=IsThisRendererActing;exports.act=act;exports.attemptContinuousHydration=attemptContinuousHydration;exports.attemptHydrationAtCurrentPriority=attemptHydrationAtCurrentPriority;exports.attemptSynchronousHydration=attemptSynchronousHydration;exports.attemptUserBlockingHydration=attemptUserBlockingHydration;exports.batchedEventUpdates=batchedEventUpdates;exports.batchedUpdates=batchedUpdates;exports.createComponentSelector=createComponentSelector;exports.createContainer=createContainer;exports.createHasPsuedoClassSelector=createHasPsuedoClassSelector;exports.createPortal=createPortal;exports.createRoleSelector=createRoleSelector;exports.createTestNameSelector=createTestNameSelector;exports.createTextSelector=createTextSelector;exports.deferredUpdates=deferredUpdates;exports.discreteUpdates=discreteUpdates;exports.findAllNodes=findAllNodes;exports.findBoundingRects=findBoundingRects;exports.findHostInstance=findHostInstance;exports.findHostInstanceWithNoPortals=findHostInstanceWithNoPortals;exports.findHostInstanceWithWarning=findHostInstanceWithWarning;exports.flushControlled=flushControlled;exports.flushDiscreteUpdates=flushDiscreteUpdates;exports.flushPassiveEffects=flushPassiveEffects;exports.flushSync=flushSync;exports.focusWithin=focusWithin;exports.getCurrentUpdateLanePriority=getCurrentUpdateLanePriority;exports.getFindAllNodesFailureDescription=getFindAllNodesFailureDescription;exports.getPublicRootInstance=getPublicRootInstance;exports.injectIntoDevTools=injectIntoDevTools;exports.observeVisibleRects=observeVisibleRects;exports.registerMutableSourceForHydration=registerMutableSourceForHydration;exports.runWithPriority=runWithPriority$1;exports.shouldSuspend=shouldSuspend;exports.unbatchedUpdates=unbatchedUpdates;exports.updateContainer=updateContainer;return exports;};}

  var reactReconciler_development = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var reactReconciler = createCommonjsModule(function (module) {

  if (process.env.NODE_ENV === 'production') {
    module.exports = reactReconciler_production_min;
  } else {
    module.exports = reactReconciler_development;
  }
  });

  // pixi methods
  var METHODS = {
    Graphics: {
      drawRect: function drawRect(props) {
        return function (graphics) {
          return graphics.drawRect(props.x, props.y, props.width, props.height);
        };
      },
      drawRoundedRect: function drawRoundedRect(props) {
        return function (graphics) {
          return graphics.drawRect(props.x, props.y, props.width, props.height, props.radius);
        };
      },
      lineStyle: function lineStyle(props) {
        return function (graphics) {
          return graphics.lineStyle(props.lineWidth, props.color, props.alpha, props.alignemt);
        };
      },
      beginFill: function beginFill(props) {
        return function (graphics) {
          return graphics.beginFill(props.color);
        };
      },
      clear: function clear(props) {
        return function (graphics) {
          graphics.clear();
        };
      },
      drawCircle: function drawCircle(props) {
        return function (graphics) {
          return graphics.drawCircle(props.x, props.y, props.radius);
        };
      },
      drawPolygon: function drawPolygon(props) {
        return function (graphics) {
          return graphics.drawPolygon(props.path);
        };
      },
      endFill: function endFill(props) {
        return function (graphics) {
          return graphics.endFill();
        };
      }
    }
  };

  var DISPLAY_OBJECT_PROPS = {
    // alpha: 1,
    cursor: 'pointer',
    // if included, props.children would be used! children:null,
    filterArea: null,
    filters: null,
    shader: null,
    // pivot: new PIXI.Point(0, 0),
    anchor: .0,
    renderable: true,
    rotation: 0,
    scale: new PIXI$1.Point(1, 1),
    visible: true,
    width: null,
    height: null,
    // special props see below ! width:0, height:0,
    interactive: false,
    buttonMode: false,
    hitArea: null,
    // blendMode: null,
    x: 0,
    y: 0,
    alpha: undefined,
    blendMode: undefined,
    accessibleTitle: 'null',
    accessible: 'null',
    button: false,
    pluginName: undefined,
    scaleX: 1,
    scaleY: 1
  };

  var parseColor = function parseColor(color) {
    var colorObj = rgbToHex(color);
    return colorObj;
  };

  a;

  function rgbToHex(strColor) {
    if (strColor.substr(0, 1) === '#' || strColor.substr(0, 1) === '0x') {
      var _hex = strColor.includes('#') ? strColor.replace('#', '0x') : strColor;

      return {
        hex: _hex,
        alpha: 1
      };
    }

    var rgbReg = /^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i;
    var rgbaReg = /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))?/i;
    var res = strColor.match(strColor.indexOf('rgba') !== -1 ? rgbaReg : rgbReg); //strColor.match();

    if (res === null) { return {
      hex: 0xffffff,
      alpha: 0
    }; }
    var R = res[1];
    var G = res[2];
    var B = res[3];
    var A = res[4];
    var hex = '0x' + (B | G << 8 | R << 16 | 1 << 24).toString(16).slice(1);
    var alpha = parseFloat(A) || 1;
    return {
      hex: hex,
      alpha: alpha
    };
  } // function applyCssProperty(property,value,SETTER){
  //     if(value && this[`__${property}`] !== value ){
  //         //console.log('applyCssProperty',property,value)
  //         this[SETTER || property] = value;
  //         this[`__${property}`] = value;
  //     }
  // }


  function applyCssProperty(property, value, SETTER) {
    if (value && this["__".concat(property)] !== value) {
      //console.log('applyCssProperty',property,value)
      this[SETTER || property] = value;
      this["__".concat(property)] = value;
    }
  }

  var cssTransfromProperty = {
    scale: function scale(value, target) {
      /**f
       * pixi calculates the scale relative to y
       */
      var sx = target._texture.orig.width > 1 ? target._width / target._texture.orig.width : 1;
      var sy = 1; //target._texture.orig.height > 1 ? target._height / target._texture.orig.height: 1;

      target.scale = {
        x: value * sx,
        y: value * sy
      };
    },
    scaleX: function scaleX(value, target) {
      /**
      * pixi calculates the scale relative to y
      */
      var sx = target._texture.orig.width > 1 ? target._width / target._texture.orig.width : 1;
      var sy = target._texture.orig.height > 1 ? target._height / target._texture.orig.height : 1;
      target.scale = {
        x: value * sx,
        y: target.scale.y * sy
      };
    },
    scaleY: function scaleY(value, target) {
      /**
      * pixi calculates the scale relative to y
      */
      var sx = target._texture.orig.width > 1 ? target._width / target._texture.orig.width : 1;
      var sy = 1; //target._texture.orig.height  > 1 ? target._height / target._texture.orig.height: 1;

      target.scale = {
        x: target.scale.x * sx,
        y: value * sy
      };
    }
  };

  function applyCssTransformProperty(transform) {
    var _this = this;

    transform.forEach(function (tr) {
      var propName = Object.keys(tr)[0];
      var value = tr[propName];
      cssTransfromProperty[propName] && cssTransfromProperty[propName](value, _this);
    });
  } // custom plugins 


  function clip(x, y, w, h, maks) {
    var _self = this; //_self.cacheAsBitmap = false;


    if (_self.mask) {
      _self.removeChild(_self.mask);

      _self.mask = null;
    }

    var myMask = new PIXI$1.Graphics();
    myMask.beginFill();
    myMask.drawRect(x, y, w, h);
    myMask.endFill();

    _self.addChild(myMask);

    _self.mask = myMask; //_self.cacheAsBitmap = true;
    // _self.filterArea = new PIXI.Rectangle(
    //     0,//this.transform.worldTransform.tx,
    //     0,//this.transform.worldTransform.ty,
    //     w,
    //     h
    //     )
  }

  function drawBoundingbox(w, h) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#000000';
    var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    if (this.boundingbox) {
      this.removeChild(this.boundingbox);
    }

    var _parseColor = parseColor(color),
        hex = _parseColor.hex,
        alpha = _parseColor.alpha;

    var boundingbox = new PIXI$1.Graphics();
    boundingbox.lineStyle(width, hex, alpha);
    boundingbox.drawRect(0, 0, w, h);
    boundingbox.endFill();
    this.boundingbox = boundingbox;
    this.addChild(boundingbox);
  } //TODO:: needs to be optimised


  function drawBackground(w, h) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#000000';
    var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (this.background) {
      this.removeChild(this.background);
    }

    var background = new PIXI$1.Graphics();

    var _parseColor2 = parseColor(color),
        hex = _parseColor2.hex,
        alpha = _parseColor2.alpha;

    background.beginFill(hex, alpha);
    width && background.lineStyle(width, hex, alpha);
    background.drawRect(0, 0, w, h);
    background.endFill();
    this.background = background;
    this.addChildAt(background, 0);
  }
  /**
   * object.padding(number, string)
   * Transform the string object to string of the actual width filling by the padding character (by default ' ')
   * Negative value of width means left padding, and positive value means right one
   *
   * @param       number  Width of string
   * @param       string  Padding chacracter (by default, ' ')
   * @return      string
   * @access      public
   */


  String.prototype.padding = function (n, c) {
    var val = this.valueOf();

    if (Math.abs(n) <= val.length) {
      return val;
    }

    var m = Math.max(Math.abs(n) - this.length || 0, 0);
    var pad = Array(m + 1).join(String(c || ' ').charAt(0)); //      var pad = String(c || ' ').charAt(0).repeat(Math.abs(n) - this.length);

    return n < 0 ? pad + val : val + pad; //      return (n < 0) ? val + pad : pad + val;
  };

  var cleanupStyle = function cleanupStyle(style) {
    return Object.keys(style).reduce(function (obj, key) {
      if (style[key] !== 'none') { obj[key] = style[key]; }
      return obj;
    }, {});
  };

  var getStyle = function getStyle(style) {
    return css__default['default'](Object.keys(style).map(function (key) {
      return [key, String(style[key])];
    }));
  };

  var Div = /*#__PURE__*/function (_PIXI$Sprite) {
    _inherits(Div, _PIXI$Sprite);

    var _super = _createSuper(Div);

    function Div(props) {
      var _this2;

      _classCallCheck(this, Div);

      _this2 = _super.call(this);

      _defineProperty(_assertThisInitialized(_this2), "clip", clip);

      _defineProperty(_assertThisInitialized(_this2), "drawBoundingbox", drawBoundingbox);

      _defineProperty(_assertThisInitialized(_this2), "drawBackground", drawBackground);

      _defineProperty(_assertThisInitialized(_this2), "applyCssProperty", applyCssProperty);

      _defineProperty(_assertThisInitialized(_this2), "applyCssTransformProperty", applyCssTransformProperty);

      _defineProperty(_assertThisInitialized(_this2), "_scaleX", 1);

      _defineProperty(_assertThisInitialized(_this2), "_scaleY", 1);

      _this2 = _super.call(this, props.texture);

      _defineProperty(_assertThisInitialized(_this2), "clip", clip);

      _defineProperty(_assertThisInitialized(_this2), "drawBoundingbox", drawBoundingbox);

      _defineProperty(_assertThisInitialized(_this2), "drawBackground", drawBackground);

      _defineProperty(_assertThisInitialized(_this2), "applyCssProperty", applyCssProperty);

      _defineProperty(_assertThisInitialized(_this2), "applyCssTransformProperty", applyCssTransformProperty);

      _defineProperty(_assertThisInitialized(_this2), "_scaleX", 1);

      _defineProperty(_assertThisInitialized(_this2), "_scaleY", 1);

      _this2._UID = "div_".concat(new Date().getTime());
      var style = Object.assign(JSON.parse(JSON.stringify(Div.defaultProps.style)), props.style);
      _this2._style = getStyle(cleanupStyle(style));
      return _this2;
    } //plugins


    _createClass(Div, [{
      key: "applyStyle",
      value: function applyStyle(style) {
        if (!style) { return; }
        this.getBounds();
        var bounds = this._bounds;
        var width = this.width || style.width || bounds.maxX - bounds.minX;
        var height = this.height || style.height || bounds.maxY - bounds.minY;
        var _this$texture = this.texture,
            textureWidth = _this$texture.width,
            textureHeight = _this$texture.height;
        this.width === 0 && (this.width = width);
        this.height === 0 && (this.height = height);

        if (style.transform) {
          this.applyCssTransformProperty(style.transform);
        } //clippig


        this._clip = false;

        if (style.overflow === 'hidden' && width && height && (this.__width !== width || this.__height !== height)) {
          this.clip(0, 0, width || style.width, height || style.width);
          this._clip = true;
        } //borderColor 


        if ((style.borderColor || style.borderWidth) && (this.__width !== width || this.__height !== height || this.__textureWidth !== textureWidth || this.__textureHeight !== textureHeight)) {
          this.drawBoundingbox(width, height, style.borderColor, style.borderWidth, style.borderStyle);
        } //background


        if (style.backgroundColor && (this.__width !== width || this.__height !== height || this.__textureWidth !== textureWidth || this.__textureHeight !== textureHeight)) {
          this.drawBackground(this.texture.valid ? textureWidth : width, this.texture.valid ? textureHeight : height, style.backgroundColor, style.borderWidth, style.borderStyle);
        } // console.log('draw canvas div',this)


        this.applyCssProperty('left', style.left, 'x');
        this.applyCssProperty('top', style.top, 'y');
        this.applyCssProperty('opacity', style.opacity);
        this.applyCssProperty('zBuffer', style.zIndex); // applyCssProperty('transform',style.transform,(transform)=>{
        //         console.log('transform',transform)
        // });
        // if(newStyle.transform){
        //     newStyle.transform.forEach((obj)=>Object.assign(this,obj))
        // }

        if (this.parent) {
          this.applyCssProperty('right', style.right, this.parent._bounds.maxX - style.right, 'x');
          this.applyCssProperty('bottom', style.bottom, this.parent._bounds.maxY - style.bottom, 'y');
        }

        this.__width = width;
        this.__height = height;
        this.__textureWidth = this.texture.width || width;
        this.__textureHeight = this.texture.height || height; // this._style = style
      }
      /**
      * Updates the transform on all children of this container for rendering
      */

    }, {
      key: "updateTransform",
      value: function updateTransform() {
        //if(!checkfps(1)) return
        // if(!fpsController.checkfps(24,'updateTransform')) return 
        this._boundsID++;
        this.transform.updateTransform(this.parent.transform); // TODO: check render flags, how to process stuff here

        this.worldAlpha = this.alpha * this.parent.worldAlpha; // console.log(this._scaleX,this.scaleX)
        // this.scale.set(this._scaleX,this._scaleY)

        for (var i = 0, j = this.children.length; i < j; ++i) {
          var child = this.children[i];

          if (child.visible) {
            child.updateTransform();
          }
        }

        if (this._filters) {
          // this._filters.forEach(filter=>filter.worldTransform =this.transform.worldTransform)
          var bounds = this._bounds;
          var width = this.width || this.style.width || bounds.maxX - bounds.minX;
          var height = this.height || this.style.height || bounds.maxY - bounds.minY;
          /**
           * if check on cliip bug on scroll after setState from App.js scrollHeight !!!!!!
           */
          // if(this._clip){
          // console.log(this.transform.worldTransform.ty)

          this.filterArea = new PIXI$1.Rectangle(this.transform.worldTransform.tx, this.transform.worldTransform.ty, width, height); //    / }
        }
      }
    }, {
      key: "calculateBounds",
      value: function calculateBounds() {
        //if(!checkfps(2)) return this._bounds;
        //   if(!fpsController.checkfps(10,'calculateBounds')) return this._bounds
        var style = this._style;

        this._bounds.clear();

        this._calculateBounds();

        var width = this._width || style.width;
        var height = this._height || style.height;

        for (var i = 0; i < this.children.length; i++) {
          var child = this.children[i];

          if (!child.visible || !child.renderable) {
            continue;
          }

          child.calculateBounds(); // TODO: filter+mask, need to mask both somehow

          if (child._mask) {
            child._mask.calculateBounds();

            this._bounds.addBoundsMask(child._bounds, child._mask._bounds);
          } else if (child.filterArea) {
            this._bounds.addBoundsArea(child._bounds, child.filterArea);
          } else {
            this._bounds.addBounds(child._bounds);
          }
        }

        var bounds = new PIXI$1.Bounds(); // calclulate size        

        var maxX = Number.isInteger(width) ? this._bounds.minX + width : this._bounds.maxX;
        var maxY = Number.isInteger(height) ? this._bounds.minY + height : this._bounds.maxY;
        var paddingLeft = style.paddingLeft || 0;
        var paddingTop = style.paddingTop || 0;
        var paddingRight = style.paddingRight || 0;
        var paddingBottom = style.paddingBottom || 0;
        Object.assign(bounds, {
          minX: this._bounds.mixX - paddingLeft,
          maxX: maxX + paddingRight,
          minY: this._bounds.minY - paddingTop,
          maxY: maxY + paddingBottom
        });

        this._bounds.addBounds(bounds);

        this._lastBoundsID = this._boundsID;
        return this._bounds;
      }
    }, {
      key: "style",
      get: function get() {
        return this._style;
      },
      set: function set(style) {
        var newStyle = getStyle(cleanupStyle(style));
        shallowequal__default['default'](newStyle, this._style) === false && this.applyStyle(newStyle);
        this._style = newStyle;
      }
      /**
       * The width of the sprite, setting this will actually modify the scale to achieve the value set
       *
       * @member {number}
       */

    }, {
      key: "width",
      get: function get() {
        return this._texture.orig.width > 1 ? Math.abs(this.scale.x) * this._texture.orig.width : this._width;
      },
      set: function set(value) // eslint-disable-line require-jsdoc
      {
        var s = Math.sign(this.scale.x) || 1;
        if (this._texture.orig.width > 1) { this.scale.x = s * value / this._texture.orig.width; }
        this._width = value;
        this.applyStyle(this._style);
      }
      /**
       * The height of the sprite, setting this will actually modify the scale to achieve the value set
       *
       * @member {number}
       */

    }, {
      key: "height",
      get: function get() {
        return this._texture.orig.width > 1 ? Math.abs(this.scale.y) * this._texture.orig.height : this._height;
      },
      set: function set(value) // eslint-disable-line require-jsdoc
      {
        var s = Math.sign(this.scale.y) || 1;
        if (this._texture.orig.height > 1) { this.scale.y = s * value / this._texture.orig.height; }
        this._height = value;
        this.applyStyle(this._style);
      }
    }, {
      key: "opacity",
      get: function get() {
        return this._alpha || 1;
      },
      set: function set(opacity) {
        this._alpha = opacity;
      }
    }, {
      key: "alpha",
      get: function get() {
        return this._alpha || 1;
      },
      set: function set(alpha) {
        this._alpha = alpha;
      }
    }, {
      key: "translateX",
      get: function get() {
        return this._translateX || 0;
      },
      set: function set(translateX) {
        this._translateX = translateX;
        this.x = this.position.x + translateX;
      }
    }, {
      key: "translateY",
      get: function get() {
        return this._translateY || 0;
      },
      set: function set(translateY) {
        this._translateY = translateY;
        this.y = this.position.y + translateY;
      }
    }, {
      key: "x",
      get: function get() {
        return this.transform.position.x;
      },
      set: function set(x) {
        this.transform.position.x = x + this.translateX + (this._style.paddingLeft || 0);
      }
    }, {
      key: "y",
      get: function get() {
        return this.transform.position.y;
      },
      set: function set(y) {
        this.transform.position.y = y + this.translateY + (this._style.paddingTop || 0);
      }
    }, {
      key: "scaleX",
      get: function get() {
        return this._scaleX || 2;
      },
      set: function set(scaleX) {
        this._scaleX = scaleX;
        this.scale.set(scaleX, this._scaleY);
      }
    }, {
      key: "scaleY",
      get: function get() {
        return this._scaleY || 1;
      },
      set: function set(scaleY) {
        this._scaleY = scaleY;
        this.scale.set(this._scaleX, scaleY);
      }
    }]);

    return Div;
  }(PIXI$1.Sprite);
  Div.defaultProps = {
    style: {
      color: 'none',
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      height: 'initial',
      width: 'initial',
      overflow: 'none',
      overflowX: 'none',
      overflowY: 'none',
      transform: 'none',
      border: 'none',
      opacity: 'none',
      zIndex: 'none'
    },
    accessibleTitle: null,
    accessibleHint: null,
    accessible: null,
    interactive: null,
    button: null,
    cursor: null
  };
  PIXI$1.Div = Div;

  var AssetsLoader = /*#__PURE__*/function () {
    function AssetsLoader() {
      _classCallCheck(this, AssetsLoader);

      this.resources = {};
      this._isLoading = false;
      this.resouceQueu = window.resouceQueu || (window.resouceQueu = []);
      this.loadIndex = 0;
    }

    _createClass(AssetsLoader, [{
      key: "add",
      value: function add(url, name, cb) {
        var res = this.resources[name];

        if (res) {
          cb(_defineProperty({}, res.name, res));
          return;
        }

        try {
          this.loadResource(url, name, cb);
        } catch (error) {
          console.error(error);
        }
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this.loader.removeAllListeners();
      }
    }, {
      key: "loadResource",
      value: function loadResource(url, name, cb) {
        var _this = this;

        var loader = new PIXI$1.loaders.Loader();
        this.resouceQueu.push({
          url: url,
          name: name,
          cb: cb
        });
        loader.removeAllListeners();
        loader.add(name, url, function (res) {
          var obj = _this.resouceQueu.find(function (x) {
            return x.name === res.name;
          });

          _this.resources[res.name] = res;
          cb(_defineProperty({}, res.name, res));
        });
        loader.load();
      }
    }]);

    return AssetsLoader;
  }();

  var assetsLoader = new AssetsLoader();

  function transformBackgroundImage(image, width, height) {
    var texture = image.texture;
    var textureWidth = texture.width,
        textureHeight = texture.height; // Generic as can be:
    // Image data: (wi, hi) and define ri = wi / hi
    // Screen resolution: (ws, hs) and define rs = ws / hs
    // Scaled image dimensions:

    var wi = textureWidth;
    var hi = textureHeight;
    var ws = width;
    var hs = height;
    var ri = wi / hi;
    var rs = ws / hs; // texture needs downscale

    var _ref = rs < ri ? [wi * hs / hi, hs] : [ws, hi * ws / wi],
        _ref2 = _slicedToArray(_ref, 2),
        sx = _ref2[0],
        sy = _ref2[1];
    // center

    var wn = sx; //(ws/sx)*ws;

    var hn = sy; // const tx = ( -(ws - wn)/2)/ws;
    // const ty = ((ws-hn)/2)/ws;

    var tx = ws / 2 - wn / 2; //wn 

    var ty = (hs - hn) / 2; //ws;

    image.width = wn;
    image.height = hn;
    image.x = tx;
    image.y = ty; // image.pivot.x = tx;
    // image.pivot.y = ty;
  }

  function addBackgroundImage(src, backgroundSize, w, h) {
    var _this2 = this;

    if (this._src === src && this.backgroundImage) {
      transformBackgroundImage(this.backgroundImage, this.width, this.height);
      return;
    }

    var name = src; //this._UID

    console.log('load', name, src);
    this.backgroundImage && this.removeChild(this.backgroundImage);

    var handleAssetsLoaded = function handleAssetsLoaded(resources) {
      _this2.backgroundImage && _this2.removeChild(_this2.backgroundImage);
      var originalframe = resources[name].texture;
      var image;

      if (!_this2.props.enableMesh) {
        image = new PIXI$1.Sprite(originalframe);
      } else {
        var mesh = new PIXI$1.mesh.Plane(originalframe, 20, 20);
        image = mesh;
      }

      transformBackgroundImage(image, _this2.width, _this2.height); // image.interactive = this.interactive;
      // image.shader = this.shader;
      // image.filters =  this.filters;

      _this2.addChild(image);

      _this2.backgroundImage = image; // console.log('loaded',this,src,originalframe)
      // image.cashAsBitmap = true

      if (_this2.props.casheAsBitmap) { _this2.casheAsBitmap = true; }
      if (_this2.props.enableMesh && typeof _this2.props.onMesh === "function") { _this2.props.onMesh(image); }
    };

    var handleAssetsLoadedBinded = handleAssetsLoaded.bind(this);

    if (assetsLoader.resources[src]) {
      return handleAssetsLoaded(assetsLoader.resources);
    }

    return assetsLoader.add(src, src, handleAssetsLoadedBinded);
  }
  var FPS = 30;

  var FPSController = function FPSController() {
    var _this3 = this;

    _classCallCheck(this, FPSController);

    _defineProperty(this, "dates", {});

    _defineProperty(this, "checkfps", function () {
      var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FPS;
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!_this3.dates[id]) { _this3.dates[id] = Date.now(); }
      var allow = false;
      var interval = 1000 / fps;
      var then = _this3.dates[id];
      var now = Date.now();
      var delta = now - then;

      if (delta > interval && _this3.dates[id]) {
        _this3.dates[id] = now - delta % interval;
        allow = true;
      }

      return allow;
    });
  };

  var fpsController = new FPSController(); // utils

  var parseColor$1 = function parseColor(color) {
    var colorObj = rgbToHex$1(color);
    return colorObj;
  };

  function rgbToHex$1(strColor) {
    if (strColor.substr(0, 1) === '#' || strColor.substr(0, 1) === '0x') {
      var _hex = strColor.includes('#') ? strColor.replace('#', '0x') : strColor;

      return {
        hex: _hex,
        alpha: 1
      };
    }

    var rgbReg = /^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i;
    var rgbaReg = /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))?/i;
    var res = strColor.match(strColor.indexOf('rgba') !== -1 ? rgbaReg : rgbReg); //strColor.match();

    var R = res[1];
    var G = res[2];
    var B = res[3];
    var A = res[4];
    var hex = '0x' + (B | G << 8 | R << 16 | 1 << 24).toString(16).slice(1);
    var alpha = parseFloat(A) || 1;
    return {
      hex: hex,
      alpha: alpha
    };
  }

  function applyCssProperty$1(property, value, SETTER) {
    if (value && this["__".concat(property)] !== value) {
      //console.log('applyCssProperty',property,value)
      this[SETTER || property] = value;
      this["__".concat(property)] = value;
    }
  }

  var cssTransfromProperty$1 = {
    scale: function scale(value, target) {
      /**f
       * pixi calculates the scale relative to y
       */
      var sx = target._texture.orig.width > 1 ? target._width / target._texture.orig.width : 1;
      var sy = 1; //target._texture.orig.height > 1 ? target._height / target._texture.orig.height: 1;

      target.scale = {
        x: value * sx,
        y: value * sy
      };
    },
    scaleX: function scaleX(value, target) {
      /**
      * pixi calculates the scale relative to y
      */
      var sx = target._texture.orig.width > 1 ? target._width / target._texture.orig.width : 1;
      var sy = target._texture.orig.height > 1 ? target._height / target._texture.orig.height : 1;
      target.scale = {
        x: value * sx,
        y: target.scale.y * sy
      };
    },
    scaleY: function scaleY(value, target) {
      /**
      * pixi calculates the scale relative to y
      */
      var sx = target._texture.orig.width > 1 ? target._width / target._texture.orig.width : 1;
      var sy = 1; //target._texture.orig.height  > 1 ? target._height / target._texture.orig.height: 1;

      target.scale = {
        x: target.scale.x * sx,
        y: value * sy
      };
    }
  };

  function applyCssTransformProperty$1(transform) {
    var _this4 = this;

    transform.forEach(function (tr) {
      var propName = Object.keys(tr)[0];
      var value = tr[propName];
      cssTransfromProperty$1[propName] && cssTransfromProperty$1[propName](value, _this4);
    });
  } // custom plugins 


  function clip$1(x, y, w, h, maks) {
    var _self = this; //_self.cacheAsBitmap = false;


    if (_self.mask) {
      _self.removeChild(_self.mask);

      _self.mask = null;
    }

    var myMask = new PIXI$1.Graphics();
    myMask.beginFill();
    myMask.drawRect(x, y, w, h);
    myMask.endFill();

    _self.addChild(myMask);

    _self.mask = myMask; //_self.cacheAsBitmap = true;
    // _self.filterArea = new PIXI.Rectangle(
    //     0,//this.transform.worldTransform.tx,
    //     0,//this.transform.worldTransform.ty,
    //     w,
    //     h
    //     )
  }

  function drawBoundingbox$1(w, h) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#000000';
    var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    if (this.boundingbox) {
      this.removeChild(this.boundingbox);
    }

    var _parseColor = parseColor$1(color),
        hex = _parseColor.hex,
        alpha = _parseColor.alpha;

    var boundingbox = new PIXI$1.Graphics();
    boundingbox.lineStyle(width, hex, alpha);
    boundingbox.drawRect(0, 0, w, h);
    boundingbox.endFill();
    this.boundingbox = boundingbox;
    this.addChild(boundingbox);
  } //TODO:: needs to be optimised


  function drawBackground$1(w, h) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#000000';

    if (this.background) {
      this.removeChild(this.background);
    }

    var background = new PIXI$1.Graphics();

    var _parseColor2 = parseColor$1(color),
        hex = _parseColor2.hex,
        alpha = _parseColor2.alpha;

    background.beginFill(hex, alpha); // drawBackground.lineStyle(width,parseColor(color))

    background.drawRect(0, 0, w, h);
    background.endFill();
    this.background = background;
    this.addChildAt(background, 0);
  }
  /**
   * object.padding(number, string)
   * Transform the string object to string of the actual width filling by the padding character (by default ' ')
   * Negative value of width means left padding, and positive value means right one
   *
   * @param       number  Width of string
   * @param       string  Padding chacracter (by default, ' ')
   * @return      string
   * @access      public
   */


  String.prototype.padding = function (n, c) {
    var val = this.valueOf();

    if (Math.abs(n) <= val.length) {
      return val;
    }

    var m = Math.max(Math.abs(n) - this.length || 0, 0);
    var pad = Array(m + 1).join(String(c || ' ').charAt(0)); //      var pad = String(c || ' ').charAt(0).repeat(Math.abs(n) - this.length);

    return n < 0 ? pad + val : val + pad; //      return (n < 0) ? val + pad : pad + val;
  };

  var cleanupStyle$1 = function cleanupStyle(style) {
    return Object.keys(style).reduce(function (obj, key) {
      if (style[key] !== 'none') { obj[key] = style[key]; }
      return obj;
    }, {});
  };

  var getStyle$1 = function getStyle(style) {
    return css__default['default'](Object.keys(style).map(function (key) {
      return [key, String(style[key])];
    }));
  };

  var Img = /*#__PURE__*/function (_PIXI$Sprite) {
    _inherits(Img, _PIXI$Sprite);

    var _super = _createSuper(Img);

    function Img(props) {
      var _this5;

      _classCallCheck(this, Img);

      _this5 = _super.call(this, props.texture);

      _defineProperty(_assertThisInitialized(_this5), "clip", clip$1);

      _defineProperty(_assertThisInitialized(_this5), "drawBoundingbox", drawBoundingbox$1);

      _defineProperty(_assertThisInitialized(_this5), "drawBackground", drawBackground$1);

      _defineProperty(_assertThisInitialized(_this5), "applyCssProperty", applyCssProperty$1);

      _defineProperty(_assertThisInitialized(_this5), "applyCssTransformProperty", applyCssTransformProperty$1);

      _defineProperty(_assertThisInitialized(_this5), "addBackgroundImage", addBackgroundImage);

      _this5.props = props;
      _this5._UID = "div_".concat(new Date().getTime());
      var style = Object.assign(JSON.parse(JSON.stringify(Img.defaultProps.style)), props.style);
      _this5._style = getStyle$1(cleanupStyle$1(style));
      return _this5;
    } //plugins


    _createClass(Img, [{
      key: "applyStyle",
      value: function applyStyle(style) {
        if (!style) { return; }
        this.getBounds();
        var bounds = this._bounds;
        var width = this._width || style.width || bounds.maxX - bounds.minX;
        var height = this._height || style.height || bounds.maxY - bounds.minY;
        var _this$texture = this.texture,
            textureWidth = _this$texture.width,
            textureHeight = _this$texture.height;
        this.width === 0 && (this.width = width);
        this.height === 0 && (this.height = height);

        if (style.transform) {
          this.applyCssTransformProperty(style.transform);
        } //clippig
        // this._clip =  false    
        // if(
        //     style.overflow === 'hidden'  
        //     && width 
        //     && height
        //     && (this.__width !== width ||this.__height !== height)
        //     ){
        //         console.log('_clip_clip_clip',this.texture.valid ? textureWidth : width)
        //         // this.clip(0,0,width,height,this.props)   
        //         this.clip(0,0,this.texture.valid ? textureWidth : width ,this.texture.valid ? textureHeight : height ,style.backgroundColor,style.borderWidth,style.borderStyle)
        //         this._clip = true;        
        // }
        //borderColor 


        if ((style.borderColor || style.borderWidth) && (this.__width !== width || this.__height !== height || this.__textureWidth !== textureWidth || this.__textureHeight !== textureHeight)) {
          this.drawBoundingbox(textureWidth || width, textureHeight || height, style.borderColor, style.borderWidth, style.borderStyle);
        } //background


        if (style.backgroundColor && (this.__width !== width || this.__height !== height || this.__textureWidth !== textureWidth || this.__textureHeight !== textureHeight)) {
          this.drawBackground(this.texture.valid ? textureWidth : width, this.texture.valid ? textureHeight : height, style.backgroundColor, style.borderWidth, style.borderStyle);
        } //backgroudImage


        if (this.src && (this.__width !== width || this.__height !== height || this.__textureWidth !== textureWidth || this.__textureHeight !== textureHeight)) {
          this.addBackgroundImage(this.props.src, this.texture.valid ? textureWidth : width, this.texture.valid ? textureHeight : height, style.backgroundColor, style.borderWidth, style.borderStyle);
        }

        this.applyCssProperty('left', style.left, 'x');
        this.applyCssProperty('top', style.top, 'y');
        this.applyCssProperty('opacity', style.opacity);
        this.applyCssProperty('zBuffer', style.zIndex); // applyCssProperty('transform',style.transform,(transform)=>{
        //         console.log('transform',transform)
        // });
        // if(newStyle.transform){
        //     newStyle.transform.forEach((obj)=>Object.assign(this,obj))
        // }

        if (this.parent) {
          this.applyCssProperty('right', style.right, this.parent._bounds.maxX - style.right, 'x');
          this.applyCssProperty('bottom', style.bottom, this.parent._bounds.maxY - style.bottom, 'y');
        }

        this.__width = width;
        this.__height = height;
        this.__textureWidth = this.texture.width || width;
        this.__textureHeight = this.texture.height || height; // this._style = style
      }
      /**
      * Updates the transform on all children of this container for rendering
      */

    }, {
      key: "updateTransform",
      value: function updateTransform() {
        this._boundsID++;
        this.transform.updateTransform(this.parent.transform); // TODO: check render flags, how to process stuff here

        this.worldAlpha = this.alpha * this.parent.worldAlpha;

        for (var i = 0, j = this.children.length; i < j; ++i) {
          var child = this.children[i];

          if (child.visible) {
            child.updateTransform();
          }
        }

        if (this._filters) {
          // this._filters.forEach(filter=>filter.worldTransform =this.transform.worldTransform)
          var bounds = this._bounds;
          var width = this.width || this.style.width || bounds.maxX - bounds.minX;
          var height = this.height || this.style.height || bounds.maxY - bounds.minY;
          /**
           * if check on cliip bug on scroll after setState from App.js scrollHeight !!!!!!
           */
          // if(this._clip){
          // console.log(this.transform.worldTransform.ty)

          this.filterArea = new PIXI$1.Rectangle(this.transform.worldTransform.tx, this.transform.worldTransform.ty, width, height); //    / }
        }
      }
    }, {
      key: "calculateBounds",
      value: function calculateBounds() {
        //if(!checkfps(2)) return this._bounds;
        if (!fpsController.checkfps(10, 'calculateBounds')) { return this._bounds; }
        var style = this._style;

        this._bounds.clear();

        this._calculateBounds();

        var width = this._width || style.width;
        var height = this._height || style.height;

        for (var i = 0; i < this.children.length; i++) {
          var child = this.children[i];

          if (!child.visible || !child.renderable) {
            continue;
          }

          child.calculateBounds(); // TODO: filter+mask, need to mask both somehow

          if (child._mask) {
            child._mask.calculateBounds();

            this._bounds.addBoundsMask(child._bounds, child._mask._bounds);
          } else if (child.filterArea) {
            this._bounds.addBoundsArea(child._bounds, child.filterArea);
          } else {
            this._bounds.addBounds(child._bounds);
          }
        }

        var bounds = new PIXI$1.Bounds(); // calclulate size        

        var maxX = Number.isInteger(width) ? this._bounds.minX + width : this._bounds.maxX;
        var maxY = Number.isInteger(height) ? this._bounds.minY + height : this._bounds.maxY;
        var paddingLeft = style.paddingLeft || 0;
        var paddingTop = style.paddingTop || 0;
        var paddingRight = style.paddingRight || 0;
        var paddingBottom = style.paddingBottom || 0;
        Object.assign(bounds, {
          minX: this._bounds.mixX - paddingLeft,
          maxX: maxX + paddingRight,
          minY: this._bounds.minY - paddingTop,
          maxY: maxY + paddingBottom
        });

        this._bounds.addBounds(bounds);

        this._lastBoundsID = this._boundsID;
        return this._bounds;
      }
    }, {
      key: "style",
      get: function get() {
        return this._style;
      },
      set: function set(style) {
        var newStyle = getStyle$1(cleanupStyle$1(style));
        shallowequal__default['default'](newStyle, this._style) === false && this.applyStyle(newStyle);
        this._style = newStyle;
      }
      /**
       * The width of the sprite, setting this will actually modify the scale to achieve the value set
       *
       * @member {number}
       */

    }, {
      key: "width",
      get: function get() {
        return this._texture.orig.width > 1 ? Math.abs(this.scale.x) * this._texture.orig.width : this._width;
      },
      set: function set(value) // eslint-disable-line require-jsdoc
      {
        var s = Math.sign(this.scale.x) || 1;
        if (this._texture.orig.width > 1) { this.scale.x = s * value / this._texture.orig.width; }
        this._width = value;
        this.applyStyle(this._style);
      }
      /**
       * The height of the sprite, setting this will actually modify the scale to achieve the value set
       *
       * @member {number}
       */

    }, {
      key: "height",
      get: function get() {
        return this._texture.orig.width > 1 ? Math.abs(this.scale.y) * this._texture.orig.height : this._height;
      },
      set: function set(value) // eslint-disable-line require-jsdoc
      {
        var s = Math.sign(this.scale.y) || 1;
        if (this._texture.orig.height > 1) { this.scale.y = s * value / this._texture.orig.height; }
        this._height = value;
        this.applyStyle(this._style);
      }
    }, {
      key: "opacity",
      get: function get() {
        return this._alpha || 1;
      },
      set: function set(opacity) {
        this._alpha = opacity;
      }
    }, {
      key: "alpha",
      get: function get() {
        return this._alpha || 1;
      },
      set: function set(alpha) {
        this._alpha = alpha;
      }
    }, {
      key: "translateX",
      get: function get() {
        return this._translateX || 0;
      },
      set: function set(translateX) {
        this._translateX = translateX;
        this.x = this.position.x + translateX;
      }
    }, {
      key: "translateY",
      get: function get() {
        return this._translateY || 0;
      },
      set: function set(translateY) {
        this._translateY = translateY;
        this.y = this.position.y + translateY;
      }
    }, {
      key: "x",
      get: function get() {
        return this.transform.position.x;
      },
      set: function set(x) {
        this.transform.position.x = x + this.translateX + (this._style.paddingLeft || 0);
      }
    }, {
      key: "y",
      get: function get() {
        return this.transform.position.y;
      },
      set: function set(y) {
        this.transform.position.y = y + this.translateY + (this._style.paddingTop || 0);
      }
    }, {
      key: "src",
      set: function set(source) {
        if (this._src !== source) {
          this.addBackgroundImage(source);
        }

        this._src = source;
      },
      get: function get() {
        return this._src;
      }
    }, {
      key: "enableMesh",
      set: function set(enableMesh) {
        this._enableMesh = enableMesh;
      },
      get: function get() {
        return this._enableMesh;
      }
    }]);

    return Img;
  }(PIXI$1.Sprite);
  Img.defaultProps = {
    style: {
      color: 'none',
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      height: 'initial',
      width: 'initial',
      overflow: 'none',
      overflowX: 'none',
      overflowY: 'none',
      transform: 'none',
      border: 'none',
      opacity: 'none',
      zIndex: 'none'
    },
    src: null
  };
  PIXI$1.Img = Img;

  var COMPONENTS = {
    TEXT: function TEXT(props) {
      return new PIXI$1.Text(props.text || props, props.textStyleOptions, props.canvas);
    },
    // display
    displayobject: function displayobject(props) {
      return new PIXI$1.DisplayObject();
    },
    container: function container(props) {
      return new PIXI$1.Container();
    },
    // grapics
    graphics: function graphics(props) {
      return new PIXI$1.Graphics(props.nativeLines);
    },
    // sprite
    sprite: function sprite(props) {
      return new PIXI$1.Sprite(props.baseTexture);
    },
    'sprite-fromImage': function spriteFromImage(props) {
      var image = PIXI$1.Div.fromImage(props.url);
      image.x = props.x;
      image.y = props.y;
      return image;
    },
    baseRenderTexture: function baseRenderTexture(props) {
      return new PIXI$1.BaseRenderTexture(props.width, props.height);
    },
    // html mapping MAP HTML
    div: function div(props) {
      return new PIXI$1.Div(props);
    },
    img: function img(props) {
      return new PIXI$1.Img(props);
    },
    slider: function slider(props) {
      return new PIXI$1.Slider(props);
    },
    //text elements
    // textContent: (props) => new TextContent(props),
    // sdfTextContent: (props) => new SDFTextContent(props),
    h1: function h1(props) {
      console.log('propspropspropsprops', props);
      return new SDFTextContent(props);
    },
    illuminate: function illuminate(props) {
      console.log('propspropspropsprops', props);
      return new PIXI$1.Illuminate(props);
    },
    //slider: (props) => new PIXI.Sprite(props.baseTexture),
    // 'div-animated': (props) => new PIXI.DivAnimated(props),
    "default": function _default(props) {
      return new PIXI$1.Container();
    }
  };

  var HANDLERS = ['onClick', 'onMouseDown', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onMouseUpOutside', 'onTap', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchEndOutside', 'onAdded'];

  var TYPES = {
    Graphics: 'graphics',
    Sprite: 'sprite',
    Div: 'div',
    Img: 'img'
  };

  var map = new Map();
  var map2 = new Map();
  var canvasToStageMap = new Map();
  var mapRender = function mapRender(stage, renderer) {
    return map[stage] = renderer;
  };
  var getRender = function getRender(stage) {
    return map[stage];
  };
  var mapStage = function mapStage(stage, renderer) {
    return map2[renderer] = stage;
  };
  var mapCanvasToStage = function mapCanvasToStage(canvas, stage) {
    return canvasToStageMap[canvas] = stage;
  };

  // import {forceRender} from '../utils/renderAnimation'

  var getPixiClassName = function getPixiClassName(type) {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  var getDefaultProps = function getDefaultProps(node) {
    return PIXI__namespace[node.constructor.name] ? PIXI__namespace[node.constructor.name].defaultProps : {};
  };

  var applyMethodsToInstance = function applyMethodsToInstance(host, type, props) {
    var className = getPixiClassName(type); // recursive

    var findMethods = function findMethods(graphics, props) {
      React__default['default'].Children.map(props.children, function (child) {
        if (METHODS[className][child.type]) {
          METHODS[className][child.type](child.props)(host);
        } else {
          console.error("metode <".concat(child.type, "/> of class <").concat(className.toLowerCase(), "/> is not descripted in ../shared/methods"));
        }

        findMethods(graphics, child.props);
      });
    };

    findMethods(host, props);
  };
  var finalizeInitialChildren = function finalizeInitialChildren(node, type, props) {
    if (type === TYPES.Div) { node.applyStyle(); }
  };
  var createElement = function createElement(type, props, root) {
    // console.log('METHODS[type]',type,METHODS[type],METHODS)
    var component = null;

    if (COMPONENTS[type]) {
      component = COMPONENTS[type](props);
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
    return new PIXI$1.Text(text, style);
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
    var propsToTransfer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DISPLAY_OBJECT_PROPS;
    var allPropsTotransfer = Object.assign(propsToTransfer, getDefaultProps(node)); // if(newProps.anchor){
    //     console.log( node.anchor instanceof PIXI.ObservablePoint )
    //     debugger
    // }
    // console.log(newProps)

    for (var propname in allPropsTotransfer) {
      if (typeof newProps[propname] !== 'undefined') {
        if (node[propname] instanceof PIXI$1.ObservablePoint) {
          // console.log("setObservable",`node[${propname}].set(${newProps[propname]})`,node,newProps[propname])
          if (Array.isArray(newProps[propname])) {
            var _node$propname;

            (_node$propname = node[propname]).set.apply(_node$propname, _toConsumableArray(newProps[propname]));
          } else {
            var _node$propname2;

            (_node$propname2 = node[propname]).set.apply(_node$propname2, _toConsumableArray(Object.values(newProps[propname])));
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
    HANDLERS.forEach(function (pixieventtype) {
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
    return METHODS[getPixiClassName(type)];
  };

  var HostConfig = {
    appendInitialChild: function appendInitialChild(parent, child) {
      console.log('appendInitialChild::', parent, child);

      appendChild(parent, child);
    },
    appendChild: function appendChild$1(parent, child) {
      console.log('appendChild');

      appendChild(parent, child); // forceUpdate(parent.stage)

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
      var node = createElement(type, newProps, rootContainerInstance);

      if (node) {
        transferDisplayObjectPropsByName(node, newProps, null);
        updateZBuffer(node);
        transferEvents(node, newProps);
        renderNodes(node.stage);
      }

      return node;
    },
    commitUpdate: function commitUpdate(node, updatePayload, type, oldProps, nextProps, internalInstanceHandle) {
      if (type === 'graphics') {
        applyMethodsToInstance(node, type, nextProps);
      }

      transferDisplayObjectPropsByName(node, nextProps, oldProps);
      updateZBuffer(node);
      transferEvents(node, nextProps); // debugger

      renderNodes(node.stage);
    },
    commitTextUpdate: function commitTextUpdate(node, oldPayload, updatePayload) {
      node.text = updatePayload;
      renderNodes(node.stage);
    },
    appendChildToContainer: function appendChildToContainer(parent, node) {
      appendChild(parent, node);
    },
    createTextInstance: function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
      return createTextElement(text);
    },
    finalizeInitialChildren: function finalizeInitialChildren$1(node, type, props) {
      if (checkIfNodeHasMethods(type)) {
        //if (type === 'graphics') {
        applyMethodsToInstance(node, type, props);
      } else {
        finalizeInitialChildren(node, type);
      } // BUGY SHIT !!!!


      if (props.onLoaded) {
        var renderer = getRender(node.stage);
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
      var renderer = getRender(rootInstance);
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

  /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule setupDevtools
   * @flow
   */

  var register = function register() {// noop
  };

  {
    // const WebSocket = require('WebSocket');
    // const {PlatformConstants} = require('NativeModules');

    /* $FlowFixMe(>=0.54.0 site=react_native_oss) This comment suppresses an
     * error found when Flow v0.54 was deployed. To see the error delete this
     * comment and run Flow. */
    var reactDevTools = require('react-devtools-core');

    register = function register(plugin) {
      // Initialize dev tools only if the native module for WebSocket is available
      if (self.__DEVTOOLS__ && WebSocket.isAvailable) {
        // Don't steal the DevTools from currently active app.
        // Note: if you add any AppState subscriptions to this file,
        // you will also need to guard against `AppState.isAvailable`,
        // or the code will throw for bundles that don't have it.
        var isAppActive = function isAppActive() {
          return true;
        }; // Special case: Genymotion is running on a different host.


        var host = PlatformConstants && PlatformConstants.ServerHost ? PlatformConstants.ServerHost.split(':')[0] : 'localhost';
        plugin.connectToDevTools({
          isAppActive: isAppActive,
          host: host,
          // Read the optional global variable for backward compatibility.
          // It was added in https://github.com/facebook/react-native/commit/bf2b435322e89d0aeee8792b1c6e04656c2719a0.
          port: window.__REACT_DEVTOOLS_PORT__ //resolveRNStyle: require('flattenStyle'),

        });
      }
    };

    register(reactDevTools);

    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.on('react-devtools', function (agent) {
      agent.addListener('showNativeHighlight', function (_ref) {
        var node = _ref.node;
      });
      agent.addListener('hideNativeHighlight', function () {
      });
    });

    global.registerDevtoolsPlugin = register;
  }

  module.exports = {
    register: register
  };

  // import pkg from "../../../../package.json";
  var ReactPIXIRender = reactReconciler(HostConfig); // ReactPIXIRender.injectIntoDevTools({
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

  var render = function render(reactElement, node, callback) {
    if (!node.container) {
      // console.log('createContainer')
      node.container = ReactPIXIRender.createContainer(node, false);
    } //
    // console.log('ReactPIXIRender',reactElement,node,ReactPIXIRender.updateContainer)


    return ReactPIXIRender.updateContainer(reactElement, node.container, null, callback);
  };

  var createElement$1 = function createElement(type, props, root) {
    HostConfig.createInstance(type, props, root);
  };

  var createPortal = function createPortal(reactElement, node, callback) {
    // const newRenderLayer = new  PIXI.Sprite()
    // node.addChild(newRenderLayer)
    // newRenderLayer.container = ReactPIXIRender.createContainer(newRenderLayer,false);
    // ReactPIXIRender.updateContainer(reactElement, newRenderLayer.container, null, callback);
    // return newRenderLayer

    /**
     * LARED
     */
    var newRenderLayer = new PIXI$1.Sprite();
    node.addChild(newRenderLayer);
    /**
     * DIRECT ON STAGE
     */

    if (!newRenderLayer.container) {
      // console.log('createContainer')
      newRenderLayer.container = ReactPIXIRender.createContainer(newRenderLayer, false);
    } // console.log('ReactPIXIRender',reactElement,node,ReactPIXIRender.updateContainer)


    ReactPIXIRender.updateContainer(reactElement, newRenderLayer.container, null, callback);
    return newRenderLayer; // node.container = ReactPIXIRender.createContainer(node,false);
    // ReactPIXIRender.updateContainer(reactElement,node.container, null, callback);
    // return node;
  };

  var updatePortal = function updatePortal(reactElement, node, callback) {
    // console.log('updatePortal::',reactElement,reactElement.type,node.container) 
    ReactPIXIRender.updateContainer(reactElement, node.container, null, callback); // return node;
  };

  var RendererPublicAPI = {
    render: render,
    createElement: createElement$1,
    updatePortal: updatePortal,
    createPortal: createPortal
  };

  var performanceNow = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.2
  (function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

    if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
      module.exports = function() {
        return performance.now();
      };
    } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
      module.exports = function() {
        return (getNanoSeconds() - nodeLoadTime) / 1e6;
      };
      hrtime = process.hrtime;
      getNanoSeconds = function() {
        var hr;
        hr = hrtime();
        return hr[0] * 1e9 + hr[1];
      };
      moduleLoadTime = getNanoSeconds();
      upTime = process.uptime() * 1e9;
      nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
      module.exports = function() {
        return Date.now() - loadTime;
      };
      loadTime = Date.now();
    } else {
      module.exports = function() {
        return new Date().getTime() - loadTime;
      };
      loadTime = new Date().getTime();
    }

  }).call(commonjsGlobal);


  });

  var accessibleTarget = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  /**
   * Default property values of accessible objects
   * used by {@link PIXI.accessibility.AccessibilityManager}.
   *
   * @function accessibleTarget
   * @memberof PIXI.accessibility
   * @example
   *      function MyObject() {}
   *
   *      Object.assign(
   *          MyObject.prototype,
   *          PIXI.accessibility.accessibleTarget
   *      );
   */

  exports["default"] = {
    /**
     *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
     *   shadow div with attributes set
     *
     * @member {boolean}
     */
    accessible: false,

    /**
     * Sets the title attribute of the shadow div
     * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
     *
     * @member {string}
     */
    accessibleTitle: null,

    /**
     * Sets the aria-label attribute of the shadow div
     *
     * @member {string}
     */
    accessibleHint: null,

    /**
     * @todo Needs docs.
     */
    tabIndex: 0,

    /**
     * @todo Needs docs.
     */
    _accessibleActive: false,

    /**
     * @todo Needs docs.
     */
    _accessibleDiv: false
  };
  });

  var accessibleTarget$1 = unwrapExports(accessibleTarget);

  var FPS$1 = 60;

  var FPSController$1 = /*#__PURE__*/function () {
    function FPSController() {
      _classCallCheck(this, FPSController);

      this.lock = this.checkfps;
      this.check = this.checkfps;
      this.dates = {};
    }

    _createClass(FPSController, [{
      key: "checkfps",
      value: function checkfps() {
        var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FPS$1;
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (!this.dates[id]) { this.dates[id] = Date.now(); }
        var allow = false;
        var interval = 1000 / fps;
        var then = this.dates[id];
        var now = Date.now();
        var delta = now - then;

        if (delta > interval && this.dates[id]) {
          this.dates[id] = now - delta % interval;
          allow = true;
        }

        return allow;
      }
    }]);

    return FPSController;
  }();

  var fpsController$1 = new FPSController$1(); // add some extra variables to the container..

  core$2.utils.mixins.delayMixin(core$2.DisplayObject.prototype, accessibleTarget$1);
  var KEY_CODE_TAB = 9;
  var DIV_TOUCH_SIZE = 100;
  var DIV_TOUCH_POS_X = 0;
  var DIV_TOUCH_POS_Y = 0;
  var DIV_TOUCH_ZINDEX = 2;
  var DIV_HOOK_SIZE = 1;
  var DIV_HOOK_POS_X = -1000;
  var DIV_HOOK_POS_Y = -1000;
  var DIV_HOOK_ZINDEX = 2;
  /**
   * The Accessibility manager recreates the ability to tab and have content read by screen
   * readers. This is very important as it can possibly help people with disabilities access pixi
   * content.
   *
   * Much like interaction any DisplayObject can be made accessible. This manager will map the
   * events as if the mouse was being used, minimizing the effort required to implement.
   *
   * An instance of this class is automatically created by default, and can be found at renderer.plugins.accessibility
   *
   * @class
   * @memberof PIXI.accessibility
   */

  var AccessibilityManager = /*#__PURE__*/function () {
    /**
     * @param {PIXI.CanvasRenderer|PIXI.WebGLRenderer} renderer - A reference to the current renderer
     */
    function AccessibilityManager(renderer) {
      _classCallCheck(this, AccessibilityManager);

      // if ((Device.tablet || Device.phone) && !navigator.isCocoonJS)
      // {
      // this.createTouchHook();
      // }
      // first we create a div that will sit over the PixiJS element. This is where the div overlays will go.
      var div = document.createElement('div');
      div.style.width = "".concat(DIV_TOUCH_SIZE, "px");
      div.style.height = "".concat(DIV_TOUCH_SIZE, "px");
      div.style.position = 'absolute';
      div.style.top = "".concat(DIV_TOUCH_POS_X, "px");
      div.style.left = "".concat(DIV_TOUCH_POS_Y, "px");
      div.style.zIndex = DIV_TOUCH_ZINDEX;
      div.setAttribute('data-htmlrenderer-target-name', renderer.view.getAttribute('data-name'));
      /**
       * This is the dom element that will sit over the PixiJS element. This is where the div overlays will go.
       *
       * @type {HTMLElement}
       * @private
       */

      this.div = div;
      /**
       * A simple pool for storing divs.
       *
       * @type {*}
       * @private
       */

      this.pool = [];
      /**
       * This is a tick used to check if an object is no longer being rendered.
       *
       * @type {Number}
       * @private
       */

      this.renderId = 0;
      /**
       * Setting this to true will visually show the divs.
       *
       * @type {boolean}
       */

      this.debug = false;
      /**
       * The renderer this accessibility manager works for.
       *
       * @member {PIXI.SystemRenderer}
       */

      this.renderer = renderer;
      /**
       * The array of currently active accessible items.
       *
       * @member {Array<*>}
       * @private
       */

      this.children = [];
      /**
       * pre-bind the functions
       *
       * @private
       */

      this._onKeyDown = this._onKeyDown.bind(this); //this._onMouseMove = this._onMouseMove.bind(this);

      /**
       * stores the state of the manager. If there are no accessible objects or the mouse is moving, this will be false.
       *
       * @member {Array<*>}
       * @private
       */

      this.isActive = false;
      this.isMobileAccessabillity = false; //setTimeout(()=>this.activate(),1000);
      // let listen for tab.. once pressed we can fire up and show the accessibility layer

      window.addEventListener('keydown', this._onKeyDown, false);
    }
    /**
     * Creates the touch hooks.
     *
     */


    _createClass(AccessibilityManager, [{
      key: "createTouchHook",
      value: function createTouchHook() {
        var _this = this;

        var hookDiv = document.createElement('button');
        hookDiv.style.width = "".concat(DIV_HOOK_SIZE, "px");
        hookDiv.style.height = "".concat(DIV_HOOK_SIZE, "px");
        hookDiv.style.position = 'absolute';
        hookDiv.style.top = "".concat(DIV_HOOK_POS_X, "px");
        hookDiv.style.left = "".concat(DIV_HOOK_POS_Y, "px");
        hookDiv.style.zIndex = DIV_HOOK_ZINDEX;
        hookDiv.style.backgroundColor = '#FF0000';
        hookDiv.title = 'HOOK DIV';
        hookDiv.addEventListener('focus', function () {
          _this.isMobileAccessabillity = true;

          _this.activate();

          document.body.removeChild(hookDiv);
        });
        document.body.appendChild(hookDiv);
      }
      /**
       * Activating will cause the Accessibility layer to be shown. This is called when a user
       * preses the tab key.
       *
       * @private
       */

    }, {
      key: "activate",
      value: function activate() {
        if (this.isActive) {
          return;
        }

        this.isActive = true; //window.document.addEventListener('mousemove', this._onMouseMove, true);

        window.removeEventListener('keydown', this._onKeyDown, false);
        this.renderer.on('postrender', this.update, this);

        if (this.renderer.view.parentNode && !this.__added) {
          this.__added = true; // this.renderer.view.parentNode.appendChild(this.div);

          var oldDiv = document.querySelectorAll("[data-htmlrenderer-target-name='".concat(this.renderer.view.getAttribute('data-name'), "']"))[0]; //document.querySelectorAll( 'data-htmlrenderer-target-name',this.renderer.view.getAttribute('data-name'))[0]

          if (oldDiv) { oldDiv.parentElement.removeChild(oldDiv); }
          this.div = document.body.appendChild(this.div);
          this.div.style.position = 'fixed';
        }
      }
      /**
       * Deactivating will cause the Accessibility layer to be hidden. This is called when a user moves
       * the mouse.
       *
       * @private
       */

    }, {
      key: "deactivate",
      value: function deactivate() {
        if (!this.isActive || this.isMobileAccessabillity) {
          return;
        }

        this.isActive = false; //window.document.removeEventListener('mousemove', this._onMouseMove, true);

        window.addEventListener('keydown', this._onKeyDown, false);
        this.renderer.off('postrender', this.update);

        if (this.div.parentNode) {
          this.div.parentNode.removeChild(this.div);
        }
      }
      /**
       * This recursive function will run through the scene graph and add any new accessible objects to the DOM layer.
       *
       * @private
       * @param {PIXI.Container} displayObject - The DisplayObject to check.
       */

    }, {
      key: "updateAccessibleObjects",
      value: function updateAccessibleObjects(displayObject) {
        if (!displayObject.visible) {
          return;
        }

        if (displayObject.accessible && displayObject.interactive) {
          if (!displayObject._accessibleActive) {
            this.addChild(displayObject);
          }

          displayObject.renderId = this.renderId;
        }

        var children = displayObject.children;

        for (var i = 0; i < children.length; i++) {
          this.updateAccessibleObjects(children[i]);
        }
      }
      /**
       * Before each render this function will ensure that all divs are mapped correctly to their DisplayObjects.
       *
       * @private
       */

    }, {
      key: "update",
      value: function update() {
        if (!this.renderer.renderingToScreen) {
          return;
        }

        if (!fpsController$1.checkfps(12)) { return; } //  console.log('update:HTMLRENDER')
        // update children...

        this.updateAccessibleObjects(this.renderer._lastObjectRendered);
        var rect = this.renderer.view.getBoundingClientRect();
        var sx = rect.width / this.renderer.width;
        var sy = rect.height / this.renderer.height;
        var div = this.div;
        div.style.left = "".concat(rect.left, "px");
        div.style.top = "".concat(rect.top, "px"); // div.style.width = `${this.renderer.width}px`;
        // div.style.height = `${this.renderer.height}px`;
        //div.style.border = `2px solid green`;
        // div.style.background = 'red';

        for (var i = 0; i < this.children.length; i++) {
          var child = this.children[i];

          if (child.renderId !== this.renderId) {
            child._accessibleActive = false;
            core$2.utils.removeItems(this.children, i, 1);
            this.div.removeChild(child._accessibleDiv);
            this.pool.push(child._accessibleDiv);
            child._accessibleDiv = null;
            i--;

            if (this.children.length === 0) {
              this.deactivate();
            }
          } else {
            // map div to display..
            div = child._accessibleDiv;
            var hitArea = child.hitArea;
            var wt = child.worldTransform;

            if (child.hitArea) {
              div.style.left = "".concat((wt.tx + hitArea.x * wt.a) * sx, "px");
              div.style.top = "".concat((wt.ty + hitArea.y * wt.d) * sy, "px");
              div.style.width = "".concat(hitArea.width * wt.a * sx, "px");
              div.style.height = "".concat(hitArea.height * wt.d * sy, "px"); // div.style.background = 'red';
            } else {
              hitArea = child.getBounds(); //this.capHitArea(hitArea);

              div.style.left = "".concat(hitArea.x * sx, "px");
              div.style.top = "".concat(hitArea.y * sy, "px");
              div.style.width = "".concat(hitArea.width * sx, "px");
              div.style.height = "".concat(hitArea.height * sy, "px"); //S     div.style.background = 'rgba(0,0,255,.2)';
              // update button titles and hints if they exist and they've changed

              if (div.title !== child.accessibleTitle && child.accessibleTitle !== null) {
                div.title = child.accessibleTitle;
              }

              if (div.getAttribute('aria-label') !== child.accessibleHint && child.accessibleHint !== null) {
                div.setAttribute('aria-label', child.accessibleHint);
              }
            }
          }
        } // increment the render id..


        this.renderId++;
      }
      /**
       * TODO: docs.
       *
       * @param {Rectangle} hitArea - TODO docs
       */

    }, {
      key: "capHitArea",
      value: function capHitArea(hitArea) {
        if (hitArea.x < 0) {
          hitArea.width += hitArea.x;
          hitArea.x = 0;
        }

        if (hitArea.y < 0) {
          hitArea.height += hitArea.y;
          hitArea.y = 0;
        }

        if (hitArea.x + hitArea.width > this.renderer.width) {
          hitArea.width = this.renderer.width - hitArea.x;
        }

        if (hitArea.y + hitArea.height > this.renderer.height) {
          hitArea.height = this.renderer.height - hitArea.y;
        }
      }
      /**
       * Adds a DisplayObject to the accessibility manager
       *
       * @private
       * @param {DisplayObject} displayObject - The child to make accessible.
       */

    }, {
      key: "addChild",
      value: function addChild(displayObject) {
        //    this.activate();
        var div = this.pool.pop();

        if (!div) {
          div = document.createElement('button');
          div.style.width = "".concat(DIV_TOUCH_SIZE, "px");
          div.style.height = "".concat(DIV_TOUCH_SIZE, "px"); //div.style.backgroundColor = this.debug ? 'rgba(255,0,0,0.5)' : 'transparent';

          div.style.position = 'absolute';
          div.style.zIndex = DIV_TOUCH_ZINDEX;
          div.style.borderStyle = 'none'; // ARIA attributes ensure that button title and hint updates are announced properly

          if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            // Chrome doesn't need aria-live to work as intended; in fact it just gets more confused.
            div.setAttribute('aria-live', 'off');
          } else {
            div.setAttribute('aria-live', 'polite');
          }

          if (navigator.userAgent.match(/rv:.*Gecko\//)) {
            // FireFox needs this to announce only the new button name
            div.setAttribute('aria-relevant', 'additions');
          } else {
            // required by IE, other browsers don't much care
            div.setAttribute('aria-relevant', 'text');
          }

          div.addEventListener('click', this._onClick.bind(this));
          div.addEventListener('focus', this._onFocus.bind(this));
          div.addEventListener('focusout', this._onFocusOut.bind(this));
          div.addEventListener('mouseenter', this._onMouseEnter.bind(this));
          div.addEventListener('mouseleave', this._onMouseLeave.bind(this));
          div.addEventListener('mouseover', this._onMouseOver.bind(this));
          div.addEventListener('mouseout', this._onMouseOut.bind(this));
        }

        if (displayObject.accessibleTitle && displayObject.accessibleTitle !== null) {
          div.title = displayObject.accessibleTitle;
        } else if (!displayObject.accessibleHint || displayObject.accessibleHint === null) {
          div.title = "displayObject ".concat(displayObject.tabIndex);
        }

        if (displayObject.accessibleHint && displayObject.accessibleHint !== null) {
          div.setAttribute('aria-label', displayObject.accessibleHint);
        } //


        displayObject._accessibleActive = true;
        displayObject._accessibleDiv = div;
        div.displayObject = displayObject;
        this.children.push(displayObject);
        this.div.appendChild(displayObject._accessibleDiv);
        displayObject._accessibleDiv.tabIndex = displayObject.tabIndex;
      }
    }, {
      key: "_onMouseOver",
      value: function _onMouseOver(e) {
        console.log('_onMouseOver', e);
        var interactionManager = this.renderer.plugins.interaction;
        interactionManager.dispatchEvent(e.target.displayObject, 'mouseover', interactionManager.eventData);
      }
    }, {
      key: "_onMouseOut",
      value: function _onMouseOut(e) {
        console.log('_onMouseOut', e);
        var interactionManager = this.renderer.plugins.interaction;
        interactionManager.dispatchEvent(e.target.displayObject, 'mouseout', interactionManager.eventData);
      }
    }, {
      key: "_onMouseEnter",
      value: function _onMouseEnter(e) {
        console.log('_onMouseEnter', e);
        var interactionManager = this.renderer.plugins.interaction;
        interactionManager.dispatchEvent(e.target.displayObject, 'mouseenter', interactionManager.eventData);
      }
    }, {
      key: "_onMouseLeave",
      value: function _onMouseLeave(e) {
        console.log('_onMouseLeave', e);
        var interactionManager = this.renderer.plugins.interaction;
        interactionManager.dispatchEvent(e.target.displayObject, 'mouseleave', interactionManager.eventData);
      }
      /**
       * Maps the div button press to pixi's InteractionManager (click)
       *
       * @private
       * @param {MouseEvent} e - The click event.
       */

    }, {
      key: "_onClick",
      value: function _onClick(e) {
        var interactionManager = this.renderer.plugins.interaction;
        interactionManager.dispatchEvent(e.target.displayObject, 'click', interactionManager.eventData);
      }
      /**
       * Maps the div focus events to pixi's InteractionManager (mouseover)
       *
       * @private
       * @param {FocusEvent} e - The focus event.
       */

    }, {
      key: "_onFocus",
      value: function _onFocus(e) {
        if (!e.target.getAttribute('aria-live', 'off')) {
          e.target.setAttribute('aria-live', 'assertive');
        }

        var interactionManager = this.renderer.plugins.interaction;
        interactionManager.dispatchEvent(e.target.displayObject, 'mouseover', interactionManager.eventData);
      }
      /**
       * Maps the div focus events to pixi's InteractionManager (mouseout)
       *
       * @private
       * @param {FocusEvent} e - The focusout event.
       */

    }, {
      key: "_onFocusOut",
      value: function _onFocusOut(e) {
        if (!e.target.getAttribute('aria-live', 'off')) {
          e.target.setAttribute('aria-live', 'polite');
        }

        var interactionManager = this.renderer.plugins.interaction;
        interactionManager.dispatchEvent(e.target.displayObject, 'mouseout', interactionManager.eventData);
      }
      /**
       * Is called when a key is pressed
       *
       * @private
       * @param {KeyboardEvent} e - The keydown event.
       */

    }, {
      key: "_onKeyDown",
      value: function _onKeyDown(e) {
        if (e.keyCode !== KEY_CODE_TAB) {
          return;
        }

        this.activate();
      }
      /**
       * Is called when the mouse moves across the renderer element
       *
       * @private
       * @param {MouseEvent} e - The mouse event.
       */

    }, {
      key: "_onMouseMove",
      value: function _onMouseMove(e) {
        if (e.movementX === 0 && e.movementY === 0) {
          return;
        }

        this.deactivate();
      }
      /**
       * Destroys the accessibility manager
       *
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this.div = null;

        for (var i = 0; i < this.children.length; i++) {
          this.children[i].div = null;
        }

        window.document.removeEventListener('mousemove', this._onMouseMove, true);
        window.removeEventListener('keydown', this._onKeyDown);
        this.pool = null;
        this.children = null;
        this.renderer = null;
      }
    }]);

    return AccessibilityManager;
  }();
  core$2.WebGLRenderer.registerPlugin('accessibility', AccessibilityManager); // core.CanvasRenderer.registerPlugin('accessibility', AccessibilityManager);

  var PIXI_RENDERS = [];
  var COUNT = 0;
  PIXI$1.settings.FILTER_RESOLUTION = 1;
  var ReactPIXIFiberRoot = /*#__PURE__*/function () {
    function ReactPIXIFiberRoot(props, domElement) {
      _classCallCheck(this, ReactPIXIFiberRoot);

      this.props = props;
      this.fpsController = new FPSController$1();
      this.cancel = this.cancel.bind(this);
      this.autoRender = this.autoRender.bind(this);
      this._createPixiWebglRender = this._createPixiWebglRender.bind(this);
      COUNT++;

      this._createPixiWebglRender(props, domElement);

      return this;
    }

    _createClass(ReactPIXIFiberRoot, [{
      key: "cancel",
      value: function cancel() {
        this.raf && typeof this.raf.cancel === "function" && this.raf.cancel();
      }
    }, {
      key: "autoRender",
      value: function autoRender(renderfunction) {
        var _this = this;

        this.raf = animate__default['default'](function () {
          renderfunction();
        }, function () {
          return _this.fpsController.checkfps(30);
        });
      } // Resize function window

    }, {
      key: "_createPixiWebglRender",
      value: function _createPixiWebglRender(props, domElement) {
        var _props$style = props.style,
            style = _props$style === void 0 ? {} : _props$style,
            autoRender = props.autoRender;
        var targetName = props.targetName,
            preserveDrawingBuffer = props.preserveDrawingBuffer,
            transparent = props.transparent,
            target = props.target,
            width = props.width,
            height = props.height,
            backgroundColor = props.backgroundColor,
            clearBeforeRender = props.clearBeforeRender,
            autoResize = props.autoResize,
            className = props.className;
        var stage = new PIXI$1.Sprite();
        stage.CANVAS_ID = COUNT; // stage.UID = this.UID
        // stage.filters = [new PIXI.filters.AlphaFilter()];
        // stage.filters = [];

        var paddig = 0;
        stage.y = paddig;
        // stage.filterArea = new PIXI.Rectangle(-300,-300,1000,1000)
        // PIXI.settings.RESOLUTION = 1  

        var renderer; // PIXI.RESOLUTION = window.devicePixelRatio || 1;
        // const COUNT = Date.now();//Snew Date().getUTCMilliseconds();

        if (!document.getElementById(target) || target === undefined) {
          renderer = new PIXI$1.WebGLRenderer(width, height + paddig * 2, {
            forceFXAA: true,
            //this.props.forceFXAA,
            antialias: true,
            // this.props.antialias,
            backgroundColor: backgroundColor,
            clearBeforeRender: false,
            transparent: transparent,
            preserveDrawingBuffer: preserveDrawingBuffer,
            // this.props.preserveDrawingBuffer,
            autoResize: autoResize,
            resolution: PIXI$1.settings.RESOLUTION,
            view: domElement
          });
          console.log('autoResize', autoResize);
          if (!target) { target = "".concat(COUNT, "_target"); }
          PIXI_RENDERS[target] = renderer;
        } else {
          renderer = PIXI_RENDERS[target];
        } // renderer.render(stage);///////!!!!
        // setInterval(function(){renderer.render(stage); }, 100);


        if (!document.getElementById(target) && target !== undefined) {
          renderer.view.id = target;
          renderer.view.style.position = style.position || 'absolute';
          renderer.view.style.top = "".concat(-paddig, "px") || 'inherit';
          renderer.view.style.left = "".concat(style.left, "px") || 'inherit';
          renderer.view.style.opacity = 1;
          renderer.view.setAttribute('data-name', 'front');
          renderer.view.className = "".concat(className); // domElement.appendChild(renderer.view);
        } else if (target === undefined) {
          renderer.view.id = "stage_".concat(COUNT);
          PIXI$1.TARGET_FPMS = 0.06; // domElement.appendChild(renderer.view);
        }

        renderer.view.__PIXI__ = {
          renderer: renderer,
          stage: stage
        };
        var ticker = PIXI$1.ticker.shared; // Set this to prevent starting this ticker when listeners are added to it
        // By default this is true only on the PIXI.ticker.shared instance

        ticker.autoStart = false; // Call this to ensure the ticker is stopped right now

        ticker.stop();
        mapCanvasToStage(renderer.view, stage);
        mapStage(stage, renderer);
        mapRender(stage, renderer);
        this.renderer = renderer;
        this.stage = stage;
        this.view = renderer.view;
        stage.renderer = renderer; // window.renderer = renderer;

        if (autoRender) {
          this.autoRender(function () {
            return renderer.render(stage);
          });
        } // setTimeout(()=>renderer.render(stage),100)
        /// coment to remove html render
        // var accessibilityManager = new HtmlRenderer(renderer);
        // Object.assign( window,{HTMLRenderer:accessibilityManager});
        // this.htmlRenderer = accessibilityManager;
        // this.stage.htmlRenderer = accessibilityManager;
        // accessibilityManager.addChild(stage)
        // setTimeout(()=>{
        //   accessibilityManager.activate()
        // },1000)


        return renderer;
      }
    }]);

    return ReactPIXIFiberRoot;
  }();

  // import App from './App';

  var Canvas = /*#__PURE__*/function (_Component) {
    _inherits(Canvas, _Component);

    var _super = _createSuper(Canvas);

    function Canvas() {
      var _this;

      _classCallCheck(this, Canvas);

      _this = _super.call(this);
      console.log('constructor:canvas:created and stage!'); // this.resize = throttle(this.resize,200)

      _this.componentWillReceiveProps = _this.componentWillReceiveProps.bind(_assertThisInitialized(_this));
      _this.resize = _this.resize.bind(_assertThisInitialized(_this));
      _this.renderInner = _this.renderInner.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Canvas, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this._reactPIXIFiberRoot && typeof this._reactPIXIFiberRoot.cancel === 'function') {
          this._reactPIXIFiberRoot.cancel();
        }

        console.log('componentWillUnmount:');
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        console.log('renderInner3:canvas: created and stage'); //,Date.now(),this.props, this.container)
        // console.log('_reactPIXIFiberRoot',this._reactPIXIFiberRoot)

        RendererPublicAPI.render(nextProps.children, this._reactPIXIFiberRoot.stage);

        if (nextProps.width !== this.props.width || nextProps.height !== this.props.height) {
          this.resize(nextProps);
        }
      }
    }, {
      key: "resize",
      value: function resize(nextProps) {
        var _this$_reactPIXIFiber = this._reactPIXIFiberRoot,
            renderer = _this$_reactPIXIFiber.renderer,
            view = _this$_reactPIXIFiber.view,
            state = _this$_reactPIXIFiber.state;
        var parent = view.parentNode;
        var w = parent.clientWidth;
        var h = parent.clientHeight;
        renderer.resize(w, h);
        renderer.view.style.width = w + 'px';
        renderer.view.style.height = h + 'px';
        renderer.resize(w, h);
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(_ref) {
        var width = _ref.width,
            height = _ref.height;
        return width !== this.props.width || height !== this.props.height;
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this._reactPIXIFiberRoot) { this._reactPIXIFiberRoot.update(this.props); }
        console.log('if(this._reactPIXIFiberRoot', this._reactPIXIFiberRoot);
        this.renderInner();
      }
    }, {
      key: "renderInner",
      value: function renderInner() {
        var reactPIXIFiberRoot = new ReactPIXIFiberRoot(this.props, this.container);
        this._reactPIXIFiberRoot = reactPIXIFiberRoot;
        RendererPublicAPI.render(this.props.children, reactPIXIFiberRoot.stage); // if (this.props.autoRender) {
        //    reactPIXIFiberRoot.autoRender()
        // }

        console.log('renderInner2:canvas: created and stage::'); //,Date.now(),this.props, this.container)

        return reactPIXIFiberRoot;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        console.log('render1: canvas:created and stage');
        var container = /*#__PURE__*/React__default['default'].createElement('canvas', {
          ref: function ref(_ref2) {
            _this2.container = _ref2;
          },
          style: {
            // position: 'fixed',
            border: 'red solid 1px',
            // zIndex:-1,
            // transform:'translate3d(0,0,1px)',
            // pointerEvents: 'none',
            // backgroundColor: 'transparent',
            width: this.props.width,
            height: this.props.height
          },
          className: 'canvas-render-container'
        });
        return container;
      }
    }]);

    return Canvas;
  }(React.Component);
  Cavans.defaultProps = {
    children: null,
    backgroundColor: '0xff0000',
    clearBeforeRender: false,
    // true,
    transparent: true,
    preserveDrawingBuffer: false,
    // true,
    autoResize: false,
    // true,
    forceFXAA: false,
    antialias: false,
    // true,
    pause: false,
    className: 'custom-render-canvas',
    onRender: function onRender() {},
    width: window.innerWidth,
    height: window.innerHeight,
    autoRender: true
  };

  function createAnimate() {
    var shedular = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
      return true;
    };
    return function animate(fps, render, repeat) {
      var count = 0;

      function loop() {
        if (shedular(fps)) {
          render(count);
          count += 1;
        }

        if (repeat === undefined || count !== repeat) {
          window.requestAnimationFrame(loop);
        }
      }

      window.requestAnimationFrame(loop);
    };
  }

  var Fragment = require('./BeeldBend.frag');

  var Vertext = require('./BeeldBend.vert');

  var TextureLoader = function TextureLoader(_textures, uniforms, filter) {
    var _this = this;

    _classCallCheck(this, TextureLoader);

    _defineProperty(this, "allTextures", {});

    _defineProperty(this, "addTextTures", function (textures) {
      textures.forEach(function (file, i) {
        var name = Object.keys(file)[0];
        var url = file[name];
        console.log('texture', name, url, i);
        var sprite = new PIXI$1.Sprite.fromImage(url);
        var texture = sprite.texture;
        _this.uniforms[name] = {
          type: 'sampler2D',
          value: texture
        };
        _this.allTextures = _objectSpread2(_objectSpread2({}, _this.allTextures), {}, _defineProperty({}, name, url));

        if (texture && texture.baseTexture.hasLoaded) ; else {
          texture.baseTexture.wrapMode = PIXI$1.WRAP_MODES.REPEAT;
          texture && texture.baseTexture.on('loaded', function () {
            return _this.onTextureLoaded(texture, name);
          });
        }
      });
    });

    _defineProperty(this, "onTextureLoaded", function (texture, name) {
      // this.uniforms.width = texture.baseTexture.width
      // this.uniforms[name].baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
      // this.uniforms[name].baseTexture.off('loaded', this.boundLoadedFunction);
      texture.baseTexture.wrapMode = PIXI$1.WRAP_MODES.REPEAT;
      texture.baseTexture.off('loaded', _this.boundLoadedFunction);
    });

    this.filter = filter;
    this.uniforms = uniforms;
    this.addTextTures(_textures);
  };
  /**
   *
   * The BeeldWaveFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
   * You can use this filter to apply all manor of crazy warping effects
   * Currently the r property of the texture is used offset the x and the g propery of the texture is used to offset the y.
   * @class BeeldWaveFilter
   * @contructor
   * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
   */


  var BeeldBendFilter = /*#__PURE__*/function (_PIXI$Filter) {
    _inherits(BeeldBendFilter, _PIXI$Filter);

    var _super = _createSuper(BeeldBendFilter);

    /**
     * Creates an instance of DisplacementFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof DisplacementFilter
     */
    function BeeldBendFilter() {
      var _this2;

      var textures = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var resolution = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, BeeldBendFilter);

      _this2 = _super.call(this);
      /* defaullt pixi implementation 
       Object.assign(this.uniforms,{
           dimensions:new Float32Array(4),
           scale:0.015,
           offet:0,
           mapDimensions:new Float32Array(2),
           focus:.5,
           iTime:0,
           displacementMap:texture,
       });
       */

      _defineProperty(_assertThisInitialized(_this2), "update", function (t) {
        _this2.uniforms.iTime = performance.now() / 1000;
      });

      _this2.padding = 200;
      _this2.passes = 0;
      _this2.resolution = resolution || PIXI$1.settings.RESOLUTION;
      _this2.autoFit = false;
      /* Bypassing fucking pixi check if webgl input is in use  */

      var uniforms = {
        iResolution: {
          type: '4fv',
          value: [0, 0]
        },
        // scale:           {type: '1f', value:0.015},
        scale: {
          type: '2f',
          value: [1, 1]
        },
        tension: {
          type: '1f',
          value: 0
        },
        padding: {
          type: '1f',
          value: _this2.padding
        },
        offset: {
          type: '2f',
          value: {
            x: 1,
            y: 1
          }
        },
        mapDimensions: {
          type: '2f',
          value: {
            x: 1,
            y: 5112
          }
        },
        dimensions: {
          type: '4fv',
          value: [0, 0, 0, 0]
        },
        focus: {
          type: '1f',
          value: 0.5
        },
        iTime: {
          type: '1f',
          value: 0.0
        },
        iMouse: {
          type: '2f',
          value: [.5, .5]
        }
      };
      _this2.loader = new TextureLoader(textures, uniforms, _assertThisInitialized(_this2));
      PIXI$1.Filter.call(_assertThisInitialized(_this2), Vertext, Fragment, uniforms);
      /* end hack */
      // PIXI.ticker.shared.add(this.update)
      // PIXI.ticker.shared.start();
      // PIXI.ticker.shared.speed = .0015;

      _this2.animation = animate__default['default'](_this2.update, 24);
      _this2.animate = true;
      return _this2;
    }
    /**
     * Applies the filter.
     *
     * @param {PIXI.FilterManager} filterManager - The manager.
     * @param {PIXI.RenderTarget} input - The input target.
     * @param {PIXI.RenderTarget} output - The output target.
     */


    _createClass(BeeldBendFilter, [{
      key: "apply",
      value: function apply(filterManager, input, output, clear) {
        var width = input.sourceFrame.width;
        var height = input.sourceFrame.height;
        var x = input.sourceFrame.x;
        var y = input.sourceFrame.y;
        this.uniforms.dimensions[1] = x;
        this.uniforms.dimensions[2] = y;
        this.uniforms.dimensions[2] = width;
        this.uniforms.dimensions[3] = height;
        this.uniforms.aspect = height / width;
        this.uniforms.padding = this.padding;
        this.uniforms.iResolution[0] = input.size.width; //*resolution;

        this.uniforms.iResolution[1] = input.size.height; //*resolution;

        var mouse = this.mouse; // remember texture are square sized!!

        var mx = (mouse.x - x) / input.size.width; //window.innerWidth ;

        var my = (mouse.y - y) / input.size.height; // map to filter; .6

        this.uniforms.iMouse = [mx, my]; //console.log(this.uniformData)
        //  console.log('mx',mx)
        // console.log('x',mouse.x,mx,this.uniforms.iMouse[1])
        // this.uniforms.iMouse = [(mouse.x - x) / width+this.padding*2,(mouse.y - y) / height+this.padding*2]
        // this.transform.updateTransform(this.parent.transform);
        // draw the filter...

        filterManager.applyFilter(this, input, output, clear);
      }
    }, {
      key: "mouse",
      get: function get() {
        return this._mouse || {
          x: 0,
          y: 0
        };
      },
      set: function set(value) {
        this._mouse = value;
      }
    }, {
      key: "scale",
      get: function get() {
        return {
          x: this.uniforms.scale[0],
          y: this.uniforms.scale[1]
        };
      },
      set: function set(value) {
        this.uniforms.scale = [value.x, value.y];
      }
    }, {
      key: "offset",
      get: function get() {
        return this.uniforms.offset;
      },
      set: function set(value) {
        this.uniforms.offset = value;
      }
    }, {
      key: "time",
      get: function get() {
        return this.uniforms.iTime;
      },
      set: function set(value) {
        this.uniforms.iTime = value;
      }
    }, {
      key: "animate",
      set: function set(bool) {
        this._animate = bool;
        bool ? this.animation.resume() : this.animation.pause();
      },
      get: function get() {
        return this._animate;
      }
    }, {
      key: "tension",
      set: function set(value) {
        this.uniforms.tension = value;
      },
      get: function get() {
        return this.uniforms.tension;
      }
    }]);

    return BeeldBendFilter;
  }(PIXI$1.Filter);

  var Fragment$1 = require('./BeeldFlagMouse.frag');

  var Vertext$1 = require('./BeeldFlag.vert');
  var allTextures = {};
  /**
   *
   * The BeeldFlagFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
   * You can use this filter to apply all manor of crazy warping effects
   * Currently the r property of the texture is used offset the x and the g propery of the texture is used to offset the y.
   * @class BeeldFlagFilter
   * @contructor
   * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
   */

  var BeeldFlagFilter = /*#__PURE__*/function (_PIXI$Filter) {
    _inherits(BeeldFlagFilter, _PIXI$Filter);

    var _super = _createSuper(BeeldFlagFilter);

    /**
     * Creates an instance of DisplacementFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof DisplacementFilter
     */
    function BeeldFlagFilter() {
      var _this;

      var textures = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var resolution = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, BeeldFlagFilter);

      _this = _super.call(this);
      /* defaullt pixi implementation 
       Object.assign(this.uniforms,{
           dimensions:new Float32Array(4),
           scale:0.015,
           offet:0,
           mapDimensions:new Float32Array(2),
           focus:.5,
           iTime:0,
           displacementMap:texture,
       });
       */

      /* Bypassing fucking pixi check if webgl input is in use  */

      _defineProperty(_assertThisInitialized(_this), "animation", animate__default['default'](_this.update, 24));

      _defineProperty(_assertThisInitialized(_this), "onTextureLoaded", function (texture, name) {
        // this.uniforms.mapDimensions.x = this.uniforms.texture.width;
        // this.uniforms.mapDimensions.y = this.uniforms.texture.height;
        // this.uniforms.iResolution[0] = texture.width;
        // this.uniforms.iResolution[1] = texture.height;
        _this.uniforms[name].baseTexture.wrapMode = PIXI$1.WRAP_MODES.REPEAT;

        _this.uniforms[name].baseTexture.off('loaded', _this.boundLoadedFunction);
      });

      _defineProperty(_assertThisInitialized(_this), "update", function () {
        _this.uniforms.iTime += .1;
      });

      var uniforms = {
        iResolution: {
          type: '4fv',
          value: [0, 0]
        },
        scale: {
          type: '1f',
          value: 0.015
        },
        offset: {
          type: '2f',
          value: {
            x: 1,
            y: 1
          }
        },
        mapDimensions: {
          type: '2f',
          value: {
            x: 1,
            y: 5112
          }
        },
        dimensions: {
          type: '4fv',
          value: [0, 0, 0, 0]
        },
        focus: {
          type: '1f',
          value: 0.5
        },
        iTime: {
          type: '1f',
          value: 0.0
        } //uv:             {type: '2f', value:[.5,.5]},

      };
      textures.forEach(function (file, i) {
        var name = Object.keys(file)[0];
        var url = file[name];
        console.log('texture', name, url, i);
        var sprite = new PIXI$1.Sprite.fromImage(url);
        var texture = sprite.texture;
        uniforms[name] = {
          type: 'sampler2D',
          value: texture
        };
        allTextures = _objectSpread2(_objectSpread2({}, allTextures), {}, _defineProperty({}, name, url));

        if (texture && texture.baseTexture.hasLoaded) ; else {
          texture.baseTexture.wrapMode = PIXI$1.WRAP_MODES.REPEAT;
          texture && texture.baseTexture.on('loaded', function () {
            return _this.onTextureLoaded(texture, name);
          });
        }
      });
      PIXI$1.Filter.call(_assertThisInitialized(_this), Vertext$1, Fragment$1, uniforms);
      /* end hack */

      _this.padding = 0;
      _this.passes = 0;
      _this.resolution = resolution || PIXI$1.settings.RESOLUTION;
      _this.autoFit = false; // PIXI.ticker.shared.add(this.update)
      // PIXI.ticker.shared.start();
      // PIXI.ticker.shared.speed = .0015;

      _this.animation.pause();

      return _this;
    }

    _createClass(BeeldFlagFilter, [{
      key: "apply",

      /**
       * Applies the filter.
       *
       * @param {PIXI.FilterManager} filterManager - The manager.
       * @param {PIXI.RenderTarget} input - The input target.
       * @param {PIXI.RenderTarget} output - The output target.
       */
      value: function apply(filterManager, input, output, clear) {
        var width = input.sourceFrame.width;
        var height = input.sourceFrame.height;
        var x = input.sourceFrame.x;
        var y = input.sourceFrame.y;
        this.uniforms.dimensions[0] = x;
        this.uniforms.dimensions[1] = y;
        this.uniforms.dimensions[2] = width;
        this.uniforms.dimensions[3] = height;
        this.uniforms.aspect = height / width;
        this.uniforms.padding = this.padding;
        this.uniforms.mapDimensions[0] = width;
        this.uniforms.mapDimensions[1] = height; // this.uniforms.iResolution.x = width;
        this.uniforms.iResolution[0] = width; //*resolution;

        this.uniforms.iResolution[1] = height; //*resolution;

        var mouse = this.mouse; // this.uniforms.iMouse = [(mouse.x - x) / width,(mouse.y - y) / height]
        // this.transform.updateTransform(this.parent.transform);
        // draw the filter...

        filterManager.applyFilter(this, input, output, clear);
      }
    }, {
      key: "mouse",
      get: function get() {
        return this._mouse || {
          x: 0,
          y: 0
        };
      },
      set: function set(value) {
        this._mouse = value;
      }
    }, {
      key: "offset",
      get: function get() {
        return this.uniforms.offset;
      },
      set: function set(value) {
        this.uniforms.offset = value;
      }
    }, {
      key: "time",
      get: function get() {
        return this.uniforms.iTime;
      },
      set: function set(value) {
        this.uniforms.iTime = value;
      }
    }, {
      key: "animate",
      set: function set(bool) {
        this._animate = bool;
        bool ? this.animation.resume() : this.animation.pause();
      },
      get: function get() {
        return this._animate;
      }
    }]);

    return BeeldFlagFilter;
  }(PIXI$1.Filter);

  var Fragment$2 = require('./BeeldWave2.frag');

  var Vertext$2 = require('./BeeldWave.vert');

  var animate = require('animate');

  var TextureLoader$1 = function TextureLoader(_textures, uniforms, filter) {
    var _this = this;

    _classCallCheck(this, TextureLoader);

    _defineProperty(this, "allTextures", {});

    _defineProperty(this, "addTextTures", function (textures) {
      textures.forEach(function (file, i) {
        var name = Object.keys(file)[0];
        var url = file[name];
        console.log('texture', name, url, i);
        var sprite = new PIXI$1.Sprite.fromImage(url);
        var texture = sprite.texture;
        _this.uniforms[name] = {
          type: 'sampler2D',
          value: texture
        };
        _this.allTextures = _objectSpread2(_objectSpread2({}, _this.allTextures), {}, _defineProperty({}, name, url));

        if (texture && texture.baseTexture.hasLoaded) ; else {
          texture.baseTexture.wrapMode = PIXI$1.WRAP_MODES.REPEAT;
          texture && texture.baseTexture.on('loaded', function () {
            return _this.onTextureLoaded(texture, name);
          });
        }
      });
    });

    _defineProperty(this, "onTextureLoaded", function (texture, name) {
      // this.uniforms.width = texture.baseTexture.width
      // this.uniforms[name].baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
      // this.uniforms[name].baseTexture.off('loaded', this.boundLoadedFunction);
      texture.baseTexture.wrapMode = PIXI$1.WRAP_MODES.REPEAT;
      texture.baseTexture.off('loaded', _this.boundLoadedFunction);
    });

    this.filter = filter;
    this.uniforms = uniforms;
    this.addTextTures(_textures);
  };
  /**
   *
   * The BeeldWaveFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
   * You can use this filter to apply all manor of crazy warping effects
   * Currently the r property of the texture is used offset the x and the g propery of the texture is used to offset the y.
   * @class BeeldWaveFilter
   * @contructor
   * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
   */


  var BeeldWaveFilter = /*#__PURE__*/function (_PIXI$Filter) {
    _inherits(BeeldWaveFilter, _PIXI$Filter);

    var _super = _createSuper(BeeldWaveFilter);

    /**
     * Creates an instance of DisplacementFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof DisplacementFilter
     */
    function BeeldWaveFilter() {
      var _this2;

      var textures = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var resolution = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, BeeldWaveFilter);

      _this2 = _super.call(this);
      /* defaullt pixi implementation 
       Object.assign(this.uniforms,{
           dimensions:new Float32Array(4),
           scale:0.015,
           offet:0,
           mapDimensions:new Float32Array(2),
           focus:.5,
           iTime:0,
           displacementMap:texture,
       });
       */

      _defineProperty(_assertThisInitialized(_this2), "update", function (t) {
        _this2.uniforms.iTime += 1; //performance.now()
      });

      _this2.padding = 0;
      _this2.passes = 0;
      _this2.resolution = resolution || PIXI$1.settings.RESOLUTION;
      _this2.autoFit = false;
      /* Bypassing fucking pixi check if webgl input is in use  */

      var uniforms = {
        iResolution: {
          type: '4fv',
          value: [0, 0]
        },
        scale: {
          type: '1f',
          value: 0.015
        },
        tension: {
          type: '1f',
          value: 0
        },
        offset: {
          type: '2f',
          value: {
            x: 1,
            y: 1
          }
        },
        mapDimensions: {
          type: '2f',
          value: {
            x: 1,
            y: 5112
          }
        },
        dimensions: {
          type: '4fv',
          value: [0, 0, 0, 0]
        },
        focus: {
          type: '1f',
          value: 0.5
        },
        iTime: {
          type: '1f',
          value: 0.0
        },
        iMouse: {
          type: '2f',
          value: [.5, .5]
        }
      };
      _this2.loader = new TextureLoader$1(textures, uniforms, _assertThisInitialized(_this2));
      PIXI$1.Filter.call(_assertThisInitialized(_this2), Vertext$2, Fragment$2, uniforms);
      /* end hack */
      // PIXI.ticker.shared.add(this.update)
      // PIXI.ticker.shared.start();
      // PIXI.ticker.shared.speed = .0015;

      _this2.animation = animate(_this2.update, 24);
      _this2.animate = true;
      return _this2;
    }
    /**
     * Applies the filter.
     *
     * @param {PIXI.FilterManager} filterManager - The manager.
     * @param {PIXI.RenderTarget} input - The input target.
     * @param {PIXI.RenderTarget} output - The output target.
     */


    _createClass(BeeldWaveFilter, [{
      key: "apply",
      value: function apply(filterManager, input, output, clear) {
        var width = input.sourceFrame.width;
        var height = input.sourceFrame.height;
        var x = input.sourceFrame.x;
        var y = input.sourceFrame.y;
        this.uniforms.dimensions[1] = x;
        this.uniforms.dimensions[2] = y;
        this.uniforms.dimensions[2] = width;
        this.uniforms.dimensions[3] = height;
        this.uniforms.aspect = height / width;
        this.uniforms.padding = this.padding;
        this.uniforms.iResolution[0] = input.size.width; //*resolution;

        this.uniforms.iResolution[1] = input.size.height; //*resolution;

        var mouse = this.mouse; // remember texture are square sized!!

        var mx = (mouse.x - x) / input.size.width; //window.innerWidth ;

        var my = (mouse.y - y) / input.size.height; // map to filter; .6

        this.uniforms.iMouse = [mx, my]; //console.log(this.uniformData)
        //  console.log('mx',mx)
        // console.log('x',mouse.x,mx,this.uniforms.iMouse[1])
        // this.uniforms.iMouse = [(mouse.x - x) / width+this.padding*2,(mouse.y - y) / height+this.padding*2]
        // this.transform.updateTransform(this.parent.transform);
        // draw the filter...

        filterManager.applyFilter(this, input, output, clear);
      }
    }, {
      key: "mouse",
      get: function get() {
        return this._mouse || {
          x: 0,
          y: 0
        };
      },
      set: function set(value) {
        this._mouse = value;
      }
    }, {
      key: "offset",
      get: function get() {
        return this.uniforms.offset;
      },
      set: function set(value) {
        this.uniforms.offset = value;
      }
    }, {
      key: "time",
      get: function get() {
        return this.uniforms.iTime;
      },
      set: function set(value) {
        this.uniforms.iTime = value;
      }
    }, {
      key: "animate",
      set: function set(bool) {
        this._animate = bool;
        bool ? this.animation.resume() : this.animation.pause();
      },
      get: function get() {
        return this._animate;
      }
    }, {
      key: "tension",
      set: function set(value) {
        this.uniforms.tension = value;
      },
      get: function get() {
        return this.uniforms.tension;
      }
    }]);

    return BeeldWaveFilter;
  }(PIXI$1.Filter);

  ////import PIXI from 'pixi.js';//'vendor/pixi';
  var Fragment$3 = require('./DepthPerspectiveFilter2.frag');

  var Vertext$3 = require('./DepthPerspectiveFilter.vert');
  /**
   *
   * The DepthDisplacementFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
   * You can use this filter to apply all manor of crazy warping effects
   * Currently the r property of the texture is used offset the x and the g propery of the texture is used to offset the y.
   * @class DepthDisplacementFilter
   * @contructor
   * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
   */


  PIXI.DepthDisplacementFilter = function (sprite) {
    var texture = sprite.texture;
    var uniforms = {
      displacementMap: {
        type: 'sampler2D',
        value: texture
      },
      scale: {
        type: '1f',
        value: 0.015
      },
      offset: {
        type: '2f',
        value: {
          x: 1,
          y: 1
        }
      },
      mapDimensions: {
        type: '2f',
        value: {
          x: 1,
          y: 5112
        }
      },
      dimensions: {
        type: '4fv',
        value: [0, 0, 0, 0]
      },
      focus: {
        type: '1f',
        value: 0.5
      },
      iTime: {
        type: '1f',
        value: 0.0
      }
    };
    PIXI.AbstractFilter.call(this, Vertext$3, Fragment$3, uniforms);
    sprite.alpha = 0; //sprite.renderable = false;
    // this.passes = [this];
    // texture.baseTexture._powerOf2 = true;
    // set the uniforms

    if (texture.baseTexture.hasLoaded) {
      this.uniforms.mapDimensions.x = texture.width;
      this.uniforms.mapDimensions.y = texture.height;
    } else {
      this.boundLoadedFunction = this.onTextureLoaded.bind(this);
      texture.baseTexture.on('loaded', this.boundLoadedFunction);
    } //console.log(this.uniforms.offset.value)

  };

  PIXI.DepthDisplacementFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
  PIXI.DepthDisplacementFilter.prototype.constructor = PIXI.DepthDisplacementFilter;

  PIXI.DepthDisplacementFilter.prototype.onTextureLoaded = function () {
    this.uniforms.mapDimensions.x = this.uniforms.displacementMap.width;
    this.uniforms.mapDimensions.y = this.uniforms.displacementMap.height;
    this.uniforms.displacementMap.baseTexture.off('loaded', this.boundLoadedFunction);
  };
  /**
   * The texture used for the displacemtent map * must be power of 2 texture at the moment
   *
   * @property map
   * @type Texture
   */


  Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'map', {
    get: function get() {
      return this.uniforms.displacementMap;
    },
    set: function set(value) {
      this.uniforms.displacementMap = value;
    }
  });
  /**
   * The multiplier used to scale the displacement result from the map calculation.
   *
   * @property scale
   * @type Point
   */

  Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'scale', {
    get: function get() {
      return this.uniforms.scale;
    },
    set: function set(value) {
      this.uniforms.scale = value;
    }
  });
  /**
   * Focus point in paralax
   *
   * @property focus
   * @type float
   */

  Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'focus', {
    get: function get() {
      return this.uniforms.focus;
    },
    set: function set(value) {
      this.uniforms.focus = Math.min(1, Math.max(0, value));
    }
  });
  /**
   * The offset used to move the displacement map.
   *
   * @property offset
   * @type Point
   */

  Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'offset', {
    get: function get() {
      return this.uniforms.offset;
    },
    set: function set(value) {
      this.uniforms.offset = value;
    }
  });
  /**
   * The offset used to move the displacement map.
   *
   * @property offset
   * @type Point
   */

  Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'time', {
    get: function get() {
      return this.uniforms.iTime;
    },
    set: function set(value) {
      this.uniforms.iTime = value;
    }
  });
  var index = PIXI.DepthDisplacementFilter;

  var Fragment$4 = require('./DisplacementFilter.frag');

  var Vertext$4 = require('./DisplacementFilter.vert');
  /**
   * The DisplacementFilter applies a Gaussian blur to an object.
   * The strength of the blur can be set for x- and y-axis separately.
   *
   * @class
   * @extends PIXI.Filter
   * @memberof PIXI.filters
   */


  var DisplacementFilter = /*#__PURE__*/function (_PIXI$Filter) {
    _inherits(DisplacementFilter, _PIXI$Filter);

    var _super = _createSuper(DisplacementFilter);

    /**
     * Creates an instance of DisplacementFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof DisplacementFilter
     */
    function DisplacementFilter(resolution) {
      var _this;

      _classCallCheck(this, DisplacementFilter);

      _this = _super.call(this, Vertext$4, Fragment$4);
      _this.uniforms.dimensions = new Float32Array(2); //http://pixijs.download/dev/docs/core_renderers_webgl_managers_FilterManager.js.html#line51
      // ---> check this to allow vertical padding onlu

      _this.padding = 200;
      _this.passes = 1;
      _this.resolution = resolution || PIXI$1.settings.RESOLUTION;
      _this.autoFit = false;
      return _this;
    }
    /**
     * Applies the filter.
     *
     * @param {PIXI.FilterManager} filterManager - The manager.
     * @param {PIXI.RenderTarget} input - The input target.
     * @param {PIXI.RenderTarget} output - The output target.
     */


    _createClass(DisplacementFilter, [{
      key: "apply",
      value: function apply(filterManager, input, output, clear) {
        var width = input.sourceFrame.width;
        var height = input.sourceFrame.height;
        this.uniforms.dimensions[0] = width;
        this.uniforms.dimensions[1] = height;
        this.uniforms.aspect = height / width;
        this.uniforms.padding = this.padding;
        filterManager.applyFilter(this, input, output, clear); // const renderTarget = filterManager.getRenderTarget(true);
        // filterManager.returnRenderTarget(renderTarget);
      }
    }, {
      key: "addTexture",
      value: function addTexture(texture, name) {
        this.uniforms[name] = texture;
      }
    }, {
      key: "mouse",
      get: function get() {
        return this.uniforms.uMouse;
      },
      set: function set(value) {
        // console.log('mouseX',value)
        // value[1] = value[1] *1
        this.uniforms.uMouse = value;
      }
    }, {
      key: "offset",
      get: function get() {
        return this.uniforms.offset;
      },
      set: function set(value) {
        // console.log('offset',value)
        // value[1] = value[1] *1
        this.uniforms.offset = value;
      }
    }, {
      key: "worldTransform",
      set: function set(worldTransform) {
        this._worldTransform = worldTransform;
        this.uniforms.tx = worldTransform.tx;
      },
      get: function get() {
        return this._.worldTransform;
      }
    }]);

    return DisplacementFilter;
  }(PIXI$1.Filter);

  //http://www.lafamiliaxsiempre.cl/lookbook
  //http://super16.dk/medlemmer/glen-bay-grant
  //https://gl-transitions.com/editor/directionalwarp?direction=-1,0
  //https://gl-transitions.com/editor/crosswarp
  // !!!!
  //https://videohive.net/item/handy-seamless-transitions-pack-script/18967340?irgwc=1&clickid=0giS-aX0JQ2eUc10bqVBhWPIUkgzyHwI-QdBQs0&iradid=275988&irpid=1143794&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1143794&utm_medium=affiliate&utm_source=impact_radius

  var loader = PIXI$1.loader;

  var DisplacementFilterComponent = /*#__PURE__*/function (_Component) {
    _inherits(DisplacementFilterComponent, _Component);

    var _super = _createSuper(DisplacementFilterComponent);

    function DisplacementFilterComponent(props) {
      var _this;

      _classCallCheck(this, DisplacementFilterComponent);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "t", 0);

      _defineProperty(_assertThisInitialized(_this), "handleMouse", function (e) {
        // const {filter} = this;
        var progress = e.clientX / _this.filter.uniforms.dimensions[0]; // plot('mousex',this.t,(parabola*100))
        //plot('pasrabola',this.t,parabola*100,'#ffff00')

        _this.filter.uniforms.progress = progress; // this.filter.uniforms.parabola = parabola ;

        _this.filter.uniforms.effectFactor = e.clientX / 100; // this.filter.mouse =  [e.clientX/window.innerWidth,e.clientY/window.innerHeight];
      });

      _defineProperty(_assertThisInitialized(_this), "_loader", []);

      _defineProperty(_assertThisInitialized(_this), "_loaderQue", []);

      _defineProperty(_assertThisInitialized(_this), "add", function (name, url, index) {
        var hasAsset = _this._loader.find(function (x) {
          return x.url === url;
        }) ? true : false; // console.log('add',url,name,hasAsset)//

        if (!hasAsset) {
          if (!loader.isLoading) {
            _this._loader.push({
              url: url,
              name: name,
              index: index
            });

            loader.add(url, url, index);
          } else {
            _this._loaderQue.push({
              url: url,
              name: name,
              index: index
            });
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleError", function (error, loader) {
        console.log('handleError', error, loader);
        loader.isLoading = false;
      });

      _defineProperty(_assertThisInitialized(_this), "handleLoaded", function (loader) {
        _this._loader.forEach(function (_ref) {
          var url = _ref.url,
              name = _ref.name,
              index = _ref.index;
          console.log('handleLoaded', index);
          var resource = loader.resources[url];

          if (resource) {
            var texture = resource.texture;

            _this.filter.addTexture(texture, name);
          } else {
            console.alert("Texture does not exist: ".concat(url));
          }
        });
      });

      _defineProperty(_assertThisInitialized(_this), "update", function (nextProps) {
        _this.filter.offset = nextProps.offset;

        if (nextProps.texture) {
          loader = new PIXI$1.loaders.Loader();
          nextProps.texture.forEach(function (file, i) {
            var name = Object.keys(file)[0];
            var url = file[name];
            console.log('texture', name, url, i);

            _this.add(name, url, i);
          });
        }

        loader.once('complete', function () {
          loader.isLoading = false;

          if (_this._loaderQue.length > 0) {
            _this._loaderQue.forEach(function (item) {
              return _this.add(item.name, item.url, item.index);
            });
          }
        });

        if (!loader.isLoading) {
          loader.isLoading = true;
          loader.load(function (data) {
            return _this.handleLoaded(data);
          });
        }
      });

      _this.handleMouse.bind(_assertThisInitialized(_this));

      _this.filter = new DisplacementFilter();
      return _this;
    }

    _createClass(DisplacementFilterComponent, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        window.addEventListener('mousemove', this.handleMouse);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.update(nextProps);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.update(this.props);
        loader.on('error', this.handleError, this); // this.container.anchor.set(0.5);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {}
    }, {
      key: "renderChidren",
      value: function renderChidren(children) {
        var filters = [].concat(_toConsumableArray(this.props.filters), [this.filter]);
        return React__default['default'].Children.map(children, function (child) {
          return /*#__PURE__*/React__default['default'].cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
            filters: filters
          }), child.props.children);
        });
      } // render() {
      // 	return <div ref={ref=>this.container=ref}  filters={[this.filter]}>{this.props.children}</div>
      // }

    }, {
      key: "render",
      value: function render() {
        return this.renderChidren(this.props.children);
      }
    }]);

    return DisplacementFilterComponent;
  }(React.Component);
  DisplacementFilterComponent.defaultProps = {
    pause: false,
    offset: 0,
    filters: [0]
  };

  var Fragment$5 = require('./DistortionHoverFilter.frag');

  var Vertext$5 = require('./DistortionHoverFilter.vert');
  /**
   * The DistortionHoverFilter applies a Gaussian blur to an object.
   * The strength of the blur can be set for x- and y-axis separately.
   *
   * @class
   * @extends PIXI.Filter
   * @memberof PIXI.filters
   */


  var DistortionHoverFilter = /*#__PURE__*/function (_PIXI$Filter) {
    _inherits(DistortionHoverFilter, _PIXI$Filter);

    var _super = _createSuper(DistortionHoverFilter);

    /**
     * Creates an instance of DistortionHoverFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof DistortionHoverFilter
     */
    function DistortionHoverFilter(resolution) {
      var _this;

      _classCallCheck(this, DistortionHoverFilter);

      _this = _super.call(this, Vertext$5, Fragment$5);
      _this.uniforms.dimensions = new Float32Array(2); //http://pixijs.download/dev/docs/core_renderers_webgl_managers_FilterManager.js.html#line51
      // ---> check this to allow vertical padding onlu

      _this.padding = 10; //600;
      // this.filterArea = [0,0,100,100]

      _this.passes = 1;
      _this.resolution = resolution || PIXI$1.settings.RESOLUTION; // this.autoFit = false;

      return _this;
    }
    /**
     * Applies the filter.
     *
     * @param {PIXI.FilterManager} filterManager - The manager.
     * @param {PIXI.RenderTarget} input - The input target.
     * @param {PIXI.RenderTarget} output - The output target.
     */


    _createClass(DistortionHoverFilter, [{
      key: "apply",
      value: function apply(filterManager, input, output, clear) {
        /** removes padding x */
        // input.sourceFrame.x = 0;
        // input.sourceFrame.width = input.sourceFrame.width  - this.padding;

        /** end removes padding x */
        var width = input.sourceFrame.width;
        var height = input.sourceFrame.height;
        this.uniforms.dimensions[0] = width; // - (this.padding*2);

        this.uniforms.dimensions[1] = height; //  - (this.padding*2);

        this.uniforms.aspect = height / width;
        this.uniforms.padding = this.padding; // in pixels
        // this.uniforms.columnWidth = 25;//window.innerWidth
        // this.uniforms.tx = input.sourceFrame.x;
        //.39

        this.uniforms.mapSampler = input.texture; // console.log('cacl:',input)
        // var projectionMatrix = [0.0025380710139870644, 0, 0, 0, -0.0035587188322097063, 0, -1, 1, 1]
        // this.transform.updateTransform(this.parent.transform);
        // draw the filter...

        filterManager.applyFilter(this, input, output, clear);
        /*
                dimension: 1500, 1400];
        filterClap: [0, 0, 0.73193359375, 0.68310546875];
        filterArea:
            location: WebGLUniformLocation {}
            size: 1
            type: "vec4"
            value: Float32Array(4) [2048, 2048, -600, -600]
        */
        // -0.20000000000000007
        //this.uniforms.dimensions.x,filterManager.shaderCache[19].data);//,this.uniforms.aspect, this.padding,input.sourceFrame)
        // const renderTarget = filterManager.getRenderTarget(true);
        // filterManager.returnRenderTarget(renderTarget);
      }
    }, {
      key: "disp",
      set: function set(sprite) {
        this.uniforms.disp = sprite._texture;
      }
    }, {
      key: "texture",
      set: function set(sprite) {
        this.uniforms.texture = sprite._texture;
      }
    }, {
      key: "texture2",
      set: function set(sprite) {
        // console.log('mouseX',value)
        // value[1] = value[1] *1
        this.uniforms.texture2 = sprite._texture;
      }
    }, {
      key: "mouse",
      get: function get() {
        return this.uniforms.uMouse;
      },
      set: function set(value) {
        // console.log('mouseX',value)
        // value[1] = value[1] *1
        this.uniforms.uMouse = value;
      }
    }, {
      key: "offset",
      get: function get() {
        return this.uniforms.offset;
      },
      set: function set(value) {
        // console.log('offset',value)
        // value[1] = value[1] *1
        this.uniforms.offset = value;
      }
    }, {
      key: "worldTransform",
      set: function set(worldTransform) {
        // console.log('worldTransform',worldTransform.tx,worldTransform.toArray())   
        this._worldTransform = worldTransform; //.toArray();

        this.uniforms.tx = worldTransform.tx;
      },
      get: function get() {
        return this._.worldTransform;
      }
    }]);

    return DistortionHoverFilter;
  }(PIXI$1.Filter);

  //http://super16.dk/medlemmer/glen-bay-grant
  //https://gl-transitions.com/editor/directionalwarp?direction=-1,0
  //https://gl-transitions.com/editor/crosswarp
  // !!!!
  //https://videohive.net/item/handy-seamless-transitions-pack-script/18967340?irgwc=1&clickid=0giS-aX0JQ2eUc10bqVBhWPIUkgzyHwI-QdBQs0&iradid=275988&irpid=1143794&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1143794&utm_medium=affiliate&utm_source=impact_radius

  var loader$1 = PIXI$1.loader;

  var DistortionHoverFilterComponent = /*#__PURE__*/function (_Component) {
    _inherits(DistortionHoverFilterComponent, _Component);

    var _super = _createSuper(DistortionHoverFilterComponent);

    function DistortionHoverFilterComponent(props) {
      var _this;

      _classCallCheck(this, DistortionHoverFilterComponent);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "handleMouse", function (e) {
        _this.filter.uniforms.dispFactor = e.clientX / 100;
        _this.filter.uniforms.effectFactor = e.clientX / 100;
        _this.filter.mouse = [e.clientX / window.innerWidth, e.clientY / window.innerHeight];
      });

      _defineProperty(_assertThisInitialized(_this), "_loader", []);

      _defineProperty(_assertThisInitialized(_this), "_loaderQue", []);

      _defineProperty(_assertThisInitialized(_this), "add", function (url, index) {
        var hasAsset = _this._loader.find(function (x) {
          return x.url === url;
        }) ? true : false;
        console.log('add', url, hasAsset);

        if (!hasAsset) {
          if (!loader$1.isLoading) {
            _this._loader.push({
              url: url,
              index: index
            });

            loader$1.add(url, index);
          } else {
            _this._loaderQue.push({
              url: url,
              index: index
            });
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "update", function (nextProps) {
        _this.filter.offset = nextProps.offset;

        if (nextProps.url) {
          _this.add(nextProps.url, 0);
        }

        if (nextProps.url2) {
          _this.add(nextProps.url2, 1);
        }

        if (nextProps.url3) {
          console.log('nextProps.url3', nextProps.url3);

          _this.add(nextProps.url3, 2);
        }

        loader$1.once('complete', function () {
          loader$1.isLoading = false;

          if (_this._loaderQue.length > 0) {
            _this._loaderQue.forEach(function (item) {
              return _this.add(item.url, item.index);
            });
          }
        });

        if (!loader$1.isLoading) {
          loader$1.isLoading = true;
          loader$1.load(function (data) {
            return _this.handleLoaded(data);
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleError", function (error, loader) {
        console.log('handleError', error, loader);
        loader.isLoading = false;
      });

      _defineProperty(_assertThisInitialized(_this), "handleLoaded", function (loader) {
        _this._loader.forEach(function (_ref) {
          var url = _ref.url,
              index = _ref.index;
          console.log('handleLoaded', index);
          var resource = loader.resources[url];

          if (resource) {
            var texture = resource.texture;
            var sprite = new PIXI$1.Sprite(texture);

            if (index === 0) {
              _this.filter.texture = sprite;
              return;
            }

            if (index === 1) {
              _this.filter.texture2 = sprite;
              return;
            }

            if (index === 2) {
              _this.filter.disp = sprite;
              return;
            }
          } else {
            console.alert("Texture does not exist: ".concat(url));
          }
        });
      });

      _this.filter = new DistortionHoverFilter();
      return _this;
    }

    _createClass(DistortionHoverFilterComponent, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        window.addEventListener('mousemove', this.handleMouse);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.update(nextProps);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.update(this.props);
        loader$1.on('error', this.handleError, this); // this.container.anchor.set(0.5);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {}
    }, {
      key: "renderChidren",
      value: function renderChidren(children) {
        var _this2 = this;

        return React__default['default'].Children.map(children, function (child) {
          return /*#__PURE__*/React__default['default'].cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
            filters: [_this2.filter]
          }), child.props.children);
        });
      }
    }, {
      key: "load",
      value: function load(url, index) {
        var _this3 = this;

        PIXI$1.loader.add(url).load(function (data) {
          return _this3.handleLoaded(data, index);
        });
      } // render() {
      // 	return <div ref={ref=>this.container=ref}  filters={[this.filter]}>{this.props.children}</div>
      // }

    }, {
      key: "render",
      value: function render() {
        console.log('(this.props.children', this.props.children);
        return this.renderChidren(this.props.children);
      }
    }]);

    return DistortionHoverFilterComponent;
  }(React.Component);
  DistortionHoverFilterComponent.defaultProps = {
    pause: false,
    offset: 0
  };

  var Fragment$6 = require('./ImageBeeldFilter.frag');

  var Vertext$6 = require('./ImageBeeldFilter.vert');
  /**
   * The ImageBeeldFilter applies a Gaussian blur to an object.
   * The strength of the blur can be set for x- and y-axis separately.
   *
   * @class
   * @extends PIXI.Filter
   * @memberof PIXI.filters
   */


  var ImageBeeldFilter = /*#__PURE__*/function (_PIXI$Filter) {
    _inherits(ImageBeeldFilter, _PIXI$Filter);

    var _super = _createSuper(ImageBeeldFilter);

    /**
     * Creates an instance of ImageBeeldFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof ImageBeeldFilter
     */
    function ImageBeeldFilter(padding, resolution) {
      var _this;

      _classCallCheck(this, ImageBeeldFilter);

      _this = _super.call(this, Vertext$6, Fragment$6);
      _this.uniforms.dimensions = new Float32Array(2);
      _this.uniforms.columnWidth = 1;
      _this.uniforms.uSpeed = 0; //http://pixijs.download/dev/docs/core_renderers_webgl_managers_FilterManager.js.html#line51
      // ---> check this to allow vertical padding onlu

      _this.padding = padding; // this.filterArea = [0,0,100,100]

      _this.passes = 1;
      _this.resolution = resolution || PIXI$1.settings.RESOLUTION; // this.autoFit = false;

      return _this;
    }
    /**
     * Applies the filter.
     *
     * @param {PIXI.FilterManager} filterManager - The manager.
     * @param {PIXI.RenderTarget} input - The input target.
     * @param {PIXI.RenderTarget} output - The output target.
     */


    _createClass(ImageBeeldFilter, [{
      key: "apply",
      value: function apply(filterManager, input, output, clear) {
        /** removes padding x */
        // input.sourceFrame.x = 0;
        // input.sourceFrame.width = input.sourceFrame.width  - this.padding;

        /** end removes padding x */
        var width = input.sourceFrame.width;
        var height = input.sourceFrame.height;
        this.uniforms.dimensions[0] = width; // - (this.padding*2);

        this.uniforms.dimensions[1] = height; //  - (this.padding*2);

        this.uniforms.aspect = height / width;
        this.uniforms.padding = this.padding; // A =  200;
        // padding 50;
        // total =  300;
        // scale =  (A+padding*2)/B
        // const scale = [outerWidth / width,outerHeight / height]

        this.uniforms.uPadding = [this.padding, this.padding]; //,0,0,this.padding/outerWidth,height/outerHeight);
        // console.log( this.uniforms.paddingMatrix);
        // in pixels

        this.uniforms.columnWidth = 20; //25;//window.innerWidth
        // this.uniforms.tx = input.sourceFrame.x;
        //.39

        this.uniforms.mapSampler = input.texture; // console.log('cacl:',input)
        // var projectionMatrix = [0.0025380710139870644, 0, 0, 0, -0.0035587188322097063, 0, -1, 1, 1]
        // this.transform.updateTransform(this.parent.transform);
        // draw the filter...

        var f = filterManager.applyFilter(this, input, output, clear);
        /*
                dimension: 1500, 1400];
        filterClap: [0, 0, 0.73193359375, 0.68310546875];
        filterArea:
            location: WebGLUniformLocation {}
            size: 1
            type: "vec4"
            value: Float32Array(4) [2048, 2048, -600, -600]
        */
        // -0.20000000000000007
        //this.uniforms.dimensions.x,filterManager.shaderCache[19].data);//,this.uniforms.aspect, this.padding,input.sourceFrame)
        // const renderTarget = filterManager.getRenderTarget(true);
        // filterManager.returnRenderTarget(renderTarget);
      }
    }, {
      key: "speed",
      get: function get() {
        return this.uniforms.uSpeed;
      },
      set: function set(value) {
        this.uniforms.uSpeed = value;
      }
    }, {
      key: "mouse",
      get: function get() {
        return this.uniforms.uMouse;
      },
      set: function set(value) {
        // console.log('mouseX',value)
        // value[1] = value[1] *1
        this.uniforms.uMouse = value;
      }
    }, {
      key: "offset",
      get: function get() {
        return this.uniforms.offset;
      },
      set: function set(value) {
        // console.log('offset',value)
        // value[1] = value[1] *1
        this.uniforms.offset = value;
      }
    }, {
      key: "worldTransform",
      set: function set(worldTransform) {
        // console.log('worldTransform',worldTransform.tx,worldTransform.toArray())   
        this._worldTransform = worldTransform; //.toArray();

        this.uniforms.tx = worldTransform.tx;
      },
      get: function get() {
        return this._.worldTransform;
      }
    }]);

    return ImageBeeldFilter;
  }(PIXI$1.Filter);

  var ImageBeeldFilterComponent = /*#__PURE__*/function (_Component) {
    _inherits(ImageBeeldFilterComponent, _Component);

    var _super = _createSuper(ImageBeeldFilterComponent);

    function ImageBeeldFilterComponent(props) {
      var _this;

      _classCallCheck(this, ImageBeeldFilterComponent);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "handleMouse", function (e) {
        _this.filter.mouse = [e.clientX / window.innerWidth, e.clientY / window.innerHeight];
      });

      _defineProperty(_assertThisInitialized(_this), "update", function (nextProps) {
        // console.log('nextProps.offset',nextProps.offset)
        // if(this.props.pause) return;
        // this.filter.mouse =  [0,nextProps.offset]
        _this.filter.offset = nextProps.offset * .03; // console.log('offset',nextProps.offset)
      });

      _this.filter = new ImageBeeldFilter(props.padding);
      return _this;
    }

    _createClass(ImageBeeldFilterComponent, [{
      key: "componentWillMount",
      value: function componentWillMount() {// window.addEventListener('mousemove',this.handleMouse)
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        this.update(nextProps);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.update(this.props); // this.container.anchor.set(0.5);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {}
    }, {
      key: "renderChidren",
      value: function renderChidren(children) {
        var filters = [this.filter].concat(_toConsumableArray(this.props.filters));
        return React__default['default'].Children.map(children, function (child) {
          return /*#__PURE__*/React__default['default'].cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
            filters: filters
          }), child.props.children);
        });
      } // render() {
      // 	return <container ref={ref=>this.container=ref}  filters={[this.filter]}>{this.props.children}</container>
      // }

    }, {
      key: "render",
      value: function render() {
        // console.log('(this.props.children',this.props.children)
        return this.renderChidren(this.props.children);
      }
    }]);

    return ImageBeeldFilterComponent;
  }(React.Component);
  ImageBeeldFilterComponent.defaultProps = {
    pause: false,
    offset: 0,
    filters: [],
    padding: 0
  };

  /**
   * Helper class to create a webGL Context
   *
   * @class
   * @memberof PIXI.glCore
   * @param canvas {HTMLCanvasElement} the canvas element that we will get the context from
   * @param options {Object} An options object that gets passed in to the canvas element containing the context attributes,
   *                         see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext for the options available
   * @return {WebGLRenderingContext} the WebGL context
   */
  var createContext = function createContext(canvas, options) {
    var gl = canvas.getContext('webgl', options) || canvas.getContext('experimental-webgl', options);

    if (!gl) {
      // fail, not able to get a context
      throw new Error('This browser does not support webGL. Try using the canvas renderer');
    }

    return gl;
  };

  var createContext_1 = createContext;

  // var GL_MAP = {};

  /**
   * @param gl {WebGLRenderingContext} The current WebGL context
   * @param attribs {*}
   * @param state {*}
   */
  var setVertexAttribArrays = function setVertexAttribArrays(gl, attribs, state) {
    var i;

    if (state) {
      var tempAttribState = state.tempAttribState,
          attribState = state.attribState;

      for (i = 0; i < tempAttribState.length; i++) {
        tempAttribState[i] = false;
      } // set the new attribs


      for (i = 0; i < attribs.length; i++) {
        tempAttribState[attribs[i].attribute.location] = true;
      }

      for (i = 0; i < attribState.length; i++) {
        if (attribState[i] !== tempAttribState[i]) {
          attribState[i] = tempAttribState[i];

          if (state.attribState[i]) {
            gl.enableVertexAttribArray(i);
          } else {
            gl.disableVertexAttribArray(i);
          }
        }
      }
    } else {
      for (i = 0; i < attribs.length; i++) {
        var attrib = attribs[i];
        gl.enableVertexAttribArray(attrib.attribute.location);
      }
    }
  };

  var setVertexAttribArrays_1 = setVertexAttribArrays;

  var EMPTY_ARRAY_BUFFER = new ArrayBuffer(0);
  /**
   * Helper class to create a webGL buffer
   *
   * @class
   * @memberof PIXI.glCore
   * @param gl {WebGLRenderingContext} The current WebGL rendering context
   * @param type {gl.ARRAY_BUFFER | gl.ELEMENT_ARRAY_BUFFER} @mat
   * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
   * @param drawType {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW}
   */

  var Buffer = function Buffer(gl, type, data, drawType) {
    /**
        * The current WebGL rendering context
        *
        * @member {WebGLRenderingContext}
        */
    this.gl = gl;
    /**
        * The WebGL buffer, created upon instantiation
        *
        * @member {WebGLBuffer}
        */

    this.buffer = gl.createBuffer();
    /**
        * The type of the buffer
        *
        * @member {gl.ARRAY_BUFFER|gl.ELEMENT_ARRAY_BUFFER}
        */

    this.type = type || gl.ARRAY_BUFFER;
    /**
        * The draw type of the buffer
        *
        * @member {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW}
        */

    this.drawType = drawType || gl.STATIC_DRAW;
    /**
        * The data in the buffer, as a typed array
        *
        * @member {ArrayBuffer| SharedArrayBuffer|ArrayBufferView}
        */

    this.data = EMPTY_ARRAY_BUFFER;

    if (data) {
      this.upload(data);
    }

    this._updateID = 0;
  };
  /**
   * Uploads the buffer to the GPU
   * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data to upload
   * @param offset {Number} if only a subset of the data should be uploaded, this is the amount of data to subtract
   * @param dontBind {Boolean} whether to bind the buffer before uploading it
   */


  Buffer.prototype.upload = function (data, offset, dontBind) {
    // todo - needed?
    if (!dontBind) { this.bind(); }
    var gl = this.gl;
    data = data || this.data;
    offset = offset || 0;

    if (this.data.byteLength >= data.byteLength) {
      gl.bufferSubData(this.type, offset, data);
    } else {
      gl.bufferData(this.type, data, this.drawType);
    }

    this.data = data;
  };
  /**
   * Binds the buffer
   *
   */


  Buffer.prototype.bind = function () {
    var gl = this.gl;
    gl.bindBuffer(this.type, this.buffer);
  };

  Buffer.createVertexBuffer = function (gl, data, drawType) {
    return new Buffer(gl, gl.ARRAY_BUFFER, data, drawType);
  };

  Buffer.createIndexBuffer = function (gl, data, drawType) {
    return new Buffer(gl, gl.ELEMENT_ARRAY_BUFFER, data, drawType);
  };

  Buffer.create = function (gl, type, data, drawType) {
    return new Buffer(gl, type, data, drawType);
  };
  /**
   * Destroys the buffer
   *
   */


  Buffer.prototype.destroy = function () {
    this.gl.deleteBuffer(this.buffer);
  };

  var GLBuffer = Buffer;

  /**
   * Helper class to create a WebGL Texture
   *
   * @class
   * @memberof PIXI.glCore
   * @param gl {WebGLRenderingContext} The current WebGL context
   * @param width {number} the width of the texture
   * @param height {number} the height of the texture
   * @param format {number} the pixel format of the texture. defaults to gl.RGBA
   * @param type {number} the gl type of the texture. defaults to gl.UNSIGNED_BYTE
   */
  var Texture = function Texture(gl, width, height, format, type) {
    /**
     * The current WebGL rendering context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;
    /**
     * The WebGL texture
     *
     * @member {WebGLTexture}
     */

    this.texture = gl.createTexture();
    /**
     * If mipmapping was used for this texture, enable and disable with enableMipmap()
     *
     * @member {Boolean}
     */
    // some settings..

    this.mipmap = false;
    /**
     * Set to true to enable pre-multiplied alpha
     *
     * @member {Boolean}
     */

    this.premultiplyAlpha = false;
    /**
     * The width of texture
     *
     * @member {Number}
     */

    this.width = width || -1;
    /**
     * The height of texture
     *
     * @member {Number}
     */

    this.height = height || -1;
    /**
     * The pixel format of the texture. defaults to gl.RGBA
     *
     * @member {Number}
     */

    this.format = format || gl.RGBA;
    /**
     * The gl type of the texture. defaults to gl.UNSIGNED_BYTE
     *
     * @member {Number}
     */

    this.type = type || gl.UNSIGNED_BYTE;
  };
  /**
   * Uploads this texture to the GPU
   * @param source {HTMLImageElement|ImageData|HTMLVideoElement} the source image of the texture
   */


  Texture.prototype.upload = function (source) {
    this.bind();
    var gl = this.gl;
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
    var newWidth = source.videoWidth || source.width;
    var newHeight = source.videoHeight || source.height;

    if (newHeight !== this.height || newWidth !== this.width) {
      gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, source);
    } else {
      gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, this.format, this.type, source);
    } // if the source is a video, we need to use the videoWidth / videoHeight properties as width / height will be incorrect.


    this.width = newWidth;
    this.height = newHeight;
  };

  var FLOATING_POINT_AVAILABLE = false;
  /**
   * Use a data source and uploads this texture to the GPU
   * @param data {TypedArray} the data to upload to the texture
   * @param width {number} the new width of the texture
   * @param height {number} the new height of the texture
   */

  Texture.prototype.uploadData = function (data, width, height) {
    this.bind();
    var gl = this.gl;

    if (data instanceof Float32Array) {
      if (!FLOATING_POINT_AVAILABLE) {
        var ext = gl.getExtension("OES_texture_float");

        if (ext) {
          FLOATING_POINT_AVAILABLE = true;
        } else {
          throw new Error('floating point textures not available');
        }
      }

      this.type = gl.FLOAT;
    } else {
      // TODO support for other types
      this.type = this.type || gl.UNSIGNED_BYTE;
    } // what type of data?


    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);

    if (width !== this.width || height !== this.height) {
      gl.texImage2D(gl.TEXTURE_2D, 0, this.format, width, height, 0, this.format, this.type, data || null);
    } else {
      gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, width, height, this.format, this.type, data || null);
    }

    this.width = width;
    this.height = height; //	texSubImage2D
  };
  /**
   * Binds the texture
   * @param  location
   */


  Texture.prototype.bind = function (location) {
    var gl = this.gl;

    if (location !== undefined) {
      gl.activeTexture(gl.TEXTURE0 + location);
    }

    gl.bindTexture(gl.TEXTURE_2D, this.texture);
  };
  /**
   * Unbinds the texture
   */


  Texture.prototype.unbind = function () {
    var gl = this.gl;
    gl.bindTexture(gl.TEXTURE_2D, null);
  };
  /**
   * @param linear {Boolean} if we want to use linear filtering or nearest neighbour interpolation
   */


  Texture.prototype.minFilter = function (linear) {
    var gl = this.gl;
    this.bind();

    if (this.mipmap) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
    } else {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR : gl.NEAREST);
    }
  };
  /**
   * @param linear {Boolean} if we want to use linear filtering or nearest neighbour interpolation
   */


  Texture.prototype.magFilter = function (linear) {
    var gl = this.gl;
    this.bind();
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, linear ? gl.LINEAR : gl.NEAREST);
  };
  /**
   * Enables mipmapping
   */


  Texture.prototype.enableMipmap = function () {
    var gl = this.gl;
    this.bind();
    this.mipmap = true;
    gl.generateMipmap(gl.TEXTURE_2D);
  };
  /**
   * Enables linear filtering
   */


  Texture.prototype.enableLinearScaling = function () {
    this.minFilter(true);
    this.magFilter(true);
  };
  /**
   * Enables nearest neighbour interpolation
   */


  Texture.prototype.enableNearestScaling = function () {
    this.minFilter(false);
    this.magFilter(false);
  };
  /**
   * Enables clamping on the texture so WebGL will not repeat it
   */


  Texture.prototype.enableWrapClamp = function () {
    var gl = this.gl;
    this.bind();
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  };
  /**
   * Enable tiling on the texture
   */


  Texture.prototype.enableWrapRepeat = function () {
    var gl = this.gl;
    this.bind();
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  };

  Texture.prototype.enableWrapMirrorRepeat = function () {
    var gl = this.gl;
    this.bind();
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
  };
  /**
   * Destroys this texture
   */


  Texture.prototype.destroy = function () {
    var gl = this.gl; //TODO

    gl.deleteTexture(this.texture);
  };
  /**
   * @static
   * @param gl {WebGLRenderingContext} The current WebGL context
   * @param source {HTMLImageElement|ImageData} the source image of the texture
   * @param premultiplyAlpha {Boolean} If we want to use pre-multiplied alpha
   */


  Texture.fromSource = function (gl, source, premultiplyAlpha) {
    var texture = new Texture(gl);
    texture.premultiplyAlpha = premultiplyAlpha || false;
    texture.upload(source);
    return texture;
  };
  /**
   * @static
   * @param gl {WebGLRenderingContext} The current WebGL context
   * @param data {TypedArray} the data to upload to the texture
   * @param width {number} the new width of the texture
   * @param height {number} the new height of the texture
   */


  Texture.fromData = function (gl, data, width, height) {
    //console.log(data, width, height);
    var texture = new Texture(gl);
    texture.uploadData(data, width, height);
    return texture;
  };

  var GLTexture = Texture;

  /**
   * Helper class to create a webGL Framebuffer
   *
   * @class
   * @memberof PIXI.glCore
   * @param gl {WebGLRenderingContext} The current WebGL rendering context
   * @param width {Number} the width of the drawing area of the frame buffer
   * @param height {Number} the height of the drawing area of the frame buffer
   */


  var Framebuffer = function Framebuffer(gl, width, height) {
    /**
     * The current WebGL rendering context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;
    /**
     * The frame buffer
     *
     * @member {WebGLFramebuffer}
     */

    this.framebuffer = gl.createFramebuffer();
    /**
     * The stencil buffer
     *
     * @member {WebGLRenderbuffer}
     */

    this.stencil = null;
    /**
     * The stencil buffer
     *
     * @member {PIXI.glCore.GLTexture}
     */

    this.texture = null;
    /**
     * The width of the drawing area of the buffer
     *
     * @member {Number}
     */

    this.width = width || 100;
    /**
     * The height of the drawing area of the buffer
     *
     * @member {Number}
     */

    this.height = height || 100;
  };
  /**
   * Adds a texture to the frame buffer
   * @param texture {PIXI.glCore.GLTexture}
   */


  Framebuffer.prototype.enableTexture = function (texture) {
    var gl = this.gl;
    this.texture = texture || new GLTexture(gl);
    this.texture.bind(); //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,  this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    this.bind();
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.texture, 0);
  };
  /**
   * Initialises the stencil buffer
   */


  Framebuffer.prototype.enableStencil = function () {
    if (this.stencil) { return; }
    var gl = this.gl;
    this.stencil = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil); // TODO.. this is depth AND stencil?

    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencil);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, this.width, this.height);
  };
  /**
   * Erases the drawing area and fills it with a colour
   * @param  r {Number} the red value of the clearing colour
   * @param  g {Number} the green value of the clearing colour
   * @param  b {Number} the blue value of the clearing colour
   * @param  a {Number} the alpha value of the clearing colour
   */


  Framebuffer.prototype.clear = function (r, g, b, a) {
    this.bind();
    var gl = this.gl;
    gl.clearColor(r, g, b, a);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  };
  /**
   * Binds the frame buffer to the WebGL context
   */


  Framebuffer.prototype.bind = function () {
    var gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
  };
  /**
   * Unbinds the frame buffer to the WebGL context
   */


  Framebuffer.prototype.unbind = function () {
    var gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  };
  /**
   * Resizes the drawing area of the buffer to the given width and height
   * @param  width  {Number} the new width
   * @param  height {Number} the new height
   */


  Framebuffer.prototype.resize = function (width, height) {
    var gl = this.gl;
    this.width = width;
    this.height = height;

    if (this.texture) {
      this.texture.uploadData(null, width, height);
    }

    if (this.stencil) {
      // update the stencil buffer width and height
      gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
    }
  };
  /**
   * Destroys this buffer
   */


  Framebuffer.prototype.destroy = function () {
    var gl = this.gl; //TODO

    if (this.texture) {
      this.texture.destroy();
    }

    gl.deleteFramebuffer(this.framebuffer);
    this.gl = null;
    this.stencil = null;
    this.texture = null;
  };
  /**
   * Creates a frame buffer with a texture containing the given data
   * @static
   * @param gl {WebGLRenderingContext} The current WebGL rendering context
   * @param width {Number} the width of the drawing area of the frame buffer
   * @param height {Number} the height of the drawing area of the frame buffer
   * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
   */


  Framebuffer.createRGBA = function (gl, width, height, data) {
    var texture = GLTexture.fromData(gl, null, width, height);
    texture.enableNearestScaling();
    texture.enableWrapClamp(); //now create the framebuffer object and attach the texture to it.

    var fbo = new Framebuffer(gl, width, height);
    fbo.enableTexture(texture); //fbo.enableStencil(); // get this back on soon!

    fbo.unbind();
    return fbo;
  };
  /**
   * Creates a frame buffer with a texture containing the given data
   * @static
   * @param gl {WebGLRenderingContext} The current WebGL rendering context
   * @param width {Number} the width of the drawing area of the frame buffer
   * @param height {Number} the height of the drawing area of the frame buffer
   * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
   */


  Framebuffer.createFloat32 = function (gl, width, height, data) {
    // create a new texture..
    var texture = new GLTexture.fromData(gl, data, width, height);
    texture.enableNearestScaling();
    texture.enableWrapClamp(); //now create the framebuffer object and attach the texture to it.

    var fbo = new Framebuffer(gl, width, height);
    fbo.enableTexture(texture);
    fbo.unbind();
    return fbo;
  };

  var GLFramebuffer = Framebuffer;

  /**
   * @class
   * @memberof PIXI.glCore.shader
   * @param gl {WebGLRenderingContext} The current WebGL context {WebGLProgram}
   * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
   * @param fragmentSrc {string|string[]} The fragment shader source as an array of strings.
   * @param attributeLocations {Object} An attribute location map that lets you manually set the attribute locations
   * @return {WebGLProgram} the shader program
   */
  var compileProgram = function compileProgram(gl, vertexSrc, fragmentSrc, attributeLocations) {
    var glVertShader = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
    var glFragShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
    var program = gl.createProgram();
    gl.attachShader(program, glVertShader);
    gl.attachShader(program, glFragShader); // optionally, set the attributes manually for the program rather than letting WebGL decide..

    if (attributeLocations) {
      for (var i in attributeLocations) {
        gl.bindAttribLocation(program, attributeLocations[i], i);
      }
    }

    gl.linkProgram(program); // if linking fails, then log and cleanup

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Pixi.js Error: Could not initialize shader.');
      console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
      console.error('gl.getError()', gl.getError()); // if there is a program info log, log it

      if (gl.getProgramInfoLog(program) !== '') {
        console.warn('Pixi.js Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
      }

      gl.deleteProgram(program);
      program = null;
    } // clean up some shaders


    gl.deleteShader(glVertShader);
    gl.deleteShader(glFragShader);
    return program;
  };
  /**
   * @private
   * @param gl {WebGLRenderingContext} The current WebGL context {WebGLProgram}
   * @param type {Number} the type, can be either VERTEX_SHADER or FRAGMENT_SHADER
   * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
   * @return {WebGLShader} the shader
   */


  var compileShader = function compileShader(gl, type, src) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.log(gl.getShaderInfoLog(shader));
      return null;
    }

    return shader;
  };

  var compileProgram_1 = compileProgram;

  var mapSize = function mapSize(gl, type) {
    if (!GL_TABLE) {
      var typeNames = Object.keys(GL_TO_GLSL_TYPES);
      GL_TABLE = {};

      for (var i = 0; i < typeNames.length; ++i) {
        var tn = typeNames[i];
        GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
      }
    }

    return GL_TABLE[type];
  };

  var GL_TABLE = null;
  var GL_TO_GLSL_TYPES = {
    'FLOAT': 'float',
    'FLOAT_VEC2': 'vec2',
    'FLOAT_VEC3': 'vec3',
    'FLOAT_VEC4': 'vec4',
    'INT': 'int',
    'INT_VEC2': 'ivec2',
    'INT_VEC3': 'ivec3',
    'INT_VEC4': 'ivec4',
    'BOOL': 'bool',
    'BOOL_VEC2': 'bvec2',
    'BOOL_VEC3': 'bvec3',
    'BOOL_VEC4': 'bvec4',
    'FLOAT_MAT2': 'mat2',
    'FLOAT_MAT3': 'mat3',
    'FLOAT_MAT4': 'mat4',
    'SAMPLER_2D': 'sampler2D'
  };
  var mapType = mapSize;

  /**
   * @class
   * @memberof PIXI.glCore.shader
   * @param type {String}
   * @return {Number}
   */
  var mapSize$1 = function mapSize(type) {
    return GLSL_TO_SIZE[type];
  };

  var GLSL_TO_SIZE = {
    'float': 1,
    'vec2': 2,
    'vec3': 3,
    'vec4': 4,
    'int': 1,
    'ivec2': 2,
    'ivec3': 3,
    'ivec4': 4,
    'bool': 1,
    'bvec2': 2,
    'bvec3': 3,
    'bvec4': 4,
    'mat2': 4,
    'mat3': 9,
    'mat4': 16,
    'sampler2D': 1
  };
  var mapSize_1 = mapSize$1;

  /**
   * Extracts the attributes
   * @class
   * @memberof PIXI.glCore.shader
   * @param gl {WebGLRenderingContext} The current WebGL rendering context
   * @param program {WebGLProgram} The shader program to get the attributes from
   * @return attributes {Object}
   */


  var extractAttributes = function extractAttributes(gl, program) {
    var attributes = {};
    var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

    for (var i = 0; i < totalAttributes; i++) {
      var attribData = gl.getActiveAttrib(program, i);
      var type = mapType(gl, attribData.type);
      attributes[attribData.name] = {
        type: type,
        size: mapSize_1(type),
        location: gl.getAttribLocation(program, attribData.name),
        //TODO - make an attribute object
        pointer: pointer
      };
    }

    return attributes;
  };

  var pointer = function pointer(type, normalized, stride, start) {
    // console.log(this.location)
    gl.vertexAttribPointer(this.location, this.size, type || gl.FLOAT, normalized || false, stride || 0, start || 0);
  };

  var extractAttributes_1 = extractAttributes;

  /**
   * @class
   * @memberof PIXI.glCore.shader
   * @param type {String} Type of value
   * @param size {Number}
   */
  var defaultValue = function defaultValue(type, size) {
    switch (type) {
      case 'float':
        return 0;

      case 'vec2':
        return new Float32Array(2 * size);

      case 'vec3':
        return new Float32Array(3 * size);

      case 'vec4':
        return new Float32Array(4 * size);

      case 'int':
      case 'sampler2D':
        return 0;

      case 'ivec2':
        return new Int32Array(2 * size);

      case 'ivec3':
        return new Int32Array(3 * size);

      case 'ivec4':
        return new Int32Array(4 * size);

      case 'bool':
        return false;

      case 'bvec2':
        return booleanArray(2 * size);

      case 'bvec3':
        return booleanArray(3 * size);

      case 'bvec4':
        return booleanArray(4 * size);

      case 'mat2':
        return new Float32Array([1, 0, 0, 1]);

      case 'mat3':
        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);

      case 'mat4':
        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
  };

  var booleanArray = function booleanArray(size) {
    var array = new Array(size);

    for (var i = 0; i < array.length; i++) {
      array[i] = false;
    }

    return array;
  };

  var defaultValue_1 = defaultValue;

  /**
   * Extracts the uniforms
   * @class
   * @memberof PIXI.glCore.shader
   * @param gl {WebGLRenderingContext} The current WebGL rendering context
   * @param program {WebGLProgram} The shader program to get the uniforms from
   * @return uniforms {Object}
   */


  var extractUniforms = function extractUniforms(gl, program) {
    var uniforms = {};
    var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

    for (var i = 0; i < totalUniforms; i++) {
      var uniformData = gl.getActiveUniform(program, i);
      var name = uniformData.name.replace(/\[.*?\]/, "");
      var type = mapType(gl, uniformData.type);
      uniforms[name] = {
        type: type,
        size: uniformData.size,
        location: gl.getUniformLocation(program, name),
        value: defaultValue_1(type, uniformData.size)
      };
    }

    return uniforms;
  };

  var extractUniforms_1 = extractUniforms;

  /**
   * Sets the float precision on the shader. If the precision is already present this function will do nothing
   * @param {string} src       the shader source
   * @param {string} precision The float precision of the shader. Options are 'lowp', 'mediump' or 'highp'.
   *
   * @return {string} modified shader source
   */
  var setPrecision = function setPrecision(src, precision) {
    if (src.substring(0, 9) !== 'precision') {
      return 'precision ' + precision + ' float;\n' + src;
    }

    return src;
  };

  var setPrecision_1 = setPrecision;

  /**
   * Extracts the attributes
   * @class
   * @memberof PIXI.glCore.shader
   * @param gl {WebGLRenderingContext} The current WebGL rendering context
   * @param uniforms {Array} @mat ?
   * @return attributes {Object}
   */
  var generateUniformAccessObject = function generateUniformAccessObject(gl, uniformData) {
    // this is the object we will be sending back.
    // an object hierachy will be created for structs
    var uniforms = {
      data: {}
    };
    uniforms.gl = gl;
    var uniformKeys = Object.keys(uniformData);

    for (var i = 0; i < uniformKeys.length; i++) {
      var fullName = uniformKeys[i];
      var nameTokens = fullName.split('.');
      var name = nameTokens[nameTokens.length - 1];
      var uniformGroup = getUniformGroup(nameTokens, uniforms);
      var uniform = uniformData[fullName];
      uniformGroup.data[name] = uniform;
      uniformGroup.gl = gl;
      Object.defineProperty(uniformGroup, name, {
        get: generateGetter(name),
        set: generateSetter(name, uniform)
      });
    }

    return uniforms;
  };

  var generateGetter = function generateGetter(name) {
    var template = getterTemplate.replace('%%', name);
    return new Function(template); // jshint ignore:line
  };

  var generateSetter = function generateSetter(name, uniform) {
    var template = setterTemplate.replace(/%%/g, name);
    var setTemplate;

    if (uniform.size === 1) {
      setTemplate = GLSL_TO_SINGLE_SETTERS[uniform.type];
    } else {
      setTemplate = GLSL_TO_ARRAY_SETTERS[uniform.type];
    }

    if (setTemplate) {
      template += "\nthis.gl." + setTemplate + ";";
    }

    return new Function('value', template); // jshint ignore:line
  };

  var getUniformGroup = function getUniformGroup(nameTokens, uniform) {
    var cur = uniform;

    for (var i = 0; i < nameTokens.length - 1; i++) {
      var o = cur[nameTokens[i]] || {
        data: {}
      };
      cur[nameTokens[i]] = o;
      cur = o;
    }

    return cur;
  };

  var getterTemplate = ['return this.data.%%.value;'].join('\n');
  var setterTemplate = ['this.data.%%.value = value;', 'var location = this.data.%%.location;'].join('\n');
  var GLSL_TO_SINGLE_SETTERS = {
    'float': 'uniform1f(location, value)',
    'vec2': 'uniform2f(location, value[0], value[1])',
    'vec3': 'uniform3f(location, value[0], value[1], value[2])',
    'vec4': 'uniform4f(location, value[0], value[1], value[2], value[3])',
    'int': 'uniform1i(location, value)',
    'ivec2': 'uniform2i(location, value[0], value[1])',
    'ivec3': 'uniform3i(location, value[0], value[1], value[2])',
    'ivec4': 'uniform4i(location, value[0], value[1], value[2], value[3])',
    'bool': 'uniform1i(location, value)',
    'bvec2': 'uniform2i(location, value[0], value[1])',
    'bvec3': 'uniform3i(location, value[0], value[1], value[2])',
    'bvec4': 'uniform4i(location, value[0], value[1], value[2], value[3])',
    'mat2': 'uniformMatrix2fv(location, false, value)',
    'mat3': 'uniformMatrix3fv(location, false, value)',
    'mat4': 'uniformMatrix4fv(location, false, value)',
    'sampler2D': 'uniform1i(location, value)'
  };
  var GLSL_TO_ARRAY_SETTERS = {
    'float': 'uniform1fv(location, value)',
    'vec2': 'uniform2fv(location, value)',
    'vec3': 'uniform3fv(location, value)',
    'vec4': 'uniform4fv(location, value)',
    'int': 'uniform1iv(location, value)',
    'ivec2': 'uniform2iv(location, value)',
    'ivec3': 'uniform3iv(location, value)',
    'ivec4': 'uniform4iv(location, value)',
    'bool': 'uniform1iv(location, value)',
    'bvec2': 'uniform2iv(location, value)',
    'bvec3': 'uniform3iv(location, value)',
    'bvec4': 'uniform4iv(location, value)',
    'sampler2D': 'uniform1iv(location, value)'
  };
  var generateUniformAccessObject_1 = generateUniformAccessObject;

  /**
   * Helper class to create a webGL Shader
   *
   * @class
   * @memberof PIXI.glCore
   * @param gl {WebGLRenderingContext}
   * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
   * @param fragmentSrc {string|string[]} The fragment shader source as an array of strings.
   * @param precision {precision]} The float precision of the shader. Options are 'lowp', 'mediump' or 'highp'.
   * @param attributeLocations {object} A key value pair showing which location eact attribute should sit eg {position:0, uvs:1}
   */


  var Shader = function Shader(gl, vertexSrc, fragmentSrc, precision, attributeLocations) {
    /**
     * The current WebGL rendering context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    if (precision) {
      vertexSrc = setPrecision_1(vertexSrc, precision);
      fragmentSrc = setPrecision_1(fragmentSrc, precision);
    }
    /**
     * The shader program
     *
     * @member {WebGLProgram}
     */
    // First compile the program..


    this.program = compileProgram_1(gl, vertexSrc, fragmentSrc, attributeLocations);
    /**
     * The attributes of the shader as an object containing the following properties
     * {
     * 	type,
     * 	size,
     * 	location,
     * 	pointer
     * }
     * @member {Object}
     */
    // next extract the attributes

    this.attributes = extractAttributes_1(gl, this.program);
    this.uniformData = extractUniforms_1(gl, this.program);
    /**
     * The uniforms of the shader as an object containing the following properties
     * {
     * 	gl,
     * 	data
     * }
     * @member {Object}
     */

    this.uniforms = generateUniformAccessObject_1(gl, this.uniformData);
  };
  /**
   * Uses this shader
   */


  Shader.prototype.bind = function () {
    this.gl.useProgram(this.program);
  };
  /**
   * Destroys this shader
   * TODO
   */


  Shader.prototype.destroy = function () {
    this.attributes = null;
    this.uniformData = null;
    this.uniforms = null;
    var gl = this.gl;
    gl.deleteProgram(this.program);
  };

  var GLShader = Shader;

  // state object//

  /**
   * Helper class to work with WebGL VertexArrayObjects (vaos)
   * Only works if WebGL extensions are enabled (they usually are)
   *
   * @class
   * @memberof PIXI.glCore
   * @param gl {WebGLRenderingContext} The current WebGL rendering context
   */


  function VertexArrayObject(gl, state) {
    this.nativeVaoExtension = null;

    if (!VertexArrayObject.FORCE_NATIVE) {
      this.nativeVaoExtension = gl.getExtension('OES_vertex_array_object') || gl.getExtension('MOZ_OES_vertex_array_object') || gl.getExtension('WEBKIT_OES_vertex_array_object');
    }

    this.nativeState = state;

    if (this.nativeVaoExtension) {
      this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
      var maxAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS); // VAO - overwrite the state..

      this.nativeState = {
        tempAttribState: new Array(maxAttribs),
        attribState: new Array(maxAttribs)
      };
    }
    /**
     * The current WebGL rendering context
     *
     * @member {WebGLRenderingContext}
     */


    this.gl = gl;
    /**
     * An array of attributes
     *
     * @member {Array}
     */

    this.attributes = [];
    /**
     * @member {PIXI.glCore.GLBuffer}
     */

    this.indexBuffer = null;
    /**
     * A boolean flag
     *
     * @member {Boolean}
     */

    this.dirty = false;
  }

  VertexArrayObject.prototype.constructor = VertexArrayObject;
  var VertexArrayObject_1 = VertexArrayObject;
  /**
  * Some devices behave a bit funny when using the newer extensions (im looking at you ipad 2!)
  * If you find on older devices that things have gone a bit weird then set this to true.
  */

  /**
   * Lets the VAO know if you should use the WebGL extension or the native methods.
   * Some devices behave a bit funny when using the newer extensions (im looking at you ipad 2!)
   * If you find on older devices that things have gone a bit weird then set this to true.
   * @static
   * @property {Boolean} FORCE_NATIVE
   */

  VertexArrayObject.FORCE_NATIVE = false;
  /**
   * Binds the buffer
   */

  VertexArrayObject.prototype.bind = function () {
    if (this.nativeVao) {
      this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);

      if (this.dirty) {
        this.dirty = false;
        this.activate();
      }
    } else {
      this.activate();
    }

    return this;
  };
  /**
   * Unbinds the buffer
   */


  VertexArrayObject.prototype.unbind = function () {
    if (this.nativeVao) {
      this.nativeVaoExtension.bindVertexArrayOES(null);
    }

    return this;
  };
  /**
   * Uses this vao
   */


  VertexArrayObject.prototype.activate = function () {
    var gl = this.gl;
    var lastBuffer = null;

    for (var i = 0; i < this.attributes.length; i++) {
      var attrib = this.attributes[i];

      if (lastBuffer !== attrib.buffer) {
        attrib.buffer.bind();
        lastBuffer = attrib.buffer;
      }

      gl.vertexAttribPointer(attrib.attribute.location, attrib.attribute.size, attrib.type || gl.FLOAT, attrib.normalized || false, attrib.stride || 0, attrib.start || 0);
    }

    setVertexAttribArrays_1(gl, this.attributes, this.nativeState);

    if (this.indexBuffer) {
      this.indexBuffer.bind();
    }

    return this;
  };
  /**
   *
   * @param buffer     {PIXI.gl.GLBuffer}
   * @param attribute  {*}
   * @param type       {String}
   * @param normalized {Boolean}
   * @param stride     {Number}
   * @param start      {Number}
   */


  VertexArrayObject.prototype.addAttribute = function (buffer, attribute, type, normalized, stride, start) {
    this.attributes.push({
      buffer: buffer,
      attribute: attribute,
      location: attribute.location,
      type: type || this.gl.FLOAT,
      normalized: normalized || false,
      stride: stride || 0,
      start: start || 0
    });
    this.dirty = true;
    return this;
  };
  /**
   *
   * @param buffer   {PIXI.gl.GLBuffer}
   */


  VertexArrayObject.prototype.addIndex = function (buffer
  /*, options*/
  ) {
    this.indexBuffer = buffer;
    this.dirty = true;
    return this;
  };
  /**
   * Unbinds this vao and disables it
   */


  VertexArrayObject.prototype.clear = function () {
    // var gl = this.gl;
    // TODO - should this function unbind after clear?
    // for now, no but lets see what happens in the real world!
    if (this.nativeVao) {
      this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);
    }

    this.attributes.length = 0;
    this.indexBuffer = null;
    return this;
  };
  /**
   * @param type  {Number}
   * @param size  {Number}
   * @param start {Number}
   */


  VertexArrayObject.prototype.draw = function (type, size, start) {
    var gl = this.gl;

    if (this.indexBuffer) {
      gl.drawElements(type, size || this.indexBuffer.data.length, gl.UNSIGNED_SHORT, (start || 0) * 2);
    } else {
      // TODO need a better way to calculate size..
      gl.drawArrays(type, start, size || this.getSize());
    }

    return this;
  };
  /**
   * Destroy this vao
   */


  VertexArrayObject.prototype.destroy = function () {
    // lose references
    this.gl = null;
    this.indexBuffer = null;
    this.attributes = null;
    this.nativeState = null;

    if (this.nativeVao) {
      this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao);
    }

    this.nativeVaoExtension = null;
    this.nativeVao = null;
  };

  VertexArrayObject.prototype.getSize = function () {
    var attrib = this.attributes[0];
    return attrib.buffer.data.length / (attrib.stride / 4 || attrib.attribute.size);
  };

  var shader = {
    compileProgram: compileProgram_1,
    defaultValue: defaultValue_1,
    extractAttributes: extractAttributes_1,
    extractUniforms: extractUniforms_1,
    generateUniformAccessObject: generateUniformAccessObject_1,
    setPrecision: setPrecision_1,
    mapSize: mapSize_1,
    mapType: mapType
  };

  var src = createCommonjsModule(function (module) {
  var gl = {
    createContext: createContext_1,
    setVertexAttribArrays: setVertexAttribArrays_1,
    GLBuffer: GLBuffer,
    GLFramebuffer: GLFramebuffer,
    GLShader: GLShader,
    GLTexture: GLTexture,
    VertexArrayObject: VertexArrayObject_1,
    shader: shader
  }; // Export for Node-compatible environments

  if ( module.exports) {
    // Export the module
    module.exports = gl;
  } // Add to the browser window pixi.gl


  if (typeof window !== 'undefined') {
    // add the window object
    window.PIXI = window.PIXI || {};
    window.PIXI.glCore = gl;
  }
  });

  ////import PIXI from 'pixi.js';//'vendor/pixi';
  var Fragment$7 = require('./NoiseFilter.frag');

  var DEFAULT_VERTEX_PROGRAM = require('./_defaultProgram.vert');
  var core = PIXI;
  var ticker = PIXI.ticker.shared;

  function Filter() {
    var uniforms = {};
    uniforms.resolution = {
      type: '2f',
      value: {
        x: 8,
        y: 2
      }
    };
    uniforms.nIntensity = {
      type: '1f',
      value: 0.005
    };
    uniforms.shift = {
      type: '1f',
      value: 0
    };
    uniforms.time = {
      type: '1f',
      value: 0
    };
    uniforms.speed = {
      type: '1f',
      value: 0.2
    };
    uniforms.noiseSampler = {
      type: 'sampler2D',
      value: null
    };
    core.Filter.call(this, DEFAULT_VERTEX_PROGRAM, Fragment$7, uniforms);
    this.passes = 1; //  var time = (10+PIXI.ticker.shared.elapsedMS);
    //this.noise = 1
  }

  Filter.prototype = Object.create(core.Filter.prototype); //Object.create(core.AbstractFilter.prototype);

  Filter.prototype.constructor = Filter;
  Object.defineProperties(Filter.prototype, {
    time: {
      get: function get() {
        return this.uniforms.time; //.value;
      },
      set: function set(value) {
        //this.uniformData.noise.value = value + 0.0;
        this.uniforms.time = value;
      }
    },
    noiseSampler: {
      get: function get() {
        return this.uniforms.noiseSampler; //.value;
      },
      set: function set(value) {
        //this.uniformData.noise.value = value + 0.0;
        this.uniforms.noiseSampler = value;
      }
    }
  });
  var filter = new Filter(); //let filter2 = new GLCore.GLShader(gl,DEFAULT_VERTEX_PROGRAM,Fragment);

  var i = 0;

  var NoiseFilter = /*#__PURE__*/function (_Component) {
    _inherits(NoiseFilter, _Component);

    var _super = _createSuper(NoiseFilter);

    function NoiseFilter(props) {
      var _this;

      _classCallCheck(this, NoiseFilter);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "animateFilter", function () {
        var container = _this.refs.filter; //  console.log('pause3:',this.props.pause)

        if (_this.props.pause) { return; }

        if (i > 6) {
          //if(i> 6){
          //filter.noise = ticker.lastTime;
          container.filters[0].time = ticker.lastTime; //console.log('noise',filter.noise)

          i = 0;
        }

        i++;
      });

      _this.filter = filter; // new Filter()

      return _this;
    }

    _createClass(NoiseFilter, [{
      key: "componentWillMount",
      value: function componentWillMount() {}
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var container = this.refs.filter;
        var texture = new PIXI.Texture.fromImage('/assets/noise/tex1.png'); //  texture.renderable = false;

        texture.baseTexture.on('loaded', function () {
          console.log('texture', texture.width, texture.height);
          container.filters = [filter];
          container.filters[0].noiseSampler = texture;
          PIXI.ticker.shared.add(_this2.animateFilter);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        PIXI.ticker.shared.remove(this.animateFilter);
      }
    }, {
      key: "render",
      value: function render() {
        //this.filter.time = ticker.lastTime;
        return /*#__PURE__*/React__default['default'].createElement("container", {
          ref: 'filter'
        }, this.props.children);
      }
    }]);

    return NoiseFilter;
  }(React.Component);
  //   //chromaFilter.size  = 1;
  //   var time = PIXI.ticker.shared.elapsedMS
  // 	noiseFilter.time = time;
  //
  //     console.log('NOISE TIME',time)
  //     let filters =	[noiseFilter ];
  // 	return  <Container  filters={ filters } >{props.children}</Container>
  // }

  var Fragment$8 = require('./ParrallaxHoverFilter.frag');

  var Vertext$7 = require('./ParrallaxHoverFilter.vert');
  /**
   * The ParrallaxHoverFilter applies a Gaussian blur to an object.
   * The strength of the blur can be set for x- and y-axis separately.
   *
   * @class
   * @extends PIXI.Filter
   * @memberof PIXI.filters
   */


  var ParrallaxHoverFilter = /*#__PURE__*/function (_PIXI$Filter) {
    _inherits(ParrallaxHoverFilter, _PIXI$Filter);

    var _super = _createSuper(ParrallaxHoverFilter);

    /**
     * Creates an instance of ParrallaxHoverFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof ParrallaxHoverFilter
     */
    function ParrallaxHoverFilter(resolution) {
      var _this;

      _classCallCheck(this, ParrallaxHoverFilter);

      _this = _super.call(this, Vertext$7, Fragment$8);
      _this.uniforms.dimensions = new Float32Array(2); //http://pixijs.download/dev/docs/core_renderers_webgl_managers_FilterManager.js.html#line51
      // ---> check this to allow vertical padding onlu

      _this.padding = 10; //600;
      // this.filterArea = [0,0,100,100]

      _this.passes = 1;
      _this.resolution = resolution || PIXI$1.settings.RESOLUTION; // this.autoFit = false;

      return _this;
    }
    /**
     * Applies the filter.
     *
     * @param {PIXI.FilterManager} filterManager - The manager.
     * @param {PIXI.RenderTarget} input - The input target.
     * @param {PIXI.RenderTarget} output - The output target.
     */


    _createClass(ParrallaxHoverFilter, [{
      key: "apply",
      value: function apply(filterManager, input, output, clear) {
        /** removes padding x */
        // input.sourceFrame.x = 0;
        // input.sourceFrame.width = input.sourceFrame.width  - this.padding;

        /** end removes padding x */
        var width = input.sourceFrame.width;
        var height = input.sourceFrame.height;
        this.uniforms.dimensions[0] = width; // - (this.padding*2);

        this.uniforms.dimensions[1] = height; //  - (this.padding*2);

        this.uniforms.aspect = height / width;
        this.uniforms.padding = this.padding; // in pixels
        // this.uniforms.columnWidth = 25;//window.innerWidth
        // this.uniforms.tx = input.sourceFrame.x;
        //.39

        this.uniforms.mapSampler = input.texture; // console.log('cacl:',input)
        // var projectionMatrix = [0.0025380710139870644, 0, 0, 0, -0.0035587188322097063, 0, -1, 1, 1]
        // this.transform.updateTransform(this.parent.transform);
        // draw the filter...

        filterManager.applyFilter(this, input, output, clear);
        /*
                dimension: 1500, 1400];
        filterClap: [0, 0, 0.73193359375, 0.68310546875];
        filterArea:
            location: WebGLUniformLocation {}
            size: 1
            type: "vec4"
            value: Float32Array(4) [2048, 2048, -600, -600]
        */
        // -0.20000000000000007
        //this.uniforms.dimensions.x,filterManager.shaderCache[19].data);//,this.uniforms.aspect, this.padding,input.sourceFrame)
        // const renderTarget = filterManager.getRenderTarget(true);
        // filterManager.returnRenderTarget(renderTarget);
      }
    }, {
      key: "addTexture",
      value: function addTexture(texture, name) {
        // console.log('addTexture',sprite,name)
        this.uniforms[name] = texture; //sprite._texture   
      }
    }, {
      key: "disp",
      set: function set(sprite) {
        this.uniforms['disp'] = sprite._texture;
      }
    }, {
      key: "texture",
      set: function set(sprite) {
        this.uniforms['texture'] = sprite._texture;
      }
    }, {
      key: "texture2",
      set: function set(sprite) {
        // console.log('mouseX',value)
        // value[1] = value[1] *1
        this.uniforms['texture2'] = sprite._texture;
      }
    }, {
      key: "mouse",
      get: function get() {
        return this.uniforms.uMouse;
      },
      set: function set(value) {
        // console.log('mouseX',value)
        // value[1] = value[1] *1
        this.uniforms.uMouse = value;
      }
    }, {
      key: "offset",
      get: function get() {
        return this.uniforms.offset;
      },
      set: function set(value) {
        // console.log('offset',value)
        // value[1] = value[1] *1
        this.uniforms.offset = value;
      }
    }, {
      key: "worldTransform",
      set: function set(worldTransform) {
        // console.log('worldTransform',worldTransform.tx,worldTransform.toArray())   
        this._worldTransform = worldTransform; //.toArray();

        this.uniforms.tx = worldTransform.tx;
      },
      get: function get() {
        return this._.worldTransform;
      }
    }]);

    return ParrallaxHoverFilter;
  }(PIXI$1.Filter);

  //http://super16.dk/medlemmer/glen-bay-grant
  //https://gl-transitions.com/editor/directionalwarp?direction=-1,0
  //https://gl-transitions.com/editor/crosswarp
  // !!!!
  //https://videohive.net/item/handy-seamless-transitions-pack-script/18967340?irgwc=1&clickid=0giS-aX0JQ2eUc10bqVBhWPIUkgzyHwI-QdBQs0&iradid=275988&irpid=1143794&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1143794&utm_medium=affiliate&utm_source=impact_radius

  var loader$2 = PIXI$1.loader;

  var ParrallaxHoverFilterComponent = /*#__PURE__*/function (_Component) {
    _inherits(ParrallaxHoverFilterComponent, _Component);

    var _super = _createSuper(ParrallaxHoverFilterComponent);

    function ParrallaxHoverFilterComponent(props) {
      var _this;

      _classCallCheck(this, ParrallaxHoverFilterComponent);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "t", 0);

      _defineProperty(_assertThisInitialized(_this), "handleMouse", function (e) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            filter = _assertThisInitialize.filter;

        var progress = e.clientX / _this.filter.uniforms.dimensions[0];
        var k = 2;
        var x = progress; //(progress * 2) % 1;//Math.abs(0.5 - progress);

        _this.t += 3;
        var parabola = Math.pow(4.0 * x * (1.0 - x), k);
        plot__default['default']('mousex', _this.t, parabola * 100);
        plot__default['default']('pasrabola', _this.t, parabola * 100, '#ffff00');
        console.log('progress', progress, 'parabola', parabola);
        _this.filter.uniforms.progress = progress;
        _this.filter.uniforms.parabola = parabola;
        _this.filter.uniforms.effectFactor = e.clientX / 100; // this.filter.mouse =  [e.clientX/window.innerWidth,e.clientY/window.innerHeight];
      });

      _defineProperty(_assertThisInitialized(_this), "_loader", []);

      _defineProperty(_assertThisInitialized(_this), "_loaderQue", []);

      _defineProperty(_assertThisInitialized(_this), "add", function (name, url, index) {
        var hasAsset = _this._loader.find(function (x) {
          return x.name === name;
        }) ? true : false; // console.log('add',url,name,hasAsset)//

        if (!hasAsset) {
          if (!loader$2.isLoading) {
            _this._loader.push({
              url: url,
              name: name,
              index: index
            });

            loader$2.add(url, url, index);
          } else {
            _this._loaderQue.push({
              url: url,
              name: name,
              index: index
            });
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "update", function (nextProps) {
        _this.filter.offset = nextProps.offset;

        if (nextProps.texture) {
          loader$2 = new PIXI$1.loaders.Loader();
          nextProps.texture.forEach(function (file, i) {
            var name = Object.keys(file)[0];
            var url = file[name];
            console.log('texture', name, url, i);

            _this.add(name, url, i);
          });
        }

        loader$2.once('complete', function () {
          loader$2.isLoading = false;

          if (_this._loaderQue.length > 0) {
            _this._loaderQue.forEach(function (item) {
              return _this.add(item.name, item.url, item.index);
            });
          }
        });

        if (!loader$2.isLoading) {
          loader$2.isLoading = true;
          loader$2.load(function (data) {
            return _this.handleLoaded(data);
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleError", function (error, loader) {
        console.log('handleError', error, loader);
        loader.isLoading = false;
      });

      _defineProperty(_assertThisInitialized(_this), "handleLoaded", function (loader) {
        _this._loader.forEach(function (_ref) {
          var url = _ref.url,
              name = _ref.name,
              index = _ref.index;
          console.log('handleLoaded', index);
          var resource = loader.resources[url];

          if (resource) {
            var texture = resource.texture;

            _this.filter.addTexture(texture, name);
          } else {
            console.alert("Texture does not exist: ".concat(url));
          }
        });
      });

      _this.handleMouse.bind(_assertThisInitialized(_this));

      _this.filter = new ParrallaxHoverFilter();
      return _this;
    }

    _createClass(ParrallaxHoverFilterComponent, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        window.addEventListener('mousemove', this.handleMouse);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.update(nextProps);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.update(this.props);
        loader$2.on('error', this.handleError, this); // this.container.anchor.set(0.5);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {}
    }, {
      key: "renderChidren",
      value: function renderChidren(children) {
        var _this2 = this;

        return React__default['default'].Children.map(children, function (child) {
          return /*#__PURE__*/React__default['default'].cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
            filters: [_this2.filter]
          }), child.props.children);
        });
      }
    }, {
      key: "render",
      // render() {
      // 	return <div ref={ref=>this.container=ref}  filters={[this.filter]}>{this.props.children}</div>
      // }
      value: function render() {
        console.log('(this.props.children', this.props.children);
        return this.renderChidren(this.props.children);
      }
    }]);

    return ParrallaxHoverFilterComponent;
  }(React.Component);
  ParrallaxHoverFilterComponent.defaultProps = {
    pause: false,
    offset: 0
  };

  var Fragment$9 = require('./ScanLineFilter.frag');

  var Vertext$8 = require('./ScanLineFilter.vert'); ////import PIXI from 'pixi.js';//'vendor/pixi';
  var ticker$1 = PIXI.ticker.shared;

  function Filter$1(sprite) {
    //var maskMatrix = new core.Matrix();
    //sprite.renderable = false;
    PIXI.Filter.call(this, null, Fragment$9, {
      //tDiffuse:   { type: 't', value: null },
      // time:       { type: '1f', value: 0.0 },
      // nIntensity: { type: '1f', value: 0.15 },  // default value 0.15
      // sIntensity: { type: '1f', value: 0.0 },
      // sCount:     { type: '1f', value: 10 },
      // grayscale:  { type: 'i', value: 0 }
      time: {
        type: '1f',
        value: 0.0
      },
      nIntensity: {
        type: '1f',
        value: 0.5
      },
      // default value 0.15
      sIntensity: {
        type: '1f',
        value: 0.5
      },
      sCount: {
        type: '1f',
        value: 1
      },
      grayscale: {
        type: 'i',
        value: 1
      }
    }); //this.maskSprite = sprite;
    //this.maskMatrix = maskMatrix;

    this.passes = 1;
    this._time = 1;
  }

  Filter$1.prototype = Object.create(PIXI.Filter.prototype);
  Filter$1.prototype.constructor = Filter$1;
  module.exports = Filter$1;
  Object.defineProperties(Filter$1.prototype, {
    time: {
      get: function get() {
        return this.uniforms.time.value;
      },
      set: function set(value) {
        this.uniforms.time.value = value;
      }
    },
    nIntensity: {
      get: function get() {
        return this.uniforms.nIntensity.value;
      },
      set: function set(value) {
        this.uniforms.nIntensity.value = value;
      }
    },
    sIntensity: {
      get: function get() {
        return this.uniforms.sIntensity.value;
      },
      set: function set(value) {
        this.uniforms.sIntensity.value = value;
      }
    }
  });

  var ScanLineFilter = /*#__PURE__*/function (_Component) {
    _inherits(ScanLineFilter, _Component);

    var _super = _createSuper(ScanLineFilter);

    function ScanLineFilter(props) {
      var _this;

      _classCallCheck(this, ScanLineFilter);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "animateFilter", function () {
        var container = _this.refs.filter; //  console.log('pause3:',this.props.pause)

        if (_this.props.pause) { return; }
        _this.filter.time = ticker$1.lastTime;
        container.filters = [_this.filter];
      });

      _this.filter = new Filter$1();
      return _this;
    }

    _createClass(ScanLineFilter, [{
      key: "componentWillMount",
      value: function componentWillMount() {}
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        PIXI.ticker.shared.add(this.animateFilter);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        PIXI.ticker.shared.remove(this.animateFilter);
      }
    }, {
      key: "render",
      value: function render() {
        this.filter.time = ticker$1.lastTime;
        return /*#__PURE__*/React__default['default'].createElement(reactPixiRenderer.Container, {
          ref: 'filter'
        }, this.props.children);
      }
    }]);

    return ScanLineFilter;
  }(React.Component);
  ScanLineFilter.defaultProps = {
    pause: false
  };

  var Fragment$a = require('./VHSFilter.frag');

  var Vertext$9 = require('./VHSFilter.vert');

  var ticker$2 = PIXI$1.ticker.shared;
  var core$1 = PIXI__namespace;

  function Filter$2(sprite) {
    //var maskMatrix = new core.Matrix();
    //sprite.renderable = false;
    core$1.AbstractFilter.call(this, Vertext$9, Fragment$a, {
      //mapSampler:     { type: 'sampler2D', value: sprite.texture },
      //otherMatrix:    { type: 'mat3', value: maskMatrix.toArray(true) },
      scale: {
        type: 'v2',
        value: {
          x: 100,
          y: 100
        }
      },
      time: {
        type: '1f',
        value: 1
      },
      speed: {
        type: '1f',
        value: 0.0004
      },
      distortion: {
        type: '1f',
        value: 0.21
      },
      distortion2: {
        type: '1f',
        value: 10.10
      },
      rollSpeed: {
        type: '1f',
        value: 0.000
      },
      waveHeight: {
        type: '1f',
        value: 1
      }
    }); //this.maskSprite = sprite;
    //this.maskMatrix = maskMatrix;

    this.passes = 3;
    this._time = 10;
  }

  Filter$2.prototype = Object.create(core$1.AbstractFilter.prototype);
  Filter$2.prototype.constructor = Filter$2;
  Object.defineProperties(Filter$2.prototype, {
    time: {
      get: function get() {
        return this.uniforms.time;
      },
      set: function set(value) {
        this.uniforms.time = value;
      }
    },
    distortion2: {
      get: function get() {
        return this.uniforms.distortion2;
      },
      set: function set(value) {
        this.uniforms.distortion2 = value;
      }
    },
    waveHeight: {
      get: function get() {
        return this.uniforms.waveHeight;
      },
      set: function set(value) {
        this.uniforms.waveHeight = value;
      }
    },
    distortion: {
      get: function get() {
        return this.uniforms.distortion;
      },
      set: function set(value) {
        this.uniforms.distortion = value;
      }
    },
    rollSpeed: {
      get: function get() {
        return this.uniforms.rollSpeed;
      },
      set: function set(value) {
        this.uniforms.rollSpeed = value;
      }
    }
  }); // module.exports = Filter;

  var VHSFilter = /*#__PURE__*/function (_Component) {
    _inherits(VHSFilter, _Component);

    var _super = _createSuper(VHSFilter);

    function VHSFilter(props) {
      var _this;

      _classCallCheck(this, VHSFilter);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "animateFilter", function () {
        var container = _this.container; //  console.log('pause3:',this.props.pause)

        if (_this.props.pause) { return; }
        _this.filter.time = ticker$2.lastTime;
        _this.filter.distortion2 = _this.props.distortion2;
        _this.filter.waveHeight = _this.props.waveHeight;
        _this.filter.distortion = _this.props.distortion;
        _this.filter.rollSpeed = _this.props.rollSpeed; //console.log(this.props,ticker.lastTime)
      });

      _this.filter = new Filter$2();
      return _this;
    }

    _createClass(VHSFilter, [{
      key: "componentWillMount",
      value: function componentWillMount() {}
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        PIXI$1.ticker.shared.add(this.animateFilter);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        PIXI$1.ticker.shared.remove(this.animateFilter);
      }
    }, {
      key: "renderChidren",
      value: function renderChidren(children) {
        var _this2 = this;

        return React__default['default'].Children.map(children, function (child) {
          return /*#__PURE__*/React__default['default'].cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
            filters: [_this2.filter]
          }), child.children);
        });
      }
    }, {
      key: "render",
      value: function render() {
        console.log('(this.props.children', this.props.children);
        return this.renderChidren(this.props.children);
      }
    }]);

    return VHSFilter;
  }(React.Component); // _self.vhs_filter.distortion2 = 5;
  VHSFilter.defaultProps = {
    pause: false,
    distortion: 5,
    distortion2: 20,
    waveHeight: 50,
    rollSpeed: .000009,
    amount: .02
  };

  var Fragment$b = require('./WaterBeeldFilter.frag');

  var Vertext$a = require('./WaterBeeldFilter.vert');
  /**
   * The WaterBeeldFilter applies a Gaussian blur to an object.
   * The strength of the blur can be set for x- and y-axis separately.
   *
   * @class
   * @extends PIXI.Filter
   * @memberof PIXI.filters
   */


  var WaterBeeldFilter = /*#__PURE__*/function (_PIXI$Filter) {
    _inherits(WaterBeeldFilter, _PIXI$Filter);

    var _super = _createSuper(WaterBeeldFilter);

    /**
     * Creates an instance of WaterBeeldFilter.
     * @param {*} speed
     * @param {*} resolution
     * @memberof WaterBeeldFilter
     */
    function WaterBeeldFilter(resolution) {
      var _this;

      _classCallCheck(this, WaterBeeldFilter);

      _this = _super.call(this, Vertext$a, Fragment$b);
      _this.uniforms.dimensions = new Float32Array(2); //http://pixijs.download/dev/docs/core_renderers_webgl_managers_FilterManager.js.html#line51
      // ---> check this to allow vertical padding onlu

      _this.padding = 200;
      _this.passes = 1;
      _this.resolution = resolution || PIXI$1.settings.RESOLUTION;
      _this.autoFit = false;
      return _this;
    }
    /**
     * Applies the filter.
     *
     * @param {PIXI.FilterManager} filterManager - The manager.
     * @param {PIXI.RenderTarget} input - The input target.
     * @param {PIXI.RenderTarget} output - The output target.
     */


    _createClass(WaterBeeldFilter, [{
      key: "apply",
      value: function apply(filterManager, input, output, clear) {
        var width = input.sourceFrame.width;
        var height = input.sourceFrame.height;
        this.uniforms.dimensions[0] = width;
        this.uniforms.dimensions[1] = height;
        this.uniforms.aspect = height / width;
        this.uniforms.padding = this.padding;
        filterManager.applyFilter(this, input, output, clear); // const renderTarget = filterManager.getRenderTarget(true);
        // filterManager.returnRenderTarget(renderTarget);
      }
    }, {
      key: "addTexture",
      value: function addTexture(texture, name) {
        this.uniforms[name] = texture;
      }
    }, {
      key: "mouse",
      get: function get() {
        return this.uniforms.uMouse;
      },
      set: function set(value) {
        // console.log('mouseX',value)
        // value[1] = value[1] *1
        this.uniforms.uMouse = value;
      }
    }, {
      key: "offset",
      get: function get() {
        return this.uniforms.offset;
      },
      set: function set(value) {
        // console.log('offset',value)
        // value[1] = value[1] *1
        this.uniforms.offset = value;
      }
    }, {
      key: "worldTransform",
      set: function set(worldTransform) {
        this._worldTransform = worldTransform;
        this.uniforms.tx = worldTransform.tx;
      },
      get: function get() {
        return this._.worldTransform;
      }
    }]);

    return WaterBeeldFilter;
  }(PIXI$1.Filter);

  //http://www.lafamiliaxsiempre.cl/lookbook
  //http://super16.dk/medlemmer/glen-bay-grant
  //https://gl-transitions.com/editor/directionalwarp?direction=-1,0
  //https://gl-transitions.com/editor/crosswarp
  // !!!!
  //https://videohive.net/item/handy-seamless-transitions-pack-script/18967340?irgwc=1&clickid=0giS-aX0JQ2eUc10bqVBhWPIUkgzyHwI-QdBQs0&iradid=275988&irpid=1143794&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1143794&utm_medium=affiliate&utm_source=impact_radius

  var loader$3 = PIXI$1.loader;

  var ReactWaterBeeldFilter = /*#__PURE__*/function (_Component) {
    _inherits(ReactWaterBeeldFilter, _Component);

    var _super = _createSuper(ReactWaterBeeldFilter);

    function ReactWaterBeeldFilter(props) {
      var _this;

      _classCallCheck(this, ReactWaterBeeldFilter);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "t", 0);

      _defineProperty(_assertThisInitialized(_this), "handleMouse", function (e) {
        // const {filter} = this;
        var progress = e.clientX / _this.filter.uniforms.dimensions[0]; // plot('mousex',this.t,(parabola*100))
        //plot('pasrabola',this.t,parabola*100,'#ffff00')

        _this.filter.uniforms.progress = progress; // this.filter.uniforms.parabola = parabola ;

        _this.filter.uniforms.effectFactor = e.clientX / 100; // this.filter.mouse =  [e.clientX/window.innerWidth,e.clientY/window.innerHeight];
      });

      _defineProperty(_assertThisInitialized(_this), "_loader", []);

      _defineProperty(_assertThisInitialized(_this), "_loaderQue", []);

      _defineProperty(_assertThisInitialized(_this), "add", function (name, url, index) {
        var hasAsset = _this._loader.find(function (x) {
          return x.url === url;
        }) ? true : false; // console.log('add',url,name,hasAsset)//

        if (!hasAsset) {
          if (!loader$3.isLoading) {
            _this._loader.push({
              url: url,
              name: name,
              index: index
            });

            loader$3.add(url, url, index);
          } else {
            _this._loaderQue.push({
              url: url,
              name: name,
              index: index
            });
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleError", function (error, loader) {
        console.log('handleError', error, loader);
        loader.isLoading = false;
      });

      _defineProperty(_assertThisInitialized(_this), "handleLoaded", function (loader) {
        _this._loader.forEach(function (_ref) {
          var url = _ref.url,
              name = _ref.name,
              index = _ref.index;
          console.log('handleLoaded', index);
          var resource = loader.resources[url];

          if (resource) {
            var texture = resource.texture;

            _this.filter.addTexture(texture, name);
          } else {
            console.alert("Texture does not exist: ".concat(url));
          }
        });
      });

      _defineProperty(_assertThisInitialized(_this), "update", function (nextProps) {
        _this.filter.offset = nextProps.offset;

        if (nextProps.texture) {
          loader$3 = new PIXI$1.loaders.Loader();
          nextProps.texture.forEach(function (file, i) {
            var name = Object.keys(file)[0];
            var url = file[name];
            console.log('texture', name, url, i);

            _this.add(name, url, i);
          });
        }

        loader$3.once('complete', function () {
          loader$3.isLoading = false;

          if (_this._loaderQue.length > 0) {
            _this._loaderQue.forEach(function (item) {
              return _this.add(item.name, item.url, item.index);
            });
          }
        });

        if (!loader$3.isLoading) {
          loader$3.isLoading = true;
          loader$3.load(function (data) {
            return _this.handleLoaded(data);
          });
        }
      });

      _this.handleMouse.bind(_assertThisInitialized(_this));

      _this.filter = new WaterBeeldFilter();
      return _this;
    }

    _createClass(ReactWaterBeeldFilter, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        window.addEventListener('mousemove', this.handleMouse);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.update(nextProps);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.update(this.props);
        loader$3.on('error', this.handleError, this); // this.container.anchor.set(0.5);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {}
    }, {
      key: "renderChidren",
      value: function renderChidren(children) {
        var filters = [].concat(_toConsumableArray(this.props.filters), [this.filter]);
        return React__default['default'].Children.map(children, function (child) {
          return /*#__PURE__*/React__default['default'].cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
            filters: filters
          }), child.props.children);
        });
      } // render() {
      // 	return <div ref={ref=>this.container=ref}  filters={[this.filter]}>{this.props.children}</div>
      // }

    }, {
      key: "render",
      value: function render() {
        return this.renderChidren(this.props.children);
      }
    }]);

    return ReactWaterBeeldFilter;
  }(React.Component);
  ReactWaterBeeldFilter.defaultProps = {
    pause: false,
    offset: 0,
    filters: [0]
  };

  function EMPTY() {
    var baseTexture = new PIXI.BaseTexture();
    return new PIXI.Texture(baseTexture);
  }

  EMPTY.prototype.constructor = EMPTY;

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
  var ColorUtils = {
    getRandomColor: getRandomColor,
    hex2rgba: function hex2rgba(hex, opacity) {
      var r, g, b, result;
      hex = hex.replace('#', '');
      if (hex.length === 3) { hex = hex + hex; }
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
      result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
      return result;
    }
  }; //alias

  ColorUtils.random = ColorUtils.getRandomColor;

  var DeviceUtil = {
    isTouchDevice: function isTouchDevice() {
      return 'ontouchstart' in window // works on most browsers 
      || navigator.maxTouchPoints; // works on IE10/11 and Surface
    }
  };

  var Ease = /*#__PURE__*/function () {
    function Ease() {
      _classCallCheck(this, Ease);
    }

    _createClass(Ease, null, [{
      key: "getEase",
      value: function getEase(func) {
        // TODO: shitty I know... but want to get it going for now
        var text = Func[func];
        var fname = text.charAt(0).toLowerCase() + text.slice(1);
        return Ease[fname];
      }
    }, {
      key: "backIn",
      value: function backIn(time, begin, change, duration) {
        var overshoot = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
        return change * (time /= duration) * time * ((overshoot + 1) * time - overshoot) + begin;
      }
    }, {
      key: "backOut",
      value: function backOut(time, begin, change, duration) {
        var overshoot = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
        return change * ((time = time / duration - 1) * time * ((overshoot + 1) * time + overshoot) + 1) + begin;
      }
    }, {
      key: "backInOut",
      value: function backInOut(time, begin, change, duration) {
        var overshoot = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;

        if ((time = time / (duration / 2)) < 1) {
          return change / 2 * (time * time * (((overshoot *= 1.525) + 1) * time - overshoot)) + begin;
        } else {
          return change / 2 * ((time -= 2) * time * (((overshoot *= 1.525) + 1) * time + overshoot) + 2) + begin;
        }
      }
    }, {
      key: "bounceOut",
      value: function bounceOut(time, begin, change, duration) {
        if ((time /= duration) < 1 / 2.75) {
          return change * (7.5625 * time * time) + begin;
        } else if (time < 2 / 2.75) {
          return change * (7.5625 * (time -= 1.5 / 2.75) * time + 0.75) + begin;
        } else if (time < 2.5 / 2.75) {
          return change * (7.5625 * (time -= 2.25 / 2.75) * time + 0.9375) + begin;
        } else {
          return change * (7.5625 * (time -= 2.625 / 2.75) * time + 0.984375) + begin;
        }
      }
    }, {
      key: "bounceIn",
      value: function bounceIn(time, begin, change, duration) {
        return change - Ease.bounceOut(duration - time, 0, change, duration) + begin;
      }
    }, {
      key: "bounceInOut",
      value: function bounceInOut(time, begin, change, duration) {
        if (time < duration / 2) {
          return Ease.bounceIn(time * 2, 0, change, duration) * 0.5 + begin;
        } else {
          return Ease.bounceOut(time * 2 - duration, 0, change, duration) * 0.5 + change * 0.5 + begin;
        }
      }
    }, {
      key: "circIn",
      value: function circIn(time, begin, change, duration) {
        return -change * (Math.sqrt(1 - (time = time / duration) * time) - 1) + begin;
      }
    }, {
      key: "circOut",
      value: function circOut(time, begin, change, duration) {
        return change * Math.sqrt(1 - (time = time / duration - 1) * time) + begin;
      }
    }, {
      key: "circInOut",
      value: function circInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
          return -change / 2 * (Math.sqrt(1 - time * time) - 1) + begin;
        } else {
          return change / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + begin;
        }
      }
    }, {
      key: "cubicIn",
      value: function cubicIn(time, begin, change, duration) {
        return change * (time /= duration) * time * time + begin;
      }
    }, {
      key: "cubicOut",
      value: function cubicOut(time, begin, change, duration) {
        return change * ((time = time / duration - 1) * time * time + 1) + begin;
      }
    }, {
      key: "cubicInOut",
      value: function cubicInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
          return change / 2 * time * time * time + begin;
        } else {
          return change / 2 * ((time -= 2) * time * time + 2) + begin;
        }
      }
    }, {
      key: "elasticOut",
      value: function elasticOut(time, begin, change, duration) {
        var amplitude = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var period = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        var overshoot;

        if (time === 0) {
          return begin;
        } else if ((time = time / duration) === 1) {
          return begin + change;
        } else {
          if (!(period != null)) {
            period = duration * 0.3;
          }

          if (!(amplitude != null) || amplitude < Math.abs(change)) {
            amplitude = change;
            overshoot = period / 4;
          } else {
            overshoot = period / (2 * Math.PI) * Math.asin(change / amplitude);
          }

          return amplitude * Math.pow(2, -10 * time) * Math.sin((time * duration - overshoot) * (2 * Math.PI) / period) + change + begin;
        }
      }
    }, {
      key: "elasticIn",
      value: function elasticIn(time, begin, change, duration) {
        var amplitude = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var period = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        var overshoot;

        if (time === 0) {
          return begin;
        } else if ((time = time / duration) === 1) {
          return begin + change;
        } else {
          if (!(period != null)) {
            period = duration * 0.3;
          }

          if (!(amplitude != null) || amplitude < Math.abs(change)) {
            amplitude = change;
            overshoot = period / 4;
          } else {
            overshoot = period / (2 * Math.PI) * Math.asin(change / amplitude);
          }

          time -= 1;
          return -(amplitude * Math.pow(2, 10 * time)) * Math.sin((time * duration - overshoot) * (2 * Math.PI) / period) + begin;
        }
      }
    }, {
      key: "elasticInOut",
      value: function elasticInOut(time, begin, change, duration) {
        var amplitude = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var period = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        var overshoot;

        if (time === 0) {
          return begin;
        } else if ((time = time / (duration / 2)) === 2) {
          return begin + change;
        } else {
          if (!(period != null)) {
            period = duration * (0.3 * 1.5);
          }

          if (!(amplitude != null) || amplitude < Math.abs(change)) {
            amplitude = change;
            overshoot = period / 4;
          } else {
            overshoot = period / (2 * Math.PI) * Math.asin(change / amplitude);
          }

          if (time < 1) {
            return -0.5 * (amplitude * Math.pow(2, 10 * (time -= 1))) * Math.sin((time * duration - overshoot) * (2 * Math.PI / period)) + begin;
          } else {
            return amplitude * Math.pow(2, -10 * (time -= 1)) * Math.sin((time * duration - overshoot) * (2 * Math.PI) / period) + change + begin;
          }
        }
      }
    }, {
      key: "expoIn",
      value: function expoIn(time, begin, change, duration) {
        if (time === 0) {
          return begin;
        }

        return change * Math.pow(2, 10 * (time / duration - 1)) + begin;
      }
    }, {
      key: "expoOut",
      value: function expoOut(time, begin, change, duration) {
        if (time === duration) {
          return begin + change;
        }

        return change * (-Math.pow(2, -10 * time / duration) + 1) + begin;
      }
    }, {
      key: "expoInOut",
      value: function expoInOut(time, begin, change, duration) {
        if (time === 0) {
          return begin;
        } else if (time === duration) {
          return begin + change;
        } else if ((time = time / (duration / 2)) < 1) {
          return change / 2 * Math.pow(2, 10 * (time - 1)) + begin;
        } else {
          return change / 2 * (-Math.pow(2, -10 * (time - 1)) + 2) + begin;
        }
      }
    }, {
      key: "linear",
      value: function linear(time, begin, change, duration) {
        return change * time / duration + begin;
      }
    }, {
      key: "quadIn",
      value: function quadIn(time, begin, change, duration) {
        return change * (time = time / duration) * time + begin;
      }
    }, {
      key: "quadOut",
      value: function quadOut(time, begin, change, duration) {
        return -change * (time = time / duration) * (time - 2) + begin;
      }
    }, {
      key: "quadInOut",
      value: function quadInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
          return change / 2 * time * time + begin;
        } else {
          return -change / 2 * ((time -= 1) * (time - 2) - 1) + begin;
        }
      }
    }, {
      key: "quartIn",
      value: function quartIn(time, begin, change, duration) {
        return change * (time = time / duration) * time * time * time + begin;
      }
    }, {
      key: "quartOut",
      value: function quartOut(time, begin, change, duration) {
        return -change * ((time = time / duration - 1) * time * time * time - 1) + begin;
      }
    }, {
      key: "quartInOut",
      value: function quartInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
          return change / 2 * time * time * time * time + begin;
        } else {
          return -change / 2 * ((time -= 2) * time * time * time - 2) + begin;
        }
      }
    }, {
      key: "quintIn",
      value: function quintIn(time, begin, change, duration) {
        return change * (time = time / duration) * time * time * time * time + begin;
      }
    }, {
      key: "quintOut",
      value: function quintOut(time, begin, change, duration) {
        return change * ((time = time / duration - 1) * time * time * time * time + 1) + begin;
      }
    }, {
      key: "quintInOut",
      value: function quintInOut(time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
          return change / 2 * time * time * time * time * time + begin;
        } else {
          return change / 2 * ((time -= 2) * time * time * time * time + 2) + begin;
        }
      }
    }, {
      key: "sineIn",
      value: function sineIn(time, begin, change, duration) {
        return -change * Math.cos(time / duration * (Math.PI / 2)) + change + begin;
      }
    }, {
      key: "sineOut",
      value: function sineOut(time, begin, change, duration) {
        return change * Math.sin(time / duration * (Math.PI / 2)) + begin;
      }
    }, {
      key: "sineInOut",
      value: function sineInOut(time, begin, change, duration) {
        return -change / 2 * (Math.cos(Math.PI * time / duration) - 1) + begin;
      }
    }, {
      key: "quadraticBezier",
      value: function quadraticBezier(time, begin, change, duration, p1y) {
        var t = time / duration;

        var _1t = 1 - t;

        return _1t * _1t * begin + 2 * _1t * t * p1y + t * t * (begin + change);
      }
    }, {
      key: "cubicBezier",
      value: function cubicBezier(time, begin, change, duration, p1y, p2y) {
        var t = time / duration;

        var _1t = 1 - t;

        return _1t * _1t * _1t * begin + 3 * _1t * _1t * t * p1y + 3 * _1t * t * t * p2y + t * t * t * (begin + change);
      }
    }, {
      key: "bezier",
      value: function bezier(time, begin, change, duration) {
        var arguments$1 = arguments;

        var t = time / duration;

        var _1t = 1 - t;

        var cnt = (arguments.length <= 4 ? 0 : arguments.length - 4) + 1;
        var sum = 0;

        for (var i = 1; i < (arguments.length <= 4 ? 0 : arguments.length - 4); i++) {
          sum += cnt * Math.pow(_1t, cnt - i) * Math.pow(t, i) * (i + 4 < 4 || arguments$1.length <= i + 4 ? undefined : arguments$1[i + 4]);
        }

        return Math.pow(_1t, cnt) * begin + sum + Math.pow(t, cnt) * (begin + change);
      }
    }]);

    return Ease;
  }();

  var PIXIUtlis = /*#__PURE__*/function () {
    function PIXIUtlis() {
      _classCallCheck(this, PIXIUtlis);
    }

    _createClass(PIXIUtlis, null, [{
      key: "updateLayersOrder",

      /**
       * [updateLayersOrder description]
       * @param  {PIXI.DisplayObject} container updateLayersOrder call this function whenever you added a new layer/container
       * @return {[type]}           [description]
       */
      value: function updateLayersOrder(container) {
        container.children.sort(function (a, b) {
          a.zBuffer = a.zBuffer || 0;
          b.zBuffer = b.zBuffer || 0;
          return b.zBuffer - a.zBuffer;
        });
      }
    }, {
      key: "backgroundFit",

      /**
       * [backgroundFit description]
       * @param  {[type]} background [description]
       * @param  {[type]} container  [description]
       * @return {[type]}            [description]
       */
      value: function backgroundFit(background, container) {
        var imageAspect = background.width / background.height,
            containerW = container.width,
            containerH = container.height,
            containerAspect = containerW / containerH;

        if (containerW > containerH) {
          if (containerAspect < imageAspect) {
            // taller
            //console.log('taller')
            background.width = containerW;
            background.height = containerW / imageAspect; // background.x = 0
            // background.y =( containerH - background.height)/2;// -(containerW/imageAspect-containerH)/2
          } else {
            // wider
            background.height = containerH;
            background.width = containerH * imageAspect; //background.width * containerH/background.height
            // background.x = -(containerH*imageAspect-containerW)/2
            // background.y =0
          }
        } else {
          if (containerAspect < imageAspect) {
            // taller
            background.width = containerW;
            background.height = containerW / imageAspect; // background.x = 0
            // background.y =( containerH - background.height)/2;// -(containerW/imageAspect-containerH)/2
          } else {
            // wider
            background.height = containerH;
            background.width = containerH * imageAspect; //background.width * containerH/background.height
            // background.x =  -(containerH*imageAspect-containerW)/2;
            // background.y =0
          }
        } // background.x = 0;
        // background.y = 0;


        return [background.x, background.y, background.width, background.height];
      }
    }, {
      key: "backgroundFill",
      value: function backgroundFill(background, container) {
        var orig = Object.assign({}, {
          background: background,
          container: container
        });
        var imageAspect = background.width / background.height,
            containerW = container.width,
            containerH = container.height,
            containerAspect = containerW / containerH;

        if (containerW > containerH) {
          if (containerAspect < imageAspect) {
            // taller
            //console.log('taller (containerAspect) >')
            // background.height =  containerH
            // background.width = containerH * imageAspect;//background.width * containerH/background.height
            // background.x = -(containerH*imageAspect-(containerW))/2;// * container.scale.x
            // background.smoothed = false;
            // background.y = ( orig.background.height-containerH)/2;// * container.scale.x;
            var viewHeight = containerH; //(renderer.height / renderer.resolution);

            background.scale.y = viewHeight / background._texture.baseTexture.height;
            background.scale.x = background.scale.y;
            background.scale.x = background.scale.y; // background.y = -(viewHeight - background.height)/2
            // 
            // background.y =  -200
            //background.y =0

            return [background.x, background.y, background.width, background.height];
          } else {
            // wider
            //console.log('::wider (containerAspect) >',orig.background.width,orig.container.width,background.width,container.width)
            // background.width = containerW
            // background.height =  containerW / imageAspect
            // background.x = (orig.background.width-containerW)/2
            // //(background.width - container.width)/2 ;
            //
            //
            // background.y = ( containerH - background.height)/2;// -(containerW/imageAspect-containerH)/2
            var viewWidth = containerW; //(renderer.width / renderer.resolution);

            background.scale.x = viewWidth / background._texture.baseTexture.width;
            background.scale.y = background.scale.x;
            background.scale.y = background.scale.x; // background.y = -200;//(viewHeight - background.height)/2

            return background; //[background.x,background.y,background.width,background.height];
          }
        } else {
          if (containerAspect < imageAspect) {
            // taller
            // console.log('taller (containerAspect)<')
            background.height = containerH;
            background.width = containerH * imageAspect; //background.width * containerH/background.height

            background.x = -(containerH * imageAspect - containerW) / 2;
            background.y = 0;
          } else {
            // wider
            // console.log('wider (containerAspect)<')
            background.width = containerW;
            background.height = containerW / imageAspect;
            background.x = (background.width - container.width) / 2; //background.x = 0

            background.y = (containerH - background.height) / 2; // -(containerW/imageAspect-containerH)/2
          }
        }

        return background; //[background.x,background.y,background.width,background.height]
      }
    }, {
      key: "copyTextureAsImage",
      value: function copyTextureAsImage(texture, callback) {
        var canvas = document.getElementById('canvasID'); //var buffer;

        if (!document.getElementById('canvasID')) {
          canvas = document.createElement('canvas');
          canvas.setAttribute("id", "canvasID");
          canvas.style.position = 'absolute'; // canvas.style.top = '0px';
          // canvas.style.left = '0px';

          canvas.width = texture.width / 2;
          canvas.height = texture.height / 2; //document.body.appendChild(canvas);
        } // console.log('copyTextureAsImage ---->',texture.width, texture.height)


        var buffer_context = canvas.getContext('2d'); // buffer = new PIXI.CanvasBuffer(texture.width, texture.height)
        // Fill the path

        /*    buffer_context.fillStyle = "#ff0000";
            buffer_context.fillRect(0,0,texture.width,texture.height);*/
        //PIXIUtlis.backgroundFill(background,{x:rect[0]-(rect[2]*(scale-1)),y:rect[1]-(rect[3]*(scale-1)),width:rect[2]*scale,height:rect[3]*scale})

        buffer_context.drawImage(texture.baseTexture.source, 0, 0, texture.width / 2, texture.height / 2);
        /* var image = new Image();
         image.src = canvas.toDataURL();
          document.body.appendChild(image);*/
        //var renderer = new PIXI.CanvasRenderer( texture.width, texture.height);
        //var texture = new PIXI.RenderTexture(buffer_context, texture.width, texture.height);
        // var flechaURI = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAEnSAABJ0gGoRYr4AAAgAElEQVR4Ae19aZRd1XXmeTWrJAEakAxCTAKBEQgEBHfyq1f3Wr2y+mf++3fWSjq9VrfTcdoD7SGOV2JwYpOO04272zghpm1wsONggxswYMtMQhIqDUhoQhMllapU83tVb+jv2/vse/e9dV8NQlI9LE7p3rPnc+7+9j33vvtulUL4qF3WGSi12NGvx3xWYmu02LwuxnSY+0lsB7HVLsYA84nZSgVwZ6kUHg1t4RrAX78oJdAqR8vybgslHONUox4+Be4n8wHrYth0XIyg5xnzhlJH2LhkdVjRuQwRmoH1YVobms0Vx1bFuV8eDJPViXAnjvajAkAS6jgb6r1rQ2njJ3GCdELSLIFQXdJ2gefR1hXC4R+FcPxFOcL6JT2W3GCttALI1ErtIXRfiQJAklqmAHJJ+6BsO46tVY6v5QqAycVKINtvagHw+Frl2FqyAOwMk5V3luXXq5rdMkhBxYCz2fCeY1a9Teo3rG/ZAmgA3Y2r7g3rr7wdNwf8lER4IISCwMsHBdLC80MDae3rdE5oyrBFu6yOkfQT2HDlbDg+vB/85dVatgAIw7LuFWHN0vWhXq8Cf3xqEhAVdNwvKuAJsJGHnHeTLAaCreCTrgmd6KxgYnFVapXLC/l4tC1dAARcPhoALCBKyLQI5Ow2oAmxFQMpR4sPgE/iQFfHRqsYg4XC1aUhhXD51UBLFwAX/VIJT0wEJAOHZTB3Uxvbmwf7rD85ubiYydyhf6Ms2lr9aNr4yAxFwEtAcVNQFVjQOSBx8ksT2ElLGBKQUNngAzn1FsPLbNfiBQC0ADx/FNn07CVobNIbEyVqxb1BmxpYQYgpdyV+5qSel4LLr7V4AQCYeK0mlgoj92RSgMnL2awaNVRjRVTo1F4pNbCCoL93uVxKoaXvAQiCgCXg6JmqQEUwgRhBM+AUQpUYrb3Gsb05pDaJ5nLBPTnOll4BCJD+8M5eKYEqnq2U2EqQpfX4YCZNdWIKPhaIKc0iw6vf5bBv6QIQcHkJEMABo/UReCmGhFZolSXkHuiUJ6ixLoTSmBrpkgLe7J72kk6C30q3cFPY4l7A12LglEUqZy0p8AmtwEcLObpoobSzs4JioV2urbULAMAISPFG0ADThzdSAhngrQgEfPoCVdmDIMaJJAe42PFZA4nLrLX0TaBCLM/2BEHhBVhQBEwgJS0QKmd6oulpaiMvfqSlsOKDINpfhq0lVwD75K8YpkAmgBqwCaB2aYiFIHItD/pEKoFXoVa5jMHi+Og5QJKfRSX4wK8Nu7bYEyACKM/rStonDwVho/dSuvcT1+d7URJj2JmvBUHQY2nEWvD+lwvdgisAwccDYHn8SxgEvRl4EHIPO4vCVo6SVIg+P4xkYms+2f6jFWBGghdLQPCsAAiSApvORmSUR5GALkyUwCGxiehrYWAvwSIndmpJOX+46hhN/nJoLXkTyAJQrCII7GwhMJqg8fqOy4J0Ygo+2hFI3vSJWHZiGnkI8CVQCnYEXlae9OKhFwmGTOOa7DelOFquAPRMjAWQnIWKKnGM+AplfMQXuiiJxSFyERHUFHC9MSTo2BBJN1t5ZhZALAEZM5aUFBcEiJvOiPyHrbV2ARCZ2AiLTzULpcGbQn6di55KMecuGvIM1697YRflasNoiMBVAObc01YvPYzHGAxCO7Z0bKNszIQXe28pji2/a7kCICJtuBiX2rAKCDAEWXCUZJKmjX721/wKXhQLQdBgBIaXCDGPcjrmLw0cg0a8G9ZPH3pfbEVAf4FVYjAeCZEU9KZHD0cdXcxadtdyBaCgtwMMPOghooKgZFxSr4BQRR04ASaaRqXXCVwxhnTRRf0EfnFOV4BYAHFgDWl764kn4SWvq0R2RVCNFYAVq/H0bpXWcgVA0O1MZC9AsRaQMUk/RSAUijSNhK1OK1OKg5QTlnQwKBaFG3vh1dbL2uXm0xeAjaOjZUFOLxVRKwWhK4RB7QuBNHxkHpx3/gjSY7mUVEsVADFj+rUAFBpJBhVsyBlJSzhxFAY9FwNrircqSfNaL55y/UB82NZjEdgotgLI62ewFug0hNImm9HHSw7B9ZbiGwtAijKl2zABqrOzFsEl37VUAejRcwXgJYBoa5piLhPwS/Esd5gLviweppavg4unOIpKd3RATGrlI6Sy3MuPfvzMrgBQelglTn5JV2hhl8wrkcDX/FOZPG+Q30fIHAGHuuSt9QoAoOkKoJgRLoEVcl0+LZGqF6TlDLdEK5zppYDgIoatAqDlrJfiYiFIqUittcmNpxZAGo3jqY2NnOnjvIiclyu0lJDKrg76wIlfZi1+a7kCIDj6cayRvKzA9EsaJdmaNFnBNcsRHsijUDCNOlrz80SdZydaA0q/gkgd0AbXf94D0FpbhBN+enmRGcg8ogZmShlf1HtZnAHG0jnFgRa1a90C4HVSbsqYZ5aFplIAQyblrAQ4supahTCVTC70cn65ghA7KBV8GEHHH10ZxE2KgGPqEq9rj4HMns32vvcgqw21kGIMf7kwH395o/1ithYsAD0bmSTiKi0S7HgGUyHwgOZ1V5ZxRRgW1EAmxmRB4BRmNDvz6Q8BJSDYqNOVRwqASrRkLyESDuaIJyzjqiV74TK2lEQL8SHNcbjHr7u1QGu9AohASAEIikyWNkkfGRApXVAEArpkWQCQJ34sEIkEeSQ1Lpd8KY90BRADG5PGtPC9lF8qzRQELXWS7LN+yrVjSN7n6PgSftF2LVcAeobw62Ckj0nSXEqCmDJLLwUGqdBihx39ooJnqfiILBMIzvy+Ab8ZLLjafQdluAQwgMjZKTGz1xmkWlI6v1RmNjZrjcIVgAemdrRZvNaCBZBeAuws8UUgqXJYyhXBMily7ARAFg8U1FkAo6VnodCWEXHDid4+BhrYqqExLGIs02lvIJKLduwRi9d+kcAvoaOVXgJkYIm9mLvWKgDkRK/FJdyRM0GaJNnLGaNnNxNLu5hzgAMBEq52Qopr5t4gUdIZEeAkMSIoXCmsABhYwJNeHBNJohNgESvaeA+TqsytCrEYksKm4SK31ioAJIPp1o+BBJk8f5hm1ekZr0mlglhKA61LPjl6xA4OyY0io0gwdWyDTh4fw1SePbS1R0/6QGhnMWMlJVAENbRSVFmrtIi8D1cbKz4JvKi7FiwAux4DFIdwhJSZTlAXjBQb7FUuRZAoqEQ8bHwOIKUEVLQgogv9uHrg2q/PAehDINESUFWSLQoPatSjy0rJxWKNOkqSAuA8F7m1VgEIuH4F0PPf8kRQZOUHYRiTl6aIOQWk4iCKzPWelwZ+Rie+cp+AaLoC4PZczWOnjIJKINkcxDIJx3utFI/q/OpACS9vUowSb3F3rVUASCgTw78JYDdKTHsR6LbcE5RsEQAixhGFIEILiScPZWCM+3x8X6B2vAwQFL33sKeACkoWWquNmdKkMFxBqJXfa+mwGOzYZKIYezFbaxWAgAaA8Exe78qJJDaApGcqUmX5YrLZiDZbwiurRQBjytFpaDDxGiHnIOUUwYiXAN57+CbwiQu9NUZ6WSgqBBlFxvLQp7QWW3IJEEs/4qWnW6sAcPzEi0DwYQnPSvLc2BQopBN5pizPJ4ZqzAAwwoZ/+nhYz3S55kNoRSLLP3j5FCBxGYDxFfiUooQjOwnOaM5HJWpPK7Vjb7YpnRSAhqLzorWWLABdjnlWcnNga6YVWKbM8VzepVyYVGY9AsMYVjFyM0g7yHiuKziqlyJA4Zk7tQa20nAQGWODimOnsOrZ7azEWvWqs2KQV95kpHQ0+i1Ga7kCYHb1YyBBYoLYCC3SJ4lXWjB2vFQKbUShPsKYIUWgpUhiLLEV03RMFgddrLiEzpzlooSNzk0Ajnql6SpeWGEgmUFzLMyChdkCrbUKADlhYniXbEkiYJoqBSa9F4gJRJKloZM1gHwUEW5b5i3XvLeQL5QokBAikPH4IgpF6p7dMw6LwqQprx6JXPxTznnAV+VybPGoYL6orbUKgKkQ8HlDFs8S5Jcplqb5Qxqp49lFnRUGLORsiw6qFF85W+krxZJEU3uMI1HQ+6ePBpYOmXLz4b11Ef3Rx0BBs3jHa7NdAhQaZydgkQcMcmobzZ7AKzxyokVbqYMEcxA0IY+eqw1+r1gELDiOq0qGh1z+qR4KsKSzfSKRmNFCipO0DkQbclEbi1tCLfqu9VYAJE0/kikgTCFBSdNJDtIEbNK0QZplXaa5p6kCTxspGurAgpeVJBYS7zcyBUAjusRe6ExRpLoUWrNWiUSQYjBb1evqxmJb/NaSBWArgCaKyYsYW740s8olhRCNTJeRS4UAYgAAwIm5XC3gIp8M6IqK4KPg9KyFEd1gKCFJRirpXUGoTaIRWy8TjRQDHgTJu4e5Y0L8xWgtVQDMN89MKwDSBIZyPbuZUgojJOhUEmXxbKY5m+ADlSRfDCWS6NTPvBWUNrwjYAVAI2qjd+zV38OcWlCqKxXnSC71V53G4pNAlB0PrgVaSxUA80G4kwKQT+sqU9CZNKRV/0mxSA4l09DxDGMMFgIp6bijTkXW84WT5PUy2MtlB2emfkKQgBJLYgprgCqMiAa92bEHhzH8xz5dPWYWgxSATIRRFre1XAEwHXZDJpeAJFGaSL3+x6Rp/ok4BMx+lHseNH245FtdiL2Ari+P6vUfNvz/atBSYAs4KSS1SPdaXTp8KrVI/oaSWlsBbLoy6CLtWqkAakwIl0b9LkCXSV0pNcEKsksbxIpH1Gd4BsMGc42b+klBUAWRPBGEHT54ogDAgU7OYtioN/fqr70WI431YY/aeYuCMkAEtZcVDuNxemiL+gsCRQXA/67p97DdgU3/Ow0QF7lxnBuRoWnmmWDI41K5/sc0SbqglIoQlNIp+TOeUjnrCSSgxpcAcvaThopfA/P/CjAbCQIdVxucm8pyEmgGNh3TovA6s9Hea4oLQO3aealhfB5vCL+N7TPYLtXHAo4zgO172IaKCmAdFA9297avb+8qteH/Vwi1Cv8KF6TzaYaXsy0QOa2SiM/3pEtdPR2hs7MD2SAcCpqCzgkIEuogQS0y5QTVeJiIefShB03ACsykhQIPGX9PUO4BCgtAh1NA6SdBCguCozEgi4XxlY4+6il7FviSpTjG9lI3Bv63sPxdHcX2EsmYWXtawj/TirzbO1HkuMLVa43G9GSjgnS9A6fniwrgOBRP1GqNP1zS07l6+cquto2fWBk6EIA5tqbQ6NA+79QX3eFGKM1dZh29VYZZl/Cc9o7fuTp0dbeHWhUvaxEY88gMYoftexY2J6g+qiEYiBCDsBMAKRC5Fk0bAOMKEC8IskrAMLH2lPpbnNgznIBuluIsY5ESHykMpfk/4Nzz79aE9o5S71SZc6CR+SidjkMfNuyFSDUypol1FLGjma5YoBAbC044saschk9OhcnR2jBw5H9UuQNbKCoALktfqVbqlZGByh8h0lqsBh3/5pM3YMIsIbohbgSEcwcjx5DABaHR0md4cZCJia94UqYxUaEAX2+UZAVQIzVQo5QmhcTRhHgKgFKlYIzHhEWPveSP6wps5NoN2v7LmHa5AZTUqZ04uWRrwFyaiQl9GFsTQ9576ZgmZY/AeBtlxdqe8K8/eb0AlWhhrIUUJSyqWFgikSKJMpGbni+4iEXqH3me9fteHAkHfjFWmzhXG66WG09hwp/GNoQt6G0vqWzjvH+FPNVQoXed3D/WOzFSbb/pzquwjLSFOgBinkt1uOOzM9ZQ2RpCk49boos2QKkhOtqbHejED+UCWu+S20N3R2/oalsiM2O9Sc2xlx+KQYkcO00tRc6OJmaNQ6KZitRGGB4qE8i6p7neD+jqw/huk/Ga8F4HmsfA8ThkEkNskps/yWEDueN/V9TgK0oofua1UWOeQIucOsqsj7qMzHTa13lHpWdE6PvpSHj1uwO1kf7podpUeByaP8U2jE1aTImxhf3v41r16d7lHevu+91ruv79798aenD94lm6tPPK0Nu5EgcYD0qSzRgxSXL4moAozQwAqwyvjAMqJkyXM2pZ5dpLR14ElOtKIM/2pfqRIWm0oRHPUfTxzLBepMhwuTqmN4e0EWvuGFU56SUOI3HDXv5Fjp1K43jKcWwep/5nVjFenAM5htRYwolvjBhp2pgujhF97E/dZs5+joe00mPHTwbDG//3THV8qDqEy87/gfcXsPF/LE9asxUgMQCxDTH7p6fqW868N7F08FS545Z7VoWe3s4wXa3IUtrTsRRv8OCmBoUgG9YdPYvtbEaBiI6FYTYmY+/k0U79tUSoZ62oHaeGMyzOUFSijraqFttIpr6mMwX8pKHHhQc+vIjYnPUs1ptDm1/sCanMU2cizyvAc370t3kazbkbzVmmx8Y4IoGMvfHsY5yMzGzkkLAjb3Y8Er5JxYMphTd+MBDefHKgOjFUPYMV4ZtQ/hm2Gf833nwKgJH7kKHj1anGfYMnJ5cPnJjsuOXuVaF3eVeo4v/bqzeqoat9CW428H06J5VsnCMnGXuRm8zkDB9psfO2MRZN0CQObUHoGCq1+DQQXbSWdwfimPQmT71Eoi2p6MNjEA3tYyAFVvn0mBgnJ5PYJtegGUBlLCsM5yt+MjONaXElhMWb2cv0zEaHE9BxUymXiq2P94ftPx6Ynhyu9gP8r8PkIWy8MMxo8y0AOu7D9m51GkVwamJ5/5HxThbBsqt6Qq02jcvXFIqgF5XcwfnhgHDA9JKD5EHHA830tIsHyCQlCTB7+qQ2ZGAiEagxUmOoHClQI7EVixhDAqkXC4FSW0ag4gogEWw+tBBax+fRkLeiMD6Zs9MxtsqjL+OYTGiVJ7KMLuvLI/BjzPDRWYd23JvVphrhle+cDDueOTs1OVJ9H/cNX4X6EWy8qhS2hRQAAxzEtqc6Xb9v+Ez5ypPvjnVuuGtluGIli6AaavVK6OzokcsBPwPrMskDigfBg1dGD8qSgaCylLEXW7P3PJSaxhk2FGiiNIDFEHvMg0rK2CSZkWGxiBi8/MeRYqdzZETaGuDGm3+GF9s09kwdJQX6OIbkxPQmm2ePqKGjoy1MT9bDC48eD7ueO1uZHK2exG3NlxDyUWyztoUWAIMdxbazOlW/d3igvOLYgZGumzatCiuu7sXlAEXQKIfONhRBqVNOMDtwnmxCYy80GE0me6VpIDIQSRLFz/Fmg56O6htp6WggKolFhjZs0kc/4aMh5Q1cAhJwwWfOcBgk8zKaPX4KC0TGzPnMkMnM0jFNX9g7W6entKOzLVRGa+G5bx0Nu18cLJfHq8cA/udwfP/AY5yrnU8BMOYJbG9iJbhnZLCy6ti+c1033L4irLpmKZ404bNjvYxVoCt0tHXKASrgmhDeo6TAU4ZUJzKmlPq4gWaCKTCZEbSjsQKjjNiIUP0pjay4cWc27GWVggFp/t/CaQFwHpT7jaE8L1xq43SZ4nHyxN9k1mMc9ZHpakzTJT10PN7I89AI/sTgdHjmb46Efb88Wy6P1Q7jhp0f856kfj7tfAuAsd/H9mptur55dKhy9ZE957rX33JlWLNuOS4H/L95K3JT2IlC4Mwl33YwYHhXzBbTKHo9myiE1G2pnag0ETGmRIiJYRCIJab6KC+0l6sR7PR+gSy/H0jOZsbmxh+jE54xKddxpMeuGehZuRZ0Jq6NMe+e4wL8rvYwcmYq/PNfHwz7Xx2crIzXDgD8P4bqX3i8820fpAA4Br9U+CWeCWwaG6msPbLrXNc1Ny4vXXvjlXh4UQ/V+hSS2hY623s0YZY0O1jykkxNNANKcuQQ46VCbKHA0sFkS0JFn/qSFSAycgkW5ZEWw+gHkfrJpHANiI+e3XwyQEEuBQKnZM7NaAkZ7TiMxTR76zN2Zs+eU/O8cBoH8k6AP3hiMjz98IFwcNvQRHmithe1/J8w1PM8rIW0D1oAHIuPFF+pTTc2jo9NrTu0a7B7zbplpes2rJCnWTWsBExAR3t39gyDkx6W4BAPmMnixoO3PtKwYPM6GgkvGujkR4zU3+QSK8rZ8Scna+BP01JetApkZHkbicV4ElV7TxfpM7J4TCZL+mI5wT99ZCL88KF3wuGd58YrE7VdOKT/iO1X2BbcLkQBcNARbC9jJbh5cmx6/aG+we6Va3tLN2xciSIoyUdEwtfZhi+/4jkMIkmWJdjLFCAm1QBjks3HkgMl9Uy4GJqNyVWncUELob0+E6AkfiSMBaCxGIfFYLbK50EuWhHsWBg5iWW09Zyv0egzcUwuNhwfW7TvxJdkJ/aPhqe+tjcc3T08BvC3Q/2H2LbpES98f6EKgCOPYXsJ3yKuRxHceLDvbPcVK5aUbr5jFZZXFgGftTdwOeBKgOt/AqYlKiabCYBlTJEkh0hoMk0e+xgjG4s6bKJjr/EgEmHCRz2t5YERC8GSzt5vYhNlnhZ7t2rIEKldvhiSG73op+PRXmYRx3dj21iIyzP/6O5z4cm/3BOO7RsenZqsvwbxH2Dbje2824UsAE5iAttL+EZvbXmiuuFg30B377KutlvvXMNDCXU8luIDlw6sBExO9jZQwbKkMStKMzm6cZ/INGsRKNNHW+iopiPHFVPSiU886xMdja0AbAz6xU3smvBel6F1vBRk+Cd6m5eXRTqxSXUE/91tZ8P3H9rdOPnuyCi+oHsFE+aZfwDbB2oXugA4mTI2FsEKFMFth3af7cZLHm0bN68R8Hi3jVcSYhHgnIjAeJASGoHSpIESW72TJkPY1ILJ5sad9pEUheqEFB/xVFPx04+D5icjSixfAFaYGUAROMNztnkZec4yLzdb68VuZryu7o6we+vp8OTDfY1Th8dGpit13uj9B2xHsX3gdjEKgJOawvZKvd7orZSrtx/aPdCD9/zabt/yMXw01O/g+ey9Ax8R7TmAJJjJgCP38oOkWOJhyH/KmxV4Taw4JbR6U6Y+9BNn9owsTylppXK5DxBb6iiPfYHM5mnzUnubR87X4ljvY5vMeh6L0bHvwpm//cWT4Qd/3dfoPzo+PD1V+ylmzBu+U5z6hWgXqwA4N367wiLoQhFsOrx3sAfvEbTfce81eG7djlWAzwpQBHxiKL+UmSadyVXwIOP1P/lxSRJwNPFQR3xpiVakg4zXYH1EnfollyHqxS+OFmmVwZ4/Mg77rI3qor/Y5WwgkxtK7yfTzPno1CV+Z2d7eO3ZY+GpR/rqA8cJfv1pqPlR7wy2C9YuZgFwkvxSni+WNFAEm4/sH1xSmay2b7r/WnnvT7/Prsp3B+18dSUmXc9qTaKCpolCHjX5sGNCE3uSohRRtIl60ymb+pmcMfmTG5uFkZFlbMzH2Zg+9lI4PkZOnxnT63BgnXi2/8qPDoen/ravdvbUxDk8dn8Cof4Em7zFg/6CtYtdAJwov4n6NZ5Slacq1bvfOzDYOzY81b75gXV49w9vpEHL5/BcBfhOgSQGDnLHDI4tOXuSAoiJN+ucnG56lrJHAAGXXfrkj2KVc0SSM4sgAxL1/PF24GeuGojl7YzO9xIvjht1jMXV8fnvvxue/h99taH+yUE8bn8M0/sstlFsF7xdigKwSb+BIhiemqptOX5wqPfcmcmOzQ9cF5Ys6UQBsAhqAnqbvFgi2MRkZ2/6mFw5O9EnADKZespSSrH4igl2yquCtK0qJk8BU78EZPGlf9xm472uiBYZ4s/QqUxfg28LP/uHveFH3+6rDp0pD+LF2P+JWX8RW+YtHvAXrF3KAuCkdwDs07iZuffEkXPLTp8ckyLAR0U+iUUm4tM4KQJBUcGTtFHvzrgIMkGEWhMryY28gCYuIqCdmiohvNi4mLBIzmjqJF4q02U9FoPTs0AyuugnhWO09d6PMvy0t/Pr6FL48f/aFX7y2J7p4bOTA3io9ggmzu/zeUN90dqlLgAeSB+K4BhWgnvff294+an3hlEE68Py5T38RgYoSSXEywEBdAmPtIKESMLnbYzXXmxoquYU8h+2mXEJhpdnQDV72Oj4Yu3sOYb6yyXLYmHcGXESHcHHixy4XX7y73aEnz6+d3p4sIy3eBqzvsWDkBesLUYBcPL7cO0/iJXgvv6TI1ccOzjUufn+68IVK3rllSYtAiYO9wRY29N7AA9QTDiCETTs+C+zIc/8J3rqyKmNA1H8YlwDJiMzfzd2tGsKLP0tlvWJTGYhen6di8/14XvffDM89/1906PnKqcA/pxv8fBILlRbrALg/N/FtodFcPr9kSsP7xvovOu+68KKVUvlcqB41bES8AVTImkA8Boek0g5qkPV1tM0vYXU4hB3yGOMBBTKVVZ8VuftC/gkFnRFdKGM3+W3h/L4dHjsodfCC0/vnxobrhzHR+Yv4tC+je2StcUsAB7kUWx4u6h270D/2Mp395zu3LRlXbh6zXL5JpEJ5evN/KWNmF70uqQSdXlGIACmQAqgsFFg8z18XBEkoOdizP4RMM4kiWNj5OVxrHwBgO/s6ggAPHz7q1vDy//ybmV8pPIewP88pj2vt3hgd8HaYhcAD0TeLsJKcM/gwNiq/bv6u26769qw9lq8U1BjcmnC3xP0K4FLegSClUEIDDzhI7BZoA2YmTF8cST0DKB1nETPMc2GPX9cLzocgckI/vDAZPjWl18Ov/754fLYaOUQfgmEb/HwN3YueWuFAuBBy9tFeNq1eWhw/Oq9O0913/rxtWHd9SvwBZIBxRc2tAg04fCyxGvak3sFsJrwpI+gmL0DKAGyic7AlYsKbIxnXSa+Bjr1Rhfo+Wj3zKmx8MgXXgyvv3hkcnx0Cm/xND4F02ewLUprlQLgwfPtol/hwcem4aHJtXt2nOq+6dbV4fqbV/M3WjXxWAkkxQQLp7qdVQkQCeAOnAhsApzwTm+AEbxom5zFxrN3dhwvATqjQ1yzsz7q+Quv+MQTvvH558O2re9N4CvzvQCfj3Zf4MEvVmulAmAO+KjzZRTB7WMjk9f2bT/Rvf7GlaUNt66RIoxiJcwAAA0wSURBVFCgNcny2zUwTsFH6pnspAiMT/sEYN4kii10HiiToc8ATHnezvNz0F3dneHogbPh65/9eXj7jePjE2NTu1DLf4Tpb8W2qK3VCoDJ4NtFv0ARbBgdrazve+t499prrixtvOMaXA70e3wDL/9iSQow4HJgZuls0cwA2vt5YPNF4HWYcDJGTs6/d3Bgd394+DPPhd3bT4zjzOfbO/wu/y1si95asQCYlHFsv8Cj0PVjY5Ub+7Yf71599bLSx+9ap58OAIaC7RLvgRPaneXCz2YLXQQuU0QeTMYo4MXe+2LiVgw9PZ2hb9tJgP+z8E7f+6OT49OvQv2B3+JBjAvWWrUAeIB8/s0iWDsxVtmwC0Ww/IolbZvuWa+PjZF0wmZPBZQ22UL6FHwFLgUQmBPa5N5gxmpBrRSXK44oI/jbth4ND332Z40De06PlienX8FkCT6ff7RMa+UCYJL426x8z3DlxOTUbbwn6Onparvr3uvxyVBBjqkXoOKVO9JZzUwuAu+sFZW0eMRHAHZFAftklYDDjAKAPcHf+sKB8PDnn20cOnB6BF+F8y0eLvvv6Rits2/1AmCm+Dbpy/gksLQ8MfXxPTuPd/Ptort/60Ykn28XFRSCv8mzM9R6BCOw3Gc3lWuheNrbQV5QECJjVDyV7MYN3/PP7Alf/+KzjaMHzw4DfH7E4w0fP+q2XPswFACThq9L5O2ijnJl6s59u0724Nuyti0P3IRfjOTbRQAJwCTbDHAdiNEuOXPFDeBZgbDP+FsxWJ/GEsvox69zu7s6wzM/fDt848vP1o+/N3gO7z/8EPP+z9j4Ebcl24ehACzjeC4YtmIlqFfK03e9s/vUksmJ6fb7PrEhKQKFbiF7BZV73YiRVMSMM93b6AiU0A89Vhy+wvXDx98Mj3z1udqp4+cI/hNQ8S2eczRxG0hpRTLTXbJ+sQvAJ6EZbcmgnt8Vv4qPg2UUwd37977fO3Juov3+f3ULzr4O+TY5m2t5MAwXC81QRqd9ccl4W3jJmW596suXXDvwle73/vevw7ce+n+1/veHh/BY+zF48y0e/q4EjX0z5yKZ6az3NheFvhQFYAdT1M91UM188HZRgzdX9xw80L904PRo+2/9Dv520RJ9sSSznPulvRmNWVgRpHh5idE2HS0EvsiBygiP/d3L4dFvvFA90z96Fl9s+bd48hWYBpjryFVv9r6fn+c8rS50AfiJGj3XVMyuqDffIt1bKIIzU5XpLUcOn1l28thQx/2/fWtYuqxHvz9IIE3By1MaHKEBom1KwpLFAgPbm63J+CIH32J69JvPh+/87UvTZ8+MDlSr9b+Bnb3Fw9yqedprmJTP6403u6LebKwvspm37EIVwHwnY3a+t8l62Xzpt/F20Qlcb+89dvTssmOHzqAIbsHbRUvkqWHzZwQcMl8OBrXKZVKxMHxR0I/g40ll+O9fezY8/u1XpgfPjvXjecVfwedhbLxMNTvzeVxszY5PtcV60+V7Hyuvm5P/IAUw18Beb7RNyPi5+maJpNy23SiCIyyC48cGlx/a39953yduCVetWKbfHxQCPRN8nVg6ndQiLRXa8GavPFkNf/XnPwnf/+6vps8NTpzC30P4C6h49jOAP/PBFoJdJC+SMZ61dHIa0+S+9zZe3pReaAHMNoDXkbaWlxfxRUDnZZ43mj3eLZc/YLV/eqq65dSpoSsP7D3ZueWBW8LK1Vfgr5Xoq+C2xM/s4c3lPtmY3fQnxQ/gd3SE8dFK+NoX/yk8/cTrU8NDEyfq9fpXEIFv8XAec4EPk6QgPO1zkpcX8c1klFuzmMYX9vMtgGbBTM7empcV0Qae6Tzvaeo97+m8jn/h/CC23SyC/v5zV+19+1jX3ffdHNasvSq3EmQBTqFWSvCJSz+hsnsB/gFrAB7+/HM/CM/807bKyPDEsfgK1+MYl+N78O3YfA+TQvC9nPYL4aN5Etf8Te5jeVlCz1UAdgCJQyTycuPn6j2I50vTr8iXIBzF9vZ0pbr5zMDIyt073uvatPmGcM26lZkiSHHw0+WR+XJQjnu+xTNwZiR8+U+fCD//6c4ywD+Ct3gehMNT2LqxGfhF8/KDzEUjlIBpPe09nee9Ti3V3+xMZnaeF7pZAdhEvYPJLLjn50MXJcdk1jOO0b73tI1Fmd8oZxHwFbPtWAk2DQ6Mrt6140jX7ZuuD9fdsAZ/u8h+MwhAN1nybR2wPHYB/FMnhsIX/uQfw0s/31XGewoH8emDn/H5i5o92PLg25zsWIrmbsfge4RqCn6Rjr5F8ihOYhnvbRNZUQFY4MQIhJfZpC2g6Yrk+YPP8/TxCcvzZm9y603uex4LeRZBP7Y3p6drtw0Nja3Zue1w14aN60o3bfiY/I3j9DzngSGkW/KNZoHw4dLRQ6fDg5/6+7D1pb2T42PldwD+ZxD7JWwEn+PZHGxu7PN0XuZ9TJfvESbJO3VsRf1cMtNrhDSG8L4AaJg3ppGXGW22Rb0d3EL6hdrS3gC3njLbOkEPYnujOl27Zfjc+DU7th3quv6GNaVbN66Tv2Kmh6XTTwsipfhc/8A7J8ODf/zd8MZr+yfGR8t7EI/gv4qNf8KczguZd1GumskQOsk7bdis97TJfO9pccz5en9JYjOjjKELkh+AfH4rSkyRjH4GmtHWF9kXycw+3/OunM/hX69WazeMjExciyLo/ti1q0q8JPBykMLNA9AfUvxGr2/nkfD5Tz0Wtr95cGJirLwTcbjs8z9Z4JmfH8t4m5/xvied3yASWb6nXV4WRTPsi+zy/t4mEye/ApjSO9ikTdaMp9wnwOy8zGj2njZfL2tGF9l6mcVmzyLg8/jXatXautGRyfU73zrYtWr1FaU7Nt8UHxZBm1wC+F1+V3jrtf3hwf/yHRbB+OREha9wfQ7bXmyzgW/He749wmfAZRw265VL+bnkprfe/H2P96w1YN7I80azz9MmK+oNQOoMFKPNPi83n9nkFqOZremtZxHw7aLX8MBm9fjY5I073zrUtfyKpaXNWzYkbxfx/JcXOV7aHb7w6cca+3YfG5+cnOIfYuLd/iFszcC3Y2HP5vm8zPTWm9549mzzkc/HzuLkexmEOyuARADCjCkz2vez0dT5zUDyMtJ5uedJG2+99zG96Xzvae/DIuDbRa+jCK6YGC/f/Pb2g1093d1tW+6/FeJS6OrqCi88tz186b9+t/HuOyfGyuWpX0Lx37Adx8aPemyMyeb7ZrRaprbebzZ6Ibq8bRFPWdM2WwH4A2MAz5OeD292Rb2BVaTzMm/n6WY2Xu5p+vLtotfx94x7JyYqt/TtPNyNV7bb7nvgtvCzf34tfOVzf984fPD90Up56kXYfQnbaWy8oWQctma91+Vpz5u/l5Fm87rz4fM++XjUs2XkCy0Ac2ZvmwU1fj42eZ/ZeK+bD+3nYbT5sQj4YsmbeIrXjuv7xn27j3Yf2He87Qf/+Iv64YOnRvHt4rPQ8xu9s9gWCr4dO1yleb4ZTUOvOx++yIeyOdt8C8AmyD5PF/FFMk7G/OfSe1tP5/28zujZeupYBPzGbhuKoI6V4OPHjp7uGjiNP7tanv4x5H+JbRgbwV9ow5OmRWvnNfaHrQCYXSuiItpks/XUsQiYsO0ogipWgtX4qMgne/xKdwIb7xnmSqjX52nj2c9Fw0RszO58ePqw5WOoNLv3Nplkmpk/yyjzfJ5eKG/x6DeXr7ediy7SU8bmx1FJKmMyuBqsxcYlny+fsjjYLFHWm8x4358PPZvPXLq8Ps/bXGfrqZvXp4B8Aj14jDEfnnZsFku5+e3t4GhdRM8ls1FoZ7ae5pz462iUkfY6s4e4UJ63Nfu83Ps3s5lNfj46G9P3pH2Tl+opyANj/Gy915H2vMWcTe5tFkKbrfVF45qOPVveRqXFe0s2tUbP1s+lK9JT5uWetnG9bKG0xfB9nha+WWJMTiOji3ov87T5eZmnTW+913m6SG+yhfTelvRczRJOO6Pn0xfZeJmnLfb5yIp8LF5R72Wk2SSGJZsCT+d50y2kL7ItkvmxqJ+PTd6niPeyPE1+tmYJpo3R1hfJqDN9UV8ky8eZzWY2nY/jafPxMtLWRG/JptDTZuRlRlvvfUz2QXrzPZ+4RT5elqfJz9aaJc/kF7NvFpvzXYjOjs98jPdxZoDuQTAHL5uLLtKbLN8zfl7WjC+y9TJPWwzK2Obi1SpNrvHsffKKaJPle++b1+X5+dh6m/nSeTvybDa+MPnkUFgky8u9TTPa+xTZzFc2Vxyvz9Pk2fxYKpl9n0lSNDWZ9RbBeOspN9r6IlmRrsiOMra57NVK9952VnmzxMxXnrebjfe6ZjQn20w3H3ne3w7e+5psrj6fRM9fbJpz82Pk+bwuryfvW5G96OdKzGz6Il1ediH5hcayBOT9TD5XX5S0vMzznmbs2fi8bi77In0zGeXWisYxnfTzSc5cNrPp87o8z0lcaFmzmHLA57krSmReNhdvQ5+vXTN/k1ufj2/ywv7/A76vTnoNlloSAAAAAElFTkSuQmCC';

        var sprite = new PIXI$1.Sprite();
        var imageElement = new Image(); //document.getElementById("MyPix");

        imageElement.src = canvas.toDataURL("image/png");

        imageElement.onload = function () {
          //var loader = new PIXI.AssetLoader([  canvas.toDataURL("image/png")]);
          var myBaseTexture = new PIXI$1.BaseTexture(imageElement);
          var texture2 = new PIXI$1.Texture(myBaseTexture); //,new PIXI.Rectangle(0,0,100,100));
          // then add to the cache (if required)

          PIXI$1.Texture.addTextureToCache(texture2, "someId"); //setTimeout(()=>{

          var bg = PIXI$1.Sprite.fromImage(canvas.toDataURL("image/png")); //'someId')
          // bg.texture.baseTexture.on('loaded',()=>{

          console.log(myBaseTexture.width, 'x', myBaseTexture.height); // PIXIUtlis.backgroundFill(bg,{x:0,y:0,width:canvas.width,height:canvas.height})

          callback(bg); // },1000)
          // this.state.originRect = PIXIUtlis.backgroundFill(background,{x:rect[0]-(rect[2]*(scale-1)),y:rect[1]-(rect[3]*(scale-1)),width:rect[2]*scale,height:rect[3]*scale})
          //   PIXIUtlis.backgroundFill(background,{width:window.innerWidth,height:window.innerHeight})
          // })
        }; //var texture = PIXI.utils.TextureCache[canvas.toDataURL("image/png",1)];
        //   return text;// new PIXI.Sprite()
        //target.addChild(canvas);

      }
    }]);

    return PIXIUtlis;
  }();

  var TextureUtils = /*#__PURE__*/function () {
    function TextureUtils() {
      _classCallCheck(this, TextureUtils);
    }

    _createClass(TextureUtils, null, [{
      key: "updateLayersOrder",

      /**
       * [updateLayersOrder description]
       * @param  {PIXI.DisplayObject} container updateLayersOrder call this function whenever you added a new layer/container
       * @return {[type]}           [description]
       */
      value: function updateLayersOrder(container) {
        container.children.sort(function (a, b) {
          a.zBuffer = a.zBuffer || 0;
          b.zBuffer = b.zBuffer || 0;
          return b.zBuffer - a.zBuffer;
        });
      }
    }, {
      key: "backgroundFit",

      /**
       * [backgroundFit description]
       * @param  {[type]} background [description]
       * @param  {[type]} container  [description]
       * @return {[type]}            [description]
       */
      value: function backgroundFit(background, container) {
        var imageAspect = background.width / background.height,
            containerW = container.width,
            containerH = container.height,
            containerAspect = containerW / containerH;

        if (containerW > containerH) {
          if (containerAspect < imageAspect) {
            // taller
            //console.log('taller')
            background.width = containerW;
            background.height = containerW / imageAspect;
            background.x = 0;
            background.y = (containerH - background.height) / 2; // -(containerW/imageAspect-containerH)/2
          } else {
            // wider
            background.height = containerH;
            background.width = containerH * imageAspect; //background.width * containerH/background.height

            background.x = -(containerH * imageAspect - containerW) / 2;
            background.y = 0;
          }
        } else {
          if (containerAspect < imageAspect) {
            // taller
            background.width = containerW;
            background.height = containerW / imageAspect;
            background.x = 0;
            background.y = (containerH - background.height) / 2; // -(containerW/imageAspect-containerH)/2
          } else {
            // wider
            background.height = containerH;
            background.width = containerH * imageAspect; //background.width * containerH/background.height

            background.x = -(containerH * imageAspect - containerW) / 2;
            background.y = 0;
          }
        }

        return [background.x, background.y, background.width, background.height];
      }
    }, {
      key: "backgroundFill",
      value: function backgroundFill(background, container) {
        var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          x: 1,
          y: 1
        };
        var orig = Object.assign({}, {
          background: background,
          container: container
        });
        if (!background.scale) { background.scale = {
          x: 1,
          y: 1
        }; }
        if (!background.scale.x) { background.scale.x = 1; }
        if (!background.scale.y) { background.scale.y = 1; }
        var imageAspect = background.width / background.height,
            containerW = container.width,
            containerH = container.height,
            containerAspect = containerW / containerH;

        if (containerW > containerH) {
          if (containerAspect < imageAspect) {
            console.log('backgroundFill 2 taller'); // taller
            //console.log('taller (containerAspect) >')
            // background.height =  containerH
            // background.width = containerH * imageAspect;//background.width * containerH/background.height
            // background.x = -(containerH*imageAspect-(containerW))/2;// * container.scale.x
            // background.smoothed = false;
            // background.y = ( orig.background.height-containerH)/2;// * container.scale.x;

            var viewHeight = containerH; //(renderer.height / renderer.resolution);

            var myScale = viewHeight / background.height;
            background.scale.y = myScale; //viewHeight/background.height///background.height/viewHeight * scale.y;

            background.scale.x = background.scale.y * scale.x;
            background.width = containerW * scale.x;
            background.height = containerW / imageAspect * scale.y;
            background.x = -(containerW * scale.x - containerW) / 2;
            background.y = -(containerW / imageAspect * scale.y - containerH) / 2; // console.log(' background.scale.y ',scale.x, viewHeight ,'=', background.height*background.scale.y,`(${ background.height}*${background.scale.y})` )

            if (background.width > background.height) {
              var viewHeight = containerH; //(renderer.height / renderer.resolution);

              var myScale = viewHeight / background.height;
              background.scale.y = myScale; //viewHeight/background.height///background.height/viewHeight * scale.y;

              background.scale.x = background.scale.y * scale.x;
              background.height = containerW / imageAspect * myScale * scale.y;
              background.width = containerW * myScale * scale.x;
              background.x = (background.width - containerW) / 2;
              background.y = -(background.height - containerH) / 2; // console.log(' background.scale.y ',scale.x, viewHeight ,'=', background.height*background.scale.y,`(${ background.height}*${background.scale.y})` )
            } // background.y = -(viewHeight - background.height)/2
            // 
            // background.y =  -200
            //background.y =0


            return background; //[background.x,background.y,background.width,background.height];
          } else {
            console.log('backgroundFill 3 wider');

            if (containerAspect < imageAspect) {
              console.log('backgroundFill 3 taller'); // taller
              // console.log('taller (containerAspect)<')

              background.height = containerH * scale.y;
              background.width = containerH * imageAspect * scale.x; //background.width * containerH/background.height

              background.x = -(containerH * imageAspect - containerW * scale.x) / 2;
              background.y = 0;
            } else {
              console.log('backgroundFill 5 wider'); // wider
              // console.log('wider (containerAspect)<')

              background.height = containerH * scale.y;
              background.width = containerH * imageAspect * scale.x;
              background.x = (containerW - background.width) / 2;
              background.y = (containerH - background.height) / 2; //*scale.y;// -(containerW/imageAspect-containerH)/2
            } // wider
            //console.log('::wider (containerAspect) >',orig.background.width,orig.container.width,background.width,container.width)
            // background.width = containerW
            // background.height =  containerW / imageAspect
            // background.x = (orig.background.width-containerW)/2
            // //(background.width - container.width)/2 ;
            //
            //
            // background.y = ( containerH - background.height)/2;// -(containerW/imageAspect-containerH)/2
            // var viewWidth = containerW//(renderer.width / renderer.resolution);
            // background.scale.x = viewWidth/ background.width;
            // background.scale.y = background.scale.x;
            // background.scale.y = background.scale.x;
            // background.width =  containerW
            // background.height = containerW / imageAspect;//background.width * containerH/background.height
            // background.x = - (containerW*scale.x - containerW)/2;
            // background.y = -((containerH*imageAspect*scale.y)-containerH)/2;


            console.log('backgroundFill', background);
            return background; //[background.x,background.y,background.width,background.height];
          }
        } else {
          if (containerAspect < imageAspect) {
            console.log('backgroundFill 3 taller'); // taller
            // console.log('taller (containerAspect)<')

            background.height = containerH * scale.y;
            background.width = containerH * imageAspect * scale.x; //background.width * containerH/background.height

            background.x = -(containerH * imageAspect - containerW * scale.x) / 2;
            background.y = 0;
          } else {
            console.log('backgroundFill 5 wider'); // wider
            // console.log('wider (containerAspect)<')

            background.width = containerW * scale.x;
            background.height = containerW / imageAspect * scale.y;
            background.x = (background.width * scale.x - container.width) / 2; //background.x = 0

            background.y = (containerH - background.height * scale.y) / 2; // -(containerW/imageAspect-containerH)/2
          }
        }

        return background; //[background.x,background.y,background.width,background.height]
      }
    }]);

    return TextureUtils;
  }();

  var Vec2Util = {
    horizontalAngle: function horizontalAngle(a, b) {
      var sAngle = Math.atan2(b[1] - b[1], b[0] - b[0]);
      var pAngle = Math.atan2(a[1] - b[1], a[1] - b[0]);
      var angle = (pAngle - sAngle) * 180 / Math.PI;
      return angle;
    },
    angle: function angle(a, b) {
      return 360 - (720 + this.horizontalAngle(a, b)) % 360;
    }
  };

  function plot2(propname, x, y) {
    var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#ff0000';
    return function (x, y) {
      if (!document.getElementById('graph-canvas')) {
        var canvas = document.createElement('canvas');
        canvas.id = 'graph-canvas';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.zIndex = 99999999999999999999;
        canvas.style.position = 'absolute';
        canvas.style.border = '0px solid';
        canvas.style.backgroundColor = 'rgba(0,0,0,.4)';
        canvas.style.pointerEvents = 'none';
        document.body.appendChild(canvas);
      }

      var GRAPH_CANVAS = canvas; // if (!this.props.console && !this.props.debug) return;

      if (!GRAPH_CANVAS.graph) { GRAPH_CANVAS.graph = []; }
      var ctx = GRAPH_CANVAS.getContext('2d');
      var graphScale = 0.03; //

      if (x % GRAPH_CANVAS.width >= GRAPH_CANVAS.width - 1) {
        ctx.clearRect(0, 0, GRAPH_CANVAS.width, GRAPH_CANVAS.height);
        GRAPH_CANVAS.graph.lasttime = 0;
        return;
      }

      var x = x % GRAPH_CANVAS.width;
      var y = y * graphScale + GRAPH_CANVAS.height / 2; // if (this.lastX > x) this.lastX = 1;

      ctx.beginPath();
      ctx.moveTo(GRAPH_CANVAS.graph.lasttime || 0, GRAPH_CANVAS.graph[propname] || GRAPH_CANVAS.height / 2); // console.log( 'moveTo',GRAPH_CANVAS.graph['lasttime'] || 0 ,', ',  GRAPH_CANVAS.graph[propname] || GRAPH_CANVAS.height / 2)

      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.closePath();
      GRAPH_CANVAS.graph[propname] = y;
      GRAPH_CANVAS.graph.lasttime = x;
    }(x, y);
  }

  var VIDEO_TEXTURE_ADDED = 'videoTextureAdded';
  var VIDEO_TEXTURE_REMOVED = 'videoTextureRemoved';
  var TEXTURE_ADDED = 'textureAdded';
  var TEXTURE_REMOVED = 'TEXTURE_REMOVED';
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


  var getFileType = function getFileType(url) {
    var regex = /.mp4|.webm|.jpg|.png/;
    var found = url.match(regex);
    return found[0];
  };

  var TextureLoader$2 = function TextureLoader(_uniforms, filter) {
    var _this = this;

    _classCallCheck(this, TextureLoader);

    _defineProperty(this, "_userInteracted", false);

    _defineProperty(this, "_subscribe", null);

    _defineProperty(this, "subscribe", function (subscribe) {
      _this._subscribe = subscribe;
    });

    _defineProperty(this, "next", function (event) {
      if (typeof _this._subscribe === 'function') {
        _this._subscribe(event);
      }

      console.log('event', event.type, event.url, event.name);
    });

    _defineProperty(this, "removeTexture", function (textureData) {
      var texture = textureData.texture,
          url = textureData.url,
          cancel = textureData.cancel,
          alias = textureData.alias;
      var filetype = getFileType(url);

      switch (filetype) {
        case '.mp4':
        case '.webm':
          var videoElement = texture.baseTexture.source;

          if (videoElement.nodeName === 'VIDEO') {
            videoElement.removeEventListener("loadeddata", videoElement._loadeddata); // videoElement.pause();

            cancel();

            _this.next({
              type: VIDEO_TEXTURE_REMOVED,
              video: videoElement,
              url: url,
              name: alias
            });
          }

          break;

        default:
          _this.next({
            type: TEXTURE_REMOVED,
            url: url,
            name: alias
          });

          break;
      }
    });

    _defineProperty(this, "_prevTextures", {});

    _defineProperty(this, "addTextTures", function (uniforms, textures, id) {
      if (textures === undefined || textures === null) { return; }
      var texturesArr = Array.isArray(textures) ? textures : [textures];
      if (texturesArr.length <= 0) { return; }
      texturesArr.forEach(function (file, i) {
        var name = Object.keys(file)[0];
        var alias = id ? id : name;
        var url = file[name];

        if (_this._prevTextures[alias]) {
          if (_this._prevTextures[alias]) {
            _this.removeTexture(_this._prevTextures[alias]);
          }
        } // loading


        var filetype = getFileType(url);
        var texture = _this.cachedTextures[url];

        if (texture && texture.textureCacheIds && texture.textureCacheIds[0] === '/assets/demo/demo5-(1).jpg') {
          texture = null;
        }

        switch (filetype) {
          case '.mp4':
          case '.webm':

            if (!texture) {
              var v = document.createElement('video');
              v.crossOrigin = "anonymous";
              v.setAttribute('_GLSL_ID', url);
              v.muted = true;
              v.src = url;
              v.autoplay = true;
              var sprite = new PIXI.Sprite.from(PIXI.Texture.fromVideo(v, 1, true, true));
              texture = sprite.texture; // UGLY UGLY UGLY !!!!

              var source = texture.baseTexture.source;

              _this.next({
                type: VIDEO_TEXTURE_ADDED,
                video: source,
                url: url,
                texture: texture,
                name: alias
              });

              sprite.texture.baseTexture.on('loaded', function () {
                var texture = sprite.texture;

                _this.applyTexture(texture, uniforms, alias, url);

                texture.valid = true;
                texture.requiresUpdate = true;
                var source = texture.baseTexture.source;

                _this.next({
                  type: VIDEO_TEXTURE_ADDED,
                  video: source,
                  url: url,
                  texture: texture,
                  name: alias
                });

                _this.autoUpdate(texture);
              });

              if (sprite.texture.baseTexture.hasLoaded) {
                var _texture = sprite.texture;
                _texture.valid = true;
                _texture.requiresUpdate = true;

                _this.applyTexture(_texture, uniforms, alias, url);

                var _source = _texture.baseTexture.source;

                _this.next({
                  type: VIDEO_TEXTURE_ADDED,
                  video: _source,
                  url: url,
                  texture: _texture,
                  name: alias
                });

                _this.autoUpdate(_texture);
              }
            } else {
              _this.applyTexture(texture, uniforms, alias, url);

              var _source2 = texture.baseTexture.source;
              texture.valid = true;
              texture.requiresUpdate = true;

              _this.next({
                type: VIDEO_TEXTURE_ADDED,
                video: _source2,
                url: url,
                texture: texture,
                name: alias
              });

              _this.autoUpdate(texture);
            }

            break;

          default:
            if (!texture) {
              var _sprite = new PIXI.Sprite.from(url);

              texture = _sprite.texture;

              _sprite.texture.baseTexture.on('loaded', function () {
                //const source = texture.baseTexture.source;
                _this.next({
                  type: TEXTURE_ADDED,
                  url: url,
                  texture: texture,
                  name: alias
                });

                _this.applyTexture(texture, uniforms, alias, url);
              });

              if (_sprite.texture.baseTexture.hasLoaded) {
                _this.next({
                  type: TEXTURE_ADDED,
                  url: url,
                  texture: texture,
                  name: alias
                });

                _this.applyTexture(texture, uniforms, alias, url);
              }
            } else {
              _this.next({
                type: TEXTURE_ADDED,
                url: url,
                texture: texture,
                name: alias
              });

              _this.applyTexture(texture, uniforms, alias, url);
            }

            _this._prevTextures[alias] = {
              texture: texture,
              cancel: function cancel() {},
              url: url,
              alias: alias
            };
            break;
        } // end switch


        texturesArr[i] = texture;
      });
      return texturesArr.length > 1 ? texturesArr : texturesArr[0];
    });

    _defineProperty(this, "applyTexture", function (texture, uniforms, alias, url) {
      var cache = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      // texture.baseTexture.wrapMode = PIXI.WRAP_MODES.CLAMP;
      if (_this.filter && _this.filter.renderer) { _this.filter.renderer.bindTexture(texture); }

      _this.bindSampler2D(texture, uniforms, alias);

      if (cache) { _this.cacheTexture(texture, url, cache); }
    });

    _defineProperty(this, "cacheTexture", function (texture, url) {
      _this.cachedTextures = _objectSpread2(_objectSpread2({}, _this.cachedTextures), {}, _defineProperty({}, url, texture));
    });

    _defineProperty(this, "autoUpdate", function (texture) {
      PIXI.ticker.shared.add(function () {
        texture.baseTexture.update();
      }, _this);
    });

    _defineProperty(this, "bindSampler2D", function (texture, uniforms, alias) {
      // add textrue to unifor
      // if(uniforms[alias] ) uniforms[alias]  = PIXI.Texture.EMPTY ;
      if (!uniforms[alias]) {
        uniforms[alias] = {
          type: 'sampler2D',
          value: texture
        };
      }

      texture.baseTexture.wrapMode = PIXI.WRAP_MODES.CLAMP;

      _this.updateUniforms(texture, alias, uniforms);
    });

    _defineProperty(this, "updateUniforms", function (texture, name, uniforms) {
      var width = texture.width,
          height = texture.height; // Generic as can be:
      // Image data: (wi, hi) and define ri = wi / hi
      // Screen resolution: (ws, hs) and define rs = ws / hs
      // Scaled image dimensions:

      var wi = width;
      var hi = height;
      var ws = window.innerWidth;
      var hs = window.innerHeight;
      var ri = wi / hi;
      var rs = ws / hs; // texture needs downscale

      var _ref = rs < ri ? [wi * hs / hi, hs] : [ws, hi * ws / wi],
          _ref2 = _slicedToArray(_ref, 2),
          sx = _ref2[0],
          sy = _ref2[1];

      var scale = [ws / sx, hs / sy]; //[(ws/sx)*ws,(hs/sy)*hs]

      if (!uniforms["scale_".concat(name)]) {
        uniforms["scale_".concat(name)] = {
          type: 'f2',
          value: scale
        };
      } else {
        uniforms["scale_".concat(name)] = scale;
      } // center


      var wn = sx; //(ws/sx)*ws;

      var hn = sy; // const tx = ( -(ws - wn)/2)/ws;
      // const ty = ((ws-hn)/2)/ws;

      var tx = (ws / 2 - wn / 2) / wn; ///((- ((ws - wn)/2))/ws)+;

      var ty = (hs - hn) / 2 / ws;

      if (!uniforms["transform_".concat(name)]) {
        uniforms["transform_".concat(name)] = {
          type: 'f2',
          value: [tx, ty]
        };
      } else {
        uniforms["transform_".concat(name)] = [tx, ty];
      }

      console.log('size', tx, ty); //,{wi,hi,ri,rs})

      uniforms[name] = texture;
    });

    this.filter = filter;
    this.uniforms = _uniforms;
    this.cachedTextures = {};
    document.addEventListener('click', function () {
      _this._userInteracted = true;
    });
  };

  function filterManagerMixin(fm) {
    if (fm.prepareBackdrop) { return; }
    fm.pushFilter = pushFilter;
    fm.popFilter = popFilter;
    fm.syncUniforms = syncUniforms;
    fm.prepareBackdrop = prepareBackdrop;
  }

  function pushFilter(target, filters) {
    var renderer = this.renderer;
    var filterData = this.filterData;

    if (!filterData) {
      filterData = this.renderer._activeRenderTarget.filterStack; // add new stack

      var filterState = new FilterState();
      filterState.sourceFrame = filterState.destinationFrame = this.renderer._activeRenderTarget.size;
      filterState.renderTarget = renderer._activeRenderTarget;
      this.renderer._activeRenderTarget.filterData = filterData = {
        index: 0,
        stack: [filterState]
      };
      this.filterData = filterData;
    } // get the current filter state..


    var currentState = filterData.stack[++filterData.index];
    var renderTargetFrame = filterData.stack[0].destinationFrame;

    if (!currentState) {
      currentState = filterData.stack[filterData.index] = new FilterState();
    }

    var fullScreen = target.filterArea && target.filterArea.x === 0 && target.filterArea.y === 0 && target.filterArea.width === renderer.screen.width && target.filterArea.height === renderer.screen.height; // for now we go off the filter of the first resolution..

    var resolution = filters[0].resolution;
    var padding = filters[0].padding | 0;
    var targetBounds = fullScreen ? renderer.screen : target.filterArea || target.getBounds(true);
    var sourceFrame = currentState.sourceFrame;
    var destinationFrame = currentState.destinationFrame;
    sourceFrame.x = (targetBounds.x * resolution | 0) / resolution;
    sourceFrame.y = (targetBounds.y * resolution | 0) / resolution;
    sourceFrame.width = (targetBounds.width * resolution | 0) / resolution;
    sourceFrame.height = (targetBounds.height * resolution | 0) / resolution;

    if (!fullScreen) {
      if (filterData.stack[0].renderTarget.transform) ; else if (filters[0].autoFit) {
        sourceFrame.fit(renderTargetFrame);
      } // lets apply the padding After we fit the element to the screen.
      // this should stop the strange side effects that can occur when cropping to the edges


      sourceFrame.pad(padding);
    }

    for (var i = 0; i < filters.length; i++) {
      var backdrop = null;
      console.log('uniforms', filters);

      if (filters[i].backdropUniformName) {
        if (backdrop === null) {
          backdrop = this.prepareBackdrop(sourceFrame);
        }

        filters[i]._backdropRenderTarget = backdrop;
      }
    }

    destinationFrame.width = sourceFrame.width;
    destinationFrame.height = sourceFrame.height; // lets play the padding after we fit the element to the screen.
    // this should stop the strange side effects that can occur when cropping to the edges

    var renderTarget = this.getPotRenderTarget(renderer.gl, sourceFrame.width, sourceFrame.height, resolution);
    currentState.target = target;
    currentState.filters = filters;
    currentState.resolution = resolution;
    currentState.renderTarget = renderTarget; // bind the render target to draw the shape in the top corner..

    renderTarget.setFrame(destinationFrame, sourceFrame); // bind the render target

    renderer.bindRenderTarget(renderTarget);
    renderTarget.clear(filters[filters.length - 1].clearColor || [0, 0, 0, 0]);
  }

  function popFilter() {
    var filterData = this.filterData;
    var lastState = filterData.stack[filterData.index - 1];
    var currentState = filterData.stack[filterData.index];
    this.quad.map(currentState.renderTarget.size, currentState.sourceFrame).upload();
    var filters = currentState.filters;

    if (filters.length === 1) {
      filters[0].apply(this, currentState.renderTarget, lastState.renderTarget, false, currentState);
      this.freePotRenderTarget(currentState.renderTarget);
    } else {
      var flip = currentState.renderTarget;
      var flop = this.getPotRenderTarget(this.renderer.gl, currentState.sourceFrame.width, currentState.sourceFrame.height, currentState.resolution);
      flop.setFrame(currentState.destinationFrame, currentState.sourceFrame); // finally lets clear the render target before drawing to it..

      flop.clear();
      var i = 0;

      for (i = 0; i < filters.length - 1; ++i) {
        filters[i].apply(this, flip, flop, true, currentState);
        var t = flip;
        flip = flop;
        flop = t;
      }

      filters[i].apply(this, flip, lastState.renderTarget, false, currentState);
      this.freePotRenderTarget(flip);
      this.freePotRenderTarget(flop);
    }

    currentState.clear();
    var backdropFree = false;

    for (var _i = 0; _i < filters.length; _i++) {
      if (filters[_i]._backdropRenderTarget) {
        if (!backdropFree) {
          this.freePotRenderTarget(filters[_i]._backdropRenderTarget);
          backdropFree = true;
        }

        filters[_i]._backdropRenderTarget = null;
      }
    }

    filterData.index--;

    if (filterData.index === 0) {
      this.filterData = null;
    }
  }

  function syncUniforms(shader, filter) {
    var renderer = this.renderer;
    var gl = renderer.gl;
    var uniformData = filter.uniformData;
    var uniforms = filter.uniforms; // 0 is reserved for the PixiJS texture so we start at 1!

    var textureCount = 1;
    var currentState; // filterArea and filterClamp that are handled by FilterManager directly
    // they must not appear in uniformData

    if (shader.uniforms.filterArea) {
      currentState = this.filterData.stack[this.filterData.index];
      var filterArea = shader.uniforms.filterArea;
      filterArea[0] = currentState.renderTarget.size.width;
      filterArea[1] = currentState.renderTarget.size.height;
      filterArea[2] = currentState.sourceFrame.x;
      filterArea[3] = currentState.sourceFrame.y;
      shader.uniforms.filterArea = filterArea;
    } // use this to clamp displaced texture coords so they belong to filterArea
    // see displacementFilter fragment shader for an example


    if (shader.uniforms.filterClamp) {
      currentState = currentState || this.filterData.stack[this.filterData.index];
      var filterClamp = shader.uniforms.filterClamp;
      filterClamp[0] = 0;
      filterClamp[1] = 0;
      filterClamp[2] = (currentState.sourceFrame.width - 1) / currentState.renderTarget.size.width;
      filterClamp[3] = (currentState.sourceFrame.height - 1) / currentState.renderTarget.size.height;
      shader.uniforms.filterClamp = filterClamp;
    } // TODO Caching layer..


    for (var i in uniformData) {
      if (!shader.uniforms.data[i]) {
        continue;
      }

      if (i === filter.backdropUniformName) {
        var rt = filter._backdropRenderTarget;
        shader.uniforms[i] = textureCount;
        renderer.boundTextures[textureCount] = renderer.emptyTextures[textureCount];
        gl.activeTexture(gl.TEXTURE0 + textureCount);
        gl.bindTexture(gl.TEXTURE_2D, rt.texture);
        textureCount++; // continue;
      }

      var type = uniformData[i].type;

      if (type === 'sampler2d' && uniforms[i] !== 0) {
        if (uniforms[i].baseTexture) {
          shader.uniforms[i] = this.renderer.bindTexture(uniforms[i].baseTexture, textureCount);
        } else {
          shader.uniforms[i] = textureCount;
          var _gl = this.renderer.gl;
          renderer.boundTextures[textureCount] = renderer.emptyTextures[textureCount];

          _gl.activeTexture(_gl.TEXTURE0 + textureCount);

          uniforms[i].texture.bind();
        }

        textureCount++;
      } else if (type === 'mat3') {
        // check if its PixiJS matrix..
        if (uniforms[i].a !== undefined) {
          shader.uniforms[i] = uniforms[i].toArray(true);
        } else {
          shader.uniforms[i] = uniforms[i];
        }
      } else if (type === 'vec2') {
        // check if its a point..
        if (uniforms[i].x !== undefined) {
          var val = shader.uniforms[i] || new Float32Array(2);
          val[0] = uniforms[i].x;
          val[1] = uniforms[i].y;
          shader.uniforms[i] = val;
        } else {
          shader.uniforms[i] = uniforms[i];
        }
      } else if (type === 'float') {
        if (shader.uniforms.data[i].value !== uniformData[i]) {
          shader.uniforms[i] = uniforms[i];
        }
      } else {
        shader.uniforms[i] = uniforms[i];
      }
    }
  }
  /**
   * Takes a part of current render target corresponding to bounds
   * fits sourceFrame to current render target frame to evade problems
   *
   * @param {PIXI.Rectangle} bounds backdrop region, can be modified inside
   * @returns {PIXI.RenderTarget} pooled renderTexture with backdrop
   */


  function prepareBackdrop(bounds) {
    var renderer = this.renderer;
    var renderTarget = renderer._activeRenderTarget;

    if (renderTarget.root) {
      return null;
    }

    var resolution = renderTarget.resolution;
    var fr = renderTarget.sourceFrame || renderTarget.destinationFrame;
    bounds.fit(fr);
    var x = (bounds.x - fr.x) * resolution;
    var y = (bounds.y - fr.y) * resolution;
    var w = bounds.width * resolution;
    var h = bounds.height * resolution;
    var gl = renderer.gl;
    var rt = this.getPotRenderTarget(gl, w, h, 1);
    renderer.boundTextures[1] = renderer.emptyTextures[1];
    gl.activeTexture(gl.TEXTURE0 + 1);
    gl.bindTexture(gl.TEXTURE_2D, rt.texture.texture);
    gl.copyTexSubImage2D(gl.TEXTURE_2D, 0, 0, 0, x, y, w, h);
    return rt;
  }

  var FilterState = /*#__PURE__*/function () {
    function FilterState() {
      _classCallCheck(this, FilterState);

      _defineProperty(this, "renderTarget", null);

      _defineProperty(this, "target", null);

      _defineProperty(this, "resolution", 1);

      _defineProperty(this, "sourceFrame", new PIXI$1.Rectangle());

      _defineProperty(this, "destinationFrame", new PIXI$1.Rectangle());

      _defineProperty(this, "filters", []);
    }

    _createClass(FilterState, [{
      key: "clear",

      /**f
       * clears the state
       */
      value: function clear() {
        this.filters = null;
        this.target = null;
        this.renderTarget = null;
      }
    }]);

    return FilterState;
  }();

  exports.AccessibilityManager = AccessibilityManager;
  exports.BeeldBendFilter = BeeldBendFilter;
  exports.BeeldFlagFilter = BeeldFlagFilter;
  exports.BeeldWaveFilter = BeeldWaveFilter;
  exports.Canvas = Canvas;
  exports.ColorUtils = ColorUtils;
  exports.DepthPerspectiveFilter = index;
  exports.DeviceUtil = DeviceUtil;
  exports.DisplacementFilter = DisplacementFilterComponent;
  exports.DistortionHoverFilter = DistortionHoverFilterComponent;
  exports.Div = Div;
  exports.EMPTY = EMPTY;
  exports.EaseUtil = Ease;
  exports.FpsController = FPSController$1;
  exports.ImageBeeldFilter = ImageBeeldFilterComponent;
  exports.Img = Img;
  exports.NoiseFilter = NoiseFilter;
  exports.ParrallaxHoverFilter = ParrallaxHoverFilterComponent;
  exports.PixiUtils = PIXIUtlis;
  exports.ScanLineFilter = ScanLineFilter;
  exports.TextureLoader = TextureLoader$2;
  exports.TextureUtils = TextureUtils;
  exports.VHSFilter = VHSFilter;
  exports.Vec2Util = Vec2Util;
  exports.WaterBeeldFilter = ReactWaterBeeldFilter;
  exports.animate = createAnimate;
  exports.filterManagerMixin = filterManagerMixin;
  exports.plot = plot2;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
