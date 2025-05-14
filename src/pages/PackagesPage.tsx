import React, { useState } from 'react';
import { Filter, Calendar, Users, Clock, Search, Star, ChevronDown, Tag } from 'lucide-react';

interface TravelPackage {
  id: string;
  title: string;
  type: string;
  imageUrl: string;
  duration: string;
  groupSize: string;
  price: number;
  discount?: number;
  description: string;
  destinations: string[];
  rating: number;
  reviewCount: number;
  highlights: string[];
}

const travelPackages: TravelPackage[] = [
  {
    id: "bali-adventure",
    title: "Bali Adventure",
    type: "Adventure",
    imageUrl: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "10 days",
    groupSize: "Max 12 people",
    price: 1799,
    discount: 1999,
    description: "Discover Bali's lush rainforests, ancient temples, and hidden waterfalls on this thrilling adventure.",
    destinations: ["Ubud", "Uluwatu", "Nusa Penida"],
    rating: 4.8,
    reviewCount: 127,
    highlights: [
      "Trek through lush rice terraces",
      "Visit ancient temples",
      "Snorkel in crystal clear waters",
      "Experience traditional Balinese culture"
    ]
  },
  {
    id: "greek-island-hopping",
    title: "Greek Island Hopping",
    type: "Luxury",
    imageUrl: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "14 days",
    groupSize: "Max 10 people",
    price: 2499,
    description: "Experience the best of the Greek islands with luxurious accommodations and private tours.",
    destinations: ["Santorini", "Mykonos", "Crete"],
    rating: 4.9,
    reviewCount: 89,
    highlights: [
      "Watch sunset in Santorini",
      "Explore ancient ruins in Crete",
      "Experience Mykonos' vibrant nightlife",
      "Sail the Aegean Sea on a private yacht"
    ]
  },
  {
    id: "japan-cultural",
    title: "Japan Cultural Experience",
    type: "Cultural",
    imageUrl: "https://images.pexels.com/photos/3222422/pexels-photo-3222422.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "12 days",
    groupSize: "Max 14 people",
    price: 2799,
    discount: 3299,
    description: "Immerse yourself in Japan's rich cultural heritage, from ancient temples to modern metropolises.",
    destinations: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
    rating: 4.7,
    reviewCount: 156,
    highlights: [
      "Tea ceremony with local experts",
      "Visit ancient temples and shrines",
      "Stay in a traditional ryokan",
      "Experience Tokyo's modern technology"
    ]
  },
  {
    id: "costa-rica-adventure",
    title: "Costa Rica Eco Adventure",
    type: "Adventure",
    imageUrl: "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "9 days",
    groupSize: "Max 10 people",
    price: 1699,
    description: "Explore rainforests, volcanoes, and wildlife in Costa Rica's diverse ecosystems.",
    destinations: ["San Jose", "Arenal", "Manuel Antonio"],
    rating: 4.6,
    reviewCount: 112,
    highlights: [
      "Zipline through the rainforest canopy",
      "Wildlife spotting in national parks",
      "Relax on pristine beaches",
      "Hike around the Arenal Volcano"
    ]
  },
  {
    id: "morocco-explorer",
    title: "Morocco Explorer",
    type: "Cultural",
    imageUrl: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "11 days",
    groupSize: "Max 12 people",
    price: 1899,
    description: "Journey through Morocco's vibrant cities, ancient medinas, and the Sahara Desert.",
    destinations: ["Marrakech", "Fes", "Sahara Desert", "Casablanca"],
    rating: 4.7,
    reviewCount: 98,
    highlights: [
      "Explore the maze-like medinas",
      "Camel trek in the Sahara",
      "Stay in a traditional riad",
      "Experience vibrant Moroccan cuisine"
    ]
  },
  {
    id: "new-zealand-adventure",
    title: "New Zealand Adventure",
    type: "Adventure",
    imageUrl: "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "15 days",
    groupSize: "Max 10 people",
    price: 3299,
    discount: 3599,
    description: "Experience New Zealand's breathtaking landscapes and adrenaline-pumping activities.",
    destinations: ["Auckland", "Queenstown", "Rotorua", "Milford Sound"],
    rating: 4.9,
    reviewCount: 76,
    highlights: [
      "Bungee jumping in Queenstown",
      "Explore Hobbiton movie set",
      "Cruise through Milford Sound",
      "Experience Maori culture"
    ]
  }
];

const packageTypes = ["All", "Adventure", "Luxury", "Cultural", "Family", "Honeymoon"];
const durations = ["Any", "1-7 days", "8-14 days", "15+ days"];
const priceRanges = ["Any", "$0-$1000", "$1000-$2000", "$2000-$3000", "$3000+"];

const PackagesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('Any');
  const [selectedPrice, setSelectedPrice] = useState('Any');
  const [sortBy, setSortBy] = useState('popularity');

  const filteredPackages = travelPackages.filter((pack) => {
    // Search filter
    const searchMatch = pack.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        pack.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        pack.destinations.some(dest => dest.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Type filter
    const typeMatch = selectedType === 'All' || pack.type === selectedType;
    
    // Duration filter
    let durationMatch = true;
    if (selectedDuration !== 'Any') {
      const days = parseInt(pack.duration.split(' ')[0]);
      if (selectedDuration === '1-7 days') {
        durationMatch = days <= 7;
      } else if (selectedDuration === '8-14 days') {
        durationMatch = days >= 8 && days <= 14;
      } else if (selectedDuration === '15+ days') {
        durationMatch = days >= 15;
      }
    }
    
    // Price filter
    let priceMatch = true;
    if (selectedPrice !== 'Any') {
      if (selectedPrice === '$0-$1000') {
        priceMatch = pack.price <= 1000;
      } else if (selectedPrice === '$1000-$2000') {
        priceMatch = pack.price > 1000 && pack.price <= 2000;
      } else if (selectedPrice === '$2000-$3000') {
        priceMatch = pack.price > 2000 && pack.price <= 3000;
      } else if (selectedPrice === '$3000+') {
        priceMatch = pack.price > 3000;
      }
    }
    
    return searchMatch && typeMatch && durationMatch && priceMatch;
  });

  // Sort packages
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'duration') {
      return parseInt(a.duration.split(' ')[0]) - parseInt(b.duration.split(' ')[0]);
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else {
      // Default: sort by popularity (rating * review count)
      return (b.rating * b.reviewCount) - (a.rating * a.reviewCount);
    }
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Packages</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expertly crafted travel packages to help you experience the best of each destination
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
                  placeholder="Search packages or destinations..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Type Filter */}
            <div className="md:w-1/5">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {packageTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div className="md:w-1/5">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
              >
                {durations.map((duration) => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="md:w-1/5">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                {priceRanges.map((price) => (
                  <option key={price} value={price}>{price}</option>
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
                <option value="duration">Duration: Short to Long</option>
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
              {sortedPackages.length} {sortedPackages.length === 1 ? 'Package' : 'Packages'} Found
            </h2>
          </div>

          {/* List of Packages */}
          <div className="space-y-8">
            {sortedPackages.map((travelPackage) => (
              <PackageCard key={travelPackage.id} travelPackage={travelPackage} />
            ))}
          </div>

          {/* No Results */}
          {sortedPackages.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No packages found</h3>
              <p className="text-gray-600">Try adjusting your search filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PackageCard = ({ travelPackage }: { travelPackage: TravelPackage }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
      {/* Image */}
      <div className="md:w-1/3 relative">
        <img 
          src={travelPackage.imageUrl} 
          alt={travelPackage.title} 
          className="w-full h-full object-cover"
          style={{ minHeight: '250px' }}
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-blue-700 text-white text-xs font-medium px-2.5 py-1 rounded-full">
            {travelPackage.type}
          </span>
        </div>
        {travelPackage.discount && (
          <div className="absolute top-4 right-4">
            <span className="inline-block bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              Save ${travelPackage.discount - travelPackage.price}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="md:w-2/3 p-6 flex flex-col">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{travelPackage.title}</h2>
            <div className="flex items-center mb-2">
              <div className="flex items-center mr-4">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="ml-1 text-sm font-medium">{travelPackage.rating}</span>
                <span className="ml-1 text-xs text-gray-500">({travelPackage.reviewCount} reviews)</span>
              </div>
              <div className="text-sm text-gray-600">
                {travelPackage.destinations.join(' • ')}
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <div className="flex flex-col items-end">
              {travelPackage.discount && (
                <span className="text-gray-500 text-sm line-through">
                  ${travelPackage.discount}
                </span>
              )}
              <span className="text-2xl font-bold text-blue-700">
                ${travelPackage.price}
              </span>
              <span className="text-gray-600 text-sm">per person</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{travelPackage.description}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="w-4 h-4 mr-2 text-blue-700" />
            {travelPackage.duration}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Users className="w-4 h-4 mr-2 text-blue-700" />
            {travelPackage.groupSize}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-blue-700" />
            Year-round departures
          </div>
        </div>
        
        <div className="mb-4">
          <div className="font-medium text-gray-900 mb-2">Highlights</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {travelPackage.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></div>
                {highlight}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-auto flex flex-col sm:flex-row gap-3 justify-end">
          <a 
            href={`/packages/${travelPackage.id}`} 
            className="inline-block px-6 py-2.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            View Details
          </a>
          <a 
            href={`/packages/${travelPackage.id}/book`}
            className="inline-block px-6 py-2.5 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;