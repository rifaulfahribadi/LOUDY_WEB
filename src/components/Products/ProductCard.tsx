import React from 'react';
import { Info, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  specs: string[];
  price: number;
  image: string;
  fullSpecs: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, specs, price, image, fullSpecs }) => {
  const [showSpecs, setShowSpecs] = React.useState(false);

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${title}. Can you provide more information?`;
    window.open(`https://wa.me/+6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="cyber-card rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-60"></div>
      </div>
      <div className="p-6 bg-cyber-light backdrop-blur-md">
        <h3 className="text-xl font-semibold mb-4 text-blue-100">{title}</h3>
        <ul className="space-y-2 mb-4">
          {specs.map((spec, index) => (
            <li key={index} className="text-blue-100/70 text-sm flex items-center">
              • {spec}
            </li>
          ))}
        </ul>
        <p className="text-2xl font-bold text-gradient mb-4">
          ${price.toLocaleString()}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setShowSpecs(true)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 cyber-border rounded-lg text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Info size={20} />
            Specs
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all neon-glow"
          >
            <ShoppingCart size={20} />
            Buy
          </button>
        </div>
      </div>

      {showSpecs && (
        <div className="fixed inset-0 bg-cyber-dark/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="cyber-card rounded-xl p-6 max-w-md w-full bg-cyber-light">
            <h4 className="text-xl font-semibold mb-4 text-gradient">{title} Specifications</h4>
            <ul className="space-y-2 mb-6">
              {fullSpecs.map((spec, index) => (
                <li key={index} className="text-blue-100/70">• {spec}</li>
              ))}
            </ul>
            <button
              onClick={() => setShowSpecs(false)}
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all neon-glow"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;