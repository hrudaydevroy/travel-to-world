import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, MapPin, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-gray-800 shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className={`w-8 h-8 ${isScrolled ? 'text-blue-700' : 'text-white'}`} />
              <span className="font-bold text-xl tracking-tight">Trip to Travel</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <NavLink to="/" label="Home" isScrolled={isScrolled} />
              <NavLink to="/destinations" label="Destinations" isScrolled={isScrolled} />
              <NavLink to="/packages" label="Travel Packages" isScrolled={isScrolled} />
              <NavLink to="/blog" label="Travel Blog" isScrolled={isScrolled} />
              <NavLink to="/contact" label="Contact" isScrolled={isScrolled} />
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:block">
            <button 
              className={`p-2 rounded-full ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink to="/" label="Home" />
          <MobileNavLink to="/destinations" label="Destinations" />
          <MobileNavLink to="/packages" label="Travel Packages" />
          <MobileNavLink to="/blog" label="Travel Blog" />
          <MobileNavLink to="/contact" label="Contact" />
        </div>
      </div>
    </nav>
  );
};

// Desktop NavLink Component
const NavLink = ({ to, label, isScrolled }: { to: string; label: string; isScrolled: boolean }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
        ${isActive 
          ? isScrolled 
            ? 'text-blue-700 bg-blue-50' 
            : 'text-white bg-white/20' 
          : isScrolled 
            ? 'text-gray-700 hover:text-blue-700' 
            : 'text-white/90 hover:text-white hover:bg-white/10'
        }`}
    >
      {label}
    </Link>
  );
};

// Mobile NavLink Component
const MobileNavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive
          ? 'text-blue-700 bg-blue-50'
          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;