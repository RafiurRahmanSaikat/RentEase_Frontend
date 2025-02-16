import { AlarmClockCheck, CheckCircle, Truck } from "lucide-react";

const Features = () => {
  return (
    <section className="py-10 dark:text-white sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          <div>
            <div className="relative mx-auto flex items-center justify-center">
              <CheckCircle className="text-green-500" width="62" height="64" />
            </div>
            <h3 className="mt-8 text-lg font-semibold">Fast Delivery</h3>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-200">
              Quick and efficient service for all your rental needs.
            </p>
          </div>

          <div>
            <div className="relative mx-auto flex items-center justify-center">
              <AlarmClockCheck
                className="text-violet-500"
                width="72"
                height="75"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold">Secured Payments</h3>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-200">
              Safe and secure transactions for peace of mind.
            </p>
          </div>

          <div>
            <div className="relative mx-auto flex items-center justify-center">
              <Truck className="text-orange-400" width="62" height="65" />
            </div>
            <h3 className="mt-8 text-lg font-semibold">Fast & Easy to Load</h3>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-200">
              Effortless loading and unloading for your convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
