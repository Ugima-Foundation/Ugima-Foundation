import React from 'react';

const WhatWeDoSection = () => {
  const activities = [
    {
      title: 'Regenerative Coffee Production',
      description: 'We support farmers in transitioning to regenerative agricultural practices that improve soil fertility, increase resilience to climate change, and reduce carbon footprints. Together we produce (Ugima Coffee) premium single origin specialty coffee beans.',
      icon: '🌿',
      borderColor: 'border-[#acd03a]',
      iconBg: 'bg-[#acd03a]'
    },
    {
      title: 'Barista EBVT',
      description: 'Through our Barista Apprenticeship program, young girls from coffee growing communities are supported to kick-start a career in the coffee value chain. The program offers scholarships and connects needy girls with job and career opportunities.',
      icon: '☕',
      borderColor: 'border-[#6fa245]',
      iconBg: 'bg-[#6fa245]'
    },
    {
      title: 'Inputs Supply to Farmers',
      description: 'Ugima Foundation ensures that farmers have access to high-quality inputs such as organic fertilizers, seeds, and tools essential for regenerative farming. We facilitate the procurement and distribution of these inputs to ensure that farmers are equipped to implement sustainable farming practices that enhance both productivity and environmental health.',
      icon: '🌾',
      borderColor: 'border-[#d4af37]',
      iconBg: 'bg-[#d4af37]'
    },
    {
      title: 'Ugima Coffee Clinic',
      description: 'The Ugima Coffee Clinic serves as a hub for providing technical support and training to coffee farmers. Through the clinic, farmers receive personalized guidance on best practices for coffee cultivation, pest and disease management, soil health, and sustainable farming techniques. We conduct regular training sessions to equip farmers with the knowledge and skills needed to increase their yields and improve the quality of their coffee.',
      icon: '🏥',
      borderColor: 'border-[#acd03a]',
      iconBg: 'bg-[#acd03a]'
    },
    {
      title: 'Community Development',
      description: 'Ugima Foundation works closely with local communities to address social and economic challenges. We promote education, healthcare, and social-entrepreneurship initiatives that improve the overall well-being of the communities we serve.',
      icon: '🤝',
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
              What We Do
            </span>
          </h2>
          <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-[#acd03a] to-[#6fa245] rounded-full" />
          <p className="max-w-3xl mx-auto mt-6 text-lg font-light leading-relaxed text-gray-600 sm:text-xl animate-fade-in">
            Our comprehensive approach to sustainable coffee production and community empowerment.
          </p>
        </div>

        {/* Activities */}
        <div className="space-y-12">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className={`flex flex-col items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <div className="flex items-center justify-center gap-4 lg:justify-start">
                  <div className={`p-3 text-4xl rounded-full shadow-md ${activity.iconBg} text-white`}>
                    {activity.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 group-hover:text-[#6fa245] transition-colors duration-300">
                    {activity.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                  {activity.description}
                </p>
              </div>

              {/* Visual Card */}
              <div className={`relative flex items-center justify-center flex-shrink-0 w-full max-w-xs h-64 sm:h-72 rounded-2xl ${activity.borderColor} border-2 shadow-lg drop-shadow-[0_4px_12px_rgba(172,208,58,0.3)] group hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                <span className="text-gray-200 text-8xl sm:text-9xl">
                  {activity.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;