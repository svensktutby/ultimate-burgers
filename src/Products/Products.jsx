import React from 'react';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/css';

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
      <Outlet />
    </div>
  );
};
