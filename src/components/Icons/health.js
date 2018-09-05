import React from 'react';

const HealthIcon = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 35c9.389 0 17-7.611 17-17S27.389 1 18 1 1 8.611 1 18s7.611 17 17 17z" stroke="#202020" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M26.5 15.166h-5.1a.567.567 0 0 1-.567-.566V9.5a.567.567 0 0 0-.566-.567h-4.534a.566.566 0 0 0-.566.567v5.1a.567.567 0 0 1-.567.566H9.5a.567.567 0 0 0-.567.567v4.533a.567.567 0 0 0 .567.567h5.1a.567.567 0 0 1 .567.567v5.1a.567.567 0 0 0 .566.566h4.534a.567.567 0 0 0 .566-.566v-5.1a.567.567 0 0 1 .567-.567h5.1a.567.567 0 0 0 .567-.567v-4.533a.567.567 0 0 0-.567-.567z" stroke="#202020" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
};

export default HealthIcon;
