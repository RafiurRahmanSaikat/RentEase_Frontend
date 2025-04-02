import { Card } from "../ui";

const Timeline = ({ items }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-purple-200 dark:bg-purple-900/30"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <div className="absolute left-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-white bg-purple-600 dark:border-zinc-800 dark:bg-purple-500"></div>

            {/* Content */}
            <div
              className={`flex flex-col items-center md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="p-4 md:w-1/2"></div>
              <div className="p-4 md:w-1/2">
                <Card className="border-0 p-6 shadow-lg dark:bg-zinc-700/50">
                  <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                    {item.year}
                  </span>
                  <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    {item.description}
                  </p>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
