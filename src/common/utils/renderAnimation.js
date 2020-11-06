import raf from 'raf';
var date = Date.now();
const FPS = 30
export const renderAnimationOnce = (renderer, stage,fps = FPS) => {
    const interval = 1000 / fps;
    const then = date;
    const now = Date.now();
    const delta = now - then;

    if (delta > interval && date) {
        date = now - (delta % interval);
        renderer.render(stage);

    }

};
let loop = null
export const renderAnimationRaf = (renderer, stage,fps = FPS) =>{
    cancelAnimationFrame(loop);
    const render = () =>{
        
        renderAnimationOnce(renderer, stage,fps);
        loop = requestAnimationFrame(render)   
    }
    loop = requestAnimationFrame(render)
    // const render = () =>{
    //     // renderAnimationOnce(renderer, stage,fps);
    //     renderer.render(stage);
    //     // raf(render)
        
    // }
    // raf(render)
}

export const forceRender = (renderer, stage) =>{
    // console.log('forceRender',renderer, stage)
    // renderer.render(stage);
    // setTimeout(()=>renderer.render(stage),0)

    // /raf(()=>renderer.render(stage))
}