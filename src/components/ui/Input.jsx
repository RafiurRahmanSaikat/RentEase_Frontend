import { forwardRef } from "react"

const Input = forwardRef(
  (
    {
      type = "text",
      label,
      name,
      value,
      onChange,
      placeholder,
      error,
      required = false,
      disabled = false,
      className = "",
      icon = null,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="mb-4">
        {label && (
          <label htmlFor={name} className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="relative">
          {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>}
          <input
            ref={ref}
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={`
            w-full rounded-lg border border-zinc-300 dark:border-zinc-700
            bg-neutral-50 dark:bg-zinc-800
            text-zinc-900 dark:text-zinc-100
            px-4 py-2.5
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
            disabled:bg-zinc-100 disabled:text-zinc-500 dark:disabled:bg-zinc-700
            transition-colors duration-200
            ${icon ? "pl-10" : ""}
            ${error ? "border-red-500 focus:ring-red-500" : ""}
            ${className}
          `}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  },
)

Input.displayName = "Input"

export default Input

