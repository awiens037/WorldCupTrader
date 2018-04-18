import React, { Component } from 'react';
//import io from 'socket.io-client';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <Chat />
      </div>
    )
  }
}

export default App;
