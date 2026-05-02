import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate Backend API Call
    // Replace this block with actual fetch/axios call to your backend
    console.log("Submitting payload to backend:", formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get in touch with Amber Power Solutions for solar installations, UPS, inverters, batteries, and heat pump systems.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-dark text-white p-10 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
            <p className="text-gray-300 mb-10 relative z-10">Fill up the form and our Team will get back to you within 24 hours.</p>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <Phone className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                  <a href="tel:+917658818436" className="text-gray-300 hover:text-white transition-colors">+91 76588 18436</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                  <a href="mailto:info@amberpowersolutions.com" className="text-gray-300 hover:text-white transition-colors">info@amberpowersolutions.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Location</h4>
                  <p className="text-gray-300 leading-relaxed">F-237, Phase 8-B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 140307</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-10 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none" placeholder="+91 123 456 7890" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                  Message sent successfully! We will get back to you soon.
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
