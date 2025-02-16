const HowDoesItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Join Rentease",
      description:
        "Sign up for free and access thousands of property listings for buying, selling, or renting.",
    },
    {
      number: 2,
      title: "Browse & List",
      description:
        "Search for your dream home or list your property with ease using our user-friendly platform.",
    },
    {
      number: 3,
      title: "Connect & Close",
      description:
        "Engage with trusted agents and property owners to finalize your deal seamlessly.",
    },
  ];

  return (
    <section className="bg-gray-50 py-10 dark:bg-gray-900 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
          How Rentease Works
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-gray-600 dark:text-gray-300">
          Experience a seamless journey for buying, selling, and renting
          properties.
        </p>
        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 top-2 hidden md:block md:px-20 lg:px-28 xl:px-44">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt="Steps"
            />
          </div>
          <div className="relative grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-gray-50 shadow dark:border-gray-600 dark:bg-gray-800">
                  <span className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-gray-50 md:mt-10">
                  {step.title}
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWorks;
