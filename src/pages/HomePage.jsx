// Import all section components
import BenefitsSection from "../components/sections/BenefitsSection.jsx"
import CtaSection from "../components/sections/CtaSection.jsx"
import FaqSection from "../components/sections/FaqSection.jsx"
import FeaturedPropertiesSection from "../components/sections/FeaturedPropertiesSection.jsx"
import FeaturesSection from "../components/sections/FeaturesSection.jsx"
import HeroSection from "../components/sections/HeroSection.jsx"
import HowItWorksSection from "../components/sections/HowItWorksSection.jsx"
import MobileAppSection from "../components/sections/MobileAppSection.jsx"
import NewsletterSection from "../components/sections/NewsletterSection.jsx"
import PopularLocationsSection from "../components/sections/PopularLocationsSection.jsx"
import StatsSection from "../components/sections/StatsSection.jsx"
import TestimonialsSection from "../components/sections/TestimonialsSection.jsx"

const HomePage = () => {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900/90 dark:text-zinc-200 text-zinc-800 ">
      {/* Hero Section with Search and Carousel */}
      <HeroSection />

      {/* Featured Properties Section */}
      <FeaturedPropertiesSection />

      {/* Popular Locations Section */}
      <PopularLocationsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Mobile App Section */}
      <MobileAppSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    {/* Statistics Section */}
    <StatsSection />
      {/* CTA Section */}
      <CtaSection />
    </div>
  )
}

export default HomePage
