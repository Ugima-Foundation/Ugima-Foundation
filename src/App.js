import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/HeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';


const App = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((anchor) => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach((anchor) => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero id="hero" />
                  <WhoWeAreSection id="WhoWeAreSection" />
                  <Footer id="footer" />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
  );
};

export default App;