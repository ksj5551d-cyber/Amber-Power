import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo/APS-logo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Case Study', path: '/case-study' },
    { name: 'Clients', path: '/clients' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const categories = [
    "Solar Panels", "Inverters", "Batteries", "Solar Water Heaters", "Heat Pumps", "UPS Systems"
  ];

  return (
    <header className="w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-dark text-white py-2 hidden md:block border-b border-white/10">
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center text-xs font-barlow tracking-wider">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <span className="text-brand">☎</span> +91 76588 18436
            </span>
            <span className="flex items-center gap-2">
              <span className="text-brand">✉</span> info@amberpowersolutions.in
            </span>
          </div>
          <div className="flex gap-6 items-center">
             <Link to="/contact" className="hover:text-brand transition-colors uppercase font-bold">Track Order</Link>
             <Link to="/about" className="hover:text-brand transition-colors uppercase font-bold">Support</Link>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className={`bg-white text-dark py-4 sticky top-0 shadow-sm border-b transition-all ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img 
              src={logoImg} 
              alt="APS Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="brand__name text-xl md:text-2xl whitespace-nowrap font-rajdhani font-bold leading-tight group-hover:text-brand transition-colors">Amber Power</span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand font-bold -mt-1">Solar Solutions</span>
            </div>
          </Link>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-2xl relative group">
            <input 
              type="text" 
              placeholder="Search for solar products..." 
              className="w-full py-2.5 px-5 pr-12 rounded-full border-2 border-gray-100 focus:border-brand outline-none transition-all font-barlow text-sm"
            />
            <button className="absolute right-1 top-1 bottom-1 px-5 bg-brand text-white rounded-full hover:bg-brand-hover transition-colors font-bold text-sm uppercase tracking-wider">
              SEARCH
            </button>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6">
             <div className="hidden sm:flex flex-col items-end mr-2">
               <span className="text-[10px] text-gray-400 uppercase font-bold">Customer Service</span>
               <span className="text-sm font-bold font-rajdhani hover:text-brand transition-colors">+91 76588 18436</span>
             </div>
             <div className="flex gap-2 sm:gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative group" title="Compare">
                  <span className="text-xl group-hover:scale-110 transition-transform inline-block">⚖</span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative group" title="Account">
                  <span className="text-xl group-hover:scale-110 transition-transform inline-block">👤</span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative group" title="Cart">
                  <span className="text-xl group-hover:scale-110 transition-transform inline-block">🛒</span>
                  <span className="absolute top-0 right-0 w-4 h-4 bg-brand text-white text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
                </button>
             </div>
             
             {/* Mobile Toggle */}
             <button
              className="xl:hidden p-2 text-dark hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Nav Bar (Categories) */}
      <nav className="bg-white border-b hidden xl:block">
        <div className="container mx-auto px-4 max-w-7xl flex items-center">
          <div className="group relative mr-8">
            <button className="bg-brand text-white px-6 py-3 font-rajdhani font-bold flex items-center gap-3 w-64 hover:bg-brand-hover transition-colors">
              <span className="text-xl">☰</span> ALL CATEGORIES
            </button>
            <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-x border-b opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40">
              {categories.map((cat, i) => (
                <Link key={i} to="/products" className="block px-6 py-3 text-sm hover:bg-gray-50 hover:text-brand border-b border-gray-50 transition-colors font-barlow font-medium">{cat}</Link>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-5 py-3 font-rajdhani font-bold uppercase text-sm tracking-wide transition-colors ${isActive ? 'text-brand' : 'text-gray-700 hover:text-brand'}`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
          
          <div className="ml-auto">
            <Link to="/contact" className="text-brand font-bold text-sm flex items-center gap-2 hover:underline transition-all">
              <span className="animate-pulse">🔥</span> SPECIAL OFFERS
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[55] xl:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-[60] bg-white w-4/5 max-w-xs shadow-2xl xl:hidden overflow-y-auto"
            >
              <div className="p-6 border-b flex justify-between items-center bg-dark text-white">
                <span className="font-rajdhani font-bold text-xl tracking-wider">NAVIGATION</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-2xl hover:text-brand transition-colors">✕</button>
              </div>
              <div className="p-4">
                <div className="mb-6 relative">
                   <input type="text" placeholder="Search products..." className="w-full p-3 pl-4 pr-12 border rounded-full focus:border-brand outline-none transition-all" />
                   <button className="absolute right-4 top-1/2 -translate-y-1/2 text-brand">🔍</button>
                </div>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.path} 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-3 px-4 rounded-lg font-rajdhani font-bold uppercase transition-colors ${location.pathname === link.path ? 'bg-brand/10 text-brand' : 'hover:bg-gray-50'}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t">
                  <p className="text-xs uppercase font-bold text-gray-400 mb-4 px-4 tracking-widest">Product Categories</p>
                  <div className="flex flex-col">
                    {categories.map((cat, i) => (
                      <Link key={i} to="/products" className="py-2.5 px-4 text-sm hover:text-brand border-b border-gray-50 last:border-0">{cat}</Link>
                    ))}
                  </div>
                </div>
                <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs font-bold text-gray-500 mb-2">NEED HELP?</p>
                  <p className="font-rajdhani font-bold text-lg">+91 76588 18436</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
