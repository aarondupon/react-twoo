import * as PIXI from 'pixi.js';
import Div from './pixi.js/html/Div';
import Img from './pixi.js/html/Img';


export type EventHandlers = {
    onClick?: (event: MouseEvent) => void
    onContextMenu?: (event: MouseEvent) => void
    onDoubleClick?: (event: MouseEvent) => void
    onPointerUp?: (event: PointerEvent) => void
    onPointerDown?: (event: PointerEvent) => void
    onPointerOver?: (event: PointerEvent) => void
    onPointerOut?: (event: PointerEvent) => void
    onPointerMove?: (event: PointerEvent) => void
    onWheel?: (event: WheelEvent) => void
}



export interface NodeProps<T, P> {
    /** Constructor arguments */
    children?: React.ReactNode
    ref?: React.Ref<React.ReactNode>
    key?: React.Key
    onUpdate?: (self: T) => void
}

// export type Node<T, P> = <Partial<T>, NodeProps<T, P>>

type Node<P,T> = (props:P) =>T

declare global {
  namespace JSX {
    interface IntrinsicElements {
        TEXT: Node<{},PIXI.Text>
        //  (props: PIXI.Text) => PIXI.Text
        // display
        displayobject: Node<{},PIXI.DisplayObject>
        container: Node<{},PIXI.Container>
        // grapics
        graphics: Node<{},PIXI.Graphics>
        // sprite
        sprite:Node<{},PIXI.Sprite>
        'sprite-fromImage': (props: any) => PIXI.Sprite
        baseRenderTexture: Node<{},PIXI.BaseRenderTexture>
        // html mapping MAP HTML
        div: Node<{},typeof Div>
        img: Node<{},typeof Img>
        default:Node<{},PIXI.Container>
        // text elements
        // textContent: (props) => new TextContent(props),
        // sdfTextContent: (props) => new SDFTextContent(props),
        // h1: (props) => {console.log('propspropspropsprops',props); return new SDFTextContent(props)},
        // illuminate: (props) => {console.log('propspropspropsprops',props); return new PIXI.Illuminate(props)},
        // slider: (props) => new PIXI.Sprite(props.baseTexture),
        // 'div-animated': (props) => new PIXI.DivAnimated(props),

    }
  }
}