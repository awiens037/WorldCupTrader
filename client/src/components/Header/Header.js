import React from "react";
import "./Header.css";

const Header = props => (
    <div>
        <img className="App-logo" style="height:100px; width:auto; margin-top:0;" src="./images/logo.jpg"/>
            <div className="title">
                <h1>2018 World Cup Trader</h1>
                <p>14 June - 15 July</p>
            </div>
        </div>
);

export default Header;