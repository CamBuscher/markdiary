import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import { Markdown } from '../Markdown/Markdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Markdown />
      </div>
    );
  }
}

export default App;
