import React from 'react';

const OurProductsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl animate-fade-in-down">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#acd03a] to-[#6fa245]">
              Our Products
            </span>
          </h1>
          <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-[#acd03a] to-[#6fa245] rounded-full" />
          <p className="max-w-3xl mx-auto mt-6 text-lg font-light leading-relaxed text-gray-600 sm:text-xl animate-fade-in">
            Discover Ugima Coffee, a premium Kenyan single-origin coffee crafted with sustainability and quality at its core.
          </p>
        </div>

        {/* Main Product Card */}
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative transition-all duration-500 transform group hover:-translate-y-2">
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#acd03a] shadow-lg drop-shadow-[0_4px_12px_rgba(172,208,58,0.3)] hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1675306408031-a9aad9f23308?auto=format&fit=crop&w=800&q=80"
                alt="Ugima Coffee - Premium Kenyan Coffee Beans"
                className="object-cover w-full h-80 sm:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute text-white bottom-6 left-6">
                <h3 className="text-3xl font-bold drop-shadow-md">Ugima Coffee</h3>
                <p className="text-lg font-light">Grade AA Premium Quality</p>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl border-2 border-[#6fa245] shadow-lg drop-shadow-[0_4px_12px_rgba(111,162,69,0.3)] hover:shadow-xl transition-all duration-500">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 sm:text-3xl">
                Premium Kenyan Coffee
              </h2>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                Ugima Coffee is a meticulously crafted Kenyan single-origin coffee, renowned for its Grade AA classification. Our beans are grown using regenerative agricultural practices, ensuring exceptional quality while promoting environmental sustainability.
              </p>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                Through precise cultivation and specialized roasting, we unlock the rich, aromatic flavors of Kenyan Arabica, delivering a bold and unforgettable coffee experience that reflects our commitment to excellence and community empowerment.
              </p>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Grade AA',
              subtitle: 'Premium Quality',
              icon: '🏆',
              borderColor: 'border-[#acd03a]',
              iconBg: 'bg-[#acd03a]'
            },
            {
              title: 'Sustainable',
              subtitle: 'Regenerative Farming',
              icon: '🌱',
              borderColor: 'border-[#6fa245]',
              iconBg: 'bg-[#6fa245]'
            },
            {
              title: 'Single Origin',
              subtitle: 'Kenyan Arabica',
              icon: '🇰🇪',
              borderColor: 'border-[#d4af37]',
              iconBg: 'bg-[#d4af37]'
            },
            {
              title: 'Ethical',
              subtitle: 'Community Empowered',
              icon: '👩‍🌾',
              borderColor: 'border-[#acd03a]',
              iconBg: 'bg-[#acd03a]'
            }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="transition-all duration-500 transform group hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`p-6 bg-white rounded-2xl border-2 ${feature.borderColor} shadow-lg drop-shadow-[0_4px_12px_rgba(172,208,58,0.3)] hover:shadow-xl flex flex-col items-center text-center h-[200px]`}>
                <div className={`flex items-center justify-center w-12 h-12 mb-4 text-2xl ${feature.iconBg} text-white rounded-full group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div className="text-lg font-semibold text-gray-800 group-hover:text-[#6fa245] transition-colors duration-300">
                  {feature.title}
                </div>
                <div className="flex-1 text-sm font-light text-gray-600">
                  {feature.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProductsSection;