import React from 'react';
import './SizeItem.css';

const SizeItem = (props) => {
  return (
    <div className="selecteble-item">
      {props.size.name}
      {props.size.price}
    </div>
  );
};

export default SizeItem;
