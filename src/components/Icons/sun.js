import React from 'react';

const SunIcon = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 25.934a7.933 7.933 0 1 0 0-15.867 7.933 7.933 0 0 0 0 15.867zM9.16 26.84l-3.173 3.173M18 1v4.533V1zm0 29.467V35v-4.533zM35 18h-4.533H35zM5.533 18H1h4.533zm.454-12.013L9.16 9.16 5.987 5.987zM26.84 26.84l3.173 3.173-3.173-3.173zm3.173-20.853L26.84 9.16l3.173-3.173z" stroke="#202020" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
};

export default SunIcon;
