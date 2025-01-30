export default function Test() {
  return (
    <>
      {/* hero 1 */}
      <div className="relative bg-gradient-to-b from-[#101212] to-[#08201D]">
        <header className="absolute inset-x-0 top-0 z-10 w-full">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img
                    className="h-8 w-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/logo.svg"
                    alt=""
                  />
                </a>
              </div>

              <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Solutions{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Resources{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Pricing{" "}
                </a>
              </div>

              <div className="sm:ml-auto lg:flex lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="#"
                  title=""
                  className="hidden text-base text-white transition-all duration-200 hover:text-opacity-80 lg:inline-flex"
                >
                  {" "}
                  Log in{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center rounded-lg bg-white/20 px-3 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/40 focus:bg-white/40 sm:px-5 sm:text-base"
                  role="button"
                >
                  {" "}
                  Apply for free{" "}
                </a>
              </div>

              <button
                type="button"
                className="ml-1 inline-flex rounded-md p-2 text-white transition-all duration-200 hover:bg-gray-800 focus:bg-gray-800 sm:ml-4 lg:hidden"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>

        <section className="relative pb-10 pt-24 sm:pb-16 sm:pt-32 lg:min-h-[1000px] lg:pb-24">
          <div className="absolute inset-x-0 bottom-0 z-10 hidden lg:flex">
            <img
              className="hidden w-full lg:block"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards.png"
              alt=""
            />
            <img
              className="block w-full lg:hidden"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards-mobile.png"
              alt=""
            />
          </div>

          <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-4xl font-bold sm:text-6xl">
                <span className="bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent">
                  {" "}
                  Simplified credit cards for students{" "}
                </span>
              </h1>
              <p className="mt-5 text-base text-white sm:text-xl">
                No more hassle taking loans and making payments. Try Postcrats
                credit card, make your life simple.
              </p>

              <a
                href="#"
                title=""
                className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 sm:mt-16"
                role="button"
              >
                Apply for free
                <svg
                  className="-mr-2 ml-8 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>

              <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 px-20 text-left sm:grid-cols-3 sm:px-0">
                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0"
                    width="31"
                    height="25"
                    viewBox="0 0 31 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z"
                      stroke="#28CC9D"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z"
                      stroke="#28CC9D"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.2231 15.8512H7.11157C3.73595 15.8512 1 18.5871 1 21.9628V22.9814C1 22.9814 4.18311 24 10.1674 24C16.1516 24 19.3347 22.9814 19.3347 22.9814V21.9628C19.3347 18.5871 16.5988 15.8512 13.2231 15.8512Z"
                      fill="#0B1715"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.07422 6.68386C5.07422 3.87152 7.35485 1.59088 10.1672 1.59088C12.9795 1.59088 15.2602 3.87152 15.2602 6.68386C15.2602 9.4962 12.9795 12.7954 10.1672 12.7954C7.35485 12.7954 5.07422 9.4962 5.07422 6.68386Z"
                      fill="#0B1715"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="ml-3 text-sm text-white">
                    Over 12,000 students joined
                  </p>
                </div>

                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8335 21.9166H3.16683C2.6143 21.9166 2.08439 21.6972 1.69369 21.3065C1.30299 20.9158 1.0835 20.3858 1.0835 19.8333V3.16665C1.0835 2.61411 1.30299 2.08421 1.69369 1.69351C2.08439 1.30281 2.6143 1.08331 3.16683 1.08331H19.8335C20.386 1.08331 20.9159 1.30281 21.3066 1.69351C21.6973 2.08421 21.9168 2.61411 21.9168 3.16665V19.8333C21.9168 20.3858 21.6973 20.9158 21.3066 21.3065C20.9159 21.6972 20.386 21.9166 19.8335 21.9166Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 12.6667L9.25 15L16 8"
                      stroke="#28CC9D"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="ml-3 text-sm text-white">
                    No yearly charges, maximum limits
                  </p>
                </div>

                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0"
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 11H3C1.89543 11 1 11.8954 1 13V21C1 22.1046 1.89543 23 3 23H17C18.1046 23 19 22.1046 19 21V13C19 11.8954 18.1046 11 17 11Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 19C11.1046 19 12 18.1046 12 17C12 15.8954 11.1046 15 10 15C8.89543 15 8 15.8954 8 17C8 18.1046 8.89543 19 10 19Z"
                      stroke="#28CC9D"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 7V6C15.0131 4.68724 14.5042 3.42303 13.5853 2.48539C12.6664 1.54776 11.4128 1.01346 10.1 1H10C8.68724 0.986939 7.42303 1.4958 6.48539 2.41469C5.54776 3.33357 5.01346 4.58724 5 5.9V7"
                      stroke="#28CC9D"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="ml-3 text-sm text-white">
                    Secured & safe online payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gradient-to-b from-green-50 to-green-100">
        <header className="">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img
                    className="h-8 w-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg"
                    alt=""
                  />
                </a>
              </div>

              <button
                type="button"
                className="inline-flex border border-black p-1 text-black transition-all duration-200 hover:bg-gray-100 focus:bg-gray-100 lg:hidden"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div className="ml-auto hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a
                  href="#"
                  title=""
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Solutions{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Resources{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Pricing{" "}
                </a>

                <div className="h-5 w-px bg-black/20"></div>

                <a
                  href="#"
                  title=""
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Log in{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center border-2 border-black px-5 py-2.5 text-base font-semibold text-black transition-all duration-200 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                  role="button"
                >
                  {" "}
                  Try for free{" "}
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  Collaborate remotely, with
                  <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      Postcrafts.
                    </h1>
                  </div>
                </h1>

                <p className="mt-8 text-base text-black sm:text-xl">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.
                </p>

                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center bg-orange-500 px-10 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-orange-600 focus:bg-orange-600"
                    role="button"
                  >
                    {" "}
                    Start exploring{" "}
                  </a>

                  <a
                    href="#"
                    title=""
                    className="mt-6 inline-flex items-center text-base font-semibold transition-all duration-200 hover:opacity-80 sm:mt-0"
                  >
                    <svg
                      className="mr-3 h-10 w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        fill="#F97316"
                        stroke="#F97316"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Watch video
                  </a>
                </div>
              </div>

              <div>
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* hero 3 */}
      <div className="bg-white">
        <header className="bg-[#FCF8F1] bg-opacity-30">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img
                    className="h-8 w-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                    alt=""
                  />
                </a>
              </div>

              <button
                type="button"
                className="inline-flex rounded-md p-2 text-black transition-all duration-200 hover:bg-gray-100 focus:bg-gray-100 lg:hidden"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  ></path>
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Solutions{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Resources{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Pricing{" "}
                </a>
              </div>

              <a
                href="#"
                title=""
                className="hidden items-center justify-center rounded-full bg-black px-5 py-2.5 text-base font-semibold text-white transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:bg-yellow-300 focus:text-black lg:inline-flex"
                role="button"
              >
                {" "}
                Join Now{" "}
              </a>
            </div>
          </div>
        </header>

        <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-base font-semibold uppercase tracking-wider text-blue-600">
                  A social media for learners
                </p>
                <h1 className="mt-4 text-4xl font-bold text-black sm:text-6xl lg:mt-8 xl:text-8xl">
                  Connect & learn from the experts
                </h1>
                <p className="mt-4 text-base text-black sm:text-xl lg:mt-8">
                  Grow your career fast with right mentor.
                </p>

                <a
                  href="#"
                  title=""
                  className="mt-8 inline-flex items-center rounded-full bg-yellow-300 px-6 py-4 font-semibold text-black transition-all duration-200 hover:bg-yellow-400 focus:bg-yellow-400 lg:mt-16"
                  role="button"
                >
                  Join for free
                  <svg
                    className="-mr-2 ml-8 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>

                <p className="mt-5 text-gray-600">
                  Already joined us?{" "}
                  <a
                    href="#"
                    title=""
                    className="text-black transition-all duration-200 hover:underline"
                  >
                    Log in
                  </a>
                </p>
              </div>

              <div>
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* FAQ 1 */}
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            <div className="cursor-pointer border border-gray-200 bg-white shadow-lg transition-all duration-200 hover:bg-gray-50">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {" "}
                  How to create an account?{" "}
                </span>

                <svg
                  className="h-6 w-6 rotate-180 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="cursor-pointer border border-gray-200 bg-white transition-all duration-200 hover:bg-gray-50">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {" "}
                  How can I make payment using Paypal?{" "}
                </span>

                <svg
                  className="h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="cursor-pointer border border-gray-200 bg-white transition-all duration-200 hover:bg-gray-50">
              <div className="">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">
                    {" "}
                    Can I cancel my plan?{" "}
                  </span>

                  <svg
                    className="h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{" "}
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>

            <div className="cursor-pointer border border-gray-200 bg-white transition-all duration-200 hover:bg-gray-50">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {" "}
                  How can I reach to support?{" "}
                </span>

                <svg
                  className="h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>

          <p className="textbase mt-9 text-center text-gray-600">
            Didn’t find the answer you are looking for?{" "}
            <a
              href="#"
              title=""
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
            >
              Contact our support
            </a>
          </p>
        </div>
      </section>
      {/* FAQ 2 */}
      <div className="relative">
        <header className="absolute inset-x-0 top-0 z-10 w-full">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img
                    className="h-8 w-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/logo.svg"
                    alt=""
                  />
                </a>
              </div>

              <button
                type="button"
                className="inline-flex rounded-md p-2 text-black transition-all duration-200 hover:bg-gray-100 focus:bg-gray-100 lg:hidden"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div className="ml-auto hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a
                  href="#"
                  title=""
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Solutions{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Resources{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Pricing{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-base font-semibold text-white transition-all duration-200 hover:bg-orange-600 focus:bg-orange-600"
                  role="button"
                >
                  {" "}
                  Try for free{" "}
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="overflow-hidden bg-yellow-50">
          <div className="flex flex-col lg:min-h-[800px] lg:flex-row lg:items-stretch">
            <div className="relative flex w-full items-center justify-center lg:order-2 lg:w-7/12">
              <div className="absolute bottom-0 right-0 hidden lg:block">
                <img
                  className="h-48 w-auto object-contain"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                  alt=""
                />
              </div>

              <div className="relative px-4 pb-16 pt-24 text-center sm:px-6 md:px-24 lg:py-24 lg:text-left 2xl:px-32">
                <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                  Get it done.
                  <br />
                  Fast, Easy.
                </h1>
                <p className="mt-8 text-xl text-black">
                  We help you to make your remote work life easier. Build a
                  distruction free working experience.
                </p>

                <form
                  action="#"
                  method="POST"
                  className="mx-auto mt-8 max-w-xl rounded-xl bg-white sm:bg-transparent lg:mx-0 lg:mt-12"
                >
                  <div className="p-4 sm:rounded-full sm:border-2 sm:border-transparent sm:bg-white sm:p-2 sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                    <div className="flex flex-col items-start sm:flex-row">
                      <div className="w-full min-w-0 flex-1">
                        <div className="relative text-gray-400 focus-within:text-gray-600">
                          <label htmlFor="email" className="sr-only"></label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter email to get started"
                            className="block w-full rounded-full border-transparent px-4 py-4 text-center text-base text-black placeholder-gray-500 caret-orange-500 transition-all duration-200 focus:border-transparent focus:ring-0 sm:text-left"
                            required=""
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-transparent bg-orange-500 px-4 py-4 font-semibold text-white transition-all duration-200 hover:bg-orange-600 focus:bg-orange-600 sm:ml-4 sm:mt-0 sm:w-auto"
                      >
                        Try 14 days free
                      </button>
                    </div>
                  </div>
                </form>
                <p className="mt-5 text-base text-black">
                  Instant access . No credit card required
                </p>
              </div>

              <div className="absolute -bottom-16 right-0 z-10 lg:-left-20 lg:top-24">
                <img
                  className="h-32 w-32 md:h-40 md:w-40"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png"
                  alt=""
                />
              </div>
            </div>

            <div className="relative h-96 w-full overflow-hidden lg:order-1 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full scale-150 object-cover"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/man-working-on-laptop.jpg"
                  alt=""
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center">
                    <svg
                      className="h-10 w-10 text-orange-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h2 className="ml-2.5 text-7xl font-bold text-white">
                      395
                    </h2>
                  </div>
                  <p className="mt-1.5 max-w-xs text-xl text-white">
                    Professionals have organized their desk via PostCra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Blog 1 */}
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Latest from blog
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-0">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 bg-transparent text-gray-400 transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 bg-transparent text-gray-400 transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-6 lg:mt-16 lg:max-w-full lg:grid-cols-3">
            <div className="overflow-hidden rounded bg-white shadow">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="aspect-w-4 aspect-h-3 block">
                    <img
                      className="h-full w-full object-cover"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg"
                      alt=""
                    />
                  </a>

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900">
                      {" "}
                      Lifestyle{" "}
                    </span>
                  </div>
                </div>
                <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-gray-500">
                  {" "}
                  March 21, 2020{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    How to build coffee inside your home in 5 minutes.{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a
                  href="#"
                  title=""
                  className="mt-5 inline-flex items-center justify-center border-b-2 border-transparent pb-0.5 text-base font-semibold text-blue-600 transition-all duration-200 hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded bg-white shadow">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="aspect-w-4 aspect-h-3 block">
                    <img
                      className="h-full w-full object-cover"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg"
                      alt=""
                    />
                  </a>

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900">
                      {" "}
                      Marketing{" "}
                    </span>
                  </div>
                </div>
                <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-gray-500">
                  {" "}
                  April 04, 2020{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    Ho7 Tips to run your remote team faster and better.{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a
                  href="#"
                  title=""
                  className="mt-5 inline-flex items-center justify-center border-b-2 border-transparent pb-0.5 text-base font-semibold text-blue-600 transition-all duration-200 hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded bg-white shadow">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="aspect-w-4 aspect-h-3 block">
                    <img
                      className="h-full w-full object-cover"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg"
                      alt=""
                    />
                  </a>

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900">
                      {" "}
                      Productivity{" "}
                    </span>
                  </div>
                </div>
                <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-gray-500">
                  {" "}
                  May 12, 2020{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    5 Productivity tips to write faster at morning.{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a
                  href="#"
                  title=""
                  className="mt-5 inline-flex items-center justify-center border-b-2 border-transparent pb-0.5 text-base font-semibold text-blue-600 transition-all duration-200 hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-3 lg:hidden">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 bg-transparent text-gray-400 transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 bg-transparent text-gray-400 transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* Feature 1 */}
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
            <div>
              <div className="relative mx-auto flex items-center justify-center">
                <svg
                  className="text-blue-100"
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                </svg>
                <svg
                  className="absolute h-9 w-9 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="relative mx-auto flex items-center justify-center">
                <svg
                  className="text-orange-100"
                  width="62"
                  height="64"
                  viewBox="0 0 62 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                </svg>
                <svg
                  className="absolute h-9 w-9 text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Fast & Easy to Load
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="relative mx-auto flex items-center justify-center">
                <svg
                  className="text-green-100"
                  width="66"
                  height="68"
                  viewBox="0 0 66 68"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                </svg>
                <svg
                  className="absolute h-9 w-9 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Light & Dark Version
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="relative mx-auto flex items-center justify-center">
                <svg
                  className="text-purple-100"
                  width="66"
                  height="68"
                  viewBox="0 0 66 68"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                </svg>
                <svg
                  className="absolute h-9 w-9 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Light & Dark Version
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="relative mx-auto flex items-center justify-center">
                <svg
                  className="text-gray-100"
                  width="65"
                  height="70"
                  viewBox="0 0 65 70"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 13.0655 0 33.5 0C53.9345 0 64.5 5.56546 64.5 26Z" />
                </svg>
                <svg
                  className="absolute h-9 w-9 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Fast & Easy to Load
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="relative mx-auto flex items-center justify-center">
                <svg
                  className="text-yellow-100"
                  width="78"
                  height="78"
                  viewBox="0 0 78 78"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.49996 28.0002C4.09993 47.9554 14.1313 66.7885 35.5 71.5002C56.8688 76.2119 68.0999 58.4553 72.5 38.5001C76.9 18.5449 68.3688 12.711 47 7.99931C25.6312 3.28759 12.9 8.04499 8.49996 28.0002Z" />
                </svg>
                <svg
                  className="absolute h-9 w-9 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="relative mx-auto flex items-center justify-center">
                <svg
                  className="text-gray-100"
                  width="62"
                  height="64"
                  viewBox="0 0 62 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z"></path>
                </svg>
                <svg
                  className="absolute h-9 w-9 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Light & Dark Version
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="relative mx-auto flex items-center justify-center">
                <svg
                  className="text-rose-100"
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                </svg>
                <svg
                  className="absolute h-9 w-9 text-rose-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="relative mx-auto flex items-center justify-center">
                <svg
                  className="text-lime-100"
                  width="62"
                  height="65"
                  viewBox="0 0 62 65"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 13.0264C0 33.4609 8.06546 64.0264 28.5 64.0264C48.9345 64.0264 62 50.4604 62 30.0259C62 9.59135 59.4345 4.0256 39 4.0256C18.5655 4.0256 0 -7.40819 0 13.0264Z" />
                </svg>

                <svg
                  className="absolute h-9 w-9 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Fast & Easy to Load
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us  1*/}
      <section className="bg-gray-100 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Contact us
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:grid-cols-3 md:px-0">
              <div className="overflow-hidden rounded-xl bg-white">
                <div className="p-6">
                  <svg
                    className="mx-auto h-10 w-10 flex-shrink-0 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium text-gray-900">
                    +1-316-555-0116
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    +1-446-526-0117
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl bg-white">
                <div className="p-6">
                  <svg
                    className="mx-auto h-10 w-10 flex-shrink-0 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium text-gray-900">
                    contact@example.com
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    hr@example.com
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl bg-white">
                <div className="p-6">
                  <svg
                    className="mx-auto h-10 w-10 flex-shrink-0 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                    8502 Preston Rd. Ingle, Maine 98380, USA
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl bg-white">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-center text-3xl font-semibold text-gray-900">
                  Send us a message
                </h3>

                <form action="#" method="POST" className="mt-14">
                  <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Your name{" "}
                      </label>
                      <div className="relative mt-2.5">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="relative mt-2.5">
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Phone number{" "}
                      </label>
                      <div className="relative mt-2.5">
                        <input
                          type="tel"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Company name{" "}
                      </label>
                      <div className="relative mt-2.5">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Message{" "}
                      </label>
                      <div className="relative mt-2.5">
                        <textarea
                          name=""
                          id=""
                          placeholder=""
                          className="block w-full resize-y rounded-md border border-gray-200 bg-white px-4 py-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              How does it work?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 top-2 hidden md:block md:px-20 lg:px-28 xl:px-44">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                alt=""
              />
            </div>

            <div className="relative grid grid-cols-1 gap-x-12 gap-y-12 text-center md:grid-cols-3">
              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    1{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Create a free account
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    2{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Build your website
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    3{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Release & Launch
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Welcome Back!
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Login to your account
            </p>
          </div>

          <div className="relative mx-auto mt-8 max-w-md md:mt-16">
            <div className="overflow-hidden rounded-md bg-white shadow-md">
              <div className="px-4 py-6 sm:px-8 sm:py-7">
                <form action="#" method="POST">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="relative mt-2.5 text-gray-400 focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                          </svg>
                        </div>

                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder="Enter email to get started"
                          className="block w-full rounded-md border border-gray-200 bg-white py-4 pl-10 pr-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Password{" "}
                        </label>

                        <a
                          href="#"
                          title=""
                          className="text-sm font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline focus:text-orange-600"
                        >
                          {" "}
                          Forgot password?{" "}
                        </a>
                      </div>
                      <div className="relative mt-2.5 text-gray-400 focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                            />
                          </svg>
                        </div>

                        <input
                          type="password"
                          name=""
                          id=""
                          placeholder="Enter your password"
                          className="block w-full rounded-md border border-gray-200 bg-white py-4 pl-10 pr-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
                      >
                        Log in
                      </button>
                    </div>

                    <div className="text-center">
                      <p className="text-base text-gray-600">
                        Don’t have an account?{" "}
                        <a
                          href="#"
                          title=""
                          className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                        >
                          Create a free account
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              130+ Handcoded Blocks
            </p>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Celebration helps you build beautiful website
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 items-center gap-x-4 gap-y-10 sm:mt-20 lg:grid-cols-5">
            <div className="space-y-8 lg:col-span-2 lg:space-y-12 lg:pr-16 xl:pr-24">
              <div className="flex items-start">
                <svg
                  className="h-9 w-9 flex-shrink-0 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Simply Copy & Paste
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="h-9 w-9 flex-shrink-0 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Easy to Customize
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="h-9 w-9 flex-shrink-0 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Made with TailwindCSS
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <img
                className="w-full rounded-lg shadow-xl"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Numbers tell our story
            </h2>
            <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 text-center sm:gap-x-8 md:grid-cols-3 lg:mt-24">
            <div>
              <h3 className="text-7xl font-bold">
                <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  6+{" "}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                Years in business
              </p>
              <p className="mt-0.5 text-base text-gray-500">
                Creating the successful path
              </p>
            </div>

            <div>
              <h3 className="text-7xl font-bold">
                <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  4821{" "}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                Projects delivered
              </p>
              <p className="mt-0.5 text-base text-gray-500">In last 6 years</p>
            </div>

            <div>
              <h3 className="text-7xl font-bold">
                <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  37+{" "}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                Team members
              </p>
              <p className="mt-0.5 text-base text-gray-500">
                Working for your success
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Trusted by <span className="text-blue-600">30k+</span> world class
              companies & design teams
            </h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-x-6 gap-y-6 text-center sm:mt-12 lg:mt-20 lg:max-w-full lg:grid-cols-3 xl:gap-x-12">
            <div className="overflow-hidden rounded-md bg-white shadow">
              <div className="px-8 py-12">
                <div className="relative mx-auto h-24 w-24">
                  <img
                    className="relative mx-auto h-24 w-24 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                    alt=""
                  />
                  <div className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                    <svg
                      className="h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                </blockquote>
                <p className="tex-tblack mt-9 text-base font-semibold">
                  Jenny Wilson
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Project Manager at Microsoft
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-md bg-white shadow">
              <div className="px-8 py-12">
                <div className="relative mx-auto h-24 w-24">
                  <img
                    className="relative mx-auto h-24 w-24 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg"
                    alt=""
                  />
                  <div className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                    <svg
                      className="h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                </blockquote>
                <p className="tex-tblack mt-9 text-base font-semibold">
                  Robert Fox
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Founder at Brain.co
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-md bg-white shadow">
              <div className="px-8 py-12">
                <div className="relative mx-auto h-24 w-24">
                  <img
                    className="relative mx-auto h-24 w-24 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
                    alt=""
                  />
                  <div className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                    <svg
                      className="h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                </blockquote>
                <p className="tex-tblack mt-9 text-base font-semibold">
                  Kristin Watson
                </p>
                <p className="mt-1 text-base text-gray-600">
                  UX Designer at Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              What our customers say
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-0 xl:mt-20 xl:grid-cols-4">
            <div className="overflow-hidden rounded-md bg-white">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg"
                    alt=""
                  />
                  <div className="ml-3 mr-auto min-w-0">
                    <p className="truncate text-base font-semibold text-black">
                      Darrell Steward
                    </p>
                    <p className="truncate text-sm text-gray-600">@darrels</p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.
                    <span className="block text-sky-500">#another</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden rounded-md bg-white">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg"
                    alt=""
                  />
                  <div className="ml-3 mr-auto min-w-0">
                    <p className="truncate text-base font-semibold text-black">
                      Leslie Alexander
                    </p>
                    <p className="truncate text-sm text-gray-600">@lesslie</p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    Simply the best. Better than all the rest. I’d recommend
                    this product to beginners and advanced users.
                    <span className="block text-sky-500">#Celebration</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden rounded-md bg-white">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg"
                    alt=""
                  />
                  <div className="ml-3 mr-auto min-w-0">
                    <p className="truncate text-base font-semibold text-black">
                      Jenny Wilson
                    </p>
                    <p className="truncate text-sm text-gray-600">
                      @jennywilson
                    </p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    This is a top quality product. No need to think twice before
                    making it live on web.
                    <span className="block text-sky-500">#make_it_fast</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden rounded-md bg-white">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg"
                    alt=""
                  />
                  <div className="ml-3 mr-auto min-w-0">
                    <p className="truncate text-base font-semibold text-black">
                      Kristin Watson
                    </p>
                    <p className="truncate text-sm text-gray-600">
                      @kristinwatson2
                    </p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    YFinally, I’ve found a template that covers all bases for a
                    bootstrapped startup. We were able to launch in days, not
                    months.
                    <span className="block text-sky-500">#Celebration</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden rounded-md bg-white">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-5.jpg"
                    alt=""
                  />
                  <div className="ml-3 mr-auto min-w-0">
                    <p className="truncate text-base font-semibold text-black">
                      Guy Hawkins
                    </p>
                    <p className="truncate text-sm text-gray-600">
                      @jennywilson
                    </p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    This is a top quality product. No need to think twice before
                    making it live on web.
                    <span className="block text-sky-500">#make_it_fast</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden rounded-md bg-white">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-6.jpg"
                    alt=""
                  />
                  <div className="ml-3 mr-auto min-w-0">
                    <p className="truncate text-base font-semibold text-black">
                      Marvin McKinney
                    </p>
                    <p className="truncate text-sm text-gray-600">@darrels</p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    With Celebration, it’s quicker with the customer, the
                    customer is more ensured of getting exactly what they
                    ordered, and I’m all for the efficiency.
                    <span className="block text-sky-500">#dev #tools</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden rounded-md bg-white">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-7.jpg"
                    alt=""
                  />
                  <div className="ml-3 mr-auto min-w-0">
                    <p className="truncate text-base font-semibold text-black">
                      Annette Black
                    </p>
                    <p className="truncate text-sm text-gray-600">@darrels</p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.
                    <span className="block text-sky-500">#another</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden rounded-md bg-white">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-8.jpg"
                    alt=""
                  />
                  <div className="ml-3 mr-auto min-w-0">
                    <p className="truncate text-base font-semibold text-black">
                      Floyd Miles
                    </p>
                    <p className="truncate text-sm text-gray-600">@darrels</p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    My new site is so much faster and easier to work with than
                    my old site. I just choose the page, make the change and
                    click save.
                    <span className="block text-sky-500">#Celebration</span>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Grow business with Celebration.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>

            <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
              <div className="relative mb-10 ml-auto mt-4 w-full max-w-xs">
                <img
                  className="ml-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                  alt=""
                />

                <img
                  className="absolute -left-12 -top-4"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                  alt=""
                />

                <div className="absolute -bottom-10 -left-16">
                  <div className="bg-yellow-300">
                    <div className="px-8 py-10">
                      <span className="block text-4xl font-bold text-black lg:text-5xl">
                        {" "}
                        53%{" "}
                      </span>
                      <span className="mt-2 block text-base leading-tight text-black">
                        {" "}
                        High Conversions
                        <br />
                        Everything{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto inline-flex rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 px-4 py-1.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-white">
                130+ Handcoded Blocks
              </p>
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Celebration helps you build beautiful website
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
            <div className="bg-white transition-all duration-200 hover:shadow-xl">
              <div className="px-9 py-10">
                <svg
                  className="h-16 w-16 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Secured Payments
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all duration-200 hover:shadow-xl">
              <div className="px-9 py-10">
                <svg
                  className="h-16 w-16 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Secured Payments
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all duration-200 hover:shadow-xl">
              <div className="px-9 py-10">
                <svg
                  className="h-16 w-16 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Secured Payments
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              People who made it successful
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-1.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-2.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-3.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="mt-8 text-center md:mt-16">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-14 py-4 font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              {" "}
              Join our team{" "}
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 flow-root sm:mt-16">
            <div className="divide-gray--200 -my-9 divide-y">
              <div className="py-9">
                <p className="text-xl font-semibold text-black">
                  How to create an account?
                </p>
                <p className="mt-3 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <p className="mt-3 text-base text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="py-9">
                <p className="text-xl font-semibold text-black">
                  What payment method do you support?
                </p>
                <p className="mt-3 text-base text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Ut enim ad minim veniam.
                </p>
              </div>

              <div className="py-9">
                <p className="text-xl font-semibold text-black">
                  What payment method do you support?
                </p>
                <p className="mt-3 text-base text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="py-9">
                <p className="text-xl font-semibold text-black">
                  How do you provide support?
                </p>
                <p className="mt-3 text-base text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                  >
                    support@Celebration.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Create free account
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              You can create a free Celebration account in 2 minutes
            </p>
          </div>

          <div className="relative mx-auto mt-8 max-w-md md:mt-16">
            <div className="overflow-hidden rounded-md bg-white shadow-md">
              <div className="px-4 py-6 sm:px-8 sm:py-7">
                <form action="#" method="POST">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        First & Last name{" "}
                      </label>
                      <div className="relative mt-2.5 text-gray-400 focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>

                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full rounded-md border border-gray-200 bg-white py-4 pl-10 pr-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="relative mt-2.5 text-gray-400 focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                          </svg>
                        </div>

                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder="Enter email to get started"
                          className="block w-full rounded-md border border-gray-200 bg-white py-4 pl-10 pr-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Password{" "}
                      </label>
                      <div className="relative mt-2.5 text-gray-400 focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                            />
                          </svg>
                        </div>

                        <input
                          type="password"
                          name=""
                          id=""
                          placeholder="Enter your password"
                          className="block w-full rounded-md border border-gray-200 bg-white py-4 pl-10 pr-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        className="h-5 w-5 rounded border-gray-200 bg-white text-green-500"
                        checked
                      />

                      <label
                        htmlFor="agree"
                        className="ml-3 text-sm font-medium text-gray-500"
                      >
                        I agree to Postcraft’s{" "}
                        <a
                          href="#"
                          title=""
                          className="text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          title=""
                          className="text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
                      >
                        Create account
                      </button>
                    </div>

                    <div className="text-center">
                      <p className="text-base text-gray-600">
                        Already have an account?{" "}
                        <a
                          href="#"
                          title=""
                          className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                        >
                          Login here
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
            <div className="flex flex-col rounded-md border border-gray-200 bg-white">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “You made it so simple. My new site is so much faster and
                      easier to work with than my old site. I just choose the
                      page, make the change and click save.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="mb-8 h-0 w-full border-t-2 border-dotted border-gray-200"></div>
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Devon Lane
                      </p>
                      <p className="truncate text-base text-gray-500">
                        President of Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-md border border-gray-200 bg-white">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “Simply the best. Better than all the rest. I’d recommend
                      this product to beginners and advanced users.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="mb-8 h-0 w-full border-t-2 border-dotted border-gray-200"></div>
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg"
                      alt=""
                    />
                    <div className="ml-3 min-w-0">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Ronald Richards
                      </p>
                      <p className="truncate text-base text-gray-500">
                        Marketing Coordinator
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-md border border-gray-200 bg-white">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “This is a top quality product. No need to think twice
                      before making it live on web.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="mb-8 h-0 w-full border-t-2 border-dotted border-gray-200"></div>
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg"
                      alt=""
                    />
                    <div className="ml-3 min-w-0">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Jane Cooper
                      </p>
                      <p className="truncate text-base text-gray-500">
                        Dog Trainer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-md border border-gray-200 bg-white">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “Finally, I’ve found a template that covers all bases for
                      a bootstrapped startup. We were able to launch in days,
                      not months.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="mb-8 h-0 w-full border-t-2 border-dotted border-gray-200"></div>
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg"
                      alt=""
                    />
                    <div className="ml-3 min-w-0">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Theresa Webb
                      </p>
                      <p className="truncate text-base text-gray-500">
                        Web Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-md border border-gray-200 bg-white">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “My new site is so much faster and easier to work with
                      than my old site. I just choose the page, make the change
                      and click save.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="mb-8 h-0 w-full border-t-2 border-dotted border-gray-200"></div>
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg"
                      alt=""
                    />
                    <div className="ml-3 min-w-0">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Darlene Robertson
                      </p>
                      <p className="truncate text-base text-gray-500">
                        Medical Assistant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-md border border-gray-200 bg-white">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “You made it so simple. My new site is so much faster and
                      easier to work with than my old site. I just choose the
                      page, make the change and click save.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="mb-8 h-0 w-full border-t-2 border-dotted border-gray-200"></div>
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg"
                      alt=""
                    />
                    <div className="ml-3 min-w-0">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Floyd Miles
                      </p>
                      <p className="truncate text-base text-gray-500">
                        Nursing Assistant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Pricing & Plans
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2">
            <div className="rounded-md border-4 border-transparent bg-white">
              <div className="p-6 md:px-9 md:py-10">
                <div className="inline-block rounded-full bg-gray-100 px-4 py-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Standard
                  </h3>
                </div>
                <p className="mt-5 text-5xl font-bold text-black">$29</p>
                <p className="mt-2 text-base text-gray-600">Per month</p>

                <ul className="mt-8 flex flex-col space-y-4">
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      1 Domain License{" "}
                    </span>
                    <svg
                      className="ml-0.5 h-4 w-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      Full Celebration Library{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      120+ Coded Blocks{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-400">
                      {" "}
                      Design Files Included{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-400">
                      {" "}
                      Premium Support{" "}
                    </span>
                  </li>
                </ul>

                <a
                  href="#"
                  title=""
                  className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-gray-800 px-4 py-4 font-semibold text-white transition-all duration-200 hover:bg-gray-600 focus:bg-gray-600"
                  role="button"
                >
                  {" "}
                  Get 14 Days Free Trial{" "}
                </a>

                <p className="mt-5 text-sm text-gray-500">
                  No Credit Card Required
                </p>
              </div>
            </div>

            <div className="rounded-md border-4 border-blue-600 bg-white">
              <div className="p-6 md:px-9 md:py-10">
                <div className="inline-block rounded-full bg-blue-100 px-4 py-2">
                  <h3 className="text-sm font-semibold text-blue-600">
                    Premium
                  </h3>
                </div>
                <p className="mt-5 text-5xl font-bold text-black">$49</p>
                <p className="mt-2 text-base text-gray-600">Per month</p>

                <ul className="mt-8 flex flex-col space-y-4">
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      Unlimited Domain License{" "}
                    </span>
                    <svg
                      className="ml-0.5 h-4 w-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      Full Celebration Library{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      120+ Coded Blocks{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      Design Files Included{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {" "}
                      Premium Support{" "}
                    </span>
                  </li>
                </ul>

                <a
                  href="#"
                  title=""
                  className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 px-4 py-4 font-semibold text-white transition-all duration-200 hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Get 14 Days Free Trial{" "}
                </a>

                <p className="mt-5 text-sm text-gray-500">
                  No Credit Card Required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-24">
            <div>
              <img
                className="mx-auto w-full max-w-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/2/services-icons.png"
                alt=""
              />
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Grow business with connections.
              </h2>
              <p className="mt-6 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <a
                href="#"
                title=""
                className="mt-9 inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                {" "}
                Check all 1486 apps{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Meet the brains
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-0 gap-y-8 text-center sm:mt-16 sm:grid-cols-4 lg:mt-20 lg:grid-cols-9">
            <div>
              <img
                className="mx-auto h-28 w-28 rounded-lg object-cover"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-1.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Jenny Wilson
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Founder
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <img
                className="mx-auto h-28 w-28 rounded-lg object-cover"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-2.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Darrell Steward
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">CTO</p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <img
                className="mx-auto h-28 w-28 rounded-lg object-cover"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-3.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Bessie Cooper
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">CMO</p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <img
                className="mx-auto h-28 w-28 rounded-lg object-cover"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-4.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Arlene McCoy
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Senior Developer
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <img
                className="mx-auto h-28 w-28 rounded-lg object-cover"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-5.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Brooklyn Simmons
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Product Designer
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <img
                className="mx-auto h-28 w-28 rounded-lg object-cover"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-6.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Jerome Bell
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Customer Success
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <img
                className="mx-auto h-28 w-28 rounded-lg object-cover"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-7.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Dianne Russell
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Front-end Developer
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <img
                className="mx-auto h-28 w-28 rounded-lg object-cover"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-8.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Kristin Watson
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">H.R</p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <img
                className="mx-auto h-28 w-28 rounded-lg object-cover"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-9.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Eleanor Pena
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                UI Designer
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
              Trusted by world class companies, design teams & popular designers
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3 lg:mt-24">
            <div className="md:px-4 lg:px-10">
              <img
                className="-rotate-1"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg"
                alt=""
              />
              <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
                Join as a team
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>

            <div className="md:px-4 lg:px-10">
              <img
                className="rotate-1"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg"
                alt=""
              />
              <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
                Work from anywhere
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>

            <div className="md:px-4 lg:px-10">
              <img
                className="-rotate-1"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg"
                alt=""
              />
              <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
                Get success
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center">
              <div className="-mr-6 h-20 w-20 overflow-hidden rounded-full bg-gray-300">
                <img
                  className="h-full w-full object-cover"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg"
                  alt=""
                />
              </div>

              <div className="relative h-28 w-28 overflow-hidden rounded-full border-8 border-white bg-gray-300">
                <img
                  className="h-full w-full object-cover"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg"
                  alt=""
                />
              </div>

              <div className="-ml-6 h-20 w-20 overflow-hidden rounded-full bg-gray-300">
                <img
                  className="h-full w-full object-cover"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg"
                  alt=""
                />
              </div>
            </div>

            <h2 className="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
              Join <span className="border-b-8 border-yellow-300">5,482</span>{" "}
              other developers
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-xl text-gray-600 md:mt-10">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>

            <a
              href="#"
              title=""
              className="mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-4 font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 lg:mt-12"
              role="button"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Get instant access
            </a>
          </div>
        </div>
      </section>
      <section className="relative bg-gray-900 py-10 sm:py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/2/man-eating-noodles.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gray-900/20"></div>

        <div className="relative mx-auto max-w-lg px-4 sm:px-0">
          <div className="overflow-hidden rounded-md bg-white shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  Welcome back
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Don’t have one?{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline"
                  >
                    Create a free account
                  </a>
                </p>
              </div>

              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter email to get started"
                        className="block w-full rounded-md border border-gray-200 bg-white p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Password{" "}
                      </label>

                      <a
                        href="#"
                        title=""
                        className="text-sm font-medium text-rose-500 transition-all duration-200 hover:text-rose-600 hover:underline focus:text-rose-600"
                      >
                        {" "}
                        Forgot password?{" "}
                      </a>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Enter your password"
                        className="block w-full rounded-md border border-gray-200 bg-white p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
                    >
                      Log in
                    </button>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="relative inline-flex w-full items-center justify-center rounded-md border-2 border-gray-200 bg-white px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                    >
                      <div className="absolute inset-y-0 left-0 p-4">
                        <svg
                          className="h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                        </svg>
                      </div>
                      Sign in with Google
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-y-12 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-5 xl:grid-cols-6">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
                1 team.
                <br />
                6+ years.
                <br />
                300+ projects.
                <br />
              </h2>
              <p className="mt-6 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>

            <div className="lg:col-span-3 xl:col-span-4">
              <div className="mx-auto grid max-w-4xl grid-cols-2 items-center gap-x-10 gap-y-16 lg:grid-cols-4">
                <div>
                  <img
                    className="mx-auto h-6 w-full object-contain"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="mx-auto h-8 w-full object-contain"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="mx-auto h-8 w-full object-contain"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="mx-auto h-7 w-full object-contain"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="mx-auto h-8 w-full object-contain"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="mx-auto h-8 w-full object-contain"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="mx-auto h-8 w-full object-contain"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="mx-auto h-8 w-full object-contain"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="mx-auto h-8 w-full object-contain"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="mx-auto h-7 w-full object-contain"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="mx-auto h-8 w-full object-contain"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png"
                    alt=""
                  />
                </div>

                <div className="hidden lg:block">
                  <img
                    className="mx-auto h-8 w-full object-contain"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-10 flex items-center justify-start space-x-3 lg:hidden">
                <div className="block h-2.5 w-2.5 rounded-full bg-blue-600"></div>
                <div className="block h-2.5 w-2.5 rounded-full bg-gray-300"></div>
                <div className="block h-2.5 w-2.5 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 items-center gap-10 sm:grid-cols-3 sm:gap-y-16 xl:grid-cols-6">
            <div>
              <img
                className="mx-auto h-14 w-auto object-contain"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-1.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="mx-auto h-14 w-auto object-contain"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-2.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="mx-auto h-14 w-auto object-contain"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="mx-auto h-14 w-auto object-contain"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-4.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="mx-auto h-14 w-auto object-contain"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-5.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="mx-auto h-14 w-auto object-contain"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-6.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-10 lg:py-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-x-16 gap-y-12 lg:grid-cols-2 xl:gap-x-24">
            <div className="h-full pr-12 lg:order-2 lg:mb-40">
              <div className="relative h-full lg:h-auto">
                <div className="absolute left-12 top-12 -mb-12 h-full w-full overflow-hidden bg-gradient-to-r from-fuchsia-600 to-blue-600 lg:top-0 lg:origin-top lg:scale-y-105 xl:left-16">
                  <img
                    className="h-full w-full scale-150 object-cover object-right"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg"
                    alt=""
                  />
                </div>
                <div className="relative lg:-top-12">
                  <img
                    className=""
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/girl-drinking-coffee.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-start py-10 sm:py-16 lg:order-1 lg:py-24 xl:py-48">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                  Why Should your choose?
                </p>
                <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                  Get work done, fast!
                </h2>
                <p className="mt-9 text-xl leading-relaxed text-gray-200">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia conse duis enim velit mollit.
                  Exercitation veniam.
                </p>
                <p className="mt-6 text-xl leading-relaxed text-gray-200">
                  Velit officia conse duis enim velit mollit. Exercit ation
                  veniam consequat sunt nostrud amet.
                </p>
                <a
                  href="#"
                  title=""
                  className="mt-12 inline-flex items-center justify-center rounded-md bg-blue-600 px-10 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700"
                  role="button"
                >
                  {" "}
                  Explore more{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-gray-900 py-10 sm:py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/2/woman-working-laptop.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gray-900/20"></div>

        <div className="relative mx-auto max-w-lg px-4 sm:px-0">
          <div className="overflow-hidden rounded-md bg-white shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  Create an account
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Already joined?{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline"
                  >
                    Sign in now
                  </a>
                </p>
              </div>

              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      First & Last name{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your full name"
                        className="block w-full rounded-md border border-gray-200 bg-white p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter email to get started"
                        className="block w-full rounded-md border border-gray-200 bg-white p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Enter your password"
                        className="block w-full rounded-md border border-gray-200 bg-white p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
                    >
                      Sign up
                    </button>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="relative inline-flex w-full items-center justify-center rounded-md border-2 border-gray-200 bg-white px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                    >
                      <div className="absolute inset-y-0 left-0 p-4">
                        <svg
                          className="h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                        </svg>
                      </div>
                      Sign up with Google
                    </button>
                  </div>
                </div>
              </form>

              <p className="mx-auto mt-5 max-w-xs text-center text-sm text-gray-600">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                &
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-left sm:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Get full access to Celebration
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div className="mt-8 space-y-8 sm:mt-12 sm:flex sm:items-start sm:justify-center sm:space-x-12 sm:space-y-0 md:space-x-20 lg:mt-20">
            <div className="flex items-start">
              <svg
                className="h-7 w-7 flex-shrink-0 text-orange-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-black">
                  130+ Blocks
                </h3>
                <p className="mt-1.5 text-base text-gray-600">Ready to use</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="h-7 w-7 flex-shrink-0 text-orange-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-black">14 Pages</h3>
                <p className="mt-1.5 text-base text-gray-600">Make it live</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="h-7 w-7 flex-shrink-0 text-orange-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-black">
                  Easy Access
                </h3>
                <p className="mt-1.5 text-base text-gray-600">Anyone can use</p>
              </div>
            </div>
          </div>

          <form action="#" method="POST" className="mx-auto mt-12 max-w-xl">
            <div className="sm:rounded-full sm:border-2 sm:border-transparent sm:bg-white sm:p-2 sm:focus-within:border-blue-600 sm:focus-within:ring-1 sm:focus-within:ring-blue-600">
              <div className="flex flex-col items-start sm:flex-row sm:justify-center">
                <div className="w-full min-w-0 flex-1">
                  <div className="relative text-gray-400 focus-within:text-gray-600">
                    <label htmlFor="email" className="sr-only"></label>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email address"
                      className="block w-full rounded-full border-transparent py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-transparent focus:ring-0"
                      required=""
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 inline-flex w-auto items-center justify-center rounded-full border border-transparent bg-blue-600 px-4 py-4 font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 sm:ml-4 sm:mt-0 sm:w-auto"
                >
                  Get instant access
                  <svg
                    className="-mr-1 ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>

          <div className="mt-8 flex items-center justify-start sm:justify-center sm:px-0">
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
            <span className="ml-2 text-sm text-gray-600">
              {" "}
              Your data is complely secured with us. We don’t share with anyone.{" "}
            </span>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              3,583 Customers are using Celebration
            </h2>
          </div>

          <div className="mt-12 bg-white px-5 py-8 lg:mt-20 lg:p-16">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16">
              <div className="flex items-start">
                <svg
                  className="h-16 w-16 flex-shrink-0 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-black">
                    Made for Developers
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="h-16 w-16 flex-shrink-0 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-black">
                    Helpful Video Tutorials
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="h-16 w-16 flex-shrink-0 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-black">
                    120+ Coded Blocks
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="h-16 w-16 flex-shrink-0 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-black">
                    Secured Payments
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg md:text-center lg:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              I am building a product that can
              <span className="relative inline-block">
                <span className="absolute bottom-1.5 inline-block h-2 w-full bg-yellow-300"></span>
                <span className="relative"> solve developer’s pain </span>
              </span>
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 md:mt-20 md:grid-cols-2">
            <div>
              <img
                className="mx-auto w-full sm:max-w-xs"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg"
                alt=""
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Hey! I am John, founder of Celebration.
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <h3 className="mt-8 text-lg font-semibold text-gray-900">
                How do I do this without any investment?
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Stories from blog
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-200">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-6 lg:mt-16 lg:max-w-full lg:grid-cols-3 lg:gap-14">
            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md">
              <div className="flex flex-1 flex-col justify-between px-5 py-6">
                <div className="flex-shrink-0">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-orange-500">
                    {" "}
                    Lifestyle{" "}
                  </span>
                </div>

                <div className="mt-28 flex-1">
                  <p className="text-2xl font-semibold">
                    <a href="#" title="" className="text-black">
                      {" "}
                      Power of habit: How to learn anything in 30 days.{" "}
                    </a>
                  </p>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200">
                <div className="flex">
                  <div className="flex flex-1 items-center px-6 py-5">
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-1.jpg"
                      alt=""
                    />
                    <span className="ml-3 block min-w-0 flex-1 truncate text-base font-semibold text-gray-900">
                      {" "}
                      Wade Warren{" "}
                    </span>
                  </div>

                  <a
                    href="#"
                    title=""
                    className="inline-flex flex-shrink-0 items-center border-l border-gray-200 bg-white px-4 py-5 text-base font-semibold transition-all duration-200 hover:bg-blue-600 hover:text-white"
                  >
                    Read more
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md">
              <div className="flex flex-1 flex-col justify-between px-5 py-6">
                <div className="flex-shrink-0">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-orange-500">
                    {" "}
                    Technology{" "}
                  </span>
                </div>

                <div className="mt-28 flex-1">
                  <p className="text-2xl font-semibold">
                    <a href="#" title="" className="text-black">
                      {" "}
                      10 Zoom hacks you can do for productive meetings.{" "}
                    </a>
                  </p>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200">
                <div className="flex">
                  <div className="flex flex-1 items-center px-6 py-5">
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-2.jpg"
                      alt=""
                    />
                    <span className="ml-3 block min-w-0 flex-1 truncate text-base font-semibold text-gray-900">
                      {" "}
                      Leslie Alexander{" "}
                    </span>
                  </div>

                  <a
                    href="#"
                    title=""
                    className="inline-flex flex-shrink-0 items-center border-l border-gray-200 bg-white px-4 py-5 text-base font-semibold transition-all duration-200 hover:bg-blue-600 hover:text-white"
                  >
                    Read more
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md">
              <div className="flex flex-1 flex-col justify-between px-5 py-6">
                <div className="flex-shrink-0">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-orange-500">
                    {" "}
                    Marketing{" "}
                  </span>
                </div>

                <div className="mt-28 flex-1">
                  <p className="text-2xl font-semibold">
                    <a href="#" title="" className="text-black">
                      {" "}
                      6 Product launching emails you want to use next.{" "}
                    </a>
                  </p>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200">
                <div className="flex">
                  <div className="flex flex-1 items-center px-6 py-5">
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-3.jpg"
                      alt=""
                    />
                    <span className="ml-3 block min-w-0 flex-1 truncate text-base font-semibold text-gray-900">
                      {" "}
                      Jenny Wilson{" "}
                    </span>
                  </div>

                  <a
                    href="#"
                    title=""
                    className="inline-flex flex-shrink-0 items-center border-l border-gray-200 bg-white px-4 py-5 text-base font-semibold transition-all duration-200 hover:bg-blue-600 hover:text-white"
                  >
                    Read more
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Choose a plan
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-sm sm:mt-16">
            <div className="space-y-3">
              <div className="overflow-hidden rounded-md border-2 border-gray-200 bg-white transition-all duration-200 hover:bg-gray-50">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div>
                      <input
                        type="checkbox"
                        name="plan"
                        id="monthlyPlan"
                        className="h-5 w-5 rounded-full border-gray-500 text-blue-600"
                      />
                    </div>
                    <label htmlFor="monthlyPlan" className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        $29/month
                      </p>
                      <p className="text-sm text-gray-600">
                        Simple monthly billing
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-md border-2 border-blue-600 bg-white transition-all duration-200 hover:bg-gray-50">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div>
                      <input
                        type="checkbox"
                        name="plan"
                        id="yearlyPlan"
                        className="h-5 w-5 rounded-full border-gray-500 text-blue-600"
                      />
                    </div>
                    <label htmlFor="yearlyPlan" className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        $19/month
                      </p>
                      <p className="text-sm text-gray-600">
                        $228 billed in a year
                      </p>
                    </label>
                    <span className="inline-block rounded-full border border-green-600 bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
                      {" "}
                      Save 20%{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              title=""
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 px-12 py-4 font-semibold text-white transition-all duration-200 hover:opacity-80 focus:opacity-80"
              role="button"
            >
              {" "}
              Start Building Website{" "}
            </a>

            <p className="mt-5 text-center text-base text-gray-600">
              Confused?{" "}
              <a
                href="#"
                title=""
                className="font-medium text-black hover:underline"
              >
                Check all features
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              What our customers say
            </h2>

            <div className="mt-20">
              <blockquote>
                <p className="text-2xl leading-relaxed text-black md:text-3xl md:leading-relaxed">
                  “You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change and click save. No need to think twice before
                  making it”
                </p>
              </blockquote>
              <div className="mt-16 flex items-center">
                <p className="text-lg font-semibold text-black">Jenny Wilson</p>
                <p className="ml-3 text-lg text-gray-600">Co-founder, Appson</p>
              </div>
            </div>

            <div className="mt-12 flex items-center space-x-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-full ring-2 ring-fuchsia-600">
                <img
                  className="h-20 w-20 rounded-full object-cover"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-1.jpg"
                  alt=""
                />
              </div>

              <div className="flex h-24 w-24 items-center justify-center rounded-full ring-2 ring-transparent">
                <img
                  className="h-20 w-20 rounded-full object-cover"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-2.jpg"
                  alt=""
                />
              </div>

              <div className="flex h-24 w-24 items-center justify-center rounded-full ring-2 ring-transparent">
                <img
                  className="h-20 w-20 rounded-full object-cover"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="relative h-48 w-48 flex-shrink-0">
              <div className="absolute -bottom-2 -right-1 h-48 w-48 rounded-full bg-gray-300"></div>
              <img
                className="relative h-48 w-48 rounded-full object-cover"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/2/avatar.jpg"
                alt=""
              />
            </div>

            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-black">
                  “Amet minim mollit non deserunt ullam co est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.”
                </p>
              </blockquote>
              <p className="mt-7 text-lg font-semibold text-black">
                Jenny Wilson
              </p>
              <p className="mt-1 text-base text-gray-600">
                Project Manager at Microsoft
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">
              <span className="border-b-4 border-yellow-400">
                {" "}
                Trusted by 1200+ world class businesses{" "}
              </span>
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-24 gap-y-10 text-center md:mt-24 md:grid-cols-2">
            <div>
              <div className="flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-8 w-8 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-8 w-8 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-8 w-8 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <blockquote className="mt-7">
                <p className="text-xl leading-relaxed text-gray-800">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam”
                </p>
              </blockquote>

              <img
                className="mx-auto mt-6 h-8 w-auto md:mt-10"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/6/slack.svg"
                alt=""
              />
            </div>

            <div>
              <div className="flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-8 w-8 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-8 w-8 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-8 w-8 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-8 w-8 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <blockquote className="mt-7">
                <p className="text-xl leading-relaxed text-gray-800">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam”
                </p>
              </blockquote>

              <img
                className="mx-auto mt-6 h-8 w-auto md:mt-10"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/6/trivago.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
            <div>
              <img
                className="h-16 w-16 rounded-full object-cover"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/9/female-avatar-1.png"
                alt=""
              />
              <blockquote>
                <p className="mt-6 text-xl leading-relaxed text-black">
                  “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.”
                </p>
              </blockquote>
              <p className="mt-6 text-base font-semibold text-black">
                Jenny Wilson
              </p>
              <p className="mt-1 text-base text-gray-600">
                Project Manager at Microsoft
              </p>
            </div>

            <div>
              <div className="overflow-hidden bg-white">
                <div className="p-8 lg:px-12 lg:py-10">
                  <h3 className="text-2xl font-semibold text-black">
                    Join 5,482 other developers
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis.
                  </p>

                  <a
                    href="#"
                    title=""
                    className="mt-8 flex w-full items-center justify-center rounded-md border-2 border-transparent bg-blue-600 px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700"
                    role="button"
                  >
                    Create your first website
                  </a>

                  <a
                    href="#"
                    title=""
                    className="mt-4 flex w-full items-center justify-center rounded-md border-2 border-black bg-transparent px-4 py-4 text-base font-semibold text-black transition-all duration-200 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                    role="button"
                  >
                    Talk to sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img
              className="mx-auto h-32 w-32 rounded-full object-cover"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg"
              alt=""
            />
            <p className="mt-6 text-lg font-semibold text-black">
              Mark Tanker,{" "}
              <span className="font-normal text-gray-600">California</span>
            </p>
            <blockquote className="mx-auto mt-7 max-w-xl">
              <p className="text-xl leading-relaxed text-black">
                “Amet minim mollit non deserunt ullam co est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
