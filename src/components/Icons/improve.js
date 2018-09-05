import React from 'react';

const ImproveIcon = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="26" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.152 6.244l.176-4.094-4.386-.802M21 27V10.111h3.2V27m-9.6 0V14.556h3.2V27m-9.6 0v-8h3.2v8M25 27H1M21 2.39L1.8 17.5m0 9.5v-3.555H5V27H1.8z" stroke="#4D4D4D" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
};

export default ImproveIcon;
