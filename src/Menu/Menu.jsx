import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true
    };
  }

  changeStatus = () => {
    const { hidden } = this.state;
    this.setState({ hidden: !hidden });
  }

  render() {
    const menuState = this.state.hidden ? 
      <img src="/menu-icon.png" width={'25px'} className='menu_icon' onClick={this.changeStatus}/> :
      <div className='drawer'>
        <img src="/delete-button.png" width={'25px'} className='menu_icon__close' onClick={this.changeStatus} />
      </div>

    return (
      menuState
    );
  }
}