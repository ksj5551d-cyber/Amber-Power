import React from 'react';

const Clients = () => {
  // Placeholder logos for demo purposes
  const logos = Array(12).fill("https://via.placeholder.com/200x100?text=Client+Logo");

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Our Trusted Clients</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the organizations that trust Amber Power Solutions for reliable solar and backup power solutions.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {logos.map((logo, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0 cursor-pointer">
              <img src={logo} alt={`Client ${i+1}`} className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
