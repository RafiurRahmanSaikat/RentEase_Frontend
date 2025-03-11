import { HOW_IT_WORKS } from "../../constants/index.jsx"
import Card from "../ui/Card.jsx"

const HowItWorksSection = () => {
  return (
    <section className="py-12 md:py-16 ">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Renting a property with RentEase is simple and straightforward. Follow these steps to find your perfect
            home.
          </p>
        </div>

        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {HOW_IT_WORKS.map((step, index) => (
            <div key={step.id} className="relative ">
              {/* Step Number */}
              <div
                className={`absolute top-0  left-0 w-10 h-10 md:w-12 md:h-12 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-lg md:text-xl -mt-2 -ml-2 z-10`}
              >
                {step.id}
              </div>

              {/* Content */}
              <Card className=" pt-8 pb-6 px-4 md:px-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full border-t-4 border-t-purple-500 dark:border-t-purple-400">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon size={24} className="text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{step.description}</p>
              </Card>

              {/* Connector Line (except for last item) */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-purple-200 dark:bg-purple-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

