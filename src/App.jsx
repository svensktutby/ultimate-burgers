import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { css } from '@emotion/css';

import { Products } from './Products';
import { Admin } from './Admin';

const AppStyles = css`
  width: 380px;
  margin: 50px auto;

  .Container {
    padding: 25px;
    background-color: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 6px;
  }
`;

export const App = () => {
  return (
    <div className={AppStyles}>
      <Router>
        <div className="Container">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
