/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

var _rollupPluginBabelHelpers = require('../../../../../../_virtual/_rollupPluginBabelHelpers.js');
var index = require('../../../../../../node_modules/pixi.js/lib/core/index.js');
var accessibleTarget = require('./accessibleTarget.js');
var FpsController = require('../common/FpsController.js');

var fpsController = new FpsController(); // add some extra variables to the container..

index.utils.mixins.delayMixin(index.DisplayObject.prototype, accessibleTarget['default']);
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
    _rollupPluginBabelHelpers.classCallCheck(this, AccessibilityManager);

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


  _rollupPluginBabelHelpers.createClass(AccessibilityManager, [{
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

      if (!fpsController.checkfps(12)) { return; } //  console.log('update:HTMLRENDER')
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
          index.utils.removeItems(this.children, i, 1);
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
index.WebGLRenderer.registerPlugin('accessibility', AccessibilityManager); // core.CanvasRenderer.registerPlugin('accessibility', AccessibilityManager);

module.exports = AccessibilityManager;
