// StatsCard.jsx
export const StatsCard = ({ title, value, colorClass }) => (
  <div className="transform rounded-xl bg-white p-8 text-gray-800 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 dark:text-white">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-3 text-4xl font-bold">{value}</p>
  </div>
);
