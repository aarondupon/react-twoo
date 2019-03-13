// pixi methods
export const METHODS = {
    Graphics: {
        drawRect: (props) => (graphics) => graphics.drawRect(
            props.x,
            props.y,
            props.width,
            props.height
        ),
        drawRoundedRect: (props) => (graphics) => graphics.drawRect(
            props.x,
            props.y,
            props.width,
            props.height,
            props.radius
        ),
        lineStyle: (props) => (graphics) => graphics.lineStyle(
            props.lineWidth,
            props.color,
            props.alpha,
            props.alignemt
        ),
        beginFill: (props) => (graphics) => graphics.beginFill(props.color),
        clear: (props) => (graphics) => {
            graphics.clear()
        },
        drawCircle: (props) => (graphics) => graphics.drawCircle(
            props.x,
            props.y,
            props.radius
        ),
        drawPolygon: (props) => (graphics) => graphics.drawPolygon(props.path),
        endFill: (props) => (graphics) => graphics.endFill()
    }
}