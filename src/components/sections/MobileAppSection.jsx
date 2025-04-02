import { APP_FEATURES } from "../../constants";
import { Button } from "../ui";

const MobileAppSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:gap-8 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              RentEase Mobile App
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Take RentEase with you wherever you go. Our mobile app makes it
              easy to search for properties, manage your listings, and
              communicate with tenants or owners on the go.
            </p>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {APP_FEATURES.slice(0, 4).map((feature) => (
                <div key={feature.id} className="flex items-start">
                  <div className="mr-3 flex-shrink-0">
                    <feature.icon
                      size={18}
                      className="text-purple-600 dark:text-purple-400"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white md:text-base">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 md:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:gap-4">
              <Button size="md" className="flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M17.5,2H8.5L3,7V22H21V7L17.5,2M17,7V4H19L17,7M7,4H15V9H7V4M19,20H5V11H19V20M16,13H8V15H16V13M16,17H8V19H16V17Z" />
                </svg>
                Download for iOS
              </Button>
              <Button
                size="md"
                variant="outline"
                className="flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M17.5,2H8.5L3,7V22H21V7L17.5,2M17,7V4H19L17,7M7,4H15V9H7V4M19,20H5V11H19V20M16,13H8V15H16V13M16,17H8V19H16V17Z" />
                </svg>
                Download for Android
              </Button>
            </div>
          </div>

          <div className="mt-6 w-full lg:mt-0 lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-indigo-600/20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Mobile App"
                className="relative w-full rounded-xl border border-gray-200 shadow-2xl dark:border-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
