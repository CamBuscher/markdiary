import React, { Component } from 'react';
import './MenuIcon.css';

export default class MenuIcon extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <img src="/menu-icon.png" width={'25px'} className='menu_icon'/>
    );
  }
}