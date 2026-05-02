import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import CaseStudy from './pages/CaseStudy';
import Clients from './pages/Clients';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Only show once per session to avoid annoying the user on refresh
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="case-study" element={<CaseStudy />} />
            <Route path="clients" element={<Clients />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
