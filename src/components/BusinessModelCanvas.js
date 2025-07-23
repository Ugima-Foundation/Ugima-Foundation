import React from 'react';

const BusinessModelCanvas = () => {
  const businessModelSections = [
    {
      title: 'Key Partners',
      items: [
        'Smallholder Coffee Farmers & Women Cooperatives',
        'Research & Educational Institutions',
        'Ethical Buyers & Roasters',
        'Government & NGOs',
        'Financial Institutions & Impact Investors',
        'Certification Bodies'
      ],
      borderColor: 'border-[#6fa245]',
      iconBg: 'bg-[#6fa245]',
      icon: '🤝'
    },
    {
      title: 'Key Activities',
      items: [
        'Regenerative Farming',
        'Farmer Training & Capacity Building',
        'Value Addition & Market Expansion',
        'Monitoring & Evaluation (M&E)'
      ],
      borderColor: 'border-[#acd03a]',
      iconBg: 'bg-[#acd03a]',
      icon: '⚡'
    },
    {
      title: 'Key Resources',
      items: [
        'Agricultural Assets',
        'Human Capital',
        'Financial Capital'
      ],
      borderColor: 'border-[#d4af37]',
      iconBg: 'bg-[#d4af37]',
      icon: '🏛️'
    },
    {
      title: 'Customer Segments',
      items: [
        'B2B (Wholesale Buyers, Roasters)',
        'B2C (Direct Consumers)',
        'Impact Investors & Development Organizations'
      ],
      borderColor: 'border-[#6fa245]',
      iconBg: 'bg-[#6fa245]',
      icon: '👥'
    },
    {
      title: 'Channels',
      items: [
        'Direct Exports & B2B Sales',
        'Digital Platforms (E-commerce)',
        'Experiential Marketing (Tastings, Events)',
        'Trade Shows & Sustainability Forums'
      ],
      borderColor: 'border-[#acd03a]',
      iconBg: 'bg-[#acd03a]',
      icon: '📡'
    },
    {
      title: 'Cost Structure',
      items: [
        'Production Costs (Farming, Processing)',
        'Technology & Innovation Investment',
        'Training & Capacity Building Programs',
        'Marketing & Distribution Expenses',
        'Operational Overheads'
      ],
      borderColor: 'border-[#d4af37]',
      iconBg: 'bg-[#d4af37]',
      icon: '💰'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl animate-fade-in-down">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#acd03a] to-[#6fa245]">
              Business Model Canvas
            </span>
          </h2>
          <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-[#acd03a] to-[#6fa245] rounded-full" />
          <p className="max-w-3xl mx-auto mt-6 text-lg font-light leading-relaxed text-gray-600 sm:text-xl animate-fade-in">
            A comprehensive overview of Ugima Foundation's business model components, designed for sustainable growth and impact.
          </p>
        </div>

        {/* Business Model Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessModelSections.map((section, index) => (
            <div
              key={section.title}
              className="transition-all duration-500 transform group hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`bg-white rounded-2xl p-6 border-2 ${section.borderColor} shadow-lg drop-shadow-[0_4px_12px_rgba(172,208,58,0.3)] hover:shadow-xl flex flex-col h-[350px]`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`flex items-center justify-center w-12 h-12 ${section.iconBg} text-white rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{section.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#6fa245] transition-colors duration-300">
                    {section.title}
                  </h3>
                </div>
                <ul className="flex-1 space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${section.iconBg}`}></div>
                      <span className="text-sm font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelCanvas;