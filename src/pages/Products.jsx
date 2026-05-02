import React from 'react';
import { Sun, Zap, Battery, Flame, Settings } from 'lucide-react';

const Products = () => {
  const products = [
    { title: 'Solar Water Heater', desc: 'Cost-saving hot water solutions with reliable performance.', icon: <Flame size={40} className="text-orange-500" /> },
    { title: 'Solar Photovoltaic System', desc: 'Complete solar power installations for long-term savings.', icon: <Sun size={40} className="text-yellow-500" /> },
    { title: 'Heat Pump', desc: 'Energy-efficient heating technology for all-weather use.', icon: <Settings size={40} className="text-blue-500" /> },
    { title: 'UPS Sales & Service', desc: 'Reliable backup power solutions with expert service.', icon: <Zap size={40} className="text-primary" /> },
    { title: 'Inverters', desc: 'Smart and efficient power backup systems.', icon: <Zap size={40} className="text-gray-700" /> },
    { title: 'Batteries', desc: 'Long-lasting energy storage solutions.', icon: <Battery size={40} className="text-green-600" /> },
    { title: 'Solar Panels', desc: 'Clean and efficient energy generation.', icon: <Sun size={40} className="text-blue-400" /> },
  ];

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 text-center">Our Products & Solutions</h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{product.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{product.desc}</p>
              <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
