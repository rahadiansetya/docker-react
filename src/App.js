import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Hackacgtive Vol 2</h2>
        </div>
        <p className="App-intro">
          This is the page you're edited before lunch
        </p>
        <p>
        add new line from feature branch
        </p>
      </div>
    );
  }
}

export default App;
