import React from 'react';
import './ContactUs.css';
import Icons from './../../Icons/Icons';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Icons.speechbubble classes='inline-icon' />
      Questions? <a href="#1">Chat Us</a> or Call Us at 800-999-8831
    </div>
  );
};

export default ContactUs;
