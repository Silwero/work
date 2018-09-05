import React from 'react';

const MinusIcon = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 35c9.389 0 17-7.611 17-17S27.389 1 18 1 1 8.611 1 18s7.611 17 17 17zM27.067 18H8.933" stroke="#202020" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
};

export default MinusIcon;
