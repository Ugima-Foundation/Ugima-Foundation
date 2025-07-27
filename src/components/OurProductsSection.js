import React from 'react';

const OurProductsSection = () => {
  const products = [
    {
      name: 'Fine Grind Coffee',
      weight: '125gm',
      image: '/fine-grade.jpg',
      alt: 'Ugima Coffee - Fine Grind 125gm',
    },
    {
      name: 'Whole Bean Coffee',
      weight: '250gm',
      image: 'whole-bean.jpg',
      alt: 'Ugima Coffee - Whole Beans 250gm',
    },
    {
      name: 'Fine Grind Coffee',
      weight: '125gm',
      image: '/fine-coffee-black.jpg',
      alt: 'Ugima Coffee - Fine Grind 125gm (Dark Packaging)',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl animate-fade-in-down">
            <span className="text-transparent bg-clip-text bg-secondary">
              Our Products
            </span>
          </h1>
          <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-[#acd03a] to-[#6fa245] rounded-full" />
          <p className="max-w-3xl mx-auto mt-6 text-lg font-light leading-relaxed text-gray-600 sm:text-xl animate-fade-in">
            Discover Ugima Coffee, a premium Kenyan single-origin coffee crafted with sustainability and quality at its core.
          </p>
        </div>

        {/* Main Product Display - Using a specific large image for the hero */}
        <div className="grid items-center grid-cols-1 gap-8 mb-16 lg:grid-cols-2">
          {/* Product Image on Left/Right */}
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

        {/* Product Gallery Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            <span className="text-transparent bg-clip-text bg-secondary">
              Our Product Range
            </span>
          </h2>
          <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-[#d4af37] to-[#acd03a] rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 transform bg-white border border-gray-100 shadow-lg group rounded-xl hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative flex items-center justify-center w-full h-64 bg-gray-50">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="object-contain w-full h-full p-4"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/F0F0F0/ADADAD?text=Image+Not+Found'; }}
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-md">{product.weight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Features (Kept from original design, adjusted styles) */}
        <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Grade AA',
              subtitle: 'Premium Quality',
              icon: '🏆',
              iconColor: 'text-[#6fa245]', // Secondary
              bgColor: 'bg-[#6fa245]/10',
            },
            {
              title: 'Sustainable',
              subtitle: 'Regenerative Farming',
              icon: '🌱',
              iconColor: 'text-[#acd03a]', // Primary
              bgColor: 'bg-[#acd03a]/10',
            },
            {
              title: 'Single Origin',
              subtitle: 'Kenyan Arabica',
              icon: '🇰🇪',
              iconColor: 'text-[#d4af37]', // Complementary
              bgColor: 'bg-[#d4af37]/10',
            },
            {
              title: 'Ethical',
              subtitle: 'Community Empowered',
              icon: '👩‍🌾',
              iconColor: 'text-[#6fa245]', // Secondary
              bgColor: 'bg-[#6fa245]/10',
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center p-6 text-center transition-all duration-300 transform bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`flex items-center justify-center w-16 h-16 mb-4 text-3xl rounded-full ${feature.bgColor} ${feature.iconColor} transition-all duration-300 group-hover:bg-[#6fa245] group-hover:text-white`}>
                {feature.icon}
              </div>
              <h3 className="mb-1 text-lg font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-sm font-light text-gray-600">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProductsSection;
