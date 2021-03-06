import React from 'react';

const StarIcon = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 0l2.806 8.637h9.082l-7.347 5.338 2.806 8.638-7.347-5.338-7.347 5.338 2.806-8.638L.612 8.637h9.082L12.5 0z" className="svg-main"/></svg>
    </span>
  );
};

export default StarIcon;
