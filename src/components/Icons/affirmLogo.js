import React from 'react';

const affirmLogo = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 30C6.7 30 0 23.3 0 15S6.7 0 15 0s15 6.7 15 15-6.8 15-15 15zm0-28.7C7.5 1.3 1.4 7.4 1.4 14.9S7.5 28.5 15 28.5s13.6-6.1 13.6-13.6S22.5 1.3 15 1.3z" fill="#009BD8"/><path d="M19.6 19.4V10c0-1-.8-1.8-1.7-1.9-.7 0-1.3.2-1.7.7l-5.3 6.7-2.4 3.1-.7.9h2.4c.6 0 1.2-.3 1.5-.7l.1-.1 5.1-6.5v7.3h2.7v-.1z" fill="#009BD8"/></svg>
    </span>
  );
};

export default affirmLogo;
