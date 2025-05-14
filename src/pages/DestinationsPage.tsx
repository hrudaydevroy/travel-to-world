import React, { useState } from 'react';
import { MapPin, Search, Filter, Star, ChevronDown } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  imageUrl: string;
  description: string;
  rating: number;
  price: number;
  category: string[];
}

const destinations: Destination[] = [
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    imageUrl: "https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Island paradise with lush rainforests, rice terraces, and beautiful beaches.",
    rating: 4.8,
    price: 799,
    category: ["Beach", "Adventure", "Cultural"]
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    continent: "Europe",
    imageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Famous for its stunning sunsets, white-washed buildings, and blue domes.",
    rating: 4.9,
    price: 1299,
    category: ["Romantic", "Beach"]
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    continent: "Asia",
    imageUrl: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Experience traditional Japanese culture, beautiful temples, and gardens.",
    rating: 4.7,
    price: 1099,
    category: ["Cultural", "Historical"]
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    country: "Central America",
    continent: "North America",
    imageUrl: "https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Nature lover's paradise with rainforests, volcanoes, and diverse wildlife.",
    rating: 4.6,
    price: 899,
    category: ["Adventure", "Wildlife", "Beach"]
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    continent: "Europe",
    imageUrl: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "The City of Light with iconic landmarks, museums, and exquisite cuisine.",
    rating: 4.7,
    price: 1199,
    category: ["Cultural", "Romantic", "City"]
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    country: "Peru",
    continent: "South America",
    imageUrl: "https://images.pexels.com/photos/2105407/pexels-photo-2105407.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Ancient Incan citadel set high in the Andes Mountains.",
    rating: 4.9,
    price: 1499,
    category: ["Historical", "Adventure"]
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    continent: "Asia",
    imageUrl: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Tropical paradise with overwater bungalows and pristine beaches.",
    rating: 4.9,
    price: 1699,
    category: ["Beach", "Luxury", "Romantic"]
  },
  {
    id: "new-york",
    name: "New York City",
    country: "USA",
    continent: "North America",
    imageUrl: "https://images.pexels.com/photos/451590/pexels-photo-451590.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "The city that never sleeps, with iconic skyscrapers and vibrant culture.",
    rating: 4.6,
    price: 999,
    category: ["City", "Cultural"]
  }
];

const continents = ["All", "Asia", "Europe", "North America", "South America", "Africa", "Oceania"];
const categories = ["All", "Beach", "Adventure", "Cultural", "Historical", "Romantic", "Wildlife", "City", "Luxury"];

const DestinationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');

  const filteredDestinations = destinations.filter((destination) => {
    // Search filter
    const searchMatch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        destination.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        destination.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Continent filter
    const continentMatch = selectedContinent === 'All' || destination.continent === selectedContinent;
    
    // Category filter
    const categoryMatch = selectedCategory === 'All' || destination.category.includes(selectedCategory);
    
    return searchMatch && continentMatch && categoryMatch;
  });

  // Sort destinations
  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else {
      // Default: sort by popularity (rating * price factor)
      return (b.rating * 1000) - (a.rating * 1000);
    }
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Destinations</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover beautiful destinations around the world and plan your perfect getaway
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white py-6 shadow-md sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Search */}
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Continent Filter */}
            <div className="md:w-1/4">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={selectedContinent}
                onChange={(e) => setSelectedContinent(e.target.value)}
              >
                {continents.map((continent) => (
                  <option key={continent} value={continent}>{continent}</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="md:w-1/4">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="md:w-1/5">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">
              {sortedDestinations.length} {sortedDestinations.length === 1 ? 'Destination' : 'Destinations'} Found
            </h2>
          </div>

          {/* Grid of Destinations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          {/* No Results */}
          {sortedDestinations.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No destinations found</h3>
              <p className="text-gray-600">Try adjusting your search filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DestinationCard = ({ destination }: { destination: Destination }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={destination.imageUrl} 
          alt={destination.name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          {destination.category.slice(0, 2).map((cat) => (
            <span 
              key={cat} 
              className="inline-block bg-blue-700 text-white text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
          {destination.category.length > 2 && (
            <span className="inline-block bg-gray-700 text-white text-xs font-medium px-2.5 py-1 rounded-full">
              +{destination.category.length - 2}
            </span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{destination.country}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
          <div className="flex items-center space-x-1 bg-blue-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{destination.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">From</span>
            <span className="text-lg font-bold text-blue-700 ml-1">${destination.price}</span>
          </div>
          <a 
            href={`/destinations/${destination.id}`} 
            className="inline-block px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors duration-300"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;