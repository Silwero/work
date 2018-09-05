import React from 'react';

const FlagIcon = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="52" height="46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 2.884c13.854-6.86 33.02 7.796 50 .208v31.184c-16.354 8.003-36.146-6.757-50 .103m0 10.278V2.04m19.479 6.561c9.896 1.975 20.625 5.197 30.52.728m-30.416 5.509c9.896 1.975 20.521 5.093 30.417.728M1 21.594c13.854-6.86 33.02 7.796 50 .208M1 27.831c13.854-6.86 33.02 7.796 50 .208M19.75 2.053v18.71" stroke="#CCC" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.375 5.17l1.25 4.574 4.688-.207-3.959 2.494 1.667 4.47-3.646-3.015-3.646 3.015 1.667-4.47-3.959-2.494 4.688.207 1.25-4.573z" stroke="#CCC" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
};

export default FlagIcon;
