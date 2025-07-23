import React from 'react';

const ValuePropositionSection = () => {
  return (
    <section className="relative py-20 bg-white"> {/* Clean white background */}
      {/* Subtle background blur/shape for visual interest */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#acd03a] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#6fa245] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            Our Value Proposition
          </h2>
          <p className="max-w-5xl mx-auto text-xl font-light leading-relaxed text-gray-600">
            Ugima Foundation creates value by producing premium, sustainably grown coffee through regenerative farming practices. Its dual-impact approach not only delivers high-quality, ethically produced coffee but also empowers women and uplifts local communities.
          </p>
        </div>
        
        {/* Value Highlights Grid */}
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          {/* Highlight 1: Premium Quality */}
          <div className="relative p-8 overflow-hidden text-center transition-all duration-300 bg-white border border-gray-100 shadow-xl rounded-3xl hover:scale-105 hover:shadow-2xl group">
            {/* Subtle top border accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#acd03a] group-hover:h-full group-hover:opacity-5 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-[#acd03a]/10 group-hover:bg-[#acd03a] transition-colors duration-300">
                <span className="text-5xl transition-colors duration-300 group-hover:text-white">🌱</span>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-800">Premium Quality</h3>
              <p className="text-base font-light text-gray-700">Sustainably grown coffee through regenerative practices.</p>
            </div>
          </div>
          {/* Highlight 2: Community Impact */}
          <div className="relative p-8 overflow-hidden text-center transition-all duration-300 bg-white border border-gray-100 shadow-xl rounded-3xl hover:scale-105 hover:shadow-2xl group">
            {/* Subtle top border accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#6fa245] group-hover:h-full group-hover:opacity-5 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-[#6fa245]/10 group-hover:bg-[#6fa245] transition-colors duration-300">
                <span className="text-5xl transition-colors duration-300 group-hover:text-white">👩‍🌾</span>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-800">Community Impact</h3>
              <p className="text-base font-light text-gray-700">Empowering women and uplifting local communities.</p>
            </div>
          </div>
          {/* Highlight 3: Transparency */}
          <div className="relative p-8 overflow-hidden text-center transition-all duration-300 bg-white border border-gray-100 shadow-xl rounded-3xl hover:scale-105 hover:shadow-2xl group">
            {/* Subtle top border accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37] group-hover:h-full group-hover:opacity-5 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-[#d4af37]/10 group-hover:bg-[#d4af37] transition-colors duration-300">
                <span className="text-5xl transition-colors duration-300 group-hover:text-white">🔍</span>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-800">Transparency</h3>
              <p className="text-base font-light text-gray-700">Advanced technology for traceability and quality control.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
