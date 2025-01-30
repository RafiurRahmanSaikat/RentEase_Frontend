import { DollarSign, Filter, MapPin, Search } from "lucide-react";
import { useState } from "react";

export default function SearchSection() {
  const [selectedTab, setSelectedTab] = useState("business");

  return (
    <div className="mx-auto mb-4 w-[50vw] rounded-3xl border border-gray-300 bg-white/60 px-4 py-6 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/70">
      <div className="rounded-lg backdrop-blur-lg">
        {/* Tabs */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex rounded-full bg-gray-100 p-1 dark:bg-gray-800/60">
            {[
              { id: "economy", label: "Economy" },
              { id: "business", label: "Business Class" },
              { id: "first", label: "First Class" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  selectedTab === tab.id
                    ? "bg-white text-gray-900 shadow dark:bg-gray-700 dark:text-gray-100"
                    : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Card */}
        <div className="rounded-2xl border bg-white/60 shadow-sm backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/80">
          <div className="flex flex-col gap-4 p-4 md:flex-row">
            {/* Location */}
            <div className="flex-1">
              <label className="mb-2 flex items-center gap-2 text-2xl font-extrabold text-gray-900 dark:text-gray-100">
                <MapPin className="h-5 w-5" />
                Location
              </label>
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-blue-400"
              />
            </div>

            {/* Rooms */}
            {/* <div className="md:w-48">
              <label className="mb-2 flex items-center gap-2 text-2xl font-extrabold text-gray-900 dark:text-gray-100">
                <Home className="h-5 w-5" />
                Rooms
              </label>
              <select className="w-full appearance-none rounded-lg border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-blue-400">
                <option value="">Select rooms</option>
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
              </select>
            </div> */}

            {/* Price Range */}
            <div className="md:w-72">
              <label className="mb-2 flex items-center gap-2 text-2xl font-extrabold text-gray-900 dark:text-gray-100">
                <DollarSign className="h-5 w-5" />
                Price Range
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Min"
                  className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Max"
                  className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="space-y-2 md:w-48">
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                <Filter className="h-4 w-4" />
                Filter
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                <Search className="h-4 w-4" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
