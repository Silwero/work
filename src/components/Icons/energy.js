import React from 'react';

const EnergyIcon = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 13.2231H13.5385L16.1026 1L6 16.7769H12.5128L9.94872 29L20 13.2231Z" stroke="#4D4D4D" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    </span>
  );
};

export default EnergyIcon;
