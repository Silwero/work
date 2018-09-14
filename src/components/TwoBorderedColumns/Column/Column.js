import React from 'react';

const Column = (props) => {
  return (
    <div className="bordered-column">
      {props.header ? <h3>{props.header}</h3> : null}
      {props.children}
    </div>
  );
};

export default Column;
