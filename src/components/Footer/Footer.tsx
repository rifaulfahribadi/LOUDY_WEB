import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              LOUDYCRAFT
            </h3>
            <p className="text-gray-600">
              Premium performance exhaust systems for automotive enthusiasts.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-600 hover:text-blue-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-blue-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                Email: info@loudycraft.com
              </li>
              <li className="text-gray-600">
                Phone: +62 812-3456-7890
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/+6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} LoudyCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;