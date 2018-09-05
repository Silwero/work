import React from 'react';

const PlayIcon = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="51" height="51" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25.916" cy="25.081" r="23.5" fill="#fff" fillOpacity=".4" stroke="#009BD8" strokeWidth="3"/><path d="M34.878 22.483c2 1.155 2 4.042 0 5.197l-11.192 6.462c-2 1.154-4.5-.29-4.5-2.599V18.62c0-2.31 2.5-3.753 4.5-2.598l11.192 6.462z" fill="#009BD8"/></svg>
    </span>
  );
};

export default PlayIcon;
