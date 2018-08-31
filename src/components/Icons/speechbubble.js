import React from 'react';

const SpeechBubble = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" fill="black" fillOpacity="0" transform="translate(1 1)"/>
        <path d="M17 1H1V12.9638H3.77895V17L7.63474 12.9638H17V1Z" stroke="#828282" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
};

export default SpeechBubble;
