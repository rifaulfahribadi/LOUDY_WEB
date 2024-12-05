import React from 'react';
import Navbar from '../components/Header/Navbar';
import Hero from '../components/Hero/Hero';
import Overview from '../components/Overview/Overview';
import ProductSection from '../components/Products/ProductSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Overview />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default Home;