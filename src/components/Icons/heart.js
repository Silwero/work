import React from 'react';

const HeartIcon = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="52" height="47" viewBox="0 0 52 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.5 1C33.0833 1 27.75 4.47222 26 9.2672C24.25 4.47222 18.9167 1 13.5 1C10.1848 1 7.00537 2.30651 4.66117 4.63211C2.31696 6.95771 1 10.1119 1 13.4008C1 24.1481 10.1667 34.8955 26 45.6429C41.8333 34.8955 51 24.1481 51 13.4008C51 10.1119 49.683 6.95771 47.3388 4.63211C44.9946 2.30651 41.8152 1 38.5 1V1Z" stroke="#CCCCCC" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
};

export default HeartIcon;
