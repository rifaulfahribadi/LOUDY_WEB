import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-cyber min-h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gradient">
              Next-Gen Performance Exhaust Systems
            </h1>
            <p className="text-lg text-blue-100/80 max-w-xl">
              Experience the future of automotive performance with our cutting-edge exhaust systems. 
              Engineered for maximum output, crafted for the perfect resonance.
            </p>
            <div className="flex gap-4">
              <a 
                href="#products" 
                className="group inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300 neon-glow"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="cyber-card rounded-2xl overflow-hidden animate-pulse-glow">
              <img
                src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80"
                alt="Premium Exhaust System"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;