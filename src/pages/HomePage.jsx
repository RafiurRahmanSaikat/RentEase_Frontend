import {
  BenefitsSection,
  CtaSection,
  FaqSection,
  FeaturedPropertiesSection,
  FeaturesSection,
  HeroSection,
  HowItWorksSection,
  MobileAppSection,
  PopularLocationsSection,
  StatsSection,
  TestimonialsSection,
} from "../components";

const HomePage = () => {
  return (
    <div className="bg-zinc-50 text-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200">
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

      {/* Statistics Section */}
      <StatsSection />
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default HomePage;
