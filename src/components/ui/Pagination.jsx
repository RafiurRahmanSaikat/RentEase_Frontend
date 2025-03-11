 import { ChevronLeft, ChevronRight } from "lucide-react"

const Pagination = ({ currentPage, totalPages, onPageChange, siblingCount = 1, className = "" }) => {
  // Generate page numbers to show
  const getPageNumbers = () => {
    const totalNumbers = siblingCount * 2 + 3 // siblings + current + first + last
    const totalBlocks = totalNumbers + 2 // +2 for the "..." blocks

    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 1 + 2 * siblingCount
      return [...Array.from({ length: leftItemCount }, (_, i) => i + 1), "...", totalPages]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 1 + 2 * siblingCount
      return [1, "...", ...Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1)]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      return [
        1,
        "...",
        ...Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i),
        "...",
        totalPages,
      ]
    }
  }

  const pages = getPageNumbers()

  if (totalPages <= 1) return null

  return (
    <nav className={`flex justify-center mt-8 ${className}`}>
      <ul className="flex items-center -space-x-px">
        <li>
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-10 ml-0 leading-tight text-zinc-500 bg-neutral-50 border border-zinc-300 rounded-l-lg hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
          </button>
        </li>

        {pages?.map((page, index) => {
          if (page === "...") {
            return (
              <li key={`ellipsis-${index}`}>
                <span className="flex items-center justify-center px-4 h-10 leading-tight text-zinc-500 bg-neutral-50 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400">
                  ...
                </span>
              </li>
            )
          }

          return (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={`
                  flex items-center justify-center px-4 h-10 leading-tight border
                  ${
                    currentPage === page
                      ? "text-white bg-purple-600 border-purple-600 dark:bg-purple-700 dark:border-purple-700"
                      : "text-zinc-500 bg-neutral-50 border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
                  }
                `}
              >
                {page}
              </button>
            </li>
          )
        })}

        <li>
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-10 leading-tight text-zinc-500 bg-neutral-50 border border-zinc-300 rounded-r-lg hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination

