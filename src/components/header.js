import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

  render () {
    return (
        <div>
            <NavLink to='/'>Home Controls</NavLink>
            <NavLink to='/car'>Car Controls</NavLink>
        </div>
    );
  }
}