import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {
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