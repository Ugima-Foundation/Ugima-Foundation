import React from 'react';

const AboutVisionSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/coffee-bean-berry-ripening-coffee-farm.jpg"
          alt="Women Coffee Empowerment"
          className="object-cover object-center w-full h-full opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-gray-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-white md:text-6xl mb-7 drop-shadow-lg">
          Our Vision
        </h1>
        <p className="max-w-4xl mx-auto text-xl font-light leading-relaxed text-gray-200 md:text-2xl">
          To be a leading force in the regenerative agriculture movement, empowering communities,
          especially women, and transforming the coffee industry into a model of sustainability and social equity.
        </p>
      </div>
    </section>
  );
};

export default AboutVisionSection;