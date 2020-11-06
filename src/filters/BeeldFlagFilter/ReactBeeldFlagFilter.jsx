import React from 'react';
import propTypes from 'prop-types';
import BeeldFlagFilter from './BeeldFlagFilter';
/**
 * 
 * @param {*} param0 
 */
const ReactBeeldFlagFilter = ({children,textures,filters,mouse})=>{
    const filter = new BeeldFlagFilter(textures);
   if(mouse.subscribe){
    mouse.subscribe((m)=>filter.mouse = m)
   }else{
    filter.mouse = mouse;
   }
   return  React.Children.map(children, child =>  
        React.cloneElement(child,{
            ...child.props,
            filters:[filter,...filters],
        },child.props.children))
}
ReactBeeldFlagFilter.propTypes = {
    sprite: propTypes.any,
    mouse: propTypes.any,
}
ReactBeeldFlagFilter.defaultProps = {
    sprite:'',
    filters:[],
    mouse:[0,0]
}
export default ReactBeeldFlagFilter;