import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { css } from '@emotion/css';

import { ProductsIndex } from './ProductsIndex';
import { Product } from './Product';

const productsStyles = css`
  display: flex;
  flex-direction: column;

  .logo {
    width: 125px;
    max-width: 100%;
    height: auto;
    margin: 0 auto 25px;
  }
`;

export const Products = () => {
  return (
    <div className={productsStyles}>
      <img
        className="logo"
        src="/assets/img/logo.svg"
        width="125"
        height="45"
        alt="Ultimate Burgers"
      />
      <Routes>
        <Route path="/" element={<ProductsIndex />} />
        <Route path=":id" element={<Product />} />
      </Routes>
    </div>
  );
};
