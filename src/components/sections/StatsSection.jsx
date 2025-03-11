import { STATISTICS } from "../../constants/index.jsx"

const StatsSection = () => {
  return (
    <section className="py-12 md:py-16 ">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {STATISTICS.map((stat) => (
            <div
              key={stat.id}
              className="text-center p-4 md:p-6 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mx-auto flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-3 md:mb-4">
                <stat.icon size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2">{stat.value}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

