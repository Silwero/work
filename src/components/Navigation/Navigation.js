import React from 'react';
import MainNav from './MainNav/MainNav';
import ContactUs from './ContactUs/ContactUs';
import Icons from './../Icons/Icons';

const Navigation = () => {
  return (
    <div className="navigation">
      <MainNav />
      <ContactUs />
      <div className="cart">
        <Icons.cart classes='cart-icon' />
      </div>
    </div>
  );
};

export default Navigation;
