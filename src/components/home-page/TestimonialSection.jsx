import React from "react";
// import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    message: "This service is amazing! Highly recommend to everyone.",
  },
  {
    name: "Jane Smith",
    role: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    message: "Great experience, very satisfied with the product.",
  },
  {
    name: "Mike Johnson",
    role: "Developer",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    message: "Exceptional quality and fast delivery!",
  },
];

const TestimonialSection = () => {
  return (
    <section className="px-[10%] py-12 bg-rose-50">
      <div className=" mx-auto pb-4 ">
        <h1 className="py-8 text-center text-4xl max-sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-rose-400 to-fuchsia-400">
          What Our Clients Say
        </h1>
        <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

const TestimonialCard = ({ name, role, avatar, rating, message }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row items-center gap-4 hover:shadow-xl transition-shadow duration-300">
      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-rose-500"
      />

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center gap-1 text-yellow-400">
            {Array(rating)
              .fill(0)
              .map((_, idx) => (
                <svg
                  key={idx}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.951c.3.922-.755 1.688-1.54 1.118l-3.36-2.439a1 1 0 00-1.175 0l-3.36 2.439c-.784.57-1.838-.196-1.539-1.118l1.285-3.951a1 1 0 00-.364-1.118L2.035 9.378c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                </svg>
              ))}
          </div>
        </div>
        <p className="text-gray-600">{role}</p>
        <p className="mt-2 text-gray-700">{message}</p>
      </div>
    </div>
  );
};
