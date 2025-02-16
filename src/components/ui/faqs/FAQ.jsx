import { ChevronDown } from "lucide-react";

export default function FAQ() {
  return (
    <section className="mx-auto my-6 px-4 leading-relaxed md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold text-gray-600 dark:text-gray-100">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto text-lg text-gray-600 dark:text-gray-300">
          Have questions about buying or selling a house? We&apos;ve answered
          the most common ones here. If you&apos;re still unsure, feel free to
          contact us.
        </p>
      </div>
      <div className="mx-auto mt-14 max-w-5xl">
        {/* FAQ 1 */}
        <details className="mt-5 space-y-3 overflow-hidden border-b dark:border-gray-600">
          <summary className="flex cursor-pointer items-center justify-between pb-5 text-lg font-medium text-gray-700 dark:text-gray-200">
            What is RentEase and how does it work?
            <ChevronDown className="ml-2 h-5 w-5 text-gray-500 transition-transform duration-300 ease-in-out dark:text-gray-400" />
          </summary>
          <div className="transition-all duration-300 ease-in-out">
            <p className="text-gray-500 dark:text-gray-300">
              RentEase is an online platform that helps you buy and sell homes.
              You can browse listings, get market insights, and connect with
              trusted real estate agents.
            </p>
          </div>
        </details>
        {/* FAQ 2 */}
        <details className="mt-5 space-y-3 overflow-hidden border-b dark:border-gray-600">
          <summary className="flex cursor-pointer items-center justify-between pb-5 text-lg font-medium text-gray-700 dark:text-gray-200">
            How do I list my property for sale on RentEase?
            <ChevronDown className="ml-2 h-5 w-5 text-gray-500 transition-transform duration-300 ease-in-out dark:text-gray-400" />
          </summary>
          <div className="transition-all duration-300 ease-in-out">
            <p className="text-gray-500 dark:text-gray-300">
              To list your property, create an account on RentEase and provide
              details about your property, including photos, location, and
              price.
            </p>
          </div>
        </details>
        {/* FAQ 3 */}
        <details className="mt-5 space-y-3 overflow-hidden border-b dark:border-gray-600">
          <summary className="flex cursor-pointer items-center justify-between pb-5 text-lg font-medium text-gray-700 dark:text-gray-200">
            How can I get financing for a home?
            <ChevronDown className="ml-2 h-5 w-5 text-gray-500 transition-transform duration-300 ease-in-out dark:text-gray-400" />
          </summary>
          <div className="transition-all duration-300 ease-in-out">
            <p className="text-gray-500 dark:text-gray-300">
              RentEase works with a variety of lenders to offer mortgage
              options. Explore financing options or speak with a financial
              advisor through our platform.
            </p>
          </div>
        </details>
        {/* FAQ 4 */}
        <details className="mt-5 space-y-3 overflow-hidden border-b dark:border-gray-600">
          <summary className="flex cursor-pointer items-center justify-between pb-5 text-lg font-medium text-gray-700 dark:text-gray-200">
            What should I consider when selling my house?
            <ChevronDown className="ml-2 h-5 w-5 text-gray-500 transition-transform duration-300 ease-in-out dark:text-gray-400" />
          </summary>
          <div className="transition-all duration-300 ease-in-out">
            <p className="text-gray-500 dark:text-gray-300">
              Consider the market value, property condition, and timing. Our
              team at RentEase can help with pricing and marketing strategies.
            </p>
          </div>
        </details>
        {/* FAQ 5 */}
        <details className="mt-5 space-y-3 overflow-hidden border-b dark:border-gray-600">
          <summary className="flex cursor-pointer items-center justify-between pb-5 text-lg font-medium text-gray-700 dark:text-gray-200">
            Are there any hidden fees when buying or selling a property on
            RentEase?
            <ChevronDown className="ml-2 h-5 w-5 text-gray-500 transition-transform duration-300 ease-in-out dark:text-gray-400" />
          </summary>
          <div className="transition-all duration-300 ease-in-out">
            <p className="text-gray-500 dark:text-gray-300">
              RentEase is transparent about all fees. You&apos;ll be informed of
              any costs upfront, including agent fees and service charges.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
