import React from 'react';

const Detail = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="37" height="52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1v50h34.615V14.333L22.43 1H1z" stroke="#4D4D4D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M22.429 1v13.333h13.186M9.242 42.666h14.835m-14.835-25h6.593-6.593zm0 8.334h18.132H9.242zm0 8.333h18.132H9.242z" stroke="#4D4D4D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
};

export default Detail;
