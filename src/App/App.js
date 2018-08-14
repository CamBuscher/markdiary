import React, { Component } from 'react';
import './App.css';

import { Markdown } from '../Markdown/Markdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Markdown />
      </div>
    );
  }
}

export default App;
