import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";


class Home extends Component {

    renderContent() {
        // check if logged in
        if (false) {
            return <Redirect to="/control" />
        } 
        return <Wrapper />
    }


    render() {

     
    
      return (
        <div>
          <div className="wrapper">
            <Header/>
            {this.renderContent()}
            <div className="push"></div>
          </div>
          <Footer/>
        </div>
      )
    }
  }

export default Home;
