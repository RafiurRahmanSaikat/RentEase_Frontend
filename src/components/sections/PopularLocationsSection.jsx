import React from "react";
import { Link } from "react-router-dom";
import { POPULAR_LOCATIONS } from "../../constants";

const PopularLocationsSection = () => {
  return (
    <section className="py-16">
      <div className="mx-auto w-[90%]">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Popular Locations
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
            Discover rental properties in these top cities across the country
          </p>
        </div>

        {/* Fixed Grid Layout with Relative Units */}
        <div className="grid grid-cols-12 gap-4">
          {/* New York - Large Left Card */}
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <Link
              to={`/houses?location=${encodeURIComponent(POPULAR_LOCATIONS[0].name)}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/50"></div>
              <img
                src={POPULAR_LOCATIONS[0].image || "/placeholder.svg"}
                alt={POPULAR_LOCATIONS[0].name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                <h3 className="mb-1 text-2xl font-bold">
                  {POPULAR_LOCATIONS[0].name}
                </h3>
                <p>{POPULAR_LOCATIONS[0].count} Properties</p>
              </div>
            </Link>
          </div>

          {/* Right Top Section */}
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              {/* Los Angeles */}
              <div className="col-span-12 sm:col-span-6">
                <Link
                  to={`/houses?location=${encodeURIComponent(POPULAR_LOCATIONS[1].name)}`}
                  className="group relative block aspect-[3/2] w-full overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/50"></div>
                  <img
                    src={POPULAR_LOCATIONS[1].image || "/placeholder.svg"}
                    alt={POPULAR_LOCATIONS[1].name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                    <h3 className="mb-1 text-xl font-bold">
                      {POPULAR_LOCATIONS[1].name}
                    </h3>
                    <p className="text-sm">
                      {POPULAR_LOCATIONS[1].count} Properties
                    </p>
                  </div>
                </Link>
              </div>

              {/* Chicago */}
              <div className="col-span-12 sm:col-span-6">
                <Link
                  to={`/houses?location=${encodeURIComponent(POPULAR_LOCATIONS[2].name)}`}
                  className="group relative block aspect-[3/2] w-full overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/50"></div>
                  <img
                    src={POPULAR_LOCATIONS[2].image || "/placeholder.svg"}
                    alt={POPULAR_LOCATIONS[2].name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                    <h3 className="mb-1 text-xl font-bold">
                      {POPULAR_LOCATIONS[2].name}
                    </h3>
                    <p className="text-sm">
                      {POPULAR_LOCATIONS[2].count} Properties
                    </p>
                  </div>
                </Link>
              </div>

              {/* Miami */}
              <div className="col-span-12">
                <Link
                  to={`/houses?location=${encodeURIComponent(POPULAR_LOCATIONS[3].name)}`}
                  className="group relative block aspect-[16/6] w-full overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/50"></div>
                  <img
                    src={POPULAR_LOCATIONS[3].image || "/placeholder.svg"}
                    alt={POPULAR_LOCATIONS[3].name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                    <h3 className="mb-1 text-xl font-bold">
                      {POPULAR_LOCATIONS[3].name}
                    </h3>
                    <p className="text-sm">
                      {POPULAR_LOCATIONS[3].count} Properties
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <Link
              to={`/houses?location=${encodeURIComponent(POPULAR_LOCATIONS[4].name)}`}
              className="group relative block aspect-[16/6] w-full overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/50"></div>
              <img
                src={POPULAR_LOCATIONS[4].image || "/placeholder.svg"}
                alt={POPULAR_LOCATIONS[4].name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                <h3 className="mb-1 text-xl font-bold">
                  {POPULAR_LOCATIONS[4].name}
                </h3>
                <p className="text-sm">
                  {POPULAR_LOCATIONS[4].count} Properties
                </p>
              </div>
            </Link>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <Link
              to={`/houses?location=${encodeURIComponent(POPULAR_LOCATIONS[5].name)}`}
              className="group relative block aspect-[16/6] w-full overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/50"></div>
              <img
                src={POPULAR_LOCATIONS[5].image || "/placeholder.svg"}
                alt={POPULAR_LOCATIONS[5].name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                <h3 className="mb-1 text-xl font-bold">
                  {POPULAR_LOCATIONS[5].name}
                </h3>
                <p className="text-sm">
                  {POPULAR_LOCATIONS[5].count} Properties
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularLocationsSection;
