import React from 'react';
import SelectSize from './../SelectSize/SelectSize';
import Icons from './../Icons/Icons';

const CheckProduct = (props) => {


  return (
    <div className="check-product">
      <SelectSize />
      <div className="product-footer-link">
        <a href="#1"><Icons.affirmLogo classes="inline-icon" /> As low as $67/month at 0% APR. Pre-qualify</a>
      </div>
    </div>
  );
};

export default CheckProduct;
