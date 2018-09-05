import React from 'react';

const SmileIcon = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 25c6.627 0 12-5.373 12-12S19.627 1 13 1 1 6.373 1 13s5.373 12 12 12z" stroke="#4D4D4D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.4 16.56c-2.08 3.52-6.64 4.68-10.12 2.6-1.12-.64-2.04-1.6-2.68-2.72M9 11.4a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zM17 11.4a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6z" stroke="#4D4D4D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
};

export default SmileIcon;
