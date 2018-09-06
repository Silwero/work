import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import Slider from 'react-slick';
import Rating from './../Rating/Rating';
import SelectSize from './../SelectSize/SelectSize';
import Icons from './../Icons/Icons';

const CheckProduct = (props) => {
  const sliderSettings = {
    dots: false,
    arrows: false
  };

  let images = props.images.map((img, i) => {
    return <div key={'slider-img' + i} className="product-slide">
      <div><img src={img} alt={props.header}/></div>
    </div>;
  });

  return (
    <section className="check-product">
      <Container>
        <Row>
          <Col lg="7">
            <Slider {...sliderSettings} >
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
            <div className="product-footer-link">
              <a href="#1"><Icons.affirm classes="inline-icon" /> As low as $67/month at 0% APR. Pre-qualify</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CheckProduct;
