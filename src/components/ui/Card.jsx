
const Card = ({
  children,
  className = "",
  hover = false,
  bordered = true,
  shadow = true,
  padding = true,
  onClick = null,
}) => {
  const baseStyles = "rounded-xl overflow-hidden bg-neutral-50 dark:bg-zinc-800 transition-all duration-200"
  const hoverStyles = hover ? "hover:shadow-xl hover:-translate-y-1" : ""
  const borderStyles = bordered ? "border border-zinc-200 dark:border-zinc-700" : ""
  const shadowStyles = shadow ? "shadow-md" : ""
  const paddingStyles = padding ? "p-5" : ""
  const clickableStyles = onClick ? "cursor-pointer" : ""

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${borderStyles} ${shadowStyles} ${paddingStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card

