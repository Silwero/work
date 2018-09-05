import './CheckProduct.css';

import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import Slider from 'react-slick';
import Rating from './../Rating/Rating';
import SelectSize from './../SelectSize/SelectSize';

const CheckProduct = (props) => {
  const settings = {
    dots: false,
    arrows: false
  };

  let images = props.images.map((img, i) => {
    return <div className="product-slide">
      <div><img src={img} alt={props.header}/></div>
    </div>;
  });

  return (
    <section className="check-product">
      <Container>
        <Row>
          <Col lg="7">
            <Slider {...settings} >
              {images}
            </Slider>
          </Col>
          <Col lg="5">
            <h1>{props.header}</h1>
            <Rating stars={props.rating} />
            <div className="product-description">
              {props.description}
            </div>
            <SelectSize />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CheckProduct;
