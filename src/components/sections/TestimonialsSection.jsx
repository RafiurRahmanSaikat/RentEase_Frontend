"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useEffect, useState } from "react"
import { TESTIMONIALS } from "../../constants/index.jsx"
import Button from "../ui/Button.jsx"
import Card from "../ui/Card.jsx"

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">What Our Users Say</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied tenants and property owners about their experience with RentEase
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-4">
          <Button size="sm"  onClick={prevTestimonial} >
          <ChevronLeft size={20} className="md:size-10" />
          </Button>

            <Button size="sm"  onClick={nextTestimonial} >
            <ChevronRight size={20} className="md:size-10" />
          </Button>

          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="p-6 md:p-8 text-center max-w-3xl mx-auto shadow-lg border-0 dark:bg-zinc-800/50 backdrop-blur-sm">
                    <div className="mb-4 md:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`inline-block mx-0.5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 italic mb-4 md:mb-6">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-purple-200 dark:border-purple-900"
                      />
                      <div className="ml-3 text-left">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 md:mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full transition-colors duration-300 ${
                  activeTestimonial === index ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

