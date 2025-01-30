import { Home, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <hr className="dark:border-dark-border mx-auto w-11/12 border-gray-200" />
      <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight">
                Stay Updated on New Rentals
              </h2>
              <p className="mt-4 text-lg">
                Subscribe to receive the latest updates on houses for rent,
                exclusive offers, and helpful tips for renters.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md px-3.5 py-2 text-base outline outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md p-2 ring-1">
                  <Home aria-hidden="true" className="size-6" />
                </div>
                <dt className="mt-4 text-base font-semibold">
                  Verified Listings
                </dt>
                <dd className="mt-2 text-base/7">
                  Browse through a curated list of verified rental properties
                  for peace of mind.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md p-2 ring-1">
                  <ShieldCheck aria-hidden="true" className="size-6" />
                </div>
                <dt className="mt-4 text-base font-semibold">
                  No Hidden Costs
                </dt>
                <dd className="mt-2 text-base/7">
                  Transparent pricing with no hidden fees or unexpected charges.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
      </div>
    </footer>
  );
}
