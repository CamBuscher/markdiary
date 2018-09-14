import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import { Markdown } from '../Markdown/Markdown';

class App extends Component {
  // state = {
  //   response: ''
  // };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

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
