import React from 'react';
import Icons from './../Icons/Icons';
import './TextContent.css';

const TextContent = (props) => {
  const Icon = Icons[props.icon];

  return (
    <div className={'column' + (props.wrapped ? ' column-wrapped' : '')}>
      {props.icon ? <Icon classes="column-icon" /> : null}
      <h3 className="column-header">
        {props.header}
      </h3>
      <div className="column-description">
        test
        {props.description}
      </div>
    </div>
  );
};

export default TextContent;
