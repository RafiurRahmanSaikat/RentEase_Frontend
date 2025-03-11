
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from "lucide-react"
import { useEffect, useState } from "react"

const Toast = ({ message, type = "success", duration = 3000, onClose, position = "bottom-right" }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onClose()
      }, 300) // Wait for fade out animation
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  const icons = {
    success: <CheckCircle size={20} className="text-green-500" />,
    error: <AlertCircle size={20} className="text-red-500" />,
    info: <Info size={20} className="text-blue-500" />,
    warning: <AlertTriangle size={20} className="text-yellow-500" />,
  }

  const bgColors = {
    success: "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800",
    error: "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800",
    info: "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800",
    warning: "bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800",
  }

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  }

  return (
    <div
      className={`
        fixed ${positionClasses[position]} z-50
        flex items-center p-4 mb-4 w-full max-w-xs
        rounded-lg shadow border
        ${bgColors[type]}
        transition-opacity duration-300
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
      role="alert"
    >
      <div className="inline-flex flex-shrink-0 mr-3">{icons[type]}</div>
      <div className="text-sm font-normal text-gray-800 dark:text-gray-200">{message}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-transparent text-gray-500 hover:text-gray-700 rounded-lg p-1.5 inline-flex h-8 w-8 focus:outline-none"
        onClick={handleClose}
      >
        <X size={16} />
      </button>
    </div>
  )
}

export default Toast

