import React from 'react';
import { Shield, Zap, Award } from 'lucide-react';

const Overview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Why Choose LoudyCraft?
          </h2>
          <p className="text-gray-600 mb-8">
            We combine innovative engineering with premium materials to create exhaust systems 
            that deliver unmatched performance, sound, and style.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-blue-50">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                Made from high-grade materials for lasting durability
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Enhanced Performance</h3>
              <p className="text-gray-600 text-sm">
                Optimized flow for maximum power gains
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Perfect Sound</h3>
              <p className="text-gray-600 text-sm">
                Engineered for the ideal balance of performance and acoustics
              </p>
            </div>
          </div>
          <a
            href="#products"
            className="inline-block mt-12 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Our Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Overview;