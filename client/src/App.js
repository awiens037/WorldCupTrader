import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

class App extends Component {

  render() {
  
    return (
      <div>
        <div className="wrapper">
          <Header/>
          <Wrapper />
          <div className="push"></div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
