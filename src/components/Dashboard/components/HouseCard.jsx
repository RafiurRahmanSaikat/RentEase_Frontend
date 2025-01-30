import { FaEdit } from "react-icons/fa";

// HouseCard.jsx
export const HouseCard = ({ house, onAdvertise, onEdit }) => (
  <div className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-4">
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
          <img
            src={house.image}
            alt={house.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold">{house.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {house.location}
          </p>
          <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
            {house.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
          ${house.price}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => onAdvertise(house.id)}
            className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              house.is_advertised
                ? "cursor-not-allowed bg-gray-100 text-gray-500"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            disabled={house.is_advertised}
          >
            {house.is_advertised ? "Listed" : "Advertise"}
          </button>
          {!house.is_advertised && (
            <>
              <button
                onClick={() => onEdit(house)}
                className="inline-flex items-center rounded-lg bg-yellow-500 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-yellow-600"
              >
                <FaEdit className="mr-1.5 h-3 w-3" />
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);
