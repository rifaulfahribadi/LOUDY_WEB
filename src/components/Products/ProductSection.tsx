import React from 'react';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { productData } from '../../data/products';

const ProductSection = () => {
  return (
    <section id="products" className="py-20 bg-cyber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient">
            Featured Products
          </h2>
          <p className="text-blue-100/80 max-w-2xl mx-auto">
            Discover our premium selection of next-generation exhaust systems
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.slice(0, 6).map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-flex items-center px-6 py-3 cyber-border rounded-lg text-blue-400 hover:text-blue-300 transition-all group"
          >
            See All Products
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;