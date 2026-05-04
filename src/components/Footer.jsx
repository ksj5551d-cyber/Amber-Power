import { Link } from 'react-router-dom';
import logoImg from '../assets/logo/APS-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-darker text-gray-400 font-barlow relative overflow-hidden pt-20">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-50"></div>
      
      {/* Newsletter / CTA Section */}
      <div className="container mx-auto px-4 max-w-7xl mb-16">
        <div className="bg-dark p-8 md:p-12 rounded-3xl flex flex-col lg:flex-row justify-between items-center gap-8 border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 text-center lg:text-left">
            <p className="text-brand font-bold uppercase tracking-widest text-xs mb-3">Newsletter Subscription</p>
            <h3 className="font-rajdhani text-3xl md:text-4xl font-bold text-white mb-2">Join Our Green Energy Revolution</h3>
            <p className="text-gray-400 max-w-md">Get exclusive offers and the latest solar technology updates delivered to your inbox.</p>
          </div>
          <div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/5 border border-white/10 rounded-full px-8 py-4 outline-none focus:border-brand transition-all text-white min-w-[300px]"
            />
            <button className="bg-brand text-white font-bold uppercase px-8 py-4 rounded-full hover:bg-brand-hover transition-all shadow-lg hover:shadow-brand/20 whitespace-nowrap tracking-widest text-xs">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <img 
              src={logoImg} 
              alt="APS Logo" 
              className="h-10 w-auto brightness-0 invert opacity-80"
            />
            <span className="font-rajdhani text-2xl font-bold text-white">Amber Power</span>
          </div>
          <p className="mb-8 leading-relaxed text-sm text-gray-400">
            India's leading solar marketplace providing end-to-end renewable energy solutions for residential, commercial, and industrial sectors.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">☎</div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-500">Call Us</p>
                <p className="text-white font-bold font-rajdhani">+91 76588 18436</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">✉</div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-500">Email Us</p>
                <p className="text-white font-bold font-rajdhani">info@amberpowersolutions.in</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-rajdhani text-xl font-bold text-white mb-8 relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand"></span>
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="text-brand opacity-0 group-hover:opacity-100 transition-all">→</span> Home</Link></li>
            <li><Link to="/about" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="text-brand opacity-0 group-hover:opacity-100 transition-all">→</span> About Us</Link></li>
            <li><Link to="/products" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="text-brand opacity-0 group-hover:opacity-100 transition-all">→</span> Shop Solar</Link></li>
            <li><Link to="/case-study" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="text-brand opacity-0 group-hover:opacity-100 transition-all">→</span> Case Studies</Link></li>
            <li><Link to="/clients" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="text-brand opacity-0 group-hover:opacity-100 transition-all">→</span> Our Clients</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-rajdhani text-xl font-bold text-white mb-8 relative inline-block">
            Support
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand"></span>
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/contact" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="text-brand opacity-0 group-hover:opacity-100 transition-all">→</span> Contact Support</Link></li>
            <li><Link to="/blogs" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="text-brand opacity-0 group-hover:opacity-100 transition-all">→</span> Latest Blogs</Link></li>
            <li><Link to="/products" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="text-brand opacity-0 group-hover:opacity-100 transition-all">→</span> Track My Order</Link></li>
            <li><Link to="/about" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="text-brand opacity-0 group-hover:opacity-100 transition-all">→</span> Privacy Policy</Link></li>
            <li><Link to="/about" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="text-brand opacity-0 group-hover:opacity-100 transition-all">→</span> Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-rajdhani text-xl font-bold text-white mb-8 relative inline-block">
            Our Location
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand"></span>
          </h4>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            F-237, Phase 8-B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 140307
          </p>
          <div className="w-full h-40 bg-white/5 rounded-2xl overflow-hidden border border-white/5 group relative cursor-pointer">
             <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <span className="bg-white text-dark px-4 py-2 rounded-full font-bold text-xs uppercase shadow-xl">View Larger Map</span>
             </div>
             <iframe
              title="Amber Power Solutions map location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2326559738535!2d76.68926877619963!3d30.71185918664011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee559ac9b0e7%3A0x3f1633b3f0cc86b6!2sNetSparked%20InfoTech!5e0!3m2!1sen!2sus!4v1775753158022!5m2!1sen!2sus"
              className="w-full h-full border-0 opacity-40 group-hover:opacity-60 transition-opacity grayscale invert"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen>
            </iframe>
          </div>
          <div className="flex gap-4 mt-8">
            {['f', 'ig', 'in', 'x'].map((social, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand text-white transition-all hover:-translate-y-1 shadow-lg border border-white/5 uppercase font-bold text-xs">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-darker border-t border-white/5 py-8">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Amber Power Solutions. Designed for Sustainability.</p>
          <div className="flex gap-8">
            <span className="hover:text-brand cursor-pointer transition-colors">SECURE PAYMENT</span>
            <span className="hover:text-brand cursor-pointer transition-colors">FAST DELIVERY</span>
            <span className="hover:text-brand cursor-pointer transition-colors">24/7 SUPPORT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
