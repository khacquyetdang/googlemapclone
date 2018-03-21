import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';
import AccountsUi from '../AccountsUi/index.jsx';
import './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="brand-logo" brand="InTheCity" right>
          <NavItem href="/">Home
          </NavItem>
          <NavItem href="/signin">Sign in
          </NavItem>
          <NavItem href="/signup">Sign up</NavItem>
        </Navbar>
      </div>
    );
  }
}
