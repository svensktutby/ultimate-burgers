import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { css } from '@emotion/css';

import { Products } from './Products/Products';
import { ProductsIndex } from './Products/ProductsIndex';
import { Admin } from './Admin/Admin';
import { Nav } from './Common/Nav';

const appStyles = css`
  width: 380px;
  margin: 50px auto;

  .container {
    padding: 25px;
    background-color: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 6px;
  }
`;

export const App = () => {
  return (
    <div className={appStyles}>
      <Router>
        <div className="container">
          <Nav />

          <Routes>
            <Route path="/" element={<Products />}>
              <Route path="/" element={<ProductsIndex />} />
            </Route>
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
