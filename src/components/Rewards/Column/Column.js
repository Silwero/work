import React from 'react';
import Icons from './../../Icons/Icons';
import { Col } from 'reactstrap';

const Column = (props) => {
  const Icon = Icons[props.icon];

  let rating = null;
  if (props.rating) {
    rating = [];
    for (let index = 0; index < props.rating; index++) {
      rating.push(<Icons.star key={'star' + index} />);
    }
  }

  return (
    <Col lg="4" className="rewards-column">
      <div className="reward-icon">
        <Icon />
      </div>
      <div className="rewards-text">
        <div className="reward-rating">{rating}</div>
        <span>{props.text}</span>
      </div>
    </Col>
  );
};

export default Column;
