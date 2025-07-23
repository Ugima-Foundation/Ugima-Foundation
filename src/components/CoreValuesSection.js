import React from 'react';

const CoreValuesSection = () => {
  const values = [
    {
      title: 'Sustainability',
      description: 'We are committed to environmental stewardship, implementing regenerative agricultural practices that restore soil health, conserve water, and protect biodiversity.',
      icon: '🌱',
      gradient: 'from-[#acd03a] to-[#6fa245]'
    },
    {
      title: 'Empowerment',
      description: 'We focus on empowering marginalized communities by providing access to education, resources, and leadership opportunities within the coffee value chain.',
      icon: '👥',
      gradient: 'from-[#6fa245] to-[#d4af37]'
    },
    {
      title: 'Integrity',
      description: 'We uphold transparency, accountability, and ethical practices in all aspects of our work, ensuring that our impact is positive and lasting.',
      icon: '🤝',
      gradient: 'from-[#d4af37] to-[#acd03a]'
    },
    {
      title: 'Innovation',
      description: 'We embrace innovative solutions that enhance the efficiency and sustainability of coffee production while meeting market demands.',
      icon: '💡',
      gradient: 'from-[#acd03a] to-[#d4af37]'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="relative text-4xl font-bold text-gray-900 sm:text-5xl animate-fade-in-down">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#acd03a] to-[#6fa245]">
              Our Core Values
            </span>
            <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-[#acd03a] to-[#6fa245] rounded-full" />
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg font-light text-gray-600 sm:text-xl animate-fade-in">
            The principles that drive every action at Ugima Foundation
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="relative transition-all duration-500 transform group hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col h-[300px]">
                {/* Icon */}
                <div className="mb-6 text-5xl transition-transform duration-300 transform group-hover:scale-110">
                  {value.icon}
                </div>
                {/* Title */}
                <h3 className={`text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${value.gradient} group-hover:brightness-110 transition-all duration-300`}>
                  {value.title}
                </h3>
                {/* Description */}
                <p className="flex-1 text-base font-light leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;