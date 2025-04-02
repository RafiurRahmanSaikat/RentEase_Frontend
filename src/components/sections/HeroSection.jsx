import { Search } from "lucide-react";
import React, { useState } from "react";
import { CAROUSEL_IMAGES } from "../../constants";

import { Button, ImageCarousel } from "../../components";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/houses?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="overflow-hidden py-10 md:py-24">
      {/* Background Pattern */}

      <div className="relative mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          {/* Left side - Text and Search */}
          <div className="w-full text-left lg:w-1/2">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Find Your Perfect Rental Home
            </h1>
            <p className="mb-8 max-w-xl text-lg md:text-xl">
              Discover thousands of rental properties in top locations. Your
              dream home is just a few clicks away.
            </p>

            <form onSubmit={handleSearch} className="max-w-md">
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by location, property type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg py-3 pl-10 pr-4 text-gray-900 shadow-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="px-6 py-3 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  Search
                </Button>
              </div>
            </form>
          </div>

          {/* Right side - Image Carousel */}
          <div className="mt-8 w-full lg:mt-0 lg:w-1/2">
            <div className="overflow-hidden rounded-xl shadow-2xl">
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
