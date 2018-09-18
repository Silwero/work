import React from 'react';
import ReviewerInfo from './../Review/ReviewerInfo/ReviewerInfo';
import { Container, Row, Col } from 'reactstrap';
import Bonuses from './../Bonuses/Bonuses';

const SectionWithBackground = (props) => {
  return (
    <section className="section-with-background-img" style={{
      backgroundImage: props.bg ? 'url(' + props.bg + ')' : null
    }}>
      <Container>
        <Row>
          <Col lg="5">
            <h1>{props.header}</h1>
            <div className="section-description">
              {props.description}
            </div>
            <ReviewerInfo
              avatar={props.reviewer.avatar}
              name={props.reviewer.name}
              info={props.reviewer.info} />
            <Bonuses />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionWithBackground;
