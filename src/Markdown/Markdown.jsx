import React, { Component } from 'react';
import showdown from 'showdown';
import './Markdown.css';

export class Markdown extends Component {
  constructor() {
    super()

    this.state = {
      textarea: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    const converter = new showdown.Converter();

    return (
      <div>
        <textarea name="textarea" cols="30" rows="10" onChange={(e) => this.handleChange(e)}></textarea>
        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(this.state.textarea) }}></div>
      </div>
    )
  }
}