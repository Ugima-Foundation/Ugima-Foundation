import React from 'react';

const VisionSection = () => {
  return (
    <section className="relative py-20 overflow-hidden sm:py-28 bg-gradient-to-br from-gray-50 via-white to-primary">

      {/* Main Content */}
      <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        {/* Title with Gradient and Animation */}
        <h2 className="mb-8 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl animate-fade-in-down">
          <span className="text-transparent bg-clip-text bg-primary">
            Our Vision
          </span>
          <div className="w-32 h-1 mx-auto mt-4 rounded-full bg-secondary" />
        </h2>

        {/* Vision Statement Card */}
        <div className="max-w-3xl p-8 mx-auto mt-12 transition-all duration-500 transform border border-teal-100 shadow-xl bg-white/90 backdrop-blur-md sm:p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-1">
          <p className="text-xl font-light leading-relaxed text-gray-700 sm:text-2xl lg:text-3xl">
            "To lead the charge in <span className="font-semibold text-primary">regenerative agriculture</span>, uplifting communities — particularly women — and reshaping the coffee industry into a beacon of <span className="font-semibold text-primary">sustainability and equity</span>."
          </p>
          {/* Subtle Icon */}
          <div className="flex justify-center mt-6">
            <svg className="w-8 h-8 text-teal-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <p className="mb-6 text-lg text-gray-600 animate-fade-in">
            Join us in making this vision a reality.
          </p>
          <a
            href="#hero"
            className="inline-block px-8 py-3 text-lg font-medium text-white transition-all duration-300 transform rounded-full shadow-lg bg-secondary hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-opacity-50"
          >
            Discover Our Impact
          </a>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute w-24 h-24 bg-teal-200 rounded-full top-10 left-10 opacity-20 animate-float" />
      <div className="absolute w-32 h-32 bg-indigo-200 rounded-full bottom-10 right-10 opacity-20 animate-float-delayed" />
    </section>
  );
};

export default VisionSection;