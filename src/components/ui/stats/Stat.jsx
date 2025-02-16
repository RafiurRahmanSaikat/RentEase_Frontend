const Stat = () => {
  const stats = [
    {
      value: "8+",
      label: "Years of Excellence",
      description: "Delivering trusted property solutions",
    },
    {
      value: "5000+",
      label: "Properties Listed",
      description: "Find your dream home with us",
    },
    {
      value: "1200+",
      label: "Successful Deals",
      description: "Connecting buyers, sellers, and renters",
    },
  ];

  return (
    <section className="bg-gray-50 py-10 dark:bg-gray-900 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
          Our Impact in Numbers
        </h2>
        <p className="mt-3 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
          Connecting people with their perfect property since day one.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:gap-x-8 md:grid-cols-3 lg:mt-24">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-7xl font-bold text-transparent">
                {stat.value}
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900 dark:text-gray-50">
                {stat.label}
              </p>
              <p className="mt-0.5 text-base text-gray-500 dark:text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stat;
