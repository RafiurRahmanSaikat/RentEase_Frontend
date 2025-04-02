import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui";

const CtaSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[90vw] px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Ready to Find Your Dream Rental?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl md:mb-8">
          Join thousands of satisfied tenants who found their perfect home with
          RentEase.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row md:gap-4">
          <Link to="/houses">
            <Button variant="secondary" size="lg" className="group">
              Browse Properties
              <ArrowRight
                size={16}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant="outline"
              size="lg"
              className="group hover:text-purple-600"
            >
              Sign Up Now
              <ArrowRight
                size={16}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
