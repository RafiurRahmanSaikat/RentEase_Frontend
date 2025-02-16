import {
  Advertisement,
  Contact,
  CustomersFeedack,
  FAQ,
  Features,
  Hero,
  HowDoesItWorks,
  Stat,
} from "..";

export default function Home() {
  return (
    <section className="relative">
      <Hero />
      <Advertisement />
      <CustomersFeedack />
      <Stat />
      <HowDoesItWorks />
      <Features />
      <Contact />
      <FAQ />
    </section>
  );
}
