import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/batian.jpeg"
          alt="Sustainable Coffee Farming"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white transition-all duration-500 transform md:text-7xl hover:scale-105">
            Ugima Foundation 
            {/* <span className="block text-green-200 animate-pulse">Coffee for a Cause</span> */}
          </h1>
          <p className="max-w-4xl mx-auto mb-8 text-xl font-light leading-relaxed text-green-100 md:text-2xl">
            Sustainable Production & Export of Coffee, Empowering Women, Fostering Community Development.
          </p>
          <button className="relative px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-full bg-primary group hover:bg-green-500 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-300">
            <span className="relative z-10">Discover Our Impact</span>
            <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-green-400 to-green-600 group-hover:opacity-100"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;