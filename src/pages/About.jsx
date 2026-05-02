import React from 'react';

const About = () => {
  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 text-center">About Us</h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-16"></div>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We build practical energy systems that combine solar generation, smart backup, and reliable engineering for homes, commercial sites, and industrial operations.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> End-to-end planning, installation, and performance-focused maintenance.</li>
            <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Solar, UPS, inverter, and battery solutions tailored to real load profiles.</li>
            <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Energy-saving system design with safety, uptime, and long-term ROI in focus.</li>
            <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Fast support response with dependable after-sales service and AMC coverage.</li>
          </ul>

          <h2 className="text-3xl font-bold text-dark mb-8 mt-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Arun Kumar', role: 'Owner & Founder', desc: 'Driving long-term vision and strategic growth.' },
              { name: 'Kewal Singh Patial', role: 'Director', desc: 'Leading operations and customer-focused delivery.' },
              { name: 'Kuldeep Singh', role: 'Technical Head', desc: 'Designing high-performance systems with reliability.' },
              { name: 'Daman Singla', role: 'Marketing Head', desc: 'Building trusted relationships.' },
              { name: 'Sailesh Raturi', role: 'Sales Head', desc: 'Driving customer success with responsive guidance.' }
            ].map((person, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-dark">{person.name}</h3>
                <p className="text-primary font-medium mb-2">{person.role}</p>
                <p className="text-sm text-gray-600">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
