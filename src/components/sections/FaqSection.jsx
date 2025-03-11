"use client"

import { ArrowRight, Minus, Plus } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FAQS } from "../../constants/index.jsx"
import Button from "../ui/Button.jsx"

const FaqSection = () => {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <section className="py-12 md:py-16 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 e mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300">Find answers to common questions about using RentEase</p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {FAQS.slice(0, 6).map((faq, index) => (
            <div
              key={faq.id}
              className="border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-3 md:p-4 text-left bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300"
              >
                <span className="font-medium text-zinc-900 dark:text-white text-sm md:text-base">{faq.question}</span>
                <span className="ml-4 flex-shrink-0">
                  {expandedFaq === index ? (
                    <Minus size={16} className="text-purple-600 dark:text-purple-400" />
                  ) : (
                    <Plus size={16} className="text-zinc-500 dark:text-zinc-400" />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-3 md:p-4 bg-neutral-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-sm md:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-8">

        </div>
      </div>
    </section>
  )
}

export default FaqSection

