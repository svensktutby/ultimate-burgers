import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { listProducts } from './ProductsService';
import { ProductCard } from './ProductCard';

export const ProductsIndex = () => {
  const { state } = useLocation();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (state) {
      console.warn(`Nothing found for ${state.id}`);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const data = await listProducts();
      setProducts(data);
    })();
  }, []);

  if (products === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};
