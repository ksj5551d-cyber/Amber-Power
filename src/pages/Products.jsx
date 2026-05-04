import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    { 
      title: 'Solar Water Heater', 
      desc: 'Cost-saving hot water solutions with reliable performance and zero emissions.', 
      image: '/images/products/solar_water_heater.png',
      color: '#F97316' // orange
    },
    { 
      title: 'Solar Photovoltaic System', 
      desc: 'Complete high-efficiency solar power installations for sustainable long-term savings.', 
      image: '/images/products/solar_pv_system.png',
      color: '#EAB308' // yellow
    },
    { 
      title: 'Heat Pump', 
      desc: 'Advanced energy-efficient heating technology designed for reliable all-weather performance.', 
      image: '/images/products/heat_pump.png',
      color: '#3B82F6' // blue
    },
    { 
      title: 'UPS Sales & Service', 
      desc: 'Premium Uninterruptible Power Supply systems with comprehensive maintenance and expert support.', 
      image: '/images/products/ups_service.png',
      color: '#8B5CF6' // violet
    },
    { 
      title: 'Inverters', 
      desc: 'Smart, high-performance power backup systems with intelligent energy management features.', 
      image: '/images/products/ups_service.png',
      color: '#6366F1' // indigo
    },
    { 
      title: 'Batteries', 
      desc: 'Next-generation long-lasting energy storage solutions for residential and industrial use.', 
      image: '/images/products/ups_service.png',
      color: '#10B981' // emerald
    },
    { 
      title: 'Solar Panels', 
      desc: 'Clean, high-density energy generation modules using the latest photovoltaic technology.', 
      image: '/images/products/solar_pv_system.png',
      color: '#06B6D4' // cyan
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 text-center">Our Products & Solutions</h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-16"></div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative group bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-full"
            >
              {/* Unique Image Display Section */}
              <div className="relative mb-8 h-64 flex items-center justify-center">
                {/* Background Glow */}
                <div 
                  className="absolute inset-0 blur-3xl opacity-20 scale-75 group-hover:opacity-40 group-hover:scale-100 transition-all duration-700"
                  style={{ backgroundColor: product.color }}
                />
                
                {/* Blob Container */}
                <motion.div 
                  animate={{ 
                    borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="relative w-full h-full overflow-hidden shadow-2xl border-4 border-white/30"
                >
                  <motion.img 
                    src={product.image} 
                    alt={product.title}
                    whileHover={{ scale: 1.1 }}
                    className="w-full h-full object-cover"
                  />
                  {/* Glass Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>
              </div>

              <div className="relative z-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-brand transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {product.desc}
                </p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-brand font-bold uppercase tracking-wider text-sm cursor-pointer"
                >
                  Learn More <ArrowRight size={18} />
                </motion.button>
              </div>
              
              {/* Decorative side accent */}
              <div 
                className="absolute top-0 right-0 w-1 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: product.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
