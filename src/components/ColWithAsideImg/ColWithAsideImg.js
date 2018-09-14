import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import Slider from 'react-slick';
import Rating from '../Rating/Rating';
import SelectSize from '../SelectSize/SelectSize';
import Icons from '../Icons/Icons';

const ColWithAsideImg = (props) => {
  const sliderSettings = {
    dots: false,
    arrows: false
  };

  let images = null;
  if (props.images) {
    if (props.images.length > 1) {
      images = <Slider {...sliderSettings} >
        {props.images.map((img, i) => {
          return <div key={'slider-img' + i} className="product-slide">
            <div><img src={img} alt={props.header}/></div>
          </div>;
        })}
      </Slider>;
    } else {
      images = <img src={props.images[0]} alt=""/>;
    }
  }

  return (
    <section className="col-with-aside-img">
      <Container>
        <Row className="img-left">
          <Col lg="7">
            {images}
          </Col>
          <Col lg="5">
            <h2 className={props.headerClass}>{props.header}</h2>
            <Rating stars={props.rating} />
            <div className="product-description" dangerouslySetInnerHTML={{__html: props.description}}></div>
            {props.children}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ColWithAsideImg;
