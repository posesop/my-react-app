import React, { Component } from 'react';
import './App.css';
import Item from './Item.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Item name="Soy un objeto" />
        </div>
      </div>
    );
  }
}

export default App;
