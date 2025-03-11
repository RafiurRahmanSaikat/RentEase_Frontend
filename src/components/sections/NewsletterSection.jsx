import { Mail } from "lucide-react"
import { NEWSLETTER } from "../../constants/index.jsx"
import Button from "../ui/Button.jsx"

const NewsletterSection = () => {
  return (
    <section className="py-12 md:py-16 ">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{NEWSLETTER.title}</h2>
        <p className=" max-w-2xl mx-auto mb-6 md:mb-8">{NEWSLETTER.description}</p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
        <input
                    type="text"
                    placeholder={NEWSLETTER.placeholder}

                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-lg"
                  />
          {/* <input
            type="email"
            placeholder={NEWSLETTER.placeholder}
            className="flex-1 px-4 py-2 md:py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"

          /> */}
          <Button type="submit" className="whitespace-nowrap">
            <Mail size={18} className="mr-2" />
            {NEWSLETTER.buttonText}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection

