import React from 'react';

const PartnershipsSection = () => {
  const partnerTypes = [
    {
      type: 'Government Agencies',
      description: 'Collaborating with local and national government bodies for policy support and implementation.',
      icon: '🏛️',
      borderColor: 'border-[#acd03a]',
      iconBg: 'bg-[#acd03a]'
    },
    {
      type: 'NGOs',
      description: 'Working with non-governmental organizations to maximize community impact and reach.',
      icon: '🤝',
      borderColor: 'border-[#d4af37]',
      iconBg: 'bg-[#d4af37]'
    },
    {
      type: 'International Development Organizations',
      description: 'Partnering with global organizations for comprehensive resources and specialized expertise.',
      icon: '🌍',
      borderColor: 'border-[#6fa245]',
      iconBg: 'bg-[#6fa245]'
    },
    {
      type: 'Coffee Cooperatives',
      description: 'Supporting and strengthening local coffee farming cooperatives for sustainable growth.',
      icon: '☕',
      borderColor: 'border-[#acd03a]',
      iconBg: 'bg-[#acd03a]'
    },
    {
      type: 'Academic Institutions',
      description: 'Collaborating with universities and research centers for knowledge sharing and innovation.',
      icon: '🎓',
      borderColor: 'border-[#6fa245]',
      iconBg: 'bg-[#6fa245]'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl animate-fade-in-down">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#acd03a] to-[#6fa245]">
              Our Partnerships
            </span>
          </h2>
          <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-[#acd03a] to-[#6fa245] rounded-full" />
          <p className="max-w-3xl mx-auto mt-6 text-lg font-light leading-relaxed text-gray-600 sm:text-xl animate-fade-in">
            Building strong alliances with diverse partners to create lasting impact in communities.
          </p>
        </div>

        {/* Central Description */}
        <div className="max-w-5xl mx-auto mb-12 p-6 bg-gray-50 rounded-2xl border border-[#acd03a] shadow-sm drop-shadow-md text-center text-gray-600 text-lg sm:text-xl">
          <p className="leading-relaxed">
            We collaborate with local, national, and international partners to enhance the scale and impact of our programs. These partnerships include government agencies, NGOs, international development organizations, coffee cooperatives, and academic institutions. Together, we create synergies that promote sustainable agricultural practices, gender equality, and economic growth.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map((partner, index) => (
            <div
              key={partner.type}
              className="relative transition-all duration-500 transform group hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`bg-white rounded-2xl p-6 border-2 ${partner.borderColor} shadow-lg hover:shadow-xl drop-shadow-[0_4px_12px_rgba(172,208,58,0.3)] transition-all duration-500 flex flex-col h-[280px]`}>
                <div className={`flex items-center justify-center w-14 h-14 mx-auto mb-6 text-3xl ${partner.iconBg} text-white rounded-full group-hover:scale-110 transition-transform duration-300`}>
                  {partner.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#6fa245] transition-colors duration-300">
                  {partner.type}
                </h3>
                <p className="flex-1 text-base font-light leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;