import React, { useState } from "react";

// react icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {
  IoHeart,
  IoHeartOutline,
  IoShareSocialOutline,
  IoStar,
} from "react-icons/io5";

const ProductDetailsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState("8");
  const [selectedColor, setSelectedColor] = useState("Royal Brown");

  const images = [
    "https://i.ibb.co.com/LxyQVtG/image-19.png",
    "https://i.ibb.co.com/d6RXLM2/image-22.png",
    "https://i.ibb.co.com/17yKVQm/image-19.png",
    "https://i.ibb.co.com/NCQFGJr/image-21.png",
    "https://i.ibb.co.com/2tWVrdD/image-23.png",
  ];

  const sizes = ["6", "8", "10", "14", "18", "20"];
  const colors = [
    { name: "Royal Brown", class: "bg-[#654321]" },
    { name: "Light Gray", class: "bg-gray-200" },
    { name: "Steel Blue", class: "bg-[#4682B4]" },
    { name: "Navy", class: "bg-navy-900" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectThumbnail = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="lg:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Image Section */}
        <div className="relative">
          <div className="flex">
            <div className="flex w-[90%] items-center justify-center overflow-hidden rounded-md bg-gray-100">
              <img
                src={images[currentImageIndex]}
                alt={`Product view ${currentImageIndex + 1}`}
                className="h-[400px] w-[300px] object-cover"
              />
            </div>
            <div className="ml-[20px] flex flex-col justify-between gap-[15px]">
              <div className="flex flex-col gap-[10px]">
                <button className="w-max rounded-md bg-gray-100 p-2.5 hover:bg-gray-200">
                  <IoShareSocialOutline className="h-5 w-5" />
                </button>

                <button
                  className="w-max rounded-md bg-gray-100 p-2.5 hover:bg-gray-200"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  {isFavorite ? (
                    <IoHeart className="h-5 w-5 text-red-500" />
                  ) : (
                    <IoHeartOutline className="h-5 w-5" />
                  )}
                </button>
              </div>

              <div className="flex flex-col gap-[10px]">
                <button
                  onClick={prevImage}
                  className="w-max rounded-md bg-gray-100 p-2 hover:bg-gray-200"
                  aria-label="Previous image"
                >
                  <BiChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="w-max rounded-md bg-gray-100 p-2 hover:bg-gray-200"
                  aria-label="Next image"
                >
                  <BiChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="scrollbar mt-4 flex w-full gap-2 overflow-x-auto lg:w-[87%]">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => selectThumbnail(index)}
                className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 bg-gray-100 transition-all duration-300 ${
                  currentImageIndex === index
                    ? "border-[#0FABCA]"
                    : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col">
          <div className="flex items-start justify-between">
            <div className="w-full">
              <p className="text-[0.9rem]">John Lewis ANYDAY</p>
              <h1 className="mb-3 text-[1.6rem] font-semibold lg:text-[1.8rem]">
                Long Sleeve Overshirt, Khaki, 6
              </h1>
              <div className="mb-4 flex w-full flex-col justify-between gap-1 lg:flex-row lg:items-center lg:gap-4">
                <div className="flex items-center">
                  <span className="text-[1.4rem] font-semibold">£28.00</span>
                  <span className="ml-2 text-[1rem] line-through">£40.00</span>
                </div>
                <div className="flex items-center gap-1">
                  <IoStar className="text-[1.1rem] text-yellow-400" />
                  <span className="font-semibold">4.5</span>
                  <span className="">(1,238 Sold)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 mt-1 border-t-[2px] border-dashed border-gray-200 pt-6">
            <h2 className="mb-2 font-semibold">Description:</h2>
            <p className="text-[0.9rem]">
              Boba etiam ut bulla tea est potus electus singulari compositione
              saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba
              refert ad pitas marnicas tapiocas in fundo potus inventas, quae
              typice lacte tea nigro sapiuntur.
              <button className="ml-1 text-blue-600 hover:underline">
                See More...
              </button>
            </p>
          </div>

          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-medium">
                Color: <span className="font-semibold">{selectedColor}</span>
              </h2>
            </div>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`h-10 w-20 rounded-md border-2 transition-all duration-300 ${
                    selectedColor === color.name
                      ? "border-[#0FABCA] p-1"
                      : "border-transparent"
                  } `}
                  aria-label={`Select ${color.name} color`}
                >
                  <div
                    className={`h-full w-full rounded-md transition-all duration-300 ${color.class}`}
                  ></div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-medium">
                Size: <span className="font-semibold">{selectedSize}</span>
              </h2>
              <button className="text-[0.8rem] underline">
                View Size Chart
              </button>
            </div>
            <div className="flex w-full flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`max-w-[60px] grow rounded-md border px-4 py-2 ${
                    selectedSize === size
                      ? "border-[#0FABCA] bg-[#0FABCA] text-white"
                      : "border-gray-200 hover:border-[#0FABCA]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-4 lg:flex-row">
            <button className="grow rounded-md bg-[#0FABCA] px-6 py-3 text-white hover:bg-[#0FABCA]/90">
              Add To Cart
            </button>
            <button className="grow rounded-md border border-gray-300 px-6 py-3">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
