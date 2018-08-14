import React, { Component } from 'react';
import './App.css';
import MenuIcon from '../MenuIcon/MenuIcon';
import { Markdown } from '../Markdown/Markdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuIcon />
        <Markdown />
      </div>
    );
  }
}

export default App;
