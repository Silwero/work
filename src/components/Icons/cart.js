import React from 'react';

const Cart = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="19" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.293h2.875l3.02 10.667h9.2L18 4.865H5.852" stroke="#828282" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.742 16.15c0 .631-.515 1.143-1.15 1.143-.635 0-1.15-.512-1.15-1.143s.515-1.143 1.15-1.143c.635 0 1.15.512 1.15 1.143zM8.548 16.226c0 .59-.483 1.067-1.079 1.067a1.073 1.073 0 0 1-1.078-1.067c0-.589.483-1.066 1.078-1.066.596 0 1.079.477 1.079 1.066z" fill="#828282"/><path d="M16.742 16.15c0 .631-.515 1.143-1.15 1.143-.635 0-1.15-.512-1.15-1.143s.515-1.143 1.15-1.143c.635 0 1.15.512 1.15 1.143zM8.548 16.226c0 .59-.483 1.067-1.079 1.067a1.073 1.073 0 0 1-1.078-1.067c0-.589.483-1.066 1.078-1.066.596 0 1.079.477 1.079 1.066z" stroke="#828282" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
};

export default Cart;
