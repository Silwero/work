import React from 'react';

const CommentsIcon = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="52" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.667 26.038v11.684H36.75L46 46.986v-9.264h5V19.36h-8.333" stroke="#CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M42.667 1H1v25.037h6.667v9.18l9.25-9.18h25.75V1z" stroke="#CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
};

export default CommentsIcon;
