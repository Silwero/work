import React, { Component } from 'react';
import './Header.css';
import Logo from '../../logo.svg';
import Navigation from './../../components/Navigation/Navigation';

export default class componentName extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <a href="#1" title="Home Page">
            <img src={Logo} alt="Level Sleep" className="logo"/>
          </a>
        </div>
        <Navigation />
      </header>
    );
  }
}
