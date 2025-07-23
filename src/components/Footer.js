import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
  MessageSquareText
} from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Visual Separator */}
      <div className="h-1 bg-gradient-to-r from-[#acd03a] to-[#6fa245] mt-16" />

      <footer className="py-12 text-gray-800 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-6 md:col-span-2">
              {/* Logo Space */}
              <img src="/ugima_foundation.png" alt="Ugima Foundation Logo" className="w-auto h-20" />
              <p className="max-w-md text-sm leading-relaxed text-gray-600">
                Empowering communities through sustainable coffee production and fostering social equity in Kenya.
              </p>
              <div className="flex gap-3">
                {/* WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send/?phone=254708906367&text&type=phone_number&app_absent=0"
                  aria-label="WhatsApp"
                  className="p-2 bg-white rounded-full shadow-sm hover:bg-[#25D366] transition-colors duration-300 group"
                >
                  <MessageSquareText className="w-5 h-5 text-[#25D366] group-hover:text-white" />
                </a>
                {/* Facebook */}
                <a
                  href="https://web.facebook.com/profile.php?id=61578528475021&_rdc=1&_rdr"
                  aria-label="Facebook"
                  className="p-2 bg-white rounded-full shadow-sm hover:bg-[#4267B2] transition-colors duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-[#4267B2] group-hover:text-white" />
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ugima.coffee/"
                  aria-label="Instagram"
                  className="p-2 transition-colors duration-300 bg-white rounded-full shadow-sm hover:bg-gradient-to-bl hover:from-pink-500 hover:to-yellow-500 group"
                >
                  <Instagram className="w-5 h-5 text-[#E1306C] group-hover:text-white" />
                </a>
                {/* Twitter */}
                <a
                  href="https://x.com/ugimacoffee"
                  aria-label="Twitter"
                  className="p-2 bg-white rounded-full shadow-sm hover:bg-[#1DA1F2] transition-colors duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-[#1DA1F2] group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-gray-900">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="/about" className="hover:text-[#6fa245] transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/products-services" className="hover:text-[#6fa245] transition-colors duration-300">
                    Our Products
                  </a>
                </li>
                <li>
                  <a href="/ugima-foundation" className="hover:text-[#6fa245] transition-colors duration-300">
                    Ugima Foundation
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-[#6fa245] transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-gray-900">Contact Info</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#6fa245]" />
                  info@ugimafoundation.org
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#6fa245]" />
                  +254 708 906 367
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#6fa245]" />
                  Nairobi, Kenya
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Notice */}
          <div className="pt-8 mt-12 text-center border-t border-Complementary">
            <p className="text-sm text-black">
              © {new Date().getFullYear()} Ugima Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;