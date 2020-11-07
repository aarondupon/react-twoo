/*
 * react-twoo
 * undefined
 * https://github.com/aarondupon/react-twoo
 * v0.1.0
 * undefined License
 */

'use strict';

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
        port: window.__REACT_DEVTOOLS_PORT__
      });
    }
  };

  register(reactDevTools);

  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.on('react-devtools', function (agent) {
    agent.addListener('showNativeHighlight', function (_a) {
      var node = _a.node; // UIManager.setBoundingBoxVisible(node, true);
    });
    agent.addListener('hideNativeHighlight', function () {
    });
  });

  global.registerDevtoolsPlugin = register;
}

module.exports = {
  register: register
};
