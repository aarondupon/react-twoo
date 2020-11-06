import React from 'react';
import propTypes from 'prop-types';
import BeeldBendFilter from './BeeldBendFilter';
import moize from 'moize';


const ReactBeeldBendFilter = (props)=>{
    const {children,textures,scale,tension,filters,mouse} = props
    const filter = new BeeldBendFilter(textures);
    Object.assign(filter,props);
    console.log('ReactBeeldBendFilter render')
   return  React.Children.map(children, child =>  
        React.cloneElement(child,{
            ...child.props,
            filters:[filter,...filters],
        },child.props.children))
}
ReactBeeldBendFilter.propTypes = {
    sprite: propTypes.any,
    mouse: propTypes.any,
}
ReactBeeldBendFilter.defaultProps = {
    sprite:'',
    filters:[],
    mouse:{x:0,y:0},
    tension:1,
    scale:{x:1,y:1}
}
export default moize.react(ReactBeeldBendFilter);

// const ReactBeeldBendFilter = ({children,textures,scale,tension,filters,mouse})=>{
//     const filter = new BeeldBendFilter(textures);
//    if(mouse.subscribe){
//     mouse.subscribe((m)=>{
       
//         filter.mouse = m
//     })
//    }else{
//     filter.mouse = mouse;
//    }
//    if(tension.subscribe){
//     tension.subscribe((m)=>{
      
//         filter.tension = m
//     })
//    }else{
//     filter.tension = tension;
//    }
//    if(scale){
//     if(scale.subscribe){
//         scale.subscribe((m)=>{
//             filter.scale = m
//         })
//        }else{
//         filter.scale = scale;
//        }
//    }
//    console.log('render fuck',scale,tension)
//    return  React.Children.map(children, child =>  
//         React.cloneElement(child,{
//             ...child.props,
//             filters:[filter,...filters],
//         },child.props.children))
// }
// ReactBeeldBendFilter.propTypes = {
//     sprite: propTypes.any,
//     mouse: propTypes.any,
// }
// ReactBeeldBendFilter.defaultProps = {
//     sprite:'',
//     filters:[],
//     mouse:{x:0,y:0},
//     tension:1,
//     scale:{x:1,y:1}
// }
// export default moize.react(ReactBeeldBendFilter);