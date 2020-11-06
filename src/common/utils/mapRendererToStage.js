const map = new Map()
const map2 = new Map()
const canvasToStageMap = new Map();

export const mapRender = (stage,renderer) =>
        map[stage] = renderer;

export const getRender = (stage) => map[stage]

export const mapStage = (stage,renderer) =>
        map2[renderer] = stage;

export const getStage = (renderer) => map2[renderer]


export const mapCanvasToStage = (canvas,stage)=>
        canvasToStageMap[canvas] = stage;

export const getStageFromCanvas = (canvas) => 
         canvasToStageMap[canvas]
