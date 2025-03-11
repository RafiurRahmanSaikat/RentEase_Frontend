
import { forwardRef } from "react"

const Textarea = forwardRef(
  (
    {
      label,
      name,
      value,
      onChange,
      placeholder,
      error,
      required = false,
      disabled = false,
      className = "",
      rows = 4,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="mb-4">
        {label && (
          <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          className={`
          w-full rounded-lg border border-gray-300 dark:border-gray-700
          bg-neutral-50 dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          px-4 py-2.5
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
          disabled:bg-gray-100 disabled:text-gray-500 dark:disabled:bg-gray-700
          transition-colors duration-200
          ${error ? "border-red-500 focus:ring-red-500" : ""}
          ${className}
        `}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  },
)

Textarea.displayName = "Textarea"

export default Textarea

