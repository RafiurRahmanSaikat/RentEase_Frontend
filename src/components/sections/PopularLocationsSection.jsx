import React from 'react';
import { Link } from 'react-router-dom';
import { POPULAR_LOCATIONS } from '../../constants/index.jsx';

const PopularLocationsSection = () => {
  // Function to determine the span class for each item in the bento grid
  const getSpanClass = (index) => {
    // Create a varied grid layout
    switch (index % 6) {
      case 0: return 'col-span-2 row-span-2'; // Large item
      case 1: return 'col-span-1 row-span-1'; // Small item
      case 2: return 'col-span-1 row-span-1'; // Small item
      case 3: return 'col-span-1 row-span-2'; // Tall item
      case 4: return 'col-span-2 row-span-1'; // Wide item
      case 5: return 'col-span-1 row-span-1'; // Small item
      default: return 'col-span-1 row-span-1';
    }
  };

  return (
    <section className="py-16 ">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Popular Locations</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover rental properties in these top cities across the country
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px]">
          {POPULAR_LOCATIONS.map((city, index) => (
            <Link
              key={city.id}
              to={`/houses?location=${encodeURIComponent(city.name)}`}
              className={`${getSpanClass(index)} group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
              <img
                src={city.image || "/placeholder.svg"}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-xl md:text-2xl font-bold mb-1">{city.name}</h3>
                <p className="text-sm md:text-base">{city.count} Properties</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLocationsSection;
