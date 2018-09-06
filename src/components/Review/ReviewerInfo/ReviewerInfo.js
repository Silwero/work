import React from 'react';

const ReviewerInfo = (props) => {
  return (
    <div className={
      'reviewer' +
      (props.vertival ? ' reviewer-vertical' : '') +
      (props.vertival ? ' reviewer-primary-color' : '')}>
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
          {props.info}
        </div>
      </div>
    </div>
  );
};

export default ReviewerInfo;
