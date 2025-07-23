import React from 'react';

const BusinessModelIntro = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#6fa245] to-[#acd03a]"> {/* Secondary to Primary gradient */}
      {/* Subtle Background Overlay (Optional: for texture, can be removed if too busy) */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='60' cy='60' r='8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px',
      }}></div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        {/* Main Title */}
        <h1 className="mb-5 text-6xl font-extrabold text-white md:text-7xl drop-shadow-xl animate-fade-in-down">
          Ugima Foundation
        </h1>
        {/* Subtitle */}
        <h2 className="mb-16 text-4xl font-light text-white md:text-5xl drop-shadow-lg animate-fade-in-up">
          Our Business Model
        </h2>
        
        {/* Core Description Card - New Design */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 transform rotate-[-1deg] translate-y-4 mx-auto max-w-4xl transition-all duration-500 hover:rotate-0 hover:translate-y-0 hover:shadow-3xl">
          <p className="text-xl font-light leading-relaxed text-gray-700 md:text-2xl">
            Ugima Foundation's business model is designed to integrate sustainable agricultural practices with innovative technology and a robust financial strategy. By empowering women, engaging stakeholders, and leveraging diversified revenue streams, Ugima Foundation aims to become a global leader in regenerative coffee production by setting a benchmark for sustainable agriculture.
          </p>
          {/* Subtle complementary color accent */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-[#d4af37] rounded-full -mb-1"></div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelIntro;
