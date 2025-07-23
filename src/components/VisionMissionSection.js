import React from 'react';

const VisionMissionSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white"> {/* Clean white background */}
      {/* Soft gradient shapes for depth using brand colors */}
      <div className="absolute rounded-full -top-20 -left-20 w-72 h-72 bg-gradient-to-tr from-[#acd03a]/40 to-[#6fa245]/20 opacity-70 blur-3xl animate-fadeInSlow"></div>
      <div className="absolute delay-500 rounded-full -bottom-20 -right-16 w-96 h-96 bg-gradient-to-br from-[#d4af37]/30 to-[#acd03a]/20 opacity-60 blur-3xl animate-fadeInSlow"></div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl sm:px-12 lg:px-16">
        <div className="mb-16 text-center">
          <h2 className="relative inline-block mb-6 text-4xl font-extrabold text-gray-800 md:text-5xl">
            Vision & Mission
            <span className="block mx-auto mt-3 h-1.5 w-28 bg-gradient-to-r from-[#6fa245] to-[#acd03a] rounded-full"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl font-light text-gray-600">
            Building a sustainable future through regenerative coffee farming and empowering communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Vision Card */}
          <div className="p-10 transition-transform duration-500 bg-white border border-gray-100 shadow-xl rounded-3xl hover:shadow-2xl hover:-translate-y-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="flex items-center justify-center p-4 text-3xl text-white shadow-md bg-gradient-to-r from-[#6fa245] to-[#acd03a] rounded-2xl"> {/* Secondary to Primary gradient */}
                🎯
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-lg font-light leading-relaxed text-gray-700">
              Ugima Foundation aims to become a global leader in regenerative coffee production by setting a benchmark for sustainable agriculture.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-10 transition-transform duration-500 bg-white border border-gray-100 shadow-xl rounded-3xl hover:shadow-2xl hover:-translate-y-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="flex items-center justify-center p-4 text-3xl text-white shadow-md bg-gradient-to-r from-[#d4af37] to-[#acd03a] rounded-2xl"> {/* Complementary to Primary gradient */}
                🚀
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-lg font-light leading-relaxed text-gray-700">
              Our mission is to drive transformation in the coffee industry by promoting regenerative practices, empowering women, and fostering resilient communities—all aligned with the United Nations' Sustainable Development Goals (SDGs).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
