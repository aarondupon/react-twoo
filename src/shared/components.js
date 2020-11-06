import * as PIXI from 'pixi.js';
import '../pixi.js/html/Div';
import '../pixi.js/html/Img';
// import '../pixi.js/html/DivAnimated';

// import TextContent from '../pixi.js/html/TextContent';
// import SDFTextContent from '../pixi.js/html/SDFTextContent';
// import '../pixi.js/extras/IlluminateRender/Illuminate';
// import '../pixi.js/extras/SliderRender/Slider';

function getHtmlText(dangerouslySetInnerHTML){
    if(dangerouslySetInnerHTML){
      return dangerouslySetInnerHTML.__html
    }
} 

function getStyle(styles,style){
    return {...styles,default:style};
}


export const COMPONENTS = {
    TEXT: (props) => new PIXI.Text(
        props.text || props,
        props.textStyleOptions,
        props.canvas
    ),
    // display
    displayobject: (props) => new PIXI.DisplayObject(),
    container: (props) => new PIXI.Container(),
    // grapics
    graphics: (props) => new PIXI.Graphics(props.nativeLines),
    // sprite
    sprite: (props) => new PIXI.Sprite(props.baseTexture),
    'sprite-fromImage': (props) => {
        const image = PIXI
            .Div
            .fromImage(props.url)
        image.x = props.x;
        image.y = props.y;
        return image
    },
    baseRenderTexture: (props) => new PIXI.BaseRenderTexture(
        props.width,
        props.height
    ),
    // html mapping MAP HTML
    div: (props) => new PIXI.Div(props),
    img: (props) => new PIXI.Img(props),
    slider: (props) => new PIXI.Slider(props),
    //text elements
    // textContent: (props) => new TextContent(props),
    // sdfTextContent: (props) => new SDFTextContent(props),
    h1: (props) => {console.log('propspropspropsprops',props); return new SDFTextContent(props)},
    illuminate: (props) => {console.log('propspropspropsprops',props); return new PIXI.Illuminate(props)},
    //slider: (props) => new PIXI.Sprite(props.baseTexture),
    // 'div-animated': (props) => new PIXI.DivAnimated(props),
    default: (props) => new PIXI.Container()
}


export const Animated = {
    div:'div-animated'
}