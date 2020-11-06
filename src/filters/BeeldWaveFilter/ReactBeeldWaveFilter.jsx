import React, { Component } from 'react'
import propTypes from 'prop-types';
import BeeldWaveFilter from './BeeldWaveFilter';

// const Static = Component => class extends React.Component {
//     shouldComponentUpdate(nextProps) {
//         return this.props.tension !== nextProps.tension
//     }
//     render() {
//         return <Component {...this.props} />;
//     }
// };



class ReactBeeldWaveFilter extends Component {
  constructor(props){
    super();
    const {textures,tension,mouse} = props;
    const filter = new BeeldWaveFilter(textures);
    if(mouse.subscribe){
     mouse.subscribe((m)=>{
        
         filter.mouse = m
     })
    }else{
     filter.mouse = mouse;
    }
    if(tension.subscribe){
     tension.subscribe((m)=>{
       
         filter.tension = m
     })
    }else{
     filter.tension = tension;
    }
    this.filter = filter;
  }
  render() {
    const {children,filters} = this.props;
    return  React.Children.map(children, child =>  
        React.cloneElement(child,{
            ...child.props,
            filters:[this.filter,...filters],
        },child.props.children))
  }
}

// const ReactBeeldWaveFilter = ({children,textures,tension,filters,mouse})=>{
//     const filter = new BeeldWaveFilter(textures);
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
//    return  React.Children.map(children, child =>  
//         React.cloneElement(child,{
//             ...child.props,
//             filters:[filter,...filters],
//         },child.props.children))
// }
ReactBeeldWaveFilter.propTypes = {
    sprite: propTypes.any,
    mouse: propTypes.any,
}
ReactBeeldWaveFilter.defaultProps = {
    sprite:'',
    filters:[],
    mouse:{x:0,y:0},
    tension:0,
}
export default ReactBeeldWaveFilter;