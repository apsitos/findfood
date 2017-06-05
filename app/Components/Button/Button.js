import React from 'react';
require('./button-style.scss');

const Button = (props) => {
  return (
    <button id={props.id} onClick={() => props.handleClick()}>{props.name}</button>
  );
}

export default Button;
