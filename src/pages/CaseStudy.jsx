import React from 'react';
import { ArrowRight, BarChart3, Leaf } from 'lucide-react';

const CaseStudy = () => {
  const cases = [
    {
      title: "Industrial Solar Plant - 500kW",
      client: "Manufacturing Facility, Punjab",
      stats: { savings: "40%", generation: "7.2L units/yr", roi: "3.5 Years" },
      desc: "Implemented a massive rooftop solar plant to offset high electricity costs during peak production hours.",
      image: "https://images.unsplash.com/photo-1509391366360-12006cb7bb9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Commercial Complex Power Backup",
      client: "IT Park, Mohali",
      stats: { savings: "100% Uptime", generation: "200kVA UPS", roi: "Immediate" },
      desc: "Designed and installed a seamless hybrid UPS system to guarantee zero downtime for mission-critical servers.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Residential Heat Pump Integration",
      client: "Villa Estate, Chandigarh",
      stats: { savings: "60%", generation: "All-weather", roi: "4 Years" },
      desc: "Replaced conventional water heaters with highly efficient heat pumps, reducing winter electricity bills drastically.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Case Studies</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how our solar and power systems deliver measurable savings and performance for residential, commercial, and industrial clients.</p>
        </div>

        <div className="space-y-16">
          {cases.map((cs, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center`}>
              <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                <img src={cs.image} alt={cs.title} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-bold text-dark mb-2">{cs.title}</h3>
                <p className="text-primary font-medium mb-6">{cs.client}</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{cs.desc}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                    <BarChart3 className="mx-auto text-primary mb-2" size={24} />
                    <p className="font-bold text-dark">{cs.stats.savings}</p>
                    <p className="text-xs text-gray-500 uppercase">Savings</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                    <Leaf className="mx-auto text-primary mb-2" size={24} />
                    <p className="font-bold text-dark">{cs.stats.generation}</p>
                    <p className="text-xs text-gray-500 uppercase">Output</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                    <span className="block text-xl font-black text-primary mb-2">ROI</span>
                    <p className="font-bold text-dark">{cs.stats.roi}</p>
                    <p className="text-xs text-gray-500 uppercase">Return</p>
                  </div>
                </div>
                
                <button className="flex items-center gap-2 text-primary font-bold hover:text-emerald-700 transition-colors">
                  Read Full Study <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
