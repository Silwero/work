import React from 'react';
import { Row, Col } from 'reactstrap';
import './Columns.css';
import ReviewContent from './../ReviewContent/ReviewContent';
import TextContent from './../TextContent/TextContent';
import Slider from 'react-slick';


const Columns = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  let columns = props.data.map((el, i) => {
    let content = null;
    if (el.type === 'text') {
      content = <TextContent
        wrapped={props.wrappedColumns}
        header={el.header}
        icon={el.icon}
        description={el.description}
        dataType={el.type} />;
    } else if (el.type === 'review') {
      content = <ReviewContent
        img={el.img}
        name={el.name}
        user={el.userType}
        avatar={el.avatar} />;
    }

    return <Col key={i} className="column-wrapper">
      {content}
    </Col>;
  });

  return (
    <div className={'columns' + (props.colored ? ' colored-columns' : '') + (props.wrappedColumns ? ' columns-wrapped' : '')}>
      <Slider {...settings}>
        {columns}
      </Slider>
    </div>
  );
};

export default Columns;
