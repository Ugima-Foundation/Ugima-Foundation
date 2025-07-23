import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/HeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import VisionSection from './components/VisionSection';
import CoreValuesSection from './components/CoreValuesSection';
import AboutVisionSection from './components/AboutVisionSection';
import ApproachSection from './components/ApproachSection';
import ImpactSection from './components/ImpactSection';
import PartnershipsSection from './components/PartnershipsSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import OurProductsSection from './components/OurProductsSection';
import ServicesSection from './components/ServicesSection';
import BusinessModelCanvas from './components/BusinessModelCanvas';
import BusinessModelIntro from './components/BusinessModelIntro';
import ValuePropositionSection from './components/ValuePropositionSection';
import VisionMissionSection from './components/VisionMissionSection';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

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
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero id="home" />
                  <WhoWeAreSection id="WhoWeAreSection" />
                  <VisionSection id="VisionSection" />
                  <CoreValuesSection id="CoreValuesSection" />
                  <Footer id="footer" />
                </>
              }
            />
            {/* About Page */}
            <Route
              path="/about"
              element={
                <>
                  <AboutVisionSection id="AboutVisionSection" />
                  <ApproachSection id="ApproachSection" />
                  <ImpactSection id="ImpactSection" />
                  <PartnershipsSection id="PartnershipsSection" />
                  <WhatWeDoSection id="WhatWeDoSection" />
                  <Footer id="footer" />
                </>
              }
            />
            {/* Products & Services Page */}
            <Route
              path="/products-services"
              element={
                <>
                  <OurProductsSection id="OurProductsSection" />
                  <ServicesSection id="ServicesSection" />
                  <Footer id="footer" />
                </>
              }
            />
            {/* Ugima Foundation Page */}
            <Route
              path="/ugima-foundation"
              element={
                <>
                  <BusinessModelCanvas id="BusinessModelCanvas" />
                  <BusinessModelIntro id="BusinessModelIntro" />
                  <ValuePropositionSection id="ValuePropositionSection" />
                  <VisionMissionSection id="VisionMissionSection" />
                  <Footer id="footer" />
                </>
              }
            />
            {/* Contact Us Page */}
            <Route
              path="/contact"
              element={
                <>
                  <ContactForm id="ContactForm" />
                  <ContactInfo id="ContactInfo" />
                  <Footer id="footer" />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;