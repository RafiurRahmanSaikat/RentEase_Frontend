import { STATISTICS } from "../../constants";

const StatsSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {STATISTICS.map((stat) => (
            <div
              key={stat.id}
              className="rounded-lg bg-zinc-50 p-4 text-center shadow-md transition-all duration-300 hover:shadow-lg dark:bg-zinc-800/50 md:p-6"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 md:mb-4 md:h-12 md:w-12">
                <stat.icon
                  size={24}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white md:mb-2 md:text-3xl">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
