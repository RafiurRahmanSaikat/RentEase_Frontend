const Badge = ({ children, variant = "primary", size = "md", rounded = true, className = "" }) => {
  const baseStyles = "inline-flex items-center font-medium"

  const variantStyles = {
    primary: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  }

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-0.5",
    lg: "text-base px-3 py-1",
  }

  const roundedStyle = rounded ? "rounded-full" : "rounded"

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${roundedStyle} ${className}`}>
      {children}
    </span>
  )
}

export default Badge

