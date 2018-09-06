import React from 'react';
import Icons from './../Icons/Icons';
import Button from './../../baseComponents/Button/Button';
import ReviewerInfo from './../Review/ReviewerInfo/ReviewerInfo';

const ReviewContent = (props) => {

  return (
    <div className="review">
      <div className="review-video">
        <div className="play-btn">
          <Button>
            <Icons.play />
          </Button>
        </div>
        <img src={props.img} alt={props.name} />
      </div>
      <ReviewerInfo name={props.name} info={props.user} avatar={props.avatar} />
    </div>
  );
};

export default ReviewContent;
