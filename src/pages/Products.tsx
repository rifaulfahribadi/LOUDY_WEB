import React from 'react';
import ProductsNavbar from '../components/Products/ProductsNavbar';
import ProductsHeader from '../components/Products/ProductsHeader';
import ProductsCatalog from '../components/Products/ProductsCatalog';
import Footer from '../components/Footer/Footer';

const Products = () => {
  return (
    <div className="min-h-screen bg-cyber">
      <ProductsNavbar />
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsHeader />
          <ProductsCatalog />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;