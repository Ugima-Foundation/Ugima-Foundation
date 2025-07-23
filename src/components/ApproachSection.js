import React from 'react';

const ApproachSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl animate-fade-in-down">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#acd03a] to-[#6fa245]">
              Our Approach
            </span>
          </h2>
          <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-[#acd03a] to-[#6fa245] rounded-full" />
          <p className="max-w-3xl mx-auto mt-6 text-lg font-light leading-relaxed text-gray-600 sm:text-xl animate-fade-in">
            Ugima Foundation's approach is rooted in collaboration, innovation, and sustainability. We partner with smallholder farmers, women's groups, cooperatives, and development organizations to deliver impactful, lasting change.
          </p>
        </div>

        {/* Approach Pillars */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Collaboration',
              description: 'Partnering with communities and stakeholders to achieve shared goals and amplify impact.',
              icon: '🤝',
              borderColor: 'border-[#acd03a]',
              iconBg: 'bg-[#acd03a]'
            },
            {
              title: 'Innovation',
              description: 'Leveraging creative solutions and cutting-edge practices to tackle complex challenges.',
              icon: '💡',
              borderColor: 'border-[#6fa245]',
              iconBg: 'bg-[#6fa245]'
            },
            {
              title: 'Sustainability',
              description: 'Promoting long-term environmental and social benefits for communities and the planet.',
              icon: '🌱',
              borderColor: 'border-[#d4af37]',
              iconBg: 'bg-[#d4af37]'
            },
          ].map((pillar, index) => (
            <div
              key={pillar.title}
              className="relative transition-all duration-500 transform group hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`bg-white rounded-2xl p-6 border-2 ${pillar.borderColor} shadow-lg hover:shadow-xl drop-shadow-md transition-all duration-500 flex flex-col h-[280px]`}>
                <div className={`flex items-center justify-center w-14 h-14 mx-auto mb-6 text-3xl ${pillar.iconBg} text-white rounded-full group-hover:scale-110 transition-transform duration-300`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#6fa245] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="flex-1 text-base font-light leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="max-w-4xl pt-12 mx-auto text-center">
          <p className="text-lg font-light leading-relaxed text-gray-600 sm:text-xl animate-fade-in">
            Our commitment to sustainable development drives us to empower communities, foster resilience, and regenerate the environment through innovative and collaborative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;