import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ChevronRight } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  rating: number;
  price: number;
  featured: boolean;
}

const destinations: Destination[] = [
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    imageUrl: "https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 4.8,
    price: 799,
    featured: true,
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    imageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 4.9,
    price: 1299,
    featured: true,
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    imageUrl: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 4.7,
    price: 1099,
    featured: true,
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    country: "Central America",
    imageUrl: "https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 4.6,
    price: 899,
    featured: true,
  },
  {
    id: "amalfi",
    name: "Amalfi Coast",
    country: "Italy",
    imageUrl: "https://images.pexels.com/photos/2225439/pexels-photo-2225439.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 4.8,
    price: 1199,
    featured: true,
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "South Asia",
    imageUrl: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 4.9,
    price: 1499,
    featured: true,
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our hand-picked selection of the most breathtaking destinations around the world
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link 
            to="/destinations" 
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
          >
            View All Destinations
            <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const DestinationCard = ({ destination }: { destination: Destination }) => {
  return (
    <Link to={`/destinations/${destination.id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={destination.imageUrl} 
            alt={destination.name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24"></div>
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-700 font-semibold px-3 py-1 rounded-full text-sm">
            From ${destination.price}
          </div>
          
          {/* Location */}
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{destination.country}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Rating */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{destination.rating}</span>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-4">
            <span className="inline-flex items-center text-blue-700 group-hover:text-blue-800 transition-colors duration-300 font-medium text-sm">
              Explore Destination
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedDestinations;