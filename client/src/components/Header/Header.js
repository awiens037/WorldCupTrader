import React from "react";
import "./Header.css";

const Header = props => (
    <header>
        <img alt="" className="App-logo" style={{ height: '100', width: 'auto', margintTop:'0'}} src="../images/logo.jpg"/>
            <div className="title">
                <h1>2018 World Cup Trader</h1>
                <p>14 June - 15 July</p>
            </div>
        </header>
);

export default Header;