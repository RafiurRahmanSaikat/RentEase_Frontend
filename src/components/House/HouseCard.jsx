import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  Home,
  MapPin,
  Wallet,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const HouseCard = ({ house }) => {
  // console.log(house.id);
  return (
    <div className="w-full max-w-sm px-2 py-3 sm:max-w-md">
      <div className="relative block rounded-tr-3xl border border-purple-400 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-purple-500 dark:bg-gray-800">
        {/* Price Tag */}
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-gradient-to-r from-purple-600 to-rose-600 px-4 py-2 text-sm font-medium text-white">
          <Wallet className="mb-0.5 inline-block h-3.5 w-3.5" />
          <span className="ml-1">{house.price} Tk</span>
        </span>

        {/* Image - Original styling */}
        <img
          src={house.image}
          alt={house.title}
          className="-ml-6 -mt-6 h-48 w-full rounded-bl-3xl rounded-tr-3xl border border-gray-200 object-cover dark:border-gray-700 sm:h-60"
        />

        <div className="p-4">
          {/* Title & Location */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 flex-shrink-0 text-purple-600 dark:text-purple-400" />
              <h3 className="line-clamp-1 text-base font-medium capitalize text-gray-900 dark:text-gray-100 sm:text-lg">
                {house.title}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300">
              <MapPin className="h-4 w-4 flex-shrink-0 text-rose-500" />
              <span className="text-sm font-medium capitalize sm:text-base">
                {house.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
            {house.description}
          </p>

          {/* Categories */}
          <div className="scrollbar-hide mt-3 flex gap-2 overflow-x-auto pb-2">
            {house?.category.map((cat, index) => (
              <span
                key={index}
                className="flex flex-shrink-0 items-center gap-1 rounded-full bg-purple-100 px-2.5 py-1 text-xs font-medium capitalize text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
              >
                <Home className="h-3 w-3" />
                {cat.name}
              </span>
            ))}
          </div>

          {/* Footer - Price and Button */}
          <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700">
            <div>
              <p className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <Calendar className="h-3.5 w-3.5" />
                Per Month
              </p>
              <p className="text-base font-semibold text-purple-600 dark:text-purple-400">
                {house.price} Tk
              </p>
            </div>
            <Link
              to={`/advertise/${house?.id}`}
              className="group inline-flex items-center rounded-lg bg-purple-600 px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
            >
              Details
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
