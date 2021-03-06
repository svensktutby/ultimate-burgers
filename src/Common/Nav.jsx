import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from '@emotion/css';

const navStyles = css`
  margin-bottom: 15px;

  a {
    padding: 6px 12px;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;

    &.active {
      color: #50fa7b;
      border: 2px solid #50fa7b;
    }
  }
`;

export const Nav = () => (
  <nav className={navStyles}>
    <NavLink to="/" activeClassName="active" end>
      Products
    </NavLink>
    <NavLink
      to="/admin"
      activeClassName="active"
      activeStyle={{ fontStyle: 'italic', fontWeight: 900 }}
    >
      Admin
    </NavLink>
  </nav>
);
