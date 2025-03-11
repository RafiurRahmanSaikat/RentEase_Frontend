import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CardGrid from "../components/sections/CardGrid.jsx";
import SectionContainer from "../components/sections/SectionContainer.jsx";
import Timeline from "../components/sections/Timeline.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import { ABOUT_US } from "../constants/index.jsx";

const HeroSection = ({ title, subtitle, image, className = "" }) => {
  return (
    <section className={`relative overflow-hidden py-20 md:py-32 ${className}`}>
      <div className="absolute inset-0 z-0">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-zinc-900/70"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="mb-6 animate-fade-in text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="animate-slide-up text-xl text-white/90">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={ABOUT_US.hero.title}
        subtitle={ABOUT_US.hero.subtitle}
        image={ABOUT_US.hero.image || "/placeholder.svg"}
      />

      {/* Mission & Vision Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Card className="h-full border-0 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl dark:bg-zinc-800">
            <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
              {ABOUT_US.mission.title}
            </h2>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">
              {ABOUT_US.mission.description}
            </p>
          </Card>

          <Card className="h-full border-0 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl dark:bg-zinc-700/50">
            <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
              {ABOUT_US.vision.title}
            </h2>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">
              {ABOUT_US.vision.description}
            </p>
          </Card>
        </div>
      </SectionContainer>

      {/* Our Story Section */}
      <SectionContainer dark>
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="mb-6 text-2xl font-bold text-zinc-100 dark:text-white md:text-3xl">
              {ABOUT_US.story.title}
            </h2>
            <p className="mb-6 leading-relaxed text-zinc-300 dark:text-zinc-300">
              {ABOUT_US.story.description}
            </p>
            <Link to="/contact">
              <Button className="group">
                Contact Us{" "}
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-indigo-600/20 blur-xl"></div>
              <img
                src={ABOUT_US.story.image || "/placeholder.svg"}
                alt="Our Story"
                className="relative w-full rounded-xl border border-zinc-200 shadow-2xl dark:border-zinc-700"
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Our Values Section */}
      <SectionContainer
        title="Our Values"
        subtitle="These core principles guide everything we do at RentEase"
        centered
      >
        <CardGrid
          items={ABOUT_US.values}
          columns={4}
          renderItem={(value, index) => (
            <Card
              key={index}
              className="border-0 p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-zinc-700/50"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <value.icon
                  size={28}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">
                {value.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                {value.description}
              </p>
            </Card>
          )}
        />
      </SectionContainer>

      {/* Our Team Section */}
      <SectionContainer
        dark
        title="Meet Our Team"
        subtitle="The passionate people behind RentEase"
        centered
      >
        <CardGrid
          items={ABOUT_US.team}
          columns={4}
          renderItem={(member, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-zinc-800/50"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mb-2 font-medium text-purple-600 dark:text-purple-400">
                  {member.role}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {member.bio}
                </p>
              </div>
            </Card>
          )}
        />
      </SectionContainer>

      {/* Timeline Section */}
      <SectionContainer
        title="Our Journey"
        subtitle="Key milestones in the RentEase story"
        centered
      >
        <Timeline items={ABOUT_US.achievements} />
      </SectionContainer>
    </div>
  );
};

export default AboutPage;
