import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import './Header.css';

export class Header extends Component {

  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Presidents
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;