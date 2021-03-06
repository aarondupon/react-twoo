import * as PIXI from 'pixi.js'
export const DISPLAY_OBJECT_PROPS = {
    // alpha: 1,
    cursor: 'pointer',
    
    // if included, props.children would be used! children:null,
    filterArea: null,
    filters: null,
    shader:null,
    // pivot: new PIXI.Point(0, 0),
    anchor: .0,
    renderable: true,
    rotation: 0,
    scale: new PIXI.Point(1, 1),
    visible: true,
    width:null, 
    height:null,
    // special props see below ! width:0, height:0,
    interactive: false,
    buttonMode: false,
    hitArea: null,
    // blendMode: null,
    x:0,
    y:0,
    alpha:undefined,
    blendMode:undefined,
    accessibleTitle:'null',
    accessible:'null',
    button:false,
    pluginName:undefined,

    scaleX:1,
    scaleY:1

};