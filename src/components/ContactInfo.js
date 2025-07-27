import React from 'react';

const ContactInfo = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#6fa245] to-[#acd03a]"> {/* Secondary to Primary gradient */}
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-8 text-5xl font-bold text-white md:text-6xl drop-shadow-lg">
            Contact Us
          </h1>
          <p className="max-w-3xl mx-auto text-xl font-light leading-relaxed text-white">
            Ready to make a difference in sustainable coffee production? Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Methods */}
          <div className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-xl rounded-3xl hover:scale-105 hover:shadow-2xl group">
            <div className="text-center">
              <div className="bg-[#acd03a] p-4 rounded-2xl inline-block mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">Email Us</h3>
              <p className="font-light text-gray-600">info@ugima.foundation</p>
            </div>
          </div>

          <div className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-xl rounded-3xl hover:scale-105 hover:shadow-2xl group">
            <div className="text-center">
              <div className="bg-[#6fa245] p-4 rounded-2xl inline-block mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">Call Us</h3>
              <p className="font-light text-gray-600">+254 708 906 367</p>
            </div>
          </div>

          <div className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-xl rounded-3xl hover:scale-105 hover:shadow-2xl group">
            <div className="text-center">
              <div className="bg-[#d4af37] p-4 rounded-2xl inline-block mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">Visit Us</h3>
              <p className="font-light text-gray-600">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
