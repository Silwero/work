import React from 'react';
import Icons from './../../components/Icons/Icons';
import Columns from './../../components/Columns/Columns';
import { Container } from 'reactstrap';
import Rating from './../../components/Rating/Rating';
import TwoBorderedColumns from './../../components/TwoBorderedColumns/TwoBorderedColumns';


const Section = (props) => {
  const Icon = Icons[props.icon];

  let columns = null;
  if (props.columns) {
    columns = <Columns
      wrappedColumns={props.wrappedColumns}
      colored={props.colored}
      data={props.columns} />;
  }

  let description = null;
  if (props.description) {
    description = <div className="section-description">{props.description}</div>;
  }

  let img = null;
  if (props.img) {
    img = <div className="section-img">
      <img src={props.img} alt="Alt text" />
    </div>;
  }

  let topIcon = null;
  if (props.topIcon) {
    const TopIcon =  Icons[props.topIcon];
    topIcon = <div className="section-top-icon">
      <TopIcon classes={'section-top-icon' + props.topIcon} />
    </div>;
  }

  let rating = null;
  if (props.rating) {
    rating = <Rating stars={props.rating} />;
  }

  let borderedColumns = null;
  if (props.borderedColumns) {
    borderedColumns = <TwoBorderedColumns />;
  }

  return (
    <section className={'section' + (props.dark ? ' section-dark' : '') + (props.bordered ? ' section-bordered' : '')}>
      <Container>
        <div className={'section-head' + (props.topIcon ? ' section-header-with-icon' : '')}>
          {topIcon}
          {Icon ? <Icon classes="section-icon" /> : null}
          <h2 className="section-header">
            {props.header}
          </h2>
          {description}
          {rating}
        </div>
        {img}
        {columns}
        {borderedColumns}
      </Container>
    </section>
  );
};

export default Section;
