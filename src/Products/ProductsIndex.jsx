import React, { useState, useEffect } from 'react';

import { listProducts } from './ProductsService';
import { ProductCard } from './ProductCard';

export const ProductsIndex = () => {
  const [products, setProducts] = useState(null);

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
