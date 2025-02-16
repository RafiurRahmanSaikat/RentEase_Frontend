import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Have questions? We’re here to assist with all your house buying,
          selling, and renting needs.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: Phone,
            label: "Phone",
            details: ["+1-316-555-0116", "+1-446-526-0117"],
          },
          {
            icon: Mail,
            label: "Email",
            details: ["contact@rentease.com", "support@rentease.com"],
          },
          {
            icon: MapPin,
            label: "Address",
            details: ["8502 Preston Rd, Ingle, Maine 98380, USA"],
          },
        ].map(({ icon: Icon, label, details }, index) => (
          <div
            key={index}
            className="flex transform flex-col items-center rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
          >
            <div className="flex items-center justify-center rounded-full bg-blue-100 p-4">
              <Icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
              {label}
            </h3>
            <div className="mt-3 space-y-1">
              {details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 dark:text-gray-300">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-4xl rounded-xl bg-white p-10 shadow-md dark:bg-gray-800">
        <h3 className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
          Send Us a Message
        </h3>
        <form className="mt-8 grid gap-6 sm:grid-cols-2">
          {["Full Name", "Email Address", "Phone Number", "Company Name"].map(
            (placeholder, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {placeholder}
                </label>
                <input
                  type={
                    placeholder.includes("Email")
                      ? "email"
                      : placeholder.includes("Phone")
                        ? "tel"
                        : "text"
                  }
                  placeholder={placeholder}
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition focus:border-blue-600 focus:ring focus:ring-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
              </div>
            ),
          )}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your message here"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition focus:border-blue-600 focus:ring focus:ring-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            ></textarea>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
