import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';
import './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar className="brand-logo" brand="InTheCity" right>
        <NavItem href="/">Home
        </NavItem>
        <NavItem href="/">Login
        </NavItem>
      </Navbar>
    );
  }
}
