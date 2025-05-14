import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini, Greece",
    imageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Explore the stunning white villages perched on volcanic cliffs overlooking the Aegean Sea."
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    imageUrl: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Discover ancient temples, traditional tea houses, and beautiful cherry blossoms."
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    imageUrl: "https://images.pexels.com/photos/2105407/pexels-photo-2105407.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Journey to the ancient Incan citadel set high in the Andes Mountains."
  }
];

const Hero = () => {
  const [currentDestination, setCurrentDestination] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentDestination((prev) => (prev + 1) % destinations.length);
        setIsVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const destination = destinations[currentDestination];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url(${destination.imageUrl})`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Hero Content */}
          <div 
            className={`max-w-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center bg-blue-700/90 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              {destination.name}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Discover the World's <span className="text-blue-400">Hidden Gems</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              {destination.description}
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/destinations" 
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center"
              >
                Explore Destinations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/packages" 
                className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg backdrop-blur-sm transition-colors duration-300"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentDestination(index);
                setIsVisible(true);
              }, 500);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentDestination === index ? 'w-6 bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;