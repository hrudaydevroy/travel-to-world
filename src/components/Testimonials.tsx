import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
  trip: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote: "Wanderlust made our honeymoon in Bali absolutely magical. Every detail was perfectly planned, from the luxury accommodations to the private tours of hidden temples. It was the trip of a lifetime!",
    rating: 5,
    trip: "Bali Adventure"
  },
  {
    id: 2,
    name: "Mark Thompson",
    location: "London, UK",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote: "Our family trip to Costa Rica exceeded all expectations. The kids loved the wildlife experiences, and the eco-adventures were perfect for all ages. The local guides were knowledgeable and friendly.",
    rating: 5,
    trip: "Costa Rica Family Adventure"
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "Toronto, Canada",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote: "The cultural immersion in Japan was incredible. From the traditional tea ceremony to the hidden local restaurants, Wanderlust provided experiences we never would have found on our own.",
    rating: 5,
    trip: "Japan Cultural Experience"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-blue-800 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Hear from travelers who have experienced our journeys around the world
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 max-w-4xl mx-auto">
            <div className="absolute -top-5 left-10 text-blue-700">
              <Quote className="w-10 h-10 fill-current opacity-20" />
            </div>
            
            <div
              className={`transition-opacity duration-500 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {/* Avatar and Info */}
              <div className="flex flex-col sm:flex-row items-center mb-6">
                <img 
                  src={testimonials[current].avatar} 
                  alt={testimonials[current].name} 
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 mr-4 mb-4 sm:mb-0"
                />
                <div className="text-center sm:text-left">
                  <div className="text-xl font-bold text-gray-900">{testimonials[current].name}</div>
                  <div className="text-sm text-gray-600">{testimonials[current].location}</div>
                  <div className="flex items-center mt-1 justify-center sm:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < testimonials[current].rating
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <div className="text-sm text-blue-700 mt-1">
                    Trip: {testimonials[current].trip}
                  </div>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-gray-700 text-center italic">
                "{testimonials[current].quote}"
              </blockquote>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Indicators */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setTimeout(() => {
                          setCurrent(index);
                          setIsAnimating(false);
                        }, 500);
                      }
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      current === index 
                        ? 'w-6 bg-blue-700' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;