import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forum from './Forum'
import Schedule from './Schedule'
import Announcement from './Announcement'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <Announcement/>
        <Forum/>
        <Schedule/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
