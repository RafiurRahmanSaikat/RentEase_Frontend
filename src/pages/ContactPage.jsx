import {
  ContactForm,
  ContactInfo,
  Faq,
  HeroSection,
  MapSection,
  SectionContainer,
} from "../components";
import { CONTACT_US } from "../constants";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      {/* Hero Section */}
      <HeroSection
        title={CONTACT_US.hero.title}
        subtitle={CONTACT_US.hero.subtitle}
        image={CONTACT_US.hero.image || "/placeholder.svg"}
      />

      {/* Contact Info & Form Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-6 lg:col-span-1">
            <ContactInfo info={CONTACT_US.info} />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm
              title={CONTACT_US.form.title}
              subtitle={CONTACT_US.form.subtitle}
              submitText={CONTACT_US.form.submitText}
            />
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer
        dark
        title={CONTACT_US.faq.title}
        subtitle={CONTACT_US.faq.subtitle}
        centered
      >
        <div className="mx-auto max-w-4xl">
          <Faq questions={CONTACT_US.faq.questions} />
        </div>
      </SectionContainer>

      {/* Map Section */}
      <SectionContainer
        title={CONTACT_US.map.title}
        subtitle={CONTACT_US.map.subtitle}
        centered
      >
        <MapSection location={CONTACT_US.map.location} />
      </SectionContainer>
    </div>
  );
};

export default ContactPage;
