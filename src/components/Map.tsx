import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  position: {
    left: string;
    top: string;
  };
}

const popularDestinations: Destination[] = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    description: 'The City of Light with iconic landmarks and world-class cuisine.',
    position: { left: '47%', top: '42%' }
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    description: 'A fascinating blend of traditional culture and cutting-edge technology.',
    position: { left: '83%', top: '45%' }
  },
  {
    id: 'new-york',
    name: 'New York',
    country: 'USA',
    description: 'The Big Apple, a global center for art, culture, fashion, and finance.',
    position: { left: '25%', top: '43%' }
  },
  {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    description: 'Beautiful beaches, iconic architecture, and a laid-back lifestyle.',
    position: { left: '85%', top: '75%' }
  },
  {
    id: 'rio',
    name: 'Rio de Janeiro',
    country: 'Brazil',
    description: 'Famous for its beaches, Carnival, and the iconic Christ the Redeemer statue.',
    position: { left: '33%', top: '70%' }
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Island paradise with lush rice terraces, beautiful beaches, and rich culture.',
    position: { left: '77%', top: '65%' }
  },
  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    description: 'Stunning coastal city nestled beneath Table Mountain.',
    position: { left: '52%', top: '76%' }
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    description: 'The Eternal City with ancient ruins, art, and delicious cuisine.',
    position: { left: '50%', top: '46%' }
  }
];

const InteractiveMap = () => {
  const [activeDestination, setActiveDestination] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handlePinHover = (destId: string, e: React.MouseEvent) => {
    setActiveDestination(destId);
    // Adjust position to ensure tooltip stays within viewport
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left,
      y: rect.top
    });
  };

  const handlePinLeave = () => {
    setActiveDestination(null);
  };

  const selectedDestination = activeDestination 
    ? popularDestinations.find(dest => dest.id === activeDestination) 
    : null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore the World</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover popular destinations around the globe and start planning your next adventure
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-blue-50 aspect-[16/9] mx-auto border border-gray-200">
          {/* World Map Image */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/269633/pexels-photo-269633.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}>
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

          {/* Destination Pins */}
          {popularDestinations.map((destination) => (
            <div
              key={destination.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: destination.position.left, top: destination.position.top }}
              onMouseEnter={(e) => handlePinHover(destination.id, e)}
              onMouseLeave={handlePinLeave}
            >
              <div className={`
                w-4 h-4 bg-blue-700 rounded-full cursor-pointer
                flex items-center justify-center
                before:content-[''] before:absolute before:w-12 before:h-12 before:rounded-full 
                before:bg-blue-500/20 before:animate-ping before:opacity-75
                hover:scale-110 transition-transform duration-300
                ${activeDestination === destination.id ? 'ring-4 ring-blue-300 scale-110' : ''}
              `}>
                <MapPin className="w-3 h-3 text-white" />
              </div>
            </div>
          ))}

          {/* Tooltip */}
          {selectedDestination && (
            <div 
              className="absolute z-20 bg-white rounded-lg shadow-xl p-4 w-64 transition-opacity duration-200"
              style={{
                left: `calc(${selectedDestination.position.left} + 10px)`,
                top: `calc(${selectedDestination.position.top} + 10px)`,
                transform: 'translateY(-50%)'
              }}
            >
              <h3 className="font-bold text-gray-900">{selectedDestination.name}</h3>
              <p className="text-sm text-blue-700 mb-2">{selectedDestination.country}</p>
              <p className="text-sm text-gray-600">{selectedDestination.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;