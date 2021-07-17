import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProductsIndex } from '../Products/ProductsIndex';

export const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>

      <Routes>
        <Route path="/" element={<ProductsIndex />} />
      </Routes>
    </div>
  );
};
