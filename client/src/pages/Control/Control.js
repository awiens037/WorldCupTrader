import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './style.css';


class Control extends Component {

    // renderContent() {
    //     // check if logged in
    //     if (false) {
    //         return <Redirect to="/control" />
    //     } 
    //     return <Wrapper />
    // }


    render() {

     
    
      return (
        <div>
            <Header/>
            <div className="wrapper">
                <div className="forms">
                <form id="user-needs-form">
                <label htmlFor="message">User Needs</label>
                <br/>
                <textarea id="message" name="message" required="required"></textarea>
                <button type="submit">Submit</button>
                </form>

            <form id="their-needs-form">
                <label htmlFor="message">Their Needs</label>
                <br/>
                <textarea id="message" name="message" required="required"></textarea>
                <button type="submit">Submit</button>
            </form>

            <form id="traders-list">
                <label htmlFor="message">Trader's List</label>
                <br/>
                <textarea id="message" name="message" required="required"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
        
        <div className="forms">
            <form id="user-has-form">
                <label htmlFor="message">User Has</label>
                <br/>
                <textarea id="message" name="message" required="required"></textarea>
                <button type="submit">Submit</button>
            </form>
            
            <form id="they-have-form">
                <label htmlFor="message">They Have</label>
                <br/>
                <textarea id="message" name="message" required="required"></textarea>
                <button type="submit">Submit</button>
            </form>

            <form id="socket-goes-here">
                <label htmlFor="message">Socket Goes Here</label>
                <br/>
                <textarea id="message" name="message" required="required"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>







          <Footer/>
        </div>
      )
    }
  }

export default Control;
