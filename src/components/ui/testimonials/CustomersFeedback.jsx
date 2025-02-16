const testimonials = [
  {
    name: "Darrell Steward",
    username: "@darrels",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg",
    feedback: "Rentease made my house rental process so easy and efficient!",
    hashtag: "#happycustomer",
  },
  {
    name: "Leslie Alexander",
    username: "@lesslie",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg",
    feedback:
      "The team at Rentease helped me find my dream home quickly and effortlessly.",
    hashtag: "#dreamhome",
  },
  {
    name: "Jenny Wilson",
    username: "@jennywilson",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg",
    feedback:
      "I had a fantastic experience renting through Rentease. Highly recommend!",
    hashtag: "#rentalexperience",
  },
  {
    name: "Kristin Watson",
    username: "@kristinwatson2",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg",
    feedback:
      "Rentease made the process of selling my house seamless and stress-free.",
    hashtag: "#stressfree",
  },
];

const CustomersFeedback = () => {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-bold">What Our Customers Say</h2>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-100">
          Hear from our satisfied clients.
        </p>
        <div className="mt-10 grid gap-6 text-gray-800 sm:grid-cols-2 md:grid-cols-4">
          {testimonials.map(
            ({ name, username, image, feedback, hashtag }, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={image}
                    alt={name}
                  />
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-gray-500">{username}</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-gray-700">
                  {feedback}
                </blockquote>
                <span className="mt-2 block font-semibold text-blue-500">
                  {hashtag}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
export default CustomersFeedback;
