import React from 'react';
import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations';
import TravelPackages from '../components/TravelPackages';
import Testimonials from '../components/Testimonials';
import TravelBlog from '../components/TravelBlog';
import InteractiveMap from '../components/Map';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <TravelPackages />
      <InteractiveMap />
      <Testimonials />
      <TravelBlog />
    </>
  );
};

export default HomePage;