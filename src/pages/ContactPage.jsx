import ContactForm from "../components/sections/ContactForm.jsx"
import ContactInfo from "../components/sections/ContactInfo.jsx"
import Faq from "../components/sections/Faq.jsx"
import HeroSection from "../components/sections/HeroSection.jsx"
import MapSection from "../components/sections/MapSection.jsx"
import SectionContainer from "../components/sections/SectionContainer.jsx"
import { CONTACT_US } from "../constants/index.jsx"

const ContactPage = () => {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={CONTACT_US.hero.title}
        subtitle={CONTACT_US.hero.subtitle}
        image={CONTACT_US.hero.image || "/placeholder.svg"}
      />

      {/* Contact Info & Form Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
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
      <SectionContainer dark title={CONTACT_US.faq.title} subtitle={CONTACT_US.faq.subtitle} centered>
        <div className="max-w-4xl mx-auto">
          <Faq questions={CONTACT_US.faq.questions} />
        </div>
      </SectionContainer>

      {/* Map Section */}
      <SectionContainer title={CONTACT_US.map.title} subtitle={CONTACT_US.map.subtitle} centered>
        <MapSection location={CONTACT_US.map.location} />
      </SectionContainer>
    </div>
  )
}

export default ContactPage

