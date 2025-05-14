import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Clock, Map, Tag, ChevronRight } from 'lucide-react';

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
}

const packages: TravelPackage[] = [
  {
    id: "bali-adventure",
    title: "Bali Adventure",
    type: "Adventure",
    imageUrl: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "10 days",
    groupSize: "Max 12 people",
    price: 1799,
    discount: 1999,
    description: "Discover Bali's lush rainforests, ancient temples, and hidden waterfalls."
  },
  {
    id: "greek-island-hopping",
    title: "Greek Island Hopping",
    type: "Luxury",
    imageUrl: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "14 days",
    groupSize: "Max 10 people",
    price: 2499,
    description: "Explore the stunning islands of Santorini, Mykonos, and Crete."
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
    description: "Immerse yourself in Japan's rich culture, from Tokyo to Kyoto."
  },
  {
    id: "costa-rica-adventure",
    title: "Costa Rica Eco Adventure",
    type: "Adventure",
    imageUrl: "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "9 days",
    groupSize: "Max 10 people",
    price: 1699,
    description: "Explore rainforests, volcanoes, and wildlife in eco-friendly tours."
  }
];

const packageTypes = ["All", "Adventure", "Luxury", "Cultural", "Family", "Honeymoon"];

const TravelPackages = () => {
  const [activeType, setActiveType] = useState("All");
  
  const filteredPackages = activeType === "All" 
    ? packages 
    : packages.filter(pkg => pkg.type === activeType);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Travel Packages</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expertly crafted travel packages to help you experience the best of each destination
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {packageTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeType === type
                  ? 'bg-blue-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} travelPackage={pkg} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link 
            to="/packages" 
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
          >
            View All Packages
            <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const PackageCard = ({ travelPackage }: { travelPackage: TravelPackage }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
      {/* Image */}
      <div className="md:w-2/5 relative overflow-hidden">
        <img 
          src={travelPackage.imageUrl} 
          alt={travelPackage.title} 
          className="w-full h-full object-cover md:h-full"
          style={{ minHeight: '240px' }}
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
      <div className="md:w-3/5 p-6 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{travelPackage.title}</h3>
        <p className="text-gray-600 mb-4">{travelPackage.description}</p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="w-4 h-4 mr-2 text-blue-700" />
            {travelPackage.duration}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Users className="w-4 h-4 mr-2 text-blue-700" />
            {travelPackage.groupSize}
          </div>
        </div>
        
        <div className="mt-auto flex items-end justify-between">
          <div>
            <div className="flex items-center">
              {travelPackage.discount && (
                <span className="text-gray-500 text-sm line-through mr-2">
                  ${travelPackage.discount}
                </span>
              )}
              <span className="text-xl font-bold text-blue-700">
                ${travelPackage.price}
              </span>
              <span className="text-gray-600 text-sm ml-1">/ person</span>
            </div>
          </div>
          <Link 
            to={`/packages/${travelPackage.id}`}
            className="inline-block px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelPackages;