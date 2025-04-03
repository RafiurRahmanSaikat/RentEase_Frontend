import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";

const Select = forwardRef(
  (
    {
      label,
      name,
      value,
      onChange,
      options = [],
      placeholder = "Select an option",
      error,
      required = false,
      disabled = false,
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <div className="mb-4">
        {label && (
          <label
            htmlFor={name}
            className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`w-full appearance-none rounded-lg border border-zinc-300 bg-neutral-50 px-4 py-2.5 text-zinc-900 transition-colors duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-zinc-100 disabled:text-zinc-500 dark:border-zinc-700 dark:bg-zinc-700 dark:text-zinc-100 dark:disabled:bg-zinc-700 ${error ? "border-red-500 focus:ring-red-500" : ""} ${className} `}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown size={18} className="text-zinc-500" />
          </div>
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
