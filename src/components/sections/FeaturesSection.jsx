import React from "react";
import { FEATURES } from "../../constants";
import { Card } from "../ui";

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Why Choose RentEase
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
            We provide a seamless rental experience with features designed to
            make your journey easier
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <Card
              key={feature.id}
              className="h-full border border-gray-100 p-6 text-center transition-all duration-300 hover:shadow-lg dark:border-gray-700"
            >
              <div
                className={`h-16 w-16 ${feature.color.split(" ")[0]} mx-auto mb-4 flex items-center justify-center rounded-full`}
              >
                <feature.icon
                  size={28}
                  className={feature.color.split(" ")[1]}
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
