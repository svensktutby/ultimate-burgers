import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

const productCardStyles = css`
  display: flex;
  margin-bottom: 5px;
  padding: 15px;
  color: #fff;
  background-color: #2a2c37;
  border-radius: 6px;
  text-decoration: none;
  transition-property: transform, background-color, box-shadow;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.035);
  }

  .product-card {
    &-icon {
      width: 40px;
      margin-right: 15px;
    }

    &-name {
      margin: 0;
      font-size: 1.2rem;
    }

    &-price {
      margin: 0;
      font-size: 1rem;
      color: #50fa7b;
    }
  }
`;

export const ProductCard = ({ product }) => (
  <Link className={productCardStyles} to={product.id}>
    <img
      className="product-card-icon"
      src={`/assets/img/products/${product.id}.svg`}
      alt={product.name}
    />
    <div>
      <h2 className="product-card-name">{product.name}</h2>
      <p className="product-card-price">{`$${product.price / 100}`}</p>
    </div>
  </Link>
);
