import { FAQS } from "../../constants";
import { Faq } from "../ui";

const FaqSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="e mb-4 text-2xl font-bold md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            Find answers to common questions about using RentEase
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          <Faq questions={FAQS} />
        </div>

        <div className="mt-6 text-center md:mt-8"></div>
      </div>
    </section>
  );
};

export default FaqSection;
