import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true
    };
  }

  render() {
    const menuState = this.state.hidden ? 
      <img src="/menu-icon.png" width={'25px'} className='menu_icon' /> :
      <p>hello</p>

    return (
      // menuState
      <div className='drawer'>
        
      </div>
    );
  }
}