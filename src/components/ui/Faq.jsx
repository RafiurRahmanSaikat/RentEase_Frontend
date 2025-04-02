"use client"

import { useState } from "react"

const Faq = ({ questions }) => {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {questions.map((faq, index) => (
        <div
          key={index}
          className="border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => toggleFaq(index)}
            className="flex justify-between items-center w-full p-4 text-left bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors duration-300"
          >
            <span className="font-medium text-zinc-900 dark:text-white">{faq.question}</span>
            <span className="ml-6 flex-shrink-0">
              {expandedFaq === index ? (
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Faq

