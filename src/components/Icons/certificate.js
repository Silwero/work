import React from 'react';

const CertificateIcon = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.0001 37.6667V7.66667C41.0001 5.89856 40.2977 4.20286 39.0475 2.95262C37.7973 1.70238 36.1016 1 34.3335 1H7.00012C10.6668 1 12.6668 4 12.6668 7.66667V44.3333C12.6668 46.1014 13.3692 47.7971 14.6194 49.0474C15.8697 50.2976 17.5653 51 19.3335 51" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 1C3.33333 1 1 4 1 7.66667H12.6667M44.3333 37.6667H19.3333C21.1014 37.6667 22.7971 38.369 24.0474 39.6193C25.2976 40.8695 26 42.5652 26 44.3333C26 46.1014 25.2976 47.7971 24.0474 49.0474C22.7971 50.2976 21.1014 51 19.3333 51H44.3333C46.1014 51 47.7971 50.2976 49.0474 49.0474C50.2976 47.7971 51 46.1014 51 44.3333C51 42.5652 50.2976 40.8695 49.0474 39.6193C47.7971 38.369 46.1014 37.6667 44.3333 37.6667Z" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.0001 27.6664H32.6668M21.0001 10.9998H32.6668H21.0001ZM21.0001 19.3331H32.6668H21.0001Z" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
};

export default CertificateIcon;
