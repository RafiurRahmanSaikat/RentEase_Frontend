


import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { CAROUSEL_IMAGES } from '../../constants/index.jsx';
import Button from '../ui/Button.jsx';
import ImageCarousel from '../ui/ImageCarousel.jsx';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/houses?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="py-10 md:py-24 overflow-hidden">
      {/* Background Pattern */}


      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Text and Search */}
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Perfect Rental Home
            </h1>
            <p className="text-lg md:text-xl mb-8  max-w-xl">
              Discover thousands of rental properties in top locations. Your dream home is just a few clicks away.
            </p>

            <form onSubmit={handleSearch} className="max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by location, property type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-lg"
                  />
                </div>
                <Button type="submit" className="py-3 px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Search
                </Button>
              </div>
            </form>
          </div>

          {/* Right side - Image Carousel */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <ImageCarousel
                images={CAROUSEL_IMAGES}
                autoPlay={true}
                interval={6000}
                className="h-[300px] sm:h-[350px] md:h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animated Wave */}

    </section>
  );
};

export default HeroSection;
