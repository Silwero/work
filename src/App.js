import React, { Component } from 'react';
import './App.css';
import Header from './global/Header/Header';
import Footer from './global/Footer/Footer';
import Layout from './global/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
