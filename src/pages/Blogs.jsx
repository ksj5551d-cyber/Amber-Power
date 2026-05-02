import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blogs = () => {
  const blogs = [
    {
      title: "The Future of Solar Energy in Urban India",
      excerpt: "As cities grow, rooftop solar is becoming the most viable solution for sustainable energy generation. Learn how policies and tech are shaping this future.",
      author: "Arun Kumar",
      date: "Oct 15, 2026",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "How to Choose the Right UPS for Your Business",
      excerpt: "Not all backup systems are created equal. Discover the key factors to consider when selecting an uninterrupted power supply for commercial use.",
      author: "Kuldeep Singh",
      date: "Sep 28, 2026",
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Understanding Heat Pump Efficiency Ratings",
      excerpt: "A deep dive into COP and EER ratings to help you understand exactly how much energy (and money) you can save with modern heat pumps.",
      author: "Kewal Singh Patial",
      date: "Sep 10, 2026",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Latest Insights</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Insights on solar energy, power backup, and sustainable systems from the Amber Power Solutions team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col">
              <div className="overflow-hidden h-64">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><User size={16} /> {blog.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={16} /> {blog.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{blog.excerpt}</p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Read Article <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
