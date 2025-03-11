
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
  icon = null,
}) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-200 flex items-center justify-center"

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl",
    secondary: "bg-neutral-50 border border-gray-300 text-gray-700 hover:bg-gray-50",
    success:
      "bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-600 hover:to-green-600 shadow-lg hover:shadow-xl",
    danger:
      "bg-gradient-to-r from-red-500 to-rose-500 text-white hover:from-red-600 hover:to-rose-600 shadow-lg hover:shadow-xl",
    outline: "bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-50",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  }

  const sizeStyles = {
    sm: "text-xs py-2 px-3",
    md: "text-sm py-2.5 px-5",
    lg: "text-base py-3 px-6",
    xl: "text-lg py-4 px-8",
  }

  const widthStyle = fullWidth ? "w-full" : ""
  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  )
}

export default Button

