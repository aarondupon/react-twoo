
import React from 'react';
import BeeldSliderFilter from './BeeldSliderFilter';

export {default as BeeldSliderFilter} from './BeeldSliderFilter';
const ReactBeeldSliderFilter = (props)=>{
    const {
        sprite ='',
        filters =[],
        filter = new BeeldSliderFilter(),
        mouse = {x:0,y:0,z:0},
        tension = 1,
        scale = {x:1,y:1},

        children,
        textures,
        prev,
        current,
        next
    } = props;

    if(filter) Object.assign(filter,props);
    return  React.Children.map(children, child =>  
         React.cloneElement(child,{
             ...child.props,
             filters:filter ?[filter,...filters]:filters,
         },child.props.children))
}
// ReactBeeldSliderFilter.propTypes = {
//     sprite: propTypes.any,
//     mouse: propTypes.any,
// }

export default ReactBeeldSliderFilter;
