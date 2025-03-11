import { APP_FEATURES } from "../../constants/index.jsx"
import Button from "../ui/Button.jsx"

const MobileAppSection = () => {
  return (
    <section className="py-12 md:py-16 ">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">RentEase Mobile App</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Take RentEase with you wherever you go. Our mobile app makes it easy to search for properties, manage your
              listings, and communicate with tenants or owners on the go.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
              {APP_FEATURES.slice(0, 4).map((feature) => (
                <div key={feature.id} className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <feature.icon size={18} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button size="md" className="flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                  <path d="M17.5,2H8.5L3,7V22H21V7L17.5,2M17,7V4H19L17,7M7,4H15V9H7V4M19,20H5V11H19V20M16,13H8V15H16V13M16,17H8V19H16V17Z" />
                </svg>
                Download for iOS
              </Button>
              <Button size="md" variant="outline" className="flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                  <path d="M17.5,2H8.5L3,7V22H21V7L17.5,2M17,7V4H19L17,7M7,4H15V9H7V4M19,20H5V11H19V20M16,13H8V15H16V13M16,17H8V19H16V17Z" />
                </svg>
                Download for Android
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Mobile App"
                className="relative rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppSection

