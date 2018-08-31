import React from 'react';
import { Col } from 'reactstrap';
import Icons from './../../Icons/Icons';

const Column = (props) => {
  const Icon = Icons[props.icon];

  return (
    <Col>
      {props.icon ? <Icon /> : null}
      <h3 className="columns-header">
        {props.header}
      </h3>
      <div className="columns-description">
        {props.description}
      </div>
    </Col>
  );
};

export default Column;
