import React, { Component } from 'react';
import logo from './fireball.png';
import './App.css';

let test = "PROJECT STEVEN";

console.log(Component);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           {test}
          </p>
        </header>
      </div>
    );
  }
}

export default App;

// Store hold all state data
// Reducers call actions and i
