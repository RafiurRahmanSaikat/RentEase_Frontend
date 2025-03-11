import React from 'react';
import { FEATURES } from '../../constants/index.jsx';
import Card from '../ui/Card.jsx';

const FeaturesSection = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose RentEase</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide a seamless rental experience with features designed to make your journey easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <Card key={feature.id} className="p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
              <div className={`w-16 h-16 ${feature.color.split(' ')[0]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <feature.icon size={28} className={feature.color.split(' ')[1]} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
