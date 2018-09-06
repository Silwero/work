import React from 'react';

const Checkbox = (props) => {
  return (
    <div onClick={props.checkHandler} className={'checkbox' +  (props.checked ? ' checkbox-checked' :  '')}>
      <input type="checkbox" checked={props.checked}/>
      <span>{props.text}</span>
    </div>
  );
};

export default Checkbox;
