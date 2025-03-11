import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../ui/Button.jsx"

const CtaSection = () => {
  return (
    <section className="py-12 md:py-16 ">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Find Your Dream Rental?</h2>
        <p className=" max-w-2xl mx-auto mb-6 md:mb-8">
          Join thousands of satisfied tenants who found their perfect home with RentEase.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Link to="/houses">
            <Button variant="secondary" size="lg" className="group">
              Browse Properties
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant="outline"
              size="lg"
              className="hover:text-purple-600 group"
            >
              Sign Up Now
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CtaSection

