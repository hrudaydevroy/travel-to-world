import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Globe, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Join Our Newsletter</h3>
              <p className="text-blue-200 mt-2">Get travel tips, destinations, and exclusive offers.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-l-md focus:outline-none text-gray-800"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-coral-500 text-white font-medium px-6 py-3 rounded-r-md hover:bg-coral-600 transition-colors duration-300"
                  style={{ backgroundColor: '#F97066' }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-xl text-white">Trip to Travel</span>
            </div>
            <p className="text-gray-400 mb-4">
              Discover the world with us. We craft unforgettable travel experiences that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook />} href="https://facebook.com" />
              <SocialIcon icon={<Twitter />} href="https://twitter.com" />
              <SocialIcon icon={<Instagram />} href="https://instagram.com" />
              <SocialIcon icon={<Youtube />} href="https://youtube.com" />
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Top Destinations</h3>
            <ul className="space-y-2">
              <FooterLink href="/destinations/bali">Bali, Indonesia</FooterLink>
              <FooterLink href="/destinations/santorini">Santorini, Greece</FooterLink>
              <FooterLink href="/destinations/kyoto">Kyoto, Japan</FooterLink>
              <FooterLink href="/destinations/paris">Paris, France</FooterLink>
              <FooterLink href="/destinations/costa-rica">Costa Rica</FooterLink>
              <FooterLink href="/destinations">View All Destinations</FooterLink>
            </ul>
          </div>

          {/* Travel Types */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Travel Types</h3>
            <ul className="space-y-2">
              <FooterLink href="/packages/adventure">Adventure Travel</FooterLink>
              <FooterLink href="/packages/luxury">Luxury Vacations</FooterLink>
              <FooterLink href="/packages/honeymoon">Honeymoon Packages</FooterLink>
              <FooterLink href="/packages/family">Family Trips</FooterLink>
              <FooterLink href="/packages/cultural">Cultural Experiences</FooterLink>
              <FooterLink href="/packages">View All Packages</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span>123 Travel Avenue, Global City, 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>(+91) 77994-61935</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>hrudaykalluri19@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© 2025 Trip to Travel. All rights reserved.</p>
          <div className="flex flex-wrap space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">Terms of Service</Link>
            <Link to="/about" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link 
        to={href} 
        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;