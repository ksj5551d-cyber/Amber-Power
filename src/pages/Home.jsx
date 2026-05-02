import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      bg: "https://lavender-cod-858351.hostingersite.com/assets/images/home-sliders/renewable-sunset-opt.jpg?v=1776868847",
      eyebrow: "Welcome To Amber Power Solutions",
      title: "Powering A Greener Tomorrow",
      desc: "Harness the sun with high-efficiency systems that cut costs and reduce environmental impact.",
      btn1: { text: "Explore Products", link: "/products" },
      btn2: { text: "Get Free Consultation", link: "/contact" }
    },
    {
      bg: "https://lavender-cod-858351.hostingersite.com/assets/images/home-sliders/solar-panels-rooftop-opt.jpg?v=1776868848",
      eyebrow: "Solar Energy Solutions",
      title: "High-Efficiency Rooftop Solar Systems",
      desc: "Smart solar installations for homes, businesses, and institutions with long-term savings.",
      btn1: { text: "Our Services", link: "/products" },
      btn2: { text: "Plan Your Project", link: "/contact" }
    },
    {
      bg: "https://lavender-cod-858351.hostingersite.com/assets/images/home-sliders/solar-technicians-opt.jpg?v=1776868848",
      eyebrow: "Expert Team & Execution",
      title: "Designed, Installed, And Supported By Professionals",
      desc: "From consultation to commissioning and maintenance, we deliver complete end-to-end energy solutions.",
      btn1: { text: "Know Our Process", link: "/about" },
      btn2: { text: "Our Clients", link: "/clients" }
    },
    {
      bg: "https://lavender-cod-858351.hostingersite.com/assets/images/home-sliders/renewable-main-opt.jpg?v=1776868847",
      eyebrow: "Reliable Backup & Smart Power",
      title: "UPS, Inverters, Batteries, And Heat Pumps",
      desc: "Reliable power backup and advanced energy systems built for residential, commercial, and industrial needs.",
      btn1: { text: "Explore Products", link: "/products" },
      btn2: { text: "Get Free Consultation", link: "/contact" }
    }
  ];

  const products = [
    { title: "Solar Water Heater", desc: "Cost-saving hot water solutions with reliable performance.", img: "https://lavender-cod-858351.hostingersite.com/assets/images/home-products/Solar%20water%20heating%20systems%20lineup.png?v=1776868847", link: "/products#product-solar-water-heater" },
    { title: "Solar Photovoltaic System", desc: "Complete solar power installations for long-term savings.", img: "https://lavender-cod-858351.hostingersite.com/assets/images/home-products/Solar%20power%20system%20product%20render.png?v=1776868847", link: "/products#product-solar-pv-system" },
    { title: "Heat Pump", desc: "Energy-efficient heating technology for all-weather use.", img: "https://lavender-cod-858351.hostingersite.com/assets/images/home-products/Types%20of%20heat%20pumps%20on%20display.png?v=1776868847", link: "/products#product-heat-pump" },
    { title: "UPS Sales & Service", desc: "Reliable backup power solutions with expert service.", img: "https://lavender-cod-858351.hostingersite.com/assets/images/home-products/Various%20UPS%20units%20on%20white%20background.png?v=1776868848", link: "/products#product-ups-sales-service" },
    { title: "Inverters", desc: "Smart and efficient power backup systems.", img: "https://lavender-cod-858351.hostingersite.com/assets/images/home-products/Types%20of%20power%20inverters%20arranged.png?v=1776868847", link: "/products#product-inverters" },
    { title: "Batteries", desc: "Long-lasting energy storage solutions.", img: "https://lavender-cod-858351.hostingersite.com/assets/images/home-products/Assorted%20energy%20storage%20systems%20on%20display.png?v=1776868847", link: "/products#product-batteries" },
    { title: "Solar Panels", desc: "Clean and efficient energy generation.", img: "https://lavender-cod-858351.hostingersite.com/assets/images/home-products/Different%20types%20of%20solar%20panels%20showcased.png?v=1776868847", link: "/products#product-solar-panels" }
  ];

  const categories = [
    "Solar Panels", "Inverters", "Batteries", "Solar Water Heaters", "Heat Pumps", "UPS Systems"
  ];

  const leaders = [
    { role: "Owner & Founder", name: "Arun Kumar", desc: "Driving long-term vision and strategic growth in sustainable energy solutions.", img: "https://lavender-cod-858351.hostingersite.com/assets/images/Our-Leadership-Team/owner-founder-opt.jpg?v=1776868848" },
    { role: "Director", name: "Kewal Singh Patial", desc: "Leading operations, execution standards, and customer-focused project delivery.", img: "https://lavender-cod-858351.hostingersite.com/assets/images/Our-Leadership-Team/director-opt.jpg?v=1776868848" },
    { role: "Technical Head", name: "Kuldeep Singh", desc: "Designing high-performance systems with reliability, safety, and efficiency in focus.", img: "https://lavender-cod-858351.hostingersite.com/assets/images/Our-Leadership-Team/Technical-Head-opt.jpg?v=1776868848" },
    { role: "Marketing Head", name: "Daman Singla", desc: "Building trusted relationships and helping customers choose the right energy solutions.", img: "https://lavender-cod-858351.hostingersite.com/assets/images/Our-Leadership-Team/marketing-head-opt.jpg?v=1776868848" },
    { role: "Sales Head", name: "Sailesh Raturi", desc: "Driving customer success with responsive guidance and tailored energy solutions.", img: "https://lavender-cod-858351.hostingersite.com/assets/images/Our-Leadership-Team/sales-head-opt.jpg?v=1776868848" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="w-full font-barlow">
      {/* Hero Section - Split Slider & Banners */}
      <section className="bg-white py-4 md:py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[450px]">
            {/* Left: Slider (2/3) */}
            <div className="w-full lg:w-2/3 h-[300px] md:h-[450px] rounded-2xl overflow-hidden relative group">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <img src={slide.bg} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-8 md:px-12">
                    <div className="max-w-md text-white">
                      <p className="text-brand font-bold uppercase tracking-widest text-xs mb-2">{slide.eyebrow}</p>
                      <h2 className="text-3xl md:text-5xl font-bold font-rajdhani mb-4 leading-tight">{slide.title}</h2>
                      <Link to={slide.btn1.link} className="bg-brand text-white px-6 py-3 rounded-full font-bold uppercase text-xs inline-block hover:bg-brand-hover transition-colors shadow-lg">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {/* Slider Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === i ? 'bg-brand w-8' : 'bg-white/50 hover:bg-white'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Static Banners (1/3) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              <div className="flex-1 rounded-2xl overflow-hidden relative group cursor-pointer h-[180px] lg:h-auto shadow-sm">
                <img src="https://lavender-cod-858351.hostingersite.com/assets/images/home-sliders/solar-panels-rooftop-opt.jpg?v=1776868848" alt="Banner 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6 text-white">
                   <h3 className="text-xl font-bold font-rajdhani mb-1">Rooftop Solar</h3>
                   <p className="text-sm text-gray-200 mb-4 font-barlow">Save up to 80% on energy bills</p>
                   <span className="text-xs font-bold text-brand uppercase tracking-wider bg-white/10 backdrop-blur-md px-4 py-2 rounded-full inline-block w-fit">Learn More →</span>
                </div>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden relative group cursor-pointer h-[180px] lg:h-auto shadow-sm">
                <img src="https://lavender-cod-858351.hostingersite.com/assets/images/home-sliders/solar-technicians-opt.jpg?v=1776868848" alt="Banner 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6 text-white">
                   <h3 className="text-xl font-bold font-rajdhani mb-1">Expert Service</h3>
                   <p className="text-sm text-gray-200 mb-4 font-barlow">Professional maintenance & repairs</p>
                   <span className="text-xs font-bold text-brand uppercase tracking-wider bg-white/10 backdrop-blur-md px-4 py-2 rounded-full inline-block w-fit">Book Now →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-bold font-rajdhani uppercase tracking-wide border-l-4 border-brand pl-4">Popular Categories</h2>
            <Link to="/products" className="text-sm font-bold text-brand hover:underline flex items-center gap-2">VIEW ALL <span className="text-lg">→</span></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 text-center">
            {categories.map((cat, i) => (
              <Link key={i} to="/products" className="group">
                <div className="aspect-square bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100 group-hover:border-brand group-hover:shadow-xl group-hover:bg-brand/5 transition-all duration-300 transform group-hover:-translate-y-2">
                   <span className="text-4xl group-hover:scale-110 transition-transform">{['☀️', '🔌', '🔋', '🚿', '🔥', '💻'][i % 6]}</span>
                </div>
                <h3 className="text-sm font-bold font-rajdhani uppercase group-hover:text-brand transition-colors tracking-wide">{cat}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-muted overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-7xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 relative">
            <div className="relative z-10 w-[80%] rounded overflow-hidden">
              <img src="https://lavender-cod-858351.hostingersite.com/assets/images/home-sliders/solar-panels-rooftop-opt.jpg?v=1776868848" alt="Amber Power Solutions" className="w-full h-auto" />
            </div>
            <div className="absolute bottom-[-10%] right-0 z-20 w-[60%] rounded overflow-hidden border-[10px] border-muted">
              <img src="https://lavender-cod-858351.hostingersite.com/assets/images/home-sliders/renewable-sunset-opt.jpg?v=1776868847" alt="Amber Power Solutions Setup" className="w-full h-auto" />
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 mt-16 lg:mt-0">
            <p className="eyebrow text-brand font-bold uppercase tracking-wider mb-2">About Us</p>
            <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-dark mb-6">Amber Power Solutions</h2>
            <p className="text-[17px] text-gray-700 mb-8 leading-relaxed">
              We build practical energy systems that combine solar generation, smart backup, and reliable engineering for homes, commercial sites, and industrial operations.
            </p>
            <ul className="space-y-4 mb-10 text-gray-700">
              <li className="flex items-start gap-3 before:content-['✓'] before:text-brand before:font-bold before:text-lg">End-to-end planning, installation, and performance-focused maintenance.</li>
              <li className="flex items-start gap-3 before:content-['✓'] before:text-brand before:font-bold before:text-lg">Solar, UPS, inverter, and battery solutions tailored to real load profiles.</li>
              <li className="flex items-start gap-3 before:content-['✓'] before:text-brand before:font-bold before:text-lg">Energy-saving system design with safety, uptime, and long-term ROI in focus.</li>
              <li className="flex items-start gap-3 before:content-['✓'] before:text-brand before:font-bold before:text-lg">Fast support response with dependable after-sales service and AMC coverage.</li>
            </ul>
            <Link to="/about" className="bg-brand text-white px-8 py-4 font-bold uppercase text-sm tracking-wider hover:bg-brand-hover transition-colors rounded-sm inline-block">
              More About
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Best Offers / Product Grid */}
      <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden" id="products">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="eyebrow text-brand font-bold uppercase tracking-wider mb-2">Exclusive Deals</p>
              <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-dark">Our Best Sellers</h2>
            </div>
            <div className="flex gap-4 border-b border-gray-200">
               <button className="px-6 py-2 font-rajdhani font-bold text-sm uppercase tracking-wider border-b-2 border-brand text-brand">Solar PV</button>
               <button className="px-6 py-2 font-rajdhani font-bold text-sm uppercase tracking-wider border-b-2 border-transparent text-gray-400 hover:text-dark">Power Backup</button>
               <button className="px-6 py-2 font-rajdhani font-bold text-sm uppercase tracking-wider border-b-2 border-transparent text-gray-400 hover:text-dark">Heating</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((prod, i) => (
              <motion.div 
                key={i} 
                className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 overflow-hidden flex flex-col h-full relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-square bg-[#fdfdfd] p-8 overflow-hidden">
                  <img src={prod.img} alt={prod.title} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-tighter shadow-sm w-fit">Hot Deal</span>
                    <span className="bg-brand text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-tighter shadow-sm w-fit">-15%</span>
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                     <button className="w-9 h-9 bg-white rounded-full shadow-md hover:bg-brand hover:text-white transition-colors flex items-center justify-center text-lg">🔍</button>
                     <button className="w-9 h-9 bg-white rounded-full shadow-md hover:bg-brand hover:text-white transition-colors flex items-center justify-center text-lg">❤️</button>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-widest">Amber Power Solutions</p>
                  <h3 className="font-rajdhani font-bold text-lg mb-3 line-clamp-2 hover:text-brand cursor-pointer transition-colors leading-snug">{prod.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex text-brand text-xs">★★★★★</div>
                    <span className="text-[10px] text-gray-400">(24 Reviews)</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-xs line-through font-bold">₹ Quote</span>
                      <span className="text-brand font-bold text-xl font-rajdhani leading-none">Best Price</span>
                    </div>
                    <span className="text-[10px] text-green-600 font-bold bg-green-50 px-2.5 py-1 rounded-full border border-green-100 uppercase tracking-tighter">In Stock</span>
                  </div>
                  
                  <button className="w-full mt-6 bg-dark text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand transition-all duration-300 shadow-md hover:shadow-brand/20">
                    Get Free Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden" id="strengths">
        <motion.div 
          className="container mx-auto px-4 md:px-6 max-w-7xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-brand font-bold uppercase tracking-wider mb-2">Core Strengths</p>
            <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-dark mb-4">What Makes Us Different</h2>
            <p className="text-lg text-gray-600">Smart Energy. Reliable Power. Sustainable Future.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              { title: "End-to-End Energy Solutions", desc: "Complete support from consultation and design to installation, commissioning, and long-term service." },
              { title: "High-Quality Products", desc: "Trusted solar panels, inverters, batteries, UPS systems, and heat pumps built for reliable performance." },
              { title: "Expert Engineering Team", desc: "Customized system designs based on real energy requirements for maximum efficiency and output." },
              { title: "Cost-Effective Solutions", desc: "Smart design and optimized energy usage to improve ROI and reduce operational costs." },
              { title: "Reliable Backup Systems", desc: "UPS, battery storage, and hybrid systems that ensure uninterrupted power supply." },
              { title: "Smart Energy Technology", desc: "Advanced monitoring and control solutions for better visibility and performance." },
              { title: "Customer-Focused Service", desc: "Transparent communication, timely execution, and dedicated after-sales support." },
              { title: "Eco-Friendly Solutions", desc: "Clean, renewable systems that reduce carbon footprint and support sustainability goals." }
            ].map((strength, i) => (
              <motion.article 
                key={i} 
                className="bg-white p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative group h-full"
                variants={fadeInUp}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-brand opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="font-rajdhani text-xl font-bold text-dark mb-3 mt-4">{strength.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{strength.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Leadership Showcase Section */}
      <section className="py-20 md:py-32 bg-muted overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 md:px-6 max-w-7xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <p className="eyebrow text-brand font-bold uppercase tracking-wider mb-2">Our Leadership Team</p>
            <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-dark">Meet The People Behind Amber Power Solutions</h2>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8"
            variants={staggerContainer}
          >
            {leaders.map((leader, i) => (
              <motion.article 
                key={i} 
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-white rounded shadow overflow-hidden group"
                variants={fadeInUp}
              >
                <div className="h-64 overflow-hidden">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-rajdhani text-xl font-bold text-dark mb-1">{leader.role}</h3>
                  <p className="text-brand font-bold mb-3">{leader.name}</p>
                  <p className="text-gray-600 text-sm">{leader.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
