const DeviceUtil = {
  isTouchDevice(){
    return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
    }
}

export default DeviceUtil