import { Advertisement, Contact, FAQ, Hero } from "..";

export default function Home() {
  return (
    <section className="relative">
      <Hero />
      <Advertisement />
      <Contact />
      <FAQ />
      {/* <Test /> */}
    </section>
  );
}
