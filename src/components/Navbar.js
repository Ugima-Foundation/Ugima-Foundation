import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', hash: '#home' },
    { name: 'About', href: '/about', hash: '' },
    { name: 'Products & Services', href: '/products-services', hash: '' },
    { name: 'Ugima Foundation', href: '/ugima-foundation', hash: '' },
    { name: 'Contact Us', href: '/contact', hash: '' },
  ];

  const handleNavClick = (href, hash, e) => {
    if (location.pathname === '/' && hash) {
      e.preventDefault();
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img className="w-[80px] h-auto" src="/applogo.png" alt="Company Logo" />
          </Link>

          <div className="items-center hidden space-x-4 lg:flex">
            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href + (item.hash || '')}
                  onClick={(e) => handleNavClick(item.href, item.hash, e)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-Complementary"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-secondary"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="py-4 border-t border-gray-200 lg:hidden">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href + (item.hash || '')}
                  onClick={(e) => {
                    handleNavClick(item.href, item.hash, e);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="#demo"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 mt-4 font-medium text-center text-white transition-colors rounded-lg bg-primary hover:bg-primary/80"
              >
                Request Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;