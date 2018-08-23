import React, { Component } from 'react';
import './App.css';
import Header from './global/Header/Header';
import Footer from './global/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
