import React from 'react';
import { css } from '@emotion/css';

const ProductsStyles = css`
  display: flex;
  flex-direction: column;

  .Logo {
    width: 125px;
    max-width: 100%;
    height: auto;
    margin: 0 auto 25px;
  }
`;

export const Products = () => {
  return (
    <div className={ProductsStyles}>
      <img
        className="Logo"
        src="/assets/img/logo.svg"
        width="125"
        height="45"
        alt="Ultimate Burgers"
      />
      Products
    </div>
  );
};
