import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BENEFITS } from "../../constants";
import { Button } from "../ui";

const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:gap-12 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:mb-6 md:text-3xl">
              Benefits of Using Our Platform
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300 md:mb-8">
              RentEase offers a comprehensive solution for both property owners
              and tenants, making the rental process seamless and enjoyable.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {BENEFITS.slice(0, 4).map((benefit) => (
                <div key={benefit.id} className="flex items-start">
                  <div className="mr-3 flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 md:h-10 md:w-10">
                      <benefit.icon
                        size={18}
                        className="text-purple-600 dark:text-purple-400"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white md:text-lg">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 md:text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8">
              <Link to="/about">
                <Button className="group">
                  Learn More About Us{" "}
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-indigo-600/20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Benefits"
                className="relative w-full rounded-xl border border-gray-200 shadow-2xl dark:border-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
