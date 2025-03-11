import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { BENEFITS } from "../../constants/index.jsx"
import Button from "../ui/Button.jsx"

const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-16 ">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Benefits of Using Our Platform
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
              RentEase offers a comprehensive solution for both property owners and tenants, making the rental process
              seamless and enjoyable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {BENEFITS.slice(0, 4).map((benefit) => (
                <div key={benefit.id} className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <benefit.icon size={18} className="text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8">
              <Link to="/about">
                <Button className="group">
                  Learn More About Us{" "}
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Benefits"
                className="relative rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection

