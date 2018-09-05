import React from 'react';
import Icons from './../Icons/Icons';
import './ReviewContent.css';

const ReviewContent = (props) => {

  return (
    <div className="review">
      <div className="review-video">
        <div className="play-btn">
          <Icons.play />
        </div>
        <img src={props.img} alt={props.name} />
      </div>
      <div className="reviewer">
        <div className="avatar-wrapper">
          <div className="avatar">
            <img src={props.avatar} alt={props.name} />
          </div>
        </div>
        <div className="reviewer-info">
          <div className="reviewer-name">
            {props.name}
          </div>
          <div className="reviewer-type">
            {props.user}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContent;
