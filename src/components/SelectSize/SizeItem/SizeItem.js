import React from 'react';

const SizeItem = (props) => {
  return (
    <div className="size-item-wrapper" onClick={props.checkItem}>
      <div className={'size-item' + (props.selected ? ' selected-size' : '')}>
        <div className="size">
          {props.size.name}
        </div>
        <div className="price">
          {props.size.price}
        </div>
      </div>
    </div>
  );
};

export default SizeItem;
