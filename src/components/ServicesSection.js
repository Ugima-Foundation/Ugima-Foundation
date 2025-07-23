import React from 'react';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl animate-fade-in-down">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#acd03a] to-[#6fa245]">
              Services We Offer
            </span>
          </h2>
          <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-[#acd03a] to-[#6fa245] rounded-full" />
          <p className="max-w-4xl mx-auto mt-6 text-lg font-light leading-relaxed text-gray-600 sm:text-xl animate-fade-in">
            Ugima Coffee is dedicated to fostering a sustainable and prosperous coffee ecosystem in Kenya. We provide a range of services designed to empower coffee farmers and stakeholders throughout the value chain.
          </p>
        </div>

        {/* Featured Service: Ugima Coffee Clinic */}
        <div className="mb-12 p-6 bg-primary rounded-2xl border-2 border-[#acd03a] shadow-lg drop-shadow-[0_4px_12px_rgba(172,208,58,0.3)] hover:shadow-xl transition-all duration-500">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-20 h-20 bg-[#6fa245] text-white rounded-full shadow-md">
                <span className="text-4xl">🏥</span>
              </div>
            </div>
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
                Ugima Coffee Clinic
              </h3>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                Your hub for coffee excellence. The Ugima Coffee Clinic provides technical support and training to coffee farmers, offering personalized guidance on cultivation, pest and disease management, soil health, and sustainable practices. Our tailored training sessions equip smallholder farmers with the skills to boost yields and enhance coffee quality, ensuring they thrive in the competitive market.
              </p>
            </div>
          </div>
        </div>

        {/* Service Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Cultivation Training',
              description: 'Best practices for coffee growing, from planting to harvesting.',
              icon: '🌱',
              borderColor: 'border-[#acd03a]',
              iconBg: 'bg-[#acd03a]'
            },
            {
              title: 'Pest Management',
              description: 'Effective strategies for disease prevention and control.',
              icon: '🛡️',
              borderColor: 'border-[#6fa245]',
              iconBg: 'bg-[#6fa245]'
            },
            {
              title: 'Soil Health',
              description: 'Implementing regenerative practices for vibrant soil ecosystems.',
              icon: '🏔️',
              borderColor: 'border-[#d4af37]',
              iconBg: 'bg-[#d4af37]'
            },
            {
              title: 'Yield Optimization',
              description: 'Techniques to maximize productivity and coffee quality.',
              icon: '📈',
              borderColor: 'border-[#acd03a]',
              iconBg: 'bg-[#acd03a]'
            }
          ].map((service, index) => (
            <div
              key={service.title}
              className="transition-all duration-500 transform group hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`p-6 bg-white rounded-2xl border-2 ${service.borderColor} shadow-lg drop-shadow-[0_4px_12px_rgba(172,208,58,0.3)] hover:shadow-xl flex flex-col items-center text-center h-[220px]`}>
                <div className={`flex items-center justify-center w-12 h-12 mb-4 text-2xl ${service.iconBg} text-white rounded-full group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-[#6fa245] transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="flex-1 text-sm font-light text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;