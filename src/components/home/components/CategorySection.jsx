// CategorySection Component
import { useState } from "react";
export default function CategorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: "cabins", name: "Cabins", icon: "🏡" },
    { id: "beach", name: "Beach", icon: "🏖️" },
    { id: "mansions", name: "Mansions", icon: "🏰" },
    { id: "skiing", name: "Skiing", icon: "⛷️" },
    { id: "tropical", name: "Tropical", icon: "🌴" },
    { id: "countryside", name: "Countryside", icon: "🌾" },
    { id: "lakefront", name: "Lakefront", icon: "🏞️" },
    { id: "islands", name: "Islands", icon: "🏝️" },
    { id: "tiny_homes", name: "Tiny homes", icon: "🏠" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 5 >= categories.length ? 0 : prev + 5));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 5 < 0 ? categories.length - 5 : prev - 5,
    );
  };

  return (
    <div className="relative px-4 py-6">
      <div className="overflow-hidden rounded-3xl border border-dashed border-gray-300 p-2">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
          {categories.map((category) => (
            <div key={category.id} className="w-1/5 flex-none px-2">
              <div className="dark:bg-gray-900/70dark:hover:shadow-gray-700 cursor-pointer rounded-lg bg-white/60 p-4 transition-shadow hover:shadow-md">
                {/* Arch-shaped image placeholder */}
                <div className="mb-4 aspect-square rounded-t-full bg-gray-100 dark:bg-gray-700" />

                {/* Category info */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-2xl dark:bg-gray-700">
                    {category.icon}
                  </div>
                  <p className="text-base font-medium dark:text-white">
                    {category.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
      >
        →
      </button>
    </div>
  );
}
