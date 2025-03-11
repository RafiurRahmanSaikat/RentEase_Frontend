import { forwardRef } from "react";

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
          <label
            htmlFor={name}
            className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={`w-full rounded-lg border border-zinc-300 bg-neutral-50 px-4 py-2.5 text-zinc-900 transition-colors duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-zinc-100 disabled:text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:disabled:bg-zinc-700 ${icon ? "pl-10" : ""} ${error ? "border-red-500 focus:ring-red-500" : ""} ${className} `}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
