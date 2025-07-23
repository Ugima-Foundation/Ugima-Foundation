import React from 'react';

const ImpactSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#6fa245] to-[#acd03a]"> {/* Using custom colors for gradient background */}
      {/* Subtle Background Pattern - adjusted opacity for better visibility on new gradient */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-extrabold text-white md:text-6xl mb-7 drop-shadow-lg">
            Our Impact
          </h2>
          <p className="max-w-4xl mx-auto text-xl font-light leading-relaxed text-white md:text-2xl"> {/* Text color changed to white for contrast */}
            Ugima Foundation’s work has had a transformative effect on the communities we engage with. By promoting regenerative farming practices, we have helped farmers restore soil health and increase yields, leading to better economic outcomes. Our women’s empowerment programs have enabled women to become leaders in the coffee sector, while our community development efforts have enhanced access to education, healthcare, and economic opportunities.
          </p>
        </div>

        {/* Impact Stats - redesigned for clarity and visual appeal */}
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          {/* Stat Card 1 */}
          <div className="p-8 text-center transition-all duration-300 bg-white shadow-2xl rounded-xl hover:scale-105 hover:shadow-3xl">
            <div className="mb-3 text-5xl font-bold text-[#6fa245]">500+</div> {/* Using secondary color for numbers */}
            <div className="text-lg font-semibold text-gray-700">Farmers Supported</div>
          </div>
          {/* Stat Card 2 */}
          <div className="p-8 text-center transition-all duration-300 bg-white shadow-2xl rounded-xl hover:scale-105 hover:shadow-3xl">
            <div className="mb-3 text-5xl font-bold text-[#6fa245]">50+</div> {/* Using secondary color for numbers */}
            <div className="text-lg font-semibold text-gray-700">Women Empowered</div>
          </div>
          {/* Stat Card 3 */}
          <div className="p-8 text-center transition-all duration-300 bg-white shadow-2xl rounded-xl hover:scale-105 hover:shadow-3xl">
            <div className="mb-3 text-5xl font-bold text-[#6fa245]">10</div> {/* Using secondary color for numbers */}
            <div className="text-lg font-semibold text-gray-700">Communities Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
