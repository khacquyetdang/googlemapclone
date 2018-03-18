import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Place in the city</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
