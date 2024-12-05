import React from 'react';
import ProductCard from './ProductCard';
import { productData } from '../../data/products';

const ProductsCatalog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productData.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductsCatalog;