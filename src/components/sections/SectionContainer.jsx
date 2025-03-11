const SectionContainer = ({ children, className = "", dark = false, centered = false, title = "", subtitle = "" }) => {

    return (
      <section className={`py-16 bg-zinc-50 dark:bg-zinc-900 ${className}`}>
        <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
          {(title || subtitle) && (
            <div className={`${centered ? "text-center" : ""} mb-12`}>
              {title && <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">{title}</h2>}
              {subtitle && <p className="text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">{subtitle}</p>}
            </div>
          )}
          {children}
        </div>
      </section>
    )
  }

  export default SectionContainer

