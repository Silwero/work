import React from 'react';
import { Container } from 'reactstrap';
import ReviewerInfo from './ReviewerInfo/ReviewerInfo';
import Icons from './../Icons/Icons';

const Review = (props) => {
  return (
    <div className="review-section">
      <Container>
        <div className="review">
          <blockquote>
            <div className="quote">
              <Icons.quotemark />
            </div>
            {props.review}
          </blockquote>
        </div>
        <ReviewerInfo
          colored
          vertical
          name={props.reviewer.name}
          info={props.reviewer.userType}
          avatar={props.reviewer.avatar} />
      </Container>
    </div>
  );
};

export default Review;
