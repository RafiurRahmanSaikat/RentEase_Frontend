import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import CardGrid from "../components/sections/CardGrid.jsx"
import SectionContainer from "../components/sections/SectionContainer.jsx"
import Timeline from "../components/sections/Timeline.jsx"
import Button from "../components/ui/Button.jsx"
import Card from "../components/ui/Card.jsx"
import { ABOUT_US } from "../constants/index.jsx"

const HeroSection = ({ title, subtitle, image, className = "" }) => {
  return (
    <section className={`relative py-20 md:py-32 overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-zinc-900/70"></div>
      </div>

      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">{title}</h1>
          <p className="text-xl text-white/90 animate-slide-up">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}


const AboutPage = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <HeroSection
        title={ABOUT_US.hero.title}
        subtitle={ABOUT_US.hero.subtitle}
        image={ABOUT_US.hero.image || "/placeholder.svg"}
      />

      {/* Mission & Vision Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <Card className="p-8 border-0 shadow-xl dark:bg-zinc-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              {ABOUT_US.mission.title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{ABOUT_US.mission.description}</p>
          </Card>

          <Card className="p-8 border-0 shadow-xl dark:bg-zinc-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              {ABOUT_US.vision.title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{ABOUT_US.vision.description}</p>
          </Card>
        </div>
      </SectionContainer>

      {/* Our Story Section */}
      <SectionContainer dark>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 dark:text-white mb-6">
              {ABOUT_US.story.title}
            </h2>
            <p className="text-zinc-300 dark:text-zinc-300 leading-relaxed mb-6">{ABOUT_US.story.description}</p>
            <Link to="/contact">
              <Button className="group">
                Contact Us{" "}
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl blur-xl"></div>
              <img
                src={ABOUT_US.story.image || "/placeholder.svg"}
                alt="Our Story"
                className="relative rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-700 w-full"
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Our Values Section */}
      <SectionContainer title="Our Values" subtitle="These core principles guide everything we do at RentEase" centered>
        <CardGrid
          items={ABOUT_US.values}
          columns={4}
          renderItem={(value, index) => (
            <Card
              key={index}
              className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-zinc-700/50"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon size={28} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">{value.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-300">{value.description}</p>
            </Card>
          )}
        />
      </SectionContainer>

      {/* Our Team Section */}
      <SectionContainer dark title="Meet Our Team" subtitle="The passionate people behind RentEase" centered>
        <CardGrid
          items={ABOUT_US.team}
          columns={4}
          renderItem={(member, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-zinc-800/50 group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{member.role}</p>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm">{member.bio}</p>
              </div>
            </Card>
          )}
        />
      </SectionContainer>

      {/* Timeline Section */}
      <SectionContainer title="Our Journey" subtitle="Key milestones in the RentEase story" centered>
        <Timeline items={ABOUT_US.achievements} />
      </SectionContainer>




      {/* CTA Section */}
      <CtaSection />

    </div>
  )
}

export default AboutPage

