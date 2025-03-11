import Card from "../ui/Card.jsx"

const Timeline = ({ items }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 dark:bg-purple-900/30"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-600 dark:bg-purple-500 border-4 border-white dark:border-zinc-800 z-10"></div>

            {/* Content */}
            <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="md:w-1/2 p-4"></div>
              <div className="md:w-1/2 p-4">
                <Card className="p-6 border-0 shadow-lg dark:bg-zinc-700/50">
                  <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-300">{item.description}</p>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline

