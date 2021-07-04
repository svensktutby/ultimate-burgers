import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Products } from './Products';
import { Admin } from './Admin';

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
};
