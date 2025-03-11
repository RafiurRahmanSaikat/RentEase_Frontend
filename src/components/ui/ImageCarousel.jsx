"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

const ImageCarousel = ({
  images,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(timer)
  }, [currentIndex, autoPlay, interval])

  const nextSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // Match this with the CSS transition duration
  }

  const prevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // Match this with the CSS transition duration
  }

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return

    setIsTransitioning(true)
    setCurrentIndex(index)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={image.id || index} className="w-full flex-shrink-0 relative">
            <img
              src={image.url || "/placeholder.svg"}
              alt={image.title || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {(image.title || image.subtitle) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white p-4 text-center">
                {image.title && <h2 className="text-2xl md:text-3xl font-bold mb-2">{image.title}</h2>}
                {image.subtitle && <p className="text-lg md:text-xl">{image.subtitle}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      {showControls && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                index === currentIndex ? "bg-neutral-50 scale-110" : "bg-neutral-50/50 hover:bg-neutral-50/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageCarousel

