/* eslint-disable react/no-unescaped-entities */
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "../../constants";
import Button from "../ui/Button.jsx";
import Card from "../ui/Card.jsx";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  return (
    <section className="overflow-hidden py-12 md:py-16">
      <div className="mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            What Our Users Say
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
            Hear from our satisfied tenants and property owners about their
            experience with RentEase
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between px-4">
            <Button size="sm" onClick={prevTestimonial}>
              <ChevronLeft size={20} className="md:size-10" />
            </Button>

            <Button size="sm" onClick={nextTestimonial}>
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
                  <Card className="mx-auto max-w-3xl border-0 p-6 text-center shadow-lg backdrop-blur-sm dark:bg-zinc-800/50 md:p-8">
                    <div className="mb-4 md:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`mx-0.5 inline-block ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="mb-4 text-base italic text-gray-700 dark:text-gray-300 md:mb-6 md:text-lg">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-10 w-10 rounded-full border-2 border-purple-200 object-cover dark:border-purple-900 md:h-12 md:w-12"
                      />
                      <div className="ml-3 text-left">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white md:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 md:text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-center md:mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`mx-1 h-2 w-2 rounded-full transition-colors duration-300 md:h-3 md:w-3 ${
                  activeTestimonial === index
                    ? "bg-purple-600"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
