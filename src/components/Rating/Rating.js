import React from 'react';
import './Rating.css';
import Icons from './../Icons/Icons';

const Rating = (props) => {
  const stars = [];
  for (let index = 0; index < props.stars; index++) {
    stars.push(<Icons.star key={index} />);
  }

  return (
    <div className="rating">
      <div className="rating-stars">
        {stars}
      </div>
      <div className="rating-link">
        <a href="#1">Read Reviews</a>
      </div>
    </div>
  );
};

export default Rating;
