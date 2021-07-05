import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { css } from '@emotion/css';

import { retrieveProduct } from './ProductsService';

const productStyles = css`
  padding: 15px;
  color: #fff;
  background-color: #2a2c37;
  border-radius: 6px;
  .product {
    &-title {
      display: flex;
    }
    &-name {
      margin: 0;
      font-weight: 600;
      font-size: 1.2rem;
    }
    &-price {
      margin: 0;
      color: #50fa7b;
      font-weight: 600;
      font-size: 1rem;
    }
    &-icon {
      width: 50px;
      margin-right: 15px;
    }
    &-button {
      margin-right: 5px;
      padding: 10px 15px;
      border: 2px solid #50fa7b;
      border-radius: 6px;
      color: #50fa7b;
      background: none;
      outline: 0;
      cursor: pointer;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

export const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await retrieveProduct(id);
        setProduct(data);
      } catch (e) {
        console.warn(e);
        navigate('/', { replace: true, state: { id } });
      }
    })();
  }, [id]);

  if (product === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={productStyles}>
      <div className="product-title">
        <img
          className="product-icon"
          src={`/assets/img/products/${product.id}.svg`}
          alt={product.name}
        />
        <div>
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">{`$${product.price / 100}`}</p>
        </div>
      </div>

      <div className="product-description">
        <p>{product.description}</p>
        <button
          className="product-button"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};
