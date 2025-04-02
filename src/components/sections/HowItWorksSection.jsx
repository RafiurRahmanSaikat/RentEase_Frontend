import { HOW_IT_WORKS } from "../../constants";
import { Card } from "../ui";

const HowItWorksSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
            Renting a property with RentEase is simple and straightforward.
            Follow these steps to find your perfect home.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Number */}
              <div
                className={`absolute left-0 top-0 h-10 w-10 rounded-full md:h-12 md:w-12 ${step.color} z-10 -ml-2 -mt-2 flex items-center justify-center text-lg font-bold text-white md:text-xl`}
              >
                {step.id}
              </div>

              {/* Content */}
              <Card className="h-full transform border-t-4 border-t-purple-500 px-4 pb-6 pt-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-t-purple-400 md:px-6">
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white ${step.color} md:h-16 md:w-16`}
                >
                  <step.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white md:text-xl">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 md:text-base">
                  {step.description}
                </p>
              </Card>

              {/* Connector Line (except for last item) */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-1 w-8 bg-purple-200 dark:bg-purple-800 lg:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
