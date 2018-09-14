import React from 'react';
import { Row, Col } from 'reactstrap';
import Icons from './../Icons/Icons';

const Rewards = (props) => {
  return (
    <div className="rewards">
      <Row>
        <Col lg="4">
          <Icons.thumb />
        </Col>
        <Col lg="4">
          <Icons.affirm />
        </Col>
        <Col lg="4">
          <Icons.recco />
        </Col>
      </Row>
    </div>
  );
};

export default Rewards;
