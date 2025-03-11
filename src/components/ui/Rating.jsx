 import { Star } from "lucide-react"

const Rating = ({ value, onChange, size = "md", readOnly = false, count = 5, className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const handleClick = (index) => {
    if (!readOnly && onChange) {
      onChange(index)
    }
  }

  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(count)].map((_, index) => {
        const starValue = index + 1
        return (
          <Star
            key={index}
            className={`
              ${sizeClasses[size]}
              ${starValue <= value ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}
              ${!readOnly ? "cursor-pointer" : ""}
              mr-1
            `}
            onClick={() => handleClick(starValue)}
          />
        )
      })}
    </div>
  )
}

export default Rating

