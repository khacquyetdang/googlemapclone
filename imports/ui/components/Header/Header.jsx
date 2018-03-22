import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';
import AccountsUi from '../AccountsUi/index.jsx';
import './Header.scss';
import {User} from '../../../api/User';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="nav-container brand-logo" brand="InTheCity" right>
          <NavItem href="/">Home
          </NavItem>
          {!User.isLoggedIn()
            ? <NavItem href="/signin">Sign in/Sign up</NavItem>
            : <NavItem href="/myaccount">My account</NavItem>
}
        </Navbar>
      </div>
    );
  }
}
