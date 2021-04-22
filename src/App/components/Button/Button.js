import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Composant bouton dynamique
 * @param {*} props contenu de style/bgColor
 * @returns {node} struct of component
 */
function Button(props){
    console.log(props);

    return <div onClick={()=>{props.onclickbutton('Alerte !!!')}} className="Button" style={{backgroundColor:props.bgColor,...props.style}} >{props.title}</div>
}

Button.propTypes={
    title:PropTypes.string.isRequired,
    bgColor:PropTypes.string,
    onclickbutton:PropTypes.func.isRequired
}
Button.defaultProps={
    bgColor:'green',
    onclickbutton:()=>{console.log('Pas d action associée au bouton')}
}
export default Button;

