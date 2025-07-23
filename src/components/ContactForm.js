import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission - replace with actual backend integration later
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const services = [
    'Regenerative Coffee Production',
    'Barista Training Program',
    'Coffee Clinic Services',
    'Community Development',
    'Partnership Opportunities',
    'Other'
  ];

  return (
    <section className="py-20 bg-gray-50"> {/* Light gray background for contrast */}
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            Get In Touch
          </h2>
          <p className="text-xl font-light text-gray-600">
            Fill out the form below and we'll respond as soon as possible.
          </p>
        </div>

        <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-3xl md:p-12">
          {submitMessage && (
            <div className="bg-[#acd03a]/10 border border-[#acd03a]/50 text-[#6fa245] px-4 py-3 rounded-2xl mb-8 text-center animate-pulse">
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-lg font-semibold text-gray-800">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#acd03a] focus:border-[#6fa245] outline-none transition-all duration-300 hover:border-[#acd03a]"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-lg font-semibold text-gray-800">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#acd03a] focus:border-[#6fa245] outline-none transition-all duration-300 hover:border-[#acd03a]"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-lg font-semibold text-gray-800">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#acd03a] focus:border-[#6fa245] outline-none transition-all duration-300 hover:border-[#acd03a]"
                  placeholder="+254 700 000 000"
                />
              </div>

              {/* Service */}
              <div className="space-y-2">
                <label htmlFor="service" className="text-lg font-semibold text-gray-800">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#acd03a] focus:border-[#6fa245] outline-none transition-all duration-300 hover:border-[#acd03a] bg-white"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-lg font-semibold text-gray-800">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#acd03a] focus:border-[#6fa245] outline-none transition-all duration-300 hover:border-[#acd03a] resize-none"
                placeholder="Tell us about your inquiry or how we can help you..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative px-10 py-4 bg-gradient-to-r from-[#6fa245] to-[#acd03a] text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#acd03a]/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
