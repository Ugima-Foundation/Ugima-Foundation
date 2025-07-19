import React from 'react';

const WhoWeAreSection = () => (
  <section className="bg-white rounded-xl shadow-lg p-8 mb-12 relative overflow-hidden">
    {/* Subtle background gradient for visual interest */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50 to-transparent opacity-50 rounded-xl"></div>
    <div className="relative z-10 text-center">
      {/* Coffee bean emoji as a prominent icon */}
      <div className="text-6xl mb-4 text-green-600">☕</div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 leading-tight">Who We Are</h2>
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
        <strong className="text-green-700">Ugima Foundation</strong> is a Kenyan social enterprise deeply committed to <strong className="text-green-700">Sustainable Production & Export of Coffee</strong>. Our core mission revolves around <strong className="text-green-700">empowering women</strong> and fostering <strong className="text-green-700">community development</strong>, all meticulously aligned with the United Nations’ Sustainable Development Goals (SDGs). We believe in coffee that not only delights the palate but also uplifts lives and protects our planet.
      </p>
    </div>
  </section>
);

export default WhoWeAreSection;
