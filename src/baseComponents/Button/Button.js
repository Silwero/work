import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.action} className={props.className}>
      {props.children}
    </button>
  );
};

export default Button;
